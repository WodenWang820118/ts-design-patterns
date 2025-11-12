// Decorator example: add behavior to a simple stream

interface Stream {
  write: (s: string) => void;
}

class SimpleStream implements Stream {
  write(s: string) {
    console.log(s);
  }
}

class UppercaseDecorator implements Stream {
  private inner: Stream;
  constructor(inner: Stream) {
    this.inner = inner;
  }
  write(s: string) {
    this.inner.write(s.toUpperCase());
  }
}

class PrefixDecorator implements Stream {
  private inner: Stream;
  private prefix: string;
  constructor(inner: Stream, prefix = "[pref]") {
    this.inner = inner;
    this.prefix = prefix;
  }
  write(s: string) {
    this.inner.write(`${this.prefix} ${s}`);
  }
}

export function demoDecorator() {
  console.log("Decorator pattern demo:");
  const stream = new SimpleStream();
  const decorated = new PrefixDecorator(new UppercaseDecorator(stream));
  decorated.write("hello decorators");
}
