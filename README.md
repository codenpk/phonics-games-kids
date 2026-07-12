# Phonics Games for Kids 🔤

Free, browser-based phonics games for ages 3–8 — from letter recognition to reading comprehension. No installation, no login, no internet required after the first load. Open the launcher and play.

**Live site:** https://codenpk.github.io/phonics-games-kids/launcher.html

---

## What's inside

| File | Purpose |
|------|---------|
| `launcher.html` | Game hub — all games in one place |
| `games/phonics.html` | Phonics Tap — tap the missing sound (30 questions) |
| `data/phonics.js` | Question data for Phonics Tap |
| `PHONICS_GAMES.md` | Full catalog of 78 game designs across 19 phonics topics |

### The 78-game catalog covers

1. Letter Recognition
2. Letter Sounds
3. Rhyming & Word Families
4. CVC Words (short vowels)
5. Consonant Digraphs (SH, CH, TH, WH)
6. Consonant Blends
7. Long Vowels & CVCe
8. R-Controlled Vowels
9. Vowel Diphthongs
10. Vowel Teams
11. Sight Words
12. Syllables
13. Reading Fluency
14. Spelling
15. Sentence Reading
16. Listening Skills
17. Vocabulary
18. Reading Comprehension

Each design includes age range, skill targets, step-by-step rules, 20+ sample words, 3 difficulty levels, 5 variations, 4 accessibility adaptations, educator tips, and digital/mobile adaptation notes.

---

## How to play locally

```bash
git clone https://github.com/codenpk/phonics-games-kids.git
# open launcher.html in any browser — no server needed
open launcher.html         # macOS
start launcher.html        # Windows
xdg-open launcher.html     # Linux
```

All data files use `window.X = [...]` — safe for `file://` protocol with no CORS issues.

---

## How to add a new game

1. **Design** — Use `PHONICS_GAMES.md` as the reference format for the 25-field design spec.
2. **Data** — Create `data/your-game.js` with `window.YOUR_GAME = [...]`.
3. **Game page** — Create `games/your-game.html`. Copy `games/phonics.html` as a starter.
4. **Launcher card** — Add a `.game-card` entry to `launcher.html`.
5. **Submit a PR** — See [CONTRIBUTING.md](CONTRIBUTING.md).

---

## Tech stack

- Pure HTML + CSS + Vanilla JS
- Zero dependencies, zero build step
- Works on any device with a browser
- `file://` safe (no fetch, no imports)
- Web Audio API for sound feedback (gracefully silent if unavailable)

---

## Pedagogical approach

Games are grounded in **synthetic phonics** (phoneme → grapheme encoding) combined with **onset-rime** and **whole-word** approaches where appropriate. The 78-game progression follows the evidence-based sequence:

```
Letter names → Letter sounds → Blending → Segmenting → Word families
→ Digraphs → Blends → Long vowels → Sight words → Fluency → Comprehension
```

Design draws on:
- Ehri's phases of word reading development
- Clay's reading recovery research
- Beck, McKeown & Kucan's vocabulary tiers
- Palincsar & Brown's reciprocal teaching
- Gathercole's working memory in education

---

## Contributing

We welcome contributions from educators, developers, parents, and designers. See [CONTRIBUTING.md](CONTRIBUTING.md) to get started.

---

## License

MIT — see [LICENSE](LICENSE). Free to use, adapt, and redistribute for any purpose including commercial, with attribution.
