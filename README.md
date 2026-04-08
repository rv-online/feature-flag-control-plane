# Feature Flag Control Plane

TypeScript control-plane service for managing flags, rollout rules, and deterministic targeting decisions.

## Why This Exists

Models the operational side of progressive delivery, where backend teams need repeatable rollouts without depending on hosted tooling.

## What This Demonstrates

- rule-based targeting and rollout evaluation
- control-plane style API design rather than front-end polish
- tests focused on behavior and release logic

## Architecture

1. flag definitions and rollout rules live in a focused domain store
1. evaluation logic computes deterministic decisions from request context
1. API handlers expose management and evaluation endpoints

## Run It

```bash
npm test
npm run build
```

## Verification

Run `npm test` and `npm run build` to verify evaluation logic and compile health.
