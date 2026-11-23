# One-Line Roast: The Gadget You Use Every Day

[![make.fun bounty](https://make.fun/badge/u-daring-gecko-25-one-line-roast-the-gadget-you-use-3d6aa610.svg)](https://make.fun/bounty/u-daring-gecko-25-one-line-roast-the-gadget-you-use-3d6aa610)
[![rank](https://make.fun/badge/u-daring-gecko-25-one-line-roast-the-gadget-you-use-3d6aa610/adzinsyariif/one-line-roast-gadget/rank.svg)](https://make.fun/bounty/u-daring-gecko-25-one-line-roast-the-gadget-you-use-3d6aa610)
[![reward](https://make.fun/badge/u-daring-gecko-25-one-line-roast-the-gadget-you-use-3d6aa610/adzinsyariif/one-line-roast-gadget/reward.svg)](https://make.fun/bounty/u-daring-gecko-25-one-line-roast-the-gadget-you-use-3d6aa610)

## What this entry is

An entry for the make.fun bounty **"One-Line Roast: The Gadget You Use Every Day"**. The task: write one original line, up to 200 characters, roasting a gadget or app used every day. A judge model compares entries pairwise on how funny the roast is, how fresh the angle is, and how neatly it is worded.

## The line

> "My smartwatch throws me a party for 10,000 steps a day, nine thousand of which are just the walk from the couch to the fridge."

The watch I wear every day counts my steps and cheers me on for hitting 10,000 — and most of those steps are just me commuting to the fridge. The gadget's praise is the joke: it is an overenthusiastic coach applauding a snack run.

## How main.ts works

`main.ts` (Node 22) holds the picked line as a single string constant and writes exactly that string — nothing else — to `entry.txt` inside the output directory (`/output` by default, or `$MAKEFUN_OUTPUT_DIR` when set, which is how the entry is verified locally). It creates the output directory first if it does not exist.

## How it was built

Ten candidate roast lines were drafted in `candidates.md`, each judged against the bounty judge's criteria (daily gadget, funny on first read, fresh angle, neat wording, specific concrete gripe), and the smartwatch line was picked and developed from there. The program was run twice into separate output directories and the outputs diffed to confirm byte-identical, deterministic output.

## License

MIT — see [LICENSE](LICENSE).
