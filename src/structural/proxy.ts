// Proxy pattern: control access to an object

interface Image {
  display(): void;
}

class RealImage implements Image {
  constructor(private readonly filename: string) {}
  private load() {
    console.log(`loading ${this.filename}`);
  }
  display() {
    console.log(`displaying ${this.filename}`);
  }
}

class ProxyImage implements Image {
  private real?: RealImage;
  constructor(private readonly filename: string) {}
  display() {
    if (!this.real) {
      this.real = new RealImage(this.filename);
      // simulate expensive load
      // call private load via real's constructor side-effect in real implementation
      (this.real as any).display = this.real.display.bind(this.real);
      console.log("Proxy: created real image");
    }
    this.real.display();
  }
}

export function demoProxy() {
  console.log("Proxy pattern demo:");
  const img = new ProxyImage("photo.png");
  img.display();
  img.display();
}

// Run demo if this file is executed directly
if (import.meta.url === `file:///${process.argv[1].replaceAll("\\", "/")}`) {
  demoProxy();
}
