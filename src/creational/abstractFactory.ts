// Abstract Factory: families of related objects

interface Button {
  render: () => void;
}

class WinButton implements Button {
  render() {
    console.log("Render Windows button");
  }
}

class MacButton implements Button {
  render() {
    console.log("Render Mac button");
  }
}

interface Checkbox {
  render: () => void;
}

class WinCheckbox implements Checkbox {
  render() {
    console.log("Render Windows checkbox");
  }
}

class MacCheckbox implements Checkbox {
  render() {
    console.log("Render Mac checkbox");
  }
}

interface UIFactory {
  createButton(): Button;
  createCheckbox(): Checkbox;
}

class WinFactory implements UIFactory {
  createButton() {
    return new WinButton();
  }
  createCheckbox() {
    return new WinCheckbox();
  }
}

class MacFactory implements UIFactory {
  createButton() {
    return new MacButton();
  }
  createCheckbox() {
    return new MacCheckbox();
  }
}

export function demoAbstractFactory() {
  console.log("Abstract Factory demo:");
  // create a family of related widgets from the same factory
  const factory: UIFactory = new MacFactory();
  const b = factory.createButton();
  const c = factory.createCheckbox();
  b.render();
  c.render();
}

// Run demo if this file is executed directly
if (import.meta.url === `file:///${process.argv[1].replaceAll("\\", "/")}`) {
  demoAbstractFactory();
}
