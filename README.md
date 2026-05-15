# JS Playground

A playground for JavaScript/TypeScript code challenges, experiments, and quick prototypes.

## Project Structure

- `src/code_challenges/` — Self-contained coding challenge folders, each with a `README.md`, solution, and co-located tests.
- `src/experiments/` — Ad-hoc scripts, spikes, and quick tests.
- `src/lib/` — Shared utilities reused across challenges or experiments.
- `tests/` — Integration tests, or tests for experiments that don't fit inside `src/`.

## Quick Start

```bash
# Install dependencies
pnpm install

# Run all tests
pnpm test

# Run tests in watch mode
pnpm test:watch

# Lint code
pnpm run lint

# Auto-fix lint issues
pnpm run lint:fix

# Format code
pnpm run format
```

## Adding a New Challenge

1. Create a new folder under `src/code_challenges/` (e.g., `05-new-challenge/`).
2. Add `README.md`, `solution.ts`, and `solution.test.ts`.
3. Export your function from `solution.ts` and import it in `solution.test.ts`.
4. Run `pnpm test` to verify.
