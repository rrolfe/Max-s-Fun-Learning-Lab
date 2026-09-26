/* A second question for each original profile, supported by its existing fact text and sources. */
window.MLL_PEOPLE_EXTRA={
'einstein':{category:'science',quiz2:{question:'Which instrument did Albert Einstein play?',options:['Trumpet','Violin','Drums'],answer:1,explain:'The violin! Albert loved music as well as science.'}},
'katherine-johnson':{category:'science',quiz2:{question:'What did John Glenn ask Katherine to check?',options:['His lunch','His shoes','The computer’s answers'],answer:2,explain:'He asked her to check the computer’s answers before his flight around Earth.'}},
'cousteau':{category:'explorers',quiz2:{question:'What was Cousteau’s exploring ship called?',options:['Calypso','Titanic','Apollo'],answer:0,explain:'Calypso! His team used the ship to explore the ocean.'}},
'frida-kahlo':{category:'arts',quiz2:{question:'What does Casa Azul mean?',options:['Red Castle','Blue House','Green Garden'],answer:1,explain:'Blue House! Frida’s home is now a museum.'}}
};
window.MLL_ES_PEOPLE_EXTRA={
'einstein':{quiz2:{question:'¿Qué instrumento tocaba Albert Einstein?',options:['Trompeta','Violín','Batería'],answer:1,explain:'¡El violín! A Albert le gustaban la música y la ciencia.'}},
'katherine-johnson':{quiz2:{question:'¿Qué le pidió John Glenn a Katherine que revisara?',options:['Su almuerzo','Sus zapatos','Las respuestas de la computadora'],answer:2,explain:'Le pidió que revisara las respuestas de la computadora antes de su vuelo alrededor de la Tierra.'}},
'cousteau':{quiz2:{question:'¿Cómo se llamaba el barco explorador de Cousteau?',options:['Calypso','Titanic','Apollo'],answer:0,explain:'¡Calypso! Su equipo usó el barco para explorar el océano.'}},
'frida-kahlo':{quiz2:{question:'¿De qué color era la famosa casa de Frida?',options:['Roja','Azul','Verde'],answer:1,explain:'¡Azul! La Casa Azul es ahora un museo.'}}
};

;
/* Researched 2026-09-26. Activities and stretch prompts are original learning suggestions.
   Source-check notes: people-a-research.md. The two language arrays have matching IDs,
   source URLs, categories, and quiz answer indexes. No external script dependencies. */
window.MLL_MORE_PEOPLE_A = [
  {
    id: 'neil-armstrong', name: 'Neil Armstrong', role: 'Astronaut and pilot',
    category: 'explorers', country: 'United States', years: '1930–2012',
    hook: 'His Moon walk was a giant team achievement.',
    facts: [
      'Neil became the first person to walk on the Moon during the Apollo 11 mission in 1969.',
      'Buzz Aldrin joined him on the Moon. Michael Collins flew their other spacecraft around the Moon.',
      'Before becoming an astronaut, Neil was a test pilot. He flew aircraft to help engineers learn how they worked.'
    ],
    stretch: {question: 'Can someone help a mission without walking on the Moon?', answer: 'Yes! Pilots, engineers, mathematicians, and many other people do different jobs that a mission needs.'},
    quiz: {question: 'Where did Neil walk in 1969?', options: ['Mars', 'The Moon', 'Jupiter'], answer: 1, explain: 'The Moon! Neil was part of the Apollo 11 team.'},
    quiz2: {question: 'What was Neil before he became an astronaut?', options: ['A test pilot', 'A book printer', 'A music teacher'], answer: 0, explain: 'A test pilot. Flying aircraft helped him learn about them.'},
    activity: {title: 'Build a mission team', prompt: 'Plan a pretend Moon mission. Give three people different jobs: fly, check the route, and study rocks. Explain why each job matters.'},
    wikiTitle: 'Neil Armstrong', photoAlt: 'Astronaut Neil Armstrong in his space suit',
    sources: [
      {title: 'NASA: Neil A. Armstrong', url: 'https://www.nasa.gov/people/neil-a-armstrong/'},
      {title: 'NASA: Apollo 11 mission overview', url: 'https://www.nasa.gov/history/apollo-11-mission-overview/'}
    ]
  },
  {
    id: 'leonardo-da-vinci', name: 'Leonardo da Vinci', role: 'Artist and inventor',
    category: 'arts', country: 'Italy', years: '1452–1519',
    hook: 'His drawings brought art and curious questions together.',
    facts: [
      'Leonardo painted the Mona Lisa. He also studied plants, water, and the human body.',
      'He filled notebooks with drawings, observations, and ideas for machines. A sketch could help him think.',
      'Many of his notes use mirror writing: the letters run backward, from right to left!'
    ],
    stretch: {question: 'How can drawing help you understand something?', answer: 'Drawing makes you look closely at shapes and parts. You may notice a detail that you missed at first.'},
    quiz: {question: 'Which painting did Leonardo make?', options: ['The Mona Lisa', 'A photograph of the Moon', 'A modern comic book'], answer: 0, explain: 'The Mona Lisa is one of Leonardo’s paintings.'},
    quiz2: {question: 'What was unusual about many of Leonardo’s notes?', options: ['They were written on snow', 'They had no letters', 'They used mirror writing'], answer: 2, explain: 'He often wrote backward, from right to left.'},
    activity: {title: 'Draw to discover', prompt: 'Look closely at a leaf or a spoon. Draw three details you notice. Add one question beside your drawing.'},
    wikiTitle: 'Leonardo da Vinci', photoAlt: 'A historical portrait of Leonardo da Vinci',
    sources: [
      {title: 'Royal Collection Trust: The life of Leonardo da Vinci', url: 'https://www.rct.uk/collection/stories/leonardo-in-the-royal-collection/the-life-of-leonardo-da-vinci'},
      {title: 'Victoria and Albert Museum: Leonardo’s notebooks', url: 'https://www.vam.ac.uk/articles/leonardo-da-vincis-notebooks'}
    ]
  },
  {
    id: 'nikola-tesla', name: 'Nikola Tesla', role: 'Electrical inventor',
    category: 'science', country: 'Born in present-day Croatia; worked in the United States', years: '1856–1943',
    hook: 'He helped electricity turn the wheels of machines.',
    facts: [
      'Nikola helped develop systems that use alternating current, or AC. This kind of electric current changes direction again and again.',
      'His electric motor used magnetism to turn electrical energy into movement.',
      'In his memories of childhood, Nikola wrote that he liked feeding the family’s pigeons, chickens, and other birds.'
    ],
    stretch: {question: 'Can something invisible make an object move?', answer: 'Yes. A magnetic field is invisible, but its force can move objects. In a motor, magnetic forces help turn a part.'},
    quiz: {question: 'What does an electric motor help make?', options: ['Movement', 'Moonlight', 'Rain clouds'], answer: 0, explain: 'Movement! A motor turns electrical energy into motion.'},
    quiz2: {question: 'What did Nikola remember feeding as a child?', options: ['Sharks', 'Pigeons and other birds', 'Polar bears'], answer: 1, explain: 'Birds! He wrote about feeding his family’s pigeons and chickens.'},
    activity: {title: 'Find the movement', prompt: 'With a grown-up, name three everyday machines that have moving parts. Which might use an electric motor? Draw one without taking it apart.'},
    wikiTitle: 'Nikola Tesla', photoAlt: 'A portrait of inventor Nikola Tesla',
    sources: [
      {title: 'Smithsonian: Electric motor for alternating current', url: 'https://www.si.edu/object/nmah_739995'},
      {title: 'Tesla Science Center: About Nikola Tesla', url: 'https://teslasciencecenter.org/about-nikola-tesla/'},
      {title: 'Nikola Tesla Museum: Childhood memories, Gander', url: 'https://tesla-museum.org/en/extraordinary-world/gander/'}
    ]
  },
  {
    id: 'thomas-edison', name: 'Thomas Edison', role: 'Inventor',
    category: 'science', country: 'United States', years: '1847–1931',
    hook: 'He and his teams turned experiments into useful inventions.',
    facts: [
      'Thomas and his team tested many ideas to improve electric light bulbs and the system that supplied their power.',
      'His phonograph could record sound and play it back. Imagine hearing your own voice from a machine for the first time!',
      'As a boy, Thomas set up a chemistry laboratory in his family’s cellar, a room below the house.'
    ],
    stretch: {question: 'Why might inventors need many experiments?', answer: 'An idea may work only partly at first. Comparing results helps a team decide what to change and try next.'},
    quiz: {question: 'What could Edison’s phonograph do?', options: ['Bake bread', 'Record and play sound', 'Measure the Moon'], answer: 1, explain: 'It recorded sound and played it back.'},
    quiz2: {question: 'How did Edison’s team improve electric lighting?', options: ['By guessing once', 'By finding a magic bulb', 'By testing many ideas'], answer: 2, explain: 'They carried out many experiments and improved the whole lighting system.'},
    activity: {title: 'Improve a paper bridge', prompt: 'Lay paper between two nearby books. Try folding the paper to help it hold a small eraser. Compare your first design with your next one.'},
    wikiTitle: 'Thomas Edison', photoAlt: 'A portrait of inventor Thomas Edison',
    sources: [
      {title: 'National Park Service: Edison timeline', url: 'https://www.nps.gov/edis/learn/kidsyouth/timeline-of-edison-and-his-inventions.htm'},
      {title: 'National Park Service: The origins of sound recording', url: 'https://www.nps.gov/edis/learn/historyculture/origins-of-sound-recording.htm'}
    ]
  },
  {
    id: 'isaac-newton', name: 'Isaac Newton', role: 'Scientist and mathematician',
    category: 'science', country: 'England', years: '1643–1727',
    hook: 'He connected falling objects, moving planets, and colorful light.',
    facts: [
      'Isaac used math to describe gravity, the pull between objects. Gravity helps explain falling apples and the Moon’s path around Earth.',
      'He used glass prisms to study light. His experiments showed that white light contains many colors.',
      'He also built a telescope that used a curved mirror to gather light from faraway objects.'
    ],
    stretch: {question: 'Does gravity stop working when you jump?', answer: 'No. Your legs push you upward, while Earth’s gravity keeps pulling you back toward the ground.'},
    quiz: {question: 'Which pull did Newton study?', options: ['A zipper pull', 'Gravity', 'A drawer handle'], answer: 1, explain: 'Gravity: the attraction between objects such as Earth and the Moon.'},
    quiz2: {question: 'What did his prism experiments show about white light?', options: ['It contains many colors', 'It is made of snow', 'It contains only green'], answer: 0, explain: 'White light contains many colors that a prism can separate.'},
    activity: {title: 'Notice a pull', prompt: 'Hold a soft ball just above the floor and let go. Describe what happens. Now predict what will happen if you let go again.'},
    wikiTitle: 'Isaac Newton', photoAlt: 'A painted portrait of scientist Isaac Newton',
    sources: [
      {title: 'Oxford Newton Project: Life and work at a glance', url: 'https://www.newtonproject.ox.ac.uk/his-life-and-work-at-a-glance'},
      {title: 'Oxford Newton Project: Newton’s letter about light and colors', url: 'https://newtonproject.ox.ac.uk/view/texts/normalized/NATP00006'}
    ]
  },
  {
    id: 'galileo-galilei', name: 'Galileo Galilei', role: 'Astronomer and scientist',
    category: 'science', country: 'Italy', years: '1564–1642',
    hook: 'A closer look at the sky revealed surprising new details.',
    facts: [
      'Galileo improved telescopes and used them to study the night sky. A telescope makes faraway objects easier to see.',
      'In 1610, he observed four moons traveling around Jupiter. He followed how their positions changed.',
      'He saw mountains and valleys on our Moon and drew what he observed. The Moon was not a perfectly smooth ball!'
    ],
    stretch: {question: 'Why observe something more than once?', answer: 'Repeated observations can reveal changes. A pattern of changes can help you test an idea.'},
    quiz: {question: 'Which planet had the four moons Galileo observed?', options: ['Earth', 'Mars', 'Jupiter'], answer: 2, explain: 'Jupiter! Galileo watched its four large moons change position.'},
    quiz2: {question: 'What did Galileo see on our Moon?', options: ['Mountains and valleys', 'Green forests', 'City streets'], answer: 0, explain: 'He observed mountains and valleys and made drawings of the Moon.'},
    activity: {title: 'Keep a Moon notebook', prompt: 'With a grown-up, look for the Moon at night. Draw its shape. Try again another night and compare your two drawings.'},
    wikiTitle: 'Galileo Galilei', photoAlt: 'A painted portrait of astronomer Galileo Galilei',
    sources: [
      {title: 'NASA: Galileo observes Jupiter’s moons', url: 'https://www.nasa.gov/general/415-years-ago-astronomer-galileo-discovers-jupiters-moons/'},
      {title: 'Museo Galileo: Galileo’s astronomy', url: 'https://catalogue.museogalileo.it/multimedia/GalileosAstronomyBis.html'},
      {title: 'Museo Galileo: Galileo’s life', url: 'https://www.museogalileo.it/en/galileo/life.html'}
    ]
  },
  {
    id: 'marie-curie', name: 'Marie Curie', role: 'Physicist and chemist',
    category: 'science', country: 'Born in Poland; worked in France', years: '1867–1934',
    hook: 'She investigated energy hidden inside tiny atoms.',
    facts: [
      'Marie studied radioactivity: energy released by some atoms. With Pierre Curie, she discovered the elements polonium and radium.',
      'She named polonium after Poland, the country where she was born.',
      'Marie won two Nobel Prizes: one in physics and one in chemistry. Both subjects helped her investigate the world.'
    ],
    stretch: {question: 'Can a scientist use more than one subject?', answer: 'Yes. A question may need ideas from several subjects, such as math, physics, and chemistry.'},
    quiz: {question: 'Which country inspired the name polonium?', options: ['Peru', 'Portugal', 'Poland'], answer: 2, explain: 'Poland, where Marie was born, inspired the name.'},
    quiz2: {question: 'How many Nobel Prizes did Marie win?', options: ['One', 'Two', 'Ten'], answer: 1, explain: 'Two: a prize in physics and a prize in chemistry.'},
    activity: {title: 'Name a discovery', prompt: 'Imagine discovering a new kind of material. Invent a name inspired by a place you care about, and explain your choice.'},
    wikiTitle: 'Marie Curie', photoAlt: 'A portrait of scientist Marie Curie',
    sources: [
      {title: 'Nobel Prize: Marie Curie facts', url: 'https://www.nobelprize.org/prizes/physics/1903/marie-curie/facts/'},
      {title: 'Nobel Prize: Marie Curie questions and answers', url: 'https://www.nobelprize.org/prizes/chemistry/1911/marie-curie/questions-and-answers/'}
    ]
  },
  {
    id: 'alexander-graham-bell', name: 'Alexander Graham Bell', role: 'Inventor',
    category: 'science', country: 'Born in Scotland; worked in Canada and the United States', years: '1847–1922',
    hook: 'He helped turn a voice into a message that traveled through wires.',
    facts: [
      'Alexander worked with Thomas Watson on a telephone that could carry a person’s voice through wires.',
      'In an important test in 1876, Watson heard Bell’s spoken message through their telephone. Other inventors were exploring telephones too.',
      'Bell also experimented with huge kites built from many small units with triangular faces.'
    ],
    stretch: {question: 'Why tell your teammates what happened in a test?', answer: 'Sharing observations helps everyone understand the result. A teammate may notice a clue or suggest a useful change.'},
    quiz: {question: 'What did Bell and Watson’s telephone carry?', options: ['A person’s voice', 'A glass of water', 'A toy airplane'], answer: 0, explain: 'It carried a voice through wires.'},
    quiz2: {question: 'What did Bell use to build some of his huge kites?', options: ['Ice cubes', 'Units with triangular faces', 'Heavy bricks'], answer: 1, explain: 'He joined many small units with triangular faces.'},
    activity: {title: 'Pass a clear message', prompt: 'Describe a simple shape to a partner without showing it. Have your partner draw it. Compare, then try again with clearer clues.'},
    wikiTitle: 'Alexander Graham Bell', photoAlt: 'A portrait of inventor Alexander Graham Bell',
    sources: [
      {title: 'Library of Congress: Who is credited with inventing the telephone?', url: 'https://www.loc.gov/item/who-is-credited-with-inventing-the-telephone/'},
      {title: 'Library of Congress: Bell as inventor and scientist', url: 'https://www.loc.gov/collections/alexander-graham-bell-papers/articles-and-essays/inventor-and-scientist/'},
      {title: 'Library of Congress: Flight and discovery in Bell’s papers', url: 'https://blogs.loc.gov/teachers/2013/04/from-flight-to-discovery-with-alexander-graham-bells-papers/'}
    ]
  },
  {
    id: 'alexander-fleming', name: 'Alexander Fleming', role: 'Scientist who studied bacteria',
    category: 'science', country: 'Scotland and England', years: '1881–1955',
    hook: 'He noticed something strange in a dish—and investigated.',
    facts: [
      'In 1928, Alexander noticed mold growing in a laboratory dish. The bacteria near the mold were not growing.',
      'He found that the mold made a substance that stopped the growth of some bacteria. He called the substance penicillin.',
      'Later, Howard Florey, Ernst Chain, and their team helped turn penicillin into a useful medicine. Many people helped develop it.'
    ],
    stretch: {question: 'Can an unexpected result be useful?', answer: 'Yes. When a result surprises you, observe it carefully and ask why. It may give you a new question to investigate.'},
    quiz: {question: 'What did Fleming notice growing in his lab dish?', options: ['A flower', 'Mold', 'A tiny tree'], answer: 1, explain: 'Mold was growing there, and nearby bacteria were not growing.'},
    quiz2: {question: 'Who helped make penicillin into a useful medicine later?', options: ['Nobody else', 'Only a computer', 'Florey, Chain, and their team'], answer: 2, explain: 'Florey, Chain, and other researchers helped develop the medicine.'},
    activity: {title: 'Be a detail detective', prompt: 'Put five clean everyday objects on a table. Have a partner move one while you look away. What changed? Describe the evidence.'},
    wikiTitle: 'Alexander Fleming', photoAlt: 'A portrait of scientist Alexander Fleming',
    sources: [
      {title: 'Nobel Prize: Alexander Fleming facts', url: 'https://www.nobelprize.org/prizes/medicine/1945/fleming/facts/'},
      {title: 'American Chemical Society: Discovery and development of penicillin', url: 'https://www.acs.org/education/whatischemistry/landmarks/flemingpenicillin.html'}
    ]
  },
  {
    id: 'benjamin-franklin', name: 'Benjamin Franklin', role: 'Inventor and public leader',
    category: 'science', country: 'United States', years: '1706–1790',
    hook: 'He looked for inventions that could solve everyday problems.',
    facts: [
      'Benjamin studied electricity and helped show that lightning is electrical. Electricity was known before his experiments.',
      'He developed a lightning rod to help protect buildings. It gives lightning a path to the ground and helps prevent fires.',
      'As a boy who loved swimming, he made swimming paddles for his hands. They were an early kind of swim fin!'
    ],
    stretch: {question: 'How can a problem become an invention idea?', answer: 'First describe the problem. Then imagine a tool that might help, and draw how it would work.'},
    quiz: {question: 'What did Franklin’s lightning rod help protect?', options: ['Buildings', 'Ice cream', 'Paper airplanes'], answer: 0, explain: 'It helped protect buildings by giving lightning a path to the ground.'},
    quiz2: {question: 'Where did young Benjamin wear his swimming paddles?', options: ['On his ears', 'On his knees', 'On his hands'], answer: 2, explain: 'He made wooden paddles for his hands.'},
    activity: {title: 'Invent a little helper', prompt: 'Choose a small problem, like pencils rolling off a desk. Draw an invention that could help. Label its most useful part.'},
    wikiTitle: 'Benjamin Franklin', photoAlt: 'A painted portrait of Benjamin Franklin',
    sources: [
      {title: 'The Franklin Institute: Benjamin Franklin’s inventions', url: 'https://fi.edu/en/science-and-education/benjamin-franklin/inventions'},
      {title: 'The Franklin Institute: Franklin and the kite experiment', url: 'https://fi.edu/en/science-and-education/benjamin-franklin/kite-key-experiment'},
      {title: 'National Park Service: Benjamin Franklin and science', url: 'https://www.nps.gov/inde/learn/historyculture/people-franklin-science.htm'}
    ]
  },
  {
    id: 'wright-brothers', name: 'Orville and Wilbur Wright', role: 'Aviation inventors',
    category: 'science', country: 'United States', years: 'Orville: 1871–1948; Wilbur: 1867–1912',
    hook: 'Two brothers tested their way into the sky.',
    facts: [
      'Orville and Wilbur repaired and built bicycles. Their workshop skills also helped them build flying machines.',
      'They tested gliders and used a wind tunnel to study wing shapes. They changed their designs when tests showed problems.',
      'In 1903, they made the first controlled, sustained powered airplane flights. Orville’s first flight that day lasted just 12 seconds!'
    ],
    stretch: {question: 'Why can a short flight still be a big achievement?', answer: 'A short test can show that an idea works. Then a team can use what it learned to improve the next design.'},
    quiz: {question: 'What did the Wright brothers repair before building airplanes?', options: ['Satellites', 'Bicycles', 'Submarines'], answer: 1, explain: 'Bicycles! Their tools and workshop skills helped with airplanes too.'},
    quiz2: {question: 'How long was Orville’s first flight on that day in 1903?', options: ['12 seconds', '12 days', '12 years'], answer: 0, explain: 'Just 12 seconds—a small beginning with a big result.'},
    activity: {title: 'Test a paper plane', prompt: 'Fold a paper plane with a grown-up. Fly it in an empty space, away from faces. Change one fold and compare what happens.'},
    wikiTitle: 'Wright brothers', photoAlt: 'A historical photograph of Orville and Wilbur Wright',
    sources: [
      {title: 'National Park Service: The road to the first flight', url: 'https://www.nps.gov/wrbr/learn/historyculture/theroadtothefirstflight.htm'},
      {title: 'Smithsonian National Air and Space Museum: 1903 Wright Flyer', url: 'https://airandspace.si.edu/collection-objects/1903-wright-flyer/nasm_A19610048000'},
      {title: 'National Park Service: The Wright brothers', url: 'https://www.nps.gov/articles/wright-brothers.htm'}
    ]
  },
  {
    id: 'johannes-gutenberg', name: 'Johannes Gutenberg', role: 'Printer and inventor',
    category: 'arts', country: 'Germany', years: 'About 1400–1468',
    hook: 'Reusable letters helped books reach many more readers.',
    facts: [
      'In Europe in the 1400s, Johannes developed a printing system using movable metal letters, called type.',
      'Printers could arrange the letters into words, print pages, and then use the letters again in a different order.',
      'Printing already existed in East Asia long before Gutenberg. His team’s famous printed Bible helped change bookmaking in Europe.'
    ],
    stretch: {question: 'Why is being able to reuse a tool helpful?', answer: 'You can make something new without starting every part again. Reusable letters can help print many different pages.'},
    quiz: {question: 'What could Gutenberg’s printers rearrange and reuse?', options: ['Clouds', 'Flower petals', 'Metal letters'], answer: 2, explain: 'Metal letters could be set in a new order for another page.'},
    quiz2: {question: 'Where did printing exist long before Gutenberg?', options: ['On the Moon', 'East Asia', 'Under the ocean'], answer: 1, explain: 'Printing had developed in East Asia centuries earlier.'},
    activity: {title: 'Make movable letters', prompt: 'Write letters on small paper squares. Arrange them to spell a word. Reuse some of the same squares to make another word.'},
    wikiTitle: 'Johannes Gutenberg', photoAlt: 'A historical portrait of printer Johannes Gutenberg',
    sources: [
      {title: 'Library of Congress: Johannes Gutenberg', url: 'https://guides.loc.gov/gutenberg/the-printer'},
      {title: 'City of Mainz: Before Gutenberg', url: 'https://www.gutenberg.de/en/erfindung/vor_gutenberg'},
      {title: 'Gutenberg Museum: East Asia and Islam', url: 'https://www.mainz.de/en/microsite/gutenberg-museum/Forschung_Sammlung_/Ostasien_und_Islam'}
    ]
  },
  {
    id: 'george-washington', name: 'George Washington', role: 'First U.S. president',
    category: 'leaders', country: 'United States', years: '1732–1799',
    hook: 'He helped shape the role of president in a new country.',
    facts: [
      'George became the first president of the United States in 1789.',
      'As a young man, he worked as a surveyor. Surveyors measure land and help make maps.',
      'Washington also enslaved people, forcing them to work without freedom.'
    ],
    stretch: {question: 'Why do mapmakers measure carefully?', answer: 'Careful measurements help show where places are and how far apart they are.'},
    quiz: {question: 'George was the first president of which country?', options: ['Canada', 'Mexico', 'The United States'], answer: 2, explain: 'The United States. He became its first president in 1789.'},
    quiz2: {question: 'What did George do as a surveyor?', options: ['Measure land', 'Build rockets', 'Study ocean fish'], answer: 0, explain: 'He measured land, work that helps people make maps.'},
    activity: {title: 'Map a small place', prompt: 'Draw a map of one room. Mark the door, a window, and two pieces of furniture. Tell someone how to follow your map.'},
    wikiTitle: 'George Washington', photoAlt: 'A painted portrait of George Washington',
    sources: [
      {title: 'George Washington’s Mount Vernon: Key facts', url: 'https://www.mountvernon.org/george-washington/george-washington-key-facts'},
      {title: 'National Park Service: Washington and the President’s House', url: 'https://www.nps.gov/inde/learn/historyculture/the-presidents-house-washington-and-adams.htm'}
    ]
  }
];

/* Display-text translations. Structural fields are copied from the English profile
   so IDs, source links, dates, and correct-option indexes cannot drift. */
window.MLL_MORE_ES_PEOPLE_A = [
  {
    id: 'neil-armstrong', name: 'Neil Armstrong', role: 'Astronauta y piloto', country: 'Estados Unidos',
    hook: 'Su caminata en la Luna fue un gran logro de equipo.',
    facts: [
      'Neil fue la primera persona en caminar sobre la Luna, durante la misión Apolo 11 en 1969.',
      'Buzz Aldrin lo acompañó en la Luna. Michael Collins pilotó la otra nave alrededor de la Luna.',
      'Antes de ser astronauta, Neil fue piloto de pruebas. Volaba aviones para ayudar a los ingenieros a entender cómo funcionaban.'
    ],
    stretch: {question: '¿Se puede ayudar en una misión sin caminar sobre la Luna?', answer: '¡Sí! Pilotos, ingenieros, matemáticos y muchas otras personas realizan distintos trabajos necesarios para una misión.'},
    quiz: {question: '¿Dónde caminó Neil en 1969?', options: ['En Marte', 'En la Luna', 'En Júpiter'], explain: '¡En la Luna! Neil formaba parte del equipo del Apolo 11.'},
    quiz2: {question: '¿Qué trabajo tenía Neil antes de ser astronauta?', options: ['Piloto de pruebas', 'Impresor de libros', 'Maestro de música'], explain: 'Era piloto de pruebas. Volar aviones lo ayudaba a aprender sobre ellos.'},
    activity: {title: 'Forma un equipo espacial', prompt: 'Planea una misión imaginaria a la Luna. Dale un trabajo diferente a cada una de tres personas: pilotar, revisar la ruta y estudiar rocas. Explica por qué importa cada trabajo.'},
    photoAlt: 'El astronauta Neil Armstrong con su traje espacial',
    sourceTitles: ['NASA: Neil A. Armstrong', 'NASA: Resumen de la misión Apolo 11']
  },
  {
    id: 'leonardo-da-vinci', name: 'Leonardo da Vinci', role: 'Artista e inventor', country: 'Italia',
    hook: 'Sus dibujos unieron el arte con la curiosidad.',
    facts: [
      'Leonardo pintó la Mona Lisa. También estudió las plantas, el agua y el cuerpo humano.',
      'Llenaba cuadernos con dibujos, observaciones e ideas para máquinas. Un dibujo podía ayudarlo a pensar.',
      'Muchas de sus notas usan escritura en espejo: ¡las letras van al revés, de derecha a izquierda!'
    ],
    stretch: {question: '¿Cómo puede ayudarte un dibujo a entender algo?', answer: 'Dibujar te hace mirar con atención las formas y las partes. Puedes descubrir un detalle que antes no habías notado.'},
    quiz: {question: '¿Qué pintura hizo Leonardo?', options: ['La Mona Lisa', 'Una fotografía de la Luna', 'Una historieta moderna'], explain: 'La Mona Lisa es una de las pinturas de Leonardo.'},
    quiz2: {question: '¿Qué tenían de especial muchas notas de Leonardo?', options: ['Estaban escritas sobre nieve', 'No tenían letras', 'Usaban escritura en espejo'], explain: 'A menudo escribía al revés, de derecha a izquierda.'},
    activity: {title: 'Dibuja para descubrir', prompt: 'Mira con atención una hoja de árbol o una cuchara. Dibuja tres detalles que notes. Escribe una pregunta junto al dibujo.'},
    photoAlt: 'Un retrato histórico de Leonardo da Vinci',
    sourceTitles: ['Royal Collection Trust: La vida de Leonardo da Vinci', 'Museo Victoria y Alberto: Los cuadernos de Leonardo']
  },
  {
    id: 'nikola-tesla', name: 'Nikola Tesla', role: 'Inventor de aparatos eléctricos', country: 'Nació en la actual Croacia; trabajó en Estados Unidos',
    hook: 'Ayudó a que la electricidad pusiera en movimiento las máquinas.',
    facts: [
      'Nikola ayudó a desarrollar sistemas que usan corriente alterna, o CA. Esta corriente eléctrica cambia de dirección una y otra vez.',
      'Su motor eléctrico usaba el magnetismo para transformar la energía eléctrica en movimiento.',
      'En sus recuerdos de la infancia, Nikola contó que le gustaba alimentar a las palomas, gallinas y otras aves de su familia.'
    ],
    stretch: {question: '¿Algo invisible puede mover un objeto?', answer: 'Sí. Un campo magnético es invisible, pero su fuerza puede mover objetos. En un motor, las fuerzas magnéticas ayudan a hacer girar una pieza.'},
    quiz: {question: '¿Qué ayuda a producir un motor eléctrico?', options: ['Movimiento', 'Luz de luna', 'Nubes de lluvia'], explain: '¡Movimiento! Un motor transforma la energía eléctrica en movimiento.'},
    quiz2: {question: '¿Qué animales recordaba alimentar Nikola de niño?', options: ['Tiburones', 'Palomas y otras aves', 'Osos polares'], explain: '¡Aves! Escribió sobre cómo alimentaba a las palomas y gallinas de su familia.'},
    activity: {title: 'Encuentra el movimiento', prompt: 'Con una persona adulta, nombra tres máquinas de uso diario que tengan piezas móviles. ¿Cuáles podrían usar un motor eléctrico? Dibuja una sin desarmarla.'},
    photoAlt: 'Un retrato del inventor Nikola Tesla',
    sourceTitles: ['Smithsonian: Motor eléctrico de corriente alterna', 'Centro de Ciencias Tesla: Acerca de Nikola Tesla', 'Museo Nikola Tesla: Recuerdos de infancia, El ganso']
  },
  {
    id: 'thomas-edison', name: 'Thomas Edison', role: 'Inventor', country: 'Estados Unidos',
    hook: 'Él y sus equipos convirtieron experimentos en inventos útiles.',
    facts: [
      'Thomas y su equipo probaron muchas ideas para mejorar los focos eléctricos y el sistema que les daba energía.',
      'Su fonógrafo podía grabar sonidos y reproducirlos. ¡Imagina oír tu propia voz en una máquina por primera vez!',
      'De niño, Thomas instaló un laboratorio de química en el sótano de su familia, una habitación debajo de la casa.'
    ],
    stretch: {question: '¿Por qué los inventores pueden necesitar muchos experimentos?', answer: 'Al principio, una idea puede funcionar solo en parte. Comparar resultados ayuda al equipo a decidir qué cambiar y qué probar después.'},
    quiz: {question: '¿Qué podía hacer el fonógrafo de Edison?', options: ['Hornear pan', 'Grabar y reproducir sonidos', 'Medir la Luna'], explain: 'Grababa sonidos y los reproducía.'},
    quiz2: {question: '¿Cómo mejoró la iluminación eléctrica el equipo de Edison?', options: ['Adivinando una sola vez', 'Encontrando un foco mágico', 'Probando muchas ideas'], explain: 'Hicieron muchos experimentos y mejoraron todo el sistema de iluminación.'},
    activity: {title: 'Mejora un puente de papel', prompt: 'Coloca una hoja entre dos libros cercanos. Prueba doblarla para que sostenga una goma de borrar pequeña. Compara tu primer diseño con el siguiente.'},
    photoAlt: 'Un retrato del inventor Thomas Edison',
    sourceTitles: ['Servicio de Parques Nacionales: Cronología de Edison', 'Servicio de Parques Nacionales: Los orígenes de la grabación de sonido']
  },
  {
    id: 'isaac-newton', name: 'Isaac Newton', role: 'Científico y matemático', country: 'Inglaterra',
    hook: 'Relacionó los objetos que caen, los planetas y los colores de la luz.',
    facts: [
      'Isaac usó las matemáticas para describir la gravedad, la atracción entre los objetos. La gravedad ayuda a explicar la caída de una manzana y la órbita de la Luna.',
      'Usó prismas de vidrio para estudiar la luz. Sus experimentos mostraron que la luz blanca contiene muchos colores.',
      'También construyó un telescopio que usaba un espejo curvo para reunir la luz de objetos lejanos.'
    ],
    stretch: {question: '¿La gravedad deja de funcionar cuando saltas?', answer: 'No. Tus piernas te impulsan hacia arriba, mientras la gravedad de la Tierra sigue atrayéndote hacia el suelo.'},
    quiz: {question: '¿Qué fuerza estudió Newton?', options: ['El tirón de un cierre', 'La gravedad', 'El tirón de una manija'], explain: 'La gravedad: la atracción entre objetos como la Tierra y la Luna.'},
    quiz2: {question: '¿Qué mostraron sus experimentos con prismas sobre la luz blanca?', options: ['Que contiene muchos colores', 'Que está hecha de nieve', 'Que solo contiene verde'], explain: 'La luz blanca contiene muchos colores que un prisma puede separar.'},
    activity: {title: 'Observa la gravedad', prompt: 'Sostén una pelota blanda un poco por encima del piso y suéltala. Describe qué sucede. Ahora predice qué pasará si la sueltas otra vez.'},
    photoAlt: 'Un retrato pintado del científico Isaac Newton',
    sourceTitles: ['Proyecto Newton de Oxford: Su vida y su trabajo', 'Proyecto Newton de Oxford: Carta de Newton sobre la luz y los colores']
  },
  {
    id: 'galileo-galilei', name: 'Galileo Galilei', role: 'Astrónomo y científico', country: 'Italia',
    hook: 'Una mirada más cercana al cielo reveló detalles sorprendentes.',
    facts: [
      'Galileo mejoró telescopios y los usó para estudiar el cielo nocturno. Un telescopio permite ver mejor los objetos lejanos.',
      'En 1610, observó cuatro lunas que giraban alrededor de Júpiter. Siguió los cambios de sus posiciones.',
      'Vio montañas y valles en nuestra Luna y dibujó sus observaciones. ¡La Luna no era una esfera perfectamente lisa!'
    ],
    stretch: {question: '¿Por qué conviene observar algo más de una vez?', answer: 'Repetir las observaciones puede revelar cambios. Un patrón en esos cambios puede ayudarte a poner a prueba una idea.'},
    quiz: {question: '¿Alrededor de qué planeta giraban las cuatro lunas que observó Galileo?', options: ['La Tierra', 'Marte', 'Júpiter'], explain: '¡Júpiter! Galileo observó cómo cambiaban de posición sus cuatro lunas grandes.'},
    quiz2: {question: '¿Qué vio Galileo en nuestra Luna?', options: ['Montañas y valles', 'Bosques verdes', 'Calles de una ciudad'], explain: 'Observó montañas y valles e hizo dibujos de la Luna.'},
    activity: {title: 'Lleva un cuaderno de la Luna', prompt: 'Con una persona adulta, busca la Luna de noche. Dibuja su forma. Vuelve a buscarla otra noche y compara los dos dibujos.'},
    photoAlt: 'Un retrato pintado del astrónomo Galileo Galilei',
    sourceTitles: ['NASA: Galileo observa las lunas de Júpiter', 'Museo Galileo: La astronomía de Galileo', 'Museo Galileo: La vida de Galileo']
  },
  {
    id: 'marie-curie', name: 'Marie Curie', role: 'Física y química', country: 'Nació en Polonia; trabajó en Francia',
    hook: 'Investigó la energía escondida en átomos diminutos.',
    facts: [
      'Marie estudió la radiactividad: energía que liberan algunos átomos. Junto con Pierre Curie, descubrió los elementos polonio y radio.',
      'Eligió el nombre polonio en honor a Polonia, el país donde nació.',
      'Marie ganó dos premios Nobel: uno de Física y otro de Química. Ambas ciencias la ayudaron a investigar el mundo.'
    ],
    stretch: {question: '¿Una científica puede usar más de una materia?', answer: 'Sí. Una pregunta puede necesitar ideas de varias materias, como matemáticas, física y química.'},
    quiz: {question: '¿Qué país inspiró el nombre polonio?', options: ['Perú', 'Portugal', 'Polonia'], explain: 'Polonia, donde nació Marie, inspiró el nombre.'},
    quiz2: {question: '¿Cuántos premios Nobel ganó Marie?', options: ['Uno', 'Dos', 'Diez'], explain: 'Dos: un premio de Física y otro de Química.'},
    activity: {title: 'Ponle nombre a un descubrimiento', prompt: 'Imagina que descubres un nuevo tipo de material. Invéntale un nombre inspirado en un lugar importante para ti y explica tu elección.'},
    photoAlt: 'Un retrato de la científica Marie Curie',
    sourceTitles: ['Premio Nobel: Datos sobre Marie Curie', 'Premio Nobel: Preguntas y respuestas sobre Marie Curie']
  },
  {
    id: 'alexander-graham-bell', name: 'Alexander Graham Bell', role: 'Inventor', country: 'Nació en Escocia; trabajó en Canadá y Estados Unidos',
    hook: 'Ayudó a convertir la voz en un mensaje que viajaba por cables.',
    facts: [
      'Alexander trabajó con Thomas Watson en un teléfono que podía transmitir la voz de una persona por cables.',
      'En una prueba importante de 1876, Watson escuchó el mensaje de Bell por su teléfono. Otros inventores también estaban investigando los teléfonos.',
      'Bell también experimentó con cometas enormes, construidas con muchas piezas pequeñas de caras triangulares.'
    ],
    stretch: {question: '¿Por qué contarle a tu equipo qué pasó en una prueba?', answer: 'Compartir las observaciones ayuda a todos a entender el resultado. Un compañero puede notar una pista o sugerir un cambio útil.'},
    quiz: {question: '¿Qué transmitía el teléfono de Bell y Watson?', options: ['La voz de una persona', 'Un vaso de agua', 'Un avión de juguete'], explain: 'Transmitía la voz por cables.'},
    quiz2: {question: '¿Qué usaba Bell para construir algunas de sus cometas enormes?', options: ['Cubos de hielo', 'Piezas con caras triangulares', 'Ladrillos pesados'], explain: 'Unía muchas piezas pequeñas con caras triangulares.'},
    activity: {title: 'Transmite un mensaje claro', prompt: 'Describe una figura sencilla a otra persona sin mostrársela. Pídele que la dibuje. Comparen los resultados y vuelvan a intentarlo con pistas más claras.'},
    photoAlt: 'Un retrato del inventor Alexander Graham Bell',
    sourceTitles: ['Biblioteca del Congreso: ¿A quién se atribuye la invención del teléfono?', 'Biblioteca del Congreso: Bell como inventor y científico', 'Biblioteca del Congreso: Vuelo y descubrimientos en los documentos de Bell']
  },
  {
    id: 'alexander-fleming', name: 'Alexander Fleming', role: 'Científico que estudiaba las bacterias', country: 'Escocia e Inglaterra',
    hook: 'Notó algo extraño en un recipiente y lo investigó.',
    facts: [
      'En 1928, Alexander notó moho en un recipiente de laboratorio. Las bacterias cercanas al moho no crecían.',
      'Descubrió que el moho producía una sustancia que impedía el crecimiento de algunas bacterias. La llamó penicilina.',
      'Más tarde, Howard Florey, Ernst Chain y su equipo ayudaron a convertir la penicilina en un medicamento útil. Muchas personas participaron en su desarrollo.'
    ],
    stretch: {question: '¿Puede ser útil un resultado inesperado?', answer: 'Sí. Cuando un resultado te sorprenda, obsérvalo con atención y pregunta por qué. Puede darte una nueva pregunta para investigar.'},
    quiz: {question: '¿Qué vio Fleming crecer en su recipiente de laboratorio?', options: ['Una flor', 'Moho', 'Un arbolito'], explain: 'Allí crecía moho, y las bacterias cercanas no crecían.'},
    quiz2: {question: '¿Quiénes ayudaron después a convertir la penicilina en un medicamento útil?', options: ['Nadie más', 'Solo una computadora', 'Florey, Chain y su equipo'], explain: 'Florey, Chain y otros investigadores ayudaron a desarrollar el medicamento.'},
    activity: {title: 'Detecta los detalles', prompt: 'Pon cinco objetos limpios de uso diario en una mesa. Pídele a otra persona que mueva uno mientras miras hacia otro lado. ¿Qué cambió? Explica cómo lo sabes.'},
    photoAlt: 'Un retrato del científico Alexander Fleming',
    sourceTitles: ['Premio Nobel: Datos sobre Alexander Fleming', 'Sociedad Química Estadounidense: Descubrimiento y desarrollo de la penicilina']
  },
  {
    id: 'benjamin-franklin', name: 'Benjamin Franklin', role: 'Inventor y líder político', country: 'Estados Unidos',
    hook: 'Buscaba inventos que resolvieran problemas de la vida diaria.',
    facts: [
      'Benjamin estudió la electricidad y ayudó a mostrar que los rayos son eléctricos. La electricidad ya se conocía antes de sus experimentos.',
      'Desarrolló un pararrayos para ayudar a proteger los edificios. Este ofrece a los rayos un camino hacia el suelo y ayuda a prevenir incendios.',
      'De niño le encantaba nadar e hizo paletas para sus manos. ¡Eran una forma temprana de aletas de natación!'
    ],
    stretch: {question: '¿Cómo puede un problema darte una idea para un invento?', answer: 'Primero describe el problema. Luego imagina una herramienta que podría ayudar y dibuja cómo funcionaría.'},
    quiz: {question: '¿Qué ayudaba a proteger el pararrayos de Franklin?', options: ['Los edificios', 'Los helados', 'Los aviones de papel'], explain: 'Ayudaba a proteger los edificios al darles a los rayos un camino hacia el suelo.'},
    quiz2: {question: '¿Dónde usaba Benjamin sus paletas para nadar?', options: ['En las orejas', 'En las rodillas', 'En las manos'], explain: 'Hizo paletas de madera para sus manos.'},
    activity: {title: 'Inventa una pequeña ayuda', prompt: 'Elige un problema pequeño, como los lápices que ruedan y se caen de la mesa. Dibuja un invento que pueda ayudar. Señala su parte más útil.'},
    photoAlt: 'Un retrato pintado de Benjamin Franklin',
    sourceTitles: ['Instituto Franklin: Los inventos de Benjamin Franklin', 'Instituto Franklin: Franklin y el experimento de la cometa', 'Servicio de Parques Nacionales: Benjamin Franklin y la ciencia']
  },
  {
    id: 'wright-brothers', name: 'Orville y Wilbur Wright', role: 'Inventores de la aviación', country: 'Estados Unidos',
    hook: 'Dos hermanos llegaron al cielo a base de pruebas.',
    facts: [
      'Orville y Wilbur reparaban y construían bicicletas. Lo que aprendieron en su taller también los ayudó a construir máquinas voladoras.',
      'Probaron planeadores y usaron un túnel de viento para estudiar la forma de las alas. Cuando las pruebas mostraban problemas, cambiaban sus diseños.',
      'En 1903, lograron los primeros vuelos sostenidos y controlados de un avión con motor. ¡El primer vuelo de Orville ese día duró solo 12 segundos!'
    ],
    stretch: {question: '¿Por qué un vuelo corto puede ser un gran logro?', answer: 'Una prueba corta puede mostrar que una idea funciona. Después, un equipo puede usar lo aprendido para mejorar el siguiente diseño.'},
    quiz: {question: '¿Qué reparaban los hermanos Wright antes de construir aviones?', options: ['Satélites', 'Bicicletas', 'Submarinos'], explain: '¡Bicicletas! Sus herramientas y conocimientos del taller también sirvieron para los aviones.'},
    quiz2: {question: '¿Cuánto duró el primer vuelo de Orville ese día de 1903?', options: ['12 segundos', '12 días', '12 años'], explain: 'Solo 12 segundos: un pequeño comienzo con un gran resultado.'},
    activity: {title: 'Prueba un avión de papel', prompt: 'Haz un avión de papel con una persona adulta. Lánzalo en un espacio libre, lejos de las caras. Cambia un doblez y compara qué sucede.'},
    photoAlt: 'Una fotografía histórica de Orville y Wilbur Wright',
    sourceTitles: ['Servicio de Parques Nacionales: El camino al primer vuelo', 'Museo Nacional del Aire y el Espacio del Smithsonian: El Wright Flyer de 1903', 'Servicio de Parques Nacionales: Los hermanos Wright']
  },
  {
    id: 'johannes-gutenberg', name: 'Johannes Gutenberg', role: 'Impresor e inventor', country: 'Alemania', years: 'Hacia 1400–1468',
    hook: 'Las letras reutilizables ayudaron a llevar libros a muchos más lectores.',
    facts: [
      'En la Europa del siglo XV, Johannes desarrolló un sistema de impresión con letras móviles de metal, llamadas tipos.',
      'Los impresores podían ordenar las letras para formar palabras, imprimir páginas y usar las mismas letras de nuevo en otro orden.',
      'La impresión ya existía en Asia oriental mucho antes de Gutenberg. La famosa Biblia que imprimió su equipo ayudó a cambiar la fabricación de libros en Europa.'
    ],
    stretch: {question: '¿Por qué es útil poder reutilizar una herramienta?', answer: 'Puedes crear algo nuevo sin volver a hacer todas las partes. Las letras reutilizables ayudan a imprimir muchas páginas diferentes.'},
    quiz: {question: '¿Qué podían reordenar y reutilizar los impresores de Gutenberg?', options: ['Nubes', 'Pétalos', 'Letras de metal'], explain: 'Las letras de metal podían colocarse en otro orden para una nueva página.'},
    quiz2: {question: '¿Dónde existía la impresión mucho antes de Gutenberg?', options: ['En la Luna', 'En Asia oriental', 'Debajo del mar'], explain: 'La impresión se había desarrollado en Asia oriental siglos antes.'},
    activity: {title: 'Haz letras móviles', prompt: 'Escribe letras en pequeños cuadrados de papel. Ordénalas para formar una palabra. Reutiliza algunos cuadrados para formar otra palabra.'},
    photoAlt: 'Un retrato histórico del impresor Johannes Gutenberg',
    sourceTitles: ['Biblioteca del Congreso: Johannes Gutenberg', 'Ciudad de Maguncia: Antes de Gutenberg', 'Museo Gutenberg: Asia oriental y el islam']
  },
  {
    id: 'george-washington', name: 'George Washington', role: 'Primer presidente de Estados Unidos', country: 'Estados Unidos',
    hook: 'Ayudó a dar forma al cargo de presidente de un país nuevo.',
    facts: [
      'George se convirtió en el primer presidente de Estados Unidos en 1789.',
      'De joven trabajó como agrimensor. Los agrimensores miden terrenos y ayudan a hacer mapas.',
      'Washington también esclavizó a personas y las obligó a trabajar sin libertad.'
    ],
    stretch: {question: '¿Por qué deben medir con cuidado quienes hacen mapas?', answer: 'Medir con cuidado ayuda a mostrar dónde están los lugares y qué distancia hay entre ellos.'},
    quiz: {question: '¿De qué país fue George el primer presidente?', options: ['Canadá', 'México', 'Estados Unidos'], explain: 'De Estados Unidos. Se convirtió en su primer presidente en 1789.'},
    quiz2: {question: '¿Qué hacía George como agrimensor?', options: ['Medía terrenos', 'Construía cohetes', 'Estudiaba peces del océano'], explain: 'Medía terrenos, un trabajo que ayuda a hacer mapas.'},
    activity: {title: 'Dibuja un mapa pequeño', prompt: 'Dibuja el mapa de una habitación. Marca la puerta, una ventana y dos muebles. Explícale a alguien cómo seguir tu mapa.'},
    photoAlt: 'Un retrato pintado de George Washington',
    sourceTitles: ['Mount Vernon de George Washington: Datos principales', 'Servicio de Parques Nacionales: Washington y la Casa del Presidente']
  }
].map(function (translation) {
  var original = window.MLL_MORE_PEOPLE_A.find(function (person) { return person.id === translation.id; });
  var localized = Object.assign({}, original, translation);
  localized.quiz = Object.assign({}, original.quiz, translation.quiz);
  localized.quiz2 = Object.assign({}, original.quiz2, translation.quiz2);
  localized.sources = original.sources.map(function (source, index) {
    return {title: translation.sourceTitles[index], url: source.url};
  });
  delete localized.sourceTitles;
  return localized;
});

;
/* Researched historical profiles. Checked 2026-09-26.
   Activities and reflection prompts are original learning suggestions.
   English and Latin American Spanish retain matching IDs, source URLs, and answer indexes. */
window.MLL_MORE_PEOPLE_B = [
  {
    "id": "abraham-lincoln",
    "name": "Abraham Lincoln",
    "category": "leaders",
    "years": "1809–1865",
    "role": "U.S. president",
    "country": "United States",
    "hook": "A book-loving boy became the 16th U.S. president.",
    "facts": [
      "Abraham Lincoln became the 16th president of the United States in 1861.",
      "He had little classroom schooling, so he learned by borrowing and reading books.",
      "He supported the 13th Amendment, a change to the Constitution that ended slavery in the United States."
    ],
    "stretch": {
      "question": "Can books help you learn outside school?",
      "answer": "Yes. You can read, ask questions, and talk about what you discover. Learning can happen in many places."
    },
    "quiz": {
      "question": "Which number president was Lincoln?",
      "options": [
        "The 1st",
        "The 16th",
        "The 50th"
      ],
      "answer": 1,
      "explain": "He was the 16th U.S. president."
    },
    "quiz2": {
      "question": "What did Lincoln borrow to help him learn?",
      "options": [
        "Books",
        "Bicycles",
        "Baseball gloves"
      ],
      "answer": 0,
      "explain": "He borrowed books and read them to keep learning."
    },
    "activity": {
      "title": "Borrow a new idea",
      "prompt": "Choose a library book with a grown-up. Share one new thing you learn from it."
    },
    "wikiTitle": "Abraham Lincoln",
    "photoAlt": "A portrait of President Abraham Lincoln",
    "sources": [
      {
        "title": "National Park Service: Abraham Lincoln",
        "url": "https://www.nps.gov/linc/learn/historyculture/abraham-lincoln-the-man.htm"
      },
      {
        "title": "National Park Service: Lincoln’s education",
        "url": "https://www.nps.gov/liho/learn/historyculture/education-in-lincoln-s-springfield.htm"
      },
      {
        "title": "National Park Service: Lincoln and the Constitution",
        "url": "https://www.nps.gov/liho/learn/historyculture/constitution.htm"
      }
    ]
  },
  {
    "id": "amelia-earhart",
    "name": "Amelia Earhart",
    "category": "explorers",
    "years": "1897–1937 (disappeared)",
    "role": "Pilot",
    "country": "United States",
    "hook": "She flew alone across the Atlantic Ocean.",
    "facts": [
      "In 1932, Amelia became the first woman to fly nonstop and alone across the Atlantic Ocean.",
      "Her airplane was a red Lockheed Vega. She called it her “Little Red Bus.”",
      "She landed in Northern Ireland after about 15 hours in the air."
    ],
    "stretch": {
      "question": "What does a solo flight mean?",
      "answer": "Solo means alone. Amelia was the only person aboard her plane during this ocean crossing."
    },
    "quiz": {
      "question": "Which ocean did Amelia cross on her famous 1932 solo flight?",
      "options": [
        "The Indian Ocean",
        "The Pacific Ocean",
        "The Atlantic Ocean"
      ],
      "answer": 2,
      "explain": "She flew alone across the Atlantic Ocean."
    },
    "quiz2": {
      "question": "What color was her Lockheed Vega?",
      "options": [
        "Green",
        "Red",
        "Purple"
      ],
      "answer": 1,
      "explain": "Her Vega was red, and she nicknamed it her “Little Red Bus.”"
    },
    "activity": {
      "title": "Plan a pretend flight",
      "prompt": "Draw a map with a starting place and a landing place. Add an ocean and trace your pretend flight path."
    },
    "wikiTitle": "Amelia Earhart",
    "photoAlt": "Pilot Amelia Earhart",
    "sources": [
      {
        "title": "Smithsonian: Amelia Earhart’s Lockheed Vega",
        "url": "https://airandspace.si.edu/collection-objects/lockheed-vega-5b-amelia-earhart/nasm_A19670093000"
      },
      {
        "title": "Smithsonian: Amelia Earhart",
        "url": "https://airandspace.si.edu/explore/stories/amelia-earhart"
      }
    ]
  },
  {
    "id": "ernest-shackleton",
    "name": "Ernest Shackleton",
    "category": "explorers",
    "years": "1874–1922",
    "role": "Polar explorer",
    "country": "Born in Ireland",
    "hook": "When ice trapped his ship, bringing the crew home became the mission.",
    "facts": [
      "Ernest led the ship Endurance toward Antarctica, the icy continent around the South Pole.",
      "Ice crushed the ship. Ernest and five crewmates sailed a small boat to find help.",
      "All 28 people from Endurance survived. Sailors, navigators, and rescuers helped make that possible."
    ],
    "stretch": {
      "question": "Can a good plan change?",
      "answer": "Yes. When conditions change, a team may need a new goal. Getting everyone home became more important than crossing Antarctica."
    },
    "quiz": {
      "question": "Which continent was Endurance heading toward?",
      "options": [
        "Antarctica",
        "Africa",
        "South America"
      ],
      "answer": 0,
      "explain": "Endurance was headed toward icy Antarctica."
    },
    "quiz2": {
      "question": "How many people from Endurance survived?",
      "options": [
        "5",
        "10",
        "28"
      ],
      "answer": 2,
      "explain": "All 28 people from the ship survived."
    },
    "activity": {
      "title": "Build a rescue team",
      "prompt": "Imagine a toy boat needs help. Give three people different jobs, such as map reader, boat builder, and lookout."
    },
    "wikiTitle": "Ernest Shackleton",
    "photoAlt": "Polar explorer Ernest Shackleton",
    "sources": [
      {
        "title": "Royal Museums Greenwich: Ernest Shackleton",
        "url": "https://www.rmg.co.uk/stories/maritime-history/sir-ernest-shackleton"
      },
      {
        "title": "Royal Geographical Society: Shackleton",
        "url": "https://www.rgs.org/our-collections/stories-from-our-collections/explore-our-collections/portrait-of-ernest-shackleton"
      }
    ]
  },
  {
    "id": "marco-polo",
    "name": "Marco Polo",
    "category": "explorers",
    "years": "1254–1324",
    "role": "Traveler and merchant",
    "country": "Venice, in present-day Italy",
    "hook": "His travel stories helped readers imagine faraway places.",
    "facts": [
      "Marco left for Asia in 1271 with his father and uncle. They traveled over land to China.",
      "He returned to his home city, Venice, in 1295, after many years away.",
      "He told his travel stories to a writer named Rustichello, who helped turn them into a book."
    ],
    "stretch": {
      "question": "Is a travel story the same as a photograph?",
      "answer": "No. A story reflects what a person noticed and remembered. Historians compare travel accounts with other evidence."
    },
    "quiz": {
      "question": "Who traveled to Asia with Marco?",
      "options": [
        "His whole school",
        "His father and uncle",
        "A baseball team"
      ],
      "answer": 1,
      "explain": "He traveled with his father and uncle."
    },
    "quiz2": {
      "question": "What helped many people learn about his travels?",
      "options": [
        "A television show",
        "A computer game",
        "A book"
      ],
      "answer": 2,
      "explain": "His stories became a book with help from the writer Rustichello."
    },
    "activity": {
      "title": "Make a tiny travel book",
      "prompt": "Draw a place you have visited. Add one thing you saw and one question you still have about it."
    },
    "wikiTitle": "Marco Polo",
    "photoAlt": "A historical portrait of traveler Marco Polo",
    "sources": [
      {
        "title": "Museo Galileo: Marco Polo",
        "url": "https://catalogue.museogalileo.it/biography/MarcoPolo.html"
      },
      {
        "title": "Library of Congress: The Travels of Marco Polo",
        "url": "https://www.loc.gov/item/2021668052/"
      }
    ]
  },
  {
    "id": "steve-irwin",
    "name": "Steve Irwin",
    "category": "science",
    "years": "1962–2006",
    "role": "Wildlife educator",
    "country": "Australia",
    "hook": "He brought the world of crocodiles to television.",
    "facts": [
      "Steve grew up at his parents’ reptile park in Australia, caring for animals.",
      "He and his wife, Terri, made The Crocodile Hunter, a television series about wildlife.",
      "Steve helped start Wildlife Warriors, a charity that works to protect animals and their habitats."
    ],
    "stretch": {
      "question": "How can you help wildlife without touching it?",
      "answer": "Watch quietly from a safe distance. Keep places clean, and ask an adult for help if you see an injured animal."
    },
    "quiz": {
      "question": "Where did Steve grow up caring for animals?",
      "options": [
        "A reptile park",
        "A space station",
        "A bakery"
      ],
      "answer": 0,
      "explain": "His parents ran a reptile park in Australia."
    },
    "quiz2": {
      "question": "What did The Crocodile Hunter teach viewers about?",
      "options": [
        "Train engines",
        "Wildlife",
        "Baking bread"
      ],
      "answer": 1,
      "explain": "Steve and Terri’s series explored wildlife."
    },
    "activity": {
      "title": "Watch like a naturalist",
      "prompt": "With an adult, watch a bird or insect from a distance. Draw what it does without disturbing it."
    },
    "wikiTitle": "Steve Irwin",
    "photoAlt": "Wildlife educator Steve Irwin",
    "sources": [
      {
        "title": "Australia Zoo: Steve Irwin",
        "url": "https://australiazoo.com.au/about-us/the-irwins/steve/"
      },
      {
        "title": "Australia Zoo: Our history",
        "url": "https://australiazoo.com.au/about-us/history/"
      }
    ]
  },
  {
    "id": "babe-ruth",
    "name": "Babe Ruth",
    "category": "sports",
    "years": "1895–1948",
    "role": "Baseball player",
    "country": "United States",
    "hook": "A pitcher became one of baseball’s famous home-run hitters.",
    "facts": [
      "Babe Ruth became a baseball star with the New York Yankees.",
      "He began his big-league career as a pitcher for the Boston Red Sox.",
      "He hit 714 home runs during his big-league career."
    ],
    "stretch": {
      "question": "Can a player be good at more than one skill?",
      "answer": "Yes. Pitching and hitting are different skills. Trying different roles can help you discover what you enjoy."
    },
    "quiz": {
      "question": "What was Babe’s first big-league playing role?",
      "options": [
        "Catcher",
        "Pitcher",
        "Umpire"
      ],
      "answer": 1,
      "explain": "He began as a pitcher with the Boston Red Sox."
    },
    "quiz2": {
      "question": "How many home runs did Babe hit in his big-league career?",
      "options": [
        "71",
        "174",
        "714"
      ],
      "answer": 2,
      "explain": "He hit 714 home runs."
    },
    "activity": {
      "title": "Try two baseball skills",
      "prompt": "With an adult, gently toss a soft ball at a target. Then practice tapping it with a bat in a clear space. Which skill feels different?"
    },
    "wikiTitle": "Babe Ruth",
    "photoAlt": "Baseball player Babe Ruth",
    "sources": [
      {
        "title": "National Baseball Hall of Fame: Babe Ruth",
        "url": "https://baseballhall.org/hall-of-famers/ruth-babe"
      },
      {
        "title": "Babe Ruth Birthplace Museum: Exhibits",
        "url": "https://www.baberuthmuseum.org/exhibits/"
      }
    ]
  },
  {
    "id": "jackie-robinson",
    "name": "Jackie Robinson",
    "category": "sports",
    "years": "1919–1972",
    "role": "Baseball player",
    "country": "United States",
    "hook": "He helped open baseball’s doors to more players.",
    "facts": [
      "In 1947, Jackie joined the Brooklyn Dodgers, breaking the barrier that had kept Black players out of the American and National Leagues.",
      "His Dodgers uniform carried the number 42.",
      "He won the first Rookie of the Year Award in 1947. A rookie is a new player."
    ],
    "stretch": {
      "question": "Why should players get a fair chance?",
      "answer": "A player’s skin color should never decide whether they can join. Fair teams welcome people and value their skills and effort."
    },
    "quiz": {
      "question": "Which number did Jackie wear for the Dodgers?",
      "options": [
        "42",
        "7",
        "99"
      ],
      "answer": 0,
      "explain": "His Dodgers uniform had the number 42."
    },
    "quiz2": {
      "question": "Which award did Jackie win in 1947?",
      "options": [
        "Best Movie",
        "Rookie of the Year",
        "Fastest Swimmer"
      ],
      "answer": 1,
      "explain": "He won Rookie of the Year in his first Dodgers season."
    },
    "activity": {
      "title": "Write a fair-team promise",
      "prompt": "Finish this sentence: “On our team, everyone gets a chance to…” Read your promise to someone."
    },
    "wikiTitle": "Jackie Robinson",
    "photoAlt": "Baseball player Jackie Robinson",
    "sources": [
      {
        "title": "National Baseball Hall of Fame: Jackie Robinson",
        "url": "https://baseballhall.org/hall-of-famers/robinson-jackie"
      },
      {
        "title": "National Baseball Hall of Fame: Number 42",
        "url": "https://baseballhall.org/discover-more/stories/inside-pitch/jackie-robinson-number-retired-throughout-baseball"
      }
    ]
  },
  {
    "id": "pele",
    "name": "Pelé",
    "category": "sports",
    "years": "1940–2022",
    "role": "Soccer player",
    "country": "Brazil",
    "hook": "He helped Brazil win three World Cups.",
    "facts": [
      "Pelé was a soccer player from Brazil.",
      "He helped Brazil win the World Cup three times: in 1958, 1962, and 1970.",
      "He was only 17 when he won his first World Cup."
    ],
    "stretch": {
      "question": "Can one player win a team game alone?",
      "answer": "No. Goals matter, and so do passes, saves, defense, and teamwork. Every player has a part to play."
    },
    "quiz": {
      "question": "Which country did Pelé play for?",
      "options": [
        "Italy",
        "Canada",
        "Brazil"
      ],
      "answer": 2,
      "explain": "Pelé played for Brazil."
    },
    "quiz2": {
      "question": "How old was Pelé when he won his first World Cup?",
      "options": [
        "17",
        "37",
        "57"
      ],
      "answer": 0,
      "explain": "He was 17 years old."
    },
    "activity": {
      "title": "Count team passes",
      "prompt": "Pass a soft ball back and forth with a partner. Can you make five gentle passes in a row?"
    },
    "wikiTitle": "Pelé",
    "photoAlt": "Brazilian soccer player Pelé",
    "sources": [
      {
        "title": "FIFA: Remembering Pelé",
        "url": "https://publications.fifa.com/en/annual-report-2022/in-memoriam-2022/"
      }
    ]
  },
  {
    "id": "roberto-clemente",
    "name": "Roberto Clemente",
    "category": "sports",
    "years": "1934–1972",
    "role": "Baseball player",
    "country": "Puerto Rico, United States",
    "hook": "He made 3,000 hits and worked to help others.",
    "facts": [
      "Roberto was a baseball player from Puerto Rico who played for the Pittsburgh Pirates.",
      "He made exactly 3,000 hits in his big-league career.",
      "He organized help for people after an earthquake in Nicaragua."
    ],
    "stretch": {
      "question": "Can an athlete help people away from the game?",
      "answer": "Yes. People can share time, supplies, or skills with neighbors who need help."
    },
    "quiz": {
      "question": "Where was Roberto from?",
      "options": [
        "Puerto Rico",
        "Japan",
        "France"
      ],
      "answer": 0,
      "explain": "Roberto came from Puerto Rico."
    },
    "quiz2": {
      "question": "Which team did Roberto play for?",
      "options": [
        "Chicago Cubs",
        "New York Yankees",
        "Pittsburgh Pirates"
      ],
      "answer": 2,
      "explain": "He played for the Pittsburgh Pirates."
    },
    "activity": {
      "title": "Plan a helpful play",
      "prompt": "With a grown-up, choose one small way to help someone this week. Make a drawing of your plan."
    },
    "wikiTitle": "Roberto Clemente",
    "photoAlt": "Puerto Rican baseball player Roberto Clemente",
    "sources": [
      {
        "title": "National Baseball Hall of Fame: Roberto Clemente",
        "url": "https://baseballhall.org/hall-of-famers/clemente-roberto"
      }
    ]
  },
  {
    "id": "walt-disney",
    "name": "Walt Disney",
    "category": "arts",
    "years": "1901–1966",
    "role": "Filmmaker and storyteller",
    "country": "United States",
    "hook": "He worked with artists to turn drawings into moving stories.",
    "facts": [
      "Walt and his brother Roy started a cartoon studio together in 1923.",
      "Walt provided Mickey Mouse’s voice in early cartoons.",
      "He worked with a large team to create Disneyland, which opened in 1955."
    ],
    "stretch": {
      "question": "How can one big idea need many people?",
      "answer": "Different people bring different skills. A cartoon needs drawings, a story, sounds, and many careful checks."
    },
    "quiz": {
      "question": "Whose voice did Walt perform in early cartoons?",
      "options": [
        "Donald Duck’s",
        "Mickey Mouse’s",
        "Simba’s"
      ],
      "answer": 1,
      "explain": "Walt voiced Mickey Mouse in early cartoons."
    },
    "quiz2": {
      "question": "Which park did Walt help create?",
      "options": [
        "Yellowstone",
        "Central Park",
        "Disneyland"
      ],
      "answer": 2,
      "explain": "He worked with a team to create Disneyland."
    },
    "activity": {
      "title": "Make a moving story",
      "prompt": "Draw a ball in three positions on three small pieces of paper. Put the pictures in order and tell what happens."
    },
    "wikiTitle": "Walt Disney",
    "photoAlt": "Filmmaker Walt Disney",
    "sources": [
      {
        "title": "Walt Disney Family Museum: Walt Disney",
        "url": "https://www.waltdisney.org/sites/default/files/walt-disney/walt-disney.html"
      },
      {
        "title": "Walt Disney Family Museum: Voicing Mickey",
        "url": "https://www.waltdisney.org/education/talks/voicing-icon-mickey-talks-bret-iwan"
      }
    ]
  },
  {
    "id": "wolfgang-amadeus-mozart",
    "name": "Wolfgang Amadeus Mozart",
    "category": "arts",
    "years": "1756–1791",
    "role": "Composer",
    "country": "Salzburg, in present-day Austria",
    "hook": "He was performing music for audiences when he was a child.",
    "facts": [
      "Wolfgang and his sister Nannerl learned music from their father, Leopold.",
      "While still children, Wolfgang and Nannerl traveled around Europe to perform concerts.",
      "Wolfgang composed The Magic Flute, an opera. An opera tells a story with music and singing."
    ],
    "stretch": {
      "question": "What does a composer do?",
      "answer": "A composer creates music. Performers read or learn that music and bring it to an audience."
    },
    "quiz": {
      "question": "Who performed with Wolfgang when they were children?",
      "options": [
        "His sister Nannerl",
        "His soccer coach",
        "A polar explorer"
      ],
      "answer": 0,
      "explain": "His sister Nannerl performed with him."
    },
    "quiz2": {
      "question": "What kind of work is The Magic Flute?",
      "options": [
        "A map",
        "An opera",
        "A painting"
      ],
      "answer": 1,
      "explain": "It is an opera, a story told with music and singing."
    },
    "activity": {
      "title": "Make a tiny opera",
      "prompt": "Sing one sentence about your day. Ask someone to sing an answer. You have started a musical conversation!"
    },
    "wikiTitle": "Wolfgang Amadeus Mozart",
    "photoAlt": "A painted portrait of composer Wolfgang Amadeus Mozart",
    "sources": [
      {
        "title": "Mozarteum Foundation: Mozart and his family",
        "url": "https://mozarteum.at/en/wolfgang-amade-mozart"
      },
      {
        "title": "Mozarteum Foundation: The Magic Flute",
        "url": "https://mozarteum.at/en/mozart-museums/mozarts-residence"
      }
    ]
  },
  {
    "id": "ludwig-van-beethoven",
    "name": "Ludwig van Beethoven",
    "category": "arts",
    "years": "1770–1827",
    "role": "Composer and pianist",
    "country": "Born in Bonn, in present-day Germany",
    "hook": "He kept creating music as his hearing faded.",
    "facts": [
      "Ludwig played the piano and composed music for instruments and voices.",
      "He gradually lost his hearing, but continued composing, including his Ninth Symphony.",
      "He loved being outdoors and taking walks among trees."
    ],
    "stretch": {
      "question": "Does making music always mean hearing it in the same way?",
      "answer": "No. People experience music in different ways. Musicians can use written notes, memory, sight, and vibrations too."
    },
    "quiz": {
      "question": "Which instrument did Ludwig play?",
      "options": [
        "Trumpet",
        "Drum",
        "Piano"
      ],
      "answer": 2,
      "explain": "Ludwig was a pianist as well as a composer."
    },
    "quiz2": {
      "question": "What did Ludwig continue doing as his hearing faded?",
      "options": [
        "Composing music",
        "Flying airplanes",
        "Building ships"
      ],
      "answer": 0,
      "explain": "He continued composing music, including his Ninth Symphony."
    },
    "activity": {
      "title": "Give a walk a rhythm",
      "prompt": "With an adult, take a short walk. Notice a pattern in your steps, then clap a rhythm inspired by it."
    },
    "wikiTitle": "Ludwig van Beethoven",
    "photoAlt": "A painted portrait of composer Ludwig van Beethoven",
    "sources": [
      {
        "title": "Beethoven-Haus: Beethoven",
        "url": "https://www.beethoven.de/en/beethoven"
      },
      {
        "title": "Beethoven-Haus: Vienna chronology",
        "url": "https://www.beethoven.de/en/g/zeittafel-beethoven-in-wien"
      },
      {
        "title": "Beethoven-Haus: Nature",
        "url": "https://www.beethoven.de/en/g/natur"
      }
    ]
  }
];

window.MLL_MORE_ES_PEOPLE_B = [
  {
    "id": "abraham-lincoln",
    "name": "Abraham Lincoln",
    "category": "leaders",
    "years": "1809–1865",
    "role": "Presidente de Estados Unidos",
    "country": "Estados Unidos",
    "hook": "Un niño al que le encantaban los libros llegó a ser el presidente número 16.",
    "facts": [
      "Abraham Lincoln se convirtió en el presidente número 16 de Estados Unidos en 1861.",
      "Fue poco tiempo a la escuela, así que aprendió pidiendo libros prestados y leyéndolos.",
      "Apoyó la Enmienda 13, un cambio a la Constitución que puso fin a la esclavitud en Estados Unidos."
    ],
    "stretch": {
      "question": "¿Puedes aprender con libros fuera de la escuela?",
      "answer": "Sí. Puedes leer, hacer preguntas y conversar sobre lo que descubres. Se puede aprender en muchos lugares."
    },
    "quiz": {
      "question": "¿Qué número de presidente fue Lincoln?",
      "options": [
        "El 1",
        "El 16",
        "El 50"
      ],
      "answer": 1,
      "explain": "Fue el presidente número 16 de Estados Unidos."
    },
    "quiz2": {
      "question": "¿Qué pedía prestado Lincoln para aprender?",
      "options": [
        "Libros",
        "Bicicletas",
        "Guantes de béisbol"
      ],
      "answer": 0,
      "explain": "Pedía libros prestados y los leía para seguir aprendiendo."
    },
    "activity": {
      "title": "Busca una idea nueva",
      "prompt": "Elige un libro de la biblioteca con una persona adulta. Comparte algo nuevo que aprendas."
    },
    "wikiTitle": "Abraham Lincoln",
    "photoAlt": "Retrato del presidente Abraham Lincoln",
    "sources": [
      {
        "title": "Servicio de Parques Nacionales: Abraham Lincoln",
        "url": "https://www.nps.gov/linc/learn/historyculture/abraham-lincoln-the-man.htm"
      },
      {
        "title": "Servicio de Parques Nacionales: la educación de Lincoln",
        "url": "https://www.nps.gov/liho/learn/historyculture/education-in-lincoln-s-springfield.htm"
      },
      {
        "title": "Servicio de Parques Nacionales: Lincoln y la Constitución",
        "url": "https://www.nps.gov/liho/learn/historyculture/constitution.htm"
      }
    ]
  },
  {
    "id": "amelia-earhart",
    "name": "Amelia Earhart",
    "category": "explorers",
    "years": "1897–1937 (desapareció)",
    "role": "Piloto",
    "country": "Estados Unidos",
    "hook": "Cruzó el océano Atlántico pilotando sola.",
    "facts": [
      "En 1932, Amelia fue la primera mujer en cruzar el océano Atlántico sola y sin escalas.",
      "Su avión era un Lockheed Vega rojo. Lo llamaba su «pequeño autobús rojo».",
      "Aterrizó en Irlanda del Norte después de unas 15 horas de vuelo."
    ],
    "stretch": {
      "question": "¿Qué significa volar en solitario?",
      "answer": "Significa volar sin compañía. Amelia era la única persona a bordo de su avión durante ese cruce del océano."
    },
    "quiz": {
      "question": "¿Qué océano cruzó Amelia en su famoso vuelo en solitario de 1932?",
      "options": [
        "El océano Índico",
        "El océano Pacífico",
        "El océano Atlántico"
      ],
      "answer": 2,
      "explain": "Cruzó sola el océano Atlántico."
    },
    "quiz2": {
      "question": "¿De qué color era su Lockheed Vega?",
      "options": [
        "Verde",
        "Rojo",
        "Morado"
      ],
      "answer": 1,
      "explain": "Era rojo, y ella lo llamaba su «pequeño autobús rojo»."
    },
    "activity": {
      "title": "Planea un vuelo imaginario",
      "prompt": "Dibuja un mapa con un lugar de salida y otro de llegada. Añade un océano y traza la ruta de tu vuelo imaginario."
    },
    "wikiTitle": "Amelia Earhart",
    "photoAlt": "La piloto Amelia Earhart",
    "sources": [
      {
        "title": "Smithsonian: el Lockheed Vega de Amelia Earhart",
        "url": "https://airandspace.si.edu/collection-objects/lockheed-vega-5b-amelia-earhart/nasm_A19670093000"
      },
      {
        "title": "Smithsonian: Amelia Earhart",
        "url": "https://airandspace.si.edu/explore/stories/amelia-earhart"
      }
    ]
  },
  {
    "id": "ernest-shackleton",
    "name": "Ernest Shackleton",
    "category": "explorers",
    "years": "1874–1922",
    "role": "Explorador polar",
    "country": "Nació en Irlanda",
    "hook": "Cuando el hielo atrapó su barco, la misión pasó a ser llevar a todos a casa.",
    "facts": [
      "Ernest dirigió el barco Endurance hacia la Antártida, el continente helado que rodea el Polo Sur.",
      "El hielo aplastó el barco. Ernest y cinco compañeros navegaron en un bote pequeño para buscar ayuda.",
      "Sobrevivieron las 28 personas del Endurance. Marineros, navegantes y rescatistas ayudaron a lograrlo."
    ],
    "stretch": {
      "question": "¿Puede cambiar un buen plan?",
      "answer": "Sí. Si cambian las condiciones, un equipo puede necesitar otra meta. Llevar a todos a casa se volvió más importante que cruzar la Antártida."
    },
    "quiz": {
      "question": "¿Hacia qué continente iba el Endurance?",
      "options": [
        "La Antártida",
        "África",
        "América del Sur"
      ],
      "answer": 0,
      "explain": "El Endurance iba hacia la helada Antártida."
    },
    "quiz2": {
      "question": "¿Cuántas personas del Endurance sobrevivieron?",
      "options": [
        "5",
        "10",
        "28"
      ],
      "answer": 2,
      "explain": "Sobrevivieron las 28 personas del barco."
    },
    "activity": {
      "title": "Forma un equipo de rescate",
      "prompt": "Imagina que un barco de juguete necesita ayuda. Reparte tres tareas: leer el mapa, construir un bote y vigilar."
    },
    "wikiTitle": "Ernest Shackleton",
    "photoAlt": "El explorador polar Ernest Shackleton",
    "sources": [
      {
        "title": "Museos Reales de Greenwich: Ernest Shackleton",
        "url": "https://www.rmg.co.uk/stories/maritime-history/sir-ernest-shackleton"
      },
      {
        "title": "Real Sociedad Geográfica: Shackleton",
        "url": "https://www.rgs.org/our-collections/stories-from-our-collections/explore-our-collections/portrait-of-ernest-shackleton"
      }
    ]
  },
  {
    "id": "marco-polo",
    "name": "Marco Polo",
    "category": "explorers",
    "years": "1254–1324",
    "role": "Viajero y comerciante",
    "country": "Venecia, en la actual Italia",
    "hook": "Sus relatos de viaje ayudaron a imaginar lugares lejanos.",
    "facts": [
      "Marco partió hacia Asia en 1271 con su padre y su tío. Viajaron por tierra hasta China.",
      "Regresó a su ciudad, Venecia, en 1295, después de muchos años fuera.",
      "Le contó sus viajes a un escritor llamado Rustichello, quien ayudó a convertir los relatos en un libro."
    ],
    "stretch": {
      "question": "¿Un relato de viaje es igual a una fotografía?",
      "answer": "No. Un relato muestra lo que una persona observó y recordó. Los historiadores lo comparan con otras pruebas."
    },
    "quiz": {
      "question": "¿Quiénes viajaron a Asia con Marco?",
      "options": [
        "Toda su escuela",
        "Su padre y su tío",
        "Un equipo de béisbol"
      ],
      "answer": 1,
      "explain": "Viajó con su padre y su tío."
    },
    "quiz2": {
      "question": "¿Qué ayudó a muchas personas a conocer sus viajes?",
      "options": [
        "Un programa de televisión",
        "Un videojuego",
        "Un libro"
      ],
      "answer": 2,
      "explain": "Sus relatos se convirtieron en un libro con ayuda del escritor Rustichello."
    },
    "activity": {
      "title": "Crea un librito de viaje",
      "prompt": "Dibuja un lugar que hayas visitado. Añade algo que viste y una pregunta que aún tengas sobre ese lugar."
    },
    "wikiTitle": "Marco Polo",
    "photoAlt": "Retrato histórico del viajero Marco Polo",
    "sources": [
      {
        "title": "Museo Galileo: Marco Polo",
        "url": "https://catalogue.museogalileo.it/biography/MarcoPolo.html"
      },
      {
        "title": "Biblioteca del Congreso: los viajes de Marco Polo",
        "url": "https://www.loc.gov/item/2021668052/"
      }
    ]
  },
  {
    "id": "steve-irwin",
    "name": "Steve Irwin",
    "category": "science",
    "years": "1962–2006",
    "role": "Educador sobre la vida silvestre",
    "country": "Australia",
    "hook": "Llevó el mundo de los cocodrilos a la televisión.",
    "facts": [
      "Steve creció cuidando animales en el parque de reptiles de sus padres, en Australia.",
      "Él y su esposa, Terri, hicieron El cazador de cocodrilos, una serie de televisión sobre animales silvestres.",
      "Steve ayudó a fundar Wildlife Warriors, una organización que protege a los animales y sus hábitats."
    ],
    "stretch": {
      "question": "¿Cómo puedes ayudar a los animales silvestres sin tocarlos?",
      "answer": "Obsérvalos con calma desde una distancia segura. Mantén limpios los lugares y pide ayuda a una persona adulta si ves un animal herido."
    },
    "quiz": {
      "question": "¿Dónde creció Steve cuidando animales?",
      "options": [
        "En un parque de reptiles",
        "En una estación espacial",
        "En una panadería"
      ],
      "answer": 0,
      "explain": "Sus padres tenían un parque de reptiles en Australia."
    },
    "quiz2": {
      "question": "¿Sobre qué enseñaba El cazador de cocodrilos?",
      "options": [
        "Motores de tren",
        "Animales silvestres",
        "Cómo hacer pan"
      ],
      "answer": 1,
      "explain": "La serie de Steve y Terri mostraba la vida silvestre."
    },
    "activity": {
      "title": "Observa como naturalista",
      "prompt": "Con una persona adulta, observa un ave o un insecto desde lejos. Dibuja lo que hace sin molestarlo."
    },
    "wikiTitle": "Steve Irwin",
    "photoAlt": "Steve Irwin, educador sobre la vida silvestre",
    "sources": [
      {
        "title": "Australia Zoo: Steve Irwin",
        "url": "https://australiazoo.com.au/about-us/the-irwins/steve/"
      },
      {
        "title": "Australia Zoo: nuestra historia",
        "url": "https://australiazoo.com.au/about-us/history/"
      }
    ]
  },
  {
    "id": "babe-ruth",
    "name": "Babe Ruth",
    "category": "sports",
    "years": "1895–1948",
    "role": "Beisbolista",
    "country": "Estados Unidos",
    "hook": "Un lanzador se convirtió en uno de los grandes bateadores de jonrones.",
    "facts": [
      "Babe Ruth se convirtió en una estrella del béisbol con los Yankees de Nueva York.",
      "Comenzó su carrera en las Grandes Ligas como lanzador de los Medias Rojas de Boston.",
      "Conectó 714 jonrones durante su carrera en las Grandes Ligas."
    ],
    "stretch": {
      "question": "¿Puede un jugador destacar en más de una habilidad?",
      "answer": "Sí. Lanzar y batear son habilidades distintas. Probar varias posiciones te ayuda a descubrir qué disfrutas."
    },
    "quiz": {
      "question": "¿Cuál fue la primera posición de Babe en las Grandes Ligas?",
      "options": [
        "Receptor",
        "Lanzador",
        "Árbitro"
      ],
      "answer": 1,
      "explain": "Comenzó como lanzador de los Medias Rojas de Boston."
    },
    "quiz2": {
      "question": "¿Cuántos jonrones conectó Babe en las Grandes Ligas?",
      "options": [
        "71",
        "174",
        "714"
      ],
      "answer": 2,
      "explain": "Conectó 714 jonrones."
    },
    "activity": {
      "title": "Prueba dos habilidades de béisbol",
      "prompt": "Con una persona adulta, lanza suavemente una pelota blanda hacia un blanco. Después, prueba golpearla con un bate en un espacio despejado. ¿Qué cambia?"
    },
    "wikiTitle": "Babe Ruth",
    "photoAlt": "El beisbolista Babe Ruth",
    "sources": [
      {
        "title": "Salón de la Fama del Béisbol: Babe Ruth",
        "url": "https://baseballhall.org/hall-of-famers/ruth-babe"
      },
      {
        "title": "Museo de la Casa Natal de Babe Ruth: exposiciones",
        "url": "https://www.baberuthmuseum.org/exhibits/"
      }
    ]
  },
  {
    "id": "jackie-robinson",
    "name": "Jackie Robinson",
    "category": "sports",
    "years": "1919–1972",
    "role": "Beisbolista",
    "country": "Estados Unidos",
    "hook": "Ayudó a abrir las puertas del béisbol a más jugadores.",
    "facts": [
      "En 1947, Jackie se unió a los Dodgers de Brooklyn y rompió la barrera que había excluido a jugadores negros de las ligas Americana y Nacional.",
      "Su uniforme de los Dodgers llevaba el número 42.",
      "En 1947 ganó el primer premio al Novato del Año. Un novato es un jugador nuevo."
    ],
    "stretch": {
      "question": "¿Por qué deben tener una oportunidad justa los jugadores?",
      "answer": "El color de piel nunca debe decidir quién puede participar. Un equipo justo recibe a las personas y valora su habilidad y esfuerzo."
    },
    "quiz": {
      "question": "¿Qué número llevaba Jackie con los Dodgers?",
      "options": [
        "42",
        "7",
        "99"
      ],
      "answer": 0,
      "explain": "Su uniforme de los Dodgers llevaba el número 42."
    },
    "quiz2": {
      "question": "¿Qué premio ganó Jackie en 1947?",
      "options": [
        "Mejor Película",
        "Novato del Año",
        "Nadador Más Rápido"
      ],
      "answer": 1,
      "explain": "Ganó el premio al Novato del Año en su primera temporada con los Dodgers."
    },
    "activity": {
      "title": "Escribe una promesa de juego justo",
      "prompt": "Completa esta oración: «En nuestro equipo, todos tienen la oportunidad de…». Lee tu promesa a alguien."
    },
    "wikiTitle": "Jackie Robinson",
    "photoAlt": "El beisbolista Jackie Robinson",
    "sources": [
      {
        "title": "Salón de la Fama del Béisbol: Jackie Robinson",
        "url": "https://baseballhall.org/hall-of-famers/robinson-jackie"
      },
      {
        "title": "Salón de la Fama del Béisbol: el número 42",
        "url": "https://baseballhall.org/discover-more/stories/inside-pitch/jackie-robinson-number-retired-throughout-baseball"
      }
    ]
  },
  {
    "id": "pele",
    "name": "Pelé",
    "category": "sports",
    "years": "1940–2022",
    "role": "Futbolista",
    "country": "Brasil",
    "hook": "Ayudó a Brasil a ganar tres Copas del Mundo.",
    "facts": [
      "Pelé fue un futbolista de Brasil.",
      "Ayudó a Brasil a ganar la Copa del Mundo tres veces: en 1958, 1962 y 1970.",
      "Tenía solo 17 años cuando ganó su primera Copa del Mundo."
    ],
    "stretch": {
      "question": "¿Puede un jugador ganar solo un partido de equipo?",
      "answer": "No. Los goles importan, y también los pases, las atajadas, la defensa y el trabajo en equipo. Cada jugador aporta algo."
    },
    "quiz": {
      "question": "¿Para qué país jugó Pelé?",
      "options": [
        "Italia",
        "Canadá",
        "Brasil"
      ],
      "answer": 2,
      "explain": "Pelé jugó para Brasil."
    },
    "quiz2": {
      "question": "¿Cuántos años tenía Pelé cuando ganó su primera Copa del Mundo?",
      "options": [
        "17",
        "37",
        "57"
      ],
      "answer": 0,
      "explain": "Tenía 17 años."
    },
    "activity": {
      "title": "Cuenta los pases",
      "prompt": "Pásate una pelota blanda con otra persona. ¿Pueden hacer cinco pases suaves seguidos?"
    },
    "wikiTitle": "Pelé",
    "photoAlt": "El futbolista brasileño Pelé",
    "sources": [
      {
        "title": "FIFA: en recuerdo de Pelé",
        "url": "https://publications.fifa.com/en/annual-report-2022/in-memoriam-2022/"
      }
    ]
  },
  {
    "id": "roberto-clemente",
    "name": "Roberto Clemente",
    "category": "sports",
    "years": "1934–1972",
    "role": "Beisbolista",
    "country": "Puerto Rico, Estados Unidos",
    "hook": "Conectó 3,000 hits y trabajó para ayudar a otras personas.",
    "facts": [
      "Roberto fue un beisbolista de Puerto Rico que jugó con los Piratas de Pittsburgh.",
      "Conectó exactamente 3,000 hits durante su carrera en las Grandes Ligas.",
      "Organizó ayuda para las personas afectadas por un terremoto en Nicaragua."
    ],
    "stretch": {
      "question": "¿Puede un deportista ayudar fuera del campo?",
      "answer": "Sí. Las personas pueden compartir tiempo, materiales o habilidades con quienes necesitan ayuda."
    },
    "quiz": {
      "question": "¿De dónde era Roberto?",
      "options": [
        "Puerto Rico",
        "Japón",
        "Francia"
      ],
      "answer": 0,
      "explain": "Roberto era de Puerto Rico."
    },
    "quiz2": {
      "question": "¿Con qué equipo jugó Roberto?",
      "options": [
        "Cachorros de Chicago",
        "Yankees de Nueva York",
        "Piratas de Pittsburgh"
      ],
      "answer": 2,
      "explain": "Jugó con los Piratas de Pittsburgh."
    },
    "activity": {
      "title": "Planea una buena jugada",
      "prompt": "Con una persona adulta, elige una pequeña manera de ayudar a alguien esta semana. Haz un dibujo de tu plan."
    },
    "wikiTitle": "Roberto Clemente",
    "photoAlt": "El beisbolista puertorriqueño Roberto Clemente",
    "sources": [
      {
        "title": "Salón de la Fama del Béisbol: Roberto Clemente",
        "url": "https://baseballhall.org/hall-of-famers/clemente-roberto"
      }
    ]
  },
  {
    "id": "walt-disney",
    "name": "Walt Disney",
    "category": "arts",
    "years": "1901–1966",
    "role": "Cineasta y narrador",
    "country": "Estados Unidos",
    "hook": "Trabajó con artistas para convertir dibujos en historias en movimiento.",
    "facts": [
      "Walt y su hermano Roy fundaron juntos un estudio de dibujos animados en 1923.",
      "Walt hizo la voz de Mickey Mouse en dibujos animados de los primeros años.",
      "Trabajó con un gran equipo para crear Disneyland, que abrió en 1955."
    ],
    "stretch": {
      "question": "¿Por qué una gran idea puede necesitar a muchas personas?",
      "answer": "Cada persona aporta habilidades distintas. Un dibujo animado necesita imágenes, una historia, sonidos y muchas revisiones."
    },
    "quiz": {
      "question": "¿A qué personaje le dio voz Walt en dibujos animados de los primeros años?",
      "options": [
        "Al Pato Donald",
        "A Mickey Mouse",
        "A Simba"
      ],
      "answer": 1,
      "explain": "Walt hizo la voz de Mickey Mouse."
    },
    "quiz2": {
      "question": "¿Qué parque ayudó a crear Walt?",
      "options": [
        "Yellowstone",
        "Central Park",
        "Disneyland"
      ],
      "answer": 2,
      "explain": "Trabajó con un equipo para crear Disneyland."
    },
    "activity": {
      "title": "Crea una historia en movimiento",
      "prompt": "Dibuja una pelota en tres posiciones en tres papeles pequeños. Ordena los dibujos y cuenta qué ocurre."
    },
    "wikiTitle": "Walt Disney",
    "photoAlt": "El cineasta Walt Disney",
    "sources": [
      {
        "title": "Museo de la Familia de Walt Disney: Walt Disney",
        "url": "https://www.waltdisney.org/sites/default/files/walt-disney/walt-disney.html"
      },
      {
        "title": "Museo de la Familia de Walt Disney: la voz de Mickey",
        "url": "https://www.waltdisney.org/education/talks/voicing-icon-mickey-talks-bret-iwan"
      }
    ]
  },
  {
    "id": "wolfgang-amadeus-mozart",
    "name": "Wolfgang Amadeus Mozart",
    "category": "arts",
    "years": "1756–1791",
    "role": "Compositor",
    "country": "Salzburgo, en la actual Austria",
    "hook": "Ya daba conciertos cuando era niño.",
    "facts": [
      "Wolfgang y su hermana Nannerl aprendieron música con su padre, Leopold.",
      "Cuando eran niños, Wolfgang y Nannerl viajaron por Europa para dar conciertos.",
      "Wolfgang compuso La flauta mágica, una ópera. Una ópera cuenta una historia con música y canto."
    ],
    "stretch": {
      "question": "¿Qué hace un compositor?",
      "answer": "Un compositor crea música. Los intérpretes la leen o la aprenden y la presentan al público."
    },
    "quiz": {
      "question": "¿Quién daba conciertos con Wolfgang cuando eran niños?",
      "options": [
        "Su hermana Nannerl",
        "Su entrenador de fútbol",
        "Un explorador polar"
      ],
      "answer": 0,
      "explain": "Su hermana Nannerl daba conciertos con él."
    },
    "quiz2": {
      "question": "¿Qué tipo de obra es La flauta mágica?",
      "options": [
        "Un mapa",
        "Una ópera",
        "Una pintura"
      ],
      "answer": 1,
      "explain": "Es una ópera: una historia contada con música y canto."
    },
    "activity": {
      "title": "Crea una pequeña ópera",
      "prompt": "Canta una oración sobre tu día. Pide a alguien que te conteste cantando. ¡Ya comenzaron una conversación musical!"
    },
    "wikiTitle": "Wolfgang Amadeus Mozart",
    "photoAlt": "Retrato pintado del compositor Wolfgang Amadeus Mozart",
    "sources": [
      {
        "title": "Fundación Mozarteum: Mozart y su familia",
        "url": "https://mozarteum.at/en/wolfgang-amade-mozart"
      },
      {
        "title": "Fundación Mozarteum: La flauta mágica",
        "url": "https://mozarteum.at/en/mozart-museums/mozarts-residence"
      }
    ]
  },
  {
    "id": "ludwig-van-beethoven",
    "name": "Ludwig van Beethoven",
    "category": "arts",
    "years": "1770–1827",
    "role": "Compositor y pianista",
    "country": "Nació en Bonn, en la actual Alemania",
    "hook": "Siguió creando música mientras perdía la audición.",
    "facts": [
      "Ludwig tocaba el piano y componía música para instrumentos y voces.",
      "Perdió la audición poco a poco, pero siguió componiendo obras, como su Novena Sinfonía.",
      "Le encantaba estar al aire libre y caminar entre los árboles."
    ],
    "stretch": {
      "question": "¿Para hacer música hay que escucharla siempre de la misma manera?",
      "answer": "No. Las personas viven la música de distintas formas. Los músicos también pueden usar notas escritas, la memoria, la vista y las vibraciones."
    },
    "quiz": {
      "question": "¿Qué instrumento tocaba Ludwig?",
      "options": [
        "La trompeta",
        "El tambor",
        "El piano"
      ],
      "answer": 2,
      "explain": "Ludwig era pianista y compositor."
    },
    "quiz2": {
      "question": "¿Qué siguió haciendo Ludwig mientras perdía la audición?",
      "options": [
        "Componer música",
        "Pilotar aviones",
        "Construir barcos"
      ],
      "answer": 0,
      "explain": "Siguió componiendo música, como su Novena Sinfonía."
    },
    "activity": {
      "title": "Dale ritmo a un paseo",
      "prompt": "Da un paseo corto con una persona adulta. Nota el patrón de tus pasos y después crea un ritmo con las palmas."
    },
    "wikiTitle": "Ludwig van Beethoven",
    "photoAlt": "Retrato pintado del compositor Ludwig van Beethoven",
    "sources": [
      {
        "title": "Casa de Beethoven: Beethoven",
        "url": "https://www.beethoven.de/en/beethoven"
      },
      {
        "title": "Casa de Beethoven: cronología de Viena",
        "url": "https://www.beethoven.de/en/g/zeittafel-beethoven-in-wien"
      },
      {
        "title": "Casa de Beethoven: la naturaleza",
        "url": "https://www.beethoven.de/en/g/natur"
      }
    ]
  }
];

;
/* Historical photographs and portraits; provenance and licenses per image. */
window.MLL_MORE_PHOTOS = {
  "neil-armstrong": {
    "src": "assets/people/neil-armstrong.jpg",
    "alt": "Photograph of Neil Armstrong in his spacesuit",
    "credit": "NASA (photographer uncredited)",
    "source": "https://commons.wikimedia.org/wiki/File:Neil_Armstrong_pose.jpg",
    "license": "Public domain",
    "licenseUrl": "",
    "width": 560,
    "height": 700,
    "title": "Neil Armstrong pose.jpg",
    "changes": "Resized and compressed; may be cropped by the page layout."
  },
  "leonardo-da-vinci": {
    "src": "assets/people/leonardo-da-vinci.jpg",
    "alt": "Drawn portrait of Leonardo da Vinci, attributed to Francesco Melzi",
    "credit": "Attributed to Francesco Melzi",
    "source": "https://commons.wikimedia.org/wiki/File:Francesco_Melzi_-_Portrait_of_Leonardo_(colour_correction).png",
    "license": "Public domain",
    "licenseUrl": "",
    "width": 489,
    "height": 700,
    "title": "Francesco Melzi - Portrait of Leonardo (colour correction).png",
    "changes": "Resized and compressed; may be cropped by the page layout."
  },
  "nikola-tesla": {
    "src": "assets/people/nikola-tesla.jpg",
    "alt": "Photograph of inventor Nikola Tesla",
    "credit": "Napoleon Sarony",
    "source": "https://commons.wikimedia.org/wiki/File:Tesla_circa_1890.jpeg",
    "license": "Public domain",
    "licenseUrl": "",
    "width": 522,
    "height": 700,
    "title": "Tesla circa 1890.jpeg",
    "changes": "Resized and compressed; may be cropped by the page layout."
  },
  "thomas-edison": {
    "src": "assets/people/thomas-edison.jpg",
    "alt": "Photograph of inventor Thomas Edison",
    "credit": "Louis Bachrach, Bachrach Studios, restored by Michel Vuijlsteke",
    "source": "https://commons.wikimedia.org/wiki/File:Thomas_Edison2.jpg",
    "license": "Public domain",
    "licenseUrl": "",
    "width": 547,
    "height": 700,
    "title": "Thomas Edison2.jpg",
    "changes": "Resized and compressed; may be cropped by the page layout."
  },
  "isaac-newton": {
    "src": "assets/people/isaac-newton.jpg",
    "alt": "Painted portrait of Isaac Newton",
    "credit": "Godfrey Kneller",
    "source": "https://commons.wikimedia.org/wiki/File:Portrait_of_Sir_Isaac_Newton,_1689_(brightened).jpg",
    "license": "Public domain",
    "licenseUrl": "",
    "width": 581,
    "height": 700,
    "title": "Portrait of Sir Isaac Newton, 1689 (brightened).jpg",
    "changes": "Resized and compressed; may be cropped by the page layout."
  },
  "galileo-galilei": {
    "src": "assets/people/galileo-galilei.jpg",
    "alt": "Painted portrait of Galileo Galilei",
    "credit": "Justus Sustermans",
    "source": "https://commons.wikimedia.org/wiki/File:Galileo_Galilei_(1564-1642)_RMG_BHC2700.tiff",
    "license": "Public domain",
    "licenseUrl": "",
    "width": 551,
    "height": 700,
    "title": "Galileo Galilei (1564-1642) RMG BHC2700.tiff",
    "changes": "Resized and compressed; may be cropped by the page layout."
  },
  "marie-curie": {
    "src": "assets/people/marie-curie.jpg",
    "alt": "Photograph of scientist Marie Curie",
    "credit": "Henri Manuel",
    "source": "https://commons.wikimedia.org/wiki/File:Marie_Curie_c._1920s.jpg",
    "license": "Public domain",
    "licenseUrl": "",
    "width": 515,
    "height": 700,
    "title": "Marie Curie c. 1920s.jpg",
    "changes": "Resized and compressed; may be cropped by the page layout."
  },
  "alexander-graham-bell": {
    "src": "assets/people/alexander-graham-bell.jpg",
    "alt": "Photograph of inventor Alexander Graham Bell",
    "credit": "Unknown photographer",
    "source": "https://commons.wikimedia.org/wiki/File:Alexander_Graham_Bell_1895_NPG_77_363.jpg",
    "license": "CC0",
    "licenseUrl": "http://creativecommons.org/publicdomain/zero/1.0/deed.en",
    "width": 473,
    "height": 700,
    "title": "Alexander Graham Bell 1895 NPG 77 363.jpg",
    "changes": "Resized and compressed; may be cropped by the page layout."
  },
  "alexander-fleming": {
    "src": "assets/people/alexander-fleming.jpg",
    "alt": "Photograph of scientist Alexander Fleming",
    "credit": "Official photographer",
    "source": "https://commons.wikimedia.org/wiki/File:Synthetic_Production_of_Penicillin_TR1468.jpg",
    "license": "Public domain",
    "licenseUrl": "",
    "width": 493,
    "height": 700,
    "title": "Synthetic Production of Penicillin TR1468.jpg",
    "changes": "Resized and compressed; may be cropped by the page layout."
  },
  "benjamin-franklin": {
    "src": "assets/people/benjamin-franklin.jpg",
    "alt": "Painted portrait of Benjamin Franklin",
    "credit": "Joseph-Siffred Duplessis",
    "source": "https://commons.wikimedia.org/wiki/File:Joseph_Siffrein_Duplessis_-_Benjamin_Franklin_-_Google_Art_Project.jpg",
    "license": "Public domain",
    "licenseUrl": "",
    "width": 574,
    "height": 700,
    "title": "Joseph Siffrein Duplessis - Benjamin Franklin - Google Art Project.jpg",
    "changes": "Resized and compressed; may be cropped by the page layout."
  },
  "wright-brothers": {
    "src": "assets/people/wright-brothers.jpg",
    "alt": "Wilbur (left) and Orville Wright on their porch in 1909",
    "credit": "Uncredited photographer; Smithsonian National Air and Space Museum",
    "source": "https://commons.wikimedia.org/wiki/File:Wright_Brothers_at_home,_1909.jpg",
    "license": "Public domain",
    "licenseUrl": "",
    "width": 528,
    "height": 700,
    "title": "Wright Brothers at home, 1909.jpg",
    "changes": "Resized and compressed; may be cropped by the page layout."
  },
  "johannes-gutenberg": {
    "src": "assets/people/johannes-gutenberg.jpg",
    "alt": "Later portrait imagining Johannes Gutenberg",
    "credit": "Nicolas de Larmessin (1632–1694)",
    "source": "https://commons.wikimedia.org/wiki/File:Johannes_Gutenberg.jpg",
    "license": "Public domain",
    "licenseUrl": "",
    "width": 567,
    "height": 700,
    "title": "Johannes Gutenberg.jpg",
    "changes": "Resized and compressed; may be cropped by the page layout."
  },
  "george-washington": {
    "src": "assets/people/george-washington.jpg",
    "alt": "Painted portrait of George Washington",
    "credit": "Gilbert Stuart",
    "source": "https://commons.wikimedia.org/wiki/File:Gilbert_Stuart_Williamstown_Portrait_of_George_Washington.jpg",
    "license": "Public domain",
    "licenseUrl": "",
    "width": 576,
    "height": 700,
    "title": "Gilbert Stuart Williamstown Portrait of George Washington.jpg",
    "changes": "Resized and compressed; may be cropped by the page layout."
  },
  "abraham-lincoln": {
    "src": "assets/people/abraham-lincoln.jpg",
    "alt": "Photograph of Abraham Lincoln",
    "credit": "Alexander Gardner",
    "source": "https://commons.wikimedia.org/wiki/File:Abraham_Lincoln_O-77_matte_collodion_print.jpg",
    "license": "Public domain",
    "licenseUrl": "",
    "width": 543,
    "height": 700,
    "title": "Abraham Lincoln O-77 matte collodion print.jpg",
    "changes": "Resized and compressed; may be cropped by the page layout."
  },
  "amelia-earhart": {
    "src": "assets/people/amelia-earhart.jpg",
    "alt": "Photograph of pilot Amelia Earhart",
    "credit": "Underwood & Underwood",
    "source": "https://commons.wikimedia.org/wiki/File:Amelia_Earhart_standing_under_nose_of_her_Lockheed_Model_10-E_Electra,_small_(cropped).jpg",
    "license": "Public domain",
    "licenseUrl": "",
    "width": 521,
    "height": 700,
    "title": "Amelia Earhart standing under nose of her Lockheed Model 10-E Electra, small (cropped).jpg",
    "changes": "Resized and compressed; may be cropped by the page layout."
  },
  "ernest-shackleton": {
    "src": "assets/people/ernest-shackleton.jpg",
    "alt": "Photograph of explorer Ernest Shackleton",
    "credit": "George Charles Beresford / Adam Cuerden",
    "source": "https://commons.wikimedia.org/wiki/File:Ernest_Shackleton_before_1909.jpg",
    "license": "Public domain",
    "licenseUrl": "",
    "width": 507,
    "height": 700,
    "title": "Ernest Shackleton before 1909.jpg",
    "changes": "Resized and compressed; may be cropped by the page layout."
  },
  "marco-polo": {
    "src": "assets/people/marco-polo.jpg",
    "alt": "Later portrait imagining Marco Polo",
    "credit": "Unknown artist",
    "source": "https://commons.wikimedia.org/wiki/File:Frontispice_%C3%A9dition_de_Nuremberg_1477_(cropped).png",
    "license": "Public domain",
    "licenseUrl": "",
    "width": 363,
    "height": 623,
    "title": "Frontispice édition de Nuremberg 1477 (cropped).png",
    "changes": "Resized and compressed; may be cropped by the page layout."
  },
  "steve-irwin": {
    "src": "assets/people/steve-irwin.jpg",
    "alt": "Photograph of wildlife educator Steve Irwin",
    "credit": "Richard Giles aka rich 115",
    "source": "https://commons.wikimedia.org/wiki/File:Steve_Irwin_December_2005_(4x5_cropped).jpg",
    "license": "CC BY 2.0",
    "licenseUrl": "https://creativecommons.org/licenses/by/2.0",
    "width": 564,
    "height": 700,
    "title": "Steve Irwin December 2005 (4x5 cropped).jpg",
    "changes": "Resized and compressed; may be cropped by the page layout."
  },
  "babe-ruth": {
    "src": "assets/people/babe-ruth.jpg",
    "alt": "Photograph of baseball player Babe Ruth",
    "credit": "Irwin, La Broad, & Pudlin.",
    "source": "https://commons.wikimedia.org/wiki/File:Babe_Ruth2.jpg",
    "license": "Public domain",
    "licenseUrl": "",
    "width": 531,
    "height": 700,
    "title": "Babe Ruth2.jpg",
    "changes": "Resized and compressed; may be cropped by the page layout."
  },
  "jackie-robinson": {
    "src": "assets/people/jackie-robinson.jpg",
    "alt": "Photograph of baseball player Jackie Robinson",
    "credit": "Harry Warnecke / Frank Livia / Robert F. Cranston / William Klein",
    "source": "https://commons.wikimedia.org/wiki/File:Jackie_Robinson,_NPG_97_135.jpg",
    "license": "CC0",
    "licenseUrl": "http://creativecommons.org/publicdomain/zero/1.0/deed.en",
    "width": 544,
    "height": 700,
    "title": "Jackie Robinson, NPG 97 135.jpg",
    "changes": "Resized and compressed; may be cropped by the page layout."
  },
  "pele": {
    "src": "assets/people/pele.jpg",
    "alt": "Photograph of soccer player Pelé",
    "credit": "Unknown photographer",
    "source": "https://commons.wikimedia.org/wiki/File:Pele_con_brasil_(cropped).jpg",
    "license": "Public domain",
    "licenseUrl": "",
    "width": 388,
    "height": 526,
    "title": "Pele con brasil (cropped).jpg",
    "changes": "Resized and compressed; may be cropped by the page layout."
  },
  "roberto-clemente": {
    "src": "assets/people/roberto-clemente.jpg",
    "alt": "Photograph of baseball player Roberto Clemente",
    "credit": "Unknown photographer",
    "source": "https://commons.wikimedia.org/wiki/File:Roberto_Clemente.jpg",
    "license": "Public domain",
    "licenseUrl": "",
    "width": 538,
    "height": 700,
    "title": "Roberto Clemente.jpg",
    "changes": "Resized and compressed; may be cropped by the page layout."
  },
  "walt-disney": {
    "src": "assets/people/walt-disney.jpg",
    "alt": "Photograph of Walt Disney",
    "credit": "Boy Scouts of America",
    "source": "https://commons.wikimedia.org/wiki/File:Walt_Disney_1946_(cropped2).JPG",
    "license": "Public domain",
    "licenseUrl": "",
    "width": 450,
    "height": 600,
    "title": "Walt Disney 1946 (cropped2).JPG",
    "changes": "Resized and compressed; may be cropped by the page layout."
  },
  "wolfgang-amadeus-mozart": {
    "src": "assets/people/wolfgang-amadeus-mozart.jpg",
    "alt": "Painted portrait of Wolfgang Amadeus Mozart",
    "credit": "Johann Nepomuk della Croce",
    "source": "https://commons.wikimedia.org/wiki/File:The_Mozart_Family_-_Wolfgang_Amadeus_Mozart_headshot.jpg",
    "license": "Public domain",
    "licenseUrl": "",
    "width": 525,
    "height": 700,
    "title": "The Mozart Family - Wolfgang Amadeus Mozart headshot.jpg",
    "changes": "Resized and compressed; may be cropped by the page layout."
  },
  "ludwig-van-beethoven": {
    "src": "assets/people/ludwig-van-beethoven.jpg",
    "alt": "Painted portrait of Ludwig van Beethoven",
    "credit": "Joseph Karl Stieler",
    "source": "https://commons.wikimedia.org/wiki/File:Joseph_Karl_Stieler%27s_Beethoven_mit_dem_Manuskript_der_Missa_solemnis.jpg",
    "license": "Public domain",
    "licenseUrl": "",
    "width": 562,
    "height": 700,
    "title": "Joseph Karl Stieler's Beethoven mit dem Manuskript der Missa solemnis.jpg",
    "changes": "Resized and compressed; may be cropped by the page layout."
  }
};
window.MLL_MORE_ES_PHOTO_ALT = {
  "neil-armstrong": "Fotografía de Neil Armstrong con su traje espacial",
  "leonardo-da-vinci": "Retrato dibujado de Leonardo da Vinci, atribuido a Francesco Melzi",
  "nikola-tesla": "Fotografía del inventor Nikola Tesla",
  "thomas-edison": "Fotografía del inventor Thomas Edison",
  "isaac-newton": "Retrato pintado de Isaac Newton",
  "galileo-galilei": "Retrato pintado de Galileo Galilei",
  "marie-curie": "Fotografía de la científica Marie Curie",
  "alexander-graham-bell": "Fotografía del inventor Alexander Graham Bell",
  "alexander-fleming": "Fotografía del científico Alexander Fleming",
  "benjamin-franklin": "Retrato pintado de Benjamin Franklin",
  "wright-brothers": "Wilbur (izquierda) y Orville Wright en su porche en 1909",
  "johannes-gutenberg": "Retrato posterior que imagina a Johannes Gutenberg",
  "george-washington": "Retrato pintado de George Washington",
  "abraham-lincoln": "Fotografía de Abraham Lincoln",
  "amelia-earhart": "Fotografía de la piloto Amelia Earhart",
  "ernest-shackleton": "Fotografía del explorador Ernest Shackleton",
  "marco-polo": "Retrato posterior que imagina a Marco Polo",
  "steve-irwin": "Fotografía de Steve Irwin, educador sobre animales",
  "babe-ruth": "Fotografía del beisbolista Babe Ruth",
  "jackie-robinson": "Fotografía del beisbolista Jackie Robinson",
  "pele": "Fotografía del futbolista Pelé",
  "roberto-clemente": "Fotografía del beisbolista Roberto Clemente",
  "walt-disney": "Fotografía de Walt Disney",
  "wolfgang-amadeus-mozart": "Retrato pintado de Wolfgang Amadeus Mozart",
  "ludwig-van-beethoven": "Retrato pintado de Ludwig van Beethoven"
};

;
/* Four family places. Public facts checked 2026-09-26.
   Family connections were supplied by Max’s parent; La Paz origin remains a question.
   Coordinates are approximate public city locations, never family homes. */
window.MLL_FAMILY_EXTRA = [
  {
    "id": "santa-cruz-bolivia",
    "name": "Santa Cruz de la Sierra",
    "country": "Bolivia",
    "category": "Family",
    "lat": -17.7833,
    "lon": -63.1833,
    "hook": "Nico’s next city has trees with big, round “bellies”!",
    "facts": [
      "Santa Cruz stands on broad, low plains in eastern Bolivia.",
      "Its famous toborochi trees have thick, round trunks and pink or white flowers.",
      "The city’s botanical garden protects native forest where many kinds of birds live."
    ],
    "familyNote": "Tía Claudia, primo Nico and Tío Pablo are moving here soon.",
    "stretch": {
      "question": "How can a garden help wild animals?",
      "answer": "Trees and other plants can provide food and shelter. A garden with native plants can be a home for local wildlife."
    },
    "quiz": {
      "question": "What is special about a toborochi tree’s trunk?",
      "options": [
        "It is made of ice",
        "It is thick and round",
        "It is made of metal"
      ],
      "answer": 1,
      "explain": "A toborochi has a thick, round trunk, like a big belly!"
    },
    "photoQuery": "Santa Cruz de la Sierra Bolivia cathedral plaza 24 septiembre",
    "wikiTitle": "Santa Cruz de la Sierra",
    "photoAlt": "Santa Cruz de la Sierra, Bolivia, with its central plaza and cathedral",
    "sources": [
      {
        "title": "Santa Cruz Botanical Garden: Toborochi trees",
        "url": "https://jardinbotanico.gmsantacruz.gob.bo/Colecciones/Toborochi/"
      },
      {
        "title": "City of Santa Cruz: Botanical garden",
        "url": "https://www.gmsantacruz.gob.bo/Mi-Ciudad/Grandes-Reservas-Naturales/Jardin-Botanico/"
      },
      {
        "title": "World Bank project study: Santa Cruz geography",
        "url": "https://documents1.worldbank.org/curated/en/157081468006913330/pdf/E16010REVISED0final1EIA.pdf"
      }
    ]
  },
  {
    "id": "mar-del-plata",
    "name": "Mar del Plata",
    "country": "Argentina",
    "category": "Family",
    "lat": -38.0055,
    "lon": -57.5426,
    "hook": "Tío Eduardo’s city has sea lions by the harbor!",
    "facts": [
      "Mar del Plata is a city on Argentina’s Atlantic coast, with many sandy beaches.",
      "Sea lions gather at the harbor, where there is a reserve that helps protect them.",
      "The Punta Mogotes lighthouse is painted red and white. It has stood there since 1891!"
    ],
    "familyNote": "Tío Eduardo, who is married to Tía Mariuxi, is from here.",
    "stretch": {
      "question": "How can a lighthouse help a boat at night?",
      "answer": "Its light helps sailors recognize the coast and find their way. Different lights can help identify different places."
    },
    "quiz": {
      "question": "Which animals gather at Mar del Plata’s harbor?",
      "options": [
        "Sea lions",
        "Camels",
        "Gorillas"
      ],
      "answer": 0,
      "explain": "Sea lions! The harbor has a reserve for them."
    },
    "photoQuery": "Mar del Plata Argentina coast waterfront beach",
    "wikiTitle": "Mar del Plata",
    "photoAlt": "The coast and waterfront of Mar del Plata, Argentina",
    "sources": [
      {
        "title": "Mar del Plata Tourism: Location",
        "url": "https://www.turismomardelplata.gob.ar/ASP/SP/como-llegar.htm"
      },
      {
        "title": "Mar del Plata Tourism: Coastal walks",
        "url": "https://www.turismomardelplata.gob.ar/ASP/SP/paseos.htm"
      },
      {
        "title": "Mar del Plata Tourism: Sea lion reserve and lighthouse",
        "url": "https://www.turismomardelplata.gob.ar/ASP/SP/audioguias-extendida.htm"
      }
    ]
  },
  {
    "id": "medellin",
    "name": "Medellín",
    "country": "Colombia",
    "category": "Family",
    "lat": 6.2442,
    "lon": -75.5812,
    "hook": "Tía Andrea’s city has rides in the air and a flower parade.",
    "facts": [
      "Medellín’s Metrocable carries people in cabins hanging from cables, high above the streets.",
      "During the Flower Festival, people called silleteros carry large flower designs on their backs.",
      "The city’s botanical garden has a Butterfly House. Imagine spotting wings of different colors!"
    ],
    "familyNote": "Tía Andrea, who is married to Pepito, is from here.",
    "stretch": {
      "question": "Why could cable cars help in a hilly city?",
      "answer": "They can carry people above steep streets, so riders do not have to climb the whole way."
    },
    "quiz": {
      "question": "What do silleteros carry in Medellín’s famous parade?",
      "options": [
        "Snowballs",
        "Surfboards",
        "Flower designs"
      ],
      "answer": 2,
      "explain": "They carry large designs made with flowers on their backs."
    },
    "photoQuery": "Medellin Colombia Metrocable city mountains",
    "wikiTitle": "Medellín",
    "photoAlt": "Medellín, Colombia, with cable cars above hillside neighborhoods",
    "sources": [
      {
        "title": "Metro de Medellín: Metrocable",
        "url": "https://www.metrodemedellin.gov.co/al-dia/noticias/metrocable-linea-h-para-integrarnos-mas-y-volar-alto"
      },
      {
        "title": "Medellín official tourism: Silletero tradition",
        "url": "https://www.medellin.travel/silleteros-tradition/?lang=en"
      },
      {
        "title": "Medellín official tourism: Botanical garden",
        "url": "https://www.medellin.travel/jardin-botanico/"
      }
    ]
  },
  {
    "id": "la-paz",
    "name": "La Paz",
    "country": "Bolivia",
    "category": "Family",
    "lat": -16.5,
    "lon": -68.15,
    "hook": "Cable cars glide above a city high in the Andes.",
    "facts": [
      "La Paz sits high in the Andes mountains, in a huge valley shaped like a bowl.",
      "People ride cable cars above the city to get around. The system is called Mi Teleférico.",
      "Nearby Valle de la Luna means Moon Valley. Water and wind shaped its clay into strange towers right here on Earth!"
    ],
    "familyNote": "Ask Tío Pablo if this is where he grew up! He is moving back to Bolivia.",
    "stretch": {
      "question": "How can water and wind change the land?",
      "answer": "They slowly carry away tiny pieces of soil and clay. Over time, this can leave surprising shapes behind."
    },
    "quiz": {
      "question": "What carries people above La Paz’s streets?",
      "options": [
        "Submarines",
        "Cable cars",
        "Sleds"
      ],
      "answer": 1,
      "explain": "Cable cars carry people above the city."
    },
    "photoQuery": "La Paz Bolivia city Illimani cable cars",
    "wikiTitle": "La Paz",
    "photoAlt": "La Paz, Bolivia, beneath the Andes mountains",
    "sources": [
      {
        "title": "NASA: La Paz, Bolivia",
        "url": "https://science.nasa.gov/photojournal/la-paz-bolivia/"
      },
      {
        "title": "La Paz Tourism: Green cable-car line",
        "url": "https://lapaz.bo/turismo/sur-teleferico-verde/"
      },
      {
        "title": "La Paz Tourism: Moon Valley",
        "url": "https://lapaz.bo/turismo/mallasa-valle-de-la-luna/"
      }
    ]
  }
];

window.MLL_ES_FAMILY_EXTRA = [
  {
    "id": "santa-cruz-bolivia",
    "name": "Santa Cruz de la Sierra",
    "country": "Bolivia",
    "category": "Familia",
    "lat": -17.7833,
    "lon": -63.1833,
    "hook": "¡La próxima ciudad de Nico tiene árboles con grandes «barrigas» redondas!",
    "facts": [
      "Santa Cruz está en las amplias llanuras del este de Bolivia, a poca altura sobre el mar.",
      "Sus famosos toborochis tienen troncos gruesos y redondos, y flores rosadas o blancas.",
      "El jardín botánico de la ciudad protege un bosque nativo donde viven muchas clases de aves."
    ],
    "familyNote": "Tía Claudia, primo Nico y Tío Pablo se van a mudar aquí pronto.",
    "stretch": {
      "question": "¿Cómo puede un jardín ayudar a los animales silvestres?",
      "answer": "Los árboles y otras plantas pueden dar alimento y refugio. Un jardín con plantas nativas puede ser un hogar para los animales de la zona."
    },
    "quiz": {
      "question": "¿Qué tiene de especial el tronco de un toborochi?",
      "options": [
        "Está hecho de hielo",
        "Es grueso y redondo",
        "Está hecho de metal"
      ],
      "answer": 1,
      "explain": "¡El tronco del toborochi es grueso y redondo, como una gran barriga!"
    },
    "photoQuery": "Santa Cruz de la Sierra Bolivia cathedral plaza 24 septiembre",
    "wikiTitle": "Santa Cruz de la Sierra",
    "photoAlt": "Santa Cruz de la Sierra, Bolivia, con su plaza central y su catedral",
    "sources": [
      {
        "title": "Jardín Botánico de Santa Cruz: toborochis",
        "url": "https://jardinbotanico.gmsantacruz.gob.bo/Colecciones/Toborochi/"
      },
      {
        "title": "Municipio de Santa Cruz: jardín botánico",
        "url": "https://www.gmsantacruz.gob.bo/Mi-Ciudad/Grandes-Reservas-Naturales/Jardin-Botanico/"
      },
      {
        "title": "Estudio del proyecto del Banco Mundial: geografía de Santa Cruz",
        "url": "https://documents1.worldbank.org/curated/en/157081468006913330/pdf/E16010REVISED0final1EIA.pdf"
      }
    ]
  },
  {
    "id": "mar-del-plata",
    "name": "Mar del Plata",
    "country": "Argentina",
    "category": "Familia",
    "lat": -38.0055,
    "lon": -57.5426,
    "hook": "¡La ciudad de Tío Eduardo tiene lobos marinos junto al puerto!",
    "facts": [
      "Mar del Plata es una ciudad de la costa atlántica de Argentina, con muchas playas de arena.",
      "Los lobos marinos se reúnen en el puerto, donde hay una reserva que ayuda a protegerlos.",
      "El faro de Punta Mogotes está pintado de rojo y blanco. ¡Está allí desde 1891!"
    ],
    "familyNote": "Tío Eduardo, que está casado con Tía Mariuxi, es de aquí.",
    "stretch": {
      "question": "¿Cómo puede un faro ayudar a un barco de noche?",
      "answer": "Su luz ayuda a los navegantes a reconocer la costa y orientarse. Las luces diferentes permiten identificar distintos lugares."
    },
    "quiz": {
      "question": "¿Qué animales se reúnen en el puerto de Mar del Plata?",
      "options": [
        "Lobos marinos",
        "Camellos",
        "Gorilas"
      ],
      "answer": 0,
      "explain": "¡Lobos marinos! En el puerto hay una reserva para ellos."
    },
    "photoQuery": "Mar del Plata Argentina coast waterfront beach",
    "wikiTitle": "Mar del Plata",
    "photoAlt": "La costa y el paseo junto al mar de Mar del Plata, Argentina",
    "sources": [
      {
        "title": "Turismo Mar del Plata: ubicación",
        "url": "https://www.turismomardelplata.gob.ar/ASP/SP/como-llegar.htm"
      },
      {
        "title": "Turismo Mar del Plata: paseos por la costa",
        "url": "https://www.turismomardelplata.gob.ar/ASP/SP/paseos.htm"
      },
      {
        "title": "Turismo Mar del Plata: reserva de lobos marinos y faro",
        "url": "https://www.turismomardelplata.gob.ar/ASP/SP/audioguias-extendida.htm"
      }
    ]
  },
  {
    "id": "medellin",
    "name": "Medellín",
    "country": "Colombia",
    "category": "Familia",
    "lat": 6.2442,
    "lon": -75.5812,
    "hook": "La ciudad de Tía Andrea tiene paseos por el aire y un desfile de flores.",
    "facts": [
      "El Metrocable de Medellín lleva a las personas en cabinas colgadas de cables, por encima de las calles.",
      "Durante la Feria de las Flores, los silleteros llevan grandes diseños de flores en la espalda.",
      "El jardín botánico de la ciudad tiene una Casa de las Mariposas. ¡Imagina descubrir alas de distintos colores!"
    ],
    "familyNote": "Tía Andrea, que está casada con Pepito, es de aquí.",
    "stretch": {
      "question": "¿Por qué pueden ayudar los teleféricos en una ciudad con colinas?",
      "answer": "Llevan a las personas por encima de calles empinadas. Así, los pasajeros no tienen que subir todo el camino a pie."
    },
    "quiz": {
      "question": "¿Qué llevan los silleteros en el famoso desfile de Medellín?",
      "options": [
        "Bolas de nieve",
        "Tablas de surf",
        "Diseños de flores"
      ],
      "answer": 2,
      "explain": "Llevan grandes diseños de flores en la espalda."
    },
    "photoQuery": "Medellin Colombia Metrocable city mountains",
    "wikiTitle": "Medellín",
    "photoAlt": "Medellín, Colombia, con teleféricos sobre los barrios de las laderas",
    "sources": [
      {
        "title": "Metro de Medellín: Metrocable",
        "url": "https://www.metrodemedellin.gov.co/al-dia/noticias/metrocable-linea-h-para-integrarnos-mas-y-volar-alto"
      },
      {
        "title": "Turismo oficial de Medellín: tradición silletera",
        "url": "https://www.medellin.travel/silleteros-tradition/?lang=en"
      },
      {
        "title": "Turismo oficial de Medellín: jardín botánico",
        "url": "https://www.medellin.travel/jardin-botanico/"
      }
    ]
  },
  {
    "id": "la-paz",
    "name": "La Paz",
    "country": "Bolivia",
    "category": "Familia",
    "lat": -16.5,
    "lon": -68.15,
    "hook": "Los teleféricos se deslizan sobre una ciudad en lo alto de los Andes.",
    "facts": [
      "La Paz está en lo alto de los Andes, en un enorme valle con forma de tazón.",
      "Las personas viajan en teleféricos por encima de la ciudad. El sistema se llama Mi Teleférico.",
      "Cerca está el Valle de la Luna. El agua y el viento moldearon su arcilla en extrañas torres, ¡aquí mismo en la Tierra!"
    ],
    "familyNote": "¡Pregúntale a Tío Pablo si aquí fue donde creció! Él va a volver a vivir en Bolivia.",
    "stretch": {
      "question": "¿Cómo pueden el agua y el viento cambiar el terreno?",
      "answer": "Poco a poco se llevan pequeños pedazos de tierra y arcilla. Con el tiempo, pueden dejar formas sorprendentes."
    },
    "quiz": {
      "question": "¿Qué transporta a las personas por encima de las calles de La Paz?",
      "options": [
        "Submarinos",
        "Teleféricos",
        "Trineos"
      ],
      "answer": 1,
      "explain": "Los teleféricos llevan a las personas por encima de la ciudad."
    },
    "photoQuery": "La Paz Bolivia city Illimani cable cars",
    "wikiTitle": "La Paz",
    "photoAlt": "La Paz, Bolivia, bajo las montañas de los Andes",
    "sources": [
      {
        "title": "NASA: La Paz, Bolivia",
        "url": "https://science.nasa.gov/photojournal/la-paz-bolivia/"
      },
      {
        "title": "Turismo de La Paz: Línea Verde del teleférico",
        "url": "https://lapaz.bo/turismo/sur-teleferico-verde/"
      },
      {
        "title": "Turismo de La Paz: Valle de la Luna",
        "url": "https://lapaz.bo/turismo/mallasa-valle-de-la-luna/"
      }
    ]
  }
];

;
/* Licensed local destination photographs. */
window.MLL_FAMILY_EXTRA_PHOTOS = {
  "santa-cruz-bolivia": {
    "src": "assets/places/santa-cruz-bolivia.jpg",
    "alt": "The Cathedral Basilica of San Lorenzo in Santa Cruz de la Sierra, Bolivia",
    "credit": "Parallelepiped09",
    "source": "https://commons.wikimedia.org/wiki/File:Catedral_Bas%C3%ADlica_Menor_de_San_Lorenzo,_Santa_Cruz_de_la_Sierra.jpg",
    "license": "CC BY-SA 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
    "width": 800,
    "height": 599,
    "title": "Catedral Basílica Menor de San Lorenzo, Santa Cruz de la Sierra.jpg",
    "changes": "Resized and compressed; may be cropped by the page layout."
  },
  "mar-del-plata": {
    "src": "assets/places/mar-del-plata.jpg",
    "alt": "The beach and seaside buildings of Mar del Plata, Argentina",
    "credit": "Leandro Kibisz (Loco085)",
    "source": "https://commons.wikimedia.org/wiki/File:Mar-del-plata-playa.JPG",
    "license": "Public domain",
    "licenseUrl": "",
    "width": 800,
    "height": 600,
    "title": "Mar-del-plata-playa.JPG",
    "changes": "Resized and compressed; may be cropped by the page layout."
  },
  "medellin": {
    "src": "assets/places/medellin.jpg",
    "alt": "Medellín’s El Poblado district in Colombia",
    "credit": "Daniel-1-1",
    "source": "https://commons.wikimedia.org/wiki/File:El_Poblado_Medell%C3%ADn.jpg",
    "license": "CC BY 3.0",
    "licenseUrl": "https://creativecommons.org/licenses/by/3.0",
    "width": 800,
    "height": 600,
    "title": "El Poblado Medellín.jpg",
    "changes": "Resized and compressed; may be cropped by the page layout."
  },
  "la-paz": {
    "src": "assets/places/la-paz.jpg",
    "alt": "Cable cars over La Paz, Bolivia, with Mount Illimani behind the city",
    "credit": "Christoph Strässler",
    "source": "https://commons.wikimedia.org/wiki/File:Cable_Cars_in_front_of_Mount_Illimani,_La_Paz,_Bolivia.jpg",
    "license": "CC BY-SA 2.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.0",
    "width": 800,
    "height": 450,
    "title": "Cable Cars in front of Mount Illimani, La Paz, Bolivia.jpg",
    "changes": "Resized and compressed; may be cropped by the page layout."
  }
};
window.MLL_FAMILY_EXTRA_ES_PHOTO_ALT = {
  "santa-cruz-bolivia": "La Catedral Basílica Menor de San Lorenzo en Santa Cruz de la Sierra, Bolivia",
  "mar-del-plata": "La playa y los edificios junto al mar en Mar del Plata, Argentina",
  "medellin": "El sector de El Poblado en Medellín, Colombia",
  "la-paz": "Teleféricos sobre La Paz, Bolivia, con el nevado Illimani detrás de la ciudad"
};

;
/* Licensed city gallery photographs, verified 2026-09-26.
   Locations checked against Commons file descriptions and local image inspection.
   Las Peñas author is stated explicitly on the file page (not machine-readable metadata).
   Images retain source aspect ratios and are resized/compressed without cropping. */
window.MLL_GALLERY_A = {
  "guayaquil": [
    {
      "src": "assets/gallery/guayaquil-2.jpg",
      "alt": "An iguana on a stone path in Parque Seminario, Guayaquil, Ecuador",
      "altEs": "Una iguana sobre un camino de piedra en el Parque Seminario de Guayaquil, Ecuador",
      "credit": "Padaguan",
      "source": "https://commons.wikimedia.org/wiki/File:Detalle_de_iguana_en_el_Parque_Seminario.jpg",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
      "width": 700,
      "height": 466,
      "changes": "Resized and compressed without cropping.",
      "changesEs": "Imagen reducida y comprimida, sin recortar."
    },
    {
      "src": "assets/gallery/guayaquil-3.jpg",
      "alt": "Colorful houses of Las Peñas on Santa Ana Hill, seen from the Malecón in Guayaquil, Ecuador",
      "altEs": "Casas de colores de Las Peñas en el cerro Santa Ana, vistas desde el Malecón de Guayaquil, Ecuador",
      "credit": "Martin Zeise, Berlin",
      "source": "https://commons.wikimedia.org/wiki/File:Guayaquil_LasPenas.JPG",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/",
      "width": 700,
      "height": 525,
      "changes": "Resized and compressed without cropping.",
      "changesEs": "Imagen reducida y comprimida, sin recortar."
    },
    {
      "src": "assets/gallery/guayaquil-4.jpg",
      "alt": "A fair around the gazebo in Parque Seminario, with Guayaquil’s cathedral behind it",
      "altEs": "Una feria alrededor de la glorieta del Parque Seminario, con la catedral de Guayaquil al fondo",
      "credit": "SantosJD",
      "source": "https://commons.wikimedia.org/wiki/File:Parque_Seminario.jpg",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "width": 700,
      "height": 561,
      "changes": "Resized and compressed without cropping.",
      "changesEs": "Imagen reducida y comprimida, sin recortar."
    }
  ],
  "kirkland": [
    {
      "src": "assets/gallery/kirkland-2.jpg",
      "alt": "Lake Washington, a gazebo, and benches at Marina Park in Kirkland, Washington",
      "altEs": "El lago Washington, una glorieta y bancas del Marina Park en Kirkland, Washington",
      "credit": "Joe Mabel",
      "source": "https://commons.wikimedia.org/wiki/File:Kirkland_Marina_Park_01.jpg",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/",
      "width": 700,
      "height": 525,
      "changes": "Resized and compressed without cropping.",
      "changesEs": "Imagen reducida y comprimida, sin recortar."
    },
    {
      "src": "assets/gallery/kirkland-3.jpg",
      "alt": "White water lilies and lily pads on Juanita Bay in Kirkland, Washington",
      "altEs": "Nenúfares blancos y sus hojas flotantes en la bahía Juanita de Kirkland, Washington",
      "credit": "Joe Mabel",
      "source": "https://commons.wikimedia.org/wiki/File:Juanita_Bay_-_lily_pads.jpg",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/",
      "width": 700,
      "height": 525,
      "changes": "Resized and compressed without cropping.",
      "changesEs": "Imagen reducida y comprimida, sin recortar."
    }
  ]
};

;
/* Additional licensed city photographs; captions in both languages. */
window.MLL_GALLERY_B = {
  "santa-cruz-bolivia": [
    {
      "src": "assets/gallery/santa-cruz-bolivia-2.jpg",
      "alt": "The sand dunes of Lomas de Arena near Santa Cruz de la Sierra, Bolivia",
      "altEs": "Las dunas de Lomas de Arena, cerca de Santa Cruz de la Sierra, Bolivia",
      "credit": "Gabriel Millos",
      "source": "https://commons.wikimedia.org/wiki/File:Lomas_de_Arena_-_Santa_Cruz,_Bolivia.jpg",
      "license": "CC BY-SA 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.0",
      "width": 800,
      "height": 600,
      "title": "Lomas de Arena - Santa Cruz, Bolivia.jpg",
      "changes": "Resized and compressed; may be cropped by the page layout."
    },
    {
      "src": "assets/gallery/santa-cruz-bolivia-3.jpg",
      "alt": "The botanical garden in Santa Cruz de la Sierra, Bolivia",
      "altEs": "El jardín botánico de Santa Cruz de la Sierra, Bolivia",
      "credit": "Parallelepiped09",
      "source": "https://commons.wikimedia.org/wiki/File:Jard%C3%ADn_Bot%C3%A1nico_de_Santa_Cruz.jpg",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "width": 800,
      "height": 548,
      "title": "Jardín Botánico de Santa Cruz.jpg",
      "changes": "Resized and compressed; may be cropped by the page layout."
    }
  ],
  "mar-del-plata": [
    {
      "src": "assets/gallery/mar-del-plata-2.jpg",
      "alt": "Fishing boats in the harbor of Mar del Plata, Argentina",
      "altEs": "Barcos de pesca en el puerto de Mar del Plata, Argentina",
      "credit": "Fernando de Gorocica",
      "source": "https://commons.wikimedia.org/wiki/File:Puerto_de_Mar_del_Plata.JPG",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
      "width": 800,
      "height": 600,
      "title": "Puerto de Mar del Plata.JPG",
      "changes": "Resized and compressed; may be cropped by the page layout."
    },
    {
      "src": "assets/gallery/mar-del-plata-3.jpg",
      "alt": "Sea lions resting at the harbor in Mar del Plata, Argentina",
      "altEs": "Lobos marinos descansando en el puerto de Mar del Plata, Argentina",
      "credit": "Fernandopascullo",
      "source": "https://commons.wikimedia.org/wiki/File:Lobos_marinos_en_el_puerto_de_Mar_del_Plata.jpg",
      "license": "CC BY 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/3.0",
      "width": 657,
      "height": 800,
      "title": "Lobos marinos en el puerto de Mar del Plata.jpg",
      "changes": "Resized and compressed; may be cropped by the page layout."
    }
  ],
  "medellin": [
    {
      "src": "assets/gallery/medellin-2.jpg",
      "alt": "The Metrocable by Parque Arví in Medellín, Colombia",
      "altEs": "El Metrocable del Parque Arví en Medellín, Colombia",
      "credit": "Alejandro Rojas (SajoR)",
      "source": "https://commons.wikimedia.org/wiki/File:Metrocable_del_Parque_Arv%C3%AD_-_Medell%C3%ADn.jpg",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "width": 800,
      "height": 450,
      "title": "Metrocable del Parque Arví - Medellín.jpg",
      "changes": "Resized and compressed; may be cropped by the page layout."
    },
    {
      "src": "assets/gallery/medellin-3.jpg",
      "alt": "Plaza Botero and the Palace of Culture in Medellín, Colombia",
      "altEs": "La Plaza Botero y el Palacio de la Cultura en Medellín, Colombia",
      "credit": "Paco Godoy",
      "source": "https://commons.wikimedia.org/wiki/File:Plaza_Botero,_Medell%C3%ADn.JPG",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
      "width": 800,
      "height": 600,
      "title": "Plaza Botero, Medellín.JPG",
      "changes": "Resized and compressed; may be cropped by the page layout."
    }
  ],
  "la-paz": [
    {
      "src": "assets/gallery/la-paz-2.jpg",
      "alt": "Rock formations in Moon Valley on the outskirts of La Paz, Bolivia",
      "altEs": "Formaciones del Valle de la Luna, en las afueras de La Paz, Bolivia",
      "credit": "EEJCC",
      "source": "https://commons.wikimedia.org/wiki/File:Valle_de_la_Luna,_La_Paz.jpg",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "width": 800,
      "height": 533,
      "title": "Valle de la Luna, La Paz.jpg",
      "changes": "Resized and compressed; may be cropped by the page layout."
    },
    {
      "src": "assets/gallery/la-paz-3.jpg",
      "alt": "Colorful buildings on Calle Jaén in La Paz, Bolivia",
      "altEs": "Edificios coloridos en la calle Jaén de La Paz, Bolivia",
      "credit": "Parallelepiped09",
      "source": "https://commons.wikimedia.org/wiki/File:Calle_Apolinar_Ja%C3%A9n,_Lpz2_small.jpg",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "width": 600,
      "height": 800,
      "title": "Calle Apolinar Jaén, Lpz2 small.jpg",
      "changes": "Resized and compressed; may be cropped by the page layout."
    }
  ]
};

;
/* Locally bundled city gallery photos. English/Spanish captions and original image licenses. */
window.MLL_GALLERY_C = {
  "moscow": [
    {
      "src": "assets/gallery/moscow-2.jpg",
      "alt": "Chandeliers and arches inside Moscow’s Komsomolskaya Metro station.",
      "altEs": "Lámparas y arcos dentro de la estación Komsomolskaya del metro de Moscú.",
      "credit": "A.Savin",
      "source": "https://commons.wikimedia.org/wiki/File:MosMetro_KomsomolskayaKL_img2_asv2018-01.jpg",
      "license": "Free Art License",
      "licenseUrl": "http://artlibre.org/licence/lal/en",
      "width": 700,
      "height": 467,
      "title": "MosMetro KomsomolskayaKL img2 asv2018-01.jpg",
      "changes": "Resized and compressed; thumbnails may crop the image."
    },
    {
      "src": "assets/gallery/moscow-3.jpg",
      "alt": "The skyscrapers of Moscow City glow as the sun goes down.",
      "altEs": "Los rascacielos de Moscow City brillan al ponerse el sol.",
      "credit": "Igor3188",
      "source": "https://commons.wikimedia.org/wiki/File:Moscow-City_2025.jpg",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "width": 700,
      "height": 431,
      "title": "Moscow-City 2025.jpg",
      "changes": "Resized and compressed; thumbnails may crop the image."
    }
  ],
  "supertrees": [
    {
      "src": "assets/gallery/supertrees-2.jpg",
      "alt": "A fountain and giant Supertrees at Gardens by the Bay in Singapore.",
      "altEs": "Una fuente y enormes superárboles en Gardens by the Bay, Singapur.",
      "credit": "Dietmar Rabich",
      "source": "https://commons.wikimedia.org/wiki/File:Singapore_(SG),_Gardens_By_The_Bay_--_2019_--_4755.jpg",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "width": 700,
      "height": 467,
      "title": "Singapore (SG), Gardens By The Bay -- 2019 -- 4755.jpg",
      "changes": "Resized and compressed; thumbnails may crop the image."
    },
    {
      "src": "assets/gallery/supertrees-3.jpg",
      "alt": "Singapore’s Marina Bay at sunset, with Marina Bay Sands and the Singapore Flyer observation wheel.",
      "altEs": "La bahía Marina de Singapur al atardecer, con Marina Bay Sands y la rueda de observación Singapore Flyer.",
      "credit": "Chensiyuan.",
      "source": "https://commons.wikimedia.org/wiki/File:Singapore_skyline_at_sunset_viewed_from_Gardens_by_the_Bay_East_-_20120426.jpg",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "width": 700,
      "height": 404,
      "title": "Singapore skyline at sunset viewed from Gardens by the Bay East - 20120426.jpg",
      "changes": "Resized and compressed; thumbnails may crop the image."
    }
  ],
  "sagrada-familia": [
    {
      "src": "assets/gallery/sagrada-familia-2.jpg",
      "alt": "Colorful light shines through stained-glass windows inside the Sagrada Família.",
      "altEs": "La luz de colores pasa por los vitrales dentro de la Sagrada Família.",
      "credit": "Yeonu0407",
      "source": "https://commons.wikimedia.org/wiki/File:Sagrada_Familia_yeonu.jpg",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "width": 394,
      "height": 700,
      "title": "Sagrada Familia yeonu.jpg",
      "changes": "Resized and compressed; thumbnails may crop the image."
    },
    {
      "src": "assets/gallery/sagrada-familia-3.jpg",
      "alt": "Curvy rooftops at Park Güell, with the city of Barcelona stretching beyond.",
      "altEs": "Los techos curvos del Park Güell, con la ciudad de Barcelona al fondo.",
      "credit": "Mstyslav Chernov",
      "source": "https://commons.wikimedia.org/wiki/File:Panoramic_view_of_the_entrance_to_the_Park_G%C3%BCell._Barcelona,_Catalonia,_Spain.jpg",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
      "width": 700,
      "height": 350,
      "title": "Panoramic view of the entrance to the Park Güell. Barcelona, Catalonia, Spain.jpg",
      "changes": "Resized and compressed; thumbnails may crop the image."
    }
  ]
};
