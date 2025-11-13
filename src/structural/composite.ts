// Composite pattern: tree structure of components

interface Component {
  name: string;
  print(indent?: string): void;
}

class Leaf implements Component {
  constructor(public name: string) {}
  print(indent = "") {
    console.log(`${indent}${this.name}`);
  }
}

class Composite implements Component {
  children: Component[] = [];
  constructor(public name: string) {}
  add(c: Component) {
    this.children.push(c);
  }
  print(indent = "") {
    console.log(`${indent}${this.name}`);
    for (const ch of this.children) ch.print(indent + "  ");
  }
}

export function demoComposite() {
  console.log("Composite pattern demo:");
  const root = new Composite("root");
  root.add(new Leaf("leaf-a"));
  const branch = new Composite("branch");
  branch.add(new Leaf("leaf-b1"));
  branch.add(new Leaf("leaf-b2"));
  root.add(branch);
  root.print();
}

// Run demo if this file is executed directly
if (import.meta.url === `file:///${process.argv[1].replaceAll("\\", "/")}`) {
  demoComposite();
}
