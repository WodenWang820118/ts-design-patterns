import assert from "node:assert/strict";
import { MemoryLogger, UserService, Injector } from "../src/creational/dependencyInjection.ts";

function run() {
  console.log("Running dependency injection tests...");

  // Constructor injection
  const mem = new MemoryLogger();
  const svc = new UserService(mem);
  const res = svc.performAction(42);
  assert.equal(res, "Action for user 42");
  assert.deepEqual(mem.entries, ["Action for user 42"]);

  // Setter injection
  const svc2 = new UserService();
  const m2 = new MemoryLogger();
  svc2.setLogger(m2);
  const res2 = svc2.performAction(7);
  assert.equal(res2, "Action for user 7");
  assert.deepEqual(m2.entries, ["Action for user 7"]);

  // Injector helper
  const { service, logger } = Injector.createWithMemoryLogger();
  service.performAction(1);
  assert.equal(logger.entries.length, 1);

  console.log("All dependency injection tests passed.");
}

try {
  run();
} catch (err) {
  console.error("DI tests failed:");
  console.error(err);
  process.exitCode = 1;
}
