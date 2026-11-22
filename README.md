# my-skills

Personal Agent Skills.

Each skill lives in a top-level directory and exposes its entrypoint as `SKILL.md`.

## Skills

- `task-orchestrator` — Portable, session-independent coordination of multiple workstreams. Reconciles authoritative sources on demand, delegates within agreed limits, and minimizes human status-chasing. Does **not** prescribe a task database, GitHub as task storage, or background execution. See [the Skill](task-orchestrator/SKILL.md).
- `agent-experiment-hygiene` — Lightweight experiment hygiene skill for designing, running, and auditing agent or method evaluations while reducing self-evaluation, contaminated baselines, label exposure, and overclaiming.
