import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";

const sans = DM_Sans({ subsets: ["latin"], variable: "--font-sans" });
const display = Playfair_Display({ subsets: ["latin"], variable: "--font-display" });
export const metadata: Metadata = { title: "StudioVerse — A beautiful home for creators", description: "Discover the stories, studios, and works behind independent creativity." };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en" suppressHydrationWarning><body className={`${sans.variable} ${display.variable}`}><ThemeProvider>{children}</ThemeProvider></body></html>; }
