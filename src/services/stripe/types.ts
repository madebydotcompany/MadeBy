import type { CartLine } from "@/features/products/types";

// This boundary lets a future Stripe adapter create checkout sessions without coupling UI to Stripe.
export type CheckoutSessionInput = { lines: CartLine[]; successUrl: string; cancelUrl: string };
export type CheckoutSession = { id: string; url: string };
export interface PaymentGateway { createCheckoutSession(input: CheckoutSessionInput): Promise<CheckoutSession>; }
