import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const media = "https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=1200&q=85";

async function main() {
  const mira = await prisma.user.upsert({ where: { email: "mira@studioverse.demo" }, update: { name: "Mira Kato", role: "ARTIST", clerkId: "demo_mira_kato" }, create: { email: "mira@studioverse.demo", clerkId: "demo_mira_kato", name: "Mira Kato", role: "ARTIST", bio: "Ceramic artist in Tokyo." } });
  const collector = await prisma.user.upsert({ where: { email: "ellen@studioverse.demo" }, update: { name: "Ellen Roberts", clerkId: "demo_ellen_roberts" }, create: { email: "ellen@studioverse.demo", clerkId: "demo_ellen_roberts", name: "Ellen Roberts", role: "USER" } });
  const studio = await prisma.studio.upsert({ where: { slug: "mira-kato" }, update: { ownerId: mira.id, name: "Mira Kato", status: "ACTIVE", isVerified: true }, create: { ownerId: mira.id, slug: "mira-kato", name: "Mira Kato", bio: "Quiet ceramic objects for daily rituals.", location: "Setagaya, Tokyo", status: "ACTIVE", isVerified: true, theme: { accent: "#bd5335", wash: "#f1e3d5" } } });
  const collection = await prisma.collection.upsert({ where: { slug: "the-slow-table" }, update: { studioId: studio.id }, create: { studioId: studio.id, slug: "the-slow-table", name: "The slow table", description: "Objects for unhurried gatherings.", coverImage: media } });
  const bowl = await prisma.product.upsert({ where: { slug: "low-moon-bowl" }, update: { studioId: studio.id, collectionId: collection.id, status: "PUBLISHED" }, create: { studioId: studio.id, collectionId: collection.id, slug: "low-moon-bowl", name: "Low moon bowl", description: "A low, generous bowl for the centre of the table.", type: "MADE_ON_DEMAND", status: "PUBLISHED", price: 96, inventory: 8, media: [media], configuration: { colors: ["Ash white", "Warm sand"], sizes: ["17 cm", "21 cm"] } } });
  await prisma.product.upsert({ where: { slug: "everyday-cup-ash" }, update: { studioId: studio.id, collectionId: collection.id, status: "PUBLISHED" }, create: { studioId: studio.id, collectionId: collection.id, slug: "everyday-cup-ash", name: "Everyday cup, ash", description: "A hand-thrown cup for slow mornings.", type: "READY_MADE", status: "PUBLISHED", price: 58, inventory: 14, media: [media] } });
  await prisma.blog.upsert({ where: { slug: "notes-from-a-quieter-kiln" }, update: { studioId: studio.id, status: "PUBLISHED" }, create: { studioId: studio.id, slug: "notes-from-a-quieter-kiln", title: "Notes from a quieter kiln", body: "A studio note on patience, firing, and everyday objects.", status: "PUBLISHED", publishedAt: new Date() } });
  await prisma.video.create({ data: { studioId: studio.id, title: "The making of a cup", url: "https://example.com/reels/making-a-cup", thumbnailUrl: media, duration: 204 } }).catch(() => undefined);
  await prisma.socialAction.upsert({ where: { userId_targetType_targetId_action: { userId: collector.id, targetType: "PRODUCT", targetId: bowl.id, action: "LIKE" } }, update: {}, create: { userId: collector.id, targetType: "PRODUCT", targetId: bowl.id, action: "LIKE" } });
  await prisma.blankProduct.upsert({ where: { sku: "SV-TOTE-NATURAL" }, update: { active: true }, create: { sku: "SV-TOTE-NATURAL", name: "Natural tote", description: "Heavy canvas tote ready for artwork.", category: "Carry goods", basePrice: 1400, variants: [{ color: "Natural", size: "One size" }], printAreas: ["Front", "Back"], images: [media] } });
  await prisma.blankProduct.upsert({ where: { sku: "SV-HOODIE-HEAVY" }, update: { active: true }, create: { sku: "SV-HOODIE-HEAVY", name: "Heavyweight hoodie", description: "Premium fleece hoodie for print-on-demand collections.", category: "Apparel", basePrice: 3100, variants: [{ color: "Oat", size: "S" }, { color: "Oat", size: "M" }], printAreas: ["Chest", "Back"], images: [media] } });
  console.log("Seeded StudioVerse MongoDB sample data.");
}

main().catch(error => { console.error(error); process.exit(1); }).finally(() => prisma.$disconnect());
