# State and reconciliation (reference)

## Core rule
The supervisor is a **reader and reconciler of distributed evidence**, not the universal owner of current state. Neither a daily refresh nor a specific repository is required. State storage and coordination runtime are independent concerns.

## Locate authority by fact
- Goal / acceptance criteria: where the human approved them (task, document, message, issue, etc.).
- Implementation and tests: the relevant repository / CI / artifact source.
- Remote execution: the actual job or session provider, if it exposes status.
- Human approval / defer / cancellation: the human decision and its durable record, if any.
- Supervisor's interpretation: derived and ephemeral unless an explicit consequential decision needs preservation.

Do not copy job status or progress percentages into a separate register merely for convenience. A lightweight index of source references is permissible if discovery would otherwise be costly, but identify it as a **locator, not a source of truth**.

## Minimum task concept (not a mandatory schema)
- **Identity and intent:** what work is this and what would count as accepted?
- **References and authority:** where are the primary sources and worker/artifacts?
- **Decisions and constraints:** what was expressly approved, paused, changed, or prohibited?
- **Observations (when presenting status):** source, checked-at time, evidence, and uncertainty.

No fixed YAML/JSON fields, database, calendar, or workflow engine is required. Reuse source-native objects where possible. Status values are contextual; do not enforce one global lifecycle across unrelated services.

## Reconciliation on resume
1. Discover relevant authoritative sources and permissions.
2. Read only the task(s) needed for the current decision.
3. Check actual provider status, changes, artifacts, and decisions where accessible. Keep source timestamps distinct from the time you checked them.
4. Compare findings with any prior coordination note. If access fails, report stale/unverified, not current.
5. Derive next safe action. Don't retry non-idempotent tasks or re-launch unknown jobs without confirming the previous attempt.
6. Persist only durable decisions or useful source links when justified.

Never equate silence with failure, a merged PR with user acceptance, a closed issue with verified completion, or a passing CI run with fulfillment of all goals.

## Long supervisor absences
A worker may finish while no supervisor is running. This is normal. If worker artifacts or a provider history survive, they can be reconciled later. If a task was completed in an ephemeral chat and no accessible trace remains, the supervisor **cannot** reconstruct it reliably: explicitly request a brief human or worker handoff. Do not invent what happened.

## Concurrency, privacy, and later scaling
- Avoid competing writers for the same record. Use provider-native revision checks, transactions, or optimistic concurrency where available; on conflict, reread and reconcile.
- Decisions should have provenance and should not be silently overwritten by later observations.
- Read the least data necessary. Different task sources may have different security boundaries. Do not mirror private contents into a public skill repository.
- Add polling, webhooks, queues, durable workflows, dashboards, or a task store only **when a concrete need and a compatible environment are established**. Keep these outside the portable core.
