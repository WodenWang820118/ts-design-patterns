// Simple factory example: create different notifications

type Notification = {
  send: () => void;
};

class EmailNotification implements Notification {
  send() {
    console.log("Email sent");
  }
}

class SMSNotification implements Notification {
  send() {
    console.log("SMS sent");
  }
}

class NotificationFactory {
  static create(type: "email" | "sms"): Notification {
    if (type === "email") return new EmailNotification();
    return new SMSNotification();
  }
}

export function demoFactory() {
  console.log("Factory pattern demo:");
  const n1 = NotificationFactory.create("email");
  n1.send();
  const n2 = NotificationFactory.create("sms");
  n2.send();
}

// Run demo if this file is executed directly
if (import.meta.url === `file:///${process.argv[1].replaceAll("\\", "/")}`) {
  demoFactory();
}
