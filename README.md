# StudioVerse

> The most beautiful home on the internet for creative people.

StudioVerse is a creator-first platform where independent artists own a beautiful digital studio. Rather than treating creativity as a collection of product listings, the product places the **Studio** at the centre: an artist’s identity, portfolio, story, community, and storefront in one considered space.

The discovery journey is intentional: **Studio → Story → Collection → Product**. Visitors are invited to encounter creative worlds before commerce enters the conversation.

## Phase 1 — Foundation

This repository establishes the visual and technical foundation only. It includes a premium responsive landing experience, light/dark theme support, navigation and footer primitives, shared buttons, loading and empty states, and friendly error routes. No authentication, database, payments, or business workflows are implemented yet.

### Design direction

- Editorial layouts with generous whitespace and statement typography
- A warm, gallery-like palette with soft elevation and restrained motion
- Accessible focus treatment, semantic landmarks, responsive behavior, and theme-aware color tokens
- Inspired by the clarity of Apple and Linear, the warmth of Airbnb, and the visual discovery of Behance and Pinterest

## Stack

- Next.js App Router + TypeScript
- Tailwind CSS + shadcn-compatible UI primitives
- Framer Motion for subtle interaction
- `next-themes` for dark and light modes

Planned integrations are represented by environment placeholders: Clerk, Prisma/PostgreSQL, Cloudinary, and Stripe.

## Architecture

The project is designed to grow by feature rather than by technical layer:

```
src/
  app/                 # Routes, layout, global fallbacks
  components/          # Reusable UI and layout components
  features/            # Domain modules (studios, collections, products, etc.)
  hooks/               # Shared React hooks
  lib/                 # Cross-cutting utilities and configuration
  services/            # External service clients
  types/               # Shared domain types
prisma/                # Database schema and migrations (Phase 2)
```

Future feature boundaries: `studios`, `products`, `collections`, `blogs`, `reels`, `dashboard` (named **Studio OS** in the product), `auth`, `checkout`, and `community`.

## Phase 2 — Public discovery experience

The public experience now includes a discovery-led editorial homepage, plus dedicated **Explore** and **Categories** routes. Its featured content includes trending and recently opened Studios, categories, a highlighted collection, limited drops, and artist stories. Content is realistic placeholder data in `src/features/discovery/data.ts`, deliberately structured around artists and their creative practice rather than a shopping catalogue.

## Getting started

1. Install Node.js 20+.
2. Install dependencies with `npm install`.
3. Copy `.env.example` to `.env.local` when you are ready to connect services.
4. Start the project with `npm run dev`.

## Product language

StudioVerse consistently uses **Studio** rather than “seller” and **Studio OS** rather than “Artist Dashboard.” These words reinforce the platform’s belief that a creator is building a creative practice—not simply managing a shop.

## Next phases

- Clerk authentication and Studio onboarding
- Prisma schema for users, studios, collections, products, and community entities
- Studio pages and story-led product presentation
- Social interactions, cart, checkout, and Studio OS
- Media management through Cloudinary and payment workflows through Stripe
