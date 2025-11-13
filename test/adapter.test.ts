import assert from "node:assert/strict";
import {
  JsonAdapter,
  XmlAdapter,
  LegacyProvider,
} from "../src/structural/adapter.ts";

function run() {
  console.log("Running adapter tests...");

  const legacy = new LegacyProvider();

  // JSON adapter test: parse output and compare to legacy data
  const jsonAdapter = new JsonAdapter(legacy);
  const json = jsonAdapter.serialize();
  const parsed = JSON.parse(json);
  assert.deepEqual(
    parsed,
    legacy.fetch(),
    "JSON adapter should serialize legacy data"
  );

  // JSON adapter with provided object
  const custom = { id: 2, name: "Bob" };
  const json2 = jsonAdapter.serialize(custom);
  assert.deepEqual(
    JSON.parse(json2),
    custom,
    "JSON adapter should serialize provided object"
  );

  // XML adapter test: simple contains checks for expected tags/values
  const xmlAdapter = new XmlAdapter(legacy);
  const xml = xmlAdapter.serialize();
  assert.ok(xml.includes("<id>1</id>"), "XML should contain id element");
  assert.ok(
    xml.includes("<name>Alice</name>"),
    "XML should contain name element"
  );
  assert.ok(
    xml.includes("<active>true</active>"),
    "XML should contain active element"
  );

  // XML adapter with provided object
  const xmlCustom = xmlAdapter.serialize({
    id: 3,
    name: "Carol",
    active: false,
  });
  assert.ok(xmlCustom.includes("<id>3</id>"));
  assert.ok(xmlCustom.includes("<name>Carol</name>"));
  assert.ok(xmlCustom.includes("<active>false</active>"));

  console.log("All adapter tests passed.");
}

try {
  run();
} catch (err) {
  console.error("Adapter tests failed:");
  console.error(err);
  process.exitCode = 1;
}
