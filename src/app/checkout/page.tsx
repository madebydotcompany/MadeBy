import { CheckoutPage } from "@/components/checkout/checkout-page";
import { getProduct } from "@/features/products/data";
export default function CheckoutRoute({ searchParams }: { searchParams: { product?: string } }) { const product = getProduct(searchParams.product ?? "low-moon-bowl") ?? getProduct("low-moon-bowl")!; return <CheckoutPage fallbackLine={{ id: product.slug, productSlug: product.slug, name: product.name, unitPrice: product.price, quantity: 1, image: product.gallery[0] }} />; }
