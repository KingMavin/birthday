# Copilot Instructions for MarshyVerse

## Project Overview
- **MarshyVerse** is a modern interactive web app, structured as a monorepo with a `client` (frontend), `server` (backend), and `shared` (common types/schemas).
- The app is a romantic, interactive birthday card with playful UI elements and custom pages.

## Architecture & Key Components
- **Frontend (`client/src/`)**: Built with React (TypeScript), using Vite for bundling and Tailwind CSS for styling.
  - `components/`: Reusable UI and animation components (e.g., `DodgingButton`, `FloatingHearts`).
  - `components/examples/`: Example page components for each interactive step.
  - `components/ui/`: Atomic UI primitives (accordion, button, dialog, etc.), likely custom or from a design system.
  - `pages/`: Main app pages, each representing a step in the interactive flow.
  - `hooks/`: Custom React hooks (e.g., `use-mobile`, `use-toast`).
  - `lib/`: Utilities and query client setup.
- **Backend (`server/`)**: Minimal API/server logic, with routes and storage abstractions.
- **Shared (`shared/`)**: Common schemas/types for use across client and server.

## Developer Workflows
- **Install dependencies:**
  ```sh
  npm install
  ```
- **Start development server:**
  ```sh
  npm run dev
  ```
- **Build for production:**
  ```sh
  npm run build
  ```
- **Preview production build:**
  ```sh
  npm run preview
  ```
- **No explicit test scripts found.**

## Project Conventions
- **Component Structure:**
  - Use functional React components with TypeScript.
  - UI primitives are in `components/ui/`; higher-level or animated components in `components/`.
  - Pages are composed from these components and live in `pages/`.
- **Styling:**
  - Tailwind CSS is configured via `tailwind.config.ts` and used throughout.
- **Configuration:**
  - Vite config: `vite.config.ts`
  - TypeScript config: `tsconfig.json`
  - PostCSS: `postcss.config.js`
- **Data Sharing:**
  - Use types/schemas from `shared/schema.ts` for consistency between client and server.
- **No explicit API or database integration found; server is likely for static serving or minimal logic.**

## Integration & Patterns
- **Cross-component communication:**
  - Use React context or props drilling; see `PageContainer` and hooks for examples.
- **Animations/Effects:**
  - Custom interactive elements (e.g., dodging/shrinking buttons, floating hearts) are implemented as React components.
- **No Redux, MobX, or other state management libraries detected.**

## Examples
- See `client/src/components/examples/` and `client/src/pages/` for page/flow structure.
- See `client/src/components/ui/` for reusable UI patterns.

---

**When contributing, follow the structure and conventions above. Reference existing components and hooks before creating new ones.**
