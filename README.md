# Max's Learning Lab — Discovery Edition

A bilingual learning website for Max and family. Ready for GitHub Pages; no build system, accounts, ads, paid API, or remote image dependency.

## What's inside

| Collection | Available |
|---|---:|
| Places with photos, facts, map pins and quizzes | 112 |
| City Randomizer (shuffled without repeats until exhausted) | 50 |
| Remarkable people, including Lionel Messi | 30 |
| People + place questions in the Quiz bank | 225 |
| Numbered Word Search themes, 10 words each | 100 in each language |
| Numbered I Spy scenes, 18 targets each | 40 |
| Draw & Discover references | 200 |
| Hangman words with clues | 100 in each language |
| Spelling Bee words with clues | 100 in each language |
| Math | 462 easy / 10,362 stretch arithmetic expressions |

The 50 Randomizer cities are part of the 112 total destinations. Word Search has the same 100 themes in English and Spanish, with different language-specific boards. Hangman and Spelling Bee share a 100-concept vocabulary collection; they practice different skills. Drawing prompts are original SVG outlines. Math is replayable; generated problems can recur, and a different expression earns points once.

The homepage has two photo cards and seven illustrated learning tools, without collection counts. Explore locations opens the map and a searchable photo directory. Family connections appear inside the destination pages. A new featured person appears each time Home opens; Messi is intentionally excluded from the homepage rotation so he can be discovered inside the roster.

## Start and update

See START-HERE.md for uploading the full site or updating a recent version. Open index.html for a quick local preview on a computer, or serve this folder from any static web host. All paths are relative for GitHub project sites.

For a new repository, `max-learning-lab-v2` is a suitable name. Upload the extracted files, not the ZIP itself. The homepage file must be named index.html at the repository root.

## Play and progress

- All main controls work with touch, mouse and keyboard.
- Word Search: circle a whole word, drag across it, or tap its first and last letters.
- I Spy: circle a target object; use Move and zoom for smaller screens, or Tap mode as an alternative.
- Draw & Discover: follow the reference, choose colors and brushes, and check the outline. A guide is optional. Undo and eraser are available.
- Hangman: each wrong letter adds a body part, with six guesses available. Numbered selectors let the child choose a fresh word.
- Lesson and practice answers earn 10 points once per unique question or expression. Completing an entire I Spy scene, Word Search, or matched drawing earns 1 point once. A short celebration appears; replays remain available.
- Drawing checks use a forgiving outline comparison, not an AI assessment. It can occasionally misjudge a drawing. The optional guide helps.
- Progress, language and voice preference save in the current browser on this device. Nothing is sent to a server. Grown-up corner can export/import a progress backup.
- This is a static site, not a cloud-synced account. Different devices have separate progress. Browsers may share local storage across GitHub repositories under the same account origin.
- Optional read-aloud uses English or Spanish voices installed on the device. Quality varies by device. Choose a voice in Grown-up corner.

## Content and attribution

Destinations and people have source links on their pages. Real photographs are bundled locally with creator/license information under Photo credits & research. Family connections were supplied by Max's parent; geographic pins show public destinations, not home addresses. Published GitHub Pages files and those family notes are publicly accessible.

## Editable files

- data/config.js: default name, badges, configuration.
- data/family.js, data/places-a.js, data/places-b.js: original English destinations.
- data/people-expanded.js: earlier expanded people/family lessons and photo galleries.
- data/discoveries.js: 50 city discoveries, Boise, Las Terrenas, Galápagos, Messi, their Spanish translations and photo metadata.
- data/art.js: 200 original drawing references.
- app.js: language data, map, all activities and application shell.
- discovery.css: the new dark photograph-led layout; theme.css and styles.css contain supporting styles.
- wordsearch.css, spy.css, draw.css, practice.css, map.css: activity styles.

To add content, request matching English/Spanish records, a licensed local photograph and child-friendly quiz questions. See CONTENT-TEMPLATE.txt. Never paste private API keys into this public website.
