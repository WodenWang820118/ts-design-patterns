import Singleton from "./creational/singleton.ts";
import { demoFactory } from "./creational/factory.ts";
import { demoAdapter } from "./structural/adapter.ts";
import { demoDecorator } from "./structural/decorator.ts";
import { demoStrategy } from "./behavioral/strategy.ts";
import { demoObserver } from "./behavioral/observer.ts";
import { demoBuilder } from "./creational/builder.ts";
import { demoPrototype } from "./creational/prototype.ts";
import { demoAbstractFactory } from "./creational/abstractFactory.ts";
import { demoBridge } from "./structural/bridge.ts";
import { demoComposite } from "./structural/composite.ts";
import { demoProxy } from "./structural/proxy.ts";
import { demoFlyweight } from "./structural/flyweight.ts";
import { demoCommand } from "./behavioral/command.ts";
import { demoState } from "./behavioral/state.ts";
import { demoIterator } from "./behavioral/iterator.ts";
import { demoTemplate } from "./behavioral/template.ts";

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

// Builder
runHeading("Builder");
demoBuilder();

// Prototype
runHeading("Prototype");
demoPrototype();

// Abstract Factory
runHeading("Abstract Factory");
demoAbstractFactory();

// Bridge
runHeading("Bridge");
demoBridge();

// Composite
runHeading("Composite");
demoComposite();

// Proxy
runHeading("Proxy");
demoProxy();

// Flyweight
runHeading("Flyweight");
demoFlyweight();

// Command
runHeading("Command");
demoCommand();

// State
runHeading("State");
demoState();

// Iterator
runHeading("Iterator");
demoIterator();

// Template
runHeading("Template");
demoTemplate();
