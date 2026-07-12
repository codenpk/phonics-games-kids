# Contributing to Phonics Games for Kids

Thank you for wanting to help children learn to read. Every contribution — a new game, a bug fix, a word list, a translation — makes a difference.

---

## Ways to contribute

| What | How |
|------|-----|
| New game (coded) | Build the HTML/JS, open a PR |
| New word data | Edit or add a `data/*.js` file, open a PR |
| New game design | Add a 25-field entry to `PHONICS_GAMES.md`, open a PR |
| Bug fix | Open an issue first if unsure, then PR |
| Accessibility improvement | Always welcome — no issue needed |
| Translation | Add a `lang/` folder with translated word lists |
| Educator feedback | Open a Discussion — your classroom insight shapes the design |

---

## Ground rules

- Games must be appropriate for ages 3–8. No violent, scary, or adult content.
- Pedagogical decisions should cite evidence. If you're changing the phonics sequence, explain why.
- All contributions are released under the MIT licence.
- Be kind. See [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md).

---

## Adding a new game: step by step

### 1. Design first (optional but encouraged)

Add a 25-field entry to `PHONICS_GAMES.md` before writing any code. This lets the community review the pedagogy before implementation. The 25 fields are:

> Theme, Age, Level, Objective, Skills, Players, Time, Materials, Setup, Step-by-Step Rules, Example Round, Sample Words (20+), Difficulty (Easy/Medium/Hard), Scoring, Rewards, Variations (×5), Accessibility (×4), Common Mistakes, Teacher Tips, Parent Tips, Extension, Printable Materials, Mobile App Adaptation, Educational Standards

### 2. Create the data file

```js
// data/your-game.js
// Format depends on the game type. Look at data/phonics.js for reference.
window.YOUR_GAME = [
  { /* question object */ },
];
```

Rules for data files:
- Use `window.X = [...]` — not ES modules, not `export` — so `file://` works without a server.
- Include at least 20 items per game so shuffling feels fresh.
- Use uppercase for displayed words; emoji for visual cues.

### 3. Create the game HTML

```
games/your-game.html
```

Copy `games/phonics.html` as a starting point. Keep the same structure:
- Top bar with back link + score badge
- Progress bar
- Card (question area)
- Done screen with confetti + Play Again

The gold/amber palette (`#f59e0b`, `#d97706`, `#92400e`) is the house style for phonics games. Adapt sparingly.

### 4. Add a launcher card

In `launcher.html`, add a `.game-card` under the appropriate section. Use `.card-gold` for any phonics skill game. Add a "Coming Soon" card (`.card-coming`) if the design is done but the code isn't ready yet.

### 5. Test it

```bash
open launcher.html   # or just drag it into a browser tab
```

Check:
- [ ] Works on mobile (375 px wide minimum)
- [ ] Works offline / via `file://`
- [ ] Score increments correctly
- [ ] Correct answer always highlighted after a wrong guess
- [ ] Done screen shows and Play Again resets fully
- [ ] No console errors

### 6. Open a pull request

Use the PR template. Fill in all sections — especially the **Pedagogy** section. A reviewer with an education background will look at that first.

---

## Reporting bugs

Use the **Bug report** issue template. Include:
- What you expected
- What happened instead
- Browser and OS
- A screenshot if the layout looks broken

---

## Suggesting a new game

Use the **Game idea** issue template. You don't need to build it yourself — a clear description of the game, the skill it teaches, and the age range is enough to start a conversation.

---

## Code style

- Vanilla JS only — no frameworks, no build tools, no `npm install`.
- Indent with 2 spaces.
- Keep CSS in the `<style>` block of the HTML file (no external stylesheets).
- No comments explaining what the code does — only comments explaining *why* if the reason is non-obvious.
- No TypeScript, no JSX, no bundlers. The goal is a single file you can email to a teacher.

---

## Questions?

Open a [Discussion](https://github.com/codenpk/phonics-games-kids/discussions). Discussions are the right place for pedagogy questions, ideas that aren't ready to be issues yet, and general conversation about early literacy.
