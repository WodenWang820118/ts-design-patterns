// Template Method: define skeleton of algorithm in base class

abstract class Game {
  play() {
    this.init();
    this.startPlay();
    this.endPlay();
  }
  protected abstract init(): void;
  protected abstract startPlay(): void;
  protected abstract endPlay(): void;
}

class Football extends Game {
  protected init() {
    console.log("football init");
  }
  protected startPlay() {
    console.log("football start");
  }
  protected endPlay() {
    console.log("football end");
  }
}

export function demoTemplate() {
  console.log("Template pattern demo:");
  const g = new Football();
  g.play();
}

// Run demo if this file is executed directly
if (import.meta.url === `file:///${process.argv[1].replaceAll("\\", "/")}`) {
  demoTemplate();
}
