# Agent Instructions

## Project Context

This is a TypeScript sandbox for coding challenges and quick experiments. It uses native ES Modules, Vitest for testing, ESLint for linting, and Prettier for formatting.

## Build & Test

- **Install**: `pnpm install`
- **Test**: `pnpm test` (Vitest, single run)
- **Test (watch)**: `pnpm test:watch`
- **Lint**: `pnpm run lint`
- **Lint + Fix**: `pnpm run lint:fix`
- **Format**: `pnpm run format`

## Adding a New Code Challenge

1. Create a folder under `src/code_challenges/`.
2. Each challenge folder must contain:
   - `README.md` — Problem description and examples.
   - `solution.ts` — Exported function(s).
   - `solution.test.ts` — Vitest tests.
3. Use `describe` and `it` blocks in tests.
4. Import the solution with a relative path (e.g., `import { twoSum } from './solution.js'`).

## Adding Experiments

1. Create files under `src/experiments/`.
2. If an experiment needs tests, add a `.test.ts` file next to it, or place tests in the root `tests/` folder.
3. Experiments do not need a `README.md` unless they are complex.

## TypeScript Conventions

- Strict mode is enabled.
- Use ES Module syntax (`import` / `export`).
- File extensions in imports are required (e.g., `./solution.js` even though the file is `.ts`).

## Linting & Formatting

- ESLint flat config lives in `eslint.config.mjs`.
- Prettier config lives in `.prettierrc`.
- Run `pnpm run lint:fix` and `pnpm run format` before finishing any task.
