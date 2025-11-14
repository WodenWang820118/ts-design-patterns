export interface Logger {
  log(msg: string): void;
}

export class ConsoleLogger implements Logger {
  log(msg: string): void {
    console.log(msg);
  }
}

export class MemoryLogger implements Logger {
  entries: string[] = [];
  log(msg: string): void {
    this.entries.push(msg);
  }
}

export class UserService {
  private logger?: Logger;

  // Constructor injection (optional logger)
  constructor(logger?: Logger) {
    this.logger = logger;
  }

  // Setter injection
  setLogger(logger: Logger) {
    this.logger = logger;
  }

  performAction(userId: number): string {
    const message = `Action for user ${userId}`;
    if (!this.logger) throw new Error("Logger not provided");
    this.logger.log(message);
    return message;
  }
}

// A tiny, explicit injector to demonstrate wiring outside the class
export class Injector {
  static createWithConsoleLogger(): UserService {
    return new UserService(new ConsoleLogger());
  }

  static createWithMemoryLogger(): { service: UserService; logger: MemoryLogger } {
    const logger = new MemoryLogger();
    const service = new UserService(logger);
    return { service, logger };
  }
}
