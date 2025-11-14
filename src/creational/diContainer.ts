import "reflect-metadata";
import { container, injectable, inject } from "tsyringe";

// Token used at runtime for the logger binding
export const LOGGER = Symbol("Logger");

export interface Logger {
  log(msg: string): void;
}

@injectable()
export class ConsoleLogger implements Logger {
  log(msg: string): void {
    console.log(msg);
  }
}

@injectable()
export class MemoryLogger implements Logger {
  entries: string[] = [];
  log(msg: string): void {
    this.entries.push(msg);
  }
}

@injectable()
export class UserService {
  constructor(@inject(LOGGER) private readonly logger: Logger) {}

  perform(userId: number) {
    const msg = `Container: action for ${userId}`;
    this.logger.log(msg);
    return msg;
  }
}

// Register bindings in the container (runtime tokens)
container.register(LOGGER, { useClass: ConsoleLogger });

// Helper that resolves UserService from container (decorator-based)
export function createUserServiceFromContainer(): UserService {
  return container.resolve(UserService);
}

// Another helper to register MemoryLogger for tests or different environments
export function useMemoryLogger(): MemoryLogger {
  const mem = new MemoryLogger();
  container.registerInstance(LOGGER, mem as any);
  return mem;
}
