// Adapter examples: adapt a legacy provider to modern serializers (JSON / XML)

// Legacy provider that returns plain JavaScript data objects
export class LegacyProvider {
  fetch() {
    return { id: 1, name: "Alice", active: true };
  }
}

// Target interface the client expects: a serializer producing a string
interface Serializer {
  serialize(obj?: unknown): string;
}

// JSON adapter: uses JSON.stringify to serialize the legacy data
export class JsonAdapter implements Serializer {
  private readonly legacy: LegacyProvider;
  constructor(legacy: LegacyProvider) {
    this.legacy = legacy;
  }
  serialize(obj?: unknown) {
    const data = obj ?? this.legacy.fetch();
    return JSON.stringify(data);
  }
}

// Very small object->XML helper for flat objects (demo only)
function objToXml(tag: string, obj: Record<string, any>) {
  const body = Object.entries(obj)
    .map(([k, v]) => {
      const val = v == null ? "" : String(v);
      return `<${k}>${escapeXml(val)}</${k}>`;
    })
    .join("");
  return `<${tag}>${body}</${tag}>`;
}

function escapeXml(s: string) {
  return s
    .replaceAll(/&/g, "&amp;")
    .replaceAll(/</g, "&lt;")
    .replaceAll(/>/g, "&gt;")
    .replaceAll(/"/g, "&quot;")
    .replaceAll(/'/g, "&apos;");
}

// XML adapter: converts legacy data to a simple XML representation
export class XmlAdapter implements Serializer {
  private readonly legacy: LegacyProvider;
  constructor(legacy: LegacyProvider) {
    this.legacy = legacy;
  }
  serialize(obj?: unknown) {
    const data = (obj ?? this.legacy.fetch()) as Record<string, any>;
    return objToXml("item", data);
  }
}

export function demoAdapter() {
  console.log("Adapter pattern demo (JSON & XML):");
  const legacy = new LegacyProvider();

  const jsonAdapter = new JsonAdapter(legacy);
  console.log("JSON output:");
  console.log(jsonAdapter.serialize());

  const xmlAdapter = new XmlAdapter(legacy);
  console.log("XML output:");
  console.log(xmlAdapter.serialize());
}

// Run demo if this file is executed directly
if (import.meta.url === `file:///${process.argv[1].replaceAll("\\", "/")}`) {
  demoAdapter();
}
