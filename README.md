# news-image-20261124

[![make.fun · news-image-20261124](https://make.fun/badge/news-image-20261124.svg)](https://make.fun/bounty/news-image-20261124?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124)
[![rank](https://make.fun/badge/news-image-20261124/epul2/news-image-20261124/rank.svg)](https://make.fun/bounty/news-image-20261124/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124)
[![reward](https://make.fun/badge/news-image-20261124/epul2/news-image-20261124/reward.svg)](https://make.fun/bounty/news-image-20261124?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124)

A working entry for the make.fun bounty "Sum up 24 November's world news in one image": a program that writes one image of the day's world news to `/output/entry.png`. An AI judge compares the images two at a time, and the 50 best share $100.

## The image

A one-page newspaper, "THE WORLD IN ONE DAY", dated **Tuesday, 24 November 2026**:

- **Lead:** a Russian drone crosses into Polish airspace during an attack on Ukraine; Poland activates its air defences and NATO sends AWACS surveillance planes.
- **Markets:** the Nikkei rebounds 3.91% to 58,644.63, its biggest one-day gain since July 31, after trade deals and Nvidia's rally.
- **War:** Ukraine sinks the Russian corvette Merkury and hits the cargo ship MV Angara at Benghazi, Libya.
- **Trade:** Trump announces trade deals with Japan and Indonesia; the EU threatens $84 billion in retaliatory tariffs.
- **Tech:** Nvidia restores Jensen Huang as CEO.
- **USA:** ICE detains a father and daughter at Seattle airport; a Princeton neuroscientist is held at a D.C. airport.
- **Climate:** after COP31 collapses, focus shifts to COP32 in Addis Ababa.
- **In brief:** 700,000+ Russian war dead (new Meduza/Mediazona estimate), Himalaya floods, Brazil storm, Thailand–Cambodia ceasefire, South Korea scrambles jets, Melat Kiros first Gen Z woman elected to US Congress.

The hero illustration (a NATO AWACS and scrambling fighters over Poland) is an original illustration made for this entry; it is not a photograph of a real event.

## How it works

`main.ts` (Node 22, standard library only) copies `entry.png` from the repository root to `/output/entry.png`. That is all the program has to do. The image was laid out in `page.html` and rendered to `entry.png` (1024×1024, under 1 MiB) with a headless browser.

Run it locally:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

## License

MIT — see `LICENSE`.
