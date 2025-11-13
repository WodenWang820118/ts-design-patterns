// Builder pattern: construct complex object step by step

class House {
  windows = 0;
  doors = 0;
  hasGarage = false;
  toString() {
    return `House(windows=${this.windows}, doors=${this.doors}, garage=${this.hasGarage})`;
  }
}

class HouseBuilder {
  private house = new House();

  reset() {
    this.house = new House();
    return this;
  }

  withWindows(n: number) {
    this.house.windows = n;
    return this;
  }

  withDoors(n: number) {
    this.house.doors = n;
    return this;
  }

  withGarage(enabled = true) {
    this.house.hasGarage = enabled;
    return this;
  }

  build(): House {
    const result = this.house;
    this.reset();
    return result;
  }
}

export function demoBuilder() {
  console.log("Builder pattern demo:");
  const b = new HouseBuilder();
  const small = b.withWindows(2).withDoors(1).build();
  console.log(small.toString());
  const big = b.withWindows(10).withDoors(4).withGarage().build();
  console.log(big.toString());
}

// Run demo if this file is executed directly
if (import.meta.url === `file:///${process.argv[1].replaceAll("\\", "/")}`) {
  demoBuilder();
}
