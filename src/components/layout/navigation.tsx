import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";

const navItems = [{ label: "Explore", href: "/explore" }, { label: "Categories", href: "/categories" }, { label: "Stories", href: "/#stories" }, { label: "Collections", href: "/#collections" }];
export function Navigation() { return <header className="sticky top-0 z-30 border-b border-line/60 bg-canvas/85 backdrop-blur-xl"><nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8" aria-label="Main navigation"><Link href="/" className="font-display text-2xl tracking-tight">StudioVerse<span className="text-accent">.</span></Link><div className="hidden items-center gap-7 md:flex">{navItems.map((item) => <Link className="text-sm text-muted transition hover:text-ink" href={item.href} key={item.label}>{item.label}</Link>)}</div><div className="flex items-center gap-2"><ThemeToggle /><Button variant="quiet" className="hidden sm:inline-flex">Sign in</Button><Button size="sm">Create your Studio</Button></div></nav></header>; }
