import { FeatureFlagControlPlaneStore, seedFeatureFlagControlPlane } from "./domain.js";

const store = new FeatureFlagControlPlaneStore();
store.seed(seedFeatureFlagControlPlane);
console.log(JSON.stringify(store.summary(), null, 2));
