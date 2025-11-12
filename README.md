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
