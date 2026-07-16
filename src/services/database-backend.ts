import { Prisma } from "@prisma/client";
import type { CartLine } from "@/features/products/types";
import { prisma } from "@/services/prisma";

const demoClerkId = "demo_ellen_roberts";
type Json = Prisma.InputJsonValue;

export async function currentUserId() {
  const user = await prisma.user.findUnique({ where: { clerkId: demoClerkId }, select: { id: true } });
  if (!user) throw new Error("The database has not been seeded. Run npm run db:seed.");
  return user.id;
}

async function productForSlug(slug: string) {
  return prisma.product.findUnique({ where: { slug } });
}

function cartLine(product: { id: string; slug: string; name: string; price: number; media: Prisma.JsonValue }, line: { id: string; quantity: number; configuration: Prisma.JsonValue | null }): CartLine {
  const media = Array.isArray(product.media) ? product.media : [];
  const config = line.configuration && typeof line.configuration === "object" && !Array.isArray(line.configuration) ? line.configuration as Record<string, string> : undefined;
  return { id: line.id, productSlug: product.slug, name: product.name, unitPrice: product.price, quantity: line.quantity, image: typeof media[0] === "string" ? media[0] : "", customisation: config };
}

export const databaseBackend = {
  async cartList(userId?: string) {
    const id = userId ?? await currentUserId();
    const cart = await prisma.cart.findUnique({ where: { userId: id }, include: { lines: { where: { savedForLater: false } } } });
    if (!cart) return [];
    const products = await prisma.product.findMany({ where: { id: { in: cart.lines.map(line => line.productId) } } });
    return cart.lines.flatMap(line => { const product = products.find(item => item.id === line.productId); return product ? [cartLine(product, line)] : []; });
  },
  async cartAdd(input: CartLine, userId?: string) {
    const id = userId ?? await currentUserId();
    const product = await productForSlug(input.productSlug);
    if (!product || product.status !== "PUBLISHED") throw new Error("This product is no longer available");
    const cart = await prisma.cart.upsert({ where: { userId: id }, update: {}, create: { userId: id, currency: product.currency } });
    await prisma.cartLine.upsert({
      where: { cartId_productId: { cartId: cart.id, productId: product.id } },
      update: { quantity: { increment: input.quantity }, savedForLater: false, configuration: (input.customisation ?? undefined) as Json | undefined },
      create: { cartId: cart.id, productId: product.id, quantity: input.quantity, configuration: (input.customisation ?? undefined) as Json | undefined },
    });
    return this.cartList(id);
  },
  async cartUpdate(lineId: string, quantity: number, userId?: string) {
    const id = userId ?? await currentUserId();
    const cart = await prisma.cart.findUnique({ where: { userId: id } });
    if (!cart) return [];
    const line = await prisma.cartLine.findFirst({ where: { id: lineId, cartId: cart.id } });
    if (!line) throw new Error("Cart line not found");
    if (quantity < 1) await prisma.cartLine.delete({ where: { id: line.id } }); else await prisma.cartLine.update({ where: { id: line.id }, data: { quantity } });
    return this.cartList(id);
  },
  async cartRemove(lineId: string, userId?: string) { return this.cartUpdate(lineId, 0, userId); },
  async wishlist(userId?: string) {
    const id = userId ?? await currentUserId();
    const likes = await prisma.socialAction.findMany({ where: { userId: id, targetType: "PRODUCT", action: "WISHLIST" } });
    const products = await prisma.product.findMany({ where: { id: { in: likes.map(item => item.targetId) } }, select: { slug: true } });
    return products.map(item => item.slug);
  },
  async wishlistToggle(slug: string, userId?: string) {
    const id = userId ?? await currentUserId(); const product = await productForSlug(slug);
    if (!product) throw new Error("Product not found");
    const key = { userId_targetType_targetId_action: { userId: id, targetType: "PRODUCT", targetId: product.id, action: "WISHLIST" } };
    const found = await prisma.socialAction.findUnique({ where: key });
    if (found) await prisma.socialAction.delete({ where: { id: found.id } }); else await prisma.socialAction.create({ data: { userId: id, targetType: "PRODUCT", targetId: product.id, action: "WISHLIST" } });
    return this.wishlist(id);
  },
  async orders(userId?: string) {
    const id = userId ?? await currentUserId();
    const orders = await prisma.order.findMany({ where: { buyerId: id }, orderBy: { createdAt: "desc" } });
    return Promise.all(orders.map(async order => ({ ...order, lines: await prisma.orderItem.findMany({ where: { orderId: order.id } }) })));
  },
  async createOrder(address?: Record<string, string>, userId?: string) {
    const id = userId ?? await currentUserId();
    const cart = await prisma.cart.findUnique({ where: { userId: id }, include: { lines: { where: { savedForLater: false } } } });
    if (!cart?.lines.length) throw new Error("Cart is empty");
    const products = await prisma.product.findMany({ where: { id: { in: cart.lines.map(line => line.productId) } } });
    // Orders remain studio-specific so creators retain a clear fulfilment queue.
    const result = await Promise.all(cart.lines.map(async line => {
      const product = products.find(item => item.id === line.productId); if (!product) throw new Error("A cart product is unavailable");
      const subtotal = product.price * line.quantity;
      const order = await prisma.order.create({ data: { buyerId: id, studioId: product.studioId, subtotal, total: subtotal, currency: product.currency, shippingAddress: (address ?? undefined) as Json | undefined, metadata: { checkout: "demo" } } });
      await prisma.orderItem.create({ data: { orderId: order.id, productId: product.id, name: product.name, quantity: line.quantity, unitPrice: product.price, configuration: line.configuration as Json | undefined } });
      return order;
    }));
    await prisma.cartLine.deleteMany({ where: { cartId: cart.id, savedForLater: false } });
    return result;
  },
  async notifications(userId?: string) { const id = userId ?? await currentUserId(); return prisma.notification.findMany({ where: { userId: id }, orderBy: { createdAt: "desc" } }); },
  async customRequests(studioSlug?: string, userId?: string) {
    const id = userId ?? await currentUserId();
    const studio = studioSlug ? await prisma.studio.findUnique({ where: { slug: studioSlug }, select: { id: true } }) : null;
    return prisma.customizationRequest.findMany({ where: studio ? { studioId: studio.id } : { userId: id }, orderBy: { createdAt: "desc" } });
  },
  async createCustomRequest(input: { studioSlug: string; description: string; budget?: string; deadline?: string; notes?: string }, userId?: string) {
    const id = userId ?? await currentUserId();
    const studio = await prisma.studio.findUnique({ where: { slug: input.studioSlug } });
    if (!studio) throw new Error("Studio not found");
    const product = await prisma.product.findFirst({ where: { studioId: studio.id, status: "PUBLISHED" }, orderBy: { createdAt: "asc" } });
    if (!product) throw new Error("This studio has no available products");
    const deadline = input.deadline ? new Date(input.deadline) : undefined;
    return prisma.customizationRequest.create({ data: { productId: product.id, studioId: studio.id, userId: id, notes: input.notes, estimatedDelivery: deadline && !Number.isNaN(deadline.valueOf()) ? deadline : undefined, selections: { description: input.description, budget: input.budget ?? null } } });
  },
};
