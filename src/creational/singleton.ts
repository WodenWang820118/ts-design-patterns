class Singleton {
  private static instance: Singleton | null = null;
  private readonly value: number;

  private constructor() {
    this.value = Math.random();
  }

  static getInstance() {
    if (!Singleton.instance) Singleton.instance = new Singleton();
    return Singleton.instance;
  }

  getValue() {
    return this.value;
  }
}

export default Singleton;

export function demoSingleton() {
  console.log("Singleton pattern demo:");
  const s1 = Singleton.getInstance();
  const s2 = Singleton.getInstance();
  console.log("same instance?", s1 === s2);
  console.log("value1", s1.getValue());
  console.log("value2", s2.getValue());
}

// Run demo if this file is executed directly
if (import.meta.url === `file:///${process.argv[1].replaceAll("\\", "/")}`) {
  demoSingleton();
}
