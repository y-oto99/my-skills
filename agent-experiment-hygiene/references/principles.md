# Principles

This skill is about experiment hygiene, not experiment bureaucracy.

## 1. The orchestrator may know everything

The main agent often needs full context to design the evaluation. That is acceptable. The problem is not knowledge; the problem is when the same informed agent generates the comparison output that is supposed to represent an uninformed method.

A useful split:

- Orchestrator: knows the goal, background, methods, and evaluation plan.
- Runner: produces a method output under controlled information.
- Evaluator: judges outputs, ideally without method labels.
- Auditor: checks whether the setup was fair enough for the claim.

## 2. Control information, not just files

Bias can enter through files, prompts, labels, examples, expected answers, previous outputs, or even phrases like “this is a test.”

Before running a method, ask:

- What would this method know in normal use?
- What information would unfairly help it?
- What information would make it imitate another method?
- What should be excluded?

## 3. Provenance beats trust

Do not rely on “I did not cheat.” Leave a short record of what was shown and what was withheld.

Minimal provenance should answer:

- Who produced this?
- What did they see?
- What were they not supposed to see?
- Did they know this was an evaluation?
- Did they know expected answers or method labels?
- How strong was the isolation?

## 4. Blindness is useful but not always required

Blind evaluation is most useful when judging quality, preference, readability, or usefulness.

It is less necessary when running deterministic tests, checking schema validity, or debugging a specific failure.

Use blind evaluation when method labels could bias judgment. If not blind, say so.

## 5. Evidence strength controls claim strength

Examples:

- One informal comparison: “This suggests...”
- Several cases with prompt-scoped subagents: “Directional evidence...”
- Separate sessions, repeated trials, blind evaluation, and human review: “Stronger evidence...”

Never use small samples or contaminated baselines to claim broad superiority.

## 6. Practicality matters

Do not make every check a full scientific experiment. Choose rigor based on risk.

- Quick debugging: same-context may be fine.
- Method comparison: use subagent-scoped runners and blind evaluation if possible.
- Product decision: use holdouts, repeated trials, and human feedback.
- Public claim: use stronger isolation and document limitations.
