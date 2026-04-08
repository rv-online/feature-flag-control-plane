export interface FlagRecord {
  key: string | number;
  owner: string | number;
  rollout: string | number;
  status: string | number;
}

export class FeatureFlagControlPlaneStore {
  private items: FlagRecord[] = [];

  seed(records: FlagRecord[]): void {
    this.items = [...records];
  }

  list(): FlagRecord[] {
    return [...this.items];
  }

  summary(): { total: number; states: Record<string, number> } {
    const states: Record<string, number> = {};
    for (const item of this.items) {
      const key = String((item as Record<string, unknown>).status ?? "unknown");
      states[key] = (states[key] ?? 0) + 1;
    }
    return { total: this.items.length, states };
  }
}

export const seedFeatureFlagControlPlane: FlagRecord[] = [
  {"key": "search-v2", "owner": "growth", "rollout": 25, "status": "active"},
  {"key": "pricing-page-redesign", "owner": "web", "rollout": 100, "status": "active"},
  {"key": "risk-review-banner", "owner": "trust", "rollout": 0, "status": "paused"}
];
