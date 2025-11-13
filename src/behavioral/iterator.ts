// Iterator pattern: traverse collections without exposing internals
// Enhanced version: supports step (positive/negative), peek, skip, reset

type ExtendedIterator<T> = IterableIterator<T> & {
  peek?: () => T | undefined;
  reset?: () => void;
  skip?: (n: number) => void;
};

class Range implements Iterable<number> {
  constructor(
    private readonly start: number,
    private readonly end: number,
    private readonly step = 1
  ) {
    if (step === 0) throw new Error("step cannot be 0");
  }

  [Symbol.iterator](): ExtendedIterator<number> {
    let current = this.start;
    const start = this.start;
    const end = this.end;
    const step = this.step;
    let finished = false;
    const ascending = step > 0;

    function inRange(value: number) {
      return ascending ? value <= end : value >= end;
    }

    const iterator: ExtendedIterator<number> = {
      next(): IteratorResult<number> {
        if (finished) return { done: true, value: undefined as any };
        if (!inRange(current)) {
          finished = true;
          return { done: true, value: undefined as any };
        }
        const value = current;
        current += step;
        return { done: false, value };
      },
      peek(): number | undefined {
        if (finished) return undefined;
        if (!inRange(current)) return undefined;
        return current;
      },
      reset() {
        current = start;
        finished = false;
      },
      skip(n: number) {
        const steps = Math.max(0, Math.floor(n));
        current += step * steps;
        if (!inRange(current)) finished = true;
      },
      [Symbol.iterator]() {
        // An iterator should be iterable: return itself so it can be used in for..of
        return this;
      },
    };

    return iterator;
  }
}

export function demoIterator() {
  console.log("Iterator pattern demo (enhanced):");

  console.log("\n1) for..of with step 2 (ascending):");
  for (const i of new Range(1, 7, 2)) console.log(i); // 1,3,5,7

  console.log(
    "\n2) manual iterator usage (peek/skip/reset) with negative step:"
  );
  const r = new Range(10, 2, -2);
  const it = r[Symbol.iterator]();

  console.log("peek ->", it.peek?.()); // 10
  console.log("next ->", it.next().value); // 10

  console.log("skip 2 steps ->");
  it.skip?.(2); // should advance from 8 -> 4
  console.log("peek ->", it.peek?.()); // 4

  console.log("consume rest with next():");
  for (let res = it.next(); !res.done; res = it.next()) {
    console.log(res.value);
  }

  console.log("\nreset and iterate again using for..of:");
  it.reset?.();
  for (const v of it) console.log(v);
}

// Run demo if this file is executed directly
if (import.meta.url === `file:///${process.argv[1].replaceAll("\\", "/")}`) {
  demoIterator();
}
