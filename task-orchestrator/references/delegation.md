# Delegation, escalation and review (reference)

## Small work order
When assigning work, include only what the worker needs:
1. **Desired outcome and acceptance:** specific enough to test or judge; where to put the deliverable.
2. **Context and reference sources:** authoritative inputs, not a copied universe of prior chats.
3. **Autonomy envelope:** what the worker can decide; constraints on scope, cost, permissions, privacy, destructive operations.
4. **Evidence to return:** artifact link, tests/observations, remaining gaps and uncertainties.
5. **Escalation triggers:** blocked by missing access, material goal change, major side effects, nonrecoverable failures.

Do not require long plans or repeated permission checks for reversible details that fall inside the approved envelope. A worker should recover from ordinary errors with bounded attempts, and clearly report when it cannot.

## Escalation packet
Before asking the human, do the work of narrowing the question:
- What decision is needed and why now?
- What has been verified (with source) and what remains uncertain?
- What are the available options and a recommended default?
- What happens if no decision is made now?

Bundle related decisions. Do not ask the human to manually inspect systems that the supervisor can inspect safely with authorized tools.

## Completion
Differentiate:
- **Claimed complete:** worker reports it has finished.
- **Evidence checked:** deliverables and acceptance criteria are reasonably supported by accessible evidence.
- **Accepted:** appropriate human or authorized acceptance actor approves, when approval is part of the task.

For failures, request bounded rework from the responsible worker. Avoid marking a task complete solely based on a confident final message.

## Coordination modes
- **Single-session/manual:** read sources and produce next instruction; user may transfer it to workers. Do not claim cross-chat control.
- **Connected/on-demand:** inspect external repositories/jobs and update or message them only when tools and permissions genuinely support it.
- **Scheduled/event-driven:** add periodic checks and notifications only when a working scheduler, event source, and permissions are actually configured.
- **Orchestrated:** automatic launches, retries and recovery require an execution platform; they are not implied by a portable Skill.

## Measure friction, not merely question count
Good human involvement: goal selection, meaningful risk decisions, final approval.
Avoidable friction: status chases, repetitive context transfer, tiny confirmations, duplicated reviews, manual retries.
Retain these observations only when they help improve the workflow, rather than requiring a permanent interaction log.
