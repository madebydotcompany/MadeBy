# StudioVerse product review

## Launch verdict

StudioVerse has a distinctive visual premise and the strongest public-facing pages begin with an artist's world rather than a catalogue. It is not ready for a public marketplace launch yet. The current application is a polished static prototype: the most important social, commerce, identity, and administrative interactions are client-only demonstrations and cannot safely handle real users or money.

## What is working

- The public visual language is cohesive: editorial typography, generous space, a warm palette, and story-first Studio and product layouts.
- Studio pages put artist identity and process before buying. Product pages explain material, process, and collection before price and conversion.
- The Studio OS, community, marketplace, and admin areas establish understandable information architecture and useful empty-state tone.
- The first navigation/route pass now links public discovery, community, creator tools, messages, marketplace, and privacy without placeholder footer paths.

## Critical before launch

1. **Authentication and authorization.** Clerk configuration is only an environment placeholder. Add authenticated sessions, route middleware, ownership checks, RBAC for `ARTIST`, `MODERATOR`, and `ADMIN`, and server-side authorization on every mutation. `/admin` and `/studio-os` must not be public.
2. **Real data and mutations.** Likes, follows, comments, messages, customisation choices, cart state, admin actions, and dashboard values are currently local UI state or seeded data. Introduce typed server actions/API routes, validation, optimistic UI, error recovery, and Prisma persistence.
3. **Commerce correctness.** Implement a persistent cart, inventory reservation, tax/shipping calculation, order creation, Stripe PaymentIntent/webhook handling, idempotency, refunds, and transactional stock updates. Never represent a checkout as complete until the payment webhook confirms it.
4. **Prisma operational setup.** Add `prisma` and `@prisma/client`, run `prisma format` and `prisma validate`, generate an initial migration, seed only development data, and add connection pooling for serverless deployment.
5. **Safety and moderation.** Enforce product review, copyright workflows, image/file scanning, rate limits, reporting, audit logs, privacy policy/terms, consent, and account deletion/export. The admin UI must be backed by protected moderation queues.
6. **Production verification.** Install dependencies, run build/typecheck/lint, add route and mutation tests, then test key flows on mobile, keyboard-only, screen reader, slow network, and failure states.

## Important for V2

- Studio onboarding with profile completion, theme/media setup, publishing checklist, and creator education.
- Search with autocomplete, filters, accessible sorting, saved searches, and a discovery ranking strategy that privileges Studios over listings.
- Saved products/collections, notification preferences, unread state, message blocking/reporting, and complete activity feeds.
- Product availability, waitlists, shipping regions, customs/currency, order tracking, return policy, and customer order history.
- Per-route metadata, canonical URLs, Product/Organization/CreativeWork JSON-LD, social images, and analytics consent.
- A shared `Surface`/card, section header, action menu, form-field, and page-shell component. Several dashboard/community card and empty-state patterns are currently duplicated.

## Nice to have

- Collection collaboration, event RSVPs, curatorial lists, gift notes, studio subscriptions, and collector profiles.
- A creator media library, image focal-point editor, scheduling, and lightweight CRM.
- Rich dashboard filters and exportable analytics.

## Future vision

- AI jobs should run asynchronously with user consent, revision history, cost controls, moderation, and clear disclosure.
- Print-on-demand needs supplier adapters, print-area validation, fulfillment webhooks, tax handling, and sample ordering.
- Licensing, courses, and brand collaborations should use their existing domain records but require rights, contracts, entitlement, and payout models.
- Mobile clients should consume versioned APIs; push tokens already have a schema boundary but need device/session lifecycle handling.

## Architecture and performance recommendations

- Keep route components server-first. Isolate only the interactive controls into small client components; several current full-page components are client components despite mostly static content.
- Introduce feature-local `queries`, `actions`, `schemas`, and `components` directories. Validate external input with Zod or an equivalent schema layer.
- Add cache tags/revalidation for public Studio, collection, and product reads; use pagination/cursors for feeds, messages, notifications, and admin queues.
- Keep Next Image, but provide a media abstraction for Cloudinary transformations, blur placeholders, width presets, and accessible alt-text requirements.
- Add error/loading boundaries by route segment; retain global fallbacks for unexpected failures.
- Add observability: structured server logs, error tracking, performance traces, webhook monitoring, and audit events for moderation/admin actions.

## Design and interaction audit

- Continue using the Studio as the primary object: discovery cards should always link to a Studio before an object when both are available.
- Avoid extending product grids into generic commerce catalogues. Keep collection context, material, maker, and process visible at decision points.
- Use a compact mobile navigation/drawer before launch; the current public header hides its primary navigation below `md`.
- Replace typographic icon glyphs with an accessible, consistent icon set and add text labels/tooltips for non-obvious actions.
- Apply dark-mode review page by page. Token-based public views adapt, but hard-coded Studio, dashboard, admin, and marketplace colors need deliberate dark-theme decisions.
- Every mutation needs pending, success, disabled, empty, and error states. A pleasant empty state is not a substitute for a functional state.

## Founder test

The product has the beginnings of a memorable identity: it frames craft as a world worth entering. An artist could be proud of the visual direction, but should not yet be asked to run their business on it. The launch bar is reached when the beautiful surfaces are backed by trustworthy identity, publishing, messaging, commerce, moderation, and support operations—not when more screens are added.
