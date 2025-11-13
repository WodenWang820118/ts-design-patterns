// Prototype pattern: clone objects

class Sheep {
  name: string;
  breed: string;
  constructor(name: string, breed: string) {
    this.name = name;
    this.breed = breed;
  }

  clone() {
    return new Sheep(this.name, this.breed);
  }
}

export function demoPrototype() {
  console.log("Prototype pattern demo:");
  const original = new Sheep("Dolly", "Merino");
  const copy = original.clone();
  console.log("original:", original);
  console.log("copy equals instance?", original === copy);
}

// Run demo if this file is executed directly
if (import.meta.url === `file:///${process.argv[1].replaceAll("\\", "/")}`) {
  demoPrototype();
}
