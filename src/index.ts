import Singleton from "./creational/singleton.ts";
import { demoFactory } from "./creational/factory.ts";
import { demoAdapter } from "./structural/adapter.ts";
import { demoDecorator } from "./structural/decorator.ts";
import { demoStrategy } from "./behavioral/strategy.ts";
import { demoObserver } from "./behavioral/observer.ts";

function runHeading(title: string) {
  console.log("\n=== " + title + " ===");
}

// Singleton demo
runHeading("Singleton");
const s1 = Singleton.getInstance();
const s2 = Singleton.getInstance();
console.log("same instance?", s1 === s2);
console.log("value1", s1.getValue());
console.log("value2", s2.getValue());

// Factory
runHeading("Factory");
demoFactory();

// Adapter
runHeading("Adapter");
demoAdapter();

// Decorator
runHeading("Decorator");
demoDecorator();

// Strategy
runHeading("Strategy");
demoStrategy();

// Observer
runHeading("Observer");
demoObserver();
