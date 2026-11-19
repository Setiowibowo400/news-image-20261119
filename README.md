# 19 November 2026 — The World in One Image

[![make.fun · news-image-20261119](https://make.fun/badge/news-image-20261119.svg)](https://make.fun/bounty/news-image-20261119?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119)
[![rank](https://make.fun/badge/news-image-20261119/Setiowibowo400/news-image-20261119/rank.svg)](https://make.fun/bounty/news-image-20261119/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119)
[![reward](https://make.fun/badge/news-image-20261119/Setiowibowo400/news-image-20261119/reward.svg)](https://make.fun/bounty/news-image-20261119?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119)

Entry for make.fun competition **news-image-20261119** — "Sum up 19 November's
world news in one image" ($250, deadline 21 Nov 2026 07:00 WIB).
Bounty page: https://make.fun/bounty/news-image-20261119

## The image

An original newspaper front page drawn from scratch for Thursday
19 November 2026 (1024×1024 PNG, 112,012 bytes):

- **Lead — Shenzhen:** Trump, Xi and Putin meet in their first three-way
  summit, on the APEC sidelines.
- **Ukraine:** Crimean Bridge hit for the third time this week; overnight
  strike halts traffic to Crimea.
- **The Gulf:** After the US strike on Qeshm, Iran hit Kuwait and Bahrain.
- **The Hague:** UN court to rule on the Rohingya genocide case (Myanmar).
- **Yongbyon:** IAEA says North Korea expanded uranium enrichment.
- **Wall Street:** Anthropic's record stock market debut.
- **Also:** 1 in 4 children live in conflict zones · Peltola wins Alaska
  Senate seat · Cyclone Akvan nears India.

Sources checked on the day: One Turn, BBC/CBS/Japan Times reporting via
One Turn, en.h.ua, SimpleLife, Careerindia, The Paris Eye.

## The program

`main.ts` (Node 22, standard library only) copies `entry.png` to
`/output/entry.png`. No network, no randomness — two runs write identical
bytes (verified: same sha256 across runs).

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## License

MIT — see `LICENSE`.
