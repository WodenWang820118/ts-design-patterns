// Flyweight pattern: share common state to reduce memory

class TreeType {
  constructor(public name: string, public color: string) {}
  draw(x: number, y: number) {
    console.log(`draw ${this.name} at ${x},${y} color=${this.color}`);
  }
}

class TreeFactory {
  private readonly types = new Map<string, TreeType>();
  getType(name: string, color: string) {
    const key = `${name}-${color}`;
    let t = this.types.get(key);
    if (!t) {
      t = new TreeType(name, color);
      this.types.set(key, t);
    }
    return t;
  }
}

export function demoFlyweight() {
  console.log("Flyweight pattern demo:");
  const f = new TreeFactory();
  const t1 = f.getType("oak", "green");
  const t2 = f.getType("oak", "green");
  console.log("same instance?", t1 === t2);
  t1.draw(1, 2);
  t2.draw(3, 4);
}

// Run demo if this file is executed directly
if (import.meta.url === `file:///${process.argv[1].replaceAll("\\", "/")}`) {
  demoFlyweight();
}
