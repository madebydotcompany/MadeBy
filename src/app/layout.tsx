import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { CartProvider } from "@/features/cart/cart-provider";
import { MockProvider } from "@/features/commerce/mock-provider";

export const metadata: Metadata = { title: { default: "StudioVerse — A beautiful home for creators", template: "%s · StudioVerse" }, description: "Discover the stories, studios, and works behind independent creativity.", applicationName: "StudioVerse", robots: { index: true, follow: true }, openGraph: { type: "website", siteName: "StudioVerse", title: "StudioVerse", description: "A beautiful home for creators." } };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en" suppressHydrationWarning><body><ThemeProvider><MockProvider><CartProvider>{children}</CartProvider></MockProvider></ThemeProvider></body></html>; }
