import assert from "node:assert/strict";
import {
  createUserServiceFromContainer,
  useMemoryLogger,
} from "../src/creational/diContainer.ts";

function run() {
  console.log("Running tsyringe container tests...");

  // Replace logger with memory logger for test isolation
  const mem = useMemoryLogger();
  const svc = createUserServiceFromContainer();
  const msg = svc.perform(9);
  assert.equal(msg, "Container: action for 9");
  assert.deepEqual(mem.entries, ["Container: action for 9"]);

  console.log("All tsyringe container tests passed.");
}

try {
  run();
} catch (err) {
  console.error(err);
  process.exitCode = 1;
}
