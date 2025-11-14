# TypeScript Design Patterns — Examples

Small, self-contained TypeScript examples demonstrating common design patterns. Each pattern is implemented as a tiny, focused example to illustrate the structure and intent of the pattern — useful for learning, teaching, and quick reference.

## Features

- Lightweight TypeScript implementations for creational, structural, and behavioral patterns
- Small runner to execute demos
- Minimal dependencies — runs with Node + tsx or similar runtimes

## Prerequisites
# TypeScript Design Patterns — Examples

Small, focused TypeScript examples demonstrating common design patterns. Each example is intentionally minimal to illustrate the structure and intent of a pattern for learning and quick reference.

**Highlights**
- Lightweight, self-contained TypeScript examples
- Organized by creational, structural, and behavioral categories
- Small test suite and demo runner included

## Prerequisites
- Node.js (LTS recommended)
- `pnpm` (recommended) or `npm`
- A TypeScript-capable runner such as `tsx` (optional)

## Install
From the repository root:

```bash
pnpm install
```

If you don't have `pnpm`, `npm install` will also work.

## Run the examples
You can run the central demo runner or run individual example files directly.

- Run the demo runner (executes selected examples):

```bash
pnpx tsx ./src/index.ts
```

- Run an individual example (replace with any file under `src/`):

```bash
pnpx tsx ./src/structural/flyweight.ts
```

If you prefer, add scripts to `package.json` for convenience (I can add these upon request).

## Run tests
Tests are located in the `test/` folder. Run them with:

```bash
pnpm test
```

(If the project uses a test runner such as Vitest or Jest, `pnpm test` should already wire it up. If not, I can add a minimal test script.)

## Project structure

- `src/` — pattern examples
  - `creational/` — `abstractFactory.ts`, `builder.ts`, `dependencyInjection.ts`, `diContainer.ts`, `factory.ts`, `prototype.ts`, `singleton.ts`
  - `structural/` — `adapter.ts`, `bridge.ts`, `composite.ts`, `decorator.ts`, `flyweight.ts`, `proxy.ts`
  - `behavioral/` — `command.ts`, `iterator.ts`, `observer.ts`, `state.ts`, `strategy.ts`, `template.ts`
  - `index.ts` — demo runner
- `test/` — tests (`adapter.test.ts`, `dependencyInjection.test.ts`, `diContainer.test.ts`)
- `package.json`, `tsconfig.json`, `pnpm-lock.yaml` — project configuration

## Patterns included

- Creational: Singleton, Factory, Builder, Prototype, Abstract Factory, Dependency Injection
- Structural: Adapter, Bridge, Composite, Decorator, Flyweight, Proxy
- Behavioral: Command, Iterator, Observer, State, Strategy, Template

## Development notes

- The examples prioritize clarity over production-level concerns (error handling, async, performance).
- If you encounter ESM/import extension errors, ensure `package.json` contains `"type": "module"` and that your Node version supports ES modules.

## Contributing

Contributions are welcome. Suggested workflow:
1. Fork the repo
2. Create a branch for your change
3. Add/modify examples and tests
4. Open a PR with a clear description

If you'd like, I can:
- Add `package.json` scripts to run the demo and individual patterns easily
- Add a small CLI script to run a specific pattern with `pnpm run pattern -- <path>`
- Add `CONTRIBUTING.md` or improve test coverage

## License
Add a `LICENSE` file if you plan to publish this repository under a specific license.

---

If you want, I can add example `package.json` scripts and a tiny helper to run individual pattern files. Which would you prefer: `pnpm run demo` and `pnpm run pattern -- <path>`? 
- Add a small script to `package.json` for running individual pattern files with `pnpm run pattern -- structural/flyweight.ts` style invocation.
