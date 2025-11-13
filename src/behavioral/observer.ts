// Observer example: simple event emitter

type Listener = (...args: any[]) => void;

class Emitter {
  private readonly listeners = new Map<string, Listener[]>();

  on(event: string, fn: Listener) {
    const arr = this.listeners.get(event) ?? [];
    arr.push(fn);
    this.listeners.set(event, arr);
  }

  emit(event: string, ...args: any[]) {
    const arr = this.listeners.get(event) ?? [];
    for (const fn of arr) fn(...args);
  }
}

export function demoObserver() {
  console.log("Observer pattern demo:");
  const e = new Emitter();
  e.on("msg", (from: string, text: string) => {
    console.log(`received from ${from}: ${text}`);
  });
  e.emit("msg", "alice", "hello!");
}

// Run demo if this file is executed directly
if (import.meta.url === `file:///${process.argv[1].replaceAll("\\", "/")}`) {
  demoObserver();
}
