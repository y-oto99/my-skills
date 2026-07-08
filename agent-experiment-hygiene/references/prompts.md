# Prompt Templates

These are starting points. Adapt them to the task. Do not overfit them into a mandatory framework.

## Method runner subagent

Use when a subagent should produce an output under limited information.

```text
You are asked to perform the task using only the information provided below.

Allowed information:
- <list allowed files or pasted content>

Do not use:
- <list forbidden files, prior outputs, expected answers, labels, comparison results>

Task:
<task description>

Requirements:
- Do not assume facts not present in the allowed information.
- If something is unclear, state the uncertainty rather than filling it in.
- Produce the requested output.
- Include a short note listing what information you used.
```

## Direct / ordinary baseline runner

Use when asking what a normal agent would produce from only the original task.

```text
Use only the task statement below.
Do not use prior solutions, expected answers, evaluation criteria, or outputs from other methods.

Task:
<paste task>

Produce:
- output
- brief note of what you relied on
```

Avoid telling the runner that it is a baseline, that it is being compared, or what the expected answer is, unless that is part of the real use condition.

## Formal or tool-using runner

Use when the method being tested normally uses a skill, tool, or workflow.

```text
Use the specified skill/workflow as it would be used in normal operation.

Allowed information:
- task input
- skill instructions needed for normal use
- tool/scripts needed for normal use

Do not use:
- expected answers
- previous runs
- comparison reports
- outputs from other methods

Produce:
- normal method output
- intermediate artifacts normally produced by the method
- brief provenance note
```

## Blind evaluator

```text
You will evaluate anonymized outputs for the same task.
Do not infer or use method identity.
Do not open hidden labels or provenance.

Task:
<paste task>

Outputs:
- output_1
- output_2
- output_3

Evaluate using these criteria:
- <criteria>

Return:
- scores
- preference ranking
- short reasons
- any suspected label leakage
```

## Auditor

```text
Review whether the evaluation setup is fair enough for the claim being made.

Check:
- Were output generators separated from the main evaluator?
- What did each runner see?
- Did any runner see expected answers or other method outputs?
- Did evaluators see method labels?
- Was provenance recorded?
- Were failures or invalid outputs reported?
- Is the conclusion too strong for the evidence?

Return:
- pass/fail or risk level
- contamination risks
- missing evidence
- recommended caveats
```

## Final report skeleton

```text
# Evaluation Summary

## Goal
...

## Methods or outputs compared
...

## Role separation
...

## Information exposure
...

## Evaluation setup
...

## Results
...

## What seems supported
...

## What is not supported
...

## Risks and limitations
...

## Next steps
...
```
