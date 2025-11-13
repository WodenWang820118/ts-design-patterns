// Command pattern: encapsulate actions as objects

interface Command {
  execute(): void;
}

// A simple receiver representing a TV (or similar device)
class Receiver {
  private volume = 10;
  private channel = 1;

  turnOn() {
    console.log("Receiver: power ON");
  }

  turnOff() {
    console.log("Receiver: power OFF");
  }

  setVolume(v: number) {
    this.volume = v;
    console.log(`Receiver: volume set to ${this.volume}`);
  }

  setChannel(c: number) {
    this.channel = c;
    console.log(`Receiver: channel set to ${this.channel}`);
  }
}

// Concrete commands for the receiver
class PowerOnCommand implements Command {
  constructor(private readonly r: Receiver) {}
  execute() {
    this.r.turnOn();
  }
}

class PowerOffCommand implements Command {
  constructor(private readonly r: Receiver) {}
  execute() {
    this.r.turnOff();
  }
}

class SetVolumeCommand implements Command {
  constructor(private readonly r: Receiver, private readonly volume: number) {}
  execute() {
    this.r.setVolume(this.volume);
  }
}

class SetChannelCommand implements Command {
  constructor(private readonly r: Receiver, private readonly channel: number) {}
  execute() {
    this.r.setChannel(this.channel);
  }
}

// MacroCommand: group several commands into one
class MacroCommand implements Command {
  constructor(private readonly commands: Command[] = []) {}
  execute() {
    for (const c of this.commands) {
      c.execute();
    }
  }
}

// A tiny invoker that can store and run commands
class RemoteInvoker {
  private slots: Record<string, Command | undefined> = {};

  setCommand(name: string, command: Command) {
    this.slots[name] = command;
  }

  press(name: string) {
    const cmd = this.slots[name];
    if (!cmd) {
      console.log(`No command assigned to slot '${name}'`);
      return;
    }
    console.log(`Invoker: executing '${name}'`);
    cmd.execute();
  }
}

export function demoCommand() {
  console.log("Command pattern demo (richer):");

  const receiver = new Receiver();

  // individual commands
  const on = new PowerOnCommand(receiver);
  const off = new PowerOffCommand(receiver);
  const vol7 = new SetVolumeCommand(receiver, 7);
  const ch99 = new SetChannelCommand(receiver, 99);

  // a macro for 'start watching'
  const watchMovie = new MacroCommand([on, ch99, vol7]);

  const remote = new RemoteInvoker();
  remote.setCommand("power_on", on);
  remote.setCommand("power_off", off);
  remote.setCommand("watch_movie", watchMovie);
  remote.setCommand("set_volume_7", vol7);

  // use the invoker
  remote.press("power_on");
  remote.press("set_volume_7");
  remote.press("watch_movie");
  remote.press("power_off");

  // show non-assigned slot handling
  remote.press("unknown_slot");
}

// Run demo if this file is executed directly
if (import.meta.url === `file:///${process.argv[1].replaceAll("\\", "/")}`) {
  demoCommand();
}
