# Limitations

This skill improves experiment hygiene. It does not guarantee objective truth.

## Subagent isolation is not always technical isolation

A subagent may be limited by prompt instruction, not by OS-level access control. Treat this as `clean by instruction`, not absolute proof.

Use stronger isolation when the claim is important:

- separate session;
- separate workspace;
- minimal input packet;
- external model;
- human evaluator.

## Provenance may include self-report

A provenance note is useful, but not the same as a security audit. It records the intended conditions and any known deviations.

## Blind evaluation can leak through style

Even if labels are removed, an output may reveal its method through terminology, structure, file names, or stylistic fingerprints. Auditors should check for label leakage.

## Small samples are weak evidence

A few examples can reveal problems or give directional evidence. They do not establish general superiority.

Use cautious language:

- “In these cases...”
- “This suggests...”
- “Directional evidence...”
- “Further testing is needed...”

## Human preference is not the same as correctness

A human may prefer a more readable output even if another output is more grounded or complete. Keep evaluation axes separate.

## Too much rigor can be counterproductive

Not every development check needs subagents, blind packets, repeated trials, and statistics. Choose rigor according to the risk and the strength of the conclusion you want to make.

## This skill does not replace domain evaluation

For high-stakes domains, specialist review may be necessary. This skill helps structure the evaluation process; it does not certify domain correctness.
