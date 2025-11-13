// State pattern: object behavior changes with internal state
// This file implements a small State pattern example with two concrete
// states: StoppedState and StartedState. The Context delegates start/stop/status
// calls to the current State instance which is free to transition the Context
// to another State.

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

// Run demo if this file is executed directly (simple ESM-aware check).
// This matches the style used across other pattern demo files in this repo.
if (import.meta.url === `file:///${process.argv[1].replaceAll("\\", "/")}`) {
  demoState();
}
