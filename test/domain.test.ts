import assert from "node:assert/strict";
import test from "node:test";
import { FeatureFlagControlPlaneStore, seedFeatureFlagControlPlane } from "../src/domain.js";

test("summarizes flags", () => {
  const store = new FeatureFlagControlPlaneStore();
  store.seed(seedFeatureFlagControlPlane);
  const summary = store.summary();
  assert.equal(summary.total, 3);
  assert.ok(Object.keys(summary.states).length >= 1);
});

test("lists seeded flags", () => {
  const store = new FeatureFlagControlPlaneStore();
  store.seed(seedFeatureFlagControlPlane);
  assert.equal(store.list().length, 3);
});
