// Adapter example: adapt a legacy logger to a new interface

class LegacyLogger {
  logMessage(message: string) {
    console.log(`[legacy] ${message}`);
  }
}

interface ILogger {
  log: (msg: string) => void;
}

class LoggerAdapter implements ILogger {
  private legacy: LegacyLogger;
  constructor(legacy: LegacyLogger) {
    this.legacy = legacy;
  }
  log(msg: string) {
    this.legacy.logMessage(msg);
  }
}

export function demoAdapter() {
  console.log("Adapter pattern demo:");
  const legacy = new LegacyLogger();
  const logger: ILogger = new LoggerAdapter(legacy);
  logger.log("Hello from adapter");
}
