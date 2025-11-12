class Singleton {
  private static instance: Singleton | null = null;
  private value: number;

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
