// State pattern: object behavior changes with internal state
// This file implements a small State pattern example with two concrete
// states: StoppedState and StartedState. The Context delegates start/stop/status
// calls to the current State instance which is free to transition the Context
// to another State.

import { fileURLToPath } from "url";
import path from "path";

interface State {
  readonly name: string;
  start(ctx: Context): void;
  stop(ctx: Context): void;
  status(ctx: Context): void;
}

class StoppedState implements State {
  readonly name = "stopped";
  start(ctx: Context) {
    console.log("transition: stopped -> started");
    ctx.setState(new StartedState());
  }
  stop(_ctx: Context) {
    console.log("already stopped");
  }
  status(_ctx: Context) {
    console.log("status = stopped");
  }
}

class StartedState implements State {
  readonly name = "started";
  start(_ctx: Context) {
    console.log("already started");
  }
  stop(ctx: Context) {
    console.log("transition: started -> stopped");
    ctx.setState(new StoppedState());
  }
  status(_ctx: Context) {
    console.log("status = started");
  }
}

class Context {
  private state: State;

  constructor() {
    this.state = new StoppedState();
  }

  setState(state: State) {
    // small hook for debugging; keep minimal behavior here
    const prev = this.state?.name;
    this.state = state;
    const next = this.state.name;
    console.log(`state changed: ${prev} -> ${next}`);
  }

  start() {
    this.state.start(this);
  }

  stop() {
    this.state.stop(this);
  }

  status() {
    this.state.status(this);
  }

  getStateName() {
    return this.state.name;
  }
}

export function demoState() {
  console.log("State pattern demo:");
  const ctx = new Context();
  ctx.status();
  ctx.start();
  ctx.status();
  ctx.start(); // calling start again should be idempotent when already started
  ctx.stop();
  ctx.stop(); // calling stop again should be idempotent when already stopped
  ctx.status();
}

// If this module is executed directly (not required by tests), run the demo.
// (Keep this side-effect minimal; tests can import demoState and run it.)
// Note: avoid executing automatically during import in larger apps; this is
// fine here for a small demo repository.
// Detect execution as the entry script in both CommonJS and ESM environments.
// - CommonJS: (require && require.main === module)
// - ESM (used by `tsx` / package.json `type: "module"`): compare
//   resolved `process.argv[1]` with this module's file path.
const runDemoIfMain = () => {
  try {
    // CommonJS check (will be false in ESM)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    // @ts-ignore
    if (typeof require !== "undefined" && (require as any).main === module) {
      demoState();
      return;
    }

    // ESM: compare process.argv[1] (entry) with this file's path
    const entry =
      process.argv && process.argv[1] ? path.resolve(process.argv[1]) : "";
    const thisFile = path.resolve(fileURLToPath(import.meta.url));
    if (
      entry === thisFile ||
      entry.endsWith(
        `${path.sep}src${path.sep}behavioral${path.sep}state.ts`
      ) ||
      entry.endsWith("/src/behavioral/state.ts")
    ) {
      demoState();
    }
  } catch (err) {
    // avoid throwing when runtime environment differs; don't block imports
    // if detection fails, the demo simply won't run.
  }
};

runDemoIfMain();
