---
trigger: always_on
---

CLEAN CODE, SOLID, DRY, KISS, YAGNI, TYPESCRIPT, TESTING RULES

1. SOLID AND SINGLE RESPONSIBILITY

- Maximum 120 lines per file.
- Separate UI components (src/components/sections/), static data (src/data/coffee.ts), pure TypeScript validation (src/lib/validation.ts), and server storage logic (src/lib/lead-storage.ts).

2. DRY, KISS, YAGNI (NO ZOD)

- Do NOT use Zod or external validation libraries. Write pure, zero-dependency TypeScript validation functions and type guards.
- Put all coffee products, prices, and schedule info into a single source of truth (src/data/coffee.ts).
- Keep code simple and readable. Do not install extra UI libraries or state managers.

3. STRICT TYPESCRIPT

- Zero any types allowed. Define explicit interfaces and types for all props and API payloads.

4. UNIT TESTING AND CODE QUALITY

- Cover phone validation, payload validation, and 10-minute duplicate protection with Vitest unit tests in src/lib/**tests**/.
- All code must pass ESLint and Prettier checks without warnings.

5. NEXT.JS AND MOBILE LIGHTHOUSE 90+

- Keep sections as Server Components by default. Use use client ONLY on interactive components (LeadForm).
- Use next/image with explicit width, height, and sizes for all images.
- Load fonts via next/font/google (Playfair_Display and Manrope with cyrillic subset and display swap).
