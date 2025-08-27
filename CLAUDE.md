# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

**Package Manager**: This project uses pnpm (specified in package.json)

- `pnpm dev` - Start development server with turbopack
- `pnpm build` - Build the application for production
- `pnpm start` - Start the production server
- `pnpm lint` - Run ESLint (Next.js linting)
- `pnpm format` - Format code with Prettier

**Database Commands**:
- Database migrations and schema management are handled through Drizzle ORM
- Schema is defined in `src/db/schema.ts`
- Configuration is in `drizzle.config.ts` with PostgreSQL dialect

## Architecture Overview

**Framework**: Next.js 15 with App Router
**Database**: PostgreSQL with Drizzle ORM
**Authentication**: Supabase Auth
**Payments**: Dual integration with Stripe and LemonSqueezy
**Email**: Mailgun integration
**UI**: TailwindCSS with Radix UI components
**Styling**: Custom component system in `src/components/ui/`

## Key Directories

- `src/app/` - Next.js App Router pages and API routes
  - `(site)/` - Landing page components
  - `api/` - API endpoints for webhooks (Stripe, LemonSqueezy, Mailgun)
  - `auth/` - Authentication pages and confirmation routes
  - `dashboard/` - Protected dashboard area
- `src/components/` - Reusable React components
  - `ui/` - Base UI components (buttons, cards, forms)
- `src/lib/` - Utility libraries and configurations
  - `supabase/` - Supabase client, server, and middleware setup
- `src/utils/` - Helper functions for various integrations
- `src/db/` - Database schema and connection

## Configuration Files

- `src/config.ts` - Application configuration including domain, email settings
- `middleware.ts` - Next.js middleware (likely for auth)
- `components.json` - Shadcn/ui component configuration
- Docker configurations available in `docker/` for both dev and prod environments

## Payment Integration

The application supports two payment providers:
- **Stripe**: Checkout and webhook handling in `src/app/api/stripe/`
- **LemonSqueezy**: Webhook handling in `src/app/api/lemonsqueezy/`
- Payment buttons and forms are in respective component files

## Environment Setup

Based on the configuration, ensure these environment variables are set:
- `DATABASE_URL` - PostgreSQL connection string
- Supabase credentials
- Stripe API keys
- LemonSqueezy API keys
- Mailgun API keys

## Docker Development

For containerized development:
```bash
# Base development setup
docker-compose -f docker/dev/docker-compose.yml up --build

# With PostgreSQL
docker-compose -f docker/dev/docker-compose.yml -f docker/dev/docker-compose.postgres.yml up --build
```