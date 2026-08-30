# Authority Links — validated by HTTP status from this container (2026-08-30)

| # | URL | status | used for |
|---|-----|--------|----------|
| 1 | https://www.ktm.com/en-us/models/adventure/2026-ktm-890-adventurer/technical-specifications.html | 200 | 890 R specs |
| 2 | https://www.yamahamotorsports.com/models/tenere-700/specs | 200 | T7 specs, MSRP, 1-yr warranty |
| 3 | https://www.motorcycle.com/specs/cfmoto/on-off-road/2026/ibex/800-e/detail.html | 200 | Ibex 800 E specs, MSRP, 2-yr warranty |
| 4 | https://crashstats.nhtsa.dot.gov/Api/Public/ViewPublication/813824 | 200 (PDF) | NHTSA Motorcycles: 2024 Data |
| 5 | https://www.progressive.com/answers/motorcycle-accessory-coverage/ | 200 | $3,000 default / $30,000 max accessory limit |
| 6 | https://www.nicb.org/news/news-releases/lock-your-bikes-motorcycle-thefts-rise-third-consecutive-year | 200 | 54,736 US motorcycle thefts (2022) |
| 7 | https://www.iii.org/article/background-on-motorcycle-crashes | 200 | III background on motorcycle crashes |

## REJECTED
- `https://www.cfmotousa.com/**` — HTTP 403 on every path tested (root, model page, inventory unit,
  owner's-manual PDF). Response carries `server: cloudflare` + `cf-mitigated: challenge`, i.e. the
  documented datacenter-IP block, not a dead page. Residential-pool heartbeat scan found no live node,
  so it could not be fetched via the escape hatch either. **Not linked** — an unverifiable URL does
  not ship. Ibex specs cite source #3 instead.
- `https://www.nhtsa.gov/road-safety/motorcycles` — 403 from this container. Used the crashstats.dot.gov
  publication endpoint (#4) instead, which is the primary data anyway.
