# Discovery Edition — implementation notes

The approved homepage has two photographic entry points and seven illustrated learning cards. No numerical collection labels on the homepage. English and Spanish labels have space to wrap. Main controls are large enough for touch; dense Word Search letter cells use continuous gestures and first/last-letter selection rather than requiring every cell to be a large standalone button.

Explore locations opens the Natural Earth world map and a searchable photographic directory. The family list is presented as destinations without a family category label. Personal connections are only revealed in place profiles. The Randomizer is a photo card inside this directory, with no pictured destination name. It deals 50 city profiles in a shuffled deck before repeating.

Thirty people have photos and two fact-backed quiz questions each. The homepage cycles through people when reopened, excluding Lionel Messi, who remains a surprise in the roster. People and places share their question score IDs with the Quiz activity.

Activity collections:
- Word Search: 100 numbered themes in each language, 10 words each, 10×10 grids, validated placements. Continuous circles, drag and first/last taps. Spanish accented letters remain visible.
- I Spy: 40 scene compositions, 18 targets plus decoys per scene. Outlined objects, saved discoveries, circle/move/tap modes and zoom. Thematic scenes reuse an original 200-reference art vocabulary in different arrangements.
- Draw & Discover: 200 distinct original line references, colors, brushes, eraser, undo, optional guide, local draft persistence. Shape feedback uses normalized outline similarity and tolerances. It is not a semantic AI judgment.
- Hangman and Spelling Bee: 100 bilingual word concepts, numbered choices, saved progress, touch letters. Actual gallows and six-part stick figure for Hangman.
- Math: bounded arithmetic in two levels: 462 easy expressions and 10,362 stretch expressions, including 2/5/10 multiplication and division. Expressions may repeat over time; expression IDs prevent duplicate points.
- Quiz: all 225 place/person questions, favoring unanswered items.

Completed full Word Searches, I Spy scenes and accepted drawings earn 1 point once. Lesson/practice question answers earn 10 points once. A nonblocking 2.6-second celebration honors reduced-motion preference. State remains browser-local. Existing progress key and backup version are retained.

All photographs are actual licensed source images, with attribution in the website. New city images were visually reviewed; a sideways Kyoto source was replaced. The homepage mockup was a design reference; the coded homepage uses local source photographs and original SVG thumbnails. No generated mockup raster is used as the site itself.

Local browser verification covers responsive phone/tablet viewports, touch gestures, route disposal, language switching, repeat-score prevention, photos, map/directory navigation and Randomizer uniqueness. Tests run in Chromium with simulated touch, not physical Safari or Android hardware. A quick check on Max's iPad remains useful before handing it over.

No service worker, third-party analytics, login or external paid service. Optional speech comes from installed device voices. Source links and license links leave the site when opened by a grown-up.
