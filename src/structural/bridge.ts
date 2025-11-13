// Bridge pattern: separate abstraction from implementation

// Implementation side
interface Renderer {
  renderCircle(radius: number): void;
}

class VectorRenderer implements Renderer {
  renderCircle(r: number) {
    console.log(`Vector circle with r=${r}`);
  }
}

class RasterRenderer implements Renderer {
  renderCircle(r: number) {
    console.log(`Raster circle with r=${r}`);
  }
}

// Abstraction
class Shape {
  constructor(protected renderer: Renderer) {}
}

class Circle extends Shape {
  constructor(renderer: Renderer, private readonly radius: number) {
    super(renderer);
  }
  draw() {
    this.renderer.renderCircle(this.radius);
  }
}

export function demoBridge() {
  console.log("Bridge pattern demo:");
  const v = new VectorRenderer();
  const r = new RasterRenderer();
  const c1 = new Circle(v, 5);
  const c2 = new Circle(r, 3);
  c1.draw();
  c2.draw();
}

// Run demo if this file is executed directly
if (import.meta.url === `file:///${process.argv[1].replaceAll("\\", "/")}`) {
  demoBridge();
}
