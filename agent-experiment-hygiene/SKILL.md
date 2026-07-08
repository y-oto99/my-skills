---
name: agent-experiment-hygiene
description: Use when designing, running, or auditing evaluations of agent-generated outputs, method comparisons, baselines, blind reviews, or subagent-based validation. Keeps experiments lightweight while reducing self-evaluation, information leakage, label leakage, contaminated baselines, and overclaiming.
---

# Agent Experiment Hygiene

Use this skill when an agent is asked to evaluate, compare, benchmark, validate, or audit outputs produced by agents or methods.

This is not a fixed experiment framework. It is a lightweight discipline for thinking clearly about role separation, information exposure, provenance, blind evaluation, and the strength of conclusions.

## Core purpose

Avoid common agent-evaluation failures:

- the main agent creates the test, solves it, and judges itself;
- a baseline sees the new method’s output or expected answers;
- an evaluator sees method labels and is biased;
- a report claims superiority from one cherry-picked case;
- provenance is missing, so nobody knows what each agent saw;
- contaminated outputs are treated as clean results.

The goal is not perfect scientific rigor every time. The goal is to make the level of rigor explicit and appropriate to the claim being made.

## Five principles

1. **Separate roles when it matters.**  
   The main agent may know the full background. It should orchestrate, not create every comparison output itself.

2. **Control what output-generating agents see.**  
   A method runner should only see the information that would be available in real use. Do not show expected answers, competing outputs, or evaluation criteria unless that is part of the method being tested.

3. **Record what each agent saw.**  
   Keep minimal provenance: who generated the output, what they were allowed to read, what they were not supposed to read, whether they knew it was an evaluation, and known isolation limits.

4. **Blind evaluation when labels may bias judgment.**  
   If comparing outputs for quality or preference, hide method labels when practical. If blind evaluation is too costly, say so and weaken the conclusion.

5. **Match conclusions to evidence strength.**  
   A small, prompt-scoped comparison is directional evidence, not proof. Be explicit about sample size, contamination risk, failed cases, and missing human feedback.

## When to use

Use this skill for:

- comparing two or more agent methods;
- creating a baseline;
- evaluating a new prompt, workflow, or skill;
- asking subagents to test or review another agent’s output;
- preparing human feedback packets;
- checking whether an evaluation was biased or contaminated.

Do not use it as a heavy framework for every small debugging task. For quick local checks, a short note about assumptions may be enough.

## Standard questions before evaluating

Ask these before designing the evaluation:

- What exactly are we trying to learn?
- What are the methods or outputs being compared?
- Who creates each output?
- What should each output creator know?
- What information would bias them?
- Who evaluates the outputs?
- Can the evaluation be blind?
- What should be recorded so the result can be audited?
- How many cases or trials are enough for the intended claim?
- What conclusion is justified if results are mixed or weak?

## Recommended lightweight workflow

1. Define the claim being tested.  
   Example: “Method B gives more grounded reviews than Method A.”

2. Decide how strong the evidence needs to be.  
   For exploratory work, prompt-scoped subagents may be enough. For important claims, use separate sessions, holdouts, repeated trials, or human review.

3. Assign roles.  
   Use method runner agents for outputs, blind evaluator agents for scoring, and auditor agents for contamination checks when useful.

4. Build input packets.  
   Include only the information the runner should see. Explicitly list forbidden information.

5. Run method runners.  
   The main agent should not generate the comparison outputs if it knows expected answers or competing outputs.

6. Record provenance.  
   Keep it short but explicit.

7. Evaluate.  
   Blind labels if label bias matters. Track both scores and qualitative reasons.

8. Audit.  
   Check for information leakage, label leakage, missing provenance, missing cases, and overclaiming.

9. Report carefully.  
   Separate observations from conclusions. Mark contaminated or weak comparisons as such.

## Minimal provenance

Strict JSON is optional. A short Markdown note is often enough.

Record:

- generator role;
- allowed inputs;
- forbidden inputs;
- actual inputs read, if known;
- whether the task was disclosed as an evaluation;
- whether method labels or expected answers were known;
- isolation level and limitations;
- whether the output should be considered clean, clean-by-instruction, possibly contaminated, or contaminated.

## Simple isolation levels

- **Same-context:** fast, weak. The same agent sees everything. Use only for informal checks.
- **Subagent-scoped:** practical default. The main agent orchestrates; runner/evaluator subagents receive limited instructions and provenance is recorded.
- **Separate-session / external:** stronger. Use for important baselines, human feedback, or claims that need more confidence.

## Reporting results

Good reporting says:

- what was compared;
- who generated each output;
- what information each generator saw;
- whether evaluation was blind;
- sample size and number of trials;
- which outputs were excluded and why;
- where each method was strong or weak;
- whether the result is exploratory or strong enough to act on.

Avoid saying “Method B is better” when the evidence only supports “Method B looked better on grounding in this small sample.”

## References

Read these when needed:

- `references/principles.md` — concise principles and decision rules.
- `references/patterns.md` — good patterns and anti-patterns.
- `references/prompts.md` — short templates for runner, evaluator, and auditor agents.
- `references/limitations.md` — what this skill cannot guarantee.
