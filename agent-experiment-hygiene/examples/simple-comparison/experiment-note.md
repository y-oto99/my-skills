# Experiment note

Goal: compare two review prompts for usefulness and grounding.

Methods:
- Method A: concise review prompt.
- Method B: structured review prompt.

Runner isolation:
- Runner A sees: task.md, prompt_a.md.
- Runner B sees: task.md, prompt_b.md.
- Neither runner sees expected issues, the other output, or the evaluation rubric.

Evaluation:
- Blind evaluator sees output_1.md and output_2.md.
- Labels are hidden until after scoring.

Conclusion policy:
- With one case, report directional observations only.
- Do not claim one method is generally superior.
