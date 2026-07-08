# Simple comparison example

This example shows the intended lightweight style.

Scenario:
A team wants to compare two agent prompts for reviewing a short requirements document.

Approach:
1. Main agent designs the comparison.
2. Runner A sees only the task and Prompt A.
3. Runner B sees only the task and Prompt B.
4. Blind evaluator sees anonymized outputs.
5. Auditor checks whether either runner saw the other output or expected answers.

This example intentionally avoids a heavy fixed schema.
