# Instruction consistency tests (human-reviewed IR)

This suite targets the **normative instructions** in the current `SKILL.md`, `references/state.md`, and `references/delegation.md`. It is not a test of live agent performance or source-document completeness.

## Pipeline

1. Read source instructions and preserve a short verbatim anchor plus file/section in `rules.json`.
2. Manually convert selected instructions into a restricted intermediate representation:
   `{id, source, quote, when: {dimension: value}, action, modality: require|forbid}`.
3. Evaluate pairwise overlap: rules on the **same action** conflict if their conditions can both hold and one requires what the other forbids. Distinct values of a single-valued dimension are mutually exclusive.
4. Use `cases.json` for clean baseline, intentional contradictory additions and scoped non-collisions. Each failing hypothetical rule carries a **witness**: the joint condition values under which it conflicts.
5. Review the source text and IR by a human before treating any diagnostic as meaningful. A clean result proves only that no collision was found **within this manually selected vocabulary and abstraction**.

Run `node task-orchestrator/tests/consistency/check.cjs` from anywhere after cloning. No dependencies. Exit nonzero when a fixture does not match expectation.

## Current scope / audit result

The initial 16 extracted rule candidates are pairwise collision-free **under the restricted IR**. The fixture suite includes 10 cases: a baseline, 7 injected collision regressions and 2 guards with no overlap. These are **static conflict cases**, not behavioral evaluations of a language model.

Review notes:
- `R05` (routine autonomy) and `R06/R11` (significant operations) are **not** inconsistent: the shared action differs, and the risk predicates separate their application.
- `R08` (no mandatory central reports when source artifacts suffice) and `R09` (minimal handoff when they do not) are **not** inconsistent: their conditions are disjoint.
- `R02` and `R03/R13` separate accessible-source reconciliation from inaccessible-source uncertainty.
- **Potential ambiguity, not proved contradiction:** "write only to explicitly appropriate destinations" and "default to read-only discovery and small reversible changes" do not define a complete permissions/approval lattice. Their application still requires judgment about authorization and consequence.
- **Potential ambiguity, not proved contradiction:** `R09` requests a handoff when no authoritative artifact is available, but cannot guarantee a worker can be reached; the Skill separately requires capability transparency.
- The IR does not model temporal ordering, exceptions beyond one guard, implied actions, priorities, or semantic equivalence of different action labels. It may miss conflicts or produce false positives if the manual translation is wrong.

## Witness interpretation

For collision case `T04`: assume `prior_job_outcome=unknown`. R07 forbids `relaunch_job`; injected X04 requires `relaunch_job` under the same condition. Both cannot be satisfied. In `T06`, the added approval requirement applies only at `action_risk=significant`, so it does not collide with R05, which forbids repeated intermediate approval for routine reversible details.

## Research inspiration (not an implementation claim)

- [WIRE](https://arxiv.org/abs/2605.27784): source-linked extracted rules, intermediate clauses, candidate collision checks and concrete witnesses. This suite borrows the *pattern*, not WIRE's PyRule/solver/runtime evaluation.
- [VeriSpec](https://github.com/HIPREL-Group/VeriSpec): require a concrete witness and check whether surrounding context dissolves the apparent conflict.
- [Arbiter](https://github.com/fsgeek/arbiter/blob/main/docs/paper.md): distinguish hard contradictions, scope overlap and ambiguous priorities in system prompts.
- [FRET](https://ntrs.nasa.gov/citations/20200001989): restricted natural language and explicit semantics as a disciplined intermediate step.
- [ARTEMIS](https://cs.stanford.edu/~trippel/pubs/mendoza_ICSE26.pdf): human review of competing formalizations; **not** reproduced here.

The suite is intentionally a compact, inspectable regression guard; it does not claim formal proof of the natural-language Skill.
