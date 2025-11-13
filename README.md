# TypeScript Design Patterns — Examples

Small, self-contained TypeScript examples demonstrating common design patterns. Each pattern is implemented as a tiny, focused example to illustrate the structure and intent of the pattern — useful for learning, teaching, and quick reference.

## Features

- Lightweight TypeScript implementations for creational, structural, and behavioral patterns
- Small runner to execute demos
- Minimal dependencies — runs with Node + tsx or similar runtimes

## Prerequisites

- Node.js (LTS recommended)
- pnpm (optional, npm or pnpm will work)
- A runtime that can execute TypeScript directly such as `tsx` (used in examples below)

## Install

From the repository root:

```bash
# install dependencies
pnpm install
```

## Run the examples

There are a few ways to run the examples in this repository.

- Run the central demo runner (executes selected examples):

```bash
pnpm run run:examples
# or (if you prefer to run with tsx directly)
pnpx tsx ./src/index.ts
```

- Run an individual example file (useful for focused testing):

```bash
pnpx tsx ./src/structural/flyweight.ts
pnpx tsx ./src/structural/proxy.ts
# replace with any file under src/*
```

If you see import/extension errors, ensure `package.json` contains `"type": "module"` (this repo already includes it) and that your Node/runtime supports ES modules with TypeScript.

## Project structure

Key folders and files:

- `src/` — TypeScript examples
  - `creational/` — factory, builder, singleton, prototype, abstract factory
  - `structural/` — adapter, bridge, composite, decorator, flyweight, proxy
  - `behavioral/` — command, iterator, observer, state, strategy, template
  - `index.ts` — demo runner
- `test/` — minimal tests (example)
- `package.json`, `tsconfig.json` — project configuration

## Patterns included

Examples are intentionally small and synchronous for clarity. They aim to show the pattern structure rather than production-ready implementations.

Examples include (non-exhaustive):

- Creational: Singleton, Factory, Builder, Prototype, Abstract Factory
- Structural: Adapter, Bridge, Composite, Decorator, Flyweight, Proxy
- Behavioral: Command, Iterator, Observer, State, Strategy, Template

## Development

- Run tests (if present):

```bash
pnpm test
```

- Linting / type checking (if configured):

```bash
pnpm run build
```

## Contributing

Contributions are welcome. For small edits or additional examples:

1. Fork the repository
2. Create a feature branch
3. Add tests where appropriate
4. Open a PR with a clear description

## License

This repository is provided for educational purposes. Add a license file if you intend to publish under a specific license.

---

If you'd like, I can also:

- Add a small script to `package.json` for running individual pattern files with `pnpm run pattern -- structural/flyweight.ts` style invocation.
- Add a brief CONTRIBUTING.md or update `package.json` scripts.

Let me know which of those you'd like and I'll implement them.

# TypeScript Design Patterns - Examples

This workspace contains small, self-contained TypeScript examples of common design patterns.

Run the demo (Node must support running `.ts` directly as you noted):

```bash
# from repository root
pnpm run run:examples
# or
node src/index.ts
```

Files added:

- `src/creational/singleton.ts` - Singleton example
- `src/creational/factory.ts` - Simple factory example
- `src/structural/adapter.ts` - Adapter example
- `src/structural/decorator.ts` - Decorator example
- `src/behavioral/strategy.ts` - Strategy example
- `src/behavioral/observer.ts` - Observer example
- `src/index.ts` - Runner that executes all demos

Notes:

- Examples are intentionally small and synchronous for clarity.
- If your Node complains about import extensions, ensure `package.json` contains `"type": "module"` (already added) and that your Node version supports `.ts` modules.
