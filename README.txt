MAX LEARNING LAB — SPANISH VOICE + ROLLER-COASTER UPDATE

For the Photo Discoveries (version 7) site delivered in the previous ZIP.
Upload app.js and index.html to the ROOT of your existing repository,
replacing those two files. No photo folders need to be uploaded again.
Keep all existing files/folders, including discovery.css and newphotos.

SPANISH AUDIO
1. Open the site after GitHub finishes publishing; refresh the page.
2. Select Español, then Grown-up corner / Rincón de adultos.
3. Under reading voice, choose Automatic / Automática if you previously
   saved a manual voice. Automatic now ranks quality ahead of dialect.
4. Tap Try this voice. You can still audition and save another choice.

Priority: Google Español/Spanish, Premium, Natural/Neural, Enhanced,
then familiar Spanish native voices, then other Spanish voices.
Region is only a tie-breaker. Normal pitch and Spanish rate 1.0 avoid
artificial pitch-shifting or excessive slowing. English stays at its
existing rate and selection policy.

The Web Speech API only exposes voices supplied by your device/browser.
It offers no universal quality or gender field. Names provide hints,
not a guarantee of naturalness or a female voice. A downloaded enhanced
voice helps only if the browser exposes it. If voices haven't loaded,
the app asks you to tap Listen again instead of speaking with an
uncontrolled system default. voiceschanged refreshes the available list.

VIDEO
Replaced the earlier SciShow Kids roller-coaster video with Jared Owen's
How Roller Coasters Actually Work, using 3D mechanical explanations.
https://www.youtube.com/watch?v=irkAtqm-eCs
This is a more detailed engineering video, so younger viewers may want
an adult to pause and explain. It is optional; the written lesson and
quiz still stand on their own. Provider availability may vary.

DEVELOPER REFERENCE
speech-functions.js contains the updated selection and speech-function
block with comments. It uses existing Max Learning Lab helper variables.
It is already included in app.js; do not add a second script tag for it.

Checked JavaScript syntax and voice-selection ranking with mock lists.
Actual voice sound must be auditioned on your iPad/phone; headless testing
cannot reproduce its installed voices. Video ID/title/channel confirmed
through YouTube oEmbed; no claim of full playback review on every device.
