/* Max Learning Lab — Discovery Edition 4, English / Español. */

/* ===== i18n.js ===== */
/* Max's Lab bilingual runtime. Spanish lessons are bundled below. */
(function(){
  let language='en';try{if(localStorage.getItem('max-learning-lab-language')==='es')language='es';}catch{}
  const words={
    'Learning Lab':'Laboratorio de aprendizaje',
    'Progress can’t be saved in this browser.':'Este navegador no puede guardar tu progreso.',
    '← Explore the lab':'← Explora el laboratorio','⌂ Home':'⌂ Inicio','Activity navigation':'Navegación de actividades',
    '◖ Listen':'◖ Escuchar','■ Stop reading':'■ Dejar de leer','Read-aloud is not available in this browser.':'Este navegador no puede leer en voz alta.',
    'FAMILY & FAVORITES':'FAMILIA Y FAVORITOS','Surprise me!':'¡Sorpréndeme!','✦ Surprise me':'✦ Sorpréndeme',
    'Ice caves? Dragons? A giant salt mirror? Let’s find out.':'¿Cuevas de hielo? ¿Dragones? ¿Un espejo gigante de sal? ¡Vamos a descubrirlo!',
    'YOUR CURIOSITY. YOUR ADVENTURE.':'TU CURIOSIDAD. TU AVENTURA.','Big world. ':'Un mundo enorme. ',
    'For the explorer, the ballplayer, and the question-asker in you.':'Para el explorador, el beisbolista y el curioso que llevas dentro.',
    'Explore the map ↗':'Explora el mapa ↗','PLACES TO GO':'LUGARES POR DESCUBRIR','A PLACE IN YOUR STORY':'UN LUGAR EN TU HISTORIA',
    'Remember Exuma?':'¿Recuerdas Exuma?','Blue water, fishing days, and the lemon shark you caught.':'Agua azul, días de pesca y el tiburón limón que atrapaste.',
    'Choose your adventure':'Elige tu aventura','Explore. Play. Make.':'Explora. Juega. Crea.',
    'Places & people':'Lugares y personas','YOUR WORLD':'TU MUNDO','Family stories. Faraway discoveries.':'Historias de familia. Lugares por descubrir.',
    'Home Run Hero':'Héroe del jonrón','PLAY BALL':'¡A JUGAR!','Big swing. Great timing.':'Un gran batazo en el momento justo.',
    'Ocean detective':'Detective del océano','DIVE DEEP':'AL AGUA','Meet the ocean’s amazing animals.':'Conoce a los increíbles animales del océano.',
    'Big ideas':'Grandes ideas','CURIOUS MINDS':'MENTES CURIOSAS','Meet people who asked big questions.':'Conoce a personas que hicieron grandes preguntas.',
    'Block lab':'Laboratorio de bloques','PUZZLE POWER':'PIENSA Y JUEGA','Turn it. Fit it. Clear a row.':'Gira. Encaja. Completa una fila.',
    'Pattern studio':'Taller de patrones','MAKE SOMETHING':'A CREAR','Build a picture, one square at a time.':'Crea un dibujo, un cuadrito a la vez.',
    'Your passport is ready.':'Tu pasaporte está listo.','Every place you open becomes part of your story.':'Cada lugar que descubres forma parte de tu historia.',
    'My passport →':'Mi pasaporte →','PLACES & PEOPLE':'LUGARES Y PERSONAS','Where shall we go?':'¿Adónde vamos?',
    'Start with a family place, or take a leap into somewhere new.':'Elige un lugar de tu familia o descubre uno nuevo.',
    'Open world map ↗':'Abre el mapa del mundo ↗','Where these facts come from':'De dónde viene esta información',
    'YOUR TURN':'TU TURNO','Try another idea. Look at the clues above.':'Prueba otra idea. Mira las pistas de arriba.',
    '← Back to the map':'← Volver al mapa','← My passport':'← Mi pasaporte','← All places':'← Todos los lugares',
    'Find it on the world map ↗':'Encuéntralo en el mapa ↗','Your family trail':'El recorrido de tu familia','See the family pins ↗':'Ver los lugares de tu familia ↗',
    '✓ Passport stamped':'✓ Pasaporte sellado','✦ Stamp my passport':'✦ Sella mi pasaporte','Already stamped. You can always come back!':'¡Ya tienes este sello! Puedes volver cuando quieras.',
    'Try fitting falling shapes into complete rows.':'Encaja las figuras que caen para completar filas.','Play Block Lab →':'Juega con bloques →',
    'Explore more places':'Explora más lugares','✦ Another surprise':'✦ Otra sorpresa','THE WORLD IS YOUR CLASSROOM':'EL MUNDO ES TU SALÓN DE CLASES',
    'Point. Tap. Explore.':'Señala. Toca. Explora.','Tap a pin to meet a place. Zoom in to separate nearby destinations.':'Toca un punto para conocer un lugar. Acerca el mapa para ver los lugares cercanos.',
    'The map could not load. You can still explore every place below.':'El mapa no pudo cargarse. Aún puedes explorar los lugares.',
    'YOUR EXPLORER PASSPORT':'TU PASAPORTE DE EXPLORADOR','Look where you’ve been.':'Mira lo que has descubierto.',
    'Every adventure starts somewhere.':'Toda aventura tiene un comienzo.',
    'Open a place to start your passport. Come back here whenever you want to visit it again.':'Abre un lugar para empezar tu pasaporte. Vuelve aquí cuando quieras visitarlo otra vez.',
    'Find my first surprise':'Descubre mi primera sorpresa','BIG IDEAS START SMALL':'LAS GRANDES IDEAS EMPIEZAN POCO A POCO',
    'Meet a curious mind.':'Conoce una mente curiosa.','Scientists, explorers, and artists all started by asking questions. Just like you.':'Los científicos, exploradores y artistas empezaron haciendo preguntas. ¡Igual que tú!',
    '← All curious minds':'← Todas las mentes curiosas','TRY IT YOURSELF':'INTÉNTALO TÚ','Open Pattern Studio →':'Abre el taller de patrones →','Meet ocean animals →':'Conoce animales del océano →',
    'This activity did not load. Go Home and try again.':'Esta actividad no pudo cargarse. Vuelve al inicio e inténtalo otra vez.',
    'Your explorer passport is back.':'Tu pasaporte de explorador está de vuelta.','That file is not a Learning Lab progress backup.':'Ese archivo no es una copia del progreso del laboratorio.',
    'Photo credits & research':'Créditos de fotos y fuentes','← Back to the lab':'← Volver al laboratorio','Original photograph':'Fotografía original','Fact sources':'Fuentes de información',
    'World map':'Mapa del mundo','Games':'Juegos','Photo':'Foto'
  };
  window.MLL_I18N={
    get lang(){return language;},
    pick(en,es){return language==='es'?es:en;},
    t(text){return language==='es'&&typeof text==='string'?(words[text]??text):text;},
    set(lang){language=lang==='es'?'es':'en';try{localStorage.setItem('max-learning-lab-language',language);}catch{}},
    staticDOM(){
      document.documentElement.lang=language;
      document.querySelectorAll('[data-en][data-es]').forEach(n=>{n.textContent=n.dataset[language];});
      document.querySelectorAll('[data-aria-en]').forEach(n=>n.setAttribute('aria-label',n.dataset[language==='es'?'ariaEs':'ariaEn']));
      document.querySelectorAll('[data-language]').forEach(n=>n.setAttribute('aria-pressed',String(n.dataset.language===language)));
    }
  };
})();

;

/* ===== es-family-people.js ===== */
/* Spanish translations for Max Learning Lab. IDs and source links match the English data. */
window.MLL_ES_FAMILY = [
  {
    "id": "guayaquil",
    "name": "Guayaquil",
    "country": "Ecuador",
    "category": "Familia",
    "lat": -2.1894,
    "lon": -79.8891,
    "hook": "¡La ciudad de Mamá tiene un parque lleno de iguanas!",
    "facts": [
      "Las iguanas trepan a los árboles y pasean por el Parque Seminario, en plena ciudad.",
      "Guayaquil está junto al río Guayas. El paseo a la orilla del río se llama Malecón.",
      "Hay 444 escalones para subir al faro del cerro Santa Ana. ¡Son MUCHÍSIMOS escalones!"
    ],
    "familyNote": "¡Mamá es de Guayaquil! Tus abuelitos, tíos, tías y primos viven allí. Pregúntale a Mamá cuál era su lugar favorito de niña y qué restaurante o comida le gusta más cuando vuelve a casa.",
    "stretch": {
      "question": "¿Por qué crees que la gente construiría una ciudad junto a un río?",
      "answer": "Los barcos pueden traer personas, comida y otras cosas que hacen falta. Un río puede conectar una ciudad con el mar."
    },
    "quiz": {
      "question": "¿Qué animal pasea por el Parque Seminario de Guayaquil?",
      "options": [
        "Pingüinos",
        "Iguanas",
        "Canguros"
      ],
      "answer": 1,
      "explain": "¡Iguanas! Al Parque Seminario también se lo conoce como el Parque de las Iguanas."
    },
    "photoQuery": "Guayaquil Malecon 2000 river waterfront Ecuador",
    "wikiTitle": "Malecón 2000",
    "photoAlt": "El Malecón a orillas del río en Guayaquil, Ecuador",
    "sources": [
      {
        "title": "Municipio de Guayaquil: Parque Seminario",
        "url": "https://guayaquil.gob.ec/parque-seminario-reune-historia-naturaleza-tradicion-guayaquilena/"
      },
      {
        "title": "Turismo de Ecuador: costa del Pacífico",
        "url": "https://ecuador.travel/en/pacific-coast/"
      },
      {
        "title": "Municipio de Guayaquil: Santa Ana y sus 444 escalones",
        "url": "https://guayaquil.gob.ec/santa-ana-360-atrae-visitantes-iconicas-galerias-arte-guayaquil/"
      }
    ]
  },
  {
    "id": "kirkland",
    "name": "Kirkland y otros lugares de la familia",
    "country": "Washington, Estados Unidos",
    "category": "Familia",
    "lat": 47.6815,
    "lon": -122.2087,
    "hook": "Sigue a la familia de Papá por tres estados.",
    "facts": [
      "Kirkland está junto al lago Washington. Este lago tiene agua dulce, a diferencia del océano, que tiene agua salada.",
      "La bahía de Juanita tiene pasarelas de madera desde donde puedes buscar aves, tortugas y otros animales de los humedales.",
      "Washington es un estado del noroeste de Estados Unidos. ¡Washington, D. C., la capital del país, es otro lugar!"
    ],
    "familyNote": "Papá es de Kirkland, donde viven Nana y tu tío. Tu tía y tu otro tío viven en Boise, Idaho. Grampa pasa parte del tiempo en Manson, Washington, y parte en La Quinta, California.",
    "familyStops": [
      {
        "name": "Boise",
        "state": "Idaho",
        "lat": 43.615,
        "lon": -116.2023,
        "connection": "Tu tía y tu tío viven aquí."
      },
      {
        "name": "Manson",
        "state": "Washington",
        "lat": 47.8849,
        "lon": -120.1584,
        "connection": "Uno de los dos lugares donde vive Grampa."
      },
      {
        "name": "La Quinta",
        "state": "California",
        "lat": 33.6634,
        "lon": -116.31,
        "connection": "Grampa también pasa tiempo aquí."
      }
    ],
    "stretch": {
      "question": "¿Puedes agrupar estos lugares de la familia en tres estados?",
      "answer": "Kirkland y Manson están en Washington. Boise está en Idaho. La Quinta está en California."
    },
    "quiz": {
      "question": "¿Cuál de estos lugares de la familia está en Idaho?",
      "options": [
        "Boise",
        "Kirkland",
        "La Quinta"
      ],
      "answer": 0,
      "explain": "Boise está en Idaho. Kirkland está en Washington y La Quinta está en California."
    },
    "photoQuery": "Kirkland Washington Marina Park Lake Washington waterfront",
    "wikiTitle": "Kirkland, Washington",
    "photoAlt": "Kirkland a orillas del lago Washington",
    "sources": [
      {
        "title": "Ciudad de Kirkland: parque de la playa de Juanita",
        "url": "https://www.kirklandwa.gov/Government/Departments/Parks-and-Community-Services/Find-a-Park/Juanita-Beach-Park"
      },
      {
        "title": "Ciudad de Kirkland: parque de la bahía de Juanita",
        "url": "https://www.kirklandwa.gov/Government/Departments/Parks-and-Community-Services/Find-a-Park/Juanita-Bay-Park"
      },
      {
        "title": "Eastside Audubon: animales de los parques de Kirkland",
        "url": "https://www.eastsideaudubon.org/eastside-audubon-kirkland-rangers"
      }
    ]
  },
  {
    "id": "exuma",
    "name": "Exuma",
    "country": "Las Bahamas",
    "category": "Familia",
    "lat": 23.6193,
    "lon": -75.9695,
    "hook": "¡Aquí viviste tu aventura con un tiburón limón!",
    "facts": [
      "Las Exumas forman una cadena de cientos de islas e islitas llamadas cayos. En inglés se llaman «cays» y se pronuncia «kiis».",
      "Los tiburones limón se llaman así por su color entre amarillo y café. Ese color los ayuda a confundirse con el fondo arenoso del mar.",
      "En Big Major Cay, los chanchitos nadan en el mar. ¡En Exuma de verdad hay chanchitos nadadores!"
    ],
    "familyNote": "Fuiste a Exuma de vacaciones con tu familia, saliste a pescar y ¡atrapaste un tiburón limón! ¿Qué recuerdas de ese momento?",
    "stretch": {
      "question": "¿Por qué el agua poco profunda puede ayudar a un tiburón bebé?",
      "answer": "Los tiburones limón pequeños pueden crecer en zonas protegidas y poco profundas. Estos lugares de crianza les ofrecen comida y algo de protección contra animales más grandes que podrían comérselos."
    },
    "quiz": {
      "question": "¿Por qué el tiburón limón se llama así?",
      "options": [
        "Porque come limones",
        "Por su color entre amarillo y café",
        "Porque vive en limoneros"
      ],
      "answer": 1,
      "explain": "Su color entre amarillo y café le dio su nombre. ¡Los tiburones limón comen animales marinos, no limones!"
    },
    "photoQuery": "Exuma Bahamas aerial islands turquoise sea",
    "wikiTitle": "Exuma",
    "photoAlt": "La playa de Emerald Bay y el agua turquesa en Gran Exuma, Las Bahamas",
    "sources": [
      {
        "title": "Turismo de Bahamas: de isla en isla por las Exumas",
        "url": "https://www.bahamas.com/experiences/island-hopping-in-the-exumas"
      },
      {
        "title": "Museo de Florida: tiburón limón",
        "url": "https://www.floridamuseum.ufl.edu/discover-fish/species-profiles/lemon-shark/"
      },
      {
        "title": "Turismo de Bahamas: hogar de los chanchitos nadadores",
        "url": "https://www.bahamas.com/experiences/official-home-swimming-pigs"
      },
      {
        "title": "Comisión de Pesca y Vida Silvestre de Florida: zonas de crianza del tiburón limón",
        "url": "https://myfwc.com/research/saltwater/sharks-rays/shark-species/lemon/"
      }
    ]
  },
  {
    "id": "hawaii",
    "name": "Hawái",
    "country": "Estados Unidos",
    "category": "Islas",
    "lat": 20.7,
    "lon": -157,
    "hook": "Islas creadas por volcanes, con tortugas y arena negra.",
    "facts": [
      "Hawái es el estado número 50 de Estados Unidos. Como Exuma, tiene islas tropicales, pero está en el océano Pacífico.",
      "Los volcanes formaron las islas de Hawái desde el fondo del océano. La lava se enfrió y se convirtió en roca, y las islas fueron creciendo poco a poco.",
      "Algunas playas tienen arena negra hecha de roca volcánica. Las tortugas marinas verdes pueden descansar en la orilla."
    ],
    "familyNote": "Todavía no has visitado Hawái. ¿Te gustaría buscar una tortuga marina, explorar un volcán o conocer una playa de arena negra?",
    "stretch": {
      "question": "¿Cómo puede un volcán formar una isla?",
      "answer": "La lava sale, se enfría y se convierte en roca. Después de muchas erupciones, se acumula tanta roca que llega a sobresalir del océano."
    },
    "quiz": {
      "question": "¿Qué formó las islas de Hawái?",
      "options": [
        "Castillos de arena gigantes",
        "Icebergs",
        "Volcanes"
      ],
      "answer": 2,
      "explain": "¡Los volcanes! Capa tras capa de lava enfriada formó islas sobre el mar."
    },
    "photoQuery": "Na Pali Coast Hawaii green cliffs ocean",
    "wikiTitle": "Nā Pali Coast State Park",
    "photoAlt": "Acantilados costeros verdes sobre el océano Pacífico en Kauaʻi, Hawái",
    "sources": [
      {
        "title": "Senado de Estados Unidos: Hawái se convierte en estado",
        "url": "https://www.senate.gov/states/HI/timeline.shtml"
      },
      {
        "title": "Servicio de Parques Nacionales: geología y volcanes de Hawái",
        "url": "https://www.nps.gov/locations/hawaii/geology.htm"
      },
      {
        "title": "Turismo de Hawái: playas de la isla de Hawái",
        "url": "https://www.gohawaii.com/islands/hawaii-big-island/things-to-do/beaches"
      }
    ]
  },
  {
    "id": "antarctica",
    "name": "Antártida",
    "country": "El continente más al sur",
    "category": "Naturaleza salvaje",
    "lat": -77.53,
    "lon": 167.17,
    "hook": "¡Lagos secretos, cuevas de hielo con vapor y peces extraños!",
    "facts": [
      "La Antártida esconde lagos de agua líquida bajo su gruesa capa de hielo. El calor del interior de la Tierra ayuda a que el agua no se congele.",
      "El monte Erebus es un volcán de la Antártida. ¡Su calor y su vapor forman cuevas dentro del hielo!",
      "¡Algunos peces de la Antártida tienen sangre casi transparente! Los peces de hielo no tienen la sustancia roja que da color a nuestra sangre."
    ],
    "stretch": {
      "question": "¿Cómo puede haber un volcán caliente en un continente frío?",
      "answer": "El aire frío enfría la superficie, pero en lo profundo de la Tierra hace calor. La roca derretida puede subir por un volcán, incluso en la Antártida."
    },
    "quiz": {
      "question": "¿Qué cosa sorprendente puede esconderse bajo el hielo de la Antártida?",
      "options": [
        "Lagos de agua líquida",
        "Una selva tropical",
        "Un centro comercial lleno de gente"
      ],
      "answer": 0,
      "explain": "¡Lagos de agua líquida! Puede haber agua escondida bajo el hielo de la Antártida, aunque el aire de arriba esté helado."
    },
    "photoQuery": "Mount Erebus Antarctica snowy volcano",
    "wikiTitle": "Mount Erebus",
    "photoAlt": "El monte Erebus, un volcán activo rodeado de nieve y hielo de la Antártida",
    "sources": [
      {
        "title": "Servicio Británico de Investigación Antártica: los lagos ocultos de la Antártida",
        "url": "https://legacy.bas.ac.uk/bas_research/science_briefings/antarcticas_hidden_lakes.php"
      },
      {
        "title": "Programa Antártico Australiano: cuevas de hielo volcánicas",
        "url": "https://www.antarctica.gov.au/news/2014/volcanoes-provided-ice-age-refuge-for-antarctic-biodiversity/"
      },
      {
        "title": "NSF GAGE: mapas de las cuevas de hielo del monte Erebus",
        "url": "https://www.unavco.org/news/seals-a-lava-lake-and-subglacial-microbes-2013-2014-antarctic-tls-highlights-part-1/"
      },
      {
        "title": "Programa Antártico Australiano: peces antárticos",
        "url": "https://www.antarctica.gov.au/about-antarctica/animals/fish/"
      }
    ]
  }
];

window.MLL_ES_PEOPLE = [
  {
    "id": "einstein",
    "name": "Albert Einstein",
    "role": "Físico",
    "country": "Nació en Alemania",
    "hook": "Una brújula despertó preguntas que lo acompañaron toda la vida.",
    "facts": [
      "Cuando Albert era pequeño, una brújula lo asombró. ¿Qué cosa invisible hacía que se moviera la aguja?",
      "Se convirtió en físico, un científico que estudia la materia y la energía. Sus ideas sobre la luz lo ayudaron a ganar un Premio Nobel.",
      "Albert también tocaba el violín. ¡A los científicos les puede encantar la música, el arte y muchas otras cosas!"
    ],
    "stretch": {
      "question": "¿Puedes estudiar algo que no puedes ver?",
      "answer": "¡Sí! Puedes observar lo que hace. No puedes ver la fuerza magnética, pero sí puedes ver cómo mueve la aguja de una brújula."
    },
    "quiz": {
      "question": "¿Qué objeto asombró a Albert cuando era niño?",
      "options": [
        "Una brújula",
        "Una tableta",
        "Una patineta"
      ],
      "answer": 0,
      "explain": "¡Una brújula! Su aguja en movimiento le hizo preguntarse por las fuerzas invisibles."
    },
    "activity": {
      "title": "Haz una pregunta de científico",
      "prompt": "Mira a tu alrededor. Elige una cosa y pregunta: «¿Por qué pasa eso?». Cuéntale a un adulto cuál crees que es la respuesta."
    },
    "photoQuery": "Albert Einstein portrait photograph",
    "wikiTitle": "Albert Einstein",
    "photoAlt": "Un retrato del científico Albert Einstein",
    "sources": [
      {
        "title": "Museo Americano de Historia Natural: Einstein a través del tiempo",
        "url": "https://www.amnh.org/explore/ology/physics/einstein-in-time2"
      },
      {
        "title": "Premio Nobel: datos sobre Albert Einstein",
        "url": "https://www.nobelprize.org/prizes/physics/1921/einstein/facts/"
      },
      {
        "title": "Instituto Americano de Física: Einstein y su violín",
        "url": "https://history.aip.org/exhibits/einstein/quantum3.htm"
      }
    ]
  },
  {
    "id": "katherine-johnson",
    "name": "Katherine Johnson",
    "role": "Matemática de misiones espaciales",
    "country": "Estados Unidos",
    "hook": "Sus números ayudaron a los astronautas a encontrar el camino.",
    "facts": [
      "A Katherine le encantaba contar cuando era niña. ¡Contaba escalones, platos y casi todo lo que podía!",
      "En la NASA, trabajó en equipo y usó las matemáticas para ayudar a planear rutas seguras para las naves espaciales.",
      "Antes de que el astronauta John Glenn diera la vuelta a la Tierra, le pidió a Katherine que revisara las respuestas de la computadora electrónica."
    ],
    "stretch": {
      "question": "¿Por qué revisar una respuesta que encontró una computadora?",
      "answer": "Las computadoras siguen instrucciones escritas por personas. Revisar de otra manera puede ayudar a encontrar errores antes de que causen un problema."
    },
    "quiz": {
      "question": "¿Qué usó Katherine para ayudar en las misiones espaciales?",
      "options": [
        "Una varita mágica",
        "Las matemáticas",
        "Una red de pescar"
      ],
      "answer": 1,
      "explain": "¡Las matemáticas! Sus cálculos ayudaron al equipo de la NASA a planear y revisar las rutas de las naves espaciales."
    },
    "activity": {
      "title": "Cuenta de dos maneras",
      "prompt": "Reúne 12 objetos pequeños. Cuéntalos de uno en uno y luego de dos en dos. ¿Te dio el mismo total de las dos maneras?"
    },
    "photoQuery": "Katherine Johnson NASA portrait",
    "wikiTitle": "Katherine Johnson",
    "photoAlt": "Katherine Johnson, matemática de la NASA",
    "sources": [
      {
        "title": "Ciencia de la NASA: Katherine Johnson",
        "url": "https://science.nasa.gov/people/katherine-johnson/"
      },
      {
        "title": "NASA: la niña a la que le encantaba contar",
        "url": "https://www.nasa.gov/centers-and-facilities/langley/katherine-johnson-the-girl-who-loved-to-count/"
      }
    ]
  },
  {
    "id": "cousteau",
    "name": "Jacques Cousteau",
    "role": "Explorador del océano",
    "country": "Francia",
    "hook": "Ayudó a las personas a explorar el mundo bajo el agua.",
    "facts": [
      "Jacques y su equipo exploraron el océano a bordo de su barco, el Calypso. Filmó la vida marina para que las personas en tierra pudieran ver sus maravillas.",
      "Él y el ingeniero Émile Gagnan desarrollaron el Aqua-Lung, un equipo que permitía a los buzos llevar su propio aire para respirar bajo el agua.",
      "Trabajó para proteger el océano de la contaminación y otros daños. Explorar y cuidar pueden ir de la mano."
    ],
    "stretch": {
      "question": "¿Por qué un buzo lleva aire y un pez no?",
      "answer": "Nuestros pulmones necesitan aire para respirar. Los peces usan las branquias para tomar oxígeno del agua. El tanque del buzo contiene gas para respirar."
    },
    "quiz": {
      "question": "¿Quién ayudó a Cousteau a desarrollar el Aqua-Lung?",
      "options": [
        "Nadie; trabajó solo",
        "Albert Einstein",
        "El ingeniero Émile Gagnan"
      ],
      "answer": 2,
      "explain": "¡Émile Gagnan! El Aqua-Lung fue un invento en equipo que también aprovechó ideas anteriores."
    },
    "activity": {
      "title": "Planea una misión en el océano",
      "prompt": "Elige un animal marino para estudiar. Dibújalo y cuéntale a un adulto una pregunta que te gustaría hacer sobre su vida."
    },
    "photoQuery": "Jacques Cousteau portrait red cap",
    "wikiTitle": "Jacques Cousteau",
    "photoAlt": "Jacques Cousteau, explorador del océano",
    "sources": [
      {
        "title": "Sociedad Cousteau: su legado",
        "url": "https://www.cousteau.org/know/legacy/"
      },
      {
        "title": "Sociedad Cousteau: el Aqua-Lung",
        "url": "https://www.cousteau.org/know/inventions/aqua-lung/"
      }
    ]
  },
  {
    "id": "frida-kahlo",
    "name": "Frida Kahlo",
    "role": "Artista",
    "country": "México",
    "hook": "Pintó historias sobre su propia vida.",
    "facts": [
      "Frida fue una artista de México. En sus pinturas usaba colores, animales y plantas para contar historias sobre su vida y sus sentimientos.",
      "Hizo muchos autorretratos. Un autorretrato es una imagen que un artista hace de sí mismo.",
      "Su hogar se llamaba Casa Azul. Hoy es un museo donde las personas aprenden sobre ella."
    ],
    "stretch": {
      "question": "¿Puede una imagen contar una historia sin palabras?",
      "answer": "¡Sí! Los colores, las caras, los lugares y los objetos pueden darnos pistas sobre los sentimientos de una persona y las cosas que le importan."
    },
    "quiz": {
      "question": "¿Qué es un autorretrato?",
      "options": [
        "Una imagen que haces de ti mismo",
        "Una pintura solo de nubes",
        "Un mapa del mundo entero"
      ],
      "answer": 0,
      "explain": "¡Una imagen que haces de ti mismo! Puedes agregar cosas que ayuden a contar tu propia historia."
    },
    "activity": {
      "title": "Haz un retrato de Max",
      "prompt": "Dibújate con tres cosas que te encanten. ¿Una pelota de béisbol? ¿Un tiburón? ¿Un lugar de tu familia? Cuéntale a alguien por qué las elegiste."
    },
    "photoQuery": "Frida Kahlo portrait photograph Guillermo Kahlo",
    "wikiTitle": "Frida Kahlo",
    "photoAlt": "Una fotografía de retrato de la artista Frida Kahlo",
    "sources": [
      {
        "title": "Museo Frida Kahlo: Frida",
        "url": "https://www.museofridakahlo.org.mx/frida/?lang=en"
      },
      {
        "title": "Museo Frida Kahlo: la Casa Azul",
        "url": "https://www.museofridakahlo.org.mx/museo/?lang=en"
      }
    ]
  }
];

window.MLL_ES_PHOTO_ALT = {
  "guayaquil": "El Malecón a orillas del río en Guayaquil, Ecuador",
  "kirkland": "Kirkland a orillas del lago Washington",
  "exuma": "La playa de Emerald Bay y el agua turquesa en Gran Exuma, Las Bahamas",
  "hawaii": "Acantilados costeros verdes sobre el océano Pacífico en Kauaʻi, Hawái",
  "antarctica": "El monte Erebus, un volcán activo rodeado de nieve y hielo de la Antártida",
  "strokkur": "Un chorro de agua muy alto sale del géiser Strokkur.",
  "tromso": "Tromsø, una ciudad noruega rodeada de montañas y aguas del Ártico.",
  "giants-causeway": "Columnas de basalto que encajan unas con otras junto al mar en la Calzada del Gigante.",
  "mont-saint-michel": "La abadía y el pueblo de Mont-Saint-Michel se elevan sobre la bahía.",
  "pompeii": "Calles y edificios antiguos de piedra en Pompeya.",
  "sagrada-familia": "Las torres y los detalles de piedra de la Sagrada Familia de Barcelona.",
  "meteora": "Un monasterio de Meteora en lo alto de una columna de arenisca.",
  "cappadocia": "Formaciones rocosas puntiagudas y entradas de cuevas en Capadocia.",
  "suomenlinna": "Fortificaciones de piedra e islas de Suomenlinna en el mar Báltico.",
  "moscow": "La catedral de San Basilio en Moscú, con cúpulas de colores y dibujos.",
  "neuschwanstein": "Las torres claras del castillo de Neuschwanstein sobre colinas cubiertas de árboles.",
  "kinderdijk": "Molinos de viento junto a un canal en Kinderdijk, Países Bajos",
  "plitvice": "Lagos turquesas y cascadas entre el bosque verde de Plitvice.",
  "giza": "La Gran Pirámide de Guiza se eleva sobre la meseta arenosa.",
  "ait-benhaddou": "Torres y murallas de color tierra en una ladera de Aït Benhaddou.",
  "petra": "El inmenso Monasterio tallado en arenisca en Petra, Jordania",
  "amboseli": "Elefantes al pie del monte Kilimanjaro en el Parque Nacional de Amboseli, Kenia",
  "serengeti": "Ñus en las llanuras del oeste del Serengeti, Tanzania",
  "deadvlei": "Troncos oscuros en una llanura de arcilla blanca, al pie de dunas anaranjadas en Deadvlei.",
  "tsingy": "Un laberinto de picos afilados de piedra caliza en Tsingy de Bemaraha.",
  "boulders": "Pingüinos africanos en la orilla arenosa, entre grandes rocas en Boulders.",
  "lalibela": "La iglesia de San Jorge, con forma de cruz, tallada en la roca en Lalibela.",
  "rwanda-volcanoes": "Un gorila de montaña en los bosques del Parque Nacional de los Volcanes, Ruanda",
  "djoudj": "Un cormorán junto a una colonia de pelícanos en Djoudj, Senegal",
  "okavango": "Canales de agua que serpentean entre islas verdes en el delta del Okavango.",
  "jigokudani": "Monos de las nieves bañándose en aguas termales en el parque de monos de Jigokudani, Japón",
  "wulingyuan": "Altas columnas de arenisca y vegetación verde en Wulingyuan, China",
  "jantar-mantar": "Grandes instrumentos de piedra para estudiar los astros en Jantar Mantar, en Jaipur, India",
  "sagarmatha": "La cima nevada del monte Everest en el Himalaya",
  "tigers-nest": "El monasterio Nido del Tigre, construido en la pared de un acantilado en Bután",
  "komodo": "Un dragón de Komodo en el Parque Nacional de Komodo, Indonesia",
  "phong-nha": "Un río que entra en la cueva Phong Nha, en Vietnam",
  "supertrees": "Estructuras de superárboles en los jardines Gardens by the Bay de Singapur",
  "flaming-cliffs": "Los rojos Acantilados Llameantes en el desierto de Gobi, Mongolia",
  "great-barrier-reef": "Vista aérea del arrecife Arlington en la Gran Barrera de Coral de Australia",
  "waitomo": "Gusanitos luminosos iluminan el techo oscuro de la cueva de Waitomo, en Nueva Zelanda",
  "sigatoka": "Dunas de arena junto a la costa en Sigatoka, Fiyi",
  "jellyfish-lake": "Medusas doradas flotan en el Lago de las Medusas, Palaos",
  "bay-of-fundy": "Formaciones rocosas al descubierto durante la marea baja junto a la bahía de Fundy, Canadá",
  "chichen-itza": "El Castillo, la pirámide escalonada de Chichén Itzá, México",
  "monteverde": "Árboles verdes y neblina en el bosque nuboso de Monteverde, Costa Rica",
  "panama-canal": "Un barco pasa por las esclusas de Miraflores del canal de Panamá",
  "lencois": "Lagunas llenas de agua de lluvia entre dunas de arena clara en Lençóis Maranhenses, Brasil",
  "machu-picchu": "Edificios y terrazas de piedra en la cresta de la montaña de Machu Picchu, Perú",
  "atacama": "Antenas del telescopio ALMA bajo el cielo nocturno del desierto de Atacama, Chile",
  "perito-moreno": "El frente de hielo del glaciar Perito Moreno junto al lago Argentino, Argentina",
  "uyuni": "Montañas y cielo reflejados en el agua poco profunda del salar de Uyuni, Bolivia",
  "blue-hole": "Vista aérea del Gran Agujero Azul, de forma circular, frente a la costa de Belice",
  "tikal": "Antiguos templos mayas de piedra y bosque en Tikal, Guatemala",
  "yellowstone": "La colorida Gran Fuente Prismática en el Parque Nacional de Yellowstone",
  "einstein": "Un retrato del científico Albert Einstein",
  "katherine-johnson": "Katherine Johnson, matemática de la NASA",
  "cousteau": "Jacques Cousteau, explorador del océano",
  "frida-kahlo": "Una fotografía de retrato de la artista Frida Kahlo"
};

;

/* ===== es-places-a.js ===== */
window.MLL_ES_A = [
  {
    "id": "strokkur",
    "name": "Strokkur",
    "country": "Islandia",
    "category": "Naturaleza",
    "lat": 64.3104,
    "lon": -20.3024,
    "hook": "¡Una fuente que funciona con el calor de la Tierra!",
    "facts": [
      "Este géiser lanza agua caliente y vapor al aire cada pocos minutos.",
      "El calor del interior de la Tierra calienta el agua bajo el suelo hasta que sale disparada hacia arriba.",
      "El cercano Geysir dio su nombre a los géiseres de todo el mundo."
    ],
    "stretch": {
      "question": "¿En qué se diferencian un géiser y una fuente de jardín?",
      "answer": "Una fuente de jardín usa una bomba. Un géiser usa el calor bajo el suelo y la presión del vapor."
    },
    "quiz": {
      "question": "¿Qué hace funcionar esta fuente natural?",
      "options": [
        "Una manguera de jardín escondida",
        "El calor del interior de la Tierra",
        "La Luna, que tira del agua hacia arriba"
      ],
      "answer": 1,
      "explain": "La Tierra calienta el agua bajo el suelo. El vapor ayuda a empujar el agua hacia arriba."
    },
    "photoQuery": "Strokkur landscape Wikimedia Commons",
    "wikiTitle": "Strokkur",
    "photoAlt": "Una gran columna de agua sale del géiser Strokkur.",
    "sources": [
      {
        "title": "Visit Iceland: lugares geológicos del sur de Islandia",
        "url": "https://www.visiticeland.com/article/south-icelands-dynamic-geosites-geysers-glaciers/"
      },
      {
        "title": "Visit Iceland: Círculo Dorado",
        "url": "https://www.visiticeland.com/article/the-golden-circle/"
      }
    ]
  },
  {
    "id": "tromso",
    "name": "Tromsø",
    "country": "Noruega",
    "category": "Naturaleza",
    "lat": 69.6492,
    "lon": 18.9553,
    "hook": "¿Y si llegara la hora de dormir antes de que se esconda el Sol?",
    "facts": [
      "Durante una parte del verano, el Sol sigue sobre el horizonte incluso a medianoche.",
      "Durante una parte del invierno, el Sol no sale, pero su luz todavía puede iluminar un poco el cielo.",
      "En noches oscuras y despejadas, a veces brillan auroras boreales sobre esta ciudad del Ártico."
    ],
    "stretch": {
      "question": "Si hubiera luz del Sol a medianoche, ¿ya no necesitarías dormir?",
      "answer": "¡Igual necesitarías dormir! Las cortinas oscuras ayudan a las personas a descansar cuando el cielo sigue claro."
    },
    "quiz": {
      "question": "¿En qué estación puede haber luz del Sol a medianoche en Tromsø?",
      "options": [
        "En verano",
        "Todas las noches del año",
        "Solo en invierno"
      ],
      "answer": 0,
      "explain": "En verano llega el sol de medianoche. En invierno, el cielo es muy diferente."
    },
    "photoQuery": "Tromsø landscape Wikimedia Commons",
    "wikiTitle": "Tromsø",
    "photoAlt": "Tromsø, una ciudad de Noruega rodeada de montañas árticas y agua.",
    "sources": [
      {
        "title": "Visit Tromsø: estaciones del año",
        "url": "https://www.visittromso.no/seasons"
      },
      {
        "title": "Visit Tromsø: invierno",
        "url": "https://www.visittromso.no/winter"
      },
      {
        "title": "Visit Tromsø: auroras boreales",
        "url": "https://www.visittromso.no/look-out-for-northern-lights"
      }
    ]
  },
  {
    "id": "giants-causeway",
    "name": "Calzada del Gigante",
    "country": "Reino Unido",
    "category": "Naturaleza",
    "lat": 55.2408,
    "lon": -6.5116,
    "hook": "La naturaleza hizo un rompecabezas gigante de piedra.",
    "facts": [
      "Unas 40.000 columnas de roca se agrupan en esta costa de Irlanda del Norte.",
      "Muchas columnas tienen seis lados en la parte de arriba, como una figura llamada hexágono.",
      "Se formaron cuando una lava muy antigua se enfrió, se encogió y se agrietó."
    ],
    "stretch": {
      "question": "Una leyenda dice que un gigante construyó estas piedras. ¿Cómo podría un científico poner a prueba otra explicación?",
      "answer": "Puede estudiar la roca y compararla con lava que se enfría hoy. Las pruebas nos ayudan a comprobar las explicaciones."
    },
    "quiz": {
      "question": "¿Qué formó estas columnas de piedra?",
      "options": [
        "Bloques de juguete gigantes",
        "Olas del mar congeladas",
        "Lava que se enfrió"
      ],
      "answer": 2,
      "explain": "La lava se enfrió y se agrietó hasta formar columnas. El gigante es parte de una leyenda."
    },
    "photoQuery": "Giant's Causeway landscape Wikimedia Commons",
    "wikiTitle": "Giant's Causeway",
    "photoAlt": "Columnas de basalto que encajan unas con otras junto al mar en la Calzada del Gigante.",
    "sources": [
      {
        "title": "National Trust: historia de la Calzada del Gigante",
        "url": "https://www.nationaltrust.org.uk/visit/northern-ireland/giants-causeway/history-of-giants-causeway"
      },
      {
        "title": "Servicio Geológico Británico: Calzada del Gigante",
        "url": "https://www.bgs.ac.uk/discovering-geology/maps-and-resources/office-geology/the-giants-causeway-and-causeway-coast/"
      }
    ]
  },
  {
    "id": "mont-saint-michel",
    "name": "Mont-Saint-Michel",
    "country": "Francia",
    "category": "Historia",
    "lat": 48.636,
    "lon": -1.5115,
    "hook": "Una isla que cambia con las mareas.",
    "facts": [
      "Una abadía alta y un pueblo pequeñito están sobre una isla rocosa.",
      "Cuando baja la marea, el mar se retira mucho y deja a la vista una bahía ancha de arena.",
      "Los constructores pusieron la iglesia de la abadía sobre salas de piedra muy fuertes que la sostienen."
    ],
    "stretch": {
      "question": "¿Por qué un edificio alto necesita una base fuerte?",
      "answer": "La base debe sostener todo el peso que tiene encima. Prueba a apilar bloques sobre una base ancha y luego sobre una angosta."
    },
    "quiz": {
      "question": "¿Qué hace cambiar el nivel del agua alrededor de esta isla?",
      "options": [
        "Las mareas del océano",
        "El tapón de una tina gigante",
        "La isla, que está nadando"
      ],
      "answer": 0,
      "explain": "Las mareas hacen que el mar suba y baje alrededor de la isla rocosa."
    },
    "photoQuery": "Mont-Saint-Michel landscape Wikimedia Commons",
    "wikiTitle": "Mont-Saint-Michel",
    "photoAlt": "La abadía y el pueblo de Mont-Saint-Michel se elevan sobre la bahía.",
    "sources": [
      {
        "title": "Turismo de Mont-Saint-Michel: historia",
        "url": "https://www.ot-montsaintmichel.com/en/discover/visit-the-mont-saint-michel/visit-the-mont-saint-michel/history/"
      },
      {
        "title": "Turismo de Mont-Saint-Michel: mareas altas",
        "url": "https://www.ot-montsaintmichel.com/en/discover/our-essentials/the-high-tides-and-the-tidal-bore-a-great-spectacle-of-nature/"
      }
    ]
  },
  {
    "id": "pompeii",
    "name": "Pompeya",
    "country": "Italia",
    "category": "Historia",
    "lat": 40.7508,
    "lon": 14.4869,
    "hook": "Una ciudad con antiguos puestos de comida.",
    "facts": [
      "El volcán Vesubio sepultó esta ciudad romana bajo cenizas y rocas en el año 79.",
      "Aquí, las personas compraban comida preparada en pequeños locales, un poco como la comida para llevar de hoy.",
      "Las paredes pintadas y los mostradores nos ayudan a imaginar cómo era la vida hace casi 2.000 años."
    ],
    "stretch": {
      "question": "¿Qué podría aprender un arqueólogo de un puesto de comida?",
      "answer": "Los restos de comida, las ollas y las imágenes pueden dar pistas sobre lo que comían las personas y cómo vivían."
    },
    "quiz": {
      "question": "¿Qué podías comprar en un antiguo puesto de comida de Pompeya?",
      "options": [
        "Un cargador de celular",
        "Comida preparada",
        "Un casco de bicicleta"
      ],
      "answer": 1,
      "explain": "En los mostradores se vendían comidas y bebidas preparadas mucho antes de los restaurantes de comida para llevar de hoy."
    },
    "photoQuery": "Pompeii landscape Wikimedia Commons",
    "wikiTitle": "Pompeii",
    "photoAlt": "Calles y edificios antiguos de piedra en Pompeya.",
    "sources": [
      {
        "title": "Parque Arqueológico de Pompeya: Antiquarium",
        "url": "https://pompeiisites.org/en/pompeii-map/antiquarium/"
      },
      {
        "title": "Parque Arqueológico de Pompeya: taberna de Asellina",
        "url": "https://pompeiisites.org/en/exhibitions-and-events/asellina-en/"
      },
      {
        "title": "Parque Arqueológico de Pompeya: termopolio",
        "url": "https://pompeiisites.org/en/gallery-pompei-en/thermopolium-of-regio-v/"
      }
    ]
  },
  {
    "id": "sagrada-familia",
    "name": "Sagrada Familia",
    "country": "España",
    "category": "Ingeniería",
    "lat": 41.4036,
    "lon": 2.1744,
    "hook": "Un edificio que crece como un bosque.",
    "facts": [
      "Dentro de esta iglesia de Barcelona, las columnas altas se ramifican como troncos de árboles.",
      "Las ventanas de vidrios de colores convierten la luz del Sol en manchas de color brillantes.",
      "El arquitecto Antoni Gaudí usó formas de la naturaleza para diseñarla."
    ],
    "stretch": {
      "question": "¿Para qué podrían servir unas columnas con ramas?",
      "answer": "Las ramas reparten el peso del techo. Una forma ingeniosa puede ser hermosa y fuerte al mismo tiempo."
    },
    "quiz": {
      "question": "¿A qué se parecen las columnas con ramas?",
      "options": [
        "A troncos de árboles",
        "A tablas de surf",
        "A bolas de nieve"
      ],
      "answer": 0,
      "explain": "Gaudí diseñó columnas parecidas a árboles que ayudan a sostener el peso del edificio."
    },
    "photoQuery": "Sagrada Família landscape Wikimedia Commons",
    "wikiTitle": "Sagrada Família",
    "photoAlt": "Las torres y los detalles de piedra de la Sagrada Familia de Barcelona.",
    "sources": [
      {
        "title": "Sagrada Familia: geometría de las columnas",
        "url": "https://blog.sagradafamilia.org/en/columns-sagrada-familia-geometry-mechanics-materials-stone-forest/"
      },
      {
        "title": "Sagrada Familia: la luz de los vitrales",
        "url": "https://blog.sagradafamilia.org/en/stained-glass-light-colour-creation/"
      }
    ]
  },
  {
    "id": "meteora",
    "name": "Meteora",
    "country": "Grecia",
    "category": "Historia",
    "lat": 39.7217,
    "lon": 21.6306,
    "hook": "Edificios en lo alto de torres gigantes de roca.",
    "facts": [
      "Hay monasterios en la cima de altos pilares de roca.",
      "Un monasterio es un lugar donde vive y reza una comunidad religiosa.",
      "Algunas de estas torres de roca se elevan más de 1.300 pies sobre el suelo."
    ],
    "stretch": {
      "question": "¿Qué sería difícil al construir sobre una roca tan alta?",
      "answer": "Las personas necesitarían formas de subir herramientas y materiales pesados, y un camino seguro para llegar a la cima."
    },
    "quiz": {
      "question": "¿Dónde están los famosos monasterios de Meteora?",
      "options": [
        "Bajo el mar",
        "Dentro de un iceberg",
        "Sobre altos pilares de roca"
      ],
      "answer": 2,
      "explain": "Los constructores pusieron los monasterios en lo alto de pilares naturales de arenisca."
    },
    "photoQuery": "Meteora landscape Wikimedia Commons",
    "wikiTitle": "Meteora",
    "photoAlt": "Un monasterio de Meteora en lo alto de un pilar de arenisca.",
    "sources": [
      {
        "title": "UNESCO: Meteora",
        "url": "https://whc.unesco.org/en/list/455"
      },
      {
        "title": "UNESCO: Geoparque de Meteora Pyli",
        "url": "https://www.unesco.org/en/iggp/meteora-pyli-unesco-global-geopark"
      }
    ]
  },
  {
    "id": "cappadocia",
    "name": "Capadocia",
    "country": "Turquía",
    "category": "Naturaleza",
    "lat": 38.6431,
    "lon": 34.8307,
    "hook": "¡Torres de roca con habitaciones adentro!",
    "facts": [
      "A estas rocas altas y puntiagudas las llaman chimeneas de hadas.",
      "El viento y el agua desgastaron la roca volcánica hasta dar forma a estas torres.",
      "Las personas excavaron habitaciones, iglesias y hasta pueblos subterráneos en la roca."
    ],
    "stretch": {
      "question": "¿Puede el agua cambiar una roca sin romperla de un golpe?",
      "answer": "Sí. El agua que corre puede desgastar la roca poco a poco. Cambios muy pequeños durante muchísimo tiempo pueden crear formas enormes."
    },
    "quiz": {
      "question": "¿Qué ayudó a dar forma a las chimeneas de hadas?",
      "options": [
        "El viento y el agua",
        "Lápices gigantes",
        "Nubes congeladas"
      ],
      "answer": 0,
      "explain": "El viento y el agua desgastaron lentamente la roca volcánica."
    },
    "photoQuery": "Cappadocia landscape Wikimedia Commons",
    "wikiTitle": "Cappadocia",
    "photoAlt": "Rocas puntiagudas y entradas de cuevas en Capadocia.",
    "sources": [
      {
        "title": "UNESCO: Göreme y Capadocia",
        "url": "https://whc.unesco.org/en/list/357"
      }
    ]
  },
  {
    "id": "suomenlinna",
    "name": "Suomenlinna",
    "country": "Finlandia",
    "category": "Historia",
    "lat": 60.1456,
    "lon": 24.9881,
    "hook": "Una fortaleza en el mar, seis islas protegidas por murallas.",
    "facts": [
      "Esta fortaleza marina, cerca de Helsinki, ocupa seis islas protegidas por murallas.",
      "Las personas comenzaron a construirla en 1748, mucho antes de que existieran los carros.",
      "Sus pasadizos oscuros son túneles hechos por personas, no cuevas naturales."
    ],
    "stretch": {
      "question": "¿Cuál es la diferencia entre un túnel y una cueva?",
      "answer": "Una cueva se forma de manera natural. Las personas excavan un túnel para abrir un camino a través de algo."
    },
    "quiz": {
      "question": "¿Quién hizo los túneles de Suomenlinna: las personas o la naturaleza?",
      "options": [
        "Los peces del océano",
        "Solo la naturaleza",
        "Las personas"
      ],
      "answer": 2,
      "explain": "Las personas construyeron los túneles como parte de la fortaleza."
    },
    "photoQuery": "Suomenlinna landscape Wikimedia Commons",
    "wikiTitle": "Suomenlinna",
    "photoAlt": "Murallas de piedra e islas de Suomenlinna en el mar Báltico.",
    "sources": [
      {
        "title": "UNESCO: fortaleza de Suomenlinna",
        "url": "https://whc.unesco.org/en/list/583"
      },
      {
        "title": "Suomenlinna: preguntas frecuentes",
        "url": "https://suomenlinna.fi/en/faq-frequently-asked-questions/"
      }
    ]
  },
  {
    "id": "moscow",
    "name": "Moscú",
    "country": "Rusia",
    "category": "Ideas",
    "lat": 55.7525,
    "lon": 37.6231,
    "hook": "Una ciudad donde nació un juego de bloques famoso en todo el mundo.",
    "facts": [
      "El programador de computadoras Alexey Pajitnov creó Tetris en Moscú en 1984.",
      "Le encantaban los rompecabezas y convirtió ese interés en un juego que se disfruta en todo el mundo.",
      "La catedral de San Basilio está en la Plaza Roja, junto a las antiguas murallas del Kremlin."
    ],
    "stretch": {
      "question": "¿Puede una pequeña idea convertirse en un juego?",
      "answer": "¡Sí! Escoge una regla sencilla, crea una primera versión, pruébala y cambia lo que todavía no funciona."
    },
    "quiz": {
      "question": "¿Qué juego nació en Moscú?",
      "options": [
        "El béisbol",
        "Tetris",
        "Las escondidas"
      ],
      "answer": 1,
      "explain": "Alexey Pajitnov creó la primera versión de Tetris en Moscú en 1984."
    },
    "photoQuery": "Saint Basil's Cathedral landscape Wikimedia Commons",
    "wikiTitle": "Saint Basil's Cathedral",
    "photoAlt": "La catedral de San Basilio en Moscú, con cúpulas de colores y dibujos.",
    "sources": [
      {
        "title": "Tetris: historia oficial",
        "url": "https://tetris.com/news/the-history-of-tetris"
      },
      {
        "title": "Tetris: biografía de Alexey Pajitnov",
        "url": "https://tetris.com/corporate-bios"
      },
      {
        "title": "UNESCO: Kremlin y Plaza Roja",
        "url": "https://whc.unesco.org/en/list/545/"
      }
    ]
  },
  {
    "id": "neuschwanstein",
    "name": "Castillo de Neuschwanstein",
    "country": "Alemania",
    "category": "Ingeniería",
    "lat": 47.5576,
    "lon": 10.7498,
    "hook": "Un castillo de cuento con tecnología escondida.",
    "facts": [
      "El rey Luis Segundo comenzó a construir este castillo en 1869.",
      "Parece medieval, pero tenía agua por tuberías, calefacción central e inodoros con descarga de agua.",
      "Un elevador especial llevaba la comida a los pisos de arriba, para no tener que subir cada plato por las escaleras."
    ],
    "stretch": {
      "question": "¿Puede un edificio que parece antiguo esconder una idea nueva?",
      "answer": "Sí. El aspecto de un edificio por fuera no te cuenta toda la tecnología que tiene por dentro."
    },
    "quiz": {
      "question": "¿Qué llevaba el elevador especial del castillo a los pisos de arriba?",
      "options": [
        "Comida",
        "Ballenas",
        "Nubes"
      ],
      "answer": 0,
      "explain": "Un elevador de comida ayudaba a llevar los platos de un piso a otro."
    },
    "photoQuery": "Neuschwanstein Castle landscape Wikimedia Commons",
    "wikiTitle": "Neuschwanstein Castle",
    "photoAlt": "Las torres claras del castillo de Neuschwanstein sobre colinas cubiertas de árboles.",
    "sources": [
      {
        "title": "Administración de Palacios de Baviera: historia de la construcción",
        "url": "https://www.neuschwanstein.de/englisch/idea/"
      },
      {
        "title": "Administración de Palacios de Baviera: tecnología moderna",
        "url": "https://www.neuschwanstein.de/englisch/palace/interior.htm"
      }
    ]
  },
  {
    "id": "kinderdijk",
    "name": "Kinderdijk",
    "country": "Países Bajos",
    "category": "Ingeniería",
    "lat": 51.8825,
    "lon": 4.6428,
    "hook": "Molinos de viento que ayudan a mantener los pies secos.",
    "facts": [
      "Aquí hay diecinueve molinos de viento históricos junto a los canales.",
      "Estos molinos se construyeron para sacar el agua de los terrenos bajos.",
      "La zona está por debajo del nivel del mar, así que controlar el agua es una tarea muy importante."
    ],
    "stretch": {
      "question": "¿Por qué no dejan que el agua que sobra baje por sí sola?",
      "answer": "El terreno está tan bajo que el agua necesita ayuda para subir y salir. Las bombas y los molinos pueden elevarla."
    },
    "quiz": {
      "question": "¿Qué trabajo hacían estos molinos de viento?",
      "options": [
        "Fabricar nieve",
        "Secar el pelo de las personas",
        "Bombear agua"
      ],
      "answer": 2,
      "explain": "Los molinos movían el agua para ayudar a proteger los terrenos bajos."
    },
    "photoQuery": "Kinderdijk landscape Wikimedia Commons",
    "wikiTitle": "Kinderdijk",
    "photoAlt": "Molinos tradicionales de Kinderdijk reflejados en un canal.",
    "sources": [
      {
        "title": "Kinderdijk: molinos de viento y estaciones de bombeo",
        "url": "https://kinderdijk.nl/en/windmills-pumping-stations/"
      },
      {
        "title": "Kinderdijk: Patrimonio Mundial de la UNESCO",
        "url": "https://kinderdijk.nl/en/"
      }
    ]
  },
  {
    "id": "plitvice",
    "name": "Lagos de Plitvice",
    "country": "Croacia",
    "category": "Naturaleza",
    "lat": 44.8654,
    "lon": 15.582,
    "hook": "Lagos unidos por escalones de agua.",
    "facts": [
      "Dieciséis lagos con nombre están unidos por cascadas en este parque lleno de bosques.",
      "Los minerales del agua forman lentamente barreras naturales de roca llamadas toba calcárea.",
      "Estas barreras ayudan a mantener el agua en los lagos y pueden seguir cambiando con el tiempo."
    ],
    "stretch": {
      "question": "¿Cómo puede el agua que corre ayudar a formar roca?",
      "answer": "El agua lleva pequeños minerales disueltos. Cuando esos minerales se depositan, pueden formar poco a poco una barrera de roca."
    },
    "quiz": {
      "question": "¿Qué une a los lagos?",
      "options": [
        "Vías de tren",
        "Cascadas",
        "Cuerdas"
      ],
      "answer": 1,
      "explain": "El agua pasa de un lago a otro por encima de barreras naturales."
    },
    "photoQuery": "Plitvice Lakes National Park landscape Wikimedia Commons",
    "wikiTitle": "Plitvice Lakes National Park",
    "photoAlt": "Lagos de color turquesa y cascadas entre bosques verdes en Plitvice.",
    "sources": [
      {
        "title": "Parque Nacional de los Lagos de Plitvice: toba calcárea",
        "url": "https://np-plitvicka-jezera.hr/en/natural-and-cultural-heritage/natural-heritage/tufa/"
      },
      {
        "title": "Parque Nacional de los Lagos de Plitvice: todos los lagos",
        "url": "https://np-plitvicka-jezera.hr/en/all-plitvice-lakes/"
      }
    ]
  },
  {
    "id": "giza",
    "name": "Pirámides de Guiza",
    "country": "Egipto",
    "category": "Historia",
    "lat": 29.9792,
    "lon": 31.1342,
    "hook": "Gigantes de piedra construidos hace miles de años.",
    "facts": [
      "La Gran Pirámide se construyó para el rey Keops hace unos 4.500 años.",
      "Las tres grandes pirámides de este lugar se hicieron para Keops, su hijo y su nieto.",
      "Cerca de ellas, la Gran Esfinge tiene cabeza humana y cuerpo de león."
    ],
    "stretch": {
      "question": "¿Por qué una pirámide podría sostenerse mejor que una pirámide puesta al revés?",
      "answer": "Una pirámide tiene una base ancha y una punta angosta. Su peso se apoya sobre una superficie grande."
    },
    "quiz": {
      "question": "¿De qué animal es el cuerpo de la Gran Esfinge?",
      "options": [
        "De un león",
        "De una rana",
        "De un delfín"
      ],
      "answer": 0,
      "explain": "La Esfinge combina una cabeza humana con un cuerpo de león."
    },
    "photoQuery": "Great Pyramid of Giza landscape Wikimedia Commons",
    "wikiTitle": "Great Pyramid of Giza",
    "photoAlt": "La Gran Pirámide de Guiza se eleva sobre una meseta de arena.",
    "sources": [
      {
        "title": "Ministerio de Turismo y Antigüedades de Egipto: meseta de Guiza",
        "url": "https://egymonuments.gov.eg/archaeological-sites/giza-plateau/"
      },
      {
        "title": "Ministerio de Turismo y Antigüedades de Egipto: Gran Esfinge",
        "url": "https://egymonuments.gov.eg/monuments/the-great-sphinx/"
      }
    ]
  },
  {
    "id": "ait-benhaddou",
    "name": "Aït Benhaddou",
    "country": "Marruecos",
    "category": "Historia",
    "lat": 31.047,
    "lon": -7.1319,
    "hook": "Un pueblo construido con tierra.",
    "facts": [
      "Los edificios históricos de este lugar están hechos principalmente de tierra.",
      "Las murallas altas y las torres en las esquinas ayudaban a proteger el pueblo.",
      "Estaba en una antigua ruta de comercio entre el Sahara y la ciudad de Marrakech."
    ],
    "stretch": {
      "question": "¿Por qué los constructores podrían usar materiales que se encuentran cerca?",
      "answer": "Los materiales cercanos pueden ahorrar viajes largos. Los constructores aprenden a usar lo que les ofrece el lugar donde viven."
    },
    "quiz": {
      "question": "¿Cuál es uno de los principales materiales de construcción aquí?",
      "options": [
        "Bloques de hielo",
        "Tierra",
        "Ladrillos de plástico"
      ],
      "answer": 1,
      "explain": "Este pueblo tomó su forma con maneras locales de construir con tierra."
    },
    "photoQuery": "Aït Benhaddou landscape Wikimedia Commons",
    "wikiTitle": "Aït Benhaddou",
    "photoAlt": "Torres y murallas de color tierra en Aït Benhaddou, en la ladera de una colina.",
    "sources": [
      {
        "title": "UNESCO: pueblo fortificado de Ait-Ben-Haddou",
        "url": "https://whc.unesco.org/en/list/444"
      }
    ]
  },
  {
    "id": "petra",
    "name": "Petra",
    "country": "Jordania",
    "category": "Historia",
    "lat": 30.3285,
    "lon": 35.4444,
    "hook": "Una ciudad tallada en roca rosada.",
    "facts": [
      "Los antiguos constructores tallaron grandes fachadas directamente en paredes de arenisca.",
      "Un pasaje angosto entre rocas, llamado Siq, lleva al famoso Tesoro.",
      "El pueblo nabateo construyó canales, represas y túneles para controlar el agua, que era muy valiosa."
    ],
    "stretch": {
      "question": "¿Por qué una ciudad del desierto necesitaría guardar agua y protegerse de las inundaciones?",
      "answer": "Puede faltar agua durante mucho tiempo y luego llegar de golpe con una lluvia fuerte. Un diseño cuidadoso ayuda en las dos situaciones."
    },
    "quiz": {
      "question": "¿Cómo ayudaban las personas de este lugar a controlar el agua?",
      "options": [
        "Con canales y represas",
        "Con esponjas gigantes",
        "Con paredes de hielo"
      ],
      "answer": 0,
      "explain": "Los nabateos construyeron un ingenioso sistema de canales, represas y lugares para guardar agua."
    },
    "photoQuery": "Petra landscape Wikimedia Commons",
    "wikiTitle": "Petra",
    "photoAlt": "La fachada del Tesoro de Petra, tallada en arenisca.",
    "sources": [
      {
        "title": "Autoridad de Desarrollo y Turismo de Petra: sendero principal",
        "url": "https://www.visitpetra.jo/en/Trail/1"
      },
      {
        "title": "Autoridad de Desarrollo y Turismo de Petra: represa y túnel",
        "url": "https://visitpetra.jo/en/Location/101"
      }
    ]
  },
  {
    "id": "amboseli",
    "name": "Amboseli",
    "country": "Kenia",
    "category": "Vida silvestre",
    "lat": -2.6527,
    "lon": 37.2606,
    "hook": "Familias de elefantes al pie de una montaña enorme.",
    "facts": [
      "Grandes manadas de elefantes viven dentro y alrededor de este parque nacional.",
      "Los pantanos y otros humedales aportan agua a un paisaje que también tiene llanuras secas y abiertas.",
      "En días despejados, el monte Kilimanjaro se ve detrás del parque, al otro lado de la frontera, en Tanzania."
    ],
    "stretch": {
      "question": "¿Por qué los animales necesitan lugares fuera de los límites de un parque?",
      "answer": "La comida y el agua pueden estar muy separadas. Cuando sus hábitats están conectados, los animales pueden moverse si cambian las condiciones."
    },
    "quiz": {
      "question": "¿Por cuáles animales es especialmente conocido Amboseli?",
      "options": [
        "Osos polares",
        "Pingüinos",
        "Elefantes"
      ],
      "answer": 2,
      "explain": "Amboseli es famoso por sus grandes manadas de elefantes."
    },
    "photoQuery": "Amboseli National Park landscape Wikimedia Commons",
    "wikiTitle": "Amboseli National Park",
    "photoAlt": "Elefantes en las llanuras de Amboseli con el Kilimanjaro a lo lejos.",
    "sources": [
      {
        "title": "Servicio de Vida Silvestre de Kenia: Parque Nacional de Amboseli",
        "url": "https://kws.go.ke/park/amboseli-national-park/"
      },
      {
        "title": "Servicio de Vida Silvestre de Kenia: seguimiento de los elefantes de Amboseli",
        "url": "https://kws.go.ke/seven-giants-seven-collars-inside-amboselis-elephant-tracking-mission/"
      }
    ]
  },
  {
    "id": "serengeti",
    "name": "Serengeti",
    "country": "Tanzania",
    "category": "Vida silvestre",
    "lat": -2.3333,
    "lon": 34.8333,
    "hook": "Un viaje de animales en manadas enormes.",
    "facts": [
      "Manadas enormes de ñus recorren estas llanuras de pasto en busca de comida y agua.",
      "Las cebras y las gacelas también se unen a la gran migración.",
      "La ruta completa de la migración atraviesa partes de Tanzania y de Kenia."
    ],
    "stretch": {
      "question": "¿Por qué una manada seguiría viajando en vez de quedarse en un lugar?",
      "answer": "El pasto fresco y el agua cambian con las estaciones. Moverse ayuda a los animales a encontrar lo que necesitan."
    },
    "quiz": {
      "question": "¿Por qué viajan las manadas?",
      "options": [
        "Para encontrar pasto y agua",
        "Para alcanzar un tren",
        "Para coleccionar piedras"
      ],
      "answer": 0,
      "explain": "La cantidad de comida y agua disponible cambia con las estaciones."
    },
    "photoQuery": "Serengeti National Park landscape Wikimedia Commons",
    "wikiTitle": "Serengeti National Park",
    "photoAlt": "Ñus y cebras en las llanuras abiertas del Serengeti.",
    "sources": [
      {
        "title": "UNESCO: Parque Nacional del Serengeti",
        "url": "https://whc.unesco.org/en/list/156"
      }
    ]
  },
  {
    "id": "deadvlei",
    "name": "Deadvlei",
    "country": "Namibia",
    "category": "Naturaleza",
    "lat": -24.7617,
    "lon": 15.2922,
    "hook": "Árboles antiguos en un mar de dunas.",
    "facts": [
      "Árboles oscuros y muertos siguen de pie en una planicie de arcilla clara, entre enormes dunas de arena.",
      "Hace mucho tiempo, las dunas crecieron y bloquearon el paso del agua hacia estos árboles llamados acacias de jirafa.",
      "Los troncos de los árboles han seguido de pie durante cientos de años."
    ],
    "stretch": {
      "question": "¿Qué pistas indican que este lugar seco tuvo más agua antes?",
      "answer": "Los árboles necesitan agua para crecer. Sus troncos son pistas de que las condiciones de este lugar cambiaron hace mucho tiempo."
    },
    "quiz": {
      "question": "¿Por qué los árboles dejaron de recibir agua?",
      "options": [
        "Los árboles se fueron caminando",
        "Las dunas bloquearon el agua",
        "Los pingüinos se la tomaron"
      ],
      "answer": 1,
      "explain": "Las dunas se movieron y cortaron el paso del agua, dejando atrás los árboles antiguos."
    },
    "photoQuery": "Deadvlei landscape Wikimedia Commons",
    "wikiTitle": "Deadvlei",
    "photoAlt": "Troncos oscuros sobre una planicie de arcilla blanca, bajo dunas anaranjadas en Deadvlei.",
    "sources": [
      {
        "title": "Namibia Wildlife Resorts: protección de los árboles de Deadvlei",
        "url": "https://www.nwr.com.na/nwr-bemoans-tourist-behaviour-at-deadvlei/"
      },
      {
        "title": "Agencia de Prensa de Namibia: planicie de arcilla de Deadvlei",
        "url": "https://www.nampa.org/text/22909667"
      }
    ]
  },
  {
    "id": "tsingy",
    "name": "Tsingy de Bemaraha",
    "country": "Madagascar",
    "category": "Naturaleza",
    "lat": -18.6667,
    "lon": 44.75,
    "hook": "Un bosque hecho de agujas de piedra.",
    "facts": [
      "Las torres puntiagudas de piedra caliza hacen que este paisaje parezca un bosque de piedra.",
      "La caliza empezó a formarse bajo el mar, antes de que la tierra se elevara y el agua la desgastara.",
      "Los bosques de árboles cercanos dan refugio a lémures y a muchas clases de aves."
    ],
    "stretch": {
      "question": "¿Cómo pudo una roca que hoy está lejos de la costa haber estado bajo el mar?",
      "answer": "La Tierra cambia a lo largo de muchísimo tiempo. El terreno puede subir y el nivel del mar puede bajar."
    },
    "quiz": {
      "question": "¿De qué están hechas las torres puntiagudas?",
      "options": [
        "De piedra caliza",
        "De helado",
        "De madera"
      ],
      "answer": 0,
      "explain": "Estas torres son de piedra caliza. Los procesos de la naturaleza les dieron forma durante muchísimo tiempo."
    },
    "photoQuery": "Tsingy de Bemaraha National Park landscape Wikimedia Commons",
    "wikiTitle": "Tsingy de Bemaraha National Park",
    "photoAlt": "Un laberinto de picos de piedra caliza en Tsingy de Bemaraha.",
    "sources": [
      {
        "title": "Observatorio de la Tierra de la NASA: Tsingy de Bemaraha",
        "url": "https://science.nasa.gov/earth/earth-observatory/tsingy-de-bemaraha-national-park-madagascar-41407/"
      },
      {
        "title": "UNESCO: bosques secos de Andrefana, que incluyen Tsingy de Bemaraha",
        "url": "https://whc.unesco.org/en/list/494"
      }
    ]
  },
  {
    "id": "boulders",
    "name": "Playa Boulders",
    "country": "Sudáfrica",
    "category": "Vida silvestre",
    "lat": -34.1975,
    "lon": 18.4514,
    "hook": "¡Pingüinos en una playa de arena!",
    "facts": [
      "Los pingüinos africanos viven en esta costa rocosa cerca de Ciudad del Cabo.",
      "Estos pingüinos no necesitan el hielo de la Antártida para tener un hogar.",
      "Sus llamadas fuertes pueden sonar un poco como el rebuzno de un burro."
    ],
    "stretch": {
      "question": "¿Todos los pingüinos viven en lugares con nieve?",
      "answer": "No. Las distintas especies de pingüinos viven en lugares diferentes. Los pingüinos africanos hacen sus nidos en la costa del sur de África."
    },
    "quiz": {
      "question": "¿Qué aves viven en la playa Boulders?",
      "options": [
        "Emúes",
        "Pingüinos africanos",
        "Águilas calvas"
      ],
      "answer": 1,
      "explain": "Boulders es el hogar de una colonia protegida de pingüinos africanos."
    },
    "photoQuery": "Boulders Beach landscape Wikimedia Commons",
    "wikiTitle": "Boulders Beach",
    "photoAlt": "Pingüinos africanos en la arena, entre grandes rocas en Boulders.",
    "sources": [
      {
        "title": "SANParks: colonia de pingüinos de Boulders",
        "url": "https://www.sanparks.org/parks/table-mountain/what-to-do/attractions/boulders-penguin-colony"
      },
      {
        "title": "Turismo de Ciudad del Cabo: playa Boulders",
        "url": "https://www.capetown.travel/listing/boulders-beach/"
      }
    ]
  },
  {
    "id": "lalibela",
    "name": "Lalibela",
    "country": "Etiopía",
    "category": "Ingeniería",
    "lat": 12.0317,
    "lon": 39.0411,
    "hook": "Los constructores tallaron hacia abajo, dentro del suelo.",
    "facts": [
      "Once famosas iglesias de este lugar fueron talladas en roca.",
      "Los constructores quitaron piedra para hacer puertas, ventanas, habitaciones y pilares.",
      "Zanjas y túneles conectan distintas partes de este lugar asombroso."
    ],
    "stretch": {
      "question": "¿En qué se diferencia tallar un edificio de apilar bloques?",
      "answer": "Al apilar, agregas piezas. Al tallar, quitas material. Por eso los constructores deben decidir con cuidado qué roca dejar en su lugar."
    },
    "quiz": {
      "question": "¿Cómo se hicieron estas iglesias?",
      "options": [
        "Apilando nieve",
        "Haciendo crecer árboles",
        "Tallando la roca"
      ],
      "answer": 2,
      "explain": "Los constructores dieron forma a la roca sólida para crear iglesias, incluso sus habitaciones interiores."
    },
    "photoQuery": "Church of Saint George, Lalibela landscape Wikimedia Commons",
    "wikiTitle": "Church of Saint George, Lalibela",
    "photoAlt": "La iglesia de San Jorge, con forma de cruz, tallada en roca en Lalibela.",
    "sources": [
      {
        "title": "UNESCO: iglesias talladas en roca de Lalibela",
        "url": "https://whc.unesco.org/en/list/18"
      },
      {
        "title": "Fondo Mundial de Monumentos: iglesias talladas en roca",
        "url": "https://www.wmf.org/projects/rock-hewn-churches"
      }
    ]
  },
  {
    "id": "rwanda-volcanoes",
    "name": "Parque Nacional de los Volcanes",
    "country": "Ruanda",
    "category": "Vida silvestre",
    "lat": -1.4833,
    "lon": 29.5,
    "hook": "Conoce a los gorilas en un bosque de montaña.",
    "facts": [
      "Los gorilas de montaña viven en los bosques de estas laderas volcánicas.",
      "El parque también protege a los monos dorados y los bosques de bambú.",
      "Los gorilas viven en grupos familiares, y los investigadores los estudian para ayudar a protegerlos."
    ],
    "stretch": {
      "question": "¿Por qué proteger todo un bosque en vez de un solo animal?",
      "answer": "Los animales necesitan comida, espacio y refugio. Proteger su hábitat ayuda a muchos seres vivos al mismo tiempo."
    },
    "quiz": {
      "question": "¿Qué grandes simios viven aquí?",
      "options": [
        "Gorilas de montaña",
        "Orangutanes",
        "Gibones"
      ],
      "answer": 0,
      "explain": "Estos bosques son el hogar de gorilas de montaña, que están en peligro de extinción."
    },
    "photoQuery": "Volcanoes National Park landscape Wikimedia Commons",
    "wikiTitle": "Volcanoes National Park",
    "photoAlt": "Un gorila de montaña en los bosques verdes del Parque Nacional de los Volcanes de Ruanda.",
    "sources": [
      {
        "title": "Junta de Desarrollo de Ruanda: Parque Nacional de los Volcanes",
        "url": "https://visitrwanda.com/destinations/volcanoes-national-park/"
      },
      {
        "title": "Junta de Desarrollo de Ruanda: grupos de gorilas",
        "url": "https://visitrwanda.com/come-visit-the-gorillas/"
      }
    ]
  },
  {
    "id": "djoudj",
    "name": "Santuario de Aves de Djoudj",
    "country": "Senegal",
    "category": "Vida silvestre",
    "lat": 16.3833,
    "lon": -16.2333,
    "hook": "Una parada con agua para viajeros con alas.",
    "facts": [
      "Muchas aves migratorias se detienen aquí después de cruzar el desierto del Sahara.",
      "Los lagos, arroyos y humedales les dan lugares para descansar y alimentarse.",
      "Entre las aves que se encuentran aquí hay pelícanos, flamencos y espátulas."
    ],
    "stretch": {
      "question": "¿Por qué es importante un humedal después de cruzar un desierto?",
      "answer": "Un vuelo largo consume energía. El agua y la comida ayudan a las aves a recuperarse antes de continuar su viaje."
    },
    "quiz": {
      "question": "¿Por qué se detienen aquí las aves migratorias?",
      "options": [
        "Para comprar boletos de avión",
        "Para descansar y alimentarse",
        "Para hacer muñecos de nieve"
      ],
      "answer": 1,
      "explain": "Estos humedales son un lugar importante para comer y descansar durante los largos viajes de las aves."
    },
    "photoQuery": "Djoudj National Bird Sanctuary landscape Wikimedia Commons",
    "wikiTitle": "Djoudj National Bird Sanctuary",
    "photoAlt": "Pelícanos reunidos en los humedales del Santuario de Aves de Djoudj.",
    "sources": [
      {
        "title": "UNESCO: Santuario Nacional de Aves de Djoudj",
        "url": "https://whc.unesco.org/en/list/25"
      },
      {
        "title": "UNESCO: protección de Djoudj",
        "url": "https://whc.unesco.org/en/activities/981"
      }
    ]
  },
  {
    "id": "okavango",
    "name": "Delta del Okavango",
    "country": "Botsuana",
    "category": "Naturaleza",
    "lat": -19.2833,
    "lon": 22.9,
    "hook": "Un río que se extiende por el desierto.",
    "facts": [
      "El río Okavango se extiende por los humedales de este lugar en vez de desembocar en el océano.",
      "Su inundación de temporada llega durante la estación seca de Botsuana.",
      "Los elefantes y las cebras usan este hogar lleno de agua entre las tierras secas del Kalahari."
    ],
    "stretch": {
      "question": "¿Cómo puede inundarse un lugar durante la estación seca?",
      "answer": "La lluvia puede caer muy lejos. El río lleva esa agua en un largo viaje antes de que llegue al delta."
    },
    "quiz": {
      "question": "¿Por dónde se extiende el río aquí?",
      "options": [
        "Por humedales del desierto",
        "Dentro de un volcán",
        "Sobre la Luna"
      ],
      "answer": 0,
      "explain": "Este es un delta interior. Su agua se extiende por la tierra y no tiene salida al océano."
    },
    "photoQuery": "Okavango Delta landscape Wikimedia Commons",
    "wikiTitle": "Okavango Delta",
    "photoAlt": "Canales de agua entre islas verdes en el delta del Okavango.",
    "sources": [
      {
        "title": "UNESCO: delta del Okavango",
        "url": "https://whc.unesco.org/en/list/1432/"
      }
    ]
  }
];

;

/* ===== es-places-b.js ===== */
/* 25 descubrimientos: traducción al español latinoamericano. */
window.MLL_ES_B = [
  {
    "id": "jigokudani",
    "name": "El valle de los monos de nieve",
    "country": "Japón",
    "category": "Animales",
    "lat": 36.7327,
    "lon": 138.4622,
    "hook": "¡Los monos se dan un baño calentito en invierno!",
    "facts": [
      "Los monos de nieve de este lugar son macacos japoneses. Viven libres en un valle de montaña.",
      "Cuando hace frío, algunos monos se calientan metiéndose en aguas termales.",
      "Estos monos se mueven con libertad. El parque es un lugar para observarlos, no un zoológico lleno de jaulas."
    ],
    "stretch": {
      "question": "¿Los monos de nieve son un tipo especial de animal de la nieve?",
      "answer": "Mono de nieve es un apodo del macaco japonés. ¡Estos mismos monos siguen viviendo aquí cuando la nieve se derrite!"
    },
    "quiz": {
      "question": "¿Qué usan algunos monos de nieve para calentarse?",
      "options": [
        "Aguas termales",
        "Olas del mar",
        "Dunas de arena"
      ],
      "answer": 0,
      "explain": "Cuando hace frío, algunos monos se sientan en el agua caliente de las fuentes termales."
    },
    "photoQuery": "Jigokudani Japanese macaques snow hot spring",
    "wikiTitle": "Jigokudani Monkey Park",
    "photoAlt": "Macacos japoneses en el parque de monos de Jigokudani, en Japón",
    "sources": [
      {
        "title": "Organización Nacional de Turismo de Japón: la vida silvestre de Jigokudani",
        "url": "https://www.japan.travel/national-parks/wildlife/mammals/jigokudani-yaen-koen/"
      },
      {
        "title": "Organización Nacional de Turismo de Japón: observa a los monos de nieve bañándose",
        "url": "https://www.japan.travel/national-parks/parks/joshinetsukogen/see-and-do/see-the-bathing-snow-monkeys/"
      }
    ]
  },
  {
    "id": "wulingyuan",
    "name": "Las torres de piedra de Wulingyuan",
    "country": "China",
    "category": "Naturaleza",
    "lat": 29.3444,
    "lon": 110.4817,
    "hook": "Un bosque hecho de torres de roca gigantes.",
    "facts": [
      "Más de 3.000 columnas delgadas de roca y picos se elevan en este paisaje verde.",
      "Muchas torres miden más de 650 pies de altura. Están hechas de una roca llamada arenisca, no de bloques apilados.",
      "Entre las torres hay arroyos, cascadas, cuevas y puentes naturales de piedra."
    ],
    "stretch": {
      "question": "¿Todos los bosques tienen que estar hechos de árboles?",
      "answer": "Bosque de piedra es un apodo. Estas son columnas de roca, con árboles de verdad que crecen alrededor y encima de ellas."
    },
    "quiz": {
      "question": "¿De qué están hechas las altas torres naturales de Wulingyuan?",
      "options": [
        "Hielo",
        "Arenisca",
        "Madera"
      ],
      "answer": 1,
      "explain": "Las torres son enormes columnas naturales de arenisca."
    },
    "photoQuery": "Wulingyuan sandstone pillars landscape",
    "wikiTitle": "Wulingyuan",
    "photoAlt": "Altas columnas de arenisca y plantas verdes en Wulingyuan, China",
    "sources": [
      {
        "title": "UNESCO: Wulingyuan",
        "url": "https://whc.unesco.org/en/list/640"
      }
    ]
  },
  {
    "id": "jantar-mantar",
    "name": "El reloj de sol gigante de Jaipur",
    "country": "India",
    "category": "Ciencia",
    "lat": 26.9248,
    "lon": 75.8246,
    "hook": "Descubre la hora con una sombra gigante.",
    "facts": [
      "Jantar Mantar es un centro científico al aire libre construido hace unos 300 años.",
      "Su reloj de sol gigante indica la hora usando una sombra que produce la luz del Sol.",
      "Otros enormes instrumentos de piedra ayudaban a las personas a seguir al Sol, las estrellas y los planetas sin usar un telescopio."
    ],
    "stretch": {
      "question": "¿Un reloj de sol funcionaría igual a medianoche?",
      "answer": "No. Un reloj de sol necesita la luz del Sol para crear la sombra que permite leer la hora."
    },
    "quiz": {
      "question": "¿Qué usa el reloj de sol gigante para mostrar la hora?",
      "options": [
        "Una pila",
        "Agua que corre",
        "Una sombra"
      ],
      "answer": 2,
      "explain": "La luz del Sol crea una sombra que se mueve sobre unas marcas a lo largo del día."
    },
    "photoQuery": "Jantar Mantar Jaipur Samrat Yantra sundial",
    "wikiTitle": "Jantar Mantar, Jaipur",
    "photoAlt": "Grandes instrumentos de piedra para estudiar el cielo en Jantar Mantar, en Jaipur, India",
    "sources": [
      {
        "title": "UNESCO: Jantar Mantar, Jaipur",
        "url": "https://whc.unesco.org/en/list/1338"
      },
      {
        "title": "Incredible India: Jantar Mantar",
        "url": "https://www.incredibleindia.gov.in/en/rajasthan/jaipur/jantar-mantar"
      }
    ]
  },
  {
    "id": "sagarmatha",
    "name": "El mundo de montañas del Everest",
    "country": "Nepal",
    "category": "Naturaleza",
    "lat": 27.9881,
    "lon": 86.925,
    "hook": "Mira hacia la cima más alta de la Tierra.",
    "facts": [
      "El monte Everest está en la frontera entre Nepal y China. Su cima está más alta sobre el nivel del mar que la de cualquier otra montaña.",
      "Del lado de Nepal, el parque nacional de Sagarmatha protege glaciares, valles profundos y cimas nevadas.",
      "Los leopardos de las nieves y los pandas rojos están entre los animales poco comunes que viven en este parque."
    ],
    "stretch": {
      "question": "¿Qué significa estar más alto sobre el nivel del mar?",
      "answer": "Para comparar alturas, los científicos usan el mismo punto de partida: el nivel del mar. La cima del Everest es la que llega más arriba de ese nivel."
    },
    "quiz": {
      "question": "¿Qué felino poco común vive en el parque nacional de Sagarmatha?",
      "options": [
        "Leopardo de las nieves",
        "León",
        "Guepardo"
      ],
      "answer": 0,
      "explain": "Los leopardos de las nieves viven en este parque de alta montaña."
    },
    "photoQuery": "Mount Everest Nepal mountain landscape",
    "wikiTitle": "Mount Everest",
    "photoAlt": "La cima nevada del monte Everest en el Himalaya",
    "sources": [
      {
        "title": "UNESCO: parque nacional de Sagarmatha",
        "url": "https://whc.unesco.org/en/list/120"
      },
      {
        "title": "Parque nacional de Sagarmatha, Nepal",
        "url": "https://snp.gov.np/about-us"
      }
    ]
  },
  {
    "id": "tigers-nest",
    "name": "El Nido del Tigre",
    "country": "Bután",
    "category": "Historia",
    "lat": 27.4919,
    "lon": 89.3635,
    "hook": "Un edificio de verdad se abraza a un acantilado.",
    "facts": [
      "El Nido del Tigre es un monasterio llamado Paro Taktsang. Está junto a la pared de un acantilado muy empinado.",
      "Los edificios están unos 3.000 pies por encima del valle que queda abajo.",
      "El sendero sube por un bosque de pinos, con banderas de oración de muchos colores a lo largo del camino."
    ],
    "stretch": {
      "question": "¿Qué podría ser difícil al construir en un acantilado?",
      "answer": "Piensa como alguien que construye: hace falta llevar los materiales cuesta arriba y crear apoyos resistentes. ¿Qué planearías primero?"
    },
    "quiz": {
      "question": "¿Dónde se construyó el Nido del Tigre?",
      "options": [
        "En una playa de arena",
        "Junto a la pared de un acantilado de montaña",
        "En una isla flotante"
      ],
      "answer": 1,
      "explain": "Los edificios del monasterio se apoyan junto a la pared de un acantilado muy empinado."
    },
    "photoQuery": "Paro Taktsang Tiger's Nest monastery cliff",
    "wikiTitle": "Paro Taktsang",
    "photoAlt": "El monasterio del Nido del Tigre construido junto a un acantilado en Bután",
    "sources": [
      {
        "title": "Departamento de Turismo de Bután: una visita familiar al Nido del Tigre",
        "url": "https://bhutan.travel/journal/editorial/bhutan-is-family-friendly"
      },
      {
        "title": "Departamento de Turismo de Bután: un cuento de invierno",
        "url": "https://bhutan.travel/journal/editorial/a-winter-s-tale"
      }
    ]
  },
  {
    "id": "komodo",
    "name": "Las islas del dragón de Komodo",
    "country": "Indonesia",
    "category": "Animales",
    "lat": -8.5433,
    "lon": 119.4894,
    "hook": "Conoce a un dragón real que no lanza fuego.",
    "facts": [
      "Los dragones de Komodo son animales de verdad: son los lagartos más grandes que existen hoy.",
      "Un dragón grande puede medir unos diez pies de largo. ¡Eso es más que la altura de la mayoría de los adultos!",
      "Este parque protege varias islas y el mar que las rodea, donde hay arrecifes de coral y tortugas marinas."
    ],
    "stretch": {
      "question": "¿Por qué también se protege el agua que rodea una isla?",
      "answer": "En un parque de islas no solo hay animales terrestres. Las tortugas marinas, los peces y los corales también necesitan un hogar protegido."
    },
    "quiz": {
      "question": "¿Qué tipo de animal es un dragón de Komodo?",
      "options": [
        "Un ave",
        "Un dinosaurio",
        "Un lagarto"
      ],
      "answer": 2,
      "explain": "Los dragones de Komodo son enormes lagartos que viven hoy. Su nombre no significa que lancen fuego."
    },
    "photoQuery": "Komodo National Park Komodo dragon",
    "wikiTitle": "Komodo National Park",
    "photoAlt": "Un dragón de Komodo en el parque nacional de Komodo, en Indonesia",
    "sources": [
      {
        "title": "UNESCO: parque nacional de Komodo",
        "url": "https://whc.unesco.org/en/list/609/"
      }
    ]
  },
  {
    "id": "phong-nha",
    "name": "Las cuevas escondidas de Phong Nha",
    "country": "Vietnam",
    "category": "Naturaleza",
    "lat": 17.59,
    "lon": 106.2833,
    "hook": "Los ríos tienen caminos secretos bajo tierra.",
    "facts": [
      "Phong Nha-Ke Bang tiene una enorme red de cuevas escondidas en roca caliza.",
      "Algunos ríos fluyen bajo tierra por las cuevas en vez de quedarse al aire libre, bajo el Sol.",
      "Sobre este mundo escondido crecen bosques. El parque protege a los animales que viven tanto encima como debajo del suelo."
    ],
    "stretch": {
      "question": "¿Puede un río estar escondido de alguien que camina por encima?",
      "answer": "Sí. Un río puede fluir por una cueva subterránea mientras un bosque crece en la tierra que está encima."
    },
    "quiz": {
      "question": "¿Por dónde fluyen algunos ríos de Phong Nha?",
      "options": [
        "Por cuevas subterráneas",
        "Por la Luna",
        "Hacia arriba, entre las nubes"
      ],
      "answer": 0,
      "explain": "Algunos ríos recorren los pasadizos de las cuevas bajo tierra."
    },
    "photoQuery": "Phong Nha cave river entrance Vietnam",
    "wikiTitle": "Phong Nha Cave",
    "photoAlt": "Un río que entra en la cueva de Phong Nha, en Vietnam",
    "sources": [
      {
        "title": "UNESCO: Phong Nha-Ke Bang y Hin Nam No",
        "url": "https://whc.unesco.org/en/list/951/"
      }
    ]
  },
  {
    "id": "supertrees",
    "name": "Los superárboles de Singapur",
    "country": "Singapur",
    "category": "Ingeniería",
    "lat": 1.2816,
    "lon": 103.8636,
    "hook": "Torres de jardín gigantes ayudan a encender sus propias luces.",
    "facts": [
      "Los superárboles de Gardens by the Bay son estructuras construidas por personas con forma de árboles gigantes.",
      "Plantas de verdad crecen por sus lados y convierten las torres en jardines muy altos.",
      "Algunos superárboles recogen energía de la luz del Sol para ayudar a iluminar los jardines por la noche."
    ],
    "stretch": {
      "question": "¿Puede un invento hacer dos trabajos útiles?",
      "answer": "¡Sí! Un superárbol puede sostener un jardín y recoger energía solar al mismo tiempo. ¿Qué dos trabajos haría tu invento?"
    },
    "quiz": {
      "question": "¿De dónde obtienen algunos superárboles la energía para sus luces?",
      "options": [
        "De manivelas que se giran",
        "De la luz del Sol",
        "De las hojas que caen"
      ],
      "answer": 1,
      "explain": "Las celdas solares recogen energía del Sol."
    },
    "photoQuery": "Gardens by the Bay Supertree Grove Singapore",
    "wikiTitle": "Gardens by the Bay",
    "photoAlt": "Estructuras de superárboles con jardines en Gardens by the Bay, en Singapur",
    "sources": [
      {
        "title": "Gardens by the Bay: acciones para cuidar el ambiente",
        "url": "https://www.gardensbythebay.com.sg/en/about-us/our-gardens-story/sustainability-efforts.html"
      },
      {
        "title": "Oficina de Turismo de Singapur: Gardens by the Bay",
        "url": "https://www.visitsingapore.com/neighbourhood/featured-neighbourhood/marina-bay/gardens-by-the-bay/"
      }
    ]
  },
  {
    "id": "flaming-cliffs",
    "name": "Los acantilados de los dinosaurios",
    "country": "Mongolia",
    "category": "Historia",
    "lat": 44.14,
    "lon": 103.727,
    "hook": "Había huevos de dinosaurio escondidos en el desierto.",
    "facts": [
      "Los Acantilados Llameantes son paredes de roca roja en el desierto del Gobi, en Mongolia. ¡No están ardiendo de verdad!",
      "En la década de 1920, los buscadores de fósiles encontraron aquí nidos con huevos de dinosaurio.",
      "Entre los fósiles de este desierto hay dinosaurios, mamíferos antiguos y lagartos: todo un mundo de hace muchísimo tiempo."
    ],
    "stretch": {
      "question": "¿Qué nos puede enseñar un nido de huevos fósiles?",
      "answer": "Es una prueba de que los dinosaurios ponían huevos. Un nido fósil da a los científicos pistas sobre cómo los dinosaurios criaban a sus pequeños."
    },
    "quiz": {
      "question": "¿Qué fósiles sorprendentes se encontraron en los Acantilados Llameantes?",
      "options": [
        "Aletas de ballena",
        "Hojas de palmera",
        "Huevos de dinosaurio"
      ],
      "answer": 2,
      "explain": "Los científicos encontraron huevos fósiles de dinosaurio agrupados en nidos."
    },
    "photoQuery": "Flaming Cliffs Bayanzag Mongolia",
    "wikiTitle": "Flaming Cliffs",
    "photoAlt": "Los Acantilados Llameantes de roca roja en el desierto del Gobi, en Mongolia",
    "sources": [
      {
        "title": "Museo Americano de Historia Natural: huevos de dinosaurio",
        "url": "https://www.amnh.org/dinosaurs/dinosaur-eggs"
      },
      {
        "title": "Museo Americano de Historia Natural: búsqueda de fósiles en el Gobi",
        "url": "https://www.amnh.org/explore/videos/shelf-life/fossil-hunting-gobi-360"
      }
    ]
  },
  {
    "id": "great-barrier-reef",
    "name": "La Gran Barrera de Coral",
    "country": "Australia",
    "category": "Animales",
    "lat": -18.2861,
    "lon": 147.7,
    "hook": "Un enorme vecindario marino construido por animales diminutos.",
    "facts": [
      "Los corales son animales. Muchos animales de coral diminutos viven juntos y construyen esqueletos duros que ayudan a formar un arrecife.",
      "La Gran Barrera de Coral incluye miles de arrecifes separados a lo largo de la costa de Australia.",
      "En las aguas de este arrecife se pueden encontrar seis de las siete especies de tortugas marinas del mundo."
    ],
    "stretch": {
      "question": "¿Puede algo diminuto construir algo enorme?",
      "answer": "Sí. Muchas generaciones de pequeños animales de coral construyen esqueletos duros. Juntos, esos esqueletos ayudan a formar un gran arrecife."
    },
    "quiz": {
      "question": "¿Qué son los corales vivos?",
      "options": [
        "Animales",
        "Solo rocas",
        "Algas marinas"
      ],
      "answer": 0,
      "explain": "Los corales son animales, aunque muchos se quedan en un solo lugar y construyen un esqueleto duro."
    },
    "photoQuery": "Great Barrier Reef coral aerial Australia",
    "wikiTitle": "Great Barrier Reef",
    "photoAlt": "Vista desde el aire de la Gran Barrera de Coral, frente a la costa de Australia",
    "sources": [
      {
        "title": "Autoridad del Parque Marino de la Gran Barrera de Coral: corales",
        "url": "https://www.gbrmpa.gov.au/learn/coral"
      },
      {
        "title": "Autoridad del Parque Marino de la Gran Barrera de Coral: biodiversidad",
        "url": "https://www.gbrmpa.gov.au/learn/biodiversity"
      },
      {
        "title": "Autoridad del Parque Marino de la Gran Barrera de Coral: animales",
        "url": "https://www.gbrmpa.gov.au/learn/animals"
      }
    ]
  },
  {
    "id": "waitomo",
    "name": "Las cuevas luminosas de Waitomo",
    "country": "Nueva Zelanda",
    "category": "Animales",
    "lat": -38.2608,
    "lon": 175.103,
    "hook": "Un techo bajo tierra que parece lleno de estrellas.",
    "facts": [
      "Unos animales diminutos que brillan crean puntitos de luz en los techos oscuros de las cuevas de Waitomo.",
      "Los llaman gusanos luminosos, pero son crías de moscas, llamadas larvas. ¡No son gusanos!",
      "Cuelgan hilos pegajosos y usan su luz para atraer pequeños insectos hacia esos hilos."
    ],
    "stretch": {
      "question": "¿Para qué puede servir una luz en una cueva oscura?",
      "answer": "Para estos animales luminosos, la luz sirve para atraer insectos. Los pequeños insectos voladores se acercan a ella y pueden quedar atrapados en los hilos pegajosos."
    },
    "quiz": {
      "question": "¿Qué hace brillar el techo de las cuevas de Waitomo?",
      "options": [
        "Estrellas diminutas",
        "Animales llamados gusanos luminosos",
        "Rocas pintadas"
      ],
      "answer": 1,
      "explain": "Los llamados gusanos luminosos producen su propia luz. Esos puntitos son seres vivos, no estrellas."
    },
    "photoQuery": "Waitomo Glowworm Cave glowing ceiling",
    "wikiTitle": "Waitomo Glowworm Cave",
    "photoAlt": "El paisaje de la cueva de los gusanos luminosos de Waitomo, en Nueva Zelanda",
    "sources": [
      {
        "title": "Discover Waitomo: cuevas de los gusanos luminosos",
        "url": "https://www.waitomo.com/glowworms-and-caves/waitomo-glowworm-caves"
      },
      {
        "title": "Scientific Reports: los hilos de pesca de los gusanos luminosos",
        "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC6395680/"
      }
    ]
  },
  {
    "id": "sigatoka",
    "name": "Las dunas de arena de Sigatoka",
    "country": "Fiyi",
    "category": "Historia",
    "lat": -18.1667,
    "lon": 177.485,
    "hook": "El viento descubre pistas de hace mucho tiempo.",
    "facts": [
      "Estas altas dunas de arena están junto al mar, en la isla de Viti Levu, en Fiyi.",
      "El agua del río, las corrientes marinas y el viento ayudaron a juntar la arena y darle forma.",
      "Las vasijas antiguas y las herramientas de piedra halladas en las dunas ayudan a los científicos a conocer a las personas que vivieron aquí hace mucho tiempo."
    ],
    "stretch": {
      "question": "¿Cómo puede una vasija rota servirle a un científico?",
      "answer": "Su forma, su material y sus dibujos dan pistas sobre las personas que la hicieron y la usaron. Las cosas rotas también pueden contar historias."
    },
    "quiz": {
      "question": "¿Qué se ha encontrado bajo la arena en Sigatoka?",
      "options": [
        "Una nave espacial",
        "Pingüinos congelados",
        "Vasijas y herramientas antiguas"
      ],
      "answer": 2,
      "explain": "Los arqueólogos estudian las vasijas y herramientas de piedra descubiertas en las dunas."
    },
    "photoQuery": "Sigatoka Sand Dunes Fiji coastline",
    "wikiTitle": "Sigatoka Sand Dunes",
    "photoAlt": "Dunas de arena junto a la costa de Sigatoka, en Fiyi",
    "sources": [
      {
        "title": "Fundación Nacional de Fiyi: dunas de arena de Sigatoka",
        "url": "https://nationaltrust.org.fj/ssd/"
      },
      {
        "title": "Turismo de Fiyi: dunas de arena de la Costa de Coral",
        "url": "https://www.fiji.travel/places-to-go/coral-coast/locations/coral-coast-sand-dunes"
      }
    ]
  },
  {
    "id": "jellyfish-lake",
    "name": "El lago de las Medusas",
    "country": "Palaos",
    "category": "Animales",
    "lat": 7.1611,
    "lon": 134.3767,
    "hook": "Las medusas doradas siguen la luz del Sol.",
    "facts": [
      "Este lago en una isla contiene agua salada del mar y un tipo especial de medusa dorada.",
      "Dentro de las medusas viven algas diminutas que comparten el alimento que producen usando la luz del Sol.",
      "En los días soleados, las medusas se desplazan por el lago y ayudan a sus algas a recibir suficiente luz."
    ],
    "stretch": {
      "question": "¿Pueden ayudarse dos seres vivos diferentes?",
      "answer": "Sí. Estas algas tienen un hogar dentro de las medusas. Las medusas reciben parte del alimento de las algas. Los científicos llaman simbiosis a esta relación."
    },
    "quiz": {
      "question": "¿Por qué la luz del Sol ayuda a las medusas doradas?",
      "options": [
        "Sus algas la usan para producir alimento",
        "Las convierte en peces",
        "Hace que el lago se congele"
      ],
      "answer": 0,
      "explain": "Las algas que viven dentro de las medusas usan la luz del Sol y comparten parte del alimento que producen."
    },
    "photoQuery": "Jellyfish Lake Palau golden jellyfish",
    "wikiTitle": "Jellyfish Lake",
    "photoAlt": "Medusas doradas en el lago de las Medusas, en Palaos",
    "sources": [
      {
        "title": "Fundación para la Investigación de los Arrecifes de Coral: lago de las Medusas",
        "url": "https://coralreefpalau.org/research/marine-lakes/jellyfish-lake/"
      },
      {
        "title": "Fundación para la Investigación de los Arrecifes de Coral: estado del lago",
        "url": "https://coralreefpalau.org/research/marine-lakes/jellyfish-lake-conditions-and-forecast/"
      }
    ]
  },
  {
    "id": "bay-of-fundy",
    "name": "Las mareas gigantes de la bahía de Fundy",
    "country": "Canadá",
    "category": "Naturaleza",
    "lat": 45.6145,
    "lon": -64.9837,
    "hook": "El mar sube más que la altura de una casa.",
    "facts": [
      "La bahía de Fundy tiene algunos de los mayores cambios del mundo entre la marea baja y la marea alta.",
      "Cerca del parque nacional de Fundy, el agua puede subir unos 40 pies o más entre la marea baja y la marea alta.",
      "Cuando baja la marea, queda al descubierto una enorme parte del fondo del mar. Más tarde, el agua la cubre otra vez."
    ],
    "stretch": {
      "question": "¿Desaparece el fondo del mar cuando sube la marea?",
      "answer": "No. El suelo sigue ahí. Lo que cambia es el nivel del agua: la marea alta cubre el fondo del mar y la marea baja lo deja al descubierto."
    },
    "quiz": {
      "question": "¿Qué cambia entre la marea baja y la marea alta?",
      "options": [
        "El color de la Luna",
        "El nivel del agua",
        "La cantidad de continentes"
      ],
      "answer": 1,
      "explain": "Las mareas cambian la altura a la que llega el agua del mar en la costa."
    },
    "photoQuery": "Hopewell Rocks Bay of Fundy low tide",
    "wikiTitle": "Hopewell Rocks",
    "photoAlt": "Formaciones rocosas al descubierto durante la marea baja junto a la bahía de Fundy, en Canadá",
    "sources": [
      {
        "title": "Parques de Canadá: las mareas en el parque nacional de Fundy",
        "url": "https://parks.canada.ca/pn-np/nb/fundy/nature/environment/marees-tides"
      },
      {
        "title": "Parques de Canadá: parque nacional de Fundy",
        "url": "https://www.parcs.canada.ca/pn-np/nb/fundy/info"
      }
    ]
  },
  {
    "id": "chichen-itza",
    "name": "Chichén Itzá",
    "country": "México",
    "category": "Historia",
    "lat": 20.6843,
    "lon": -88.5678,
    "hook": "Explora una ciudad maya con una pirámide escalonada.",
    "facts": [
      "Chichén Itzá fue una gran ciudad maya. Sus edificios de piedra siguen en pie en la península de Yucatán, en México.",
      "Uno de sus edificios famosos, El Castillo, es una pirámide con escaleras que suben por sus lados.",
      "La ciudad creció cerca de huecos naturales llenos de agua, llamados cenotes. Otro edificio se usaba para estudiar el cielo."
    ],
    "stretch": {
      "question": "¿Por qué una ciudad necesitaría estar cerca del agua?",
      "answer": "Las personas necesitan agua para beber, cocinar y cultivar alimentos. Encontrar agua es una parte importante de elegir dónde vivir."
    },
    "quiz": {
      "question": "¿Qué es un cenote?",
      "options": [
        "Un tipo de nube",
        "Un instrumento musical",
        "Un hueco natural lleno de agua"
      ],
      "answer": 2,
      "explain": "Los cenotes son aberturas naturales en la roca que contienen agua."
    },
    "photoQuery": "Chichen Itza El Castillo pyramid Mexico",
    "wikiTitle": "Chichen Itza",
    "photoAlt": "El Castillo, la pirámide escalonada de Chichén Itzá, en México",
    "sources": [
      {
        "title": "UNESCO: Chichén Itzá",
        "url": "https://whc.unesco.org/en/list/483"
      }
    ]
  },
  {
    "id": "monteverde",
    "name": "El bosque nuboso de Monteverde",
    "country": "Costa Rica",
    "category": "Naturaleza",
    "lat": 10.3009,
    "lon": -84.7959,
    "hook": "Un bosque se cubre con una manta de neblina.",
    "facts": [
      "Las nubes y la neblina envuelven este bosque de montaña y mantienen húmedas muchas de sus plantas.",
      "Orquídeas, musgos y helechos crecen en las ramas de los árboles y las usan como hogares en las alturas.",
      "El bosque da refugio a unas aves de colores vivos llamadas quetzales y a muchos otros animales."
    ],
    "stretch": {
      "question": "¿Todas las plantas tienen que crecer en la tierra del suelo?",
      "answer": "No. Algunas plantas crecen sobre otras plantas. Se llaman epífitas, y muchas viven en las ramas de los árboles de Monteverde."
    },
    "quiz": {
      "question": "¿Por qué a Monteverde se lo llama bosque nuboso?",
      "options": [
        "La neblina y las nubes lo rodean a menudo",
        "Sus árboles están hechos de nubes",
        "Flota sobre la Tierra"
      ],
      "answer": 0,
      "explain": "Este bosque de montaña suele estar envuelto en nubes y neblina."
    },
    "photoQuery": "Monteverde Cloud Forest Reserve mist trees",
    "wikiTitle": "Monteverde Cloud Forest Reserve",
    "photoAlt": "Árboles verdes y neblina en el bosque nuboso de Monteverde, en Costa Rica",
    "sources": [
      {
        "title": "Reserva del Bosque Nuboso de Monteverde: el bosque nuboso",
        "url": "https://cloudforestmonteverde.com/the-cloud-forest/"
      },
      {
        "title": "Reserva del Bosque Nuboso de Monteverde: las plantas",
        "url": "https://cloudforestmonteverde.com/flora-of-the-cloud-forest/"
      }
    ]
  },
  {
    "id": "panama-canal",
    "name": "El canal de Panamá",
    "country": "Panamá",
    "category": "Ingeniería",
    "lat": 9.08,
    "lon": -79.68,
    "hook": "Barcos gigantes viajan en ascensores de agua.",
    "facts": [
      "El canal de Panamá ofrece a los barcos un atajo entre los océanos Atlántico y Pacífico.",
      "Unos enormes compartimentos de agua llamados esclusas suben y bajan los barcos mientras cruzan la tierra.",
      "El agua de un lago fluye hacia las esclusas gracias a la gravedad. Cuando el agua sube, el barco que flota también sube."
    ],
    "stretch": {
      "question": "¿Cómo puede el agua levantar un barco pesado?",
      "answer": "El barco flota en el agua. Cuando entra más agua en el compartimento de la esclusa, sube el nivel del agua y el barco también sube."
    },
    "quiz": {
      "question": "¿Qué es una esclusa del canal de Panamá?",
      "options": [
        "Una llave gigante de puerta",
        "Un compartimento que sube o baja barcos",
        "Un tren submarino"
      ],
      "answer": 1,
      "explain": "Una esclusa cambia su nivel de agua para mover un barco flotante hacia arriba o hacia abajo."
    },
    "photoQuery": "Panama Canal Miraflores locks ship",
    "wikiTitle": "Panama Canal",
    "photoAlt": "Un barco que atraviesa el sistema de esclusas del canal de Panamá",
    "sources": [
      {
        "title": "Autoridad del Canal de Panamá: diseño de las esclusas",
        "url": "https://pancanal.com/en/design-of-the-locks/"
      },
      {
        "title": "Autoridad del Canal de Panamá: historia del canal",
        "url": "https://pancanal.com/en/history-of-the-panama-canal/"
      }
    ]
  },
  {
    "id": "lencois",
    "name": "Las lagunas entre dunas de Brasil",
    "country": "Brasil",
    "category": "Naturaleza",
    "lat": -2.5328,
    "lon": -43.1175,
    "hook": "La lluvia crea piscinas azules entre dunas blancas.",
    "facts": [
      "Lençóis Maranhenses tiene grandes extensiones de dunas de arena clara junto a la costa de Brasil.",
      "Durante la época de lluvias, el agua dulce de la lluvia se acumula entre las dunas y forma lagunas.",
      "Parece un desierto, pero este lugar tiene una época de lluvias. Muchas lagunas se hacen más pequeñas cuando el clima se vuelve más seco."
    ],
    "stretch": {
      "question": "¿Un lugar lleno de arena tiene que ser un desierto?",
      "answer": "No. Un desierto es muy seco. En este paisaje de arena llueve lo suficiente para llenar las lagunas entre sus dunas."
    },
    "quiz": {
      "question": "¿Qué llena las lagunas entre estas dunas?",
      "options": [
        "Lava",
        "Glaciares derretidos",
        "Agua de lluvia"
      ],
      "answer": 2,
      "explain": "El agua de lluvia se acumula en los lugares bajos entre las dunas de arena."
    },
    "photoQuery": "Lencois Maranhenses white dunes blue lagoons",
    "wikiTitle": "Lençóis Maranhenses National Park",
    "photoAlt": "Lagunas llenas de agua de lluvia entre dunas de arena clara en Lençóis Maranhenses, Brasil",
    "sources": [
      {
        "title": "UNESCO: parque nacional de Lençóis Maranhenses",
        "url": "https://whc.unesco.org/en/list/1611"
      },
      {
        "title": "NASA: la paradoja de Lençóis Maranhenses",
        "url": "https://science.nasa.gov/earth/earth-observatory/the-paradox-of-lencois-maranhenses-national-park/"
      }
    ]
  },
  {
    "id": "machu-picchu",
    "name": "Machu Picchu",
    "country": "Perú",
    "category": "Historia",
    "lat": -13.1631,
    "lon": -72.545,
    "hook": "Edificios de piedra en las alturas de un valle verde.",
    "facts": [
      "Los constructores incas levantaron Machu Picchu sobre una cresta de montaña empinada hace cientos de años.",
      "Las terrazas de piedra forman escalones gigantes en las laderas. Algunas ofrecían lugares planos para cultivar alimentos.",
      "Este lugar está a unos 8.000 pies sobre el nivel del mar, rodeado de montañas y bosque."
    ],
    "stretch": {
      "question": "¿Por qué los agricultores podrían hacer escalones planos en una colina empinada?",
      "answer": "Una terraza ofrece un lugar más plano para cultivar. Imagina sembrar en un escalón en vez de hacerlo en una resbaladera."
    },
    "quiz": {
      "question": "¿Cómo se llaman las zonas de la ladera que parecen escalones gigantes?",
      "options": [
        "Terrazas",
        "Icebergs",
        "Arrecifes de coral"
      ],
      "answer": 0,
      "explain": "Las terrazas son escalones planos construidos en una ladera."
    },
    "photoQuery": "Machu Picchu Inca terraces Peru",
    "wikiTitle": "Machu Picchu",
    "photoAlt": "Edificios y terrazas de piedra sobre la cresta de una montaña en Machu Picchu, Perú",
    "sources": [
      {
        "title": "UNESCO: santuario histórico de Machu Picchu",
        "url": "https://whc.unesco.org/en/list/274"
      },
      {
        "title": "Ministerio de Cultura del Perú: historia de Machu Picchu",
        "url": "https://www.machupicchu.gob.pe/history/?lang=en"
      }
    ]
  },
  {
    "id": "atacama",
    "name": "Atacama, el desierto de las estrellas",
    "country": "Chile",
    "category": "Ciencia",
    "lat": -23.029,
    "lon": -67.755,
    "hook": "Un desierto seco nos ayuda a explorar el espacio.",
    "facts": [
      "Las zonas altas del desierto de Atacama son tan secas que los científicos construyen allí potentes telescopios.",
      "ALMA usa un grupo de antenas gigantes con forma de plato que trabajan juntas.",
      "Estas antenas estudian luz que nuestros ojos no pueden ver, incluidas señales de objetos muy fríos en el espacio."
    ],
    "stretch": {
      "question": "¿Por qué el aire seco le sirve a ALMA?",
      "answer": "El vapor de agua del aire bloquea algunas señales que ALMA estudia. Cuando hay menos vapor de agua, más señales pueden llegar a sus antenas."
    },
    "quiz": {
      "question": "¿Cómo explora ALMA el espacio?",
      "options": [
        "Enviando personas dentro de sus antenas",
        "Con antenas que trabajan juntas",
        "Atrapando estrellas fugaces"
      ],
      "answer": 1,
      "explain": "ALMA combina las señales que recogen muchas antenas grandes."
    },
    "photoQuery": "Atacama Large Millimeter Array ALMA antennas Chile",
    "wikiTitle": "Atacama Large Millimeter Array",
    "photoAlt": "Antenas del telescopio ALMA en una meseta alta del desierto en Chile",
    "sources": [
      {
        "title": "Observatorio Europeo Austral: ALMA",
        "url": "https://www.hq.eso.org/public/teles-instr/alma/"
      },
      {
        "title": "Observatorio Europeo Austral: observación de distintos tipos de luz",
        "url": "https://www.eso.org/public/images/potw2142a/"
      }
    ]
  },
  {
    "id": "perito-moreno",
    "name": "El glaciar Perito Moreno",
    "country": "Argentina",
    "category": "Naturaleza",
    "lat": -50.4967,
    "lon": -73.1377,
    "hook": "Un enorme río de hielo llega hasta un lago.",
    "facts": [
      "Este glaciar lleva hielo cuesta abajo desde una gran extensión de hielo en la cordillera de los Andes.",
      "Su frente llega hasta las aguas de un lago llamado lago Argentino.",
      "Grandes trozos pueden desprenderse de su frente y caer al lago, donde se convierten en bloques de hielo flotantes."
    ],
    "stretch": {
      "question": "¿En qué se diferencian un glaciar y un iceberg?",
      "answer": "Un glaciar es una gran masa de hielo sobre tierra que se mueve lentamente. Un iceberg flota en el agua después de desprenderse."
    },
    "quiz": {
      "question": "¿Hasta dónde llega el frente del glaciar Perito Moreno?",
      "options": [
        "Un desierto caliente",
        "Una calle de ciudad",
        "Un lago"
      ],
      "answer": 2,
      "explain": "El glaciar termina en el lago Argentino, donde los trozos de hielo pueden desprenderse y caer al agua."
    },
    "photoQuery": "Perito Moreno Glacier ice front Argentina",
    "wikiTitle": "Perito Moreno Glacier",
    "photoAlt": "El frente de hielo del glaciar Perito Moreno junto al lago Argentino, en Argentina",
    "sources": [
      {
        "title": "NASA: glaciar Perito Moreno",
        "url": "https://science.nasa.gov/earth/earth-observatory/perito-moreno-glacier-argentina-78754/"
      },
      {
        "title": "Inventario Nacional de Glaciares de Argentina",
        "url": "https://www.glaciaresargentinos.gob.ar/?page_id=193"
      }
    ]
  },
  {
    "id": "uyuni",
    "name": "El espejo de sal de Uyuni",
    "country": "Bolivia",
    "category": "Naturaleza",
    "lat": -20.1338,
    "lon": -67.4891,
    "hook": "A veces el suelo refleja todo el cielo.",
    "facts": [
      "El salar de Uyuni es una enorme zona plana cubierta de sal, en las tierras altas de Bolivia.",
      "Hace mucho tiempo, los lagos cubrían esta tierra. Cuando su agua desapareció, quedó la sal.",
      "Una capa delgada de agua de lluvia quieta puede convertir parte del salar en un espejo gigante del cielo."
    ],
    "stretch": {
      "question": "¿Por qué el salar no parece un espejo todo el tiempo?",
      "answer": "El efecto de espejo necesita una capa de agua lisa. Cuando la superficie está seca, se ve la sal clara."
    },
    "quiz": {
      "question": "¿Qué ayuda a Uyuni a reflejar el cielo como un espejo?",
      "options": [
        "Una capa delgada de agua quieta",
        "Una manta de hojas",
        "Una capa profunda de nieve"
      ],
      "answer": 0,
      "explain": "El agua de superficie lisa refleja el cielo que está sobre el salar."
    },
    "photoQuery": "Salar de Uyuni Bolivia mirror reflection",
    "wikiTitle": "Salar de Uyuni",
    "photoAlt": "La enorme superficie de sal del salar de Uyuni, en Bolivia",
    "sources": [
      {
        "title": "NASA: salar de Uyuni, Bolivia",
        "url": "https://science.nasa.gov/earth/earth-observatory/salar-de-uyuni-bolivia-6096/"
      },
      {
        "title": "NASA: un baño de sal en Bolivia",
        "url": "https://science.nasa.gov/earth/earth-observatory/a-salt-bath-in-bolivia-149502/"
      }
    ]
  },
  {
    "id": "blue-hole",
    "name": "El Gran Agujero Azul",
    "country": "Belice",
    "category": "Naturaleza",
    "lat": 17.316,
    "lon": -87.5348,
    "hook": "Una cueva antigua se esconde bajo el agua azul.",
    "facts": [
      "El Gran Agujero Azul es un enorme hueco natural bajo el agua, dentro de un arrecife con forma de anillo.",
      "Cuando el nivel del mar era más bajo, aquí se formó una cueva por encima del agua.",
      "Dentro de la cueva crecieron formas de piedra llamadas estalactitas. Todavía están allí, ahora bajo aguas profundas."
    ],
    "stretch": {
      "question": "¿Cómo puede una cueva submarina guardar pistas sobre tierra seca?",
      "answer": "Sus estalactitas se formaron cuando algunas partes de la cueva estaban por encima del agua. Más tarde, el mar subió y las cubrió."
    },
    "quiz": {
      "question": "¿Qué esconde el Gran Agujero Azul bajo el agua?",
      "options": [
        "Un volcán lleno de lava",
        "Partes de una cueva antigua",
        "Un palacio de hielo"
      ],
      "answer": 1,
      "explain": "El hueco contiene formaciones de roca de una cueva antigua."
    },
    "photoQuery": "Great Blue Hole Belize aerial",
    "wikiTitle": "Great Blue Hole",
    "photoAlt": "El círculo oscuro del Gran Agujero Azul rodeado por aguas poco profundas del arrecife en Belice",
    "sources": [
      {
        "title": "NASA: Gran Agujero Azul, Belice",
        "url": "https://science.nasa.gov/earth/earth-observatory/great-blue-hole-belize-37741/"
      },
      {
        "title": "NASA: el arrecife Lighthouse y el Gran Agujero Azul",
        "url": "https://science.nasa.gov/earth/earth-observatory/lighthouse-reef-and-the-great-blue-hole-147158/"
      }
    ]
  },
  {
    "id": "tikal",
    "name": "Los templos de Tikal entre los árboles",
    "country": "Guatemala",
    "category": "Historia",
    "lat": 17.222,
    "lon": -89.6237,
    "hook": "Templos antiguos se asoman sobre un bosque lleno de vida.",
    "facts": [
      "Tikal fue una gran ciudad maya. Sus altos templos de piedra todavía se elevan por encima del bosque.",
      "La antigua ciudad tenía palacios, plazas, caminos y canchas para juegos de pelota.",
      "Hoy, el parque también protege a monos aulladores, jaguares y cientos de especies de aves."
    ],
    "stretch": {
      "question": "¿Puede un mismo parque proteger la historia y la vida silvestre?",
      "answer": "Sí. Tikal protege los edificios antiguos y el bosque que los rodea. Ambos forman parte de este lugar especial."
    },
    "quiz": {
      "question": "¿Qué rodea los templos antiguos de Tikal?",
      "options": [
        "Una capa de hielo polar",
        "Un salar",
        "Un bosque tropical"
      ],
      "answer": 2,
      "explain": "Los templos de piedra de Tikal se levantan entre los árboles de la Selva Maya."
    },
    "photoQuery": "Tikal Guatemala temples forest",
    "wikiTitle": "Tikal",
    "photoAlt": "Antiguos templos mayas de piedra y bosque en Tikal, Guatemala",
    "sources": [
      {
        "title": "UNESCO: parque nacional de Tikal",
        "url": "https://whc.unesco.org/en/list/64"
      },
      {
        "title": "Museo Nacional del Indígena Americano del Smithsonian: Tik’al",
        "url": "https://maya.nmai.si.edu/gallery/tikal"
      }
    ]
  },
  {
    "id": "yellowstone",
    "name": "La tierra caliente de Yellowstone",
    "country": "Estados Unidos",
    "category": "Ciencia",
    "lat": 44.4605,
    "lon": -110.8281,
    "hook": "La Tierra crea fuentes de agua y vapor.",
    "facts": [
      "Yellowstone tiene pozas llamadas fuentes termales y fuentes naturales llamadas géiseres. Los géiseres lanzan agua caliente y vapor al aire.",
      "El calor de las profundidades de la Tierra calienta el agua de este paisaje volcánico.",
      "Unos seres vivos diminutos llamados microbios producen algunos de los colores vivos alrededor de las fuentes termales. Estas pozas están demasiado calientes para tocarlas."
    ],
    "stretch": {
      "question": "¿Un géiser es lo mismo que un volcán en erupción?",
      "answer": "No. Un géiser lanza agua caliente y vapor. Una erupción volcánica puede expulsar lava, ceniza y gases."
    },
    "quiz": {
      "question": "¿Qué sale de un géiser?",
      "options": [
        "Agua caliente y vapor",
        "Bloques de hielo",
        "Agua salada fría"
      ],
      "answer": 0,
      "explain": "Los géiseres expulsan agua caliente y vapor calentados bajo tierra."
    },
    "photoQuery": "Grand Prismatic Spring Yellowstone aerial",
    "wikiTitle": "Grand Prismatic Spring",
    "photoAlt": "El agua azul y los bordes de colores de la Gran Fuente Prismática de Yellowstone",
    "sources": [
      {
        "title": "Servicio de Parques Nacionales: las aguas termales de Yellowstone",
        "url": "https://www.nps.gov/yell/learn/nature/hydrothermal-features.htm"
      },
      {
        "title": "Servicio de Parques Nacionales: el volcán de Yellowstone",
        "url": "https://www.nps.gov/yell/learn/nature/volcano.htm"
      },
      {
        "title": "Servicio de Parques Nacionales: seguridad en zonas termales",
        "url": "https://www.nps.gov/yell/planyourvisit/safety.htm"
      }
    ]
  }
];

;

/* ===== map.js ===== */
/* Max Learning Lab: offline, touch-friendly world map.
   Land geometry: Natural Earth, ne_110m_land, public domain.
   https://www.naturalearthdata.com/about/terms-of-use/
   https://github.com/nvkelso/natural-earth-vector/blob/master/geojson/ne_110m_land.geojson
   Projection: equirectangular, longitude -180..180 and latitude 90..-90.
   Usage: const dispose = MLL_MAP.mount(element, places, {onSelect, visited: new Set()});
   Each place: {id, name, lat, lon, emoji?, family?}. No network calls or dependencies.
*/
(function (global) {
  'use strict';
  const NS = 'http://www.w3.org/2000/svg';
  const l = (en, es) => global.MLL_I18N?.pick?.(en, es) ?? en;
  const locale = () => global.MLL_I18N?.lang === 'es' ? 'es' : 'en';
  const SEARCH_ALIASES = [
    ['hawaii', 'hawai'], ['japan', 'japon'], ['russia', 'rusia'],
    ['united states', 'estados unidos', 'usa', 'ee uu'],
    ['united kingdom', 'reino unido', 'uk'], ['iceland', 'islandia'],
    ['norway', 'noruega'], ['finland', 'finlandia'], ['germany', 'alemania'],
    ['france', 'francia'], ['spain', 'espana'], ['italy', 'italia'],
    ['greece', 'grecia'], ['turkey', 'turquia', 'turkiye'],
    ['netherlands', 'paises bajos', 'holland', 'holanda'],
    ['egypt', 'egipto'], ['morocco', 'marruecos'], ['ethiopia', 'etiopia'],
    ['south africa', 'sudafrica'], ['kenya', 'kenia'], ['rwanda', 'ruanda'],
    ['singapore', 'singapur'], ['new zealand', 'nueva zelanda'],
    ['brazil', 'brasil'], ['mexico', 'mejico'], ['croatia', 'croacia'],
    ['jordan', 'jordania'], ['bhutan', 'butan'], ['belize', 'belice'],
    ['fiji', 'fiyi'], ['antarctica', 'antartida']
  ];
  function normalizeSearch(value) {
    let normalized = String(value || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '')
      .toLocaleLowerCase().replace(/ø/g, 'o').replace(/ß/g, 'ss')
      .replace(/['’ʻʼ]/g, '').replace(/[^a-z0-9]+/g, ' ').trim();
    for (const aliases of SEARCH_ALIASES) {
      for (const alias of aliases.slice(1)) {
        normalized = normalized.replace(new RegExp(`\\b${alias}\\b`, 'g'), aliases[0]);
      }
    }
    return normalized;
  }
  const LAND_PATHS = ["M334.52,472.33L333.71,473.75L332.89,475.00L327.07,474.62L320.87,474.78L317.38,473.86L317.38,473.75L315.86,472.93L322.12,473.04L328.10,473.31L330.17,472.17L331.64,471.19L334.52,472.33Z","M57.76,470.83L52.42,471.21L48.78,470.23L47.15,469.25L47.04,469.08L45.24,468.32L45.24,468.32L46.93,467.29L52.10,467.72L54.87,468.59L56.99,469.57L57.76,470.83Z","M374.57,466.80L378.00,467.99L379.19,469.68L379.52,470.88L379.63,472.29L375.33,473.17L370.82,473.87L365.59,474.53L359.77,475.07L353.19,474.91L349.54,473.98L350.03,472.84L355.96,472.08L358.36,471.15L360.10,469.95L361.35,468.92L363.04,467.94L364.83,466.80L364.83,466.80L366.25,466.80L370.38,466.20L374.57,466.80Z","M163.30,454.17L166.89,454.60L170.21,454.11L168.63,455.09L166.02,455.80L162.16,455.58L159.38,454.60L159.38,454.60L159.98,453.68L163.30,454.17Z","M151.22,454.11L155.47,455.20L153.83,455.09L150.24,454.82L146.44,454.06L146.44,454.06L148.45,453.46L151.22,454.11Z","M225.05,449.81L228.10,450.20L231.14,449.87L232.78,451.45L230.60,451.23L227.23,451.34L223.80,451.23L220.05,451.39L217.22,450.85L215.75,449.71L215.75,449.71L217.49,449.22L221.03,449.60L225.05,449.81Z","M309.86,447.10L310.18,448.35L309.69,449.44L308.93,450.47L305.67,450.86L302.57,451.40L298.92,451.35L300.28,450.26L297.02,450.64L293.92,451.02L291.79,450.20L291.63,449.06L294.68,447.97L294.68,447.97L296.58,447.64L299.79,447.75L300.61,446.34L300.77,445.30L300.72,443.07L302.29,441.77L304.85,441.33L306.32,442.36L306.97,443.40L308.17,444.65L309.10,445.85L309.86,447.10Z","M337.18,428.20L335.99,428.80L333.92,428.36L331.63,428.64L329.73,429.29L327.72,430.00L326.36,430.81L325.98,431.90L326.14,432.94L327.44,433.86L325.54,434.52L322.93,434.73L321.41,435.66L319.77,436.53L318.03,437.73L317.60,438.76L318.58,439.90L320.05,440.77L322.33,441.43L324.45,442.30L325.59,443.39L326.19,444.42L327.01,445.51L328.31,446.44L329.13,447.47L329.51,450.03L330.33,451.06L330.55,452.15L331.42,453.24L331.04,454.71L329.51,455.85L327.88,456.78L324.18,457.16L322.93,458.14L321.24,459.06L317.05,460.10L313.35,460.53L309.87,461.13L306.12,461.73L303.89,462.87L299.43,462.98L294.53,462.87L290.12,463.09L285.44,463.09L286.31,464.18L290.56,464.67L293.66,465.43L295.40,466.41L292.30,467.28L287.51,467.01L283.54,467.72L283.38,468.86L283.27,469.95L286.53,470.87L287.13,471.91L290.67,472.94L296.54,473.38L301.55,474.14L305.52,475.01L310.58,475.88L317.49,476.32L324.29,477.08L329.02,477.90L334.19,478.82L336.91,480.13L338.27,481.16L341.64,480.18L346.21,479.37L351.06,478.50L356.82,477.79L361.77,477.03L368.68,476.97L375.48,477.35L381.09,478.01L382.88,476.81L386.75,475.99L393.76,475.94L399.26,475.34L404.48,474.74L410.25,474.36L416.40,473.87L420.69,473.16L418.74,472.18L417.54,471.20L417.54,470.17L412.15,470.28L406.44,470.71L401.00,470.71L400.24,469.68L400.62,467.61L401.87,467.01L405.84,466.36L410.52,465.70L413.89,464.89L417.27,464.07L419.77,462.98L423.58,462.49L427.33,462.11L429.24,461.89L433.53,461.78L437.62,461.40L441.04,460.86L444.42,460.21L447.46,459.55L451.33,458.68L453.77,457.76L456.38,456.94L457.20,455.85L454.26,455.20L455.24,454.06L457.09,453.18L459.98,452.64L463.02,451.99L465.85,451.12L468.03,450.03L469.39,448.72L471.40,447.96L474.72,448.12L476.08,449.05L479.40,449.16L479.51,448.12L480.92,447.03L483.91,447.31L484.62,448.34L487.94,448.50L491.53,448.01L495.01,447.69L498.17,447.85L499.36,448.99L502.41,448.07L505.24,447.58L508.40,447.20L511.50,446.82L514.33,446.16L517.43,445.73L519.82,445.13L521.51,444.15L523.58,444.86L526.46,444.48L528.47,445.78L530.05,446.76L533.21,446.22L534.46,445.13L537.29,444.37L540.93,444.53L542.02,445.56L544.30,444.53L547.30,444.20L550.56,444.09L553.50,444.15L556.60,444.48L559.59,444.64L560.90,445.56L562.69,446.38L565.74,445.89L569.00,445.78L572.16,445.78L575.26,445.73L578.03,445.35L580.97,445.02L583.42,444.26L586.03,443.77L588.86,443.50L590.98,442.73L592.51,441.21L594.08,440.28L596.97,440.72L598.06,441.70L600.45,442.35L603.33,442.14L605.29,443.12L607.36,443.82L610.19,443.17L611.17,441.97L613.67,441.48L616.55,440.56L619.27,440.18L622.54,439.63L624.71,439.03L627.00,438.38L629.18,437.78L631.79,438.11L634.29,437.13L636.09,436.37L638.70,436.42L640.98,435.77L641.53,434.79L643.87,434.03L646.15,433.48L648.93,433.05L651.48,432.83L653.93,432.99L656.54,433.26L658.77,434.03L659.04,435.22L661.49,436.15L663.18,436.91L666.50,437.24L668.35,438.00L670.63,438.76L673.30,438.92L675.53,438.38L677.92,437.24L680.53,437.84L683.25,438.16L685.87,438.49L688.59,438.71L691.36,438.71L693.65,441.59L693.54,442.30L693.21,443.55L690.55,444.26L688.37,445.29L688.75,446.38L691.85,446.33L691.47,447.42L690.06,448.45L688.75,449.59L690.87,450.46L694.08,450.74L697.29,450.25L698.81,449.16L699.74,448.12L701.26,447.25L703.00,446.44L703.71,445.46L705.18,444.09L706.92,443.82L710.08,443.71L712.85,443.39L715.68,442.95L717.04,441.86L717.86,440.83L719.76,439.80L722.48,439.09L724.82,438.54L726.34,437.62L727.92,437.13L729.93,436.69L732.71,436.96L735.21,436.69L737.93,436.37L740.98,436.53L742.99,435.77L744.41,433.92L745.44,434.68L746.75,435.98L749.09,436.53L751.75,436.75L754.42,436.42L757.25,436.64L759.86,436.69L761.60,436.42L763.94,436.58L766.06,437.18L768.56,436.80L771.55,436.80L774.11,436.42L776.99,436.80L778.84,435.88L780.26,434.95L782.16,434.19L785.65,432.12L787.44,432.50L789.56,433.26L791.41,434.24L794.95,435.93L797.67,435.98L800.23,435.98L803.22,435.66L806.21,435.28L808.50,434.52L810.40,433.70L813.50,433.59L815.57,432.99L817.74,433.54L819.16,434.41L821.12,435.28L824.16,435.17L826.07,435.88L829.39,436.58L832.87,436.86L835.75,436.64L837.93,435.77L839.78,434.90L842.28,434.68L844.78,435.06L847.67,435.33L850.28,434.90L852.78,434.90L855.23,435.17L857.79,435.44L860.29,434.95L863.28,434.52L866.11,434.41L869.27,434.41L871.82,434.13L874.33,433.92L875.09,432.56L875.20,431.41L876.94,432.17L877.43,433.43L878.35,434.57L879.49,435.49L881.83,435.98L884.99,435.82L888.63,435.77L891.14,435.60L894.78,435.60L897.39,435.55L901.04,435.66L904.14,435.88L906.10,436.75L905.55,437.78L907.35,438.60L910.34,439.25L913.44,439.96L917.03,440.45L920.79,440.88L923.62,441.32L926.77,441.37L928.57,440.45L931.02,441.21L933.14,442.08L935.59,442.73L938.96,443.01L942.17,443.33L943.53,444.42L946.69,445.07L948.81,446.05L951.91,446.49L955.12,446.44L958.11,446.60L961.43,446.54L964.75,446.76L967.85,447.14L970.73,447.80L973.62,448.34L975.57,449.16L975.25,450.25L973.78,451.23L972.53,452.48L971.55,453.46L970.24,454.60L966.60,455.04L964.97,456.02L961.37,456.61L960.12,457.70L958.22,458.74L956.21,459.61L955.06,460.75L954.36,461.78L954.08,463.04L954.14,464.07L955.72,465.16L956.31,466.19L957.62,467.17L962.79,467.55L963.88,468.75L958.87,469.19L954.63,469.79L949.35,469.90L947.01,471.47L946.52,472.78L945.32,473.81L943.86,474.85L947.56,475.77L948.97,476.92L951.36,477.95L954.74,478.88L958.60,479.75L962.79,480.62L969.15,481.49L970.57,482.85L978.57,483.45L979.10,483.66L981.18,484.48L988.85,483.77L995.21,484.65L1000.00,485.31L1000.00,500.00L0.00,500.00L0.00,485.31L0.16,485.34L2.61,483.72L7.62,484.59L7.94,484.49L8.72,484.26L9.66,483.98L10.47,483.73L10.88,483.61L11.29,483.62L11.58,483.66L15.60,484.82L19.12,483.66L19.75,483.50L27.91,483.01L30.56,483.66L31.86,483.99L36.05,484.92L43.94,485.63L50.20,486.50L60.91,487.15L68.91,486.39L80.72,486.93L87.41,487.80L94.75,486.99L102.48,486.22L103.08,484.92L92.14,484.81L83.16,484.16L80.83,483.07L73.37,482.47L73.86,481.22L74.90,480.07L75.93,479.04L75.38,477.90L70.76,477.13L68.64,476.15L64.34,475.28L71.09,475.45L77.51,475.01L81.53,475.94L86.48,475.12L91.05,474.09L93.28,473.16L92.30,472.02L88.71,471.26L84.63,470.44L78.92,470.28L73.92,469.90L68.53,469.62L66.73,468.59L63.14,467.72L60.97,466.74L60.10,463.58L61.46,463.85L63.96,464.72L68.53,464.45L72.94,464.07L75.22,465.27L79.63,465.00L83.33,464.40L86.81,463.64L89.97,462.71L94.15,462.44L94.05,461.40L93.07,460.37L93.88,459.39L97.47,458.90L99.11,459.83L103.35,459.28L106.56,458.57L110.53,458.52L114.28,458.25L118.04,457.59L121.03,457.00L124.40,456.40L126.58,456.56L128.48,456.78L132.62,456.40L136.32,456.89L140.13,456.83L143.77,456.45L147.53,456.72L151.66,457.00L155.52,456.89L159.55,456.94L163.68,457.00L167.49,456.89L170.32,456.07L173.69,455.63L177.18,456.23L180.50,455.74L183.49,454.76L185.28,455.63L186.26,456.61L188.06,457.54L190.94,456.72L194.26,457.76L198.01,458.08L201.22,458.85L205.14,458.68L208.68,458.19L212.87,458.30L216.62,458.68L220.43,459.17L221.90,457.97L220.10,457.05L218.74,456.07L215.15,455.85L213.57,454.82L212.98,453.78L212.00,451.72L214.12,452.10L217.76,452.26L221.35,452.10L224.62,452.53L227.45,453.35L228.64,454.33L232.40,454.49L235.99,454.11L239.80,453.57L243.22,453.24L246.05,453.89L249.75,453.67L252.15,451.55L254.38,452.80L257.59,453.29L261.07,453.02L263.35,454.11L267.00,454.22L270.37,454.55L273.69,455.14L275.87,454.11L276.96,453.13L279.73,454.22L283.54,453.95L286.37,454.55L288.27,455.47L291.97,455.20L294.86,454.60L297.68,453.89L301.06,453.51L304.97,453.18L308.51,452.80L311.23,452.21L312.86,451.33L313.52,450.14L313.19,448.99L312.32,447.91L311.34,446.82L310.47,445.73L309.76,444.75L309.60,443.66L309.87,442.57L311.18,441.54L312.27,440.39L312.70,439.31L312.16,438.11L311.83,437.02L313.19,435.77L314.71,434.95L316.51,433.92L318.41,433.05L320.64,432.23L321.73,431.03L323.26,430.27L325.00,429.56L327.66,429.40L329.40,428.53L331.36,427.98L333.65,427.66L335.66,426.95L337.24,426.08L339.41,425.75L341.05,426.46L340.01,427.38L337.18,428.20Z","M311.81,399.58L315.42,401.25L319.31,401.94L318.06,403.33L315.42,403.47L314.00,402.49L313.08,403.61L310.70,404.48L307.69,404.16L305.67,403.33L302.76,402.93L299.27,401.38L296.43,399.88L292.60,396.77L294.89,397.35L298.79,399.21L302.48,400.21L303.91,398.93L304.81,397.03L307.37,395.88L309.35,396.21L309.35,396.21L310.42,397.50L311.81,399.58Z","M337.36,391.94L339.58,393.19L338.75,394.17L335.00,395.00L333.75,394.03L331.39,395.28L330.00,394.03L333.33,392.36L335.69,393.06L337.36,391.94Z","M695.22,388.08L690.96,388.26L690.89,386.78L691.30,385.64L691.49,385.07L693.28,385.94L695.90,386.29L696.00,386.82L695.22,388.08Z","M903.88,363.31L906.57,364.27L908.08,363.89L910.25,363.36L911.91,363.54L912.11,366.84L911.16,367.80L910.87,370.03L909.90,369.27L907.97,371.21L907.40,371.06L905.69,370.97L903.98,368.59L903.60,366.76L901.99,364.34L902.07,363.07L903.88,363.31Z","M980.61,363.66L981.24,364.81L983.22,363.69L984.02,364.86L984.02,366.03L982.99,367.31L981.17,369.36L979.75,370.48L980.78,371.81L978.63,371.85L976.26,372.90L975.51,374.71L973.94,377.52L971.75,378.77L970.37,379.56L967.81,379.50L966.01,378.58L962.99,378.39L962.53,377.37L964.02,375.31L967.51,372.57L969.30,372.04L971.30,370.99L973.68,369.53L975.35,368.09L976.58,366.02L977.64,365.32L978.05,363.77L980.00,362.48L980.61,363.66Z","M985.03,350.43L987.05,353.36L987.10,351.46L988.36,352.22L988.77,354.32L991.01,355.23L992.89,355.45L994.47,354.39L995.88,354.71L995.21,357.17L994.36,358.80L992.24,358.74L991.50,359.58L991.76,360.78L991.35,361.29L990.30,362.79L988.92,364.69L986.78,365.80L986.30,365.07L985.14,364.67L986.74,362.39L985.83,360.86L982.84,359.75L982.92,358.74L984.93,357.77L985.40,355.63L985.27,353.84L984.14,351.98L984.22,351.49L982.89,350.34L980.71,347.88L979.54,345.91L980.58,345.70L982.09,347.24L984.25,347.96L985.03,350.43Z","M964.22,311.56L963.17,312.22L961.64,311.47L959.65,310.22L957.86,308.75L956.02,306.79L955.64,305.85L956.83,305.89L958.39,306.83L959.61,307.78L960.50,308.56L962.78,310.28L964.22,311.56Z","M995.48,298.17L996.44,298.97L995.98,300.42L994.26,300.80L992.73,300.46L992.46,299.24L993.53,298.28L994.79,298.62L995.48,298.17Z","M998.23,296.67L996.46,297.26L996.10,296.22L997.49,295.65L998.37,295.50L1000.00,294.63L1000.00,295.99L998.23,296.67Z","M0.23,295.84L0.00,295.99L0.00,294.63L0.57,294.50L0.23,295.84Z","M966.24,295.74L965.32,296.11L964.39,294.89L964.49,294.14L966.24,295.74Z","M964.19,291.48L964.64,293.72L963.89,293.37L963.31,293.52L962.92,292.76L962.86,290.63L964.19,291.48Z","M639.05,287.65L639.49,291.00L640.21,292.30L639.94,293.63L639.45,294.45L638.50,292.82L637.98,293.64L638.51,295.70L638.26,296.88L637.50,297.52L637.32,299.87L636.23,303.11L634.86,306.94L633.14,312.20L632.08,316.06L630.82,319.28L628.56,319.94L626.14,321.12L624.54,320.41L622.33,319.41L621.57,317.95L621.38,315.48L620.40,313.27L620.15,311.27L620.65,309.27L621.93,308.79L621.93,307.86L623.26,305.76L623.51,303.99L622.87,302.67L622.34,300.92L622.12,298.36L623.09,296.81L623.46,295.05L624.85,294.94L626.40,294.37L627.42,293.87L628.65,293.83L630.23,292.25L632.51,290.54L633.35,289.14L632.97,287.96L634.15,288.29L635.68,286.36L635.73,284.69L636.65,283.45L637.62,284.64L638.36,285.82L639.05,287.65Z","M898.78,288.23L899.78,290.41L901.57,289.36L902.49,290.54L903.82,291.62L903.53,292.86L904.13,295.24L904.55,296.62L905.25,296.96L906.00,299.34L905.73,300.78L906.63,302.66L909.64,304.11L911.60,305.43L913.47,306.64L913.10,307.32L914.69,309.06L915.77,312.06L916.88,311.45L918.01,312.66L918.69,312.23L919.17,315.17L921.14,316.88L922.43,317.94L924.60,320.19L925.38,322.42L925.45,324.00L925.26,325.72L926.58,328.08L926.42,330.54L925.94,331.83L925.19,334.31L925.25,335.90L924.70,337.89L923.47,340.42L921.41,341.78L920.40,343.93L919.47,345.31L918.65,347.70L917.58,349.09L916.88,351.17L916.52,353.08L916.66,353.96L915.07,354.92L911.96,355.03L909.39,356.16L908.12,357.24L906.44,358.43L904.14,357.20L902.44,356.72L902.87,355.27L901.35,355.79L898.92,357.80L896.52,357.05L894.94,356.61L893.35,356.41L890.66,355.61L888.87,353.90L888.35,351.79L887.71,350.38L886.34,349.26L883.67,348.92L884.58,347.58L883.91,345.51L882.55,347.44L880.08,347.95L881.53,346.41L881.96,344.81L883.03,343.45L882.81,341.39L880.55,343.76L878.81,344.71L877.75,346.92L875.58,345.77L875.66,344.30L873.93,342.29L872.46,341.24L872.98,340.60L869.42,338.92L867.47,338.84L864.80,337.49L859.82,337.75L856.22,338.75L853.06,339.67L850.41,339.49L847.47,340.91L845.06,341.55L844.52,343.01L843.50,344.14L841.14,344.21L839.40,344.45L836.94,343.95L834.95,344.25L833.04,344.38L831.39,345.86L830.58,345.73L829.18,346.52L827.85,347.40L825.82,347.29L823.96,347.29L821.01,345.52L819.52,344.99L819.58,343.40L820.96,343.02L821.43,342.39L821.33,341.39L821.67,339.46L821.36,337.81L819.89,335.00L819.44,333.42L819.56,331.84L818.45,330.03L818.38,329.21L817.15,328.11L816.80,325.93L815.22,323.73L814.83,322.55L816.05,323.75L815.11,321.17L816.49,321.98L817.31,323.05L817.27,321.63L815.89,319.44L815.63,318.57L814.98,317.74L815.28,316.13L815.85,315.45L816.23,314.06L815.93,312.43L817.08,310.43L817.29,312.55L818.47,310.64L820.72,309.71L822.08,308.52L824.20,307.50L825.46,307.29L826.23,307.63L828.42,306.60L830.10,306.29L830.52,305.68L831.26,305.42L832.79,305.49L835.71,304.68L837.22,303.44L837.93,301.96L839.56,300.55L839.69,299.44L839.76,297.93L841.70,295.57L842.87,297.97L844.05,297.41L843.06,296.10L843.94,294.75L845.16,295.36L845.50,293.24L847.02,291.88L847.69,290.78L849.08,290.31L849.13,289.53L850.35,289.85L850.40,289.16L851.62,288.76L852.96,288.38L855.01,289.66L856.55,291.30L858.29,291.32L860.06,291.58L859.47,290.06L860.80,287.83L862.05,287.10L861.62,286.41L862.83,284.82L864.51,283.84L865.93,284.17L868.26,283.65L868.21,282.23L866.18,281.32L867.66,280.91L869.50,281.60L870.97,282.74L873.31,283.45L874.11,283.17L875.83,284.02L877.45,283.23L878.50,283.47L879.15,282.94L880.42,284.31L879.68,285.80L878.63,286.92L877.67,287.01L877.99,288.12L877.18,289.51L876.19,290.88L876.39,291.66L878.60,293.20L880.74,294.09L882.17,295.04L884.18,296.69L884.96,296.69L886.41,297.40L886.83,298.25L889.49,299.20L891.32,298.25L891.86,296.76L892.43,295.52L892.77,294.00L893.62,291.79L893.23,290.45L893.43,289.64L893.11,288.05L893.47,285.96L894.01,285.39L893.57,284.47L894.25,282.99L894.77,281.47L894.84,280.67L895.88,279.63L896.66,280.99L896.85,282.74L897.54,283.07L897.66,284.24L898.67,285.65L898.88,287.22L898.78,288.23Z","M950.33,279.12L951.11,280.07L949.17,280.06L948.11,278.35L949.77,279.02L950.33,279.12Z","M835.32,278.44L834.15,278.50L830.47,276.55L833.06,276.00L834.52,276.85L835.49,277.69L835.32,278.44Z","M946.81,277.42L945.73,277.49L944.03,277.21L943.44,276.78L943.62,275.67L945.45,276.11L946.36,276.69L946.81,277.42Z","M949.11,276.67L948.69,277.18L946.63,274.77L946.06,273.11L947.00,273.11L948.00,275.33L949.11,276.67Z","M845.66,278.17L843.28,278.78L842.94,278.44L843.19,277.50L844.39,275.81L847.14,274.70L847.46,274.05L849.85,273.42L851.79,273.33L852.66,272.98L853.71,273.33L852.69,274.08L849.79,275.29L847.47,276.09L845.66,278.17Z","M827.50,272.49L828.50,273.23L830.22,273.00L830.91,274.18L827.70,274.74L825.77,275.11L824.28,275.09L825.23,273.49L826.76,273.47L827.50,272.49Z","M841.40,272.48L840.99,274.03L836.82,274.82L833.12,274.47L833.11,273.46L835.32,272.88L837.06,273.71L838.91,273.50L841.40,272.48Z","M944.10,273.16L944.22,273.72L942.04,272.54L940.52,271.54L939.48,270.62L939.89,270.33L941.17,271.00L943.44,272.28L944.10,273.16Z","M937.61,270.41L937.05,270.57L935.84,269.94L934.70,268.79L934.84,268.33L936.50,269.50L937.61,270.41Z","M801.73,268.83L807.05,269.10L807.67,267.96L812.82,269.29L813.83,271.10L818.00,271.60L821.40,273.25L818.23,274.31L815.18,273.19L812.67,273.27L809.78,273.06L807.18,272.56L803.97,271.50L801.93,271.23L800.77,271.57L795.71,270.43L795.22,269.24L792.68,269.03L794.59,266.38L797.96,266.54L800.20,267.63L801.35,267.84L801.73,268.83Z","M874.24,267.26L872.81,269.15L872.54,267.06L873.03,266.06L873.61,265.13L874.24,265.94L874.24,267.26Z","M933.00,268.94L932.22,269.22L931.02,268.16L929.80,266.39L929.21,264.28L929.59,264.01L929.89,264.83L930.73,265.46L932.08,267.22L933.39,268.17L933.00,268.94Z","M922.17,265.22L920.72,265.45L920.28,266.22L918.76,266.90L917.34,267.55L915.86,267.55L913.58,266.74L912.00,265.96L912.23,265.10L914.72,265.51L916.24,265.29L916.66,263.96L917.05,263.89L917.32,265.37L918.91,265.16L919.69,264.20L921.24,263.21L920.94,261.58L922.60,261.52L923.16,261.98L923.11,263.52L922.17,265.22Z","M853.47,259.61L852.43,260.53L850.51,260.02L849.97,258.83L852.78,258.69L853.47,259.61Z","M862.42,258.59L863.43,260.72L861.08,259.57L858.76,259.34L857.20,259.52L855.27,259.43L855.93,257.90L859.36,257.78L862.42,258.59Z","M925.39,262.50L924.52,263.24L924.00,261.60L923.35,260.53L922.09,259.62L920.51,258.43L918.51,257.62L919.28,256.94L920.78,257.72L921.72,258.33L922.89,259.00L924.00,260.17L925.06,261.06L925.39,262.50Z","M872.62,253.20L873.40,257.69L876.27,259.35L878.59,256.41L881.78,254.73L884.25,254.73L886.62,255.70L888.69,256.69L891.67,257.22L896.49,259.14L901.62,260.73L903.54,262.15L905.08,263.55L905.51,265.18L910.13,266.90L910.81,268.37L908.25,268.67L908.87,270.52L911.35,272.34L913.15,275.29L914.74,275.20L914.63,276.43L916.77,276.90L915.94,277.42L918.89,278.59L918.58,279.40L916.75,279.59L916.06,278.87L913.68,278.56L910.87,278.14L908.71,276.37L907.13,274.84L905.69,272.41L902.07,271.19L899.71,271.99L898.02,272.90L898.37,274.95L896.19,275.91L894.63,275.44L891.76,275.33L889.29,273.05L886.47,272.49L885.78,273.28L882.26,273.37L883.44,271.11L885.19,270.33L884.47,267.31L883.13,264.98L877.75,262.63L875.46,262.40L871.29,259.83L870.47,261.18L869.40,261.42L868.77,260.41L868.76,259.20L866.64,257.83L869.63,256.83L871.61,256.89L871.38,256.15L867.31,256.15L866.21,254.49L863.73,253.98L862.55,252.60L866.30,251.93L867.72,251.03L872.18,252.17L872.62,253.20Z","M847.89,246.06L845.66,248.81L843.57,249.35L840.90,248.80L836.27,248.94L833.84,249.34L833.45,251.44L835.93,253.91L837.43,252.66L842.61,251.71L842.38,252.99L841.17,252.59L839.97,254.21L837.52,255.29L840.15,258.85L839.64,259.80L842.14,263.01L842.12,264.84L840.63,265.65L839.55,264.67L840.89,262.40L838.16,263.48L837.47,262.71L837.83,261.63L835.83,260.01L836.03,257.30L834.18,258.14L834.42,261.38L834.53,265.36L832.77,265.76L831.57,264.94L832.37,262.39L831.94,259.71L830.77,259.69L829.91,257.78L831.06,255.96L831.45,253.76L832.85,249.57L833.43,248.43L835.79,246.36L837.96,247.18L841.47,247.57L844.66,247.45L847.41,245.44L847.89,246.06Z","M857.47,246.85L857.32,249.28L855.89,249.01L855.47,250.70L856.61,252.17L855.83,252.50L854.71,250.74L853.89,247.19L854.45,244.97L855.37,243.96L855.57,245.48L857.21,245.72L857.47,246.85Z","M793.94,266.26L790.86,266.31L788.52,263.99L784.96,261.72L783.77,260.04L781.66,257.78L780.28,255.70L778.17,251.81L775.73,249.49L774.92,247.10L773.89,244.93L771.39,243.19L769.94,240.81L767.84,239.25L764.95,236.19L764.70,234.78L766.49,234.89L770.79,235.43L773.25,238.14L775.40,240.03L776.93,241.18L779.56,244.17L782.38,244.21L784.72,246.11L786.32,248.44L788.44,249.71L787.33,251.98L788.92,252.94L789.92,253.01L790.39,254.95L791.36,256.50L793.39,256.75L794.75,258.50L794.05,261.96L793.94,266.26Z","M827.43,244.92L830.55,247.49L827.26,247.82L826.33,249.72L826.45,252.23L823.78,254.13L823.70,256.90L822.63,261.15L822.22,260.16L819.07,261.41L817.97,259.71L815.99,259.55L814.60,258.66L811.30,259.66L810.29,258.32L808.47,258.47L806.18,258.15L805.75,254.42L804.37,253.65L803.03,251.28L802.65,248.85L802.97,246.27L804.62,244.43L806.66,245.38L808.80,244.86L809.36,242.51L810.55,241.98L813.88,241.38L815.87,239.18L817.23,237.43L818.33,236.39L820.70,234.87L822.84,232.94L824.24,230.76L825.36,230.76L826.79,232.16L826.91,233.37L828.74,234.14L831.06,234.98L830.86,236.07L829.00,236.20L829.50,237.56L827.45,238.51L825.87,241.02L827.91,243.65L827.43,244.92Z","M851.05,226.63L851.33,228.47L851.49,230.03L850.55,232.57L849.53,229.74L848.23,231.15L849.12,233.20L848.32,234.50L845.05,232.89L844.27,230.87L845.12,229.55L843.36,228.24L842.49,229.39L841.18,229.29L839.13,230.83L838.67,230.02L839.76,227.68L841.51,226.90L843.02,225.85L844.00,227.11L846.12,226.35L846.57,225.11L848.53,225.04L848.37,222.89L850.62,224.21L850.85,225.60L851.05,226.63Z","M725.61,232.79L723.19,233.42L721.87,231.21L721.38,227.22L722.63,222.71L724.55,224.25L725.85,226.21L727.19,229.10L726.77,232.00L725.61,232.79Z","M330.74,221.92L328.42,222.22L327.92,221.97L328.72,221.21L328.67,220.11L330.26,219.75L330.85,219.85L330.74,221.92Z","M844.40,221.45L843.40,222.36L842.53,224.12L841.66,224.94L839.94,223.02L840.52,222.27L841.21,221.50L841.52,219.77L843.05,219.61L842.60,221.48L844.66,218.80L844.40,221.45Z","M829.18,224.12L825.48,226.76L826.85,224.81L828.85,223.10L830.52,221.18L831.98,218.42L832.47,220.68L830.64,222.21L829.18,224.12Z","M838.57,216.97L840.23,217.83L842.00,217.82L841.95,218.98L840.66,220.16L838.90,221.00L838.80,219.71L839.00,218.29L838.57,216.97Z","M848.62,216.21L849.40,219.32L847.26,218.58L847.31,219.51L847.99,221.23L846.67,221.85L846.56,219.89L845.72,219.75L845.28,218.07L846.92,218.29L846.88,217.24L845.19,215.12L847.85,215.18L848.62,216.21Z","M837.58,213.70L836.84,216.10L835.65,214.71L834.23,212.59L836.61,212.70L837.58,213.70Z","M837.00,198.60L838.72,199.39L839.57,198.67L839.82,199.38L839.37,200.53L840.32,202.52L839.59,204.83L837.95,205.75L837.51,207.99L838.14,210.20L839.61,210.50L840.84,210.18L844.31,211.72L844.04,213.23L844.95,213.90L844.66,215.18L842.49,213.81L841.47,212.35L840.75,213.37L838.99,211.71L836.46,212.12L835.08,211.51L835.22,210.36L836.09,209.65L835.26,209.01L834.90,210.01L833.53,208.41L833.11,207.20L833.01,204.55L834.13,205.46L834.42,201.11L835.32,198.60L837.00,198.60Z","M317.80,199.37L317.09,200.07L315.00,200.05L313.38,200.15L313.22,198.96L313.61,198.55L315.88,198.57L317.30,198.81L317.80,199.37Z","M286.38,200.37L285.54,200.83L283.98,200.38L282.40,199.37L282.73,198.74L283.90,198.54L284.53,198.64L286.40,198.89L287.87,199.55L288.33,200.31L286.38,200.37Z","M298.39,194.80L300.80,195.24L301.15,194.76L303.31,194.78L304.96,195.49L305.69,195.42L306.20,196.41L307.72,196.35L307.63,197.18L308.86,197.28L310.23,198.30L309.20,199.43L307.88,198.83L306.60,198.94L305.69,198.81L305.19,199.32L304.12,199.49L303.70,198.81L302.78,199.21L301.67,201.12L300.95,200.67L300.81,199.88L298.97,199.40L297.65,199.60L295.96,199.39L294.66,199.91L293.17,199.05L293.42,198.15L295.97,198.54L298.07,198.76L299.07,198.14L297.80,196.94L297.82,195.88L296.07,195.45L296.70,194.68L298.39,194.80Z","M806.50,198.12L804.10,199.45L801.82,198.59L801.74,196.20L803.11,194.94L806.14,194.16L807.74,194.23L808.36,195.29L807.14,196.51L806.50,198.12Z","M67.94,196.99L67.53,197.46L66.84,197.06L66.92,196.28L66.46,195.27L66.60,194.96L67.08,194.51L66.89,193.96L67.05,193.70L67.26,193.75L68.33,194.22L68.82,194.46L69.27,194.84L69.98,195.81L69.91,195.96L68.83,196.56L67.94,196.99Z","M66.45,192.66L65.52,192.85L65.04,192.27L64.72,192.04L64.69,191.87L64.97,191.63L65.95,191.90L66.68,192.32L66.45,192.66Z","M64.56,191.18L64.47,191.48L62.99,191.40L63.19,191.06L64.56,191.18Z","M62.08,190.77L61.92,190.93L61.73,190.90L60.76,190.80L60.41,190.17L60.30,190.06L61.04,189.68L61.27,189.85L62.08,190.77Z","M57.37,188.94L57.05,189.21L56.11,188.71L56.25,188.50L56.68,188.23L57.32,188.29L57.37,188.94Z","M278.67,186.76L279.77,187.78L282.37,187.47L283.35,188.12L285.70,189.84L287.43,191.09L288.35,191.05L290.00,191.62L289.80,192.40L291.85,192.52L293.95,193.65L293.62,194.30L291.77,194.66L289.90,194.80L287.99,194.58L284.01,194.85L285.87,193.30L284.74,192.57L282.95,192.39L281.99,191.59L281.33,190.01L279.76,190.11L277.17,189.37L276.34,188.79L272.72,188.36L271.75,187.81L272.79,187.12L270.07,186.98L268.07,188.42L266.92,188.46L266.52,189.14L265.15,189.44L263.96,189.18L265.42,188.32L266.03,187.32L267.28,186.70L268.70,186.16L270.80,185.89L271.48,185.59L273.88,185.79L276.06,185.82L278.67,186.76Z","M284.63,184.00L283.94,184.14L283.24,182.54L282.20,181.73L282.80,179.97L283.64,180.08L284.61,182.39L284.63,184.00Z","M836.60,186.69L835.41,188.97L833.94,186.63L833.63,184.57L835.26,181.84L837.49,179.73L838.75,180.56L838.27,182.24L836.60,186.69Z","M283.83,176.17L280.81,176.61L280.61,175.58L281.92,175.36L283.75,175.44L283.83,176.17Z","M286.11,176.14L285.63,178.11L285.12,177.76L285.17,176.31L283.92,175.21L283.92,174.89L286.11,176.14Z","M874.00,155.14L874.35,156.09L872.79,157.77L871.65,156.88L870.22,157.53L869.49,159.15L867.68,158.36L867.70,157.05L869.23,155.39L870.81,155.71L871.96,154.54L874.00,155.14Z","M596.05,150.91L594.17,152.10L594.37,152.62L594.46,152.84L591.61,153.97L590.25,153.61L589.60,152.49L590.92,152.39L591.12,152.37L591.52,151.70L593.52,151.74L596.05,150.91Z","M565.83,150.82L567.35,151.76L569.51,151.60L571.58,151.79L571.51,152.28L573.03,151.94L572.68,152.76L568.68,153.00L568.71,152.54L565.32,152.00L565.83,150.82Z","M543.11,143.80L542.11,145.99L542.53,146.85L541.94,148.28L539.82,147.23L538.41,146.93L534.53,145.52L534.92,144.09L538.17,144.35L541.00,144.04L543.11,143.80Z","M525.58,135.53L527.25,137.50L526.86,141.17L525.60,141.00L524.46,141.93L523.41,141.19L523.30,137.84L522.67,136.25L524.19,136.39L525.58,135.53Z","M891.60,146.83L890.55,149.04L891.04,150.44L889.59,152.39L886.04,153.70L881.16,153.87L877.20,157.04L875.34,155.97L875.22,153.90L870.39,154.51L867.10,155.82L863.85,155.87L866.67,157.92L864.81,162.64L863.02,163.81L861.67,162.73L862.35,160.22L860.60,159.42L859.47,157.51L862.09,156.66L863.55,154.91L866.35,153.47L868.38,151.57L873.91,150.75L876.88,151.31L879.79,146.38L881.64,147.70L885.72,144.92L887.30,143.84L889.04,140.45L888.56,137.32L889.74,135.57L892.69,135.06L894.21,138.91L894.12,141.16L891.55,143.96L891.60,146.83Z","M526.56,132.91L525.64,135.06L524.38,134.49L523.73,132.62L524.29,131.59L526.08,130.53L526.56,132.91Z","M899.75,127.29L901.70,127.89L903.67,126.71L904.29,129.83L900.17,130.59L897.73,133.35L893.37,131.45L891.85,134.49L888.76,134.53L888.38,131.77L889.76,129.63L892.72,129.48L893.53,125.63L894.35,123.47L897.62,126.36L899.75,127.29Z","M323.15,120.69L325.17,121.07L327.74,120.99L326.38,122.13L325.35,122.31L321.83,121.13L321.13,120.20L322.18,119.34L323.15,120.69Z","M328.32,113.60L326.96,113.65L323.36,112.78L320.78,111.46L321.74,111.23L325.39,111.93L328.23,113.09L328.32,113.60Z","M156.92,115.25L155.52,115.64L150.96,114.37L150.13,113.39L147.64,112.42L147.14,111.63L144.28,111.13L143.21,109.61L143.45,108.97L146.37,109.58L148.07,110.00L150.68,110.29L151.62,111.25L153.00,112.57L155.77,113.72L156.92,115.25Z","M344.07,109.20L342.23,111.63L344.05,110.69L345.91,111.29L344.94,112.26L347.40,113.02L348.68,112.34L351.45,113.20L350.59,115.23L352.54,114.76L352.89,116.23L353.76,117.96L352.59,120.40L351.33,120.50L349.50,119.98L350.11,117.71L349.33,117.35L346.11,119.76L344.45,119.67L346.41,118.36L343.75,117.69L340.76,117.85L335.37,117.77L334.95,116.95L336.68,115.97L335.47,115.21L337.80,113.54L340.67,109.12L342.39,107.53L344.80,106.58L346.09,106.70L345.55,107.45L344.07,109.20Z","M131.36,99.89L131.36,99.89L131.36,99.89L131.36,99.89L134.03,99.67L133.20,102.82L135.61,105.05L134.51,105.05L132.83,103.78L131.81,102.50L130.40,101.63L129.89,100.41L130.06,99.53L131.36,99.89Z","M899.02,109.03L901.82,113.95L897.71,113.04L896.00,117.05L898.70,119.90L898.63,121.84L896.52,120.16L894.70,122.31L894.19,119.98L894.50,117.28L894.18,114.28L894.82,112.18L894.94,108.47L893.32,105.73L893.56,101.94L896.13,100.66L895.03,99.37L896.26,98.98L896.99,100.82L897.95,103.50L897.88,106.23L899.02,109.03Z","M481.14,104.83L476.22,106.47L472.29,106.05L474.54,103.15L473.09,100.33L476.87,98.15L478.97,96.86L481.29,96.74L484.27,98.46L482.78,100.37L483.24,102.35L481.14,104.83Z","M535.25,95.53L533.58,97.78L530.68,96.21L530.29,95.06L534.36,94.13L535.25,95.53Z","M74.98,91.34L72.21,92.40L70.79,91.69L70.36,90.39L72.88,89.40L74.36,88.98L76.21,89.16L77.39,90.02L74.98,91.34Z","M491.65,87.13L488.68,90.13L491.51,89.75L494.56,89.76L493.83,92.03L491.34,94.52L494.21,94.69L496.90,98.26L498.80,98.71L500.51,101.87L501.31,102.97L504.67,103.50L504.33,105.28L502.92,106.09L504.03,107.53L501.53,108.98L497.81,108.96L493.08,109.72L491.79,109.18L489.95,110.48L487.38,110.16L485.43,111.22L483.95,110.67L488.03,107.75L490.51,107.15L486.15,106.68L485.37,105.58L488.27,104.72L486.75,103.22L487.28,101.40L491.41,101.65L491.82,100.04L489.92,98.29L486.54,97.80L485.88,97.05L486.89,95.81L485.98,95.04L484.48,96.36L484.32,93.68L482.92,92.26L483.93,89.39L486.08,87.14L488.30,87.36L491.65,87.13Z","M40.06,83.58L38.35,84.02L36.53,83.50L34.85,82.74L37.59,82.27L39.79,82.52L40.06,83.58Z","M279.82,77.34L278.73,78.80L277.50,78.56L276.77,77.73L276.90,77.54L277.97,76.71L279.11,76.77L279.82,77.34Z","M272.50,75.80L269.25,77.34L267.29,77.27L266.68,76.52L268.75,75.24L272.56,75.27L272.50,75.80Z","M22.97,72.83L24.68,73.36L26.41,73.07L28.66,73.80L31.42,74.17L31.19,74.48L29.08,75.06L26.97,74.46L25.91,73.96L23.46,74.12L22.80,73.87L22.97,72.83Z","M263.44,67.62L263.96,68.84L265.38,68.41L266.99,69.14L270.03,70.09L273.22,70.96L273.46,72.28L275.51,72.06L277.49,72.98L275.02,73.86L270.70,73.19L269.14,71.94L266.39,73.42L262.43,74.85L261.48,73.23L257.72,73.50L260.13,72.12L260.49,69.94L261.43,67.39L263.44,67.62Z","M459.70,65.40L459.06,67.20L462.20,69.09L458.58,71.21L450.57,73.11L448.18,73.62L444.52,73.21L436.77,72.33L439.50,71.11L433.46,69.75L438.38,69.21L438.26,68.39L432.43,67.75L434.30,65.94L438.51,65.53L442.84,67.41L447.06,65.90L450.56,66.68L455.09,65.20L459.70,65.40Z","M289.26,63.48L286.15,63.61L285.45,62.26L286.63,60.70L289.18,60.31L291.35,61.08L291.38,62.27L291.07,62.65L289.26,63.48Z","M13.85,65.04L15.72,65.73L15.08,63.72L22.62,64.13L28.06,66.73L25.30,67.94L20.75,68.23L20.68,70.94L19.57,71.52L16.97,71.44L14.85,70.47L11.16,69.66L10.54,68.45L7.71,68.00L4.56,68.36L3.05,67.39L3.65,66.36L0.32,67.02L1.58,68.32L0.00,69.50L0.00,58.43L6.81,60.56L14.09,63.32L13.85,65.04Z","M234.31,58.03L232.58,59.01L228.84,58.17L226.58,58.47L222.78,57.22L225.23,56.36L227.17,55.16L230.12,55.94L231.78,56.44L232.62,56.97L234.31,58.03Z","M1000.00,53.24L996.95,53.39L996.46,52.50L1000.00,51.35L1000.00,53.24Z","M3.63,53.07L0.00,53.24L0.00,51.35L0.36,51.23L2.71,51.23L6.73,52.03L6.49,52.41L3.63,53.07Z","M248.48,56.95L248.47,59.79L252.18,57.61L255.50,59.40L254.67,61.46L257.36,63.34L260.26,61.33L262.29,58.93L262.44,55.88L266.39,56.10L270.49,56.50L274.22,57.88L274.39,59.26L272.32,60.74L274.28,62.23L273.93,63.58L268.49,65.52L264.62,65.95L261.75,65.12L260.92,66.51L258.25,68.85L257.44,70.07L254.21,71.95L250.24,72.13L248.04,73.30L247.86,75.11L244.63,75.46L241.23,77.71L238.22,80.84L237.14,83.03L236.99,86.25L241.07,86.72L242.32,89.32L243.62,91.42L247.51,90.88L252.67,92.08L255.45,93.13L257.43,94.45L260.91,95.21L263.86,96.38L268.44,96.54L271.46,96.81L271.01,99.22L271.88,102.01L273.89,105.12L278.02,107.75L280.16,106.85L281.66,103.99L280.21,99.61L278.25,98.15L282.70,96.84L285.85,94.90L287.39,92.96L287.16,91.10L285.27,88.74L281.90,86.65L285.18,83.74L283.96,81.23L283.04,76.89L284.97,76.25L289.73,77.00L292.59,77.27L294.89,76.54L297.48,77.49L300.90,79.10L301.74,80.17L306.69,80.38L306.61,82.72L307.53,86.23L310.07,86.66L312.08,88.30L316.11,86.76L318.76,83.69L320.60,82.40L322.76,84.88L326.38,88.42L329.45,91.76L328.34,93.50L332.03,95.07L334.53,96.66L338.96,97.37L340.74,98.26L341.84,100.61L344.01,100.98L345.12,102.03L345.32,105.15L343.31,106.19L341.31,107.17L336.74,108.15L333.24,110.44L328.55,110.89L322.60,110.30L318.44,110.28L315.56,110.48L313.23,112.47L309.69,113.70L305.68,117.38L302.49,119.94L304.85,119.48L309.31,115.83L315.13,113.52L319.29,113.24L321.75,114.60L319.12,116.47L320.00,119.46L320.91,121.56L324.52,122.95L329.11,122.54L331.89,119.42L332.09,121.44L333.88,122.44L330.45,124.26L324.29,125.92L321.54,127.04L318.43,129.04L316.32,128.84L316.22,126.49L321.04,124.19L316.59,124.28L313.51,124.62L313.99,125.53L311.02,126.87L308.17,127.83L305.23,128.66L303.64,130.47L303.29,130.93L303.26,132.40L304.18,133.87L305.33,133.94L305.04,132.93L305.88,133.55L305.65,134.34L303.78,134.79L302.44,134.74L300.39,135.22L299.18,135.36L297.57,135.50L295.25,136.30L299.33,135.78L300.15,136.31L296.26,137.14L294.49,137.14L294.58,136.80L293.73,137.57L294.55,137.70L293.95,139.70L291.93,141.83L291.72,141.12L291.11,140.98L290.20,140.28L290.78,141.78L291.43,142.27L291.51,143.32L290.62,144.40L289.06,146.62L288.80,146.51L289.66,144.62L288.24,143.56L287.92,141.25L287.38,142.45L287.97,144.21L286.22,143.80L288.05,144.67L288.17,147.32L288.97,147.51L289.26,148.47L289.65,151.25L287.88,153.31L285.01,154.13L283.18,155.76L281.79,155.94L280.39,156.96L279.99,157.89L276.94,159.70L275.38,161.02L274.07,162.67L273.64,164.64L274.13,166.57L275.06,168.94L276.29,170.91L276.31,172.11L277.62,175.33L277.53,177.21L277.41,178.29L276.72,179.98L275.89,180.33L274.52,180.00L274.08,178.78L273.03,178.14L271.56,175.75L270.26,173.62L269.85,172.54L270.42,170.69L269.64,169.17L267.47,166.84L266.39,166.42L263.59,167.68L263.09,167.54L261.74,166.24L260.00,165.56L256.86,165.90L254.40,165.60L252.28,165.79L251.10,166.18L251.63,166.96L251.58,168.09L252.17,168.64L251.64,169.00L250.61,168.59L249.57,169.12L247.56,169.03L245.48,167.56L243.06,167.91L241.04,167.27L239.31,167.46L236.97,168.11L234.44,170.17L231.68,171.37L230.17,172.69L229.53,173.94L229.50,175.86L229.64,177.19L230.17,178.14L230.17,178.14L230.16,178.15L229.09,180.58L228.60,182.58L228.40,186.30L228.13,187.65L228.61,189.17L229.48,190.52L230.03,192.68L231.87,194.75L232.52,196.33L233.61,197.70L236.56,198.44L237.71,199.60L240.14,198.82L242.26,198.54L244.34,198.04L246.09,197.57L247.86,196.43L248.52,194.81L248.75,192.48L249.23,191.67L251.11,190.94L254.04,190.30L256.50,190.39L258.19,190.16L258.86,190.75L258.76,192.08L257.27,193.73L256.61,195.43L257.12,195.91L256.70,197.11L256.01,199.28L255.30,198.56L254.72,198.61L254.73,199.02L255.26,199.03L255.21,199.79L254.76,200.99L255.01,201.42L254.71,202.41L254.89,202.68L254.57,204.08L254.02,204.82L253.52,204.91L252.97,205.87L253.88,206.37L254.12,205.96L254.93,206.31L255.22,206.42L255.83,205.93L256.62,205.89L256.88,206.12L257.31,205.98L258.60,206.23L259.89,206.16L260.78,205.85L261.11,205.54L261.99,205.68L262.66,205.87L263.38,205.81L263.93,205.57L265.20,205.95L265.64,206.01L266.49,206.53L267.29,207.16L268.30,207.58L269.04,208.34L268.80,208.61L268.66,209.23L268.94,210.25L268.30,211.19L268.00,212.31L267.91,213.54L268.06,214.25L268.13,215.50L267.71,215.78L267.45,216.96L267.64,217.70L267.07,218.41L267.20,219.16L267.62,219.61L268.33,221.12L269.40,222.24L270.70,223.43L271.70,224.42L271.65,225.01L272.75,225.14L273.02,224.91L273.78,225.59L275.15,225.39L276.33,224.69L278.01,224.13L278.96,223.30L280.50,223.46L280.39,223.74L281.94,223.83L283.18,224.31L284.08,225.15L285.13,225.92L286.56,226.00L288.65,224.06L289.79,223.77L289.82,222.85L290.33,220.50L291.93,219.21L293.68,219.16L293.90,218.58L296.07,218.81L298.26,217.41L299.34,216.79L300.68,215.45L301.67,215.62L302.40,216.35L301.86,217.29L301.78,217.94L300.15,218.27L301.05,219.53L301.02,220.98L299.79,222.60L300.85,224.80L302.04,224.62L302.67,222.61L301.81,221.63L301.67,219.53L305.12,218.40L304.74,217.09L305.71,216.22L306.71,218.17L308.66,218.21L310.46,219.76L310.57,220.68L313.07,220.71L316.03,220.42L317.62,221.66L319.75,222.01L321.31,221.14L321.34,220.44L324.78,220.27L328.11,220.23L325.75,221.05L326.70,222.37L328.92,222.57L331.03,223.94L331.47,226.17L332.92,226.10L334.00,226.76L335.83,227.78L337.55,229.59L337.63,231.02L338.67,231.09L340.16,232.44L341.26,233.41L344.59,233.96L344.88,233.46L347.13,233.26L350.12,234.01L351.06,234.32L353.11,234.97L356.05,237.32L356.51,238.45L357.45,238.32L358.14,239.86L359.70,244.72L361.18,245.18L361.26,247.09L359.17,249.38L360.03,250.22L364.94,250.65L365.04,253.44L367.15,251.62L370.65,252.61L375.26,254.31L376.62,255.94L376.16,257.48L379.39,256.62L384.80,258.09L388.95,257.98L393.05,260.28L396.60,263.39L398.74,264.19L401.12,264.30L402.12,265.18L403.07,268.72L403.53,270.40L402.42,274.99L401.01,276.80L397.09,280.67L395.32,283.81L393.27,286.22L392.57,286.27L391.80,288.31L391.99,293.52L391.22,297.80L390.92,299.63L390.05,300.73L389.55,304.44L386.74,308.07L386.26,310.94L384.02,312.14L383.37,313.81L380.35,313.80L375.98,314.87L374.02,316.10L370.91,316.91L367.64,319.13L365.29,321.88L364.89,323.95L365.35,325.49L364.83,328.29L364.20,329.65L362.26,331.18L359.18,336.07L356.73,338.27L354.84,339.57L353.58,342.21L351.74,343.80L350.54,345.55L347.40,347.09L345.35,346.54L343.85,346.83L341.28,345.64L339.39,345.73L337.70,344.19L337.51,345.64L341.04,348.02L340.66,349.94L342.40,351.15L342.25,352.50L339.59,356.07L335.47,357.56L329.90,358.13L326.84,357.85L327.43,359.51L326.86,361.59L327.37,362.99L325.71,363.97L322.86,364.35L320.19,363.34L319.12,364.07L319.50,366.83L321.38,367.66L322.90,366.79L323.73,368.23L321.17,369.09L318.94,370.82L318.53,373.61L317.87,375.10L315.25,375.11L313.07,376.53L312.28,378.62L315.01,380.65L317.66,381.21L316.71,383.70L313.43,385.27L311.62,388.53L309.09,389.62L307.95,390.92L308.85,393.81L310.69,395.42L309.52,395.28L307.05,395.26L305.71,395.94L303.21,396.94L302.76,399.54L301.58,399.60L298.45,398.70L295.27,396.76L291.81,395.17L290.94,393.41L291.73,391.79L290.33,389.94L289.98,385.20L291.16,382.53L294.09,380.39L289.88,379.58L292.52,377.12L293.47,372.51L296.55,373.49L298.01,367.73L296.14,366.99L295.27,370.46L293.52,370.07L294.39,366.10L295.34,360.95L296.62,359.05L295.82,356.34L295.59,353.21L296.76,353.12L298.46,348.64L300.38,344.19L301.56,340.05L300.92,335.89L301.75,333.60L301.42,330.17L303.04,326.78L303.54,321.41L304.43,315.64L305.30,309.43L305.10,304.88L304.52,300.97L301.74,299.37L301.49,298.23L295.99,295.44L291.01,292.40L288.86,290.69L287.71,288.40L288.17,287.60L285.82,283.95L283.08,278.83L280.45,273.30L279.32,272.03L278.44,269.98L276.28,268.17L274.31,267.05L275.20,265.81L273.86,263.16L274.72,261.21L276.94,259.46L278.42,257.38L277.82,256.17L276.75,257.46L275.09,256.24L275.65,255.46L275.18,252.94L276.16,252.52L276.67,250.79L277.72,249.00L277.53,247.87L279.05,247.27L280.96,246.16L280.58,245.30L281.62,245.09L281.49,243.70L282.15,242.70L283.52,242.51L284.69,240.76L285.76,239.31L284.73,238.65L285.26,237.03L284.63,234.49L285.23,233.76L284.79,231.41L283.66,229.93L282.74,229.13L282.14,227.63L282.83,226.89L282.12,226.70L281.61,225.78L280.22,225.01L279.01,225.19L278.44,226.15L277.32,226.85L276.71,226.95L276.44,227.53L277.77,229.03L277.01,229.39L276.61,229.80L275.32,229.94L274.83,228.28L274.47,228.76L273.56,228.59L273.00,227.48L271.86,227.29L271.14,226.97L269.94,226.97L269.86,227.57L269.54,227.15L268.03,226.54L267.47,225.95L267.79,225.47L267.69,224.86L266.92,224.19L265.82,223.65L264.87,223.29L264.69,222.48L263.96,221.98L264.14,222.79L263.58,223.45L262.95,222.68L262.05,222.41L261.67,221.85L261.69,221.00L262.06,220.13L261.27,219.74L261.91,219.20L260.95,218.32L259.65,217.20L259.04,216.27L257.87,215.39L256.48,214.14L256.78,213.71L257.24,214.13L257.45,213.93L256.97,213.06L256.13,212.82L255.82,213.47L254.21,213.43L253.21,213.17L252.06,212.61L250.52,212.44L249.73,211.85L248.31,211.36L246.58,211.31L245.31,210.76L243.81,209.61L240.67,206.62L239.24,205.72L236.97,205.00L235.42,205.20L233.18,206.24L231.79,206.52L229.82,205.79L227.74,205.26L225.15,203.98L223.06,203.59L219.92,202.30L217.59,200.97L216.89,200.23L215.34,200.07L212.50,199.19L211.34,197.92L208.36,196.34L206.96,194.59L206.30,193.24L207.23,192.97L206.94,192.18L207.58,191.45L207.59,190.49L206.66,189.25L206.41,188.14L205.48,186.74L203.03,183.98L200.23,181.81L198.88,180.08L196.50,178.94L195.99,178.26L196.41,176.55L195.00,175.90L193.36,174.55L192.66,172.61L191.17,172.39L189.56,170.92L188.25,169.57L188.13,168.70L186.64,166.61L185.66,164.48L185.70,163.41L183.69,162.31L182.76,162.43L181.18,161.67L180.73,162.80L181.19,164.13L181.46,166.21L182.41,167.36L184.48,169.27L184.93,169.93L185.36,170.13L185.72,171.08L186.22,171.04L186.77,172.83L187.62,173.54L188.21,174.52L189.95,175.94L190.88,178.52L191.70,179.74L192.47,181.04L192.62,182.50L193.96,182.60L195.08,183.86L196.09,185.10L196.02,185.60L194.85,186.62L194.36,186.60L193.63,184.91L191.81,183.33L189.80,181.99L188.38,181.28L188.48,179.25L188.05,177.74L186.73,176.88L184.82,175.64L184.45,176.00L183.75,175.28L182.04,174.61L180.40,172.99L180.61,172.78L181.75,172.94L182.78,171.90L182.88,170.65L180.74,168.67L179.11,167.90L178.09,166.16L177.06,164.34L175.77,162.12L174.65,159.62L174.18,158.20L172.38,156.61L171.08,156.28L170.78,155.48L169.22,155.34L168.23,154.59L165.65,154.31L164.94,153.87L164.60,152.34L161.90,149.55L159.59,145.69L159.69,145.05L158.46,144.13L156.31,141.80L155.93,139.54L154.45,138.02L155.06,135.72L154.96,133.33L154.08,131.21L155.16,128.59L155.84,123.55L155.33,119.82L154.46,117.44L153.65,116.15L153.98,115.61L158.00,116.56L159.48,119.18L160.17,118.44L159.72,116.17L158.78,113.89L158.41,113.88L153.03,111.15L151.04,109.95L146.01,108.80L144.46,106.34L144.86,104.64L141.31,103.46L140.82,101.22L137.46,99.20L137.40,97.77L135.87,96.73L133.42,95.84L132.64,93.42L129.06,91.17L127.56,88.55L124.89,88.37L120.48,88.30L117.22,87.50L111.48,84.62L108.82,84.09L103.96,83.10L100.11,83.34L94.65,82.06L91.35,80.88L88.27,81.46L88.84,83.39L87.30,83.57L84.09,84.15L81.64,85.09L78.57,85.68L78.17,84.04L79.42,81.32L82.37,80.46L81.61,79.77L78.07,81.31L76.17,83.16L72.17,85.14L74.20,86.49L71.58,88.48L68.59,89.64L65.81,90.49L65.12,91.72L60.79,93.16L59.91,94.46L56.66,95.65L54.75,95.43L52.16,96.21L49.34,97.15L47.03,98.08L42.26,98.88L41.83,98.41L44.87,97.11L47.58,96.26L50.54,94.74L53.99,94.42L55.36,93.28L59.21,91.62L59.83,91.06L61.88,90.08L62.36,87.98L63.77,86.34L60.57,87.18L59.67,86.70L58.17,87.71L56.36,86.30L55.61,87.30L54.57,85.91L51.79,87.03L50.09,87.02L49.85,85.37L50.35,84.35L48.56,83.36L44.95,83.89L42.61,82.59L40.70,81.92L40.69,80.35L38.55,79.17L39.63,77.57L41.89,76.02L42.88,74.59L45.13,74.39L47.04,74.83L49.28,73.49L51.29,73.73L53.41,72.87L52.89,71.60L51.34,71.10L53.40,70.03L51.69,70.06L48.74,70.67L47.89,71.28L45.70,70.67L41.78,70.98L37.71,70.31L36.54,69.20L33.03,67.58L36.93,66.42L43.13,65.06L45.41,65.06L45.03,66.45L50.90,66.34L48.64,64.62L45.22,63.57L43.25,62.18L40.58,60.99L36.77,60.11L38.32,58.66L43.25,58.57L46.75,57.30L47.42,55.95L50.25,54.63L52.96,54.31L58.22,53.08L60.78,53.26L65.05,51.78L69.26,52.37L71.27,53.62L72.50,53.08L77.19,53.25L77.03,53.89L81.28,54.36L84.11,54.08L89.96,54.96L95.31,55.22L97.44,55.58L101.14,55.13L105.35,55.97L108.37,56.36L113.55,57.02L117.93,58.36L120.82,58.62L123.26,57.46L126.63,56.59L130.75,56.93L134.91,55.71L139.46,55.02L141.37,56.17L143.44,55.52L144.06,54.21L145.98,54.51L150.68,57.00L154.38,55.12L154.75,57.22L158.16,56.77L159.21,55.96L162.58,56.12L166.83,57.28L173.33,58.30L177.15,58.77L179.87,58.59L183.62,60.00L179.71,61.38L184.73,61.98L192.23,61.65L194.59,61.16L197.56,62.83L200.58,61.42L197.74,60.25L199.54,59.29L202.92,59.17L205.14,58.89L207.38,59.55L210.17,61.06L213.27,60.84L218.18,62.09L222.49,61.65L226.55,61.72L226.23,59.99L228.70,59.50L233.00,60.45L232.98,63.07L234.75,60.86L236.99,60.93L238.24,58.14L235.27,56.43L232.02,55.31L232.25,52.24L235.53,50.22L239.19,50.67L242.01,51.89L245.78,55.02L243.31,56.39L248.48,56.95Z","M182.87,46.88L181.48,48.19L187.66,47.35L191.53,48.75L194.67,47.33L197.20,48.24L199.48,50.97L200.87,49.82L198.90,46.97L201.34,46.57L204.10,47.01L207.22,48.13L208.96,50.84L209.82,52.80L214.49,54.17L219.50,55.49L219.20,56.71L214.64,56.93L216.41,58.00L215.47,59.02L210.44,58.58L205.67,57.83L202.44,58.00L197.22,58.94L188.98,59.43L185.24,59.62L183.74,58.31L179.94,57.56L177.48,57.87L174.06,55.67L175.90,55.37L180.19,54.90L184.11,55.02L187.73,54.54L182.36,53.89L176.43,54.11L172.49,54.05L171.02,53.03L177.46,51.92L173.18,51.96L168.33,51.23L170.66,49.14L172.59,48.04L180.03,46.35L182.87,46.88Z","M209.72,46.06L207.28,47.89L202.94,45.94L203.89,45.56L207.61,45.44L209.72,46.06Z","M287.94,46.94L288.19,47.70L285.24,47.62L282.25,47.56L279.20,47.94L278.40,47.77L275.34,46.30L275.46,45.30L276.80,45.11L283.15,45.41L287.94,46.94Z","M259.55,46.78L261.74,48.52L264.31,46.28L271.35,45.14L276.11,48.01L275.70,49.83L281.19,49.02L283.82,47.92L289.98,49.32L293.81,50.65L294.17,51.86L299.33,51.23L302.22,53.00L308.93,54.10L311.35,55.22L313.97,57.82L308.87,59.11L315.42,60.92L319.83,61.53L323.82,64.09L328.19,64.27L327.32,66.22L322.45,69.45L319.03,68.26L314.66,65.59L311.07,65.94L310.72,67.53L313.64,69.14L317.41,70.42L318.56,71.16L320.36,73.91L319.41,75.91L315.90,75.15L308.94,72.93L312.86,75.32L315.75,77.00L316.21,77.97L308.67,76.86L302.71,75.25L299.35,73.89L300.32,73.11L296.17,71.68L292.13,70.34L292.17,71.14L284.14,71.58L281.79,70.63L283.62,68.59L288.84,68.54L294.56,68.18L293.63,67.19L294.60,65.80L298.19,63.10L297.43,61.87L296.36,60.92L292.10,59.57L286.47,58.63L288.25,57.92L285.31,56.20L282.86,56.04L280.67,55.09L279.19,55.91L274.15,56.27L264.04,55.65L258.17,54.83L253.66,54.41L251.35,53.44L254.26,52.17L250.31,52.16L249.43,49.35L251.57,46.86L254.42,45.73L261.59,44.99L259.55,46.78Z","M221.23,44.88L224.54,45.46L229.50,45.11L230.22,45.92L227.63,47.25L231.83,48.44L231.33,50.94L226.78,52.02L224.10,51.79L222.18,50.73L215.28,48.58L215.33,47.69L221.00,48.04L217.94,46.22L221.23,44.88Z","M898.90,46.63L894.69,46.65L888.99,46.34L888.51,46.19L891.14,45.10L894.62,44.84L898.56,45.90L898.90,46.63Z","M241.12,47.86L238.14,49.93L234.97,49.83L233.24,47.39L233.28,46.01L234.73,44.83L237.49,44.07L243.28,44.17L248.58,44.84L244.43,47.32L241.12,47.86Z","M165.39,51.67L158.08,53.05L156.61,51.83L150.20,50.36L151.13,49.46L153.31,47.16L155.72,45.33L153.01,43.63L162.39,43.20L166.36,43.77L173.46,43.93L176.15,44.73L179.14,45.90L175.64,46.60L168.83,48.56L165.39,50.50L165.39,51.67Z","M918.70,41.43L915.49,42.53L911.05,42.28L905.89,41.19L906.55,40.29L911.73,40.71L918.70,41.43Z","M239.96,41.72L238.45,42.80L234.42,42.59L231.05,41.87L232.53,40.62L236.53,39.87L238.95,40.84L239.96,41.72Z","M903.02,40.10L900.83,42.17L890.59,42.09L885.99,42.75L880.48,40.94L881.98,39.03L885.64,38.51L892.98,38.63L903.02,40.10Z","M226.39,36.89L228.51,38.18L228.60,39.60L227.33,41.67L222.75,41.95L219.77,41.51L219.83,39.89L215.27,40.10L215.10,37.95L218.08,38.04L222.27,37.09L226.18,37.25L226.39,36.89Z","M199.41,38.33L200.50,39.32L202.98,38.85L205.89,38.97L206.38,40.33L204.68,41.65L195.28,42.08L188.27,43.29L184.04,43.35L183.69,42.44L189.46,41.22L176.91,41.55L173.03,41.05L176.82,38.34L179.43,37.56L187.25,38.50L192.18,40.14L197.04,40.35L193.06,37.69L195.61,36.68L198.48,37.00L199.41,38.33Z","M659.82,53.55L658.18,53.80L649.10,53.44L648.37,52.20L643.34,51.46L642.93,49.96L645.77,49.36L645.68,47.85L651.19,45.48L648.63,45.14L655.28,42.70L654.53,41.44L660.75,39.97L669.92,38.19L679.16,37.67L683.92,36.64L689.33,36.28L691.26,37.38L689.39,38.24L679.55,39.62L671.07,40.94L662.44,43.59L658.30,46.30L653.94,48.97L654.51,51.28L659.82,53.55Z","M236.99,35.84L240.07,36.73L245.54,36.73L247.94,37.64L247.31,38.68L250.49,39.31L252.26,39.97L256.00,40.09L260.06,40.33L264.47,39.72L270.13,39.49L274.64,39.68L277.62,40.73L278.24,41.88L276.51,42.62L272.36,43.22L268.81,42.88L260.84,43.31L255.14,43.35L250.65,43.01L243.27,42.12L242.31,40.59L241.97,39.21L239.18,38.00L233.44,37.66L230.22,36.80L231.26,35.66L236.99,35.84Z","M177.23,34.32L176.84,36.45L174.71,37.42L172.11,37.55L166.95,38.74L162.50,39.17L158.74,38.57L158.74,38.57L163.45,36.49L169.16,34.69L173.42,34.73L177.23,34.32Z","M797.14,36.18L797.89,37.56L800.43,36.88L808.55,36.92L814.81,38.27L817.04,39.31L816.35,40.76L813.28,41.58L805.98,43.12L803.89,43.94L807.33,44.33L811.44,45.03L813.94,44.51L815.36,46.29L816.58,45.57L821.02,45.13L829.93,45.59L830.61,46.89L842.22,47.30L842.38,45.18L848.28,45.67L852.71,45.65L857.20,47.11L858.48,48.89L856.83,50.06L860.32,52.24L864.69,53.37L867.37,50.45L871.83,51.70L876.56,50.96L881.94,51.81L883.98,51.03L888.53,51.42L886.52,48.84L890.19,47.64L915.28,49.44L917.64,51.09L924.91,53.22L936.13,52.69L941.66,53.15L943.97,54.30L943.64,56.33L947.06,57.12L950.78,56.55L955.70,56.48L960.95,57.02L966.21,56.71L971.05,59.18L974.49,58.30L972.25,56.52L973.48,55.29L982.34,56.06L988.12,55.90L996.11,57.22L1000.00,58.43L1000.00,69.50L999.98,69.52L996.41,70.74L992.81,70.53L995.31,72.01L996.97,74.30L998.25,75.05L998.57,76.20L997.86,76.93L992.68,76.33L984.91,78.42L982.44,78.74L978.19,80.69L974.16,82.40L973.14,83.66L969.17,81.74L961.93,83.92L960.67,82.89L957.99,84.08L954.28,83.70L953.38,85.52L950.05,88.21L950.15,89.34L953.31,89.96L952.94,94.00L950.36,94.10L949.17,96.43L950.33,97.62L945.47,99.04L944.50,102.21L940.36,102.89L939.53,105.71L935.53,108.30L934.50,106.39L933.31,102.34L931.76,96.16L933.10,92.31L935.44,90.65L935.58,89.36L939.90,88.73L944.86,85.24L949.64,82.38L954.64,80.16L956.87,76.25L953.50,76.48L951.83,78.77L944.78,81.82L942.51,78.41L935.34,79.35L928.38,84.00L930.68,85.71L924.48,86.43L920.18,86.72L920.38,84.71L916.07,84.29L912.62,85.65L904.13,85.18L894.99,86.00L886.00,91.42L875.35,97.97L879.73,98.32L881.09,100.06L883.79,100.68L885.57,99.29L888.62,99.47L892.63,102.53L892.72,104.89L890.55,107.67L890.31,110.98L889.06,115.43L884.87,119.45L883.94,121.37L880.17,124.60L876.43,127.81L874.64,129.45L870.94,131.08L869.18,131.12L867.44,129.77L863.71,131.80L863.28,132.72L862.22,132.56L861.02,133.50L860.19,134.44L860.29,136.44L858.86,137.05L858.36,137.54L857.32,138.36L855.47,138.82L854.26,139.56L854.17,140.77L853.85,141.07L854.95,141.53L856.53,142.74L858.92,146.02L859.61,147.82L859.63,151.02L858.59,152.55L856.07,153.08L853.85,154.23L851.35,154.47L851.04,152.96L851.55,150.88L850.33,147.98L852.39,147.52L850.49,145.14L849.14,144.61L848.80,145.13L847.99,145.36L847.89,144.84L847.17,144.59L846.42,144.14L847.18,142.92L847.84,142.59L847.59,142.09L848.30,140.59L848.11,140.13L846.49,139.83L845.18,139.09L841.30,139.89L839.25,141.19L836.26,141.95L837.74,140.66L837.16,139.58L839.36,137.72L837.89,136.26L835.47,137.24L832.33,139.17L830.62,140.97L827.90,141.10L826.48,142.40L827.94,144.27L830.22,144.73L830.31,145.98L832.51,146.79L835.62,144.80L838.09,145.89L839.88,145.96L840.33,147.41L836.40,148.19L835.10,149.69L832.40,151.08L830.98,153.03L833.97,154.55L835.06,157.29L836.75,159.83L838.63,161.97L838.59,164.03L836.85,164.79L837.51,166.27L839.14,167.13L838.72,169.39L838.01,171.60L836.46,171.85L834.43,174.85L832.18,178.50L829.60,181.81L825.78,184.38L821.92,186.71L818.79,187.03L817.09,188.27L816.13,187.37L814.56,188.75L810.68,190.14L807.74,190.56L806.79,193.50L805.25,193.66L804.52,191.64L805.18,190.57L801.45,189.68L800.14,190.13L796.43,192.51L794.12,195.13L793.51,197.06L795.63,199.99L798.23,203.62L800.75,205.33L802.44,207.56L803.71,212.71L803.33,217.59L801.02,219.42L797.84,221.21L795.57,223.53L792.11,226.11L791.10,224.33L791.88,222.45L789.82,220.87L787.49,220.46L786.36,219.02L784.96,216.15L782.46,214.87L780.09,214.92L780.50,212.74L778.05,212.76L777.83,215.81L776.33,219.87L775.43,222.32L775.62,224.34L777.43,224.42L778.55,226.96L779.05,229.36L780.60,230.95L782.29,231.28L783.73,232.72L784.36,232.98L786.00,234.65L787.17,236.51L787.33,238.38L787.03,239.65L787.30,240.60L787.51,242.25L788.49,243.01L789.58,245.47L789.52,246.41L787.55,246.59L784.93,244.54L781.64,242.33L781.32,240.92L779.71,239.06L779.33,236.76L778.32,235.24L778.63,233.22L778.02,232.04L776.92,230.98L776.44,229.60L774.97,228.03L773.62,226.72L773.17,228.35L772.64,226.81L772.94,225.07L773.76,222.41L773.49,220.35L774.35,218.22L773.41,216.57L773.64,213.55L772.51,212.11L771.60,208.79L771.10,205.28L769.90,202.98L768.07,204.37L764.91,206.35L763.36,206.10L761.64,205.45L762.59,202.01L762.01,199.41L759.84,196.20L760.18,195.20L758.55,194.85L756.58,192.58L755.79,191.13L755.63,189.72L755.10,188.38L753.94,186.76L751.38,186.65L751.63,187.80L750.76,189.34L749.58,188.78L749.17,189.29L748.39,188.98L747.31,188.73L746.91,189.75L745.02,189.71L741.60,190.29L741.76,192.38L740.28,194.02L736.28,195.89L733.17,199.16L731.08,200.91L728.31,202.73L728.31,204.01L726.92,204.69L724.42,205.69L723.12,205.84L722.29,207.95L722.87,211.57L723.02,213.87L721.84,216.51L721.83,221.23L720.39,221.36L719.13,223.48L719.97,224.40L717.44,225.19L716.50,227.08L715.39,227.87L712.76,225.28L711.47,221.39L710.41,218.59L709.43,217.27L707.96,214.61L707.27,211.13L706.79,209.40L704.26,205.58L703.11,200.20L702.28,196.64L702.29,193.28L701.75,190.68L697.71,192.34L695.75,192.01L692.12,188.64L693.46,187.64L692.64,186.55L689.38,184.19L687.34,183.49L686.52,181.49L684.37,179.37L679.25,179.90L674.74,179.95L670.83,180.34L665.60,179.50L662.57,178.86L659.44,178.50L658.25,175.09L656.92,174.60L654.79,175.10L651.99,176.44L648.59,175.52L645.79,173.39L643.11,172.60L641.26,169.96L639.21,166.26L637.71,166.71L635.95,165.79L634.91,166.87L633.26,166.73L633.84,167.96L633.59,168.59L634.49,170.69L635.58,173.08L636.94,173.72L637.42,174.69L639.31,175.86L639.48,177.01L639.20,177.93L639.56,178.87L640.35,179.64L640.72,180.56L641.14,181.24L640.96,179.22L641.70,177.76L642.46,177.46L643.30,178.33L643.35,179.96L642.75,181.59L643.28,182.65L643.77,182.52L643.87,183.28L646.05,182.84L648.34,182.91L650.02,182.99L651.93,181.12L654.00,179.34L655.75,177.62L656.56,176.68L656.90,176.92L656.64,178.07L656.28,178.57L656.66,180.76L657.90,182.66L659.45,183.67L661.49,184.03L663.14,184.54L664.39,186.13L665.14,187.05L666.13,187.41L666.13,188.03L665.12,189.68L664.67,190.46L663.50,191.35L662.47,193.25L661.21,193.11L660.63,193.77L660.18,195.18L660.52,197.03L660.26,197.38L658.98,197.37L657.25,198.40L656.98,199.76L656.34,200.34L654.62,200.32L653.53,201.02L653.54,202.14L652.20,202.91L650.66,202.65L648.81,203.59L647.52,203.75L645.51,204.49L644.98,205.73L644.91,206.67L642.15,207.85L637.71,209.14L635.22,211.10L634.00,211.26L633.16,211.09L631.54,212.24L629.77,212.78L627.44,212.92L626.74,213.08L626.13,213.81L625.40,214.02L624.97,214.72L623.60,214.66L622.71,215.04L620.79,214.90L620.06,213.28L620.14,211.76L619.69,210.94L619.15,208.88L618.35,207.74L618.90,207.61L618.62,206.34L618.95,205.80L618.83,204.59L618.47,203.40L617.63,202.57L617.42,201.46L615.98,200.46L614.50,198.13L613.72,195.87L611.80,193.96L610.56,193.50L608.72,190.86L608.40,188.93L608.52,187.28L606.92,184.20L605.62,183.11L604.12,182.54L603.21,180.95L603.36,180.32L602.59,178.88L601.78,178.26L600.69,176.19L599.00,173.95L597.58,172.05L596.20,172.06L596.63,170.53L596.76,169.56L597.10,168.45L597.01,168.05L596.23,169.17L595.63,171.27L594.87,172.71L594.23,173.20L593.30,172.30L592.05,171.06L590.06,167.08L589.78,167.33L590.93,170.26L592.64,173.06L594.74,177.38L595.76,178.89L596.65,180.46L599.15,183.54L598.59,184.02L598.68,185.83L601.92,188.32L602.41,188.89L603.30,191.61L602.69,192.12L603.10,194.98L604.12,198.29L605.17,198.98L606.69,200.00L608.31,203.22L609.07,205.77L610.60,207.12L614.39,209.75L615.93,211.33L617.44,212.93L618.30,213.89L619.67,214.72L620.33,215.58L620.24,216.74L618.66,217.40L619.85,218.16L620.75,218.67L621.30,219.82L622.55,220.98L623.93,220.99L626.55,220.28L629.57,219.95L632.02,219.09L633.39,218.91L634.39,218.40L635.97,218.30L636.86,218.25L638.14,217.84L639.61,217.56L640.92,216.61L641.98,216.60L642.04,217.37L641.78,218.98L641.79,220.44L641.21,221.45L640.42,224.45L639.09,227.55L637.37,231.10L634.98,235.17L632.61,238.28L629.35,242.07L626.57,244.32L622.41,247.08L619.82,249.19L616.78,252.55L616.14,254.02L615.51,254.68L613.57,255.78L612.88,256.94L611.84,257.15L611.45,259.10L610.56,260.23L610.01,262.07L608.90,262.99L607.61,266.41L607.78,267.99L609.56,269.00L609.64,269.72L608.87,271.40L609.03,272.24L608.85,273.57L609.82,275.31L610.97,278.05L611.99,278.66L612.44,279.90L612.33,282.67L612.67,285.11L612.78,289.45L613.27,290.81L612.44,292.80L611.36,294.72L609.59,296.45L607.05,297.50L603.92,298.85L600.78,301.83L599.71,302.34L597.77,304.31L596.63,304.96L596.39,306.94L597.71,309.04L598.26,310.67L598.29,311.50L598.79,311.36L598.71,314.09L598.26,315.38L598.91,315.85L598.50,317.01L597.34,318.00L595.04,318.93L591.70,320.44L590.49,321.46L590.72,322.63L591.43,322.82L591.19,324.28L590.50,326.31L590.17,328.61L589.45,329.87L587.56,331.27L587.02,331.67L585.84,333.08L585.06,334.51L583.49,336.50L580.35,339.37L578.39,341.03L576.29,342.30L573.39,343.37L571.97,343.52L571.61,344.29L569.92,343.88L568.55,344.41L565.54,343.87L563.86,344.21L562.71,344.07L559.84,345.16L557.47,345.60L555.75,346.65L554.49,346.72L553.31,345.73L552.38,345.68L551.18,344.44L551.05,344.82L550.68,344.08L550.69,342.45L549.79,340.59L550.69,340.08L550.62,337.95L548.80,335.35L547.40,333.00L547.40,332.99L545.40,329.38L543.34,327.28L542.25,325.25L541.64,322.55L540.95,320.54L540.02,316.26L539.96,312.94L539.60,311.42L538.52,310.27L537.09,307.98L535.63,304.65L535.02,302.90L532.76,300.19L532.60,298.06L532.33,296.31L532.72,293.87L533.68,291.33L533.82,290.14L534.72,287.63L535.38,286.49L536.98,284.68L537.87,283.44L538.16,281.38L538.02,279.81L537.19,278.82L536.45,277.13L535.77,275.46L535.91,274.89L536.77,273.79L535.93,271.10L535.36,269.24L533.97,267.48L534.23,266.94L533.84,266.08L533.10,263.99L530.82,261.05L527.96,258.25L526.13,255.96L524.44,253.09L524.53,252.16L525.13,251.28L525.81,249.25L526.37,247.19L525.85,246.78L526.80,243.66L527.21,241.46L526.12,239.63L524.86,239.16L524.29,237.91L523.58,237.51L523.61,236.74L520.73,237.74L519.67,237.60L518.61,238.22L516.38,238.16L514.90,236.42L513.98,234.41L512.02,232.58L509.93,232.62L507.48,232.61L505.18,232.94L502.94,233.53L498.59,235.16L497.05,236.11L494.54,236.92L492.07,236.13L490.80,236.15L488.86,235.61L487.08,235.64L483.79,236.13L481.86,236.93L479.11,237.95L478.58,237.88L477.85,237.90L474.99,236.58L472.46,234.46L470.10,232.94L468.23,231.15L467.48,230.94L465.48,229.83L464.03,228.34L463.54,227.32L463.20,225.27L461.99,223.63L460.91,222.54L460.19,222.18L459.50,221.63L459.19,220.40L458.78,219.79L457.97,219.33L456.49,218.17L455.32,217.99L454.68,217.20L454.70,216.78L453.85,216.19L453.67,215.60L453.22,213.47L453.57,212.24L452.43,210.07L451.04,209.08L452.26,208.56L453.61,206.61L454.27,205.18L454.03,203.68L454.80,202.31L455.15,199.70L454.84,196.95L454.51,195.57L454.78,194.19L454.07,192.87L452.60,191.67L452.72,190.49L452.85,189.21L453.92,188.45L454.83,187.00L454.65,186.06L455.60,184.10L457.15,182.34L458.09,181.89L458.82,180.27L458.89,178.79L459.89,177.07L461.74,176.06L463.50,173.22L464.95,172.12L467.53,171.81L469.72,169.91L471.11,169.17L473.43,166.85L472.74,163.40L473.79,161.01L474.16,159.54L475.95,157.67L478.74,156.40L480.80,155.25L482.65,152.37L483.53,150.67L485.57,150.68L487.25,151.86L489.89,151.67L492.77,152.28L493.97,152.31L496.64,150.79L499.65,150.31L501.40,149.16L504.07,148.32L508.78,147.82L513.38,147.60L514.78,148.01L517.39,146.91L520.36,146.89L521.49,147.54L523.39,147.37L526.42,146.25L528.36,146.58L528.28,147.99L530.64,146.97L530.83,147.50L529.44,148.86L529.43,150.15L530.39,150.84L530.02,153.24L528.19,154.64L528.72,156.15L530.16,156.20L530.86,157.52L531.91,157.95L535.18,158.91L536.34,158.67L538.66,159.13L542.35,160.37L543.65,162.84L546.14,163.38L550.06,164.55L553.02,165.93L554.37,165.21L555.70,163.93L555.06,161.80L555.93,160.45L557.93,159.15L559.84,158.77L563.60,159.34L564.55,160.58L565.58,160.59L566.47,161.06L569.23,161.39L569.90,162.31L573.60,162.26L576.27,163.00L579.03,163.82L580.32,164.25L582.45,163.37L583.60,162.57L586.05,162.34L588.02,162.70L588.78,164.07L589.42,163.17L591.65,163.82L593.82,163.98L595.18,163.28L595.99,162.36L595.80,162.21L596.54,160.91L597.10,158.81L597.50,158.11L597.57,158.08L598.56,155.82L599.94,153.86L600.00,153.76L599.74,151.64L600.42,150.50L599.39,149.24L600.45,148.19L598.75,148.43L596.43,147.79L594.52,149.39L590.30,149.70L588.05,148.21L585.06,148.12L584.42,149.27L582.50,149.60L579.81,148.12L576.78,148.17L575.14,145.41L573.11,143.87L574.46,141.71L572.70,140.38L575.78,137.72L580.06,137.61L581.22,135.50L586.52,135.87L589.86,134.07L593.09,133.28L597.69,133.22L602.54,135.18L606.52,136.25L609.76,135.83L612.15,136.07L615.43,134.62L615.84,133.44L615.15,131.54L613.54,130.52L612.00,130.20L610.99,129.35L607.44,127.00L604.28,125.95L601.88,124.32L603.90,123.88L606.20,121.55L604.65,120.45L608.74,119.32L608.67,118.71L606.18,119.16L603.96,119.38L602.11,120.28L599.51,120.43L597.12,121.46L597.28,123.19L598.64,123.86L601.47,123.69L600.93,124.69L597.89,125.17L594.12,126.77L592.57,126.21L593.19,124.90L590.15,124.09L590.64,123.56L593.30,122.63L592.50,122.00L588.18,121.30L587.99,120.26L585.41,120.60L584.38,122.13L582.23,124.19L582.30,124.90L580.95,125.50L580.11,125.24L579.33,128.59L577.89,129.74L576.87,131.73L577.77,133.31L578.10,134.38L580.52,135.28L580.02,135.96L576.72,136.11L575.53,136.97L573.22,138.47L572.34,137.17L572.38,136.60L570.69,136.52L569.24,136.26L565.87,136.98L567.80,138.54L566.39,138.99L564.84,139.00L563.37,137.57L562.85,138.18L563.47,139.84L564.86,141.14L563.81,141.75L565.36,143.03L566.74,143.83L566.78,145.40L564.21,144.67L565.03,146.08L563.26,146.37L564.32,148.83L562.47,148.86L560.19,147.65L559.15,145.43L558.67,143.58L557.58,142.31L556.16,140.72L555.97,139.93L555.50,139.74L555.44,139.12L553.91,138.19L553.66,136.87L553.90,134.97L554.28,134.11L553.81,133.67L553.23,133.46L552.45,132.55L551.25,132.00L548.64,130.97L547.03,129.97L544.49,129.15L542.15,127.10L542.71,126.89L541.45,125.73L541.39,124.79L539.61,124.35L538.76,125.55L537.94,124.62L538.00,123.66L538.10,123.61L538.72,123.36L536.50,122.95L534.25,123.94L534.40,125.32L534.06,126.11L534.97,127.52L537.57,128.92L538.97,131.22L542.06,133.46L544.24,133.44L544.92,134.05L544.14,134.61L546.63,135.61L548.66,136.45L551.05,137.90L551.33,138.42L550.82,139.41L549.27,138.12L546.86,137.66L545.69,139.46L547.70,140.49L547.37,141.94L546.21,142.10L544.73,144.48L543.57,144.70L543.58,143.85L544.14,142.36L544.75,141.77L543.66,140.16L542.82,138.75L541.66,138.41L540.84,137.21L539.06,136.70L537.86,135.59L535.80,135.41L533.63,134.15L531.09,132.35L529.20,130.75L528.33,128.00L526.95,127.68L524.69,126.76L523.41,127.14L521.81,128.42L520.65,128.63L518.14,130.20L512.66,129.45L508.61,130.35L508.29,132.02L508.44,133.63L505.81,135.48L502.25,136.07L502.00,137.00L500.30,138.54L499.23,140.81L500.31,142.39L498.70,143.63L498.10,145.44L496.00,145.99L494.04,148.13L490.51,148.17L487.86,148.12L486.12,149.10L485.06,150.15L483.70,149.92L482.68,148.98L481.89,147.38L479.30,146.95L478.18,147.67L476.71,147.28L475.28,147.59L475.71,145.41L475.44,143.70L474.20,143.45L473.54,142.40L473.76,140.58L474.87,139.57L475.06,138.45L475.64,136.78L475.58,135.60L475.03,134.60L474.90,133.66L475.04,131.69L473.91,130.48L477.84,128.48L481.24,128.98L484.97,128.96L487.92,129.43L490.23,129.29L494.72,129.38L496.15,127.71L496.68,122.18L493.82,119.27L491.77,117.86L487.52,116.79L487.24,114.77L490.85,114.16L495.51,114.88L494.63,111.73L497.25,112.92L503.72,110.76L504.55,108.48L506.98,107.92L509.21,107.37L510.64,106.61L513.07,102.52L516.87,101.36L519.18,101.44L519.72,100.85L522.05,100.70L522.56,101.31L524.45,99.94L523.81,98.90L523.68,97.33L522.56,95.78L522.47,92.94L522.94,92.19L523.73,91.36L526.18,91.19L527.15,90.42L529.39,89.64L529.29,91.07L528.47,91.97L528.81,92.75L530.31,93.17L529.63,94.22L528.81,93.92L526.81,95.92L527.56,97.27L527.61,98.34L530.42,98.99L530.39,99.98L533.21,99.45L534.77,98.69L537.91,99.79L539.22,100.67L541.12,99.86L545.45,98.57L548.95,97.63L551.72,98.10L551.93,98.78L554.61,98.82L555.25,97.59L559.08,96.69L558.49,94.36L558.58,92.27L559.95,90.52L562.57,89.57L564.77,91.65L567.00,91.60L567.54,89.46L567.86,87.82L566.84,88.17L565.07,87.19L564.83,85.59L568.35,84.82L571.85,84.41L574.86,84.87L577.73,84.79L580.88,83.26L577.97,81.93L572.93,82.16L568.05,83.17L563.53,83.76L561.92,82.24L559.23,81.33L559.85,78.60L558.50,76.09L559.82,74.47L562.34,72.73L568.70,69.72L570.55,69.13L570.26,67.96L566.40,66.65L561.62,67.43L558.93,69.37L559.36,71.07L554.94,73.31L549.58,75.70L547.55,79.61L549.53,81.56L552.19,83.11L549.64,86.24L546.75,86.89L545.69,91.55L544.11,94.15L540.74,93.89L539.17,96.09L535.95,96.22L535.07,93.59L532.74,90.44L530.63,86.51L528.77,84.81L523.28,88.02L519.58,88.67L515.74,87.26L514.75,84.27L513.87,77.86L516.42,76.07L523.76,73.74L529.24,70.87L534.33,67.00L541.00,61.64L545.66,59.55L553.29,56.06L559.38,54.85L563.95,54.99L568.19,52.69L573.25,52.82L578.24,52.26L586.93,54.29L583.35,55.04L586.39,56.78L589.26,55.82L593.82,57.50L601.43,58.16L611.92,61.30L614.06,62.62L614.24,64.47L611.16,65.93L606.62,66.67L594.22,64.56L592.18,64.91L596.71,66.94L597.07,71.07L600.64,71.92L602.81,72.64L603.17,71.29L601.44,70.05L603.27,69.05L609.98,70.78L612.32,70.10L610.45,68.06L616.93,65.34L619.49,65.50L622.08,66.47L623.70,64.57L621.38,62.91L622.74,61.25L620.70,59.53L628.47,60.42L630.06,61.97L626.54,62.32L626.56,63.86L628.75,64.81L633.04,64.21L633.72,62.44L639.52,61.11L649.22,58.73L651.31,58.87L648.57,60.55L652.02,60.84L654.01,59.89L659.21,59.82L663.34,58.66L666.50,60.34L669.66,58.50L666.75,56.89L668.19,55.97L676.40,56.81L680.24,57.68L690.31,60.85L692.17,59.40L689.35,57.93L689.26,57.34L685.92,57.07L686.83,55.75L685.35,53.59L685.26,52.70L690.39,50.18L692.21,47.66L694.28,47.11L701.63,47.84L702.21,49.39L699.58,51.64L701.31,52.53L702.20,54.47L701.57,58.28L704.63,59.98L703.44,61.83L698.00,65.78L701.18,66.19L702.28,65.19L705.34,64.47L706.07,63.10L708.48,61.78L706.86,60.20L708.16,58.36L705.12,58.13L704.45,56.59L706.67,53.80L703.06,51.54L708.03,49.66L707.39,47.69L708.77,47.62L710.23,49.17L709.14,51.85L712.11,52.35L710.84,50.35L715.49,49.26L721.26,49.11L726.39,50.69L723.92,48.38L723.64,45.42L728.47,44.86L735.15,44.98L741.17,44.62L738.92,43.17L742.13,41.34L745.32,41.27L750.72,39.89L758.06,39.52L758.98,38.76L766.28,38.50L768.55,39.12L774.78,37.65L779.89,37.69L780.65,36.49L783.31,35.31L789.87,34.17L794.63,35.07L790.85,35.76L797.14,36.18ZM636.42,135.33L637.83,137.30L639.12,137.43L639.98,138.18L637.69,138.40L637.21,140.56L636.73,141.53L635.71,142.18L635.79,143.55L636.67,145.60L639.30,146.18L641.23,147.58L645.18,148.05L649.52,147.32L649.78,146.67L649.27,144.71L649.67,141.80L647.50,140.86L648.22,138.96L646.37,138.80L646.99,136.45L649.61,137.14L652.05,136.25L650.02,134.58L649.23,132.99L646.99,133.70L646.71,135.73L645.84,133.94L645.68,133.26L646.37,132.10L645.84,131.13L642.62,130.19L641.36,127.69L639.83,126.99L639.74,126.08L642.44,126.35L642.55,124.32L644.91,123.87L647.34,124.28L647.84,121.57L647.34,119.85L644.56,119.99L642.20,119.31L638.98,120.53L636.39,121.11L635.13,122.76L632.43,123.22L629.67,126.09L632.20,128.72L631.92,130.59L634.96,133.86L636.42,135.33Z","M239.33,34.67L238.07,34.75L232.86,34.57L232.12,33.79L237.72,33.83L239.66,34.35L239.33,34.67Z","M193.93,34.17L188.75,34.97L184.63,34.08L186.88,33.19L190.93,32.91L194.85,33.34L193.93,34.17Z","M568.68,33.74L562.47,34.88L557.57,34.23L559.49,33.51L557.81,32.63L563.57,32.07L564.67,33.11L568.68,33.74Z","M195.38,31.66L192.00,32.20L187.38,32.20L187.43,31.80L190.28,30.97L191.77,31.10L195.38,31.66Z","M233.80,33.18L229.69,33.75L227.43,33.10L226.24,32.06L226.02,30.91L229.62,31.02L231.24,31.21L234.56,32.17L233.80,33.18Z","M222.06,32.43L223.14,33.59L218.60,33.28L214.03,32.38L207.84,32.28L210.53,31.45L207.17,30.78L206.97,29.72L212.42,30.10L219.93,31.11L222.06,32.43Z","M791.88,32.48L776.22,33.55L781.29,29.91L783.57,29.59L785.66,29.77L792.70,31.35L791.88,32.48Z","M550.70,28.61L559.84,30.68L552.85,31.77L551.31,33.81L548.87,34.34L547.55,36.64L544.20,36.75L538.23,35.05L540.75,34.07L536.59,33.26L531.17,30.92L529.01,28.74L536.59,27.75L538.11,28.72L542.06,28.68L543.12,27.73L547.20,27.64L550.70,28.61Z","M570.69,26.65L576.13,27.62L572.01,29.12L563.96,29.44L555.76,28.98L555.27,28.22L551.28,28.17L548.24,26.89L556.82,26.12L560.86,26.78L563.66,25.95L570.69,26.65Z","M642.04,26.26L638.32,26.62L635.82,26.83L635.43,27.29L632.18,27.75L629.17,27.09L630.76,26.22L624.57,26.14L630.00,25.63L634.22,25.60L634.79,26.35L636.38,25.68L639.00,25.23L643.12,25.83L642.04,26.26Z","M777.61,30.89L771.55,31.23L763.81,30.43L759.20,29.37L757.07,27.38L753.28,26.83L760.49,24.93L766.50,24.30L771.90,25.70L778.30,28.39L777.61,30.89Z","M258.28,28.72L261.63,29.62L257.81,30.45L252.68,32.54L247.77,32.74L242.01,32.38L239.02,31.25L239.07,30.24L241.26,29.50L236.18,29.52L233.12,28.60L231.36,27.34L233.29,26.10L235.21,25.26L238.06,25.06L236.85,24.43L243.31,24.29L246.85,25.77L251.53,26.36L256.08,26.89L258.28,28.72Z","M309.72,19.15L317.15,19.37L323.11,19.72L328.19,20.48L328.07,21.22L321.29,22.42L314.57,22.99L312.06,23.61L318.11,23.59L311.56,25.28L307.03,26.06L302.28,28.33L296.55,28.79L294.78,29.36L286.37,29.66L290.20,30.01L288.28,30.50L290.57,31.87L287.93,32.83L283.64,33.61L282.33,34.70L278.45,35.53L278.83,36.16L283.58,36.05L283.64,36.73L276.22,38.39L268.96,37.63L260.80,38.06L256.67,37.72L251.41,37.58L251.07,36.24L256.20,35.62L254.83,33.61L256.53,33.42L263.95,34.61L260.17,32.83L255.66,32.30L257.91,31.23L262.84,30.56L263.63,29.60L259.70,28.51L258.52,27.08L266.12,27.20L268.31,27.50L272.64,26.49L266.39,26.17L256.67,26.34L251.76,25.40L249.44,24.28L246.20,23.46L245.59,22.52L249.72,21.99L252.97,21.90L258.42,21.45L262.50,20.41L265.94,20.56L268.94,21.33L271.06,19.83L274.72,19.39L279.70,19.08L288.19,18.97L289.67,19.27L297.69,18.80L303.71,18.97L309.72,19.15Z","M424.72,18.00L442.10,20.20L436.97,21.27L426.34,21.40L411.39,21.67L412.79,22.16L422.62,21.86L430.99,22.81L436.38,21.96L438.69,22.96L435.64,24.58L442.71,23.54L456.20,22.47L464.53,23.00L466.09,24.19L454.76,26.17L453.19,26.81L444.32,27.29L450.75,27.42L447.50,29.44L445.26,31.25L445.35,34.34L448.69,36.15L444.35,36.27L439.78,37.14L444.91,38.62L445.56,40.98L442.59,41.23L446.19,43.62L440.02,43.82L443.24,44.95L442.33,45.93L438.41,46.36L434.54,46.37L438.02,48.25L438.06,49.49L432.56,48.34L431.13,49.08L434.88,49.78L438.52,51.48L439.57,53.71L434.62,54.25L432.48,53.18L429.05,51.58L430.00,53.47L426.77,54.93L434.09,55.04L437.92,55.20L430.47,57.61L422.92,59.80L414.80,60.76L411.73,60.78L408.86,61.85L404.99,64.78L399.02,66.73L397.10,66.84L393.40,67.52L389.41,68.17L387.03,69.89L386.99,71.84L385.59,73.66L381.06,75.88L382.18,78.05L380.93,80.35L379.50,83.06L375.59,83.23L371.49,80.96L365.94,80.95L363.24,79.43L361.39,76.71L356.57,73.26L355.17,71.45L354.79,68.95L350.94,66.39L351.94,64.34L350.09,63.36L352.83,60.12L357.01,59.08L358.11,57.92L358.69,55.75L355.52,56.74L354.01,57.15L351.51,57.55L348.10,56.64L347.92,54.75L349.00,53.27L351.58,53.23L357.25,53.97L352.47,52.21L349.99,51.26L347.22,51.65L344.90,50.96L348.01,48.37L346.32,47.34L344.11,45.42L340.77,42.47L337.23,41.39L337.26,40.23L329.81,38.60L323.91,38.40L316.49,38.51L309.71,38.72L306.49,37.83L301.66,36.09L308.95,35.21L314.54,35.07L302.66,34.34L296.40,33.21L296.78,32.13L307.30,30.79L317.47,29.46L318.54,28.45L311.05,27.45L313.47,26.34L323.09,24.41L327.13,24.11L325.97,22.86L332.55,22.13L341.09,21.69L349.63,21.67L352.66,22.53L360.03,21.00L366.66,22.04L370.56,22.26L376.32,23.16L369.72,21.67L370.10,20.48L379.43,18.82L389.17,18.94L392.72,17.92L402.53,17.65L424.72,18.00Z"];
  const CONTINENTS = [
    [-111, 49, 'NORTH AMERICA', 'AMÉRICA DEL NORTE'], [-59, -18, 'SOUTH AMERICA', 'AMÉRICA DEL SUR'],
    [16, 52, 'EUROPE', 'EUROPA'], [19, 8, 'AFRICA', 'ÁFRICA'], [92, 48, 'ASIA', 'ASIA'],
    [136, -28, 'AUSTRALIA', 'AUSTRALIA'], [25, -81, 'ANTARCTICA', 'ANTÁRTIDA']
  ];
  const project = (lat, lon) => ({x: (lon + 180) * 1000 / 360, y: (90 - lat) * 500 / 180});
  const clamp = (value, min, max) => Math.min(max, Math.max(min, value));
  function element(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  }
  function svgNode(tag, attrs, text) {
    const node = document.createElementNS(NS, tag);
    Object.entries(attrs || {}).forEach(([key, value]) => node.setAttribute(key, value));
    if (text !== undefined) node.textContent = text;
    return node;
  }
  function button(className, text, label) {
    const node = element('button', className, text);
    node.type = 'button';
    if (label) node.setAttribute('aria-label', label);
    return node;
  }
  function mount(container, rawPlaces, options = {}) {
    if (!container) throw new Error(l('A map container is required.', 'Se necesita un contenedor para el mapa.'));
    const places = (rawPlaces || []).map((place, index) => {
      const lat = Number(place.lat ?? place.latitude ?? place.coordinates?.[1]);
      const lon = Number(place.lon ?? place.lng ?? place.longitude ?? place.coordinates?.[0]);
      return {...place, id: String(place.id ?? index), name: place.name || place.title || l('A new place', 'Un lugar nuevo'),
        family: place.family !== undefined ? Boolean(place.family) : Boolean(place.familyNote || place.category === 'Family'),
        lat, lon, point: project(lat, lon)};
    }).filter(place => Number.isFinite(place.lat) && Number.isFinite(place.lon) &&
      place.lat >= -90 && place.lat <= 90 && place.lon >= -180 && place.lon <= 180);
    const visited = new Set(options.visited || []);
    const listeners = [], pointers = new Map();
    let disposed = false, frameRequest = 0, lastDragAt = 0;
    let width = 800, height = 400, fit = .8, zoom = 1, center = {x: 500, y: 250};
    let activeFilter = 'all', gesture = null;
    const shell = element('section', 'map-shell');
    shell.setAttribute('aria-label', l("Max's world map", 'El mapa del mundo de Max'));
    const toolbar = element('div', 'map-toolbar');
    const filters = element('div', 'map-filters');
    filters.setAttribute('role', 'group');
    filters.setAttribute('aria-label', l('Choose which places to show', 'Elige qué lugares mostrar'));
    const filterButtons = [];
    [['all', l('All places', 'Todos los lugares')], ['family', l('Family & favorites', 'Familia y favoritos')], ['discoveries', l('Surprises', 'Sorpresas')]].forEach(([value, label]) => {
      const node = button('map-filter', label);
      node.dataset.filter = value;
      node.setAttribute('aria-pressed', value === 'all' ? 'true' : 'false');
      filterButtons.push(node);
      filters.append(node);
    });
    const controls = element('div', 'map-controls');
    controls.setAttribute('role', 'group');
    controls.setAttribute('aria-label', l('Map zoom', 'Acercar o alejar el mapa'));
    const minus = button('map-tool', '−', l('Zoom out', 'Alejar'));
    const plus = button('map-tool', '+', l('Zoom in', 'Acercar'));
    const reset = button('map-tool map-reset', l('Whole world', 'Todo el mundo'), l('Show the whole world', 'Mostrar todo el mundo'));
    controls.append(minus, plus, reset);
    toolbar.append(filters, controls);
    const frame = element('div', 'map-frame');
    frame.tabIndex = 0;
    frame.setAttribute('role', 'group');
    frame.setAttribute('aria-label', l('Interactive world map. Drag to move, pinch or use the zoom buttons. Use arrow keys to move the map.', 'Mapa del mundo interactivo. Arrastra para moverte y usa dos dedos o los botones para acercar o alejar. Usa las flechas del teclado para mover el mapa.'));
    const world = svgNode('svg', {viewBox: '0 0 1000 500', width: 1000, height: 500, class: 'map-world', 'aria-hidden': 'true'});
    const graticule = svgNode('g', {class: 'map-graticule'});
    for (let lon = -150; lon <= 150; lon += 30) {
      const x = project(0, lon).x;
      graticule.append(svgNode('path', {d: `M${x} 0V500`}));
    }
    for (let lat = -60; lat <= 60; lat += 30) {
      const y = project(lat, 0).y;
      graticule.append(svgNode('path', {d: `M0 ${y}H1000`, class: lat === 0 ? 'map-equator' : ''}));
    }
    world.append(graticule);
    const land = svgNode('g', {class: 'map-land'});
    LAND_PATHS.forEach(d => land.append(svgNode('path', {d})));
    world.append(land);
    const labels = svgNode('g', {class: 'map-labels'});
    CONTINENTS.forEach(([lon, lat, en, es]) => {
      const p = project(lat, lon);
      labels.append(svgNode('text', {x: p.x, y: p.y, 'text-anchor': 'middle'}, l(en, es)));
    });
    const equator = project(0, -166);
    labels.append(svgNode('text', {x: equator.x, y: equator.y - 5, class: 'map-ocean-label'}, l('EQUATOR', 'ECUADOR')));
    world.append(labels);
    const pins = element('div', 'map-pins');
    const compass = element('div', 'map-compass', '↑ N');
    compass.setAttribute('aria-hidden', 'true');
    const hint = element('p', 'map-hint', l('Tap a marker. Numbers hold more places.', 'Toca un marcador. Los números agrupan más lugares.'));
    const picker = element('div', 'map-picker');
    picker.hidden = true;
    picker.setAttribute('role', 'region');
    picker.setAttribute('aria-label', l('Places in this part of the map', 'Lugares en esta parte del mapa'));
    const pickerHead = element('div', 'map-picker-head');
    const pickerTitle = element('strong', '', l('Choose a place', 'Elige un lugar'));
    const pickerClose = button('map-picker-close', '×', l('Close nearby places', 'Cerrar lugares cercanos'));
    const pickerList = element('div', 'map-picker-list');
    const pickerZoom = button('map-picker-zoom', l('Zoom in here', 'Acercar aquí'));
    let selectedCluster = null;
    pickerHead.append(pickerTitle, pickerClose);
    picker.append(pickerHead, pickerList, pickerZoom);
    frame.append(world, pins, compass, hint, picker);
    const footer = element('div', 'map-footer');
    const legend = element('p', 'map-legend');
    const familyKey = element('span', 'map-key map-key-family', l('Family & favorites', 'Familia y favoritos'));
    const newKey = element('span', 'map-key map-key-discovery', l('New discoveries', 'Nuevos descubrimientos'));
    const visitedKey = element('span', 'map-key map-key-visited', l('✓ Opened', '✓ Visitados'));
    legend.append(familyKey, newKey, visitedKey);
    const count = element('p', 'map-count');
    footer.append(legend, count);
    const directory = element('details', 'map-directory');
    const summary = element('summary', '', l('Find a place by name', 'Busca un lugar por su nombre'));
    const searchLabel = element('label', 'map-search-label', l('Find a place', 'Busca un lugar'));
    const search = element('input', 'map-search');
    search.type = 'search';
    search.placeholder = l('Try Japan, Hawaii, or Ecuador…', 'Prueba Japón, Hawái o Ecuador…');
    search.autocomplete = 'off';
    search.spellcheck = false;
    searchLabel.append(search);
    const directoryList = element('div', 'map-directory-list');
    const searchStatus = element('p', 'map-search-status');
    searchStatus.setAttribute('aria-live', 'polite');
    directory.append(summary, searchLabel, searchStatus, directoryList);
    const note = element('p', 'map-note', l('This flat map stretches shapes near the poles. Map outlines: Natural Earth.', 'Este mapa plano estira las formas cerca de los polos. Contornos del mapa: Natural Earth.'));
    const live = element('p', 'map-sr-only');
    live.setAttribute('role', 'status');
    live.setAttribute('aria-live', 'polite');
    shell.append(toolbar, frame, footer, directory, note, live);
    container.replaceChildren(shell);

    function on(node, event, handler, settings) {
      node.addEventListener(event, handler, settings);
      listeners.push(() => node.removeEventListener(event, handler, settings));
    }
    function selectedPlaces() {
      return places.filter(place => activeFilter === 'all' || (activeFilter === 'family' ? place.family : !place.family));
    }
    function constrain() {
      const scale = fit * zoom;
      const xMargin = Math.min(500, width / (2 * scale));
      const yMargin = Math.min(250, height / (2 * scale));
      center.x = clamp(center.x, xMargin, 1000 - xMargin);
      center.y = clamp(center.y, yMargin, 500 - yMargin);
    }
    function position(point) {
      const scale = fit * zoom;
      return {x: width / 2 + (point.x - center.x) * scale, y: height / 2 + (point.y - center.y) * scale};
    }
    function closePicker() { picker.hidden = true; }
    function select(place) {
      visited.add(place.id);
      closePicker();
      draw();
      if (typeof options.onSelect === 'function') options.onSelect(place.id);
    }
    function placeButton(place) {
      const node = button('map-place-button');
      const icon = element('span', 'map-place-icon', place.emoji || (place.family ? '★' : '↗'));
      icon.setAttribute('aria-hidden', 'true');
      node.append(icon, element('span', 'map-place-name', place.name));
      if (visited.has(place.id)) {
        const tick = element('span', 'map-place-tick', '✓');
        tick.setAttribute('aria-label', l('Already opened', 'Ya visitado'));
        node.append(tick);
      }
      node.addEventListener('click', () => select(place));
      return node;
    }
    function showCluster(cluster) {
      selectedCluster = cluster;
      pickerTitle.textContent = cluster.places.length === 1 ? l('Explore this place', 'Explora este lugar') : l(`${cluster.places.length} places to explore`, `${cluster.places.length} lugares para explorar`);
      pickerList.replaceChildren(...cluster.places.sort((a, b) => a.name.localeCompare(b.name, locale())).map(placeButton));
      picker.hidden = false;
      pickerZoom.disabled = zoom >= 8;
      const first = pickerList.querySelector('button');
      if (first) first.focus({preventScroll: true});
    }
    function clustersFor(list) {
      // Cluster in screen pixels so every marker keeps a full 44 px touch target.
      const groups = [];
      for (const place of list) {
        const p = position(place.point);
        if (p.x < -20 || p.y < -20 || p.x > width + 20 || p.y > height + 20) continue;
        const group = groups.find(g => Math.hypot(g.x - p.x, g.y - p.y) < 47);
        if (group) {
          group.places.push(place);
          const n = group.places.length;
          group.x += (p.x - group.x) / n;
          group.y += (p.y - group.y) / n;
        } else groups.push({x: p.x, y: p.y, places: [place]});
      }
      // Centroids can move during grouping. Merge again to avoid overlapping taps.
      let changed = true;
      while (changed) {
        changed = false;
        outer: for (let i = 0; i < groups.length; i++) for (let j = i + 1; j < groups.length; j++) {
          const a = groups[i], b = groups[j];
          if (Math.hypot(a.x - b.x, a.y - b.y) < 47) {
            const total = a.places.length + b.places.length;
            a.x = (a.x * a.places.length + b.x * b.places.length) / total;
            a.y = (a.y * a.places.length + b.y * b.places.length) / total;
            a.places.push(...b.places);
            groups.splice(j, 1);
            changed = true;
            break outer;
          }
        }
      }
      return groups;
    }
    function draw() {
      if (disposed) return;
      const scale = fit * zoom;
      world.style.transform = `translate(${width / 2 - center.x * scale}px, ${height / 2 - center.y * scale}px) scale(${scale})`;
      labels.style.opacity = zoom > 3 ? '0' : '1';
      const list = selectedPlaces();
      const nodes = clustersFor(list).map(cluster => {
        const isCluster = cluster.places.length > 1;
        const place = cluster.places[0];
        const hasFamily = cluster.places.some(item => item.family);
        const allVisited = cluster.places.every(item => visited.has(item.id));
        const names = cluster.places.map(item => item.name).join(', ');
        const label = isCluster ? l(`${cluster.places.length} places: ${names}`, `${cluster.places.length} lugares: ${names}`) : l(`Explore ${place.name}${visited.has(place.id) ? ', already opened' : ''}`, `Explora ${place.name}${visited.has(place.id) ? ', ya visitado' : ''}`);
        const node = button(`map-pin${hasFamily ? ' map-pin-family' : ''}${isCluster ? ' map-pin-cluster' : ''}${allVisited ? ' map-pin-visited' : ''}`, '', label);
        node.style.left = `${clamp(cluster.x, 23, width - 23)}px`;
        node.style.top = `${clamp(cluster.y, 23, height - 23)}px`;
        node.title = isCluster ? l(`${cluster.places.length} places here`, `${cluster.places.length} lugares aquí`) : place.name;
        const core = element('span', 'map-pin-core', isCluster ? String(cluster.places.length) : hasFamily ? '★' : '•');
        core.setAttribute('aria-hidden', 'true');
        node.append(core);
        node.addEventListener('click', () => {
          if (Date.now() - lastDragAt < 180) return;
          if (isCluster) showCluster(cluster); else select(place);
        });
        return node;
      });
      pins.replaceChildren(...nodes);
      minus.disabled = zoom <= 1.001;
      plus.disabled = zoom >= 8;
      const opened = places.filter(place => visited.has(place.id)).length;
      count.textContent = l(`${list.length} ${list.length === 1 ? 'map stop' : 'map stops'} · ${opened} opened`, `${list.length} ${list.length === 1 ? 'lugar en el mapa' : 'lugares en el mapa'} · ${opened} ${opened === 1 ? 'visitado' : 'visitados'}`);
      frame.classList.toggle('map-zoomed', zoom > 1.01);
    }
    function scheduleDraw() {
      if (frameRequest || disposed) return;
      frameRequest = global.requestAnimationFrame(() => {frameRequest = 0; draw();});
    }
    function resize() {
      const bounds = frame.getBoundingClientRect();
      width = bounds.width || frame.clientWidth || 800;
      height = bounds.height || frame.clientHeight || 400;
      fit = Math.min(width / 1000, height / 500);
      constrain();
      draw();
    }
    function changeZoom(next, anchor) {
      const old = fit * zoom;
      const point = anchor || {x: width / 2, y: height / 2};
      const worldPoint = {x: center.x + (point.x - width / 2) / old, y: center.y + (point.y - height / 2) / old};
      zoom = clamp(next, 1, 8);
      center.x = worldPoint.x - (point.x - width / 2) / (fit * zoom);
      center.y = worldPoint.y - (point.y - height / 2) / (fit * zoom);
      constrain();
      closePicker();
      draw();
    }
    function renderDirectory() {
      const query = normalizeSearch(search.value);
      const list = selectedPlaces().filter(place => normalizeSearch([place.name, place.country, place.region, place.id, place.wikiTitle, ...(Array.isArray(place.searchAliases) ? place.searchAliases : [place.searchAliases])].filter(Boolean).join(' ')).includes(query));
      directoryList.replaceChildren(...list.sort((a, b) => a.name.localeCompare(b.name, locale())).map(placeButton));
      searchStatus.textContent = list.length ? l(`${list.length} ${list.length === 1 ? 'place' : 'places'} to explore`, `${list.length} ${list.length === 1 ? 'lugar' : 'lugares'} para explorar`) : l('No match yet. Try a different place name.', 'Todavía no hay resultados. Prueba con otro nombre.');
    }
    on(filters, 'click', event => {
      const node = event.target.closest('[data-filter]');
      if (!node) return;
      activeFilter = node.dataset.filter;
      filterButtons.forEach(item => item.setAttribute('aria-pressed', String(item === node)));
      zoom = 1; center = {x: 500, y: 250};
      closePicker(); draw(); renderDirectory();
      live.textContent = l(`${selectedPlaces().length} ${node.textContent.toLowerCase()} on the map.`, `${selectedPlaces().length} ${selectedPlaces().length === 1 ? 'lugar' : 'lugares'} en el mapa. Filtro: ${node.textContent.toLocaleLowerCase('es')}.`);
    });
    on(minus, 'click', () => {changeZoom(zoom / 1.65); live.textContent = l(`Zoom ${Math.round(zoom * 100)} percent.`, `Ampliación del ${Math.round(zoom * 100)} por ciento.`);});
    on(plus, 'click', () => {changeZoom(zoom * 1.65); live.textContent = l(`Zoom ${Math.round(zoom * 100)} percent.`, `Ampliación del ${Math.round(zoom * 100)} por ciento.`);});
    on(reset, 'click', () => {zoom = 1; center = {x: 500, y: 250}; closePicker(); draw(); live.textContent = l('The whole world is showing.', 'Se muestra todo el mundo.');});
    on(pickerClose, 'click', () => {closePicker(); frame.focus({preventScroll: true});});
    on(pickerZoom, 'click', () => {
      if (!selectedCluster) return;
      const list = selectedCluster.places;
      center = {x: list.reduce((n, place) => n + place.point.x, 0) / list.length,
        y: list.reduce((n, place) => n + place.point.y, 0) / list.length};
      zoom = clamp(zoom * 2, 1, 8);
      constrain(); closePicker(); draw(); frame.focus({preventScroll: true});
      live.textContent = l('Zoomed in on those places. Tap a marker to explore.', 'Nos acercamos a esos lugares. Toca un marcador para explorar.');
    });
    on(search, 'input', renderDirectory);
    on(directory, 'toggle', () => {if (directory.open) renderDirectory();});
    on(frame, 'keydown', event => {
      if (event.key === 'Escape' && !picker.hidden) {closePicker(); frame.focus({preventScroll: true}); return;}
      if (event.target !== frame) return;
      const amount = 60 / (fit * zoom);
      if (event.key === 'ArrowLeft') center.x -= amount;
      else if (event.key === 'ArrowRight') center.x += amount;
      else if (event.key === 'ArrowUp') center.y -= amount;
      else if (event.key === 'ArrowDown') center.y += amount;
      else if (event.key === '+' || event.key === '=') changeZoom(zoom * 1.65);
      else if (event.key === '-') changeZoom(zoom / 1.65);
      else return;
      event.preventDefault(); constrain(); scheduleDraw();
    });
    function localPoint(event) {
      const bounds = frame.getBoundingClientRect();
      return {x: event.clientX - bounds.left, y: event.clientY - bounds.top};
    }
    function newGesture() {
      const points = [...pointers.values()];
      if (points.length > 1) {
        const mid = {x: (points[0].x + points[1].x) / 2, y: (points[0].y + points[1].y) / 2};
        gesture = {type: 'pinch', startZoom: zoom, distance: Math.max(1, Math.hypot(points[0].x - points[1].x, points[0].y - points[1].y)),
          world: {x: center.x + (mid.x - width / 2) / (fit * zoom), y: center.y + (mid.y - height / 2) / (fit * zoom)}};
      } else if (points.length === 1) gesture = {type: 'pan', start: points[0], center: {...center}};
      else gesture = null;
    }
    on(frame, 'pointerdown', event => {
      if (event.target.closest('button, input, .map-picker')) return;
      if (event.pointerType === 'mouse' && event.button !== 0) return;
      pointers.set(event.pointerId, localPoint(event));
      try {frame.setPointerCapture(event.pointerId);} catch (_) {}
      newGesture();
      frame.classList.add('map-dragging');
      closePicker();
    });
    on(frame, 'pointermove', event => {
      if (!pointers.has(event.pointerId) || !gesture) return;
      pointers.set(event.pointerId, localPoint(event));
      const points = [...pointers.values()];
      if (gesture.type === 'pinch' && points.length > 1) {
        const distance = Math.hypot(points[0].x - points[1].x, points[0].y - points[1].y);
        const mid = {x: (points[0].x + points[1].x) / 2, y: (points[0].y + points[1].y) / 2};
        zoom = clamp(gesture.startZoom * distance / gesture.distance, 1, 8);
        center.x = gesture.world.x - (mid.x - width / 2) / (fit * zoom);
        center.y = gesture.world.y - (mid.y - height / 2) / (fit * zoom);
        lastDragAt = Date.now();
      } else if (points.length === 1) {
        const dx = points[0].x - gesture.start.x, dy = points[0].y - gesture.start.y;
        center.x = gesture.center.x - dx / (fit * zoom);
        center.y = gesture.center.y - dy / (fit * zoom);
        if (Math.hypot(dx, dy) > 6) lastDragAt = Date.now();
      }
      constrain(); scheduleDraw();
    });
    function pointerEnd(event) {
      if (!pointers.has(event.pointerId)) return;
      pointers.delete(event.pointerId);
      if (!pointers.size) frame.classList.remove('map-dragging');
      newGesture();
    }
    on(frame, 'pointerup', pointerEnd);
    on(frame, 'pointercancel', pointerEnd);
    on(frame, 'lostpointercapture', pointerEnd);
    let observer;
    if (global.ResizeObserver) {observer = new ResizeObserver(resize); observer.observe(frame);}
    else on(global, 'resize', resize);
    resize(); renderDirectory();
    function cleanup() {
      if (disposed) return;
      disposed = true;
      if (frameRequest) global.cancelAnimationFrame(frameRequest);
      if (observer) observer.disconnect();
      listeners.forEach(remove => remove());
      pointers.clear();
      shell.remove();
    }
    cleanup.setVisited = function (ids) {
      visited.clear();
      for (const id of ids || []) visited.add(id);
      draw(); renderDirectory();
    };
    cleanup.focus = function (id) {
      if (disposed) return false;
      const place = places.find(item => item.id === String(id));
      if (!place) return false;
      if (!selectedPlaces().includes(place)) {
        activeFilter = 'all';
        filterButtons.forEach(item => item.setAttribute('aria-pressed', String(item.dataset.filter === 'all')));
        renderDirectory();
      }
      center = {...place.point};
      zoom = Math.max(zoom, 3.2);
      constrain(); draw();
      showCluster({places: [place]});
      live.textContent = l(`${place.name} is centered on the map. Choose it to learn more.`, `${place.name} está en el centro del mapa. Elígelo para aprender más.`);
      return true;
    };
    return cleanup;
  }
  function mini(place) {
    const lat = Number(place.lat ?? place.latitude ?? place.coordinates?.[1]);
    const lon = Number(place.lon ?? place.lng ?? place.longitude ?? place.coordinates?.[0]);
    const valid = Number.isFinite(lat) && Number.isFinite(lon) && lat >= -90 && lat <= 90 && lon >= -180 && lon <= 180;
    const pin = valid ? project(lat, lon) : null;
    const escape = value => String(value).replace(/[&<>"']/g, c => ({'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'}[c]));
    const name = place.name || place.title || l('This place', 'Este lugar');
    const label = escape(l(`${name} on a world map`, `${name} en un mapa del mundo`));
    return `<svg class="map-mini" viewBox="0 0 1000 500" role="img" aria-label="${label}" xmlns="${NS}"><rect width="1000" height="500" rx="24" fill="#cee9e2"/><g fill="#f5f1dc" stroke="#739c8a" stroke-width="1.2" fill-rule="evenodd">${LAND_PATHS.map(d => `<path d="${d}"/>`).join('')}</g><path d="M0 250H1000" fill="none" stroke="#648b86" stroke-width="1.2" stroke-dasharray="7 7"/>${pin ? `<circle cx="${pin.x.toFixed(2)}" cy="${pin.y.toFixed(2)}" r="15" fill="#f57242" stroke="#fffdf5" stroke-width="5"/><circle cx="${pin.x.toFixed(2)}" cy="${pin.y.toFixed(2)}" r="4" fill="#542610"/>` : ''}</svg>`;
  }
  global.MLL_MAP = {mount, project, mini};
})(window);

;

/* ===== practice.js ===== */
/* Max's Learning Lab: five quiet, touch-first learning activities.
   No network, timers, audio requirement, or randomly generated score IDs. */
(function () {
  'use strict';
  const WORDS = {
    en: [
      ['sun','SUN','The bright star that lights our day.','☀️'],
      ['moon','MOON','Earth has one of these. It shines by reflecting sunlight.','🌙'],
      ['fish','FISH','An animal with fins that lives in water.','🐟'],
      ['bear','BEAR','A large furry animal with strong paws.','🐻'],
      ['bird','BIRD','An animal with feathers and a beak.','🐦'],
      ['frog','FROG','A hopping animal that starts life as a tadpole.','🐸'],
      ['book','BOOK','Pages full of words or pictures, all joined together.','📖'],
      ['tree','TREE','A tall plant with a trunk and branches.','🌳'],
      ['hand','HAND','The part of your body with fingers and a thumb.','✋'],
      ['star','STAR','Our Sun is one. Many more shine far away at night.','⭐'],
      ['boat','BOAT','A small vehicle that floats on water.','⛵'],
      ['house','HOUSE','A building where a family can live.','🏠'],
      ['flower','FLOWER','The colorful part of many plants that can make seeds.','🌼'],
      ['shark','SHARK','A fish with a skeleton made of cartilage. Max caught a lemon one!','🦈'],
      ['apple','APPLE','A crunchy fruit that can be red, green, or yellow.','🍎'],
      ['shell','SHELL','A hard cover that protects a snail.','🐚'],
      ['train','TRAIN','Linked cars that travel along a railway.','🚂'],
      ['whale','WHALE','A large ocean mammal that breathes air.','🐋'],
      ['cloud','CLOUD','Tiny water drops or ice crystals floating together in the sky.','☁️'],
      ['plant','PLANT','A living thing like grass, a flower, or a tree.','🌱']
    ],
    es: [
      ['sol','SOL','La estrella que ilumina nuestro día.','☀️'],
      ['luna','LUNA','La Tierra tiene una. Brilla al reflejar la luz del Sol.','🌙'],
      ['pez','PEZ','Un animal con aletas que vive en el agua.','🐟'],
      ['oso','OSO','Un animal grande y peludo con patas fuertes.','🐻'],
      ['ave','AVE','Un animal con plumas y pico.','🐦'],
      ['rana','RANA','Un animal que salta y empieza su vida como renacuajo.','🐸'],
      ['libro','LIBRO','Páginas con palabras o dibujos, unidas para leer.','📖'],
      ['arbol','ÁRBOL','Una planta alta con tronco y ramas.','🌳'],
      ['mano','MANO','La parte del cuerpo que tiene los dedos y el pulgar.','✋'],
      ['estrella','ESTRELLA','El Sol es una. Hay muchas más que brillan de noche.','⭐'],
      ['barco','BARCO','Un vehículo que flota y viaja por el agua.','⛵'],
      ['casa','CASA','Un edificio donde puede vivir una familia.','🏠'],
      ['flor','FLOR','La parte colorida de muchas plantas que puede producir semillas.','🌼'],
      ['tiburon','TIBURÓN','Un pez con esqueleto de cartílago. ¡Max pescó uno de la especie limón!','🦈'],
      ['manzana','MANZANA','Una fruta crujiente que puede ser roja, verde o amarilla.','🍎'],
      ['concha','CONCHA','Una cubierta dura que protege a un caracol.','🐚'],
      ['tren','TREN','Vagones unidos que viajan sobre vías.','🚂'],
      ['ballena','BALLENA','Un gran mamífero del océano que respira aire.','🐋'],
      ['nube','NUBE','Gotitas de agua o cristales de hielo que flotan juntos en el cielo.','☁️'],
      ['planta','PLANTA','Un ser vivo como el pasto, una flor o un árbol.','🌱']
    ]
  };
  const EXTRA_WORDS = [
    ['dog','DOG','A pet that barks and wags its tail.','🐕','PERRO','Una mascota que ladra y mueve la cola.'],
    ['cat','CAT','A pet that meows and has whiskers.','🐈','GATO','Una mascota que maúlla y tiene bigotes.'],
    ['duck','DUCK','A swimming bird that quacks.','🦆','PATO','Un ave que nada y hace cuac.'],
    ['lion','LION','A big wild cat. Males often have a mane.','🦁','LEÓN','Un gran felino. Los machos suelen tener melena.'],
    ['kangaroo','KANGAROO','An Australian animal that hops and carries its baby in a pouch.','🦘','CANGURO','Un animal australiano que salta y lleva a su cría en una bolsa.'],
    ['zebra','ZEBRA','An African animal with black and white stripes.','🦓','CEBRA','Un animal africano con rayas blancas y negras.'],
    ['tiger','TIGER','A large orange wild cat with dark stripes.','🐅','TIGRE','Un gran felino anaranjado con rayas oscuras.'],
    ['panda','PANDA','A black and white bear that eats lots of bamboo.','🐼','PANDA','Un oso blanco y negro que come mucho bambú.'],
    ['koala','KOALA','An Australian animal that eats eucalyptus leaves.','🐨','KOALA','Un animal australiano que come hojas de eucalipto.'],
    ['rabbit','RABBIT','A hopping animal with long ears and a short fluffy tail.','🐇','CONEJO','Un animal saltador con orejas largas y una cola corta y suave.'],
    ['horse','HORSE','A large farm animal that neighs and can carry a rider.','🐎','CABALLO','Un animal grande que relincha y puede llevar a un jinete.'],
    ['goat','GOAT','A farm animal that bleats; many have horns and a little beard.','🐐','CABRA','Un animal de granja que bala; muchas tienen cuernos y barbita.'],
    ['sheep','SHEEP','A farm animal with a thick wool coat.','🐑','OVEJA','Un animal de granja cubierto de lana.'],
    ['cow','COW','A farm animal that moos and gives milk.','🐄','VACA','Un animal de granja que hace mu y da leche.'],
    ['pig','PIG','A farm animal with a snout that oinks.','🐖','CERDO','Un animal de granja con hocico que hace oinc.'],
    ['monkey','MONKEY','An animal with grasping hands; many kinds swing through trees.','🐒','MONO','Un animal con manos para agarrar; muchos saltan entre árboles.'],
    ['elephant','ELEPHANT','A huge animal with a long trunk.','🐘','ELEFANTE','Un animal enorme con una trompa larga.'],
    ['giraffe','GIRAFFE','A spotted African animal with a very long neck.','🦒','JIRAFA','Un animal africano con manchas y un cuello muy largo.'],
    ['turtle','TURTLE','A reptile that carries a hard shell on its back.','🐢','TORTUGA','Un reptil que lleva un caparazón duro en la espalda.'],
    ['dolphin','DOLPHIN','A clever ocean mammal with a beak-like snout that often leaps.','🐬','DELFÍN','Un mamífero del mar con hocico alargado que suele dar saltos.'],
    ['mouse','MOUSE','A tiny rodent with a long thin tail.','🐁','RATÓN','Un roedor pequeño con una cola larga y delgada.'],
    ['owl','OWL','A bird with big eyes; many kinds hunt at night.','🦉','BÚHO','Un ave de ojos grandes; muchas especies cazan de noche.'],
    ['eagle','EAGLE','A large hunting bird with strong claws and a hooked beak.','🦅','ÁGUILA','Un ave cazadora grande con garras fuertes y pico curvo.'],
    ['penguin','PENGUIN','A flightless seabird that swims with flipper-like wings.','🐧','PINGÜINO','Un ave marina que no vuela y usa sus alas para nadar.'],
    ['butterfly','BUTTERFLY','An insect with wide colorful wings that begins as a caterpillar.','🦋','MARIPOSA','Un insecto de alas grandes y coloridas que primero es una oruga.'],
    ['bee','BEE','A buzzing insect; honey-making kinds live in a hive.','🐝','ABEJA','Un insecto que zumba; las que hacen miel viven en colmenas.'],
    ['ant','ANT','A tiny insect that often follows a trail with its colony.','🐜','HORMIGA','Un insecto pequeño que suele caminar en fila con su colonia.'],
    ['spider','SPIDER','An eight-legged animal; many kinds make silk webs.','🕷️','ARAÑA','Un animal de ocho patas; muchas tejen redes de seda.'],
    ['snail','SNAIL','A slow animal with a soft body and a spiral shell.','🐌','CARACOL','Un animal lento de cuerpo blando y concha en espiral.'],
    ['crab','CRAB','A hard-shelled animal with two pincers that often walks sideways.','🦀','CANGREJO','Un animal de caparazón duro y dos pinzas que suele caminar de lado.'],
    ['banana','BANANA','A long yellow fruit that you peel before eating.','🍌','BANANO','Una fruta amarilla y alargada que pelas antes de comer.'],
    ['carrot','CARROT','A crunchy orange root vegetable.','🥕','ZANAHORIA','Una raíz anaranjada y crujiente que comemos.'],
    ['potato','POTATO','An underground vegetable used to make fries or mash.','🥔','PAPA','Un tubérculo que crece bajo tierra y sirve para hacer puré.'],
    ['tomato','TOMATO','A red, juicy fruit often used in pasta sauce.','🍅','TOMATE','Un fruto rojo y jugoso que se usa en salsa para pasta.'],
    ['corn','CORN','A crop with yellow kernels growing on a cob.','🌽','MAÍZ','Una planta con granos que crecen juntos en una mazorca.'],
    ['bread','BREAD','A baked food you can slice to make toast or a sandwich.','🍞','PAN','Un alimento horneado que puedes tostar o usar en un sándwich.'],
    ['cheese','CHEESE','A food made from milk that can melt on pizza.','🧀','QUESO','Un alimento hecho con leche que puede derretirse sobre la pizza.'],
    ['egg','EGG','An oval food with a shell, a white, and a yolk.','🥚','HUEVO','Un alimento ovalado con cáscara, clara y yema.'],
    ['milk','MILK','A white drink from cows that is used to make cheese.','🥛','LECHE','Una bebida blanca de las vacas que sirve para hacer queso.'],
    ['grape','GRAPE','A small round fruit that grows in bunches and can become a raisin.','🍇','UVA','Una fruta pequeña que crece en racimos y puede convertirse en pasa.'],
    ['pencil','PENCIL','A writing tool with a graphite tip; its marks can be erased.','✏️','LÁPIZ','Una herramienta para escribir con punta de grafito que se puede borrar.'],
    ['paper','PAPER','A thin sheet you can write on, fold, or cut.','📄','PAPEL','Una hoja delgada para escribir, doblar o recortar.'],
    ['ruler','RULER','A straight tool marked with units for measuring length.','📏','REGLA','Una herramienta recta con marcas para medir longitudes.'],
    ['eraser','ERASER','A small tool that rubs out pencil marks.','⌫','BORRADOR','Un objeto que sirve para quitar las marcas de lápiz.'],
    ['brush','BRUSH','A painting tool with bristles and a handle.','🖌️','PINCEL','Una herramienta con mango y pelitos que sirve para pintar.'],
    ['clock','CLOCK','A device that shows the time with numbers or hands.','🕒','RELOJ','Un aparato que muestra la hora con números o manecillas.'],
    ['spoon','SPOON','A utensil with a small bowl for eating soup.','🥄','CUCHARA','Un utensilio con forma de cuenco pequeño para tomar sopa.'],
    ['fork','FORK','A utensil with prongs for picking up food.','🍴','TENEDOR','Un utensilio con puntas para pinchar la comida.'],
    ['plate','PLATE','A flat dish that holds your meal.','🍽️','PLATO','Un recipiente plano donde sirves la comida.'],
    ['cup','CUP','A small drinking container, often with a handle.','☕','TAZA','Un recipiente pequeño para beber que suele tener asa.'],
    ['chair','CHAIR','A seat for one person, usually with a back and four legs.','🪑','SILLA','Un asiento para una persona, normalmente con respaldo y cuatro patas.'],
    ['table','TABLE','Furniture with a flat top where you can eat or work.','🍽️','MESA','Un mueble con una superficie plana para comer o trabajar.'],
    ['door','DOOR','The part of a room you open to walk in or out.','🚪','PUERTA','La parte de un cuarto que abres para entrar o salir.'],
    ['window','WINDOW','An opening with glass that lets you see outside.','🪟','VENTANA','Una abertura con vidrio que te deja mirar hacia afuera.'],
    ['pillow','PILLOW','The soft cushion under your head when you sleep.','🛏️','ALMOHADA','El cojín suave donde apoyas la cabeza para dormir.'],
    ['blanket','BLANKET','A soft covering that keeps you warm in bed.','🛏️','MANTA','Una cubierta suave que te mantiene caliente en la cama.'],
    ['shoe','SHOE','Something you wear on one foot to protect it outside.','👟','ZAPATO','Algo que llevas en un pie para protegerlo al caminar afuera.'],
    ['hat','HAT','Something you wear on your head; some have a brim for shade.','🎩','SOMBRERO','Algo que llevas en la cabeza y tiene un ala para dar sombra.'],
    ['coat','COAT','A warm outer layer of clothing with sleeves.','🧥','ABRIGO','Una prenda exterior con mangas que te protege del frío.'],
    ['sock','SOCK','A soft piece of clothing worn on your foot inside a shoe.','🧦','MEDIA','Una prenda suave que llevas en el pie dentro del zapato.'],
    ['river','RIVER','A long natural flow of water that moves toward a lake or sea.','🏞️','RÍO','Una corriente natural de agua que avanza hacia un lago o el mar.'],
    ['mountain','MOUNTAIN','A very high landform with a peak.','⛰️','MONTAÑA','Una elevación de terreno muy alta que tiene una cima.'],
    ['island','ISLAND','A piece of land with water all around it.','🏝️','ISLA','Un pedazo de tierra rodeado de agua por todos lados.'],
    ['rainbow','RAINBOW','A colorful arc made when sunlight passes through water drops.','🌈','ARCOÍRIS','Un arco de colores que aparece cuando la luz pasa por gotas de agua.'],
    ['rain','RAIN','Drops of water falling from clouds.','🌧️','LLUVIA','Gotas de agua que caen de las nubes.'],
    ['snow','SNOW','Soft white ice crystals that fall from clouds.','❄️','NIEVE','Cristales blancos de hielo que caen de las nubes.'],
    ['wind','WIND','Moving air that can make leaves flutter.','💨','VIENTO','Aire en movimiento que puede agitar las hojas.'],
    ['rock','ROCK','A hard natural piece of Earth, made of minerals.','🪨','ROCA','Un trozo natural y duro de la Tierra, formado por minerales.'],
    ['seed','SEED','A tiny plant starter that can sprout roots and leaves.','🌱','SEMILLA','Una pequeña parte de una planta que puede brotar y producir raíces.'],
    ['leaf','LEAF','A usually green plant part that catches sunlight.','🍃','HOJA','Una parte de la planta, generalmente verde, que recibe la luz del Sol.'],
    ['rocket','ROCKET','A vehicle that shoots out hot gas to push itself toward space.','🚀','COHETE','Un vehículo que expulsa gases calientes para impulsarse hacia el espacio.'],
    ['planet','PLANET','A large round world that travels around a star.','🪐','PLANETA','Un mundo grande y redondo que viaja alrededor de una estrella.'],
    ['comet','COMET','An icy space object that can grow a glowing tail near the Sun.','☄️','COMETA','Un objeto helado del espacio que puede formar una cola cerca del Sol.'],
    ['magnet','MAGNET','An object that pulls certain metals, such as iron, toward it.','🧲','IMÁN','Un objeto que atrae ciertos metales, como el hierro.'],
    ['fossil','FOSSIL','A preserved trace or remain of a living thing from long ago.','🦴','FÓSIL','Un resto o una huella conservada de un ser vivo de hace mucho tiempo.'],
    ['volcano','VOLCANO','An opening in Earth where hot melted rock can come out.','🌋','VOLCÁN','Una abertura en la Tierra por donde puede salir roca derretida.'],
    ['robot','ROBOT','A machine built to carry out tasks using instructions.','🤖','ROBOT','Una máquina creada para realizar tareas siguiendo instrucciones.'],
    ['guitar','GUITAR','An instrument, usually with six strings, that you strum.','🎸','GUITARRA','Un instrumento que suele tener seis cuerdas y se toca rasgueando.'],
    ['drum','DRUM','An instrument with a tight surface you hit to make a beat.','🥁','TAMBOR','Un instrumento con una superficie tensa que golpeas para marcar el ritmo.'],
    ['camera','CAMERA','A device used to take photographs.','📷','CÁMARA','Un aparato que sirve para tomar fotografías.']
  ];
  EXTRA_WORDS.forEach(([id,en,enClue,icon,es,esClue])=>{WORDS.en.push([id,en,enClue,icon]);WORDS.es.push([id,es,esClue,icon]);});
  const BOARD_WORDS = [
    {id:'space',title:['Space explorers','Exploradores del espacio'],en:['SUN','MOON','STAR','MARS','EARTH'],es:['SOL','LUNA','ASTRO','MARTE','TIERRA']},
    {id:'animals',title:['Animal detectives','Detectives de animales'],en:['FROG','BEAR','FISH','LION','BIRD'],es:['RANA','OSO','PEZ','LEÓN','AVE']},
    {id:'water',title:['Out in the world','Por el mundo'],en:['BEACH','LAKE','HILL','RIVER','OCEAN'],es:['PLAYA','LAGO','MONTE','RÍO','MAR']},
    {id:'learning',title:['Brilliant brains','Mentes curiosas'],en:['BOOK','IDEA','COUNT','READ','WRITE'],es:['LIBRO','IDEA','SUMA','LEE','TRAZO']},
    {id:'garden',title:['Growing things','Cosas que crecen'],en:['TREE','LEAF','SEED','ROOT','FLOWER'],es:['ÁRBOL','HOJA','SEMILLA','RAÍZ','FLOR']}
  ];
  function generateMath(level){
    const limit=level==='stretch'?100:20,bank=[];
    const add=(a,b,op,result)=>{const operation={'+':'plus','−':'minus','×':'times','÷':'divide'}[op];bank.push({a,b,op,result,id:'practice:math:'+a+operation+b});};
    for(let a=0;a<=limit;a++)for(let b=0;b<=limit;b++){
      if(a+b<=limit)add(a,b,'+',a+b);
      if(a>=b)add(a,b,'−',a-b);
    }
    if(level==='stretch')for(const b of [2,5,10])for(let a=1;a<=10;a++){add(a,b,'×',a*b);add(a*b,b,'÷',a);}
    return bank;
  }
  function questionBank(api){
    const candidates=[...(api.questions||[])],data=api.data||{};
    for(const [type,records]of [['person',data.people||[]],['place',data.places||[]]])for(const record of records)for(const [index,q]of [record.quiz,record.quiz2].entries())if(q)candidates.push({...q,id:type+':'+record.id+':'+(index+1),question:(record.name||record.title||'')+': '+q.question,clue:(record.facts||[]).join(' ')});
    const seen=new Set();return candidates.filter(q=>{if(!q||!q.id||!Array.isArray(q.options)||!Number.isInteger(q.answer)||q.answer<0||q.answer>=q.options.length||seen.has(q.id))return false;seen.add(q.id);return true;});
  }
  function node(tag,cls,text){const n=document.createElement(tag);if(cls)n.className=cls;if(text!=null)n.textContent=text;return n;}
  function btn(text,fn,cls){const b=node('button',cls||'practice-button',text);b.type='button';b.addEventListener('click',fn);return b;}
  function shuffle(values){const copy=values.slice();for(let i=copy.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[copy[i],copy[j]]=[copy[j],copy[i]];}return copy;}
  function fold(text){return text.toUpperCase().normalize('NFD').replace(/N\u0303/g,'Ñ').replace(/[\u0300-\u036f]/g,'');}
  function seeded(seed){let s=seed>>>0;return()=>{s=(1664525*s+1013904223)>>>0;return s/4294967296;};}
  function seedOf(text){let s=17;for(const char of text)s=(s*31+char.charCodeAt(0))>>>0;return s;}
  function buildBoard(words,seed){
    const rand=seeded(seed),size=8,board=Array(size*size).fill(''),placements=[];
    for(const word of words.slice().sort((a,b)=>b.length-a.length)){
      const options=[];
      for(let r=0;r<size;r++)for(let c=0;c<size;c++)for(const vertical of [false,true]){
        if((vertical?r:c)+word.length>size)continue;
        const cells=Array.from(word,(_,i)=>(r+(vertical?i:0))*size+c+(vertical?0:i));
        if(cells.every((cell,i)=>!board[cell]||board[cell]===word[i]))options.push({cells,rank:rand()+cells.filter(cell=>board[cell]).length*2});
      }
      options.sort((a,b)=>b.rank-a.rank);
      // All supplied five-word sets fit. A deterministic retry keeps new content safe.
      if(!options.length)return buildBoard(words,seed+1);
      const chosen=options[0].cells;chosen.forEach((cell,i)=>board[cell]=word[i]);placements.push({word,cells:chosen});
    }
    const alphabet='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    for(let i=0;i<board.length;i++)if(!board[i])board[i]=alphabet[Math.floor(rand()*alphabet.length)];
    return {board,placements};
  }
  function mount(kind,host,api){
    api=api||{};const lang=api.lang==='es'?'es':'en',pick=(en,es)=>lang==='es'?es:en;
    const localAwards=new Set();let disposed=false,roundPoints=0;
    const titles={math:['Number lab','Laboratorio de números'],quiz:['Curiosity quiz','Preguntas curiosas'],spelling:['Spelling bee','A deletrear'],hangman:['Hangman','Ahorcado'],wordsearch:['Word explorer','Explorador de palabras']};
    const descriptions={math:['Small steps. Big number power.','Pasos pequeños. Grandes ideas con números.'],quiz:['Explore people and places. See what you remember.','Explora personas y lugares. Descubre lo que recuerdas.'],spelling:['A clue, some letters, and your clever brain.','Una pista, unas letras y tu mente curiosa.'],hangman:['Use the clue. Find the hidden letters.','Usa la pista. Encuentra las letras escondidas.'],wordsearch:['Find words hiding in the letter map.','Busca palabras escondidas en el mapa de letras.']};
    const title=titles[kind]||titles.math,description=descriptions[kind]||descriptions.math;
    const root=node('section','practice-lab practice-'+kind);root.dataset.activity=kind;
    const back=node('a','practice-back',pick('← Back to learning','← Volver a aprender'));back.href='#home';
    const heading=node('header','practice-heading');heading.append(node('p','practice-eyebrow',pick('THE PRACTICE LAB','EL LABORATORIO DE PRÁCTICA')),node('h1','',pick(...title)),node('p','practice-intro',pick(...description)));
    const stage=node('div','practice-stage');root.append(back,heading,stage);host.replaceChildren(root);
    function has(id){return localAwards.has(id)||!!api.hasAnswer?.(id);}
    function credit(id){if(has(id))return false;const earned=api.answer?!!api.answer(id):true;localAwards.add(id);if(earned)roundPoints+=1;return earned;}
    function earnText(earned){return earned?pick('+1 learning point!','¡+1 punto de aprendizaje!'):pick('Already in your score. Great practice!','Ya está en tu marcador. ¡Buena práctica!');}
    function feedback(){const p=node('p','practice-feedback');p.setAttribute('role','status');p.setAttribute('aria-live','polite');return p;}
    function progress(index,total,label){const row=node('div','practice-progress');row.append(node('strong','',pick(label||'Your discovery','Tu descubrimiento')+' '+(index+1)+' / '+total));const dots=node('span','practice-dots');dots.setAttribute('aria-hidden','true');for(let i=0;i<total;i++)dots.append(node('i',i<index?'done':i===index?'current':''));row.append(dots);return row;}
    function roundBank(bank,idOf){const fresh=bank.filter(q=>!has(idOf(q))),seen=bank.filter(q=>has(idOf(q)));return [...shuffle(fresh),...shuffle(seen)].slice(0,5);}
    function finish(restart){stage.replaceChildren();const panel=node('section','practice-finish');panel.append(node('span','practice-finish-icon','✦'),node('p','practice-eyebrow',pick('A LITTLE PRACTICE. A BIG IDEA.','UN POCO DE PRÁCTICA. UNA GRAN IDEA.')),node('h2','',pick('Look what you learned!','¡Mira todo lo que aprendiste!')),node('p','',pick('You explored five challenges. Your new points are waiting on the home page.','Exploraste cinco retos. Tus puntos nuevos te esperan en la página de inicio.')),node('strong','practice-round-score',pick(roundPoints+' new points',roundPoints+' puntos nuevos')));const actions=node('div','practice-actions');actions.append(btn(pick('Try five more','Prueba cinco más'),restart));const home=node('a','practice-button practice-button-light',pick('See my scoreboard','Ver mi marcador'));home.href='#home';actions.append(home);panel.append(actions);stage.append(panel);panel.querySelector('h2').tabIndex=-1;panel.querySelector('h2').focus({preventScroll:true});}
    function makeNext(done){return btn(pick('Next discovery →','Siguiente descubrimiento →'),done,'practice-button practice-next');}
    let preserveRound=!!api.preserveSelection;
    function nextID(key,ids){return api.nextRandom?.(key,ids)??ids[Math.floor(Math.random()*ids.length)];}
    function showChoiceRound(bank,idOf,draw,key){
      const ids=bank.map(idOf),byID=new Map(bank.map(q=>[idOf(q),q])),memory='random-current:'+key;
      let index=0,current=null;const stored=api.get?.(memory);
      function select(){current=byID.get(nextID(key,ids))||bank[0];api.set?.(memory,{id:idOf(current),index,points:roundPoints});}
      function start(){roundPoints=0;index=0;select();render();}
      function render(){if(disposed)return;if(index>=5){finish(start);return;}stage.replaceChildren();stage.dataset.challengeId=idOf(current);stage.append(progress(index,5));draw(current,()=>{index++;if(index<5)select();render();});}
      if(preserveRound&&stored&&byID.has(stored.id)){current=byID.get(stored.id);index=Number.isInteger(stored.index)?Math.max(0,Math.min(4,stored.index)):0;roundPoints=Number.isFinite(stored.points)?stored.points:0;render();}else start();preserveRound=false;
      return start;
    }
    function multipleChoice({question,options,answer,explain,clue},id,next,extra){
      const card=node('section','practice-card'),prompt=node('h2','practice-question',question);card.append(prompt);if(extra)card.append(extra);
      if(clue){const detail=node('details','practice-hint');detail.append(node('summary','',pick('Need a clue?','¿Quieres una pista?')),node('p','',clue));card.append(detail);}
      const opts=node('div','practice-options'),message=feedback(),nextButton=makeNext(next);nextButton.hidden=true;
      options.forEach((option,i)=>{const b=btn(String(option),()=>{if(i!==answer){b.classList.add('practice-try');b.setAttribute('aria-pressed','false');message.textContent=pick('Keep exploring. Try another answer.','Sigue explorando. Prueba otra respuesta.');return;}opts.querySelectorAll('button').forEach(n=>n.disabled=true);b.classList.remove('practice-try');b.classList.add('practice-correct');b.setAttribute('aria-pressed','true');message.classList.add('positive');message.textContent=pick('Yes! ','¡Sí! ')+(explain||'')+' '+earnText(credit(id));nextButton.hidden=false;},'practice-option');opts.append(b);});
      card.append(opts,message,nextButton);stage.append(card);
    }
    function math(){
      let level=api.get?.('mathLevel')==='stretch'?'stretch':'small';
      const controls=node('div','practice-levels');controls.setAttribute('aria-label',pick('Number range','Tamaño de los números'));
      for(const [id,en,es]of [['small','Up to 20','Hasta 20'],['stretch','Stretch: up to 100','Un reto: hasta 100']]){const b=btn(pick(en,es),()=>{level=id;api.set?.('mathLevel',level);preserveRound=false;launch();},'practice-level');b.dataset.level=id;controls.append(b);}heading.append(controls,node('p','practice-bank-note',pick('Fresh generated problems every round. Replay as much as you like; each different problem earns points once.','Problemas nuevos generados en cada ronda. Practica cuanto quieras; cada problema distinto da puntos una sola vez.')));
      const bankCount=node('p','practice-bank-note');heading.append(bankCount);
      function launch(){controls.querySelectorAll('button').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.level===level)));const bank=generateMath(level);bankCount.textContent=pick(bank.length.toLocaleString('en-US')+' different problems in this level',bank.length.toLocaleString('es-EC')+' problemas diferentes en este nivel');showChoiceRound(bank,q=>q.id,(q,next)=>{
        const set=new Set([q.result]);for(const n of shuffle([q.result-1,q.result+1,q.result+2,q.result-2,q.result+10,q.result-10])){if(n>=0&&n<=100)set.add(n);if(set.size===4)break;}const options=shuffle([...set]);
        let help=null;if(level==='small'){help=node('details','practice-hint practice-dot-hint');help.append(node('summary','',pick('Count with dots','Cuenta con los puntos')));const counters=node('div','practice-counters');counters.setAttribute('role','img');counters.setAttribute('aria-label',pick(q.op==='+'?q.a+' blue dots plus '+q.b+' yellow dots':q.a+' dots with '+q.b+' crossed out',q.op==='+'?q.a+' puntos azules más '+q.b+' amarillos':q.a+' puntos con '+q.b+' tachados'));const first=node('span','practice-counter-group');for(let i=0;i<q.a;i++)first.append(node('i',q.op==='−'&&i<q.b?'crossed':''));counters.append(first);if(q.op==='+'){counters.append(node('b','', '+'));const second=node('span','practice-counter-group yellow');for(let i=0;i<q.b;i++)second.append(node('i'));counters.append(second);}help.append(counters);}
        multipleChoice({question:q.a+' '+q.op+' '+q.b+' = ?',options,answer:options.indexOf(q.result),explain:q.a+' '+q.op+' '+q.b+' = '+q.result+'.'},q.id,next,help);
      },'practice:math:'+level);}launch();
    }
    function quiz(){
      const bank=questionBank(api);heading.append(node('p','practice-bank-note',pick(bank.length+' questions about people and places',bank.length+' preguntas sobre personas y lugares')));
      if(!bank.length){stage.append(node('p','practice-card',pick('Explore a person or a place. Their questions will be here to practice.','Explora una persona o un lugar. Aquí podrás practicar con sus preguntas.')));return;}
      showChoiceRound(bank,q=>q.id,(q,next)=>multipleChoice({...q,clue:q.clue||q.explain},q.id,next),'practice:quiz');
    }
    function wordRound(type,draw){
      const bank=WORDS[lang],idOf=w=>'practice:'+type+':'+lang+':'+w[0],memory='current-'+type+'-'+lang;
      const ids=bank.map((w,i)=>String(i)),sharedMemory='current-'+type;
      function randomIndex(){return Number(nextID('practice:'+type+':'+lang,ids));}
      let index=api.preserveSelection?Number(api.get?.(sharedMemory)??api.get?.(memory)):randomIndex();if(!Number.isInteger(index)||index<0||index>=bank.length)index=randomIndex();
      const navigation=node('div','practice-word-navigation'),label=node('label','practice-word-select-label',pick('Choose a numbered word','Elige una palabra numerada')),select=node('select','practice-word-select'),count=node('p','practice-bank-note');
      select.setAttribute('aria-label',pick('Choose word number','Elige el número de palabra'));label.append(select);navigation.append(btn(pick('← Previous','← Anterior'),()=>{index=(index+99)%100;render();},'practice-button practice-button-light'),label,btn(pick('Next →','Siguiente →'),()=>{index=randomIndex();render();},'practice-button practice-button-light'));heading.append(count,navigation);
      select.addEventListener('change',()=>{index=Number(select.value);render();});
      function render(){if(disposed)return;api.set?.(memory,index);api.set?.(sharedMemory,index);stage.replaceChildren();select.replaceChildren();bank.forEach((w,i)=>{const o=node('option','',pick('Word ','Palabra ')+String(i+1).padStart(3,'0')+(has(idOf(w))?' ✓':''));o.value=String(i);select.append(o);});select.value=String(index);const completed=bank.filter(w=>has(idOf(w))).length;count.textContent=pick('100 words to discover · '+completed+' completed','100 palabras por descubrir · '+completed+(completed===1?' completada':' completadas'));const marker=node('p','practice-word-counter',pick('Word ','Palabra ')+String(index+1).padStart(3,'0')+' / 100');stage.append(marker);draw(bank[index],()=>{index=randomIndex();render();});}
      render();
    }
    function spelling(){wordRound('spelling',(word,next)=>{
      const [id,target,clue,icon]=word,letters=[...target],scoreID='practice:spelling:'+lang+':'+id,storage='spelling-progress-'+lang+'-'+id,card=node('section','practice-card'),top=node('div','practice-word-clue');card.dataset.wordId=id;card.dataset.wordNumber=String(WORDS[lang].indexOf(word)+1);top.append(node('span','practice-clue-icon',icon),node('h2','practice-question',clue));card.append(top,node('p','practice-instruction',pick('Tap the letters to spell the word in the clue. Use every answer box; extra letters are there to make you think.','Toca las letras para escribir la palabra de la pista. Llena todas las casillas; hay letras extra para hacerte pensar.')));
      const answer=node('div','practice-letter-slots');answer.setAttribute('aria-label',pick('Your word','Tu palabra'));const tileBox=node('div','practice-letter-bank');tileBox.setAttribute('aria-label',pick('Choose letters','Elige letras'));const picked=[],tiles=[],message=feedback(),actions=node('div','practice-actions'),nextButton=makeNext(next);nextButton.hidden=true;let ended=has(scoreID);
      const alphabet=lang==='es'?'AEIOUBCDFGHLMPNRSTÑ':'AEIOUBCDFGHLMPNRST',extras=shuffle([...alphabet].filter(c=>!letters.includes(c))).slice(0,4),pool=shuffle([...letters,...extras]);
      function saveProgress(){api.set?.(storage,{letters:picked.map(p=>p.letter)});}
      function draw(){answer.replaceChildren();for(let i=0;i<letters.length;i++){const slot=node('span','practice-letter-slot',ended?letters[i]:(picked[i]?.letter||''));slot.setAttribute('aria-label',slot.textContent||pick('Empty letter','Letra vacía'));answer.append(slot);}check.disabled=ended||picked.length!==letters.length;backspace.disabled=ended||!picked.length;}
      for(const letter of pool){const tile=btn(letter,()=>{if(ended||picked.length>=letters.length)return;picked.push({letter,tile});tile.disabled=true;message.textContent='';saveProgress();draw();},'practice-letter');tile.setAttribute('aria-label',pick('Add letter ','Agrega la letra ')+letter);tiles.push(tile);tileBox.append(tile);}
      const backspace=btn(pick('⌫ Erase a letter','⌫ Borra una letra'),()=>{if(ended)return;const last=picked.pop();if(last)last.tile.disabled=false;message.textContent='';saveProgress();draw();},'practice-button practice-button-light');
      const check=btn(pick('Check my word','Revisar mi palabra'),()=>{if(ended)return;const attempt=picked.map(p=>p.letter).join('');if(attempt!==target){message.textContent=pick('Almost! Read the clue. Erase a letter and try again.','¡Casi! Lee la pista. Borra una letra e inténtalo otra vez.');return;}ended=true;tiles.forEach(tile=>tile.disabled=true);check.disabled=true;backspace.disabled=true;answer.classList.add('complete');message.classList.add('positive');message.textContent=target+'! '+earnText(credit(scoreID));nextButton.hidden=false;saveProgress();});
      actions.append(backspace,check);if(api.read){const listen=btn(pick('◖ Hear the word','◖ Escucha la palabra'),()=>api.read(target.toLowerCase(),listen),'practice-button practice-button-light');card.append(listen);}card.append(answer,tileBox,actions,message,nextButton);stage.append(card);
      const saved=api.get?.(storage);if(!ended&&Array.isArray(saved?.letters))for(const letter of saved.letters.slice(0,letters.length)){const tile=tiles.find(t=>!t.disabled&&t.textContent===letter);if(!tile)break;tile.disabled=true;picked.push({letter,tile});}
      if(ended){tiles.forEach(tile=>tile.disabled=true);answer.classList.add('complete');nextButton.hidden=false;message.textContent=target+'! '+earnText(false);}draw();
    });}
    function hangman(){wordRound('hangman',(word,next)=>{
      const [id,target,clue,icon]=word,normalized=fold(target),alphabet=lang==='es'?'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ':'ABCDEFGHIJKLMNOPQRSTUVWXYZ',scoreID='practice:hangman:'+lang+':'+id,storage='hangman-progress-'+lang+'-'+id,saved=api.get?.(storage),guessed=new Set((Array.isArray(saved?.guessed)?saved.guessed:[]).filter(c=>typeof c==='string'&&c.length===1&&alphabet.includes(c)));let misses=[...guessed].filter(c=>!normalized.includes(c)).length,ended=has(scoreID)||misses>=6;const card=node('section','practice-card'),top=node('div','practice-word-clue');card.dataset.wordId=id;card.dataset.wordNumber=String(WORDS[lang].indexOf(word)+1);top.append(node('span','practice-clue-icon',icon),node('h2','practice-question',clue));card.append(top,node('p','practice-instruction',pick('Guess the word. Each wrong letter adds one part to the stick figure. You get six tries.','Adivina la palabra. Cada letra incorrecta añade una parte al muñeco. Tienes seis intentos.')));
      const illustration=node('div','practice-hangman-visual');illustration.innerHTML='<svg viewBox="0 0 260 180" role="img"><title>Hangman</title><path d="M32 167H221M62 166V18H168V40M62 48L92 18" fill="none" stroke="#8a9cba" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/><g class="hangman-part" data-part="1"><circle cx="168" cy="60" r="19" fill="#fff3ce" stroke="#2458df" stroke-width="4"/><circle cx="162" cy="57" r="2" fill="#2458df"/><circle cx="174" cy="57" r="2" fill="#2458df"/><path d="M161 66Q168 72 175 66" fill="none" stroke="#2458df" stroke-width="2"/></g><path class="hangman-part" data-part="2" d="M168 79V123"/><path class="hangman-part" data-part="3" d="M168 91L146 108"/><path class="hangman-part" data-part="4" d="M168 91L190 108"/><path class="hangman-part" data-part="5" d="M168 123L148 151"/><path class="hangman-part" data-part="6" d="M168 123L188 151"/></svg>';illustration.querySelector('title').textContent=pick('Hangman stick figure','Muñeco del ahorcado');
      const tries=node('div','practice-tries'),slots=node('div','practice-letter-slots'),keyboard=node('div','practice-keyboard'),message=feedback(),nextButton=makeNext(next);nextButton.hidden=true;
      function saveProgress(){api.set?.(storage,{guessed:[...guessed]});}
      function draw(){slots.replaceChildren();[...target].forEach((char,i)=>slots.append(node('span','practice-letter-slot',ended||guessed.has(normalized[i])?char:'')));slots.setAttribute('aria-label',pick('Letters found: ','Letras encontradas: ')+[...target].map((char,i)=>ended||guessed.has(normalized[i])?char:'_').join(' '));tries.textContent=pick('Tries left: ','Intentos restantes: ')+Math.max(0,6-misses)+' / 6';illustration.querySelectorAll('.hangman-part').forEach((part,i)=>{part.style.visibility=i<misses?'visible':'hidden';});illustration.dataset.misses=String(misses);illustration.querySelector('svg').setAttribute('aria-label',pick(misses+' of six stick-figure parts drawn',misses+' de seis partes del muñeco dibujadas'));}
      for(const letter of [...alphabet]){const b=btn(letter,()=>{if(ended)return;b.disabled=true;guessed.add(letter);if(normalized.includes(letter)){b.classList.add('practice-correct');message.textContent=pick('That letter is in the word!','¡Esa letra está en la palabra!');}else{misses++;b.classList.add('practice-try');message.textContent=pick('That letter is not here. Look at the clue and try another.','Esa letra no está aquí. Mira la pista y prueba otra.');}const solved=[...normalized].every(c=>guessed.has(c));if(solved||misses>=6){ended=true;keyboard.querySelectorAll('button').forEach(n=>n.disabled=true);nextButton.hidden=false;if(solved){slots.classList.add('complete');message.classList.add('positive');message.textContent=target+'! '+earnText(credit(scoreID));}else message.textContent=pick('The word was ','La palabra era ')+target+pick('. You can try this word again later.','. Puedes volver a intentarla después.');}saveProgress();draw();},'practice-key');b.dataset.letter=letter;if(guessed.has(letter)){b.disabled=true;b.classList.add(normalized.includes(letter)?'practice-correct':'practice-try');}keyboard.append(b);}
      if(ended){keyboard.querySelectorAll('button').forEach(n=>n.disabled=true);nextButton.hidden=false;message.textContent=target+(has(scoreID)?'! '+earnText(false):pick(' — keep learning!',' — ¡sigue aprendiendo!'));if(has(scoreID))slots.classList.add('complete');else{const retry=btn(pick('Try this word again','Intenta esta palabra otra vez'),()=>{api.set?.(storage,{guessed:[]});guessed.clear();misses=0;ended=false;keyboard.querySelectorAll('button').forEach(n=>{n.disabled=false;n.classList.remove('practice-correct','practice-try');});nextButton.hidden=true;message.textContent='';retry.remove();draw();},'practice-button practice-button-light');card.append(retry);}}
      card.append(illustration,tries,slots,keyboard,message,nextButton);stage.append(card);draw();
    });}
    function wordsearch(){
      let boardIndex=0,completedBoards=0;roundPoints=0;
      const ordered=[...BOARD_WORDS.filter(b=>b[lang].some(w=>!has('practice:wordsearch:'+lang+':'+b.id+':'+fold(w).toLowerCase()))),...BOARD_WORDS.filter(b=>b[lang].every(w=>has('practice:wordsearch:'+lang+':'+b.id+':'+fold(w).toLowerCase())))];
      function restart(){boardIndex=0;completedBoards=0;roundPoints=0;render();}
      function render(){if(disposed)return;if(completedBoards===5){finish(restart);return;}const data=ordered[boardIndex%ordered.length],words=data[lang],{board}=buildBoard(words,seedOf(data.id+lang)),found=new Set(),foundCells=new Set();let first=null;stage.replaceChildren();stage.append(progress(completedBoards,5));
        const card=node('section','practice-card practice-search-card');card.append(node('h2','practice-question',pick(...data.title)),node('p','practice-instruction',pick('Tap the FIRST letter of a word, then its LAST letter. Words go across → or down ↓.','Toca la PRIMERA letra de una palabra y luego la ÚLTIMA. Van hacia la derecha → o hacia abajo ↓.')));
        const layout=node('div','practice-search-layout'),grid=node('div','practice-word-grid');grid.setAttribute('role','group');grid.setAttribute('aria-label',pick('Letter map, eight rows and eight columns','Mapa de letras, ocho filas y ocho columnas'));const side=node('div','practice-search-side'),list=node('ul','practice-find-list'),message=feedback(),nextButton=makeNext(()=>{boardIndex++;completedBoards++;render();});nextButton.hidden=true;message.textContent=pick('Choose the first letter of a hidden word.','Elige la primera letra de una palabra escondida.');
        const chips=new Map();for(const word of words){const li=node('li','',word);chips.set(word,li);list.append(li);}side.append(node('h3','',pick('Find these five','Encuentra estas cinco')),list);const cells=[];
        function clearFirst(){if(first!=null){cells[first].classList.remove('selected');cells[first].setAttribute('aria-pressed','false');}first=null;}
        function choose(index){if(found.size===words.length)return;if(first==null){first=index;cells[index].classList.add('selected');cells[index].setAttribute('aria-pressed','true');message.textContent=pick('Now tap the LAST letter of that word.','Ahora toca la ÚLTIMA letra de esa palabra.');return;}if(index===first){clearFirst();message.textContent=pick('Choose a first letter again.','Elige otra vez la primera letra.');return;}const a=first,b=index;clearFirst();const ar=Math.floor(a/8),ac=a%8,br=Math.floor(b/8),bc=b%8;if(ar!==br&&ac!==bc){message.textContent=pick('Try a straight line across or down.','Prueba una línea recta hacia la derecha o abajo.');return;}const step=ar===br?(b>a?1:-1):(b>a?8:-8),path=[];for(let n=a;;n+=step){path.push(n);if(n===b)break;}const text=path.map(n=>board[n]).join(''),reverse=[...text].reverse().join(''),match=words.find(w=>w===text||w===reverse);if(!match){message.textContent=pick('Not one of our words yet. Try another first and last letter.','Todavía no es una de nuestras palabras. Prueba otras letras de inicio y final.');return;}if(found.has(match)){message.textContent=pick('You already found '+match+'. Look for a new word!','Ya encontraste '+match+'. ¡Busca otra palabra!');return;}found.add(match);path.forEach(n=>{foundCells.add(n);cells[n].classList.add('found');});chips.get(match).classList.add('found');chips.get(match).textContent='✓ '+match;message.classList.add('positive');message.textContent=match+'! '+earnText(credit('practice:wordsearch:'+lang+':'+data.id+':'+fold(match).toLowerCase()));if(found.size===words.length){nextButton.hidden=false;message.textContent=pick('All five found! Each word is safely saved in your score.','¡Encontraste las cinco! Cada palabra ya está guardada en tu marcador.');}}
        board.forEach((letter,index)=>{const b=btn(letter,()=>choose(index),'practice-cell');b.setAttribute('aria-label',letter+pick(', row ', ', fila ')+(Math.floor(index/8)+1)+pick(', column ', ', columna ')+(index%8+1));b.setAttribute('aria-pressed','false');b.dataset.index=index;cells.push(b);grid.append(b);});layout.append(grid,side);card.append(layout,message,nextButton);stage.append(card);
      }render();
    }
    ({math,quiz,spelling,hangman,wordsearch}[kind]||math)();
    return function dispose(){disposed=true;};
  }
  window.MLL_PRACTICE={mount,counts:()=>({hangman:100,spelling:100,math:'generated'}),words:WORDS,generateMath,questionBank};
})();

;

/* ===== wordsearch.js ===== */
/* Word Explorer: 100 distinct themed puzzles in English and Spanish.
   Each completed ten-word puzzle earns one point, once per language.
   All boards are generated locally from fixed seeds. No services or libraries. */
(function () {
  'use strict';
  const SIZE = 10;
  const raw = [
    ['Pets at home','Mascotas en casa','DOG|CAT|HAMSTER|RABBIT|GOLDFISH|TURTLE|PARROT|KITTEN|PUPPY|GERBIL','PERRO|GATO|HÁMSTER|CONEJO|PEZ|TORTUGA|LORO|GATITO|CACHORRO|COBAYA'],
    ['Down on the farm','En la granja','HORSE|COW|SHEEP|PIG|GOAT|CHICKEN|DUCK|DONKEY|BARN|TRACTOR','CABALLO|VACA|OVEJA|CERDO|CABRA|GALLINA|PATO|BURRO|GRANERO|TRACTOR'],
    ['Forest friends','Amigos del bosque','FOX|DEER|BADGER|OWL|SQUIRREL|HEDGEHOG|RACCOON|MOOSE|WOODPECKER|BEAR','ZORRO|CIERVO|TEJÓN|BÚHO|ARDILLA|ERIZO|MAPACHE|ALCE|PÁJARO|OSO'],
    ['Ocean neighbors','Vecinos del océano','SHARK|WHALE|DOLPHIN|OCTOPUS|SEAHORSE|JELLYFISH|STINGRAY|SQUID|CORAL|LOBSTER','TIBURÓN|BALLENA|DELFÍN|PULPO|CANGREJO|MEDUSA|RAYA|CALAMAR|CORAL|LANGOSTA'],
    ['Rainforest animals','Animales de la selva','JAGUAR|MONKEY|SLOTH|TOUCAN|ANACONDA|TAPIR|MACAW|FROG|ANTEATER|OCELOT','JAGUAR|MONO|PEREZOSO|TUCÁN|ANACONDA|TAPIR|GUACAMAYO|RANA|PECARÍ|OCELOTE'],
    ['Bird watchers','Observadores de aves','ROBIN|EAGLE|FLAMINGO|PELICAN|SPARROW|SWAN|PENGUIN|HAWK|OSTRICH|HERON','MIRLO|ÁGUILA|FLAMENCO|PELÍCANO|GORRIÓN|CISNE|PINGÜINO|HALCÓN|AVESTRUZ|GARZA'],
    ['Tiny garden visitors','Pequeños visitantes','ANT|BEE|BEETLE|BUTTERFLY|DRAGONFLY|CRICKET|MOTH|LADYBUG|WORM|SPIDER','HORMIGA|ABEJA|ESCARABAJO|MARIPOSA|LIBÉLULA|GRILLO|POLILLA|MARIQUITA|LOMBRIZ|ARAÑA'],
    ['Reptile discovery','Descubre los reptiles','LIZARD|SNAKE|GECKO|IGUANA|CROCODILE|TORTOISE|PYTHON|SCALES|EGGS|TAIL','LAGARTIJA|SERPIENTE|GECO|IGUANA|COCODRILO|TORTUGA|PITÓN|ESCAMAS|HUEVOS|COLA'],
    ['Arctic adventure','Aventura en el Ártico','ARCTIC|POLAR|WALRUS|SEAL|NARWHAL|CARIBOU|ICE|TUNDRA|BELUGA|SNOW','ÁRTICO|POLAR|MORSA|FOCA|NARVAL|CARIBÚ|HIELO|TUNDRA|BELUGA|NIEVE'],
    ['Across the savanna','Por la sabana','LION|ZEBRA|GIRAFFE|ELEPHANT|RHINO|CHEETAH|GAZELLE|HYENA|MEERKAT|BUFFALO','LEÓN|CEBRA|JIRAFA|ELEFANTE|HIPOPÓTAMO|GUEPARDO|GACELA|HIENA|SURICATA|BÚFALO'],
    ['Dinosaur dig','Excavación de dinosaurios','DINOSAUR|FOSSIL|CLAW|BONE|TOOTH|TRACKS|HERD|NEST|HORN|FANG','DINOSAURIO|FÓSIL|GARRA|HUESO|DIENTE|HUELLAS|MANADA|NIDO|CUERNO|COLMILLO'],
    ['Rocket launch','Lanzamiento espacial','ROCKET|ASTRONAUT|HELMET|ORBIT|LAUNCH|CAPSULE|MISSION|SATELLITE|FUEL|SPACE','COHETE|ASTRONAUTA|CASCO|ÓRBITA|DESPEGUE|CÁPSULA|MISIÓN|SATÉLITE|COMBUSTIÓN|ESPACIO'],
    ['Our solar system','Nuestro sistema solar','SUN|MERCURY|VENUS|EARTH|MARS|JUPITER|SATURN|URANUS|NEPTUNE|MOON','SOL|MERCURIO|VENUS|TIERRA|MARTE|JÚPITER|SATURNO|URANO|NEPTUNO|LUNA'],
    ['Weather window','El tiempo afuera','RAIN|WIND|CLOUD|THUNDER|LIGHTNING|RAINBOW|HAIL|DRIZZLE|BREEZE|STORM','LLUVIA|VIENTO|NUBE|TRUENO|RELÁMPAGO|ARCOÍRIS|GRANIZO|LLOVIZNA|BRISA|TORMENTA'],
    ['Four seasons','Las cuatro estaciones','SPRING|SUMMER|AUTUMN|WINTER|BLOOM|LEAVES|FROST|WARM|COOL|SEASON','PRIMAVERA|VERANO|OTOÑO|INVIERNO|FLOR|HOJAS|ESCARCHA|CALOR|FRÍO|ESTACIÓN'],
    ['Flower garden','Jardín de flores','DAISY|ROSE|TULIP|LILY|SUNFLOWER|ORCHID|POPPY|IRIS|PETAL|POLLEN','MARGARITA|ROSA|TULIPÁN|LIRIO|GIRASOL|ORQUÍDEA|AMAPOLA|IRIS|PÉTALO|POLEN'],
    ['Amazing trees','Árboles increíbles','OAK|PINE|MAPLE|PALM|WILLOW|BIRCH|CEDAR|REDWOOD|ACORN|BARK','ROBLE|PINO|ARCE|PALMA|SAUCE|ABEDUL|CEDRO|SECUOYA|BELLOTA|CORTEZA'],
    ['Plant a garden','Cultiva un jardín','SEED|ROOT|STEM|LEAF|SOIL|SPROUT|COMPOST|WATER|SHOVEL|HARVEST','SEMILLA|RAÍZ|TALLO|HOJA|TIERRA|BROTE|COMPOST|AGUA|PALA|COSECHA'],
    ['Fruit basket','Canasta de frutas','APPLE|BANANA|ORANGE|PEAR|GRAPE|PEACH|PLUM|LEMON|MELON|CHERRY','MANZANA|BANANO|NARANJA|PERA|UVA|DURAZNO|CIRUELA|LIMÓN|MELÓN|CEREZA'],
    ['Vegetable patch','Huerto de verduras','CARROT|POTATO|TOMATO|PEPPER|BROCCOLI|SPINACH|LETTUCE|PEAS|CORN|ONION','ZANAHORIA|PAPA|TOMATE|PIMIENTO|BRÓCOLI|ESPINACA|LECHUGA|ARVEJAS|MAÍZ|CEBOLLA'],
    ['Breakfast time','Hora del desayuno','CEREAL|TOAST|EGG|MILK|YOGURT|OATMEAL|PANCAKE|WAFFLE|JUICE|BOWL','CEREAL|TOSTADA|HUEVO|LECHE|YOGUR|AVENA|PANQUEQUE|GOFRE|JUGO|TAZÓN'],
    ['Pack a lunch','Prepara el almuerzo','SANDWICH|SOUP|SALAD|RICE|BEANS|CHEESE|PASTA|TUNA|LUNCHBOX|NAPKIN','SÁNDWICH|SOPA|ENSALADA|ARROZ|FRÉJOLES|QUESO|PASTA|ATÚN|LONCHERA|SERVILLETA'],
    ['Baking day','Día de hornear','FLOUR|SUGAR|BUTTER|DOUGH|YEAST|OVEN|WHISK|COOKIE|MUFFIN|RECIPE','HARINA|AZÚCAR|MANTECA|MASA|LEVADURA|HORNO|BATIDOR|GALLETA|BIZCOCHO|RECETA'],
    ['In the kitchen','En la cocina','SPOON|FORK|PLATE|CUP|PAN|POT|SINK|STOVE|APRON|LADLE','CUCHARA|TENEDOR|PLATO|TAZA|SARTÉN|OLLA|LAVABO|COCINA|DELANTAL|CUCHARÓN'],
    ['Get dressed','A vestirse','SHIRT|PANTS|SHORTS|DRESS|SKIRT|SWEATER|JACKET|SOCKS|PAJAMAS|UNIFORM','CAMISA|PANTALÓN|SHORT|VESTIDO|FALDA|SUÉTER|CHAQUETA|MEDIAS|PIJAMA|UNIFORME'],
    ['Ready to go','Listos para salir','BOOTS|SANDALS|SNEAKERS|HAT|SCARF|GLOVES|BELT|BACKPACK|UMBRELLA|BUTTON','BOTAS|SANDALIAS|ZAPATILLAS|GORRA|BUFANDA|GUANTES|CINTURÓN|MOCHILA|PARAGUAS|BOTÓN'],
    ['Our family','Nuestra familia','MOTHER|FATHER|SISTER|BROTHER|COUSIN|AUNT|UNCLE|GRANDMA|GRANDPA|FAMILY','MAMÁ|PAPÁ|HERMANA|HERMANO|PRIMO|TÍA|TÍO|ABUELA|ABUELO|FAMILIA'],
    ['Home sweet home','Hogar dulce hogar','HOUSE|ROOF|WINDOW|DOOR|STAIRS|WALL|FLOOR|GARDEN|GARAGE|PORCH','CASA|TECHO|VENTANA|PUERTA|ESCALERA|PARED|PISO|JARDÍN|GARAJE|PORCHE'],
    ['Cozy bedroom','Un dormitorio acogedor','BED|PILLOW|BLANKET|LAMP|DRESSER|CLOSET|CURTAIN|RUG|SHELF|MATTRESS','CAMA|ALMOHADA|COBIJA|LÁMPARA|CÓMODA|ARMARIO|CORTINA|ALFOMBRA|REPISA|COLCHÓN'],
    ['Wash and shine','Limpios y relucientes','SOAP|TOWEL|BRUSH|COMB|MIRROR|BATH|SHOWER|SHAMPOO|SPONGE|FAUCET','JABÓN|TOALLA|CEPILLO|PEINE|ESPEJO|BAÑERA|DUCHA|CHAMPÚ|ESPONJA|GRIFO'],
    ['School discoveries','Descubrimientos en la escuela','PENCIL|ERASER|RULER|NOTEBOOK|DESK|TEACHER|STUDENT|LESSON|RECESS|CRAYON','LÁPIZ|BORRADOR|REGLA|CUADERNO|PUPITRE|MAESTRA|ALUMNO|LECCIÓN|RECREO|CRAYÓN'],
    ['Art studio','Taller de arte','PAINT|COLOR|CANVAS|SKETCH|SCULPTURE|CLAY|COLLAGE|PATTERN|PALETTE|PORTRAIT','PINTURA|COLOR|LIENZO|BOCETO|ESCULTURA|ARCILLA|COLLAGE|PATRÓN|PALETA|RETRATO'],
    ['Make some music','Hagamos música','PIANO|GUITAR|DRUM|FLUTE|VIOLIN|TRUMPET|HARP|CYMBAL|MELODY|RHYTHM','PIANO|GUITARRA|TAMBOR|FLAUTA|VIOLÍN|TROMPETA|ARPA|PLATILLO|MELODÍA|RITMO'],
    ['Sports day','Día de deportes','SOCCER|BASEBALL|TENNIS|HOCKEY|SWIMMING|RUNNING|CYCLING|SURFING|SKATING|ROWING','FÚTBOL|BÉISBOL|TENIS|HOCKEY|NATACIÓN|CARRERA|CICLISMO|SURF|PATINAJE|REMO'],
    ['Soccer stars','Estrellas del fútbol','GOAL|PASS|KICK|TEAM|COACH|FIELD|NET|CLEATS|REFEREE|DRIBBLE','GOL|PASE|PATADA|EQUIPO|ENTRENADOR|CANCHA|RED|BOTINES|ÁRBITRO|REGATE'],
    ['At the ballpark','En el estadio de béisbol','BAT|BALL|BASE|PITCHER|CATCHER|GLOVE|INNING|HOMERUN|DUGOUT|UMPIRE','BATE|PELOTA|BASE|LANZADOR|RECEPTOR|GUANTE|ENTRADA|JONRÓN|BANQUILLO|ÁRBITRO'],
    ['Beach treasures','Tesoros de la playa','SAND|SHELL|WAVE|TIDE|CRAB|BUCKET|SHORE|DUNE|DRIFTWOOD|STARFISH','ARENA|CONCHA|OLA|MAREA|CANGREJO|BALDE|ORILLA|DUNA|MADERA|ESTRELLA'],
    ['Camping under stars','Acampando bajo las estrellas','TENT|CAMPFIRE|LANTERN|COMPASS|CANTEEN|CAMPSITE|HAMMOCK|TRAIL|SLEEP|STARS','CARPA|FOGATA|LINTERNA|BRÚJULA|BOTELLA|CAMPAMENTO|HAMACA|SENDERO|DORMIR|ESTRELLAS'],
    ['Take a hike','A caminar por el sendero','HIKE|PATH|SUMMIT|VALLEY|STREAM|RIDGE|MAP|BOULDER|BOOTS|WILDLIFE','CAMINATA|CAMINO|CUMBRE|VALLE|ARROYO|CRESTA|MAPA|ROCA|BOTAS|FAUNA'],
    ['On the road','Por la carretera','CAR|BUS|TRUCK|VAN|BICYCLE|SCOOTER|WHEEL|ENGINE|TRAFFIC|ROAD','AUTO|BUS|CAMIÓN|FURGONETA|BICICLETA|PATINETA|RUEDA|MOTOR|TRÁFICO|CARRETERA'],
    ['Ready for takeoff','Listos para despegar','AIRPORT|AIRPLANE|PILOT|RUNWAY|WING|LUGGAGE|TICKET|GATE|FLIGHT|PASSPORT','AEROPUERTO|AVIÓN|PILOTO|PISTA|ALA|EQUIPAJE|BOLETO|PUERTA|VUELO|PASAPORTE'],
    ['Sailing away','A navegar','SAILBOAT|CANOE|KAYAK|FERRY|ANCHOR|RUDDER|MAST|DOCK|HARBOR|CAPTAIN','VELERO|CANOA|KAYAK|FERRI|ANCLA|TIMÓN|MÁSTIL|MUELLE|PUERTO|CAPITÁN'],
    ['Train journey','Viaje en tren','TRAIN|RAIL|STATION|TUNNEL|BRIDGE|WAGON|CARRIAGE|WHISTLE|STEAM|SIGNAL','TREN|RIEL|ESTACIÓN|TÚNEL|PUENTE|VAGÓN|CABINA|SILBATO|VAPOR|SEÑAL'],
    ['City explorers','Exploradores de la ciudad','CITY|STREET|PARK|MUSEUM|LIBRARY|MARKET|PLAZA|FOUNTAIN|SIDEWALK|BUILDING','CIUDAD|CALLE|PARQUE|MUSEO|BIBLIOTECA|MERCADO|PLAZA|FUENTE|ACERA|EDIFICIO'],
    ['Build something big','Construye algo grande','BRICK|CEMENT|CRANE|BEAM|LADDER|BUILDER|PLAN|FRAME|ROOF|FOUNDATION','LADRILLO|CEMENTO|GRÚA|VIGA|ESCALERA|OBRERO|PLANO|MARCO|TECHO|CIMIENTO'],
    ['Handy tools','Herramientas útiles','HAMMER|NAIL|SCREW|SAW|DRILL|WRENCH|PLIERS|LEVEL|CLAMP|TOOLBOX','MARTILLO|CLAVO|TORNILLO|SIERRA|TALADRO|LLAVE|ALICATES|NIVEL|PRENSA|CAJA'],
    ['Community helpers','Personas que ayudan','DOCTOR|NURSE|TEACHER|FARMER|BAKER|DENTIST|PLUMBER|ARTIST|PILOT|SCIENTIST','MÉDICO|ENFERMERA|MAESTRO|GRANJERO|PANADERO|DENTISTA|PLOMERO|ARTISTA|PILOTO|CIENTÍFICO'],
    ['At the doctor','En el consultorio','CLINIC|HEART|PULSE|BANDAGE|X RAY|CHECKUP|HEALTH|REST|MEDICINE|HEAL','CLÍNICA|CORAZÓN|PULSO|VENDA|RAYOS X|REVISIÓN|SALUD|REPOSO|MEDICINA|SANAR'],
    ['Big bright smiles','Sonrisas brillantes','TEETH|SMILE|DENTIST|BRUSH|FLOSS|RINSE|GUMS|ENAMEL|MOLAR|TOOTHPASTE','DIENTES|SONRISA|DENTISTA|CEPILLO|HILO|ENJUAGUE|ENCÍAS|ESMALTE|MUELA|PASTA'],
    ['My amazing body','Mi cuerpo increíble','HEAD|SHOULDER|ELBOW|FINGER|KNEE|ANKLE|MUSCLE|BRAIN|LUNGS|SKELETON','CABEZA|HOMBRO|CODO|DEDO|RODILLA|TOBILLO|MÚSCULO|CEREBRO|PULMONES|ESQUELETO'],
    ['Five senses','Cinco sentidos','SIGHT|HEARING|SMELL|TASTE|TOUCH|EYES|EARS|NOSE|TONGUE|SKIN','VISTA|OÍDO|OLFATO|GUSTO|TACTO|OJOS|OREJAS|NARIZ|LENGUA|PIEL'],
    ['How do you feel?','¿Cómo te sientes?','HAPPY|SAD|CALM|PROUD|EXCITED|CURIOUS|BRAVE|WORRIED|SURPRISED|HOPEFUL','FELIZ|TRISTE|TRANQUILO|ORGULLOSO|EMOCIONADO|CURIOSO|VALIENTE|PREOCUPADO|SORPRESA|OPTIMISTA'],
    ['Kindness crew','El equipo de la amabilidad','KIND|SHARE|HELP|LISTEN|THANKS|PLEASE|FRIEND|CARE|HONEST|RESPECT','AMABLE|COMPARTIR|AYUDAR|ESCUCHAR|GRACIAS|POR FAVOR|AMIGO|CUIDAR|HONESTO|RESPETO'],
    ['Get moving','A moverse','JUMP|RUN|HOP|SKIP|CLIMB|CRAWL|STRETCH|BALANCE|DANCE|TWIRL','SALTAR|CORRER|BRINCAR|TROTAR|TREPAR|GATEAR|ESTIRAR|EQUILIBRIO|BAILAR|GIRAR'],
    ['Opposite pairs','Parejas de opuestos','BIG|SMALL|HOT|COLD|FAST|SLOW|LIGHT|HEAVY|NEAR|FAR','GRANDE|PEQUEÑO|CALIENTE|FRÍO|RÁPIDO|LENTO|LIVIANO|PESADO|CERCA|LEJOS'],
    ['Color splash','Fiesta de colores','RED|BLUE|YELLOW|GREEN|ORANGE|PURPLE|PINK|BROWN|BLACK|WHITE','ROJO|AZUL|AMARILLO|VERDE|NARANJA|MORADO|ROSADO|CAFÉ|NEGRO|BLANCO'],
    ['Shape detectives','Detectives de figuras','CIRCLE|SQUARE|TRIANGLE|RECTANGLE|OVAL|DIAMOND|HEXAGON|CUBE|SPHERE|CONE','CÍRCULO|CUADRADO|TRIÁNGULO|RECTÁNGULO|ÓVALO|ROMBO|HEXÁGONO|CUBO|ESFERA|CONO'],
    ['Count to ten','Cuenta hasta diez','ONE|TWO|THREE|FOUR|FIVE|SIX|SEVEN|EIGHT|NINE|TEN','UNO|DOS|TRES|CUATRO|CINCO|SEIS|SIETE|OCHO|NUEVE|DIEZ'],
    ['Time travelers','Viajeros del tiempo','CLOCK|MINUTE|HOUR|DAY|WEEK|MONTH|YEAR|MORNING|EVENING|TOMORROW','RELOJ|MINUTO|HORA|DÍA|SEMANA|MES|AÑO|MAÑANA|TARDE|FUTURO'],
    ['Number lab','Laboratorio de números','ADD|SUBTRACT|TOTAL|EQUAL|COUNT|DOUBLE|HALF|PAIR|MEASURE|PATTERN','SUMAR|RESTAR|TOTAL|IGUAL|CONTAR|DOBLE|MITAD|PAR|MEDIR|PATRÓN'],
    ['Little scientists','Pequeños científicos','OBSERVE|GUESS|TEST|RESULT|DISCOVER|MIX|FREEZE|MELT|SOLID|LIQUID','OBSERVAR|SUPONER|PROBAR|RESULTADO|DESCUBRIR|MEZCLAR|CONGELAR|DERRETIR|SÓLIDO|LÍQUIDO'],
    ['Magnet magic','Magia con imanes','MAGNET|IRON|STEEL|METAL|PULL|PUSH|POLE|NORTH|SOUTH|FORCE','IMÁN|HIERRO|ACERO|METAL|ATRAER|EMPUJAR|POLO|NORTE|SUR|FUERZA'],
    ['Rock collectors','Coleccionistas de rocas','ROCK|MINERAL|CRYSTAL|QUARTZ|GRANITE|MARBLE|SLATE|PEBBLE|GEM|DIAMOND','ROCA|MINERAL|CRISTAL|CUARZO|GRANITO|MÁRMOL|PIZARRA|GUIJARRO|GEMA|DIAMANTE'],
    ['Water wonders','Maravillas del agua','WATER|DROP|PUDDLE|RAIN|CLOUD|STEAM|ICE|MIST|FLOW|SPLASH','AGUA|GOTA|CHARCO|LLUVIA|NUBE|VAPOR|HIELO|NIEBLA|FLUIR|SALPICAR'],
    ['Volcano explorers','Exploradores de volcanes','VOLCANO|LAVA|MAGMA|CRATER|ERUPTION|ASH|ROCK|HEAT|MOUNTAIN|ISLAND','VOLCÁN|LAVA|MAGMA|CRÁTER|ERUPCIÓN|CENIZA|ROCA|CALOR|MONTAÑA|ISLA'],
    ['Antarctica expedition','Expedición a la Antártida','ANTARCTICA|PENGUIN|ICEBERG|GLACIER|KRILL|PETREL|SEAL|BLIZZARD|RESEARCH|EXPEDITION','ANTÁRTIDA|PINGÜINO|ICEBERG|GLACIAR|KRIL|PETREL|FOCA|VENTISCA|ESTUDIO|EXPEDICIÓN'],
    ['Explore Ecuador','Explora Ecuador','ECUADOR|GUAYAQUIL|QUITO|ANDES|COAST|IGUANA|CACAO|BANANA|CONDOR|ISLANDS','ECUADOR|GUAYAQUIL|QUITO|ANDES|COSTA|IGUANA|CACAO|BANANO|CÓNDOR|ISLAS'],
    ['Washington adventure','Aventura en Washington','WASHINGTON|KIRKLAND|SEATTLE|LAKE|SALMON|FOREST|FERRY|RAINIER|APPLE|ORCA','WASHINGTON|KIRKLAND|SEATTLE|LAGO|SALMÓN|BOSQUE|FERRI|RAINIER|MANZANA|ORCA'],
    ['Discover Bolivia','Descubre Bolivia','BOLIVIA|SANTA CRUZ|LA PAZ|ANDES|LLAMA|SALT|JUNGLE|ALPACA|CONDOR|LAKE','BOLIVIA|SANTA CRUZ|LA PAZ|ANDES|LLAMA|SAL|SELVA|ALPACA|CÓNDOR|LAGO'],
    ['Discover Colombia','Descubre Colombia','COLOMBIA|MEDELLIN|BOGOTA|ORCHID|COFFEE|EMERALD|MOUNTAIN|RIVER|AREPA|TOUCAN','COLOMBIA|MEDELLÍN|BOGOTÁ|ORQUÍDEA|CAFÉ|ESMERALDA|MONTAÑA|RÍO|AREPA|TUCÁN'],
    ['Argentina adventure','Aventura en Argentina','ARGENTINA|TANGO|PENGUIN|PAMPAS|GAUCHO|ANDES|SOCCER|GLACIER|BEACH|CONDOR','ARGENTINA|TANGO|PINGÜINO|PAMPAS|GAUCHO|ANDES|FÚTBOL|GLACIAR|PLAYA|CÓNDOR'],
    ['Island explorers','Exploradores de islas','ISLAND|LAGOON|REEF|COCONUT|PALM|BEACH|COVE|BAHAMAS|HAWAII|EXUMA','ISLA|LAGUNA|ARRECIFE|COCO|PALMA|PLAYA|BAHÍA|BAHAMAS|HAWÁI|EXUMA'],
    ['Rainforest layers','Capas de la selva','CANOPY|VINE|FERN|MOSS|ROOT|LEAF|RAIN|HUMID|SHADE|HABITAT','DOSEL|LIANA|HELECHO|MUSGO|RAÍZ|HOJA|LLUVIA|HÚMEDO|SOMBRA|HÁBITAT'],
    ['Desert discoveries','Descubrimientos del desierto','DESERT|CACTUS|CAMEL|DUNE|OASIS|SAND|SCORPION|LIZARD|DRY|SHADE','DESIERTO|CACTUS|CAMELLO|DUNA|OASIS|ARENA|ESCORPIÓN|LAGARTIJA|SECO|SOMBRA'],
    ['Mountain trail','Sendero de montaña','MOUNTAIN|PEAK|RIDGE|VALLEY|CLIFF|SLOPE|GLACIER|EAGLE|GOAT|SNOW','MONTAÑA|PICO|CRESTA|VALLE|ACANTILADO|LADERA|GLACIAR|ÁGUILA|CABRA|NIEVE'],
    ['Follow the river','Sigue el río','RIVER|STREAM|BANK|DELTA|OTTER|BEAVER|TROUT|SALMON|RAPIDS|WATERFALL','RÍO|ARROYO|ORILLA|DELTA|NUTRIA|CASTOR|TRUCHA|SALMÓN|RÁPIDOS|CASCADA'],
    ['Aquarium visit','Visita al acuario','AQUARIUM|TANK|FIN|GILLS|SCALES|REEF|CLOWNFISH|ANEMONE|EEL|TURTLE','ACUARIO|TANQUE|ALETA|BRANQUIAS|ESCAMAS|ARRECIFE|PEZ PAYASO|ANÉMONA|ANGUILA|TORTUGA'],
    ['Library quest','Aventura en la biblioteca','BOOK|AUTHOR|TITLE|PAGE|CHAPTER|STORY|POEM|SHELF|BORROW|READ','LIBRO|AUTOR|TÍTULO|PÁGINA|CAPÍTULO|CUENTO|POEMA|ESTANTE|PRÉSTAMO|LEER'],
    ['Museum mysteries','Misterios del museo','MUSEUM|FOSSIL|PAINTING|STATUE|HISTORY|DISPLAY|GUIDE|EXHIBIT|ARTIFACT|DISCOVERY','MUSEO|FÓSIL|CUADRO|ESTATUA|HISTORIA|VITRINA|GUÍA|EXHIBICIÓN|OBJETO|HALLAZGO'],
    ['Playground pals','Amigos del parque','SWING|SLIDE|SEESAW|SANDBOX|CLIMB|TUNNEL|HOPSCOTCH|TAG|SKIP|PLAY','COLUMPIO|TOBOGÁN|SUBIBAJA|ARENERO|TREPAR|TÚNEL|RAYUELA|CORRER|SALTAR|JUGAR'],
    ['Birthday party','Fiesta de cumpleaños','BIRTHDAY|CAKE|CANDLE|BALLOON|PRESENT|RIBBON|PARTY|INVITE|WISH|CONFETTI','CUMPLEAÑOS|PASTEL|VELA|GLOBO|REGALO|CINTA|FIESTA|INVITAR|DESEO|CONFETI'],
    ['Picnic in the park','Pícnic en el parque','PICNIC|BASKET|BLANKET|SANDWICH|FRUIT|LEMONADE|CUP|GRASS|SHADE|NAPKIN','PÍCNIC|CANASTA|MANTA|SÁNDWICH|FRUTA|LIMONADA|VASO|CÉSPED|SOMBRA|SERVILLETA'],
    ['Fishing adventure','Aventura de pesca','FISHING|ROD|REEL|LINE|BAIT|HOOK|FLOAT|CAST|TACKLE|CATCH','PESCA|CAÑA|CARRETE|SEDAL|CARNADA|ANZUELO|BOYA|LANZAR|APAREJO|CAPTURA'],
    ['Life in the tide pool','Vida en la poza de marea','TIDEPOOL|LIMPET|MUSSEL|BARNACLE|URCHIN|ANEMONE|SNAIL|CRAB|KELP|SHRIMP','POZA|LAPA|MEJILLÓN|BALANO|ERIZO|ANÉMONA|CARACOL|CANGREJO|ALGA|CAMARÓN'],
    ['Miniature world','Mundo en miniatura','TINY|WEB|ANTENNA|WINGS|LEGS|COCOON|LARVA|BEETLE|MILLIPEDE|APHID','DIMINUTO|TELARAÑA|ANTENA|ALAS|PATAS|CAPULLO|LARVA|ESCARABAJO|MILPIÉS|PULGÓN'],
    ['Wonderful wings','Alas maravillosas','WING|FEATHER|BEAK|NEST|EGG|FLY|GLIDE|SOAR|FLOCK|MIGRATE','ALA|PLUMA|PICO|NIDO|HUEVO|VOLAR|PLANEAR|ELEVACIÓN|BANDADA|MIGRAR'],
    ['Winter fun','Diversión en invierno','SNOWMAN|SLED|SKI|SKATE|MITTEN|SCARF|ICICLE|SNOWFLAKE|COCOA|FIREPLACE','MUÑECO|TRINEO|ESQUÍ|PATÍN|MANOPLA|BUFANDA|CARÁMBANO|COPO|CACAO|CHIMENEA'],
    ['Fire station helpers','Ayudantes de los bomberos','FIRE|HOSE|HELMET|LADDER|TRUCK|ALARM|RESCUE|HYDRANT|BOOTS|BRAVE','FUEGO|MANGUERA|CASCO|ESCALERA|CAMIÓN|ALARMA|RESCATE|HIDRANTE|BOTAS|VALIENTE'],
    ['Care for Earth','Cuida la Tierra','RECYCLE|REUSE|REPAIR|PAPER|GLASS|METAL|COMPOST|CLEAN|SAVE|REFILL','RECICLAR|REUTILIZAR|REPARAR|PAPEL|VIDRIO|METAL|COMPOST|LIMPIAR|AHORRAR|RELLENAR'],
    ['Computer creators','Creadores con computadoras','COMPUTER|SCREEN|KEYBOARD|MOUSE|TABLET|CODE|PIXEL|ROBOT|CLICK|PROGRAM','COMPUTADOR|PANTALLA|TECLADO|RATÓN|TABLETA|CÓDIGO|PÍXEL|ROBOT|CLIC|PROGRAMA'],
    ['Storybook adventure','Aventura de cuento','CASTLE|DRAGON|KNIGHT|CROWN|GIANT|WIZARD|FAIRY|QUEST|TOWER|TREASURE','CASTILLO|DRAGÓN|CABALLERO|CORONA|GIGANTE|MAGO|HADA|MISIÓN|TORRE|TESORO'],
    ['Mystery detectives','Detectives de misterios','CLUE|MYSTERY|DETECTIVE|SEARCH|SECRET|PUZZLE|HIDDEN|SOLVE|TRACK|EVIDENCE','PISTA|MISTERIO|DETECTIVE|BUSCAR|SECRETO|ACERTIJO|ESCONDIDO|RESOLVER|RASTRO|EVIDENCIA'],
    ['Deep space wonders','Maravillas del espacio','GALAXY|NEBULA|COMET|ASTEROID|METEOR|STAR|TELESCOPE|GRAVITY|COSMOS|ECLIPSE','GALAXIA|NEBULOSA|COMETA|ASTEROIDE|METEORO|ESTRELLA|TELESCOPIO|GRAVEDAD|COSMOS|ECLIPSE'],
    ['Market morning','Mañana en el mercado','MARKET|STALL|BASKET|COINS|PRICE|WEIGH|FRESH|FRUIT|BREAD|SELLER','MERCADO|PUESTO|CANASTA|MONEDAS|PRECIO|PESAR|FRESCO|FRUTA|PAN|VENDEDOR'],
    ['At the bakery','En la panadería','BAKERY|BREAD|ROLL|BAGEL|PRETZEL|CRUST|CRUMB|CUPCAKE|PASTRY|DOUGHNUT','PANADERÍA|PAN|BOLLO|ROSQUILLA|PRETZEL|CORTEZA|MIGA|PASTELITO|HOJALDRE|DONA'],
    ['Tropical fruit','Frutas tropicales','MANGO|PAPAYA|PINEAPPLE|GUAVA|COCONUT|LIME|KIWI|AVOCADO|PITAYA|LYCHEE','MANGO|PAPAYA|PIÑA|GUAYABA|COCO|LIMA|KIWI|AGUACATE|MARACUYÁ|LICHI'],
    ['Bright inventions','Inventos brillantes','WHEEL|LIGHTBULB|TELEPHONE|CAMERA|PRINTING|RADIO|COMPASS|BATTERY|MICROSCOPE|INVENTOR','RUEDA|BOMBILLA|TELÉFONO|CÁMARA|IMPRENTA|RADIO|BRÚJULA|BATERÍA|LENTE|INVENTOR'],
    ['Explorer toolkit','Herramientas del explorador','EXPLORE|COMPASS|MAP|JOURNAL|CAMERA|LANTERN|ROPE|BOOTS|CANTEEN|COURAGE','EXPLORAR|BRÚJULA|MAPA|DIARIO|CÁMARA|LINTERNA|CUERDA|BOTAS|BOTELLA|VALOR'],
    ['Amazing adventures','Aventuras increíbles','ADVENTURE|JOURNEY|DISCOVER|WONDER|CURIOUS|CHALLENGE|PRACTICE|LEARN|IMAGINE|CREATE','AVENTURA|VIAJE|DESCUBRIR|ASOMBRO|CURIOSO|RETO|PRACTICAR|APRENDER|IMAGINAR|CREAR'],
    ['Word workshop','Taller de palabras','LETTER|WORD|SENTENCE|VOWEL|RHYME|SOUND|SPELL|STORY|QUESTION|ANSWER','LETRA|PALABRA|ORACIÓN|VOCAL|RIMA|SONIDO|DELETREAR|CUENTO|PREGUNTA|RESPUESTA']
  ];
  function fold(text) {
    return String(text).toUpperCase().normalize('NFD').replace(/N\u0303/g, 'Ñ').replace(/[\u0300-\u036f]/g, '').replace(/[^A-ZÑ]/g, '');
  }
  function seedOf(text) { let n = 2166136261; for (const c of text) n = Math.imul(n ^ c.charCodeAt(0), 16777619); return n >>> 0; }
  function random(seed) { let s = seed >>> 0; return () => ((s = (Math.imul(s, 1664525) + 1013904223) >>> 0) / 4294967296); }
  const puzzles = raw.map((r, i) => Object.freeze({number:i + 1, title:Object.freeze({en:r[0], es:r[1]}), en:Object.freeze(r[2].split('|')), es:Object.freeze(r[3].split('|'))}));
  const cache = new Map();
  function generate(number, language) {
    const lang = language === 'es' ? 'es' : 'en', n = Math.max(1, Math.min(100, Number(number) || 1)), key = lang + ':' + n;
    if (cache.has(key)) return cache.get(key);
    const words = puzzles[n - 1][lang].map(fold), sorted = words.map((word,index) => ({word,index})).sort((a,b) => b.word.length - a.word.length);
    const dirs = n <= 25 ? [[0,1],[1,0]] : [[0,1],[1,0],[1,1],[1,-1]];
    let board, placements, rand;
    for (let attempt = 0; attempt < 48; attempt++) {
      rand = random(seedOf(key + ':' + attempt)); board = Array(SIZE * SIZE).fill(''); placements = [];
      let failed = false;
      for (const item of sorted) {
        const options = [];
        for (let row = 0; row < SIZE; row++) for (let col = 0; col < SIZE; col++) for (const [dr,dc] of dirs) {
          const er = row + dr * (item.word.length - 1), ec = col + dc * (item.word.length - 1);
          if (er < 0 || er >= SIZE || ec < 0 || ec >= SIZE) continue;
          const cells = [...item.word].map((_,i) => (row + dr * i) * SIZE + col + dc * i);
          if (cells.some((cell,i) => board[cell] && board[cell] !== item.word[i])) continue;
          // Favor a few shared letters, while keeping the layout varied.
          options.push({cells, rank:cells.filter(cell => board[cell]).length * 1.6 + rand() * 3});
        }
        if (!options.length) { failed = true; break; }
        options.sort((a,b) => b.rank - a.rank);
        const cells = options[0].cells;
        cells.forEach((cell,i) => board[cell] = item.word[i]);
        placements.push({index:item.index, word:item.word, cells, start:cells[0], end:cells[cells.length - 1]});
      }
      if (!failed) break;
    }
    // Guaranteed finite fallback: ten words, at most ten letters, one per row.
    if (placements.length !== 10) {
      rand = random(seedOf(key + ':rows')); board = Array(SIZE * SIZE).fill(''); placements = [];
      sorted.forEach((item,row) => {
        const col = Math.floor(rand() * (SIZE - item.word.length + 1));
        const cells = [...item.word].map((_,i) => row * SIZE + col + i);
        cells.forEach((cell,i) => board[cell] = item.word[i]);
        placements.push({index:item.index, word:item.word, cells, start:cells[0], end:cells[cells.length - 1]});
      });
    }
    const alphabet = lang === 'es' ? 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ' : 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    for (let i = 0; i < board.length; i++) if (!board[i]) board[i] = alphabet[Math.floor(rand() * alphabet.length)];
    placements.sort((a,b) => a.index - b.index);
    const result = Object.freeze({size:SIZE, number:n, lang, board:Object.freeze(board), placements:Object.freeze(placements.map(p => Object.freeze({...p,cells:Object.freeze(p.cells)})))});
    cache.set(key, result); return result;
  }
  const NS = 'http://www.w3.org/2000/svg';
  const colors = ['#255de5','#d54449','#127562','#8849af','#bd6412','#007c91','#5848aa','#a63c71','#397136','#9b4e2b'];
  function node(tag, cls, text) { const e = document.createElement(tag); if (cls) e.className = cls; if (text != null) e.textContent = text; return e; }
  function button(text, fn, cls) { const b = node('button',cls || 'ws-button',text); b.type = 'button'; b.addEventListener('click',fn); return b; }
  function svg(tag, attrs) { const n = document.createElementNS(NS,tag); for (const [k,v] of Object.entries(attrs || {})) n.setAttribute(k,String(v)); return n; }
  function center(index) { return {x:index % SIZE + .5,y:Math.floor(index / SIZE) + .5}; }
  function segment(start,end) {
    const a = center(start), b = center(end), dr = Math.round(b.y - a.y), dc = Math.round(b.x - a.x);
    if (dr !== 0 && dc !== 0 && Math.abs(dr) !== Math.abs(dc)) return null;
    const len = Math.max(Math.abs(dr),Math.abs(dc)) + 1, sr = Math.sign(dr), sc = Math.sign(dc);
    return Array.from({length:len},(_,i) => (Math.floor(a.y) + sr * i) * SIZE + Math.floor(a.x) + sc * i);
  }
  function capsule(start,end,color,preview) {
    const a = center(start), b = center(end), length = Math.hypot(b.x - a.x,b.y - a.y), angle = Math.atan2(b.y - a.y,b.x - a.x) * 180 / Math.PI;
    return svg('rect',{x:a.x - .405,y:a.y - .405,width:length + .81,height:.81,rx:.405,fill:color,'fill-opacity':preview ? .12 : .055,stroke:color,'stroke-width':.075,transform:'rotate(' + angle + ' ' + a.x + ' ' + a.y + ')'});
  }
  function pointInside(point, polygon) {
    let inside = false;
    for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
      const a = polygon[i], b = polygon[j];
      if ((a.y > point.y) !== (b.y > point.y) && point.x < (b.x - a.x) * (point.y - a.y) / (b.y - a.y) + a.x) inside = !inside;
    }
    return inside;
  }
  function polygonArea(points) {
    let area = 0;
    for (let i = 0; i < points.length; i++) {const a = points[i], b = points[(i + 1) % points.length]; area += a.x * b.y - b.x * a.y;}
    return Math.abs(area) / 2;
  }
  function mount(host, api) {
    api = api || {};
    const lang = api.lang === 'es' ? 'es' : 'en', pick = (en,es) => lang === 'es' ? es : en;
    const puzzleIDs=puzzles.map(p=>String(p.number));
    function randomNumber(){const value=api.nextRandom?.('wordsearch:'+lang,puzzleIDs);return value==null?1+Math.floor(Math.random()*100):Number(value);}
    let disposed = false, number = api.preserveSelection?Math.max(1,Math.min(100,Number(api.get?.('wordsearch-current')) || Number(api.get?.('wordsearch-current-' + lang)) || 1)):randomNumber(), boardData, found, currentID, gesture = null, tapAnchor = null, focusCell = 0;
    const localCompleted = new Set();
    const root = node('section','ws-lab'); root.dataset.activity = 'wordsearch';
    const back = node('a','ws-back',pick('← Back to learning','← Volver a aprender')); back.href = '#home';
    const heading = node('header','ws-heading');
    heading.append(node('p','ws-eyebrow',pick('100 WORD ADVENTURES','100 AVENTURAS CON PALABRAS')),node('h1','',pick('Word Explorer','Explorador de palabras')),node('p','ws-intro',pick('Circle every hidden word. Earn 1 point for each new word!','Encierra cada palabra escondida. ¡Gana 1 punto por cada palabra nueva!')));
    const nav = node('div','ws-navigation'), selectLabel = node('label','ws-select-label',pick('Choose a puzzle','Elige una sopa de letras')), select = node('select','ws-select'); select.setAttribute('aria-label',pick('Choose a numbered word search','Elige una sopa de letras numerada'));
    const previous = button(pick('← Previous','← Anterior'),() => open(number - 1),'ws-button ws-button-soft');
    const next = button(pick('Next →','Siguiente →'),() => open(randomNumber()),'ws-button ws-button-soft');
    const fresh = button(pick('Find an unfinished puzzle','Buscar una sin terminar'),() => {
      const remaining=puzzleIDs.filter(id=>!isComplete(idOf(Number(id))));if(remaining.length){const chosen=api.nextRandom?.('wordsearch-unfinished:'+lang,remaining)??remaining[Math.floor(Math.random()*remaining.length)];open(Number(chosen));return;}
      feedback.textContent = pick('You finished all 100 in this language! Choose any puzzle to explore again.','¡Terminaste las 100 en este idioma! Elige cualquiera para volver a explorar.');
    },'ws-button ws-button-outline');
    select.addEventListener('change',() => open(Number(select.value))); selectLabel.append(select); nav.append(previous,selectLabel,next);
    const stage = node('div','ws-stage'), boardPanel = node('div','ws-board-panel'), title = node('h2','ws-title'), subtitle = node('p','ws-subtitle');
    const instructions = node('p','ws-instructions',pick('Draw a loop around a word, or slide along its letters. You can also tap its first and last letters.','Dibuja un círculo alrededor de una palabra o desliza el dedo sobre sus letras. También puedes tocar la primera y la última letra.'));
    const boardWrap = node('div','ws-board-wrap'), grid = node('div','ws-grid'); grid.setAttribute('role','group');
    const overlay = svg('svg',{viewBox:'0 0 10 10',preserveAspectRatio:'none','aria-hidden':'true',class:'ws-overlay'}), circles = svg('g',{}), preview = svg('g',{}); overlay.append(circles,preview); boardWrap.append(grid,overlay);
    const mobileWords = node('ol','ws-mobile-words'); mobileWords.setAttribute('aria-label',pick('Words to find','Palabras para buscar'));
    const side = node('aside','ws-side'), sideTitle = node('h3','',pick('Find these 10 words','Busca estas 10 palabras')), counter = node('p','ws-counter'), meter = node('progress','ws-meter'); meter.max = 10; meter.setAttribute('aria-label',pick('Words found','Palabras encontradas'));
    const list = node('ol','ws-word-list'); list.setAttribute('aria-label',pick('Words to find','Palabras para buscar'));
    const feedback = node('p','ws-feedback'); feedback.setAttribute('role','status'); feedback.setAttribute('aria-live','polite');
    const hint = button(pick('Show a starting letter','Muestra una letra inicial'),showHint,'ws-button ws-button-soft');
    const finish = node('div','ws-finish'); finish.hidden = true;
    const finishTitle = node('h3'), finishText = node('p'), finishNext = button(pick('Another word adventure →','Otra aventura de palabras →'),() => open(randomNumber())); finish.append(finishTitle,finishText,finishNext);
    const alphabetNote = node('p','ws-alphabet-note',pick('Spaces are left out of the grid.','En el tablero se omiten los espacios y las tildes; la Ñ sí conserva su rayita.'));
    boardPanel.append(title,subtitle,instructions,mobileWords,boardWrap,alphabetNote); side.append(sideTitle,counter,meter,list,hint,feedback,finish); stage.append(boardPanel,side); root.append(back,heading,nav,fresh,stage); host.replaceChildren(root);
    let hintTimer = null;
    function idOf(n) {return 'wordsearch:' + lang + ':' + String(n).padStart(3,'0');}
    function isComplete(id) {return localCompleted.has(id) || !!api.completed?.(id);}
    function options() {
      const selected = select.value; select.replaceChildren();
      for (const puzzle of puzzles) {const o = node('option','',String(puzzle.number).padStart(3,'0') + ' · ' + puzzle.title[lang] + (isComplete(idOf(puzzle.number)) ? ' ✓' : '')); o.value = String(puzzle.number); select.append(o);}
      select.value = selected || String(number);
    }
    function save() {api.set?.(currentID,{found:[...found.values()].map(x => ({index:x.index,start:x.start,end:x.end}))});}
    function validFound(item) {
      if (!item || !Number.isInteger(item.index) || item.index < 0 || item.index > 9 || !Number.isInteger(item.start) || !Number.isInteger(item.end) || item.start < 0 || item.start > 99 || item.end < 0 || item.end > 99) return false;
      const cells = segment(item.start,item.end); if (!cells) return false;
      const text = cells.map(i => boardData.board[i]).join(''), word = fold(puzzles[number - 1][lang][item.index]);
      return text === word || [...text].reverse().join('') === word;
    }
    function open(n) {
      if (disposed) return;
      number = Math.max(1,Math.min(100,n)); currentID = idOf(number); boardData = generate(number,lang); gesture = null; tapAnchor = null; preview.replaceChildren(); feedback.textContent = ''; finish.hidden = true; clearTimeout(hintTimer);
      api.set?.('wordsearch-current-' + lang,number); api.set?.('wordsearch-current',number);
      found = new Map();
      const stored = api.get?.(currentID); for (const item of Array.isArray(stored?.found) ? stored.found : []) if (validFound(item)) found.set(item.index,item);
      if (isComplete(currentID)) boardData.placements.forEach(p => {if (!found.has(p.index)) found.set(p.index,{index:p.index,start:p.start,end:p.end});});
      title.textContent = '#' + String(number).padStart(3,'0') + ' · ' + puzzles[number - 1].title[lang];
      subtitle.textContent = number <= 25 ? pick('Words go across → and down ↓.','Las palabras van hacia la derecha → y hacia abajo ↓.') : pick('Look across →, down ↓, and diagonally ↘ ↙.','Busca hacia la derecha →, hacia abajo ↓ y en diagonal ↘ ↙.');
      grid.setAttribute('aria-label',pick('Letter grid. Use arrow keys to move, then Enter on the first and last letter.','Tablero de letras. Usa las flechas para moverte y pulsa Enter en la primera y la última letra.'));
      grid.replaceChildren(); focusCell = 0;
      boardData.board.forEach((letter,index) => {
        const cell = node('button','ws-cell',letter); cell.type = 'button'; cell.tabIndex = index === 0 ? 0 : -1; cell.dataset.cell = String(index); cell.dataset.row = String(Math.floor(index / 10)); cell.dataset.col = String(index % 10);
        cell.setAttribute('aria-label',pick('Row ','Fila ') + (Math.floor(index / 10) + 1) + pick(', column ',', columna ') + (index % 10 + 1) + ': ' + letter);
        // Keyboard and assistive-technology clicks. Pointer gestures are handled on the board.
        cell.addEventListener('click',event => {if (event.detail === 0) tap(index);});
        grid.append(cell);
      });
      list.replaceChildren(); mobileWords.replaceChildren(); puzzles[number - 1][lang].forEach((word,index) => {
        const item = node('li','ws-word'), name = node('span','ws-word-name',word), mark = node('span','ws-word-mark'); item.dataset.wordIndex = String(index); item.style.setProperty('--word-color',colors[index]); mark.setAttribute('aria-hidden','true'); item.append(node('span','ws-word-number',String(index + 1).padStart(2,'0')),name,mark); list.append(item); const mobileItem = node('li','ws-mobile-word',word); mobileItem.dataset.wordIndex = String(index); mobileWords.append(mobileItem);
      });
      options(); select.value = String(number); previous.disabled = number === 1; next.disabled = false; repaint();
      if (found.size === 10) completedView(false);
    }
    function repaint() {
      circles.replaceChildren();
      for (const item of found.values()) {const outline = capsule(item.start,item.end,colors[item.index]); outline.dataset.wordIndex = String(item.index); circles.append(outline);}
      list.querySelectorAll('.ws-word').forEach(item => {const done = found.has(Number(item.dataset.wordIndex)); item.classList.toggle('ws-found',done); item.querySelector('.ws-word-mark').textContent = done ? '✓' : ''; item.setAttribute('aria-label',item.querySelector('.ws-word-name').textContent + (done ? pick(', found',', encontrada') : pick(', not yet found',', por encontrar')));});
      mobileWords.querySelectorAll('.ws-mobile-word').forEach(item => {const done = found.has(Number(item.dataset.wordIndex)); item.classList.toggle('ws-mobile-found',done); item.setAttribute('aria-label',item.textContent + (done ? pick(', found',', encontrada') : pick(', not yet found',', por encontrar')));});
      counter.textContent = pick(found.size + ' of 10 found',found.size + ' de 10 encontradas'); meter.value = found.size; hint.disabled = found.size === 10;
      grid.querySelectorAll('.ws-cell').forEach(cell => cell.classList.remove('ws-anchor'));
      if (tapAnchor != null) grid.children[tapAnchor].classList.add('ws-anchor');
    }
    function completedView(earned) {
      finish.hidden = false; finishTitle.textContent = pick('Word adventure complete!','¡Aventura de palabras completa!');
      finishText.textContent = pick('All 10 words found! Each new word earns 1 point.','¡Encontraste las 10 palabras! Cada palabra nueva da 1 punto.');
      options(); select.value = String(number);
    }
    function addFound(index,start,end) {
      if (found.has(index)) {feedback.textContent = pick('You already circled that one. Look for another!','Ya encerraste esa palabra. ¡Busca otra!'); return false;}
      found.set(index,{index,start,end}); tapAnchor = null; preview.replaceChildren(); save(); repaint();
      const earned=api.findItem?!!api.findItem(currentID+':'+index):true;
      feedback.textContent = '✓ ' + puzzles[number - 1][lang][index] + (earned?pick(' — found! +1 point.',' — ¡encontrada! +1 punto.'):pick(' — found again!',' — ¡encontrada otra vez!'));
      if (found.size === 10) {
        const earned = isComplete(currentID) ? false : (api.complete ? !!api.complete(currentID) : true);
        localCompleted.add(currentID); completedView(earned);
      }
      return true;
    }
    function match(start,end) {
      const cells = segment(start,end); if (!cells || cells.length < 2) return false;
      const text = cells.map(index => boardData.board[index]).join(''), reverse = [...text].reverse().join('');
      const index = puzzles[number - 1][lang].findIndex(word => fold(word) === text || fold(word) === reverse);
      if (index < 0) return false;
      addFound(index,start,end); return true;
    }
    function tap(index) {
      if (found.size === 10) return;
      if (tapAnchor == null) {tapAnchor = index; feedback.textContent = pick('Now tap the last letter of that word.','Ahora toca la última letra de esa palabra.');}
      else if (tapAnchor === index) {tapAnchor = null; feedback.textContent = '';}
      else {const start = tapAnchor; tapAnchor = null; if (!match(start,index)) feedback.textContent = pick('Keep looking. Try the first and last letters of a listed word.','Sigue buscando. Prueba con la primera y la última letra de una palabra de la lista.');}
      repaint();
    }
    function location(event) {
      const box = grid.getBoundingClientRect();
      return {x:Math.max(-.1,Math.min(10.1,(event.clientX - box.left) / box.width * 10)),y:Math.max(-.1,Math.min(10.1,(event.clientY - box.top) / box.height * 10))};
    }
    function cellAt(point) {return Math.max(0,Math.min(9,Math.floor(point.y))) * 10 + Math.max(0,Math.min(9,Math.floor(point.x)));}
    function down(event) {
      if (found.size === 10 || gesture || event.isPrimary === false || (event.pointerType === 'mouse' && event.button !== 0)) return;
      event.preventDefault();
      const point = location(event); gesture = {id:event.pointerId,start:cellAt(point),points:[point],maxMove:0};
      try {grid.setPointerCapture(event.pointerId);} catch (_) {}
      preview.replaceChildren();
    }
    function move(event) {
      if (!gesture || gesture.id !== event.pointerId) return;
      event.preventDefault(); const point = location(event), first = gesture.points[0], last = gesture.points[gesture.points.length - 1];
      gesture.maxMove = Math.max(gesture.maxMove,Math.hypot(point.x - first.x,point.y - first.y));
      if (Math.hypot(point.x - last.x,point.y - last.y) > .04) gesture.points.push(point);
      preview.replaceChildren();
      if (gesture.points.length > 1) preview.append(svg('polyline',{points:gesture.points.map(p => p.x + ',' + p.y).join(' '),fill:'none',stroke:'#245de5','stroke-width':.09,'stroke-linecap':'round','stroke-linejoin':'round','stroke-opacity':.8}));
    }
    function loopMatch(points) {
      if (points.length < 6) return false;
      const first = points[0], last = points[points.length - 1];
      if (Math.hypot(first.x - last.x,first.y - last.y) > 1.5) return false;
      const area = polygonArea(points); if (area < .7) return false;
      const candidates = boardData.placements.filter(p => !found.has(p.index) && area <= p.word.length * 2.3 && p.cells.every(c => pointInside(center(c),points)));
      if (candidates.length !== 1) return false;
      const p = candidates[0]; return addFound(p.index,p.start,p.end);
    }
    function up(event) {
      if (!gesture || gesture.id !== event.pointerId) return;
      event.preventDefault(); const active = gesture, point = location(event); gesture = null; active.points.push(point); preview.replaceChildren();
      try {grid.releasePointerCapture(event.pointerId);} catch (_) {}
      if (active.maxMove < .28 && Math.hypot(point.x - active.points[0].x,point.y - active.points[0].y) < .28) {tap(active.start); return;}
      tapAnchor = null;
      if (!loopMatch(active.points) && !match(active.start,cellAt(point))) feedback.textContent = pick('Try again: slide from the first letter to the last, or draw a loop around the whole word.','Intenta otra vez: desliza desde la primera letra hasta la última o encierra la palabra completa.');
      repaint();
    }
    function cancel(event) {if (!gesture || gesture.id !== event.pointerId) return; gesture = null; preview.replaceChildren();}
    function keyboard(event) {
      const cell = event.target.closest('.ws-cell'); if (!cell) return;
      const index = Number(cell.dataset.cell), r = Math.floor(index / 10), c = index % 10;
      const targets = {ArrowLeft:r * 10 + Math.max(0,c - 1),ArrowRight:r * 10 + Math.min(9,c + 1),ArrowUp:Math.max(0,r - 1) * 10 + c,ArrowDown:Math.min(9,r + 1) * 10 + c,Home:r * 10,End:r * 10 + 9};
      if (event.key in targets) {event.preventDefault(); grid.children[focusCell].tabIndex = -1; focusCell = targets[event.key]; grid.children[focusCell].tabIndex = 0; grid.children[focusCell].focus({preventScroll:true});}
      if (event.key === 'Escape') {tapAnchor = null; preview.replaceChildren(); repaint(); feedback.textContent = '';}
    }
    function showHint() {
      const nextWord = boardData.placements.find(p => !found.has(p.index)); if (!nextWord) return;
      clearTimeout(hintTimer); grid.querySelectorAll('.ws-hint-cell').forEach(c => c.classList.remove('ws-hint-cell'));
      const cell = grid.children[nextWord.start]; cell.classList.add('ws-hint-cell');
      feedback.textContent = pick('Look for ','Busca ') + puzzles[number - 1][lang][nextWord.index] + pick('. Its first letter is glowing.','. Su primera letra está iluminada.');
      hintTimer = setTimeout(() => cell.classList.remove('ws-hint-cell'),2800);
    }
    grid.addEventListener('pointerdown',down); grid.addEventListener('pointermove',move); grid.addEventListener('pointerup',up); grid.addEventListener('pointercancel',cancel); grid.addEventListener('lostpointercapture',cancel); grid.addEventListener('keydown',keyboard); grid.addEventListener('contextmenu',e => e.preventDefault());
    open(number);
    return {dispose(){disposed = true; gesture = null; clearTimeout(hintTimer); grid.removeEventListener('pointerdown',down); grid.removeEventListener('pointermove',move); grid.removeEventListener('pointerup',up); grid.removeEventListener('pointercancel',cancel); grid.removeEventListener('lostpointercapture',cancel); grid.removeEventListener('keydown',keyboard);},saveState:save};
  }
  window.MLL_WORDSEARCH = Object.freeze({mount,puzzles:Object.freeze(puzzles),generate,fold});
})();

;

/* ===== spy.js ===== */
/* Forty original search-and-circle scenes. All art is local SVG; no network requests. */
(function () {
  'use strict';
  const definitions = [
    ['Coral cove','La caleta de coral','sea','fish clownfish seahorse octopus squid crab lobster turtle starfish jellyfish stingray shell coral submarine crystal dolphin whale shark'],
    ['Busy barnyard','Una granja animada','farm','cow pig sheep goat horse chicken rooster turkey duck goose barn tractor corn carrot apple sunflower watering-can butterfly'],
    ['Moon base','La base lunar','space','rocket spaceship satellite robot moon star comet crystal rock glasses kite backpack boot watch key cup book pencil'],
    ['Treehouse trail','El sendero de la casa del árbol','forest','treehouse squirrel owl fox rabbit hedgehog deer bear acorn leaf pine-tree mushroom snail butterfly book kite boot backpack'],
    ['Sunny beach','La playa soleada','coast','palm-tree sailboat rowboat shell starfish crab turtle dolphin wave sun island hat umbrella ball ice-cream glasses kite lighthouse'],
    ['The big city trip','Un paseo por la ciudad','city','bus taxi car truck bicycle scooter school bridge house clock umbrella backpack book pencil glasses hat dog owl'],
    ['A rainy day indoors','Un día de lluvia en casa','room','teddy-bear book pencil crayon scissors paintbrush cup teapot clock watch umbrella boot cloud cat dog ball guitar spinning-top'],
    ['Mountain camp','El campamento de montaña','mountain','tent mountain pine-tree waterfall eagle deer bear fox rabbit rock leaf acorn backpack boot cup hat watch star'],
    ['Jungle explorers','Exploradores de la selva','jungle','monkey gorilla sloth parrot toucan snake lizard chameleon gecko frog butterfly fern palm-tree leaf banana pineapple waterfall backpack'],
    ['The little bakery','La pequeña panadería','shop','cupcake donut ice-cream pizza apple pear banana strawberry cherry lemon orange teapot cup clock hat key book flower'],
    ['Polar expedition','La expedición polar','polar','penguin seal walrus sea-lion whale fish igloo snowflake mountain moon star rock ship submarine boot hat cup backpack'],
    ['Pet parade','El desfile de mascotas','town','dog cat rabbit mouse rat hedgehog turtle fish parrot chicken ball house umbrella bicycle scooter hat flower teddy-bear'],
    ['Through the garden gate','Por la puerta del jardín','garden','flower sunflower rose tulip leaf tree grass fern ladybug bee butterfly snail frog carrot watering-can mushroom apple acorn'],
    ['Music museum','El museo de música','museum','guitar piano violin trumpet drum book pencil paintbrush crown hat clock watch key lock cup teapot parrot flower'],
    ['Spaceport secrets','Secretos del puerto espacial','space','spaceship rocket satellite robot comet moon star sun crystal rock airplane helicopter clock watch lock key backpack glasses'],
    ['The funfair','La feria','fair','hot-air-balloon kite ball teddy-bear spinning-top yo-yo ice-cream donut cupcake crown hat trumpet drum bicycle roller-skate rainbow sun star'],
    ['The hidden pond','El estanque escondido','pond','frog duck swan goose fish turtle snail cloud butterfly ladybug bee flower leaf grass rock wave tree shell'],
    ['Harbor lookout','El mirador del puerto','coast','lighthouse sailboat rowboat ship submarine whale dolphin seal sea-lion crab lobster shell wave bridge cloud hat boot clock'],
    ['Safari surprise','Sorpresas del safari','savanna','lion elephant giraffe zebra hippo rhino monkey meerkat crocodile snake lizard tree grass sun rock hat backpack glasses'],
    ['Toy workshop','El taller de juguetes','room','robot teddy-bear kite ball baseball baseball-bat soccer-ball basketball football tennis-racket yo-yo spinning-top train car airplane helicopter book drum'],
    ['Mountain railway','El tren de montaña','mountain','train bridge mountain pine-tree waterfall eagle bear deer moose goat sheep rock snowflake cloud house backpack hat clock'],
    ['Forest after dark','El bosque de noche','night','owl bat fox wolf raccoon skunk opossum hedgehog deer mouse moon star pine-tree acorn mushroom leaf tent cup'],
    ['Farmers market','El mercado de la granja','farm','apple pear banana orange strawberry watermelon pineapple grapes cherry lemon carrot broccoli corn mushroom pumpkin avocado sunflower watering-can'],
    ['The art studio','El taller de arte','room','paintbrush crayon pencil scissors book flower sunflower rose tulip cup teapot clock hat glasses cat dog butterfly rainbow'],
    ['Shark lagoon','La laguna del tiburón','sea','shark dolphin fish clownfish stingray seahorse jellyfish octopus squid crab lobster turtle starfish shell coral rock wave submarine'],
    ['Castle courtyard','El patio del castillo','castle','castle crown key lock bridge horse deer peacock swan rose flower tree rock guitar trumpet book cup hat'],
    ['Wheels workshop','El taller sobre ruedas','garage','car bus truck taxi fire-engine ambulance police-car tractor bulldozer excavator train bicycle scooter skateboard roller-skate helicopter clock key'],
    ['School-day search','A buscar en la escuela','school','school bus backpack book pencil crayon paintbrush scissors clock moon basketball soccer-ball baseball baseball-bat guitar piano flower apple'],
    ['Rainforest river','El río de la selva','jungle','crocodile frog turtle fish snake chameleon sloth monkey toucan parrot butterfly leaf fern palm-tree waterfall rowboat pineapple banana'],
    ['Desert discovery','Descubrimientos del desierto','desert','camel meerkat armadillo snake lizard gecko cactus rock crystal sun moon star mountain tent backpack hat boot eagle'],
    ['Fruit island','La isla de las frutas','coast','palm-tree island pineapple banana watermelon orange lemon avocado parrot toucan crab shell rowboat sailboat wave sun hat umbrella'],
    ['Backyard party','La fiesta en el jardín','garden','house tree flower butterfly bee ladybug dog cat ball kite cupcake donut ice-cream watermelon grapes cup teapot guitar'],
    ['Rescue station','La estación de rescate','city','fire-engine ambulance police-car helicopter truck car bus bicycle school house bridge clock watch umbrella boot hat dog cat'],
    ['Deep-sea station','La estación submarina','deep','submarine octopus squid jellyfish shark whale fish seahorse crab lobster starfish shell coral crystal rock robot clock key'],
    ['Winter cabin','La cabaña de invierno','polar','house pine-tree snowflake bear deer moose fox rabbit owl penguin mountain cloud moon star boot hat cup teapot'],
    ['Butterfly meadow','El prado de las mariposas','garden','butterfly bee ladybug snail rabbit hedgehog mouse squirrel flower sunflower rose tulip leaf grass tree mushroom rainbow cloud'],
    ['Astronaut picnic','El picnic de los astronautas','space','rocket robot moon star comet sun apple banana strawberry watermelon cupcake donut cup teapot hat boot book teddy-bear'],
    ['Sports in the park','Deportes en el parque','park','baseball baseball-bat soccer-ball basketball football tennis-racket ball bicycle scooter skateboard roller-skate kite hat watch backpack tree flower dog'],
    ['Animal sanctuary','El refugio de animales','savanna','koala panda kangaroo platypus otter beaver porcupine sloth monkey gorilla zebra camel deer rabbit tree leaf grass rock'],
    ['The grand adventure','La gran aventura','adventure','hot-air-balloon train sailboat rocket tent treehouse lighthouse castle mountain waterfall rainbow crystal eagle turtle lion kangaroo book key']
  ];
  const scenes=definitions.map((s,index)=>Object.freeze({id:'spy:'+String(index+1).padStart(3,'0'),number:index+1,en:s[0],es:s[1],theme:s[2],targets:Object.freeze(s[3].split(' '))}));
  function random(seed){let x=seed>>>0;return()=>{x=(x*1664525+1013904223)>>>0;return x/4294967296;};}
  function shuffle(a,rand){const out=a.slice();for(let i=out.length-1;i>0;i--){const j=Math.floor(rand()*(i+1));[out[i],out[j]]=[out[j],out[i]];}return out;}
  function esc(s){return String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
  function element(tag,cls,text){const n=document.createElement(tag);if(cls)n.className=cls;if(text!==undefined)n.textContent=text;return n;}
  function button(text,fn,cls){const b=element('button',cls||'spy-button',text);b.type='button';b.addEventListener('click',fn);return b;}
  function inside(point,poly){let hit=false;for(let i=0,j=poly.length-1;i<poly.length;j=i++){const a=poly[i],b=poly[j];if((a.y>point.y)!==(b.y>point.y)&&point.x<(b.x-a.x)*(point.y-a.y)/(b.y-a.y)+a.x)hit=!hit;}return hit;}
  function area(poly){let sum=0;for(let i=0,j=poly.length-1;i<poly.length;j=i++)sum+=poly[j].x*poly[i].y-poly[i].x*poly[j].y;return Math.abs(sum)/2;}
  function circleHit(points,items){
    if(points.length<8)return null;
    const xs=points.map(p=>p.x),ys=points.map(p=>p.y),w=Math.max(...xs)-Math.min(...xs),h=Math.max(...ys)-Math.min(...ys),first=points[0],last=points[points.length-1];
    if(w<25||h<25||w>310||h>310||area(points)<420||area(points)>58000||Math.hypot(first.x-last.x,first.y-last.y)>Math.max(28,Math.hypot(w,h)*.29))return null;
    const enclosed=items.filter(item=>inside(item,points));
    if(enclosed.length!==1)return null;
    const item=enclosed[0];
    if(w<item.size*.52||h<item.size*.52||w>item.size*2.8||h>item.size*2.8)return null;
    return item;
  }
  function layout(scene,art){
    const rand=random(85431+scene.number*911),known=new Set(art.map(a=>a.id));
    const missing=scene.targets.filter(id=>!known.has(id));if(missing.length)throw new Error('Missing I Spy art: '+missing.join(', '));
    const extra=shuffle(art.filter(a=>!scene.targets.includes(a.id)).map(a=>a.id),rand).slice(0,10);
    const ids=shuffle(scene.targets.concat(extra),rand),points=[];
    for(let i=0;i<ids.length;i++){
      let best=null,bestD=-1;
      for(let attempt=0;attempt<160;attempt++){
        const x=70+rand()*860,y=72+rand()*551;
        let d=Math.min(x-19,981-x,y-19,681-y)*1.3;
        for(const q of points)d=Math.min(d,Math.hypot(q.x-x,q.y-y));
        if(d>bestD){bestD=d;best={x,y};}
      }
      points.push({...best,id:ids[i],target:scene.targets.includes(ids[i]),angle:Math.round((rand()-.5)*28),size:104+rand()*22});
    }
    for(const p of points){const distance=Math.min(...points.filter(q=>q!==p).map(q=>Math.hypot(p.x-q.x,p.y-q.y)));p.size=Math.min(p.size,distance*.91);}
    return points;
  }
  function background(scene){
    const t=scene.theme,r=random(9851+scene.number),lines=[];
    const path=(d,cls)=>lines.push('<path'+(cls?' class="'+cls+'"':'')+' d="'+d+'"/>');
    const round=(x,y,rad)=>lines.push('<circle cx="'+x+'" cy="'+y+'" r="'+rad+'"/>');
    const rect=(x,y,w,h)=>lines.push('<rect x="'+x+'" y="'+y+'" width="'+w+'" height="'+h+'" rx="6"/>');
    // A different landscape is composed for each numbered scene, around a clear search field.
    const offset=scene.number*13%80;
    if(['sea','deep','pond','coast'].includes(t)){
      for(let row=0;row<5;row++)path('M-20 '+(90+row*127+offset/3)+' Q160 '+(55+row*127)+' 340 '+(94+row*127)+' T680 '+(94+row*127)+' T1040 '+(94+row*127));
      path('M-10 655 Q120 588 260 655 T535 650 T810 654 T1030 623');
      for(let i=0;i<22;i++){const x=25+i*47,y=650+r()*25;path('M'+x+' '+y+'q-18 -24 0 -54q22 30 10 46');}
      for(let i=0;i<26;i++)round(20+r()*960,24+r()*570,3+r()*7);
      if(t==='coast'){path('M0 108 Q205 45 370 88 T710 95 T1000 57');path('M0 137 Q225 84 390 118 T720 125 T1000 87');}
      if(t==='deep'){path('M22 40 H978 V664 H22 Z');for(let i=0;i<10;i++)round(45+i*102,45,5);}
    }else if(['space','night'].includes(t)){
      path('M-20 656 Q200 575 365 629 T705 636 T1020 596');
      for(let i=0;i<70;i++){const x=20+r()*960,y=22+r()*640;round(x,y,1+r()*2);if(i%7===0)path('M'+(x-7)+' '+y+'h14M'+x+' '+(y-7)+'v14');}
      if(t==='space'){path('M650 -50 A350 245 0 0 1 1080 280');path('M682 -30 A290 205 0 0 1 1045 257');path('M40 700 Q400 320 1040 150');}
      else{path('M-20 550 Q110 496 205 553 T550 574 T1020 530');}
    }else if(['room','shop','museum','school','garage'].includes(t)){
      path('M15 50 H985 V663 H15 Z M15 545 H985 M75 545 L15 663 M260 545 L225 663 M450 545 L440 663 M640 545 L667 663 M830 545 L890 663');
      const base=scene.number%2?130:90;
      for(let row=0;row<3;row++){path('M40 '+(base+row*155)+'H960');path('M44 '+(base+row*155+9)+'H956');}
      for(let i=0;i<5;i++)rect(45+i*204,25,93,22);
      if(t==='museum'){path('M18 25 H982 M18 5 H982');for(let x of [25,970]){path('M'+x+' 40 V525');path('M'+(x+9)+' 40 V525');}}
    }else if(['city','town','castle','fair','park'].includes(t)){
      path('M-10 608 Q250 574 480 615 T1010 620 M-10 654 Q250 623 480 664 T1010 669');
      for(let i=0;i<11;i++){const x=i*101-28,h=35+(i*37+offset)%64;path('M'+x+' 117 V'+(117-h)+'h'+(67+i%3*8)+'V117');for(let j=0;j<3;j++)rect(x+11+j*18,123-h,8,11);}
      for(let i=0;i<23;i++)path('M'+(i*45-10)+' 637h17');
      if(t==='fair'){path('M-10 18 Q250 127 500 18 T1010 18');for(let i=0;i<24;i++){const x=i*45;path('M'+x+' '+(26+Math.sin(i*.3)*25)+'l16 26 13-19');}}
      if(t==='castle'){for(let x of [10,960])path('M'+x+' 605 V165h8v-25h13v25h13v-25h13v25h8v440');}
    }else{
      const peak=(x,height)=>path('M'+(x-155)+' 151 L'+x+' '+height+' L'+(x+155)+' 151 M'+(x-39)+' '+(height+40)+'l37 13 28-18 19 13');
      if(['mountain','polar','desert','adventure'].includes(t)){peak(140+offset,14);peak(480-offset,25);peak(820+offset/2,7);}
      path('M-20 600 Q90 551 220 612 T490 606 T755 605 T1020 581');
      path('M-20 665 Q160 612 320 661 T610 656 T1040 642');
      for(let i=0;i<47;i++){const x=15+r()*970,y=40+r()*627;path('M'+x+' '+y+'l-4-7m4 7 4-8');}
      if(['forest','jungle'].includes(t)){for(let x of [13,978])path('M'+x+' 665q25-180 6-302t5-330m-2 202-32-82m28 137 36-93');path('M-25 18 Q150 110 310 35 T675 39 T1020 3');}
      if(['farm','garden','pond'].includes(t)){path('M-5 39 H1005 M-5 55 H1005');for(let x=5;x<1000;x+=50)path('M'+x+' 17v72');}
      if(t==='polar'){for(let i=0;i<35;i++){const x=r()*1000,y=r()*650;round(x,y,2+r()*2);}}
      if(t==='savanna'){path('M-5 113 Q85 55 170 105 T345 104 T585 110 T815 99 T1005 113');}
    }
    return '<g class="spy-environment" fill="none" stroke-linecap="round" stroke-linejoin="round">'+lines.join('')+'</g>';
  }
  function symbolSvg(a,cls){return '<svg class="'+(cls||'spy-mini')+'" viewBox="0 0 200 200" aria-hidden="true"><g class="spy-symbol">'+a.svg+'</g></svg>';}
  function mount(host,api){
    api=api||{};const pick=(en,es)=>api.lang==='es'?es:en,art=api.art||[],artMap=new Map(art.map(a=>[a.id,a]));
    let destroyed=false,cleanup=null,current=0,mode='circle',zoom=1,points=[],activePointer=null,progress={},items=[],svg,ringLayer,stroke,viewport,status,targetList,heading,foundCount,completion,sceneNav,zoomLabel;
    const read=(key,fallback)=>{try{const v=api.get?api.get(key):null;return v==null?fallback:v;}catch(e){return fallback;}};
    const write=(key,value)=>{try{if(api.set)api.set(key,value);}catch(e){}};
    const isComplete=id=>{try{return !!(api.completed&&api.completed(id));}catch(e){return false;}};
    const root=element('section','spy-app');host.replaceChildren(root);
    function randomIndex(){const ids=scenes.map(s=>s.id),id=api.nextRandom?.('spy',ids)??ids[Math.floor(Math.random()*ids.length)];return Math.max(0,scenes.findIndex(s=>s.id===id));}
    function title(a){return api.lang==='es'?a.es:a.en;}
    function say(en,es){status.textContent=pick(en,es);}
    function clearEvents(){if(cleanup){cleanup();cleanup=null;}}
    function save(){write('spy:progress:'+scenes[current].number,{found:progress.found.slice(),rings:progress.rings.slice()});}
    function catalog(){
      clearEvents();root.replaceChildren();const h=element('div','spy-catalog-heading');h.append(element('span','spy-kicker',pick('LOOK CLOSELY · 40 SCENES','MIRA CON ATENCIÓN · 40 ESCENAS')),element('h1','',pick('I Spy','Veo, veo')),element('p','',pick('A world of little things to find. Earn 1 point for each new thing you find.','Un mundo de cosas por encontrar. Gana 1 punto por cada objeto nuevo que encuentres.')));root.append(h);
      const grid=element('div','spy-catalog');scenes.forEach(scene=>{const p=read('spy:progress:'+scene.number,{}),count=Array.isArray(p.found)?p.found.filter(id=>scene.targets.includes(id)).length:0,done=isComplete(scene.id),b=button('',()=>open(scene.number-1),'spy-scene-card');const thumb=element('div','spy-scene-thumb');thumb.innerHTML='<svg viewBox="0 0 1000 700" aria-hidden="true">'+background(scene)+scene.targets.slice(0,3).map((id,i)=>{const a=artMap.get(id);return a?'<g class="spy-symbol" transform="translate('+(135+i*252)+' '+(185+(i%2)*90)+') scale(.85)">'+a.svg+'</g>':'';}).join('')+'</svg>';b.append(thumb,element('span','spy-scene-number',String(scene.number).padStart(2,'0')),element('strong','',title(scene)),element('span','spy-scene-count',done?pick('✓ Scene complete','✓ Escena completa'):count?pick(count+' / 18 found',count+' / 18 encontrados'):pick('18 things to find','18 cosas para encontrar')));grid.append(b);});root.append(grid);
    }
    function open(index){
      clearEvents();current=(index+scenes.length)%scenes.length;const scene=scenes[current];write('spy:last',current);mode='circle';zoom=1;points=[];activePointer=null;
      const stored=read('spy:progress:'+scene.number,{});progress={found:Array.isArray(stored.found)?[...new Set(stored.found.filter(id=>scene.targets.includes(id)))]:[],rings:Array.isArray(stored.rings)?stored.rings.filter(r=>scene.targets.includes(r.id)&&Array.isArray(r.points)&&r.points.length<=200&&r.points.every(p=>Number.isFinite(p.x)&&Number.isFinite(p.y))):[]};
      items=layout(scene,art);root.replaceChildren();
      const top=element('div','spy-top');top.append(button(pick('← All 40 scenes','← Las 40 escenas'),catalog,'spy-button spy-back'));
      const pager=element('div','spy-pager');pager.append(button('←',()=>open(current-1)),element('span','',String(scene.number).padStart(2,'0')+' / 40'),button('→',()=>open(randomIndex())));pager.firstChild.setAttribute('aria-label',pick('Previous scene','Escena anterior'));pager.lastChild.setAttribute('aria-label',pick('Next scene','Escena siguiente'));top.append(pager);root.append(top);
      const intro=element('div','spy-intro');heading=element('h1','',title(scene));foundCount=element('div','spy-progress');intro.append(heading,foundCount);root.append(intro,element('p','spy-instructions',pick('Draw a circle around each hidden thing. Earn 1 point for each new find.','Dibuja un círculo alrededor de cada objeto escondido. Gana 1 punto por cada objeto nuevo.')));
      const toolbar=element('div','spy-toolbar'),modes=element('div','spy-modes');
      const circleB=button(pick('Circle','Rodear'),()=>setMode('circle')),moveB=button(pick('Move','Mover'),()=>setMode('move')),tapB=button(pick('Tap instead','Tocar'),()=>setMode('tap'));
      const modeButtons={circle:circleB,move:moveB,tap:tapB};modes.append(circleB,moveB,tapB);toolbar.append(modes);
      const zoomControls=element('div','spy-zoom');zoomLabel=element('span','spy-zoom-label','100%');const minus=button('−',()=>setZoom(zoom-.5)),plus=button('+',()=>setZoom(zoom+.5));minus.setAttribute('aria-label',pick('Zoom out','Alejar'));plus.setAttribute('aria-label',pick('Zoom in','Acercar'));zoomControls.append(minus,zoomLabel,plus,button(pick('Fit','Ver todo'),()=>setZoom(1)));toolbar.append(zoomControls);root.append(toolbar);
      status=element('p','spy-status',pick('Zoom in for small objects. Use Move to explore the picture.','Acerca los objetos pequeños. Usa Mover para recorrer la imagen.'));status.setAttribute('role','status');root.append(status);
      const columns=element('div','spy-columns');viewport=element('div','spy-viewport');viewport.tabIndex=0;viewport.setAttribute('aria-label',pick('Search picture. Use the circle or tap tools to find listed objects.','Imagen para buscar. Usa Rodear o Tocar para encontrar los objetos de la lista.'));
      const content=element('div','spy-picture');content.innerHTML='<svg class="spy-board" viewBox="0 0 1000 700" role="group" aria-label="'+esc(title(scene))+'"><rect width="1000" height="700" fill="#fffef9"/>'+background(scene)+items.map(item=>{const a=artMap.get(item.id);return '<g class="spy-object" data-object="'+esc(item.id)+'" role="button" tabindex="0" aria-label="'+esc(title(a))+'" transform="translate('+item.x+' '+item.y+') rotate('+item.angle+') scale('+item.size/200+') translate(-100 -100)"><rect class="spy-hit" width="200" height="200" fill="transparent"/><g class="spy-symbol">'+a.svg+'</g></g>';}).join('')+'<g class="spy-rings" pointer-events="none"></g><path class="spy-live-ring" fill="none" pointer-events="none"/></svg>';
      viewport.append(content);columns.append(viewport);const aside=element('aside','spy-find-panel');aside.append(element('h2','',pick('Find these 18','Encuentra estos 18')));targetList=element('div','spy-targets');aside.append(targetList);columns.append(aside);root.append(columns);completion=element('div','spy-completion');root.append(completion);
      svg=content.querySelector('svg');ringLayer=svg.querySelector('.spy-rings');stroke=svg.querySelector('.spy-live-ring');
      function setMode(next){mode=next;Object.entries(modeButtons).forEach(([key,b])=>b.setAttribute('aria-pressed',String(key===next)));viewport.dataset.mode=next;say(next==='move'?'Drag the picture to look around. Switch to Circle to mark a find.':next==='tap'?'Tap one of the 18 things on your list.':'Draw one closed circle around one thing.',next==='move'?'Arrastra la imagen para explorar. Vuelve a Rodear para marcar un objeto.':next==='tap'?'Toca uno de los 18 objetos de tu lista.':'Dibuja un círculo cerrado alrededor de un solo objeto.');}
      function setZoom(next){const old=zoom;zoom=Math.max(1,Math.min(3,next));const centerX=(viewport.scrollLeft+viewport.clientWidth/2)/old,centerY=(viewport.scrollTop+viewport.clientHeight/2)/old;content.style.width=(zoom*100)+'%';zoomLabel.textContent=Math.round(zoom*100)+'%';minus.disabled=zoom===1;plus.disabled=zoom===3;viewport.scrollLeft=centerX*zoom-viewport.clientWidth/2;viewport.scrollTop=centerY*zoom-viewport.clientHeight/2;if(zoom>1&&mode==='circle')say('Use Move to look around, then Circle to mark a find.','Usa Mover para explorar y Rodear para marcar un objeto.');}
      const resizeBoard=()=>{viewport.style.height=Math.max(280,Math.ceil(viewport.clientWidth*.7)+4)+'px';};
      const resizeObserver=typeof ResizeObserver!=='undefined'?new ResizeObserver(resizeBoard):null;
      if(resizeObserver)resizeObserver.observe(viewport);else window.addEventListener('resize',resizeBoard);
      resizeBoard();
      let start=null,last=null,moved=false;
      const point=e=>{const b=svg.getBoundingClientRect();return{x:(e.clientX-b.left)*1000/b.width,y:(e.clientY-b.top)*700/b.height};};
      const down=e=>{if(activePointer!==null||e.button>0)return;activePointer=e.pointerId;start={x:e.clientX,y:e.clientY};last=start;moved=false;try{viewport.setPointerCapture(e.pointerId);}catch(err){}if(mode==='circle'){points=[point(e)];stroke.setAttribute('d','');}e.preventDefault();};
      const move=e=>{if(activePointer!==e.pointerId)return;const now={x:e.clientX,y:e.clientY};if(Math.hypot(now.x-start.x,now.y-start.y)>6)moved=true;if(mode==='move'){viewport.scrollLeft-=now.x-last.x;viewport.scrollTop-=now.y-last.y;}else if(mode==='circle'){const p=point(e),prev=points[points.length-1];if(Math.hypot(p.x-prev.x,p.y-prev.y)>2){points.push(p);if(points.length>190)points=points.filter((_,i)=>i%2===0);stroke.setAttribute('d','M'+points.map(p=>p.x.toFixed(1)+' '+p.y.toFixed(1)).join('L'));}}last=now;e.preventDefault();};
      const up=e=>{if(activePointer!==e.pointerId)return;activePointer=null;try{viewport.releasePointerCapture(e.pointerId);}catch(err){}if(mode==='circle'){points.push(point(e));const hit=circleHit(points,items);if(hit)found(hit,points);else if(moved)say('Try a closed circle around just one whole thing. Zoom in if you need to.','Prueba un círculo cerrado alrededor de un solo objeto. Acércalo si lo necesitas.');stroke.setAttribute('d','');points=[];}else if(mode==='tap'&&!moved){const p=point(e),near=items.filter(i=>Math.abs(i.x-p.x)<i.size*.59&&Math.abs(i.y-p.y)<i.size*.59).sort((a,b)=>Math.hypot(a.x-p.x,a.y-p.y)-Math.hypot(b.x-p.x,b.y-p.y))[0];if(near)found(near,null);}e.preventDefault();};
      const cancel=()=>{activePointer=null;points=[];stroke.setAttribute('d','');};
      const key=e=>{const g=e.target.closest('[data-object]');if(g&&(e.key==='Enter'||e.key===' ')){e.preventDefault();found(items.find(i=>i.id===g.dataset.object),null);}};
      viewport.addEventListener('pointerdown',down);viewport.addEventListener('pointermove',move);viewport.addEventListener('pointerup',up);viewport.addEventListener('pointercancel',cancel);viewport.addEventListener('lostpointercapture',cancel);svg.addEventListener('keydown',key);
      cleanup=()=>{if(resizeObserver)resizeObserver.disconnect();else window.removeEventListener('resize',resizeBoard);viewport.removeEventListener('pointerdown',down);viewport.removeEventListener('pointermove',move);viewport.removeEventListener('pointerup',up);viewport.removeEventListener('pointercancel',cancel);viewport.removeEventListener('lostpointercapture',cancel);svg.removeEventListener('keydown',key);};
      setMode('circle');setZoom(1);refresh();
    }
    function found(item,ring){
      if(!item)return;if(!item.target){say('A good discovery! This one is not on the list.','¡Buen hallazgo! Este no está en la lista.');return;}
      if(progress.found.includes(item.id)){say('You already found that one. Keep looking!','Ese ya lo encontraste. ¡Sigue buscando!');return;}
      progress.found.push(item.id);progress.rings.push({id:item.id,points:ring?ring.map(p=>({x:Math.round(p.x),y:Math.round(p.y)})):Array.from({length:33},(_,i)=>({x:Math.round(item.x+Math.cos(i*Math.PI/16)*item.size*.64),y:Math.round(item.y+Math.sin(i*Math.PI/16)*item.size*.64)}))});save();
      const earned=api.findItem?!!api.findItem(scenes[current].id+':'+item.id):true;
      const name=title(artMap.get(item.id));say(name+' found! '+progress.found.length+' of 18.'+(earned?' +1 point.':''), '¡Encontraste '+name.toLowerCase()+'! '+progress.found.length+' de 18.'+(earned?' +1 punto.':''));
      if(progress.found.length===18&&api.complete)api.complete(scenes[current].id);
      refresh();
    }
    function refresh(){
      const scene=scenes[current];foundCount.textContent=progress.found.length+' / 18';targetList.replaceChildren();
      scene.targets.forEach(id=>{const a=artMap.get(id),done=progress.found.includes(id),n=element('div','spy-target'+(done?' is-found':''));n.innerHTML=symbolSvg(a);n.append(element('span','',title(a)),element('span','spy-tick',done?'✓':''));if(done)n.setAttribute('aria-label',title(a)+pick(', found',', encontrado'));targetList.append(n);});
      ringLayer.innerHTML=progress.rings.filter(r=>progress.found.includes(r.id)).map(r=>'<path class="spy-saved-ring" d="M'+r.points.map(p=>p.x+' '+p.y).join('L')+'Z"/>').join('');
      svg.querySelectorAll('[data-object]').forEach(g=>{const found=progress.found.includes(g.dataset.object);g.classList.toggle('is-found',found);g.setAttribute('aria-pressed',String(found));});
      completion.replaceChildren();if(progress.found.length===18){completion.classList.add('is-complete');completion.append(element('strong','',pick('All 18 found. Brilliant looking!','¡Encontraste los 18! ¡Qué buena vista!')),element('span','',pick('1 point for each new object found.','1 punto por cada objeto nuevo encontrado.')),button(pick('Next scene →','Siguiente escena →'),()=>open(randomIndex())),button(pick('Find them again','Buscar otra vez'),()=>{progress={found:[],rings:[]};save();open(current);},'spy-button spy-light'));}else completion.classList.remove('is-complete');
    }
    const start=read('spy:last',null);if(api.preserveSelection&&Number.isInteger(start)&&start>=0&&start<40)open(start);else open(randomIndex());
    return function dispose(){destroyed=true;clearEvents();host.replaceChildren();};
  }
  window.MLL_SPY=Object.freeze({mount,scenes:Object.freeze(scenes),layout,circleHit});
})();

;

/* ===== draw.js ===== */
/* Draw & Discover. Original SVG references, local vector strokes, no recognition service. */
(function () {
  'use strict';
  const SIZE = 128, COLORS = ['#18375b','#2458df','#12a89d','#68a93a','#f3b830','#ed806c','#cb4b89','#8553bd'];
  const PALETTE_EN = ['Ink','Blue','Teal','Green','Yellow','Coral','Pink','Purple'];
  const PALETTE_ES = ['Tinta','Azul','Turquesa','Verde','Amarillo','Coral','Rosa','Morado'];
  const svgText = art => /^\s*<svg\b/.test(art.svg) ? art.svg : '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" fill="none" stroke="#18375b" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">'+art.svg+'</svg>';
  const svgURL = art => 'data:image/svg+xml;charset=utf-8,'+encodeURIComponent(svgText(art));
  function element(tag, cls, text) { const e=document.createElement(tag); if(cls)e.className=cls; if(text!=null)e.textContent=text; return e; }
  function button(text, action, cls) { const b=element('button', cls||'draw-button',text);b.type='button';b.addEventListener('click',action);return b; }
  function loadImage(art) { return new Promise((resolve,reject)=>{const im=new Image();im.onload=()=>resolve(im);im.onerror=()=>reject(new Error('Reference drawing could not load'));im.src=svgURL(art);}); }
  function canvas(width=200) {const c=document.createElement('canvas');c.width=c.height=width;return c;}
  function plot(ctx, strokes, grading=false) {
    ctx.lineCap='round';ctx.lineJoin='round';
    for(const s of strokes) {
      if(!s.points?.length)continue;
      ctx.globalCompositeOperation=s.erase?'destination-out':'source-over';
      ctx.strokeStyle=grading?'#000':s.color;ctx.fillStyle=ctx.strokeStyle;ctx.lineWidth=grading?(s.erase?12:2):s.width;
      if(s.points.length===1){ctx.beginPath();ctx.arc(s.points[0][0],s.points[0][1],ctx.lineWidth/2,0,Math.PI*2);ctx.fill();continue;}
      ctx.beginPath();ctx.moveTo(s.points[0][0],s.points[0][1]);for(let i=1;i<s.points.length;i++)ctx.lineTo(s.points[i][0],s.points[i][1]);ctx.stroke();
    }
    ctx.globalCompositeOperation='source-over';
  }
  function inkData(c) {
    const d=c.getContext('2d').getImageData(0,0,c.width,c.height).data;
    let left=c.width,top=c.height,right=-1,bottom=-1,count=0;
    for(let y=0;y<c.height;y++)for(let x=0;x<c.width;x++)if(d[(y*c.width+x)*4+3]>90){left=Math.min(left,x);right=Math.max(right,x);top=Math.min(top,y);bottom=Math.max(bottom,y);count++;}
    return {left,top,right,bottom,count,width:right-left+1,height:bottom-top+1};
  }
  function normalizedMask(source) {
    const b=inkData(source),out=canvas(SIZE),ctx=out.getContext('2d');
    if(!b.count)return{bits:new Uint8Array(SIZE*SIZE),count:0,aspect:1};
    const scale=(SIZE-20)/Math.max(b.width,b.height),w=b.width*scale,h=b.height*scale;
    ctx.drawImage(source,b.left,b.top,b.width,b.height,(SIZE-w)/2,(SIZE-h)/2,w,h);
    const d=ctx.getImageData(0,0,SIZE,SIZE).data,bits=new Uint8Array(SIZE*SIZE);let count=0;
    for(let i=0;i<bits.length;i++){bits[i]=d[i*4+3]>60?1:0;count+=bits[i];}
    return {bits,count,aspect:b.width/Math.max(1,b.height)};
  }
  function dilate(bits,radius) {
    const out=new Uint8Array(bits.length),offsets=[];
    for(let y=-radius;y<=radius;y++)for(let x=-radius;x<=radius;x++)if(x*x+y*y<=radius*radius)offsets.push([x,y]);
    for(let i=0;i<bits.length;i++)if(bits[i]){const x=i%SIZE,y=Math.floor(i/SIZE);for(const[dx,dy]of offsets){const xx=x+dx,yy=y+dy;if(xx>=0&&xx<SIZE&&yy>=0&&yy<SIZE)out[yy*SIZE+xx]=1;}}
    return out;
  }
  /** Forgiving outline comparison; positioning and color are deliberately not graded. */
  async function evaluate(art, strokes) {
    const sketch=canvas(),ctx=sketch.getContext('2d');plot(ctx,strokes,true);const raw=inkData(sketch);
    if(raw.count<55||Math.max(raw.width,raw.height)<24)return{ok:false,reason:'small',precision:0,recall:0,score:0};
    const target=canvas();target.getContext('2d').drawImage(await loadImage(art),0,0,200,200);
    const a=normalizedMask(sketch),b=normalizedMask(target);
    if(!b.count)return{ok:false,reason:'reference',precision:0,recall:0,score:0};
    const aroundTarget=dilate(b.bits,6),aroundSketch=dilate(a.bits,7);
    let closeSketch=0,closeTarget=0;
    for(let i=0;i<a.bits.length;i++){if(a.bits[i]&&aroundTarget[i])closeSketch++;if(b.bits[i]&&aroundSketch[i])closeTarget++;}
    const precision=closeSketch/a.count,recall=closeTarget/b.count,score=2*precision*recall/(precision+recall||1);
    const ratio=a.count/b.count,aspect=Math.abs(Math.log(a.aspect/b.aspect));
    let length=0;for(const s of strokes)if(!s.erase)for(let i=1;i<s.points.length;i++)length+=Math.hypot(s.points[i][0]-s.points[i-1][0],s.points[i][1]-s.points[i-1][1]);
    // Dense scribbles cannot succeed simply by covering every reference line.
    const tooDense=ratio>2.4 || length/Math.max(1,raw.count)>1.8;
    const ok=precision>=.63&&recall>=.57&&score>=.66&&aspect<.6&&!tooDense;
    return {ok,precision,recall,score,reason:tooDense?'busy':aspect>=.6?'shape':recall<.57?'outline':'practice'};
  }
  function mount(host, api) {
    const art=Array.isArray(api.art)?api.art:[],es=api.lang==='es',pick=(en,spanish)=>es?spanish:en;
    if(!art.length){host.textContent=pick('The drawing collection is loading. Please try again.','Los dibujos se están cargando. Inténtalo de nuevo.');return()=>{};}
    const stored=api.get('draw-session-v1',{})||{},knownColors=COLORS.includes(stored.color);
    function randomIndex(){const ids=art.map(a=>a.id),id=api.nextRandom?.('draw',ids)??ids[Math.floor(Math.random()*ids.length)];return Math.max(0,art.findIndex(a=>a.id===id));}
    let index=api.preserveSelection?Math.max(0,art.findIndex(p=>p.id===stored.id)):randomIndex(),color=knownColors?stored.color:COLORS[0],width=[2,4,7].includes(stored.width)?stored.width:4;
    let guide=!!stored.guide,erase=false,strokes=[],current=null,history=[],disposed=false,grading=false,loadToken=0,referenceImage=null;
    let drafts=stored.drafts&&typeof stored.drafts==='object'&&!Array.isArray(stored.drafts)?{...stored.drafts}:{};
    if(art.some(a=>a.id===stored.id)&&Array.isArray(stored.strokes))drafts[stored.id]=validStrokes(stored.strokes);
    strokes=validStrokes(drafts[art[index].id]||[]);
    let activePointer=null,dirty=false,saveTimer=null,lastResult=null;
    const inkLayer=canvas();
    const shell=element('section','draw-studio'),back=element('a','draw-back',pick('← Back to the lab','← Volver al laboratorio'));back.href='#home';
    const heading=element('header','draw-heading'),eyebrow=element('p','draw-eyebrow',pick('200 LITTLE MASTERPIECES','200 PEQUEÑAS OBRAS DE ARTE'));
    heading.append(eyebrow,element('h1','',pick('Draw & discover.','Dibuja y descubre.')),element('p','draw-intro',pick('Look at the picture. Pick a color. Make it your own.','Mira el dibujo. Elige un color. ¡Haz tu propia versión!')));
    const toolbar=element('div','draw-navigation'),prev=button(pick('← Previous','← Anterior'),()=>choose(index-1),'draw-button draw-light'),next=button(pick('Next →','Siguiente →'),()=>choose(randomIndex()),'draw-button draw-light');
    const numbered=element('div','draw-number'),title=element('h2',''),number=element('span','draw-eyebrow');numbered.append(number,title);
    toolbar.append(prev,numbered,next);
    const layout=element('div','draw-layout'),reference=element('section','draw-reference'),referenceTop=element('div','draw-panel-label',pick('YOUR INSPIRATION','TU INSPIRACIÓN'));
    const referenceArt=element('div','draw-reference-art'),tip=element('p','draw-tip');reference.append(referenceTop,referenceArt,tip);
    const work=element('section','draw-work'),drawLabel=element('div','draw-panel-label',pick('YOUR DRAWING','TU DIBUJO')),stage=element('div','draw-canvas-stage'),drawing=canvas();
    drawing.className='draw-canvas';drawing.setAttribute('aria-label',pick('Drawing canvas. Use a finger, Apple Pencil, or mouse.','Lienzo para dibujar con el dedo, Apple Pencil o mouse.'));drawing.setAttribute('role','img');
    const placeholder=element('div','draw-placeholder',pick('Draw here with your finger','Dibuja aquí con tu dedo'));placeholder.setAttribute('aria-hidden','true');stage.append(drawing,placeholder);
    const palette=element('div','draw-palette');palette.setAttribute('role','group');palette.setAttribute('aria-label',pick('Choose a color','Elige un color'));
    const paletteButtons=COLORS.map((value,i)=>{const b=button('',()=>{color=value;erase=false;updateTools();scheduleSave();},'draw-swatch');b.style.setProperty('--swatch',value);b.setAttribute('aria-label',(es?PALETTE_ES:PALETTE_EN)[i]);b.title=(es?PALETTE_ES:PALETTE_EN)[i];palette.append(b);return b;});
    const tools=element('div','draw-tools'),brushes=element('div','draw-brushes');brushes.setAttribute('role','group');brushes.setAttribute('aria-label',pick('Brush size','Grosor del pincel'));
    const brushButtons=[2,4,7].map((value,i)=>{const b=button('',()=>{width=value;erase=false;updateTools();scheduleSave();},'draw-tool draw-brush');const dot=element('span');dot.style.width=dot.style.height=[5,10,16][i]+'px';b.append(dot);b.setAttribute('aria-label',(es?['Fino','Mediano','Grueso']:['Thin','Medium','Thick'])[i]);brushes.append(b);return b;});
    const eraser=button(pick('Eraser','Borrador'),()=>{erase=!erase;updateTools();},'draw-tool');
    const undo=button(pick('↶ Undo','↶ Deshacer'),()=>{if(history.length||strokes.length){strokes=history.length?history.pop():strokes.slice(0,-1);paint();updateTools();scheduleSave();setFeedback(pick('One step back. Keep creating!','Un paso atrás. ¡Sigue creando!'));}},'draw-tool');
    const clear=button(pick('Clear','Borrar todo'),()=>{if(!strokes.length)return;remember();strokes=[];paint();updateTools();scheduleSave();setFeedback(pick('A fresh page. Undo brings your drawing back.','Un lienzo nuevo. Deshacer recupera tu dibujo.'));},'draw-tool');
    tools.append(brushes,eraser,undo,clear);
    const guideLabel=element('label','draw-guide-toggle'),guideCheck=element('input');guideCheck.type='checkbox';guideCheck.checked=guide;guideCheck.addEventListener('change',()=>{guide=guideCheck.checked;paint();scheduleSave();});guideLabel.append(guideCheck,document.createTextNode(pick('Show a tracing guide','Mostrar una guía para calcar')));
    const check=button(pick('Check my drawing ✦','Revisar mi dibujo ✦'),checkDrawing,'draw-button draw-check');
    const feedback=element('p','draw-feedback');feedback.setAttribute('role','status');feedback.setAttribute('aria-live','polite');
    const completion=element('p','draw-completed'),checkRow=element('div','draw-check-row');checkRow.append(guideLabel,check);
    work.append(drawLabel,stage,palette,tools,checkRow,feedback,completion);layout.append(reference,work);
    const bottom=element('div','draw-bottom'),newOne=button(pick('Find my next drawing →','Buscar mi siguiente dibujo →'),()=>choose(randomIndex()),'draw-button draw-light');
    const progress=element('p','draw-progress');bottom.append(progress,newOne);
    const catalog=element('details','draw-catalog'),summary=element('summary','',pick('Choose any of the 200 drawings','Elige entre los 200 dibujos'));
    const find=element('input','draw-search');find.type='search';find.placeholder=pick('Find a duck, dog, rocket…','Busca un pato, perro, cohete…');find.setAttribute('aria-label',pick('Find a drawing','Buscar un dibujo'));
    const catalogFilters=element('div','draw-catalog-filters'),allFilter=element('select');allFilter.setAttribute('aria-label',pick('Show drawings','Mostrar dibujos'));
    for(const[value,en,spanish]of[['all','All drawings','Todos los dibujos'],['new','Not completed yet','Sin completar'],['done','Points collected','Puntos ganados']]){const option=element('option','',pick(en,spanish));option.value=value;allFilter.append(option);}
    catalogFilters.append(find,allFilter);const catalogGrid=element('div','draw-catalog-grid'),catalogCount=element('p','draw-catalog-count');catalogCount.setAttribute('role','status');catalog.append(summary,catalogFilters,catalogCount,catalogGrid);
    const note=element('p','draw-note',pick('Try the big outline first, then add details. We compare the lines gently; colors and perfect tracing do not matter. Each completed drawing earns 1 point, once.','Empieza con la silueta y añade detalles. Comparamos las líneas con flexibilidad: los colores y la perfección no importan. Cada dibujo completado da 1 punto, una sola vez.'));
    shell.append(back,heading,toolbar,layout,bottom,catalog,note);host.append(shell);
    let catalogBuilt=false;catalog.addEventListener('toggle',()=>{if(catalog.open&&!catalogBuilt){catalogBuilt=true;renderCatalog();}});find.addEventListener('input',renderCatalog);allFilter.addEventListener('change',renderCatalog);
    function validStrokes(list){return list.slice(-350).filter(s=>s&&Array.isArray(s.points)).map(s=>({color:COLORS.includes(s.color)?s.color:COLORS[0],width:[2,4,7,12].includes(s.width)?s.width:4,erase:!!s.erase,points:s.points.slice(0,3500).filter(p=>Array.isArray(p)&&p.length===2&&p.every(Number.isFinite)).map(p=>p.map(v=>Math.max(0,Math.min(200,v))))}));}
    function remember(){history.push(strokes.slice());if(history.length>35)history.shift();}
    function scheduleSave(){dirty=true;clearTimeout(saveTimer);saveTimer=setTimeout(save,160);}
    function save(){clearTimeout(saveTimer);if(disposed&&!dirty)return;dirty=false;const keys=Object.keys(drafts);let count=keys.reduce((sum,key)=>sum+(drafts[key]||[]).reduce((n,s)=>n+(s.points?.length||0),0),0);for(const key of keys){if(count<=32000)break;count-=(drafts[key]||[]).reduce((n,s)=>n+(s.points?.length||0),0);delete drafts[key];}api.set('draw-session-v1',{id:art[index].id,color,width,guide,strokes,drafts});}
    function setFeedback(text,success=false){feedback.textContent=text;feedback.classList.toggle('positive',success);}
    function updateTools(){paletteButtons.forEach((b,i)=>b.setAttribute('aria-pressed',String(!erase&&color===COLORS[i])));brushButtons.forEach((b,i)=>b.setAttribute('aria-pressed',String(!erase&&width===[2,4,7][i])));eraser.setAttribute('aria-pressed',String(erase));undo.disabled=!history.length&&!strokes.length;clear.disabled=!strokes.length;drawing.classList.toggle('erasing',erase);}
    function updateProgress(){const completed=art.filter(p=>api.completed('draw:'+p.id)).length;progress.textContent=pick(completed+' / '+art.length+' drawing points collected',completed+' / '+art.length+' puntos de dibujo ganados');completion.textContent=api.completed('draw:'+art[index].id)?pick('✓ Point collected! You can keep practicing.','✓ ¡Punto ganado! Puedes seguir practicando.'):pick('Finish this drawing to collect 1 point.','Completa este dibujo para ganar 1 punto.');}
    function renderCatalog(){catalogGrid.replaceChildren();const fold=s=>s.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();const term=fold(find.value.trim());let count=0;
      art.forEach((a,i)=>{const completed=api.completed('draw:'+a.id);if(term&&!fold(a.en+' '+a.es).includes(term))return;if(allFilter.value==='done'&&!completed||allFilter.value==='new'&&completed)return;count++;const b=button('',()=>{choose(i);catalog.open=false;toolbar.scrollIntoView({behavior:'auto',block:'start'});},'draw-catalog-card');const im=element('img');im.alt='';im.src=svgURL(a);im.loading='lazy';const label=element('span','',String(i+1).padStart(3,'0')+' · '+(es?a.es:a.en));b.append(im,label);if(completed)b.append(element('span','draw-catalog-done','✓'));b.setAttribute('aria-label',label.textContent+(completed?pick(', point collected',', punto ganado'):''));catalogGrid.append(b);});catalogCount.textContent=pick(count+' drawings',count+' dibujos');if(!count)catalogGrid.append(element('p','',pick('Try another word.','Prueba otra palabra.')));}
    function choose(i){if(grading||current)return;drafts[art[index].id]=strokes;const keys=Object.keys(drafts);if(keys.length>16)delete drafts[keys[0]];index=(i+art.length)%art.length;strokes=validStrokes(drafts[art[index].id]||[]);history=[];lastResult=null;load();save();}
    function load(){const a=art[index],token=++loadToken;number.textContent=pick('DRAWING ','DIBUJO ')+String(index+1).padStart(3,'0')+' / '+art.length;title.textContent=es?a.es:a.en;referenceArt.innerHTML=svgText(a);referenceArt.querySelector('svg')?.setAttribute('aria-hidden','true');tip.textContent=es?a.tipEs:a.tipEn;referenceImage=null;setFeedback(pick('Start with one big shape. Your version can be different!','Empieza con una forma grande. ¡Tu versión puede ser diferente!'));updateTools();updateProgress();paint();loadImage(a).then(im=>{if(disposed||token!==loadToken)return;referenceImage=im;paint();}).catch(()=>{if(!disposed&&token===loadToken)setFeedback(pick('The reference did not load. Choose another drawing.','La referencia no cargó. Elige otro dibujo.'));});if(catalogBuilt)renderCatalog();}
    function paint(){if(disposed)return;const rect=stage.getBoundingClientRect(),dimension=Math.max(200,Math.round(rect.width||400)),dpr=Math.min(2,window.devicePixelRatio||1),pixels=Math.round(dimension*dpr);if(drawing.width!==pixels){drawing.width=pixels;drawing.height=pixels;}const ctx=drawing.getContext('2d');ctx.setTransform(1,0,0,1,0,0);ctx.clearRect(0,0,drawing.width,drawing.height);ctx.setTransform(drawing.width/200,0,0,drawing.height/200,0,0);if(guide&&referenceImage){ctx.globalAlpha=.15;ctx.drawImage(referenceImage,0,0,200,200);ctx.globalAlpha=1;}
      // Erasing is isolated from the tracing layer, so a guide never becomes part of the child's drawing.
      const layer=inkLayer;if(layer.width!==drawing.width){layer.width=layer.height=drawing.width;}const lc=layer.getContext('2d');lc.setTransform(1,0,0,1,0,0);lc.clearRect(0,0,layer.width,layer.height);lc.setTransform(layer.width/200,0,0,layer.height/200,0,0);plot(lc,current?[...strokes,current]:strokes);ctx.drawImage(layer,0,0,200,200);placeholder.hidden=!!strokes.length||!!current||guide;}
    function point(event){const r=drawing.getBoundingClientRect();return[Math.round(Math.max(0,Math.min(200,(event.clientX-r.left)/r.width*200))*10)/10,Math.round(Math.max(0,Math.min(200,(event.clientY-r.top)/r.height*200))*10)/10];}
    function pointerDown(event){if(disposed||grading||activePointer!==null||event.button>0)return;event.preventDefault();activePointer=event.pointerId;remember();current={color,width:erase?12:width,erase,points:[point(event)]};try{drawing.setPointerCapture(event.pointerId);}catch(e){}setFeedback(pick('Keep going. Look for the big shapes!','Sigue. ¡Busca las formas grandes!'));paint();}
    function pointerMove(event){if(event.pointerId!==activePointer||!current)return;event.preventDefault();const samples=event.getCoalescedEvents?.();for(const e of samples?.length?samples:[event]){const p=point(e),last=current.points[current.points.length-1];if(Math.hypot(p[0]-last[0],p[1]-last[1])>.45&&current.points.length<3500)current.points.push(p);}paint();}
    function pointerUp(event){if(event.pointerId!==activePointer||!current)return;event.preventDefault();if(event.type!=='pointercancel')current.points.push(point(event));strokes.push(current);if(strokes.length>350)strokes.shift();current=null;activePointer=null;try{drawing.releasePointerCapture(event.pointerId);}catch(e){}paint();updateTools();scheduleSave();}
    drawing.addEventListener('pointerdown',pointerDown);drawing.addEventListener('pointermove',pointerMove);drawing.addEventListener('pointerup',pointerUp);drawing.addEventListener('pointercancel',pointerUp);drawing.addEventListener('contextmenu',e=>e.preventDefault());
    async function checkDrawing(){if(grading||disposed||current)return;grading=true;check.disabled=true;const selected=art[index],token=loadToken;check.textContent=pick('Looking at your lines…','Revisando tus líneas…');try{const result=await evaluate(selected,strokes);if(disposed||token!==loadToken)return;lastResult=result;
        if(result.ok){const earned=api.complete('draw:'+selected.id);setFeedback(earned?pick('You matched the big shapes! +1 point.','¡Lograste las formas principales! +1 punto.'):pick('Great drawing! You already collected this point.','¡Buen dibujo! Ya ganaste este punto.'),true);updateProgress();if(catalogBuilt)renderCatalog();}
        else if(result.reason==='small')setFeedback(pick('Try a bigger drawing. Start with the main outline, then add details.','Prueba un dibujo más grande. Empieza con la silueta y añade detalles.'));
        else if(result.reason==='busy')setFeedback(pick('Try fewer lines. The tracing guide can help you find the outline.','Prueba con menos líneas. La guía te ayuda a seguir la silueta.'));
        else setFeedback(pick('You’re practicing! Try matching the big outline. The tracing guide can help.','¡Estás practicando! Intenta seguir la silueta. La guía puede ayudarte.'));
      }catch(error){if(!disposed)setFeedback(pick('We could not check this time. Your drawing is safe—try again.','No pudimos revisar esta vez. Tu dibujo está guardado; vuelve a intentarlo.'));}
      finally{grading=false;if(!disposed){check.disabled=false;check.textContent=pick('Check my drawing ✦','Revisar mi dibujo ✦');save();}}}
    const resize=()=>paint(),observer=typeof ResizeObserver==='function'?new ResizeObserver(resize):null;if(observer)observer.observe(stage);else window.addEventListener('resize',resize);
    load();save();
    function dispose(){if(disposed)return;if(current){strokes.push(current);current=null;}dirty=true;save();disposed=true;++loadToken;clearTimeout(saveTimer);observer?.disconnect();window.removeEventListener('resize',resize);}
    dispose.saveState=save;dispose.getResult=()=>lastResult;return dispose;
  }
  window.MLL_DRAW={mount,evaluate};
})();

;

/* ===== home-thumbs.js ===== */
/* Original SVG previews for the Learning Lab. No remote files or fonts. */
(function(){
  'use strict';
  const ink='#193048',blue='#265bcd',yellow='#ffd761',coral='#ee8464',paper='#fffdf6';
  const svg=body=>'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 230" fill="none">'+
    '<rect width="480" height="230" fill="'+paper+'"/>'+body+'</svg>';
  const text=(x,y,value,size=24,color=ink,weight=750,extra='')=>'<text x="'+x+'" y="'+y+'" fill="'+color+'" font-family="Arial,Helvetica,sans-serif" font-size="'+size+'" font-weight="'+weight+'" '+extra+'>'+value+'</text>';
  function pencil(x,y,color,angle=0){return '<g transform="translate('+x+' '+y+') rotate('+angle+')"><rect x="-7" y="-62" width="14" height="113" rx="2" fill="'+color+'"/><path d="M-7 51H7L0 70Z" fill="#eac797"/><path d="M-2 64H2L0 70Z" fill="'+ink+'"/><rect x="-7" y="-70" width="14" height="12" rx="3" fill="'+coral+'"/><path d="M-7-54H7" stroke="'+ink+'" stroke-width="2" opacity=".35"/><path d="M-3-50V44" stroke="#fff" stroke-width="2" opacity=".65"/></g>';}
  function wordsearch(es=false){
    const rows=es?['MRSOLAU','QPLAYAT','NCZEOIM','BULANAP','HROCASE','DVFUZRW']:['MRSUNAU','QBEACHT','NCZEOIM','BULONAP','HROCKSE','DVFUZRW'];
    let body='<rect x="90" y="16" width="282" height="200" rx="12" fill="#fff" stroke="#e3e7ee"/>'+
      '<rect x="144" y="56" width="171" height="27" rx="13.5" fill="#dce9ff"/>'+
      '<path d="M157 57C202 53 272 55 304 57C318 59 320 77 305 81C263 86 190 84 156 82C140 80 140 61 157 57Z" stroke="'+blue+'" stroke-width="2.6"/>';
    rows.forEach((row,r)=>[...row].forEach((letter,c)=>{body+=text(119+c*34,44+r*29,letter,19,r===1&&c>=1&&c<=5?blue:ink,700,'text-anchor="middle"');}));
    body+=pencil(410,115,yellow,11)+'<path d="M35 70l8 8 16-20M34 107h24M34 137h24" stroke="'+blue+'" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>';
    return svg(body);
  }
  const objects=[
    '<path d="M-21 10Q-31 0-24-13Q-17-27-5-17Q3-12-4-3L5 7Q23 0 29 10Q16 31-10 23Q-26 22-29 12Z M-24-12L-36-8L-24-4 M-2 13Q7 23 17 13"/><circle cx="-15" cy="-13" r="2" fill="currentColor" stroke="none"/>',
    '<path d="M-27 0Q-3-26 23 0Q-3 26-27 0ZM23 0L36-15V15Z M-7-9L0-17L8-10"/><circle cx="-15" cy="-2" r="2" fill="currentColor" stroke="none"/>',
    '<path d="M-25-5L-25-25L-9-17Q0-21 9-17L25-25V-5Q27 24 0 25Q-27 24-25-5Z M-5 11L0 15L5 11 M-14 16L-33 13 M14 16L33 13"/><circle cx="-12" cy="1" r="2" fill="currentColor" stroke="none"/><circle cx="12" cy="1" r="2" fill="currentColor" stroke="none"/>',
    '<path d="M-25 20H18Q32 20 28 6L23-3 M16-3L13-12 M-10 18Q-35 11-26-12Q-16-30 5-18Q24-6 10 12Q-1 26-11 12Q-17 3-7-5Q2-10 7-1"/><circle cx="23" cy="-5" r="2"/><circle cx="12" cy="-14" r="2"/>',
    '<path d="M0-32Q22-15 15 15H-15Q-22-15 0-32ZM-16 0L-29 20L-15 15 M16 0L29 20L15 15 M-8 21L0 33L8 21"/><circle cx="0" cy="-10" r="7"/>',
    '<path d="M-31 4L-20-12H16L29 4V20H-31Z M-14-11L-18 4H20L12-11 M-27 10H-21 M22 10H27"/><circle cx="-18" cy="20" r="6" fill="'+paper+'"/><circle cx="18" cy="20" r="6" fill="'+paper+'"/>',
    '<path d="M0-30L9-10L30-7L15 8L19 30L0 19L-19 30L-15 8L-30-7L-9-10Z"/>',
    '<path d="M-28-22Q-10-28 0-15Q10-28 28-22V23Q10 17 0 28Q-10 17-28 23ZM0-15V28 M-22-9L-8-7 M-22 2L-8 4 M8-7L22-9 M8 4L22 2"/>',
    '<path d="M-22 22Q-35-14 22-27Q32 14-22 22ZM-30 32L17-19 M-13 14L-15-4 M-1 3L14 6"/>',
    '<path d="M-18 6Q0-14 18 6Q30 27 12 29Q0 20-12 29Q-30 27-18 6Z"/><ellipse cx="-25" cy="-8" rx="7" ry="10"/><ellipse cx="-9" cy="-22" rx="7" ry="10"/><ellipse cx="10" cy="-22" rx="7" ry="10"/><ellipse cx="25" cy="-8" rx="7" ry="10"/>',
    '<path d="M-33 20Q-30 3 0 3Q30 3 33 20Q0 34-33 20ZM-22 5L-15-24L0-18L15-24L22 5 M-18-2Q0 5 18-2"/>',
    '<ellipse cx="0" cy="4" rx="25" ry="15"/><path d="M-8-10V18 M5-10V18 M18-5V13 M-8-8Q-34-34-11-31Q0-28 1-12Q8-32 20-26Q36-12 12-8 M-25 3L-33 0"/><circle cx="-16" cy="1" r="2" fill="currentColor" stroke="none"/>',
    '<path d="M0-15Q-25-34-28-4Q-30 24-10 31L0 27L10 31Q30 24 28-4Q25-34 0-15ZM0-17Q-4-28 4-35 M3-23Q7-38 24-29Q20-16 3-23"/>',
    '<path d="M0-31L28 0L0 27L-28 0ZM0-31V27 M-28 0H28 M0 27Q21 32 7 44"/>',
    '<path d="M0 28Q-47-3-24-24Q-10-35 0-17Q10-35 24-24Q47-3 0 28Z"/>',
    '<path d="M0-5Q-41-45-35-3Q-27 9-4 8Q-34 1-22 26Q-7 36 0 9Q7 36 22 26Q34 1 4 8Q27 9 35-3Q41-45 0-5ZM0-7V21 M0-7L-7-21 M0-7L7-21"/>',
    '<rect x="-30" y="-10" width="60" height="30" rx="15"/><path d="M-4-10V-23H7V-17 M30 1L39-5V15L30 9 M-29 20Q-35 22-40 20"/><circle cx="-14" cy="5" r="6"/><circle cx="5" cy="5" r="6"/>',
    '<circle cx="-15" cy="-6" r="16"/><path d="M-3 5L23 31L31 23L24 16L19 21L11 13L17 7L9-1"/><circle cx="-18" cy="-9" r="4"/>'
  ];
  function spy(){
    let body='<g fill="none" stroke="'+ink+'" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" color="'+ink+'">';
    for(let i=0;i<24;i++){const x=40+(i%6)*80,y=39+Math.floor(i/6)*51;body+='<g transform="translate('+x+' '+y+') rotate('+[-13,8,-5,14,0,-9][i%6]+') scale(.60)">'+objects[(i*7)%objects.length]+'</g>';}
    body+='</g><path d="M345 76C361 53 401 58 413 80C425 110 380 130 353 110C339 101 339 84 345 76Z" stroke="'+blue+'" stroke-width="3" stroke-linecap="round"/><path d="M421 47L429 34M434 60L449 56" stroke="'+blue+'" stroke-width="2.4" stroke-linecap="round"/>';
    return svg(body);
  }
  const hangman=svg('<path d="M48 194H190M73 194V35H166V59M74 62L103 35" stroke="'+blue+'" stroke-width="3.6" stroke-linecap="round" stroke-linejoin="round"/>'+
    '<g stroke="'+ink+'" stroke-width="3.2" stroke-linecap="round"><circle cx="166" cy="79" r="20"/><path d="M166 99V148M166 111L144 131M166 111L188 131M166 148L149 177M166 148L183 177"/></g>'+
    '<circle cx="239" cy="39" r="5" fill="'+yellow+'"/><path d="M368 185l9-11 10 11" stroke="'+coral+'" stroke-width="3" stroke-linecap="round"/>'+
    ['P','','N','D','A'].map((c,i)=>'<path d="M'+(236+i*40)+' 145h29" stroke="'+blue+'" stroke-width="3" stroke-linecap="round"/>'+text(250+i*40,133,c,28,ink,800,'text-anchor="middle"')).join('')+
    text(320,85,'?',34,blue,750,'text-anchor="middle"')+'<path d="M269 178h102" stroke="#d5dde8" stroke-width="3" stroke-linecap="round"/>');
  const math=svg('<path d="M22 38H458M22 79H458M22 120H458M22 161H458M22 202H458" stroke="#e9edf2" stroke-width="1.2"/>'+
    '<g transform="rotate(-7 94 105)"><rect x="49" y="48" width="89" height="115" rx="15" fill="'+blue+'"/>'+text(94,133,'7',79,'#fff',850,'text-anchor="middle"')+'</g>'+
    text(163,131,'+',49,ink,500,'text-anchor="middle"')+
    '<g transform="rotate(5 232 105)"><rect x="188" y="48" width="89" height="115" rx="15" fill="'+yellow+'"/>'+text(232,133,'5',79,'#60400f',850,'text-anchor="middle"')+'</g>'+
    text(302,131,'=',45,ink,500,'text-anchor="middle"')+
    '<g transform="rotate(-4 384 105)"><rect x="337" y="48" width="105" height="115" rx="15" fill="#f9dfd5"/>'+text(389,128,'12',61,'#963e2c',850,'text-anchor="middle"')+'</g>'+
    Array.from({length:12},(_,i)=>'<circle cx="'+(140+i*18)+'" cy="193" r="5" fill="'+(i<7?blue:yellow)+'"/>').join(''));
  const duckPath='M64 97C42 88 42 56 64 51C86 46 96 63 87 83L103 105Q137 95 166 110C157 151 110 168 68 147Q39 132 34 111Z';
  const draw=svg('<rect x="24" y="19" width="324" height="191" rx="10" fill="#fff" stroke="#e0e6ee"/>'+
    '<defs><clipPath id="mll-home-duck-fill"><rect x="0" y="0" width="108" height="200"/></clipPath></defs>'+
    '<g transform="translate(53 2) scale(1.28)"><path d="'+duckPath+'" fill="'+yellow+'" clip-path="url(#mll-home-duck-fill)"/><path d="M48 64L23 73L49 79" fill="'+coral+'"/>'+
    '<g stroke="'+ink+'" stroke-width="3.2" stroke-linejoin="round" stroke-linecap="round"><path d="'+duckPath+' M48 64L23 73L49 79 M84 115Q107 145 137 119"/><circle cx="68" cy="64" r="2.7" fill="'+ink+'" stroke="none"/></g></g>'+
    '<path d="M80 191Q109 185 133 191M246 191h52" stroke="#b9d9e7" stroke-width="3" stroke-linecap="round"/>'+
    pencil(380,118,blue,-7)+pencil(415,124,yellow,5)+pencil(447,131,coral,16));
  const quiz=svg('<circle cx="114" cy="106" r="70" fill="#e2ebfb"/>'+text(114,140,'?',108,blue,850,'text-anchor="middle"')+
    '<path d="M44 29l5-13 5 13 13 5-13 5-5 13-5-13-13-5Z" fill="'+yellow+'"/>'+
    ['A','B','C'].map((c,i)=>'<g transform="translate(227 '+(38+i*56)+')"><rect width="205" height="44" rx="11" fill="'+(i===1?'#fff0b9':'#fff')+'" stroke="'+(i===1?'#dba53d':'#d4deeb')+'" stroke-width="1.8"/><circle cx="25" cy="22" r="12" fill="'+(i===1?yellow:'#edf2f9')+'"/>'+text(25,27,c,15,ink,800,'text-anchor="middle"')+'<path d="M52 21h'+[113,100,124][i]+'" stroke="'+(i===1?'#b98926':'#b3c2d7')+'" stroke-width="4" stroke-linecap="round"/>'+(i===1?'<path d="M176 22l5 5 9-12" stroke="'+blue+'" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>':'')+'</g>').join(''));
  const spelling=svg(['A','B','C'].map((letter,i)=>'<g transform="translate('+(42+i*104)+' 54) rotate('+[-6,3,-3][i]+' 43 54)"><rect width="84" height="111" rx="15" fill="'+[blue,yellow,'#f5dacd'][i]+'"/>'+text(42,80,letter,67,i===0?'#fff':ink,850,'text-anchor="middle"')+'<path d="M15 96h54" stroke="'+(i===0?'#9ec1ff':'#c1a57a')+'" stroke-width="2" opacity=".65"/></g>').join('')+
    '<g transform="translate(405 113) rotate(12)"><ellipse cx="-15" cy="-22" rx="15" ry="21" transform="rotate(-28 -15 -22)" fill="#e4effa" stroke="'+ink+'" stroke-width="2"/><ellipse cx="14" cy="-24" rx="15" ry="21" transform="rotate(28 14 -24)" fill="#e4effa" stroke="'+ink+'" stroke-width="2"/><ellipse cx="0" cy="5" rx="30" ry="21" fill="'+yellow+'" stroke="'+ink+'" stroke-width="2.5"/><path d="M-3-15V25M12-12V23" stroke="'+ink+'" stroke-width="8"/><circle cx="-18" cy="1" r="3" fill="'+ink+'"/><path d="M29 5l8 3-8 3M-23-10l-8-9" stroke="'+ink+'" stroke-width="2.5" stroke-linecap="round"/></g>'+
    '<path d="M342 165Q376 204 435 174" stroke="'+blue+'" stroke-width="2.5" stroke-dasharray="4 6" stroke-linecap="round"/>');
  window.MLL_HOME_THUMBS=Object.freeze({wordsearch:wordsearch(),wordsearchEs:wordsearch(true),spy:spy(),hangman,math,draw,quiz,spelling});
})();

;


;
/* Original vector ballpark artwork for the earned-play card and entry page. */
window.MLL_BASEBALL_THUMB=`<svg viewBox="0 0 900 590" xmlns="http://www.w3.org/2000/svg" role="presentation"><defs><linearGradient id="bp-sky" x2="0" y2="1"><stop stop-color="#69d0e7"/><stop offset="1" stop-color="#f6dca5"/></linearGradient><linearGradient id="bp-turf" x2="0" y2="1"><stop stop-color="#318660"/><stop offset="1" stop-color="#194e46"/></linearGradient></defs><path fill="url(#bp-sky)" d="M0 0h900v590H0z"/><circle cx="744" cy="91" r="53" fill="#ffe9b1"/><path d="M0 132q180-47 313 2t276-1 311 2v114H0" fill="#578999" opacity=".6"/><path d="M0 188Q450 17 900 188v140H0" fill="#10394b"/><path d="M0 201Q450 32 900 201M0 224Q450 55 900 224M0 247Q450 78 900 247" fill="none" stroke="#dcb884" stroke-width="10" stroke-dasharray="5 14"/><path d="M0 272Q450 89 900 272v318H0" fill="url(#bp-turf)"/><path d="M79 333L310 197M216 406L409 200M383 481L513 216M560 527L620 246M737 560L744 278" stroke="#8bc389" stroke-opacity=".16" stroke-width="73"/><path d="M145 263Q450 167 755 263L450 567Z" fill="#76a778"/><path d="M450 239L685 378 450 555 215 378Z" fill="#dcb886"/><path d="M450 290L608 384 450 503 292 384Z" fill="#37865f"/><path d="M64 224L450 545 836 224" fill="none" stroke="#fff6d7" stroke-width="4"/><path d="M450 245L675 381 450 544 225 381Z" fill="none" stroke="#fff6d7" stroke-width="3"/><ellipse cx="450" cy="394" rx="39" ry="23" fill="#dcb886"/><path d="M437 540h26v13l-13 10-13-10Z" fill="#fff"/><path d="M439 239h22v14h-22zM664 374h23v16h-23zM214 374h23v16h-23z" fill="#fff7e1"/><rect x="435" y="391" width="30" height="6" rx="2" fill="#fff7e1"/><g fill="#12364b" stroke="#ffe5b2" stroke-width="3"><rect x="330" y="77" width="240" height="99" rx="9"/></g><g fill="#fff1cf"><path d="M360 103h43v8h-43zm0 23h180v5H360zm0 14h29v17h-29zm51 0h29v17h-29zm51 0h29v17h-29zm51 0h29v17h-29z"/><path d="M484 105l9-8 9 8-3 13h-12Z" fill="#ffd36a"/></g><g stroke="#173f50" stroke-width="8"><path d="M88 225V41m724 184V41"/></g><g fill="#fff1cf"><rect x="49" y="31" width="79" height="22" rx="3"/><rect x="773" y="31" width="79" height="22" rx="3"/></g><g transform="translate(450 367)"><ellipse cy="34" rx="19" ry="8" fill="#133e37" opacity=".4"/><path d="M-9 20l-4 23m20-23 5 23" stroke="#f8f4df" stroke-width="9"/><path d="M-13-2h26l-5 28H-8Z" fill="#ffd15e"/><circle cy="-12" r="11" fill="#d79764"/><path d="M-13-16q2-16 22-7l4 11H-13" fill="#153e51"/><path d="M-11 2l-14 14m36-14 11-13" stroke="#d79764" stroke-width="7" stroke-linecap="round"/></g><g transform="translate(150 466) rotate(-24)"><rect x="-8" y="-118" width="21" height="167" rx="11" fill="#bf7e43"/><rect x="-5" y="-111" width="7" height="107" rx="4" fill="#efbf77"/><path d="M-8 49h21" stroke="#553b2a" stroke-width="7"/></g><g transform="translate(733 443)"><circle r="51" fill="#fff7e4"/><path d="M-21-47q44 47 1 92M24-44q-45 45-1 89" fill="none" stroke="#cf5346" stroke-width="3"/><path d="M-24-37l15-3m-14 18 18-3m-14 18 18-2m-20 18 18 2m-26 14 18 3m29-68-15-3m14 18-18-3m14 18-18-2m20 18-18 2m26 14-18 3" stroke="#cf5346" stroke-width="3"/></g></svg>`;
window.MLL_HOME_THUMBS=Object.freeze({...window.MLL_HOME_THUMBS,baseball:window.MLL_BASEBALL_THUMB});

;
/* Max's ballpark: original vector artwork, touch controls, durable game snapshots. */
(function(){
'use strict';
const clone=o=>JSON.parse(JSON.stringify(o));
const text=(en,es,lang)=>lang==='es'?es:en;
const clamp=(n,a,b)=>Math.min(b,Math.max(a,n));
function difficultyLevel(value){return ['easy','medium','hard'].includes(value)?value:value==='allstar'?'hard':'medium';}
function create(options={}){return {version:1,inning:1,outs:0,strikes:0,bases:[false,false,false],runs:0,opponentRuns:0,hits:0,homeRuns:0,pitches:0,plays:0,playerByInning:[0,null,null],opponentByInning:[null,null,null],seed:(options.seed>>>0)||Math.floor(Math.random()*2147483647)+1,status:'playing',sound:false,difficulty:difficultyLevel(options.difficulty)};}
function random(s){s.seed=(Math.imul(s.seed,1664525)+1013904223)>>>0;return s.seed/4294967296;}
function normalize(input){const d=create();if(!input||input.version!==1)return d;const s={...d,...clone(input)};s.inning=clamp(Math.floor(+s.inning||1),1,3);s.outs=clamp(Math.floor(+s.outs||0),0,3);s.strikes=clamp(Math.floor(+s.strikes||0),0,2);s.bases=[0,1,2].map(i=>!!(input.bases||[])[i]);for(const k of ['runs','opponentRuns','hits','homeRuns','pitches','plays'])s[k]=Math.max(0,Math.floor(+s[k]||0));s.playerByInning=[0,1,2].map(i=>(input.playerByInning||[])[i]===null?null:Math.max(0,Math.floor(+(input.playerByInning||[])[i]||0)));s.opponentByInning=[0,1,2].map(i=>(input.opponentByInning||[])[i]===null?null:Math.max(0,Math.floor(+(input.opponentByInning||[])[i]||0)));s.status=input.status==='finished'?'finished':'playing';s.difficulty=difficultyLevel(input.difficulty);return s;}
function timingOutcome(offset,difficulty='medium'){
 const a=Math.abs(offset),level=difficultyLevel(difficulty),w=level==='easy'?1.65:level==='hard'?.65:1;
 if(a<=.016*w)return 'homer';if(a<=.036*w)return 'triple';if(a<=.065*w)return 'double';if(a<=.11*w)return 'single';if(a<=.20*w)return offset<0?'flyout':'groundout';if(a<=.27*w)return 'foul';return 'strike';
}
function nextPitch(s){
 const level=difficultyLevel(s.difficulty),ranges={easy:[1500,2100],medium:[1150,1750],hard:[850,1350]},range=ranges[level];
 return {duration:Math.round(range[0]+random(s)*(range[1]-range[0])),windup:Math.round(480+random(s)*320),curve:(random(s)*2-1)*(level==='easy'?15:level==='hard'?38:27)};
}
function advance(s,bases){let scored=0;const next=[false,false,false];for(let i=2;i>=0;i--){if(!s.bases[i])continue;const dest=i+bases;if(dest>=3)scored++;else next[dest]=true;}if(bases>=4)scored++;else next[bases-1]=true;s.bases=next;return scored;}
function applyPlay(input,outcome){
 const s=normalize(input),before=clone(s);if(s.status==='finished')return {state:s,event:{outcome:'finished',runs:0}};
 let runs=0;const event={outcome,runs:0,inning:s.inning,endedInning:false,opponentAdded:0,before};s.pitches++;s.plays++;
 if(['single','double','triple','homer'].includes(outcome)){s.hits++;if(outcome==='homer')s.homeRuns++;runs=advance(s,{single:1,double:2,triple:3,homer:4}[outcome]);s.strikes=0;}
 else if(outcome==='foul'){if(s.strikes<2)s.strikes++;}
 else if(outcome==='strike'){s.strikes++;if(s.strikes>=3){s.strikes=0;s.outs++;event.outcome='strikeout';}}
 else if(outcome==='flyout'||outcome==='groundout'){s.outs++;s.strikes=0;}
 else throw new Error('Unknown baseball outcome: '+outcome);
 // Count every run, then change sides only after the third out.
 s.runs+=runs;s.playerByInning[s.inning-1]=(s.playerByInning[s.inning-1]||0)+runs;event.runs=runs;
 if(s.outs>=3){
  event.endedInning=true;
  const r=random(s);const added=r<.27?0:r<.60?1:r<.86?2:r<.97?3:4;s.opponentRuns+=added;s.opponentByInning[s.inning-1]=added;event.opponentAdded=added;s.bases=[false,false,false];s.strikes=0;
  if(s.inning===3){s.status='finished';}else{s.inning++;s.outs=0;s.playerByInning[s.inning-1]=0;}
 }
 return {state:s,event};
}
function summary(s){return {runs:s.runs,opponentRuns:s.opponentRuns,hits:s.hits,homeRuns:s.homeRuns,innings:3,won:s.runs>s.opponentRuns,tied:s.runs===s.opponentRuns,pitches:s.pitches};}
const labels={strike:['Strike!','¡Strike!'],strikeout:['Strike three. One out.','Tres strikes. Un out.'],foul:['Foul ball!','¡Bola fuera!'],single:['Base hit!','¡Sencillo!'],double:['A double!','¡Doble!'],triple:['A triple!','¡Triple!'],homer:['HOME RUN!','¡JONRÓN!'],flyout:['Caught in the air!','¡Atrapada en el aire!'],groundout:['Out at first!','¡Out en primera!']};
function mount(host,api={}){
 const lang=api.lang||'en',L=(en,es)=>text(en,es,lang),name=String(api.name||'Max');let state=normalize(api.session),phase='ready',elapsed=0,pitchDuration=0,pitchWindup=600,pitchCurve=0,disposed=false,paused=false,last=0,frame=0,swingAt=-1,result=null,flight=null,finishedNotified=false,audioContext=null;
 const reduced=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;
 host.innerHTML=`<section class="mll-ballpark" aria-label="${L('Baseball game','Juego de béisbol')}"><div class="bb-heading"><div><p class="bb-kicker">${L('LEARN. EARN. PLAY BALL.','APRENDE. GANA. JUEGA.')}</p><h1>${L('The Learning League','La Liga del Aprendizaje')}</h1></div><button class="bb-secondary bb-exit" type="button">${L('Save & leave','Guardar y salir')}</button></div><div class="bb-scoreboard"><div class="bb-score-team"><span class="bb-team-name"></span><strong data-score="home">0</strong></div><div class="bb-inning"><span>${L('INNING','ENTRADA')}</span><strong data-inning>1 / 3</strong><span class="bb-lights" aria-label="${L('Outs','Outs')}"></span></div><div class="bb-score-team bb-away"><span>${L('COMETS','COMETAS')}</span><strong data-score="away">0</strong></div></div><div class="bb-stadium-wrap"><canvas class="bb-stadium" width="1000" height="650" role="img" aria-label="${L('Baseball field. Watch the pitch approach the glowing home plate.','Campo de béisbol. Mira la pelota acercarse al plato brillante.')}"></canvas><div class="bb-stadium-tools"><button class="bb-mini bb-pause" type="button">${L('Pause','Pausa')}</button><button class="bb-mini bb-sound" type="button" aria-pressed="false">${L('Sound off','Sin sonido')}</button><span class="bb-speed-label"></span></div><div class="bb-result-banner" aria-hidden="true" hidden></div><div class="bb-overlay" hidden><div class="bb-overlay-card"></div></div><div class="bb-field-caption">${L('3 innings · 3 outs per inning','3 entradas · 3 outs por entrada')}</div></div><div class="bb-controls"><div class="bb-live"><strong class="bb-call" role="status" aria-live="polite"></strong><span class="bb-tip"></span><div class="bb-count"><span class="bb-strikes"></span><span class="bb-bases"></span></div></div><button class="bb-swing" type="button"></button></div><div class="bb-lower"><div class="bb-speed"><span>${L('Difficulty','Dificultad')}</span><button type="button" data-speed="easy">${L('Easy','Fácil')}</button><button type="button" data-speed="medium">${L('Medium','Medio')}</button><button type="button" data-speed="hard">${L('Hard','Difícil')}</button></div><button class="bb-rules-button" type="button" aria-expanded="false">${L('How to play','Cómo jugar')}</button></div><div class="bb-rules" hidden><p>${L('Tap “Pitch to me” to get ready. Watch the ball come toward you, then tap SWING when it reaches the bright ring at home plate. Pitch speeds change, so watch the ball itself. Tap the field or press Space to swing, too.','Toca “Lánzame” para empezar. Mira cómo se acerca la pelota y toca BATEAR cuando llegue al aro brillante del plato. La velocidad cambia, así que mira la pelota. También puedes tocar el campo o usar la barra espaciadora.')}</p><p>${L('Three strikes make one out. A foul adds a strike, but never the third. Hits move runners around the bases. Only three outs end your turn; scoring runs never ends an inning. Then the Comets take their automatic turn. Play 3 innings; a tie stays a tie.','Tres strikes son un out. Una bola fuera cuenta como strike, pero nunca como el tercero. Los hits mueven a los corredores. Solo tres outs terminan tu turno; anotar carreras no termina la entrada. Después, los Cometas juegan su turno automático. Juega 3 entradas; un empate queda como empate.')}</p><p>${L('Your progress saves after every pitch. Leaving and resuming this game costs no extra points. Baseball does not earn learning points.','Tu progreso se guarda después de cada lanzamiento. Salir y continuar este partido no cuesta más puntos. El béisbol no da puntos de aprendizaje.')}</p></div><div class="bb-boxscore" aria-label="${L('Runs by inning','Carreras por entrada')}"></div></section>`;
 const $=s=>host.querySelector(s),all=s=>[...host.querySelectorAll(s)];$('.bb-team-name').textContent=name.toLocaleUpperCase(lang);const canvas=$('.bb-stadium'),ctx=canvas.getContext('2d');
 const action=$('.bb-swing'),call=$('.bb-call'),tip=$('.bb-tip'),overlay=$('.bb-overlay'),overlayCard=$('.bb-overlay-card'),banner=$('.bb-result-banner');
 function save(){if(api.onSave)api.onSave(clone(state));}
 function sound(kind){if(!state.sound||disposed)return;try{const AC=window.AudioContext||window.webkitAudioContext;if(!AC)return;audioContext=audioContext||new AC();if(audioContext.state==='suspended')audioContext.resume().catch(()=>{});const t=audioContext.currentTime;
  const note=(f,at,len,volume=.09)=>{const o=audioContext.createOscillator(),g=audioContext.createGain();o.type='triangle';o.frequency.setValueAtTime(f,at);g.gain.setValueAtTime(volume,at);g.gain.exponentialRampToValueAtTime(.001,at+len);o.connect(g);g.connect(audioContext.destination);o.start(at);o.stop(at+len);};
  if(kind==='hit'||kind==='homer'){const buffer=audioContext.createBuffer(1,Math.floor(audioContext.sampleRate*.055),audioContext.sampleRate),data=buffer.getChannelData(0);for(let i=0;i<data.length;i++)data[i]=(Math.random()*2-1)*Math.pow(1-i/data.length,3);const source=audioContext.createBufferSource(),g=audioContext.createGain();source.buffer=buffer;g.gain.value=.22;source.connect(g);g.connect(audioContext.destination);source.start(t);note(210,t,.08,.10);if(kind==='homer')[392,494,587,784].forEach((f,i)=>note(f,t+.1+i*.095,.18,.055));}else note(160,t,.09,.045);
 }catch(e){/* Silent play remains fully usable on devices without audio. */}}

 function notifyFinish(){if(!finishedNotified&&state.status==='finished'){finishedNotified=true;if(api.onFinish)api.onFinish(summary(state));}}
 function setMessage(head,body=''){call.textContent=head;tip.textContent=body;}
 function updateScore(){
  const betweenInnings=result&&result.endedInning&&(phase==='result'||phase==='opponent');const displayInning=betweenInnings?result.inning:state.inning,displayOuts=betweenInnings?(result.runLimit?result.before.outs:3):state.outs;
  $('[data-score="home"]').textContent=state.runs;$('[data-score="away"]').textContent=state.opponentRuns;$('[data-inning]').textContent=displayInning+' / 3';
  $('.bb-lights').innerHTML=`<span>${L('OUTS','OUTS')}</span>`+[0,1,2].map(i=>`<i class="${i<displayOuts?'on':''}"></i>`).join('');$('.bb-lights').setAttribute('aria-label',displayOuts+' '+L('outs','outs'));
  $('.bb-strikes').textContent=L('Strikes: ','Strikes: ')+state.strikes+' / 3';$('.bb-bases').textContent=L('On base: ','En bases: ')+state.bases.filter(Boolean).length;
  $('.bb-sound').textContent=state.sound?L('Sound on','Con sonido'):L('Sound off','Sin sonido');$('.bb-sound').setAttribute('aria-pressed',String(!!state.sound));
  $('.bb-speed-label').textContent=state.difficulty==='easy'?L('EASY','FÁCIL'):state.difficulty==='hard'?L('HARD','DIFÍCIL'):L('MEDIUM','MEDIO');
  all('[data-speed]').forEach(b=>{b.setAttribute('aria-pressed',String(b.dataset.speed===state.difficulty));b.disabled=phase!=='ready'||paused||state.status==='finished';});
  const table=document.createElement('table');table.innerHTML=`<thead><tr><th>${L('Team','Equipo')}</th><th>1</th><th>2</th><th>3</th><th>${L('Runs','Carreras')}</th></tr></thead><tbody><tr><th class="bb-box-name"></th>${state.playerByInning.map(n=>'<td>'+(n===null?'–':n)+'</td>').join('')}<td>${state.runs}</td></tr><tr><th>${L('Comets','Cometas')}</th>${state.opponentByInning.map(n=>'<td>'+(n===null?'–':n)+'</td>').join('')}<td>${state.opponentRuns}</td></tr></tbody>`;table.querySelector('.bb-box-name').textContent=name;$('.bb-boxscore').replaceChildren(table);
 }
 function ready(){phase='ready';elapsed=0;swingAt=-1;flight=null;result=null;banner.hidden=true;action.disabled=false;action.classList.remove('bb-is-swing');action.textContent=L('Pitch to me','Lánzame');setMessage(L('Step up to the plate!','¡Prepárate para batear!'),L('Watch the ball. Swing at the glowing ring.','Mira la pelota. Batea cuando llegue al aro.'));updateScore();}
 function startPitch(){if(state.sound)sound('ready');if(disposed||paused||state.status==='finished'||phase!=='ready')return;phase='windup';elapsed=0;swingAt=-1;const pitch=nextPitch(state);pitchDuration=pitch.duration;pitchWindup=pitch.windup;pitchCurve=pitch.curve;save();action.textContent=L('SWING!','¡BATEAR!');action.classList.add('bb-is-swing');setMessage(L('Here comes the pitch…','Ahí viene la pelota…'),L('Wait for the ball to reach the ring.','Espera a que la pelota llegue al aro.'));updateScore();}
 function swing(){if(disposed||paused||state.status==='finished')return;if(phase==='ready'){startPitch();return;}if(phase!=='windup'&&phase!=='pitch')return;swingAt=0;const fraction=phase==='windup'?-.6:elapsed/pitchDuration;const offset=fraction-1;resolve(timingOutcome(offset,state.difficulty),offset);}
 function resolve(outcome,offset){
  const resolved=applyPlay(state,outcome);state=resolved.state;result=resolved.event;result.offset=offset;phase='result';elapsed=0;save();updateScore();action.disabled=true;action.textContent=L('Ball in play…','Jugada en marcha…');
  if(['single','double','triple','homer','flyout','groundout','foul'].includes(outcome))sound(outcome==='homer'?'homer':'hit');
  const phrase=labels[result.outcome]||labels.strike;const head=L(...phrase);let body='';
  if(['strike','strikeout','foul'].includes(result.outcome))body=offset<0?L('A little early. Let the ball get closer.','Un poco pronto. Deja que la pelota se acerque.'):L('A little late. Try swinging sooner.','Un poco tarde. Intenta batear antes.');
  else if(result.runs)body=result.runs+' '+L(result.runs===1?'run scores!':'runs score!',result.runs===1?'¡carrera!':'¡carreras!');
  else body=L('Keep your eye on the next pitch.','Sigue mirando la próxima pelota.');
  setMessage(head,body);banner.textContent=head;banner.dataset.kind=result.outcome;banner.hidden=false;
  const side=((state.pitches*19)%11-5)/5;flight={outcome:result.outcome,target:{x:500+side*250,y:result.outcome==='homer'?155:result.outcome==='triple'?215:result.outcome==='double'?265:result.outcome==='single'?305:result.outcome==='flyout'?280:390},duration:result.outcome==='homer'?1800:1150};
 }
 function afterResult(){
  if(result&&result.endedInning){phase='opponent';elapsed=0;banner.hidden=true;action.textContent=L('Comets are batting…','Batean los Cometas…');setMessage(L('Three outs! Teams switch.','¡Tres outs! Cambio de turno.'),L('The Comets take their automatic turn.','Los Cometas juegan su turno automático.'));}
  else ready();
 }
 function finish(){phase='finished';banner.hidden=true;action.disabled=true;action.textContent=L('Game complete','Partido terminado');updateScore();notifyFinish();showFinish();}
 function showFinish(){$('.mll-ballpark').classList.add('bb-game-done');$('.bb-stadium-wrap').classList.add('bb-finished');const tied=state.runs===state.opponentRuns,won=state.runs>state.opponentRuns;overlay.hidden=false;overlayCard.innerHTML=`<span class="bb-trophy" aria-hidden="true">${won?'★':'⚾'}</span><p class="bb-kicker">${L('FINAL SCORE','MARCADOR FINAL')}</p><h2>${won?L('You win!','¡Ganaste!'):tied?L('A great tie!','¡Un gran empate!'):L('Good game!','¡Buen partido!')}</h2><p class="bb-final-score">${state.runs}<span>–</span>${state.opponentRuns}</p><p>${state.hits} ${L('hits','hits')} · ${state.homeRuns} ${L('home runs','jonrones')}</p><button class="bb-primary bb-finish-exit" type="button">${L('Back to the learning lab','Volver al laboratorio')}</button>`;overlayCard.querySelector('button').onclick=()=>api.onExit&&api.onExit();setMessage(L('Three innings in the books!','¡Terminaste las tres entradas!'),L('More learning earns your next ticket.','Aprende más para ganar tu próximo boleto.'));}
 function pause(){if(disposed||paused||phase==='finished')return;paused=true;$('.bb-stadium-wrap').classList.add('bb-paused');save();overlay.hidden=false;overlayCard.innerHTML=`<span class="bb-trophy" aria-hidden="true">Ⅱ</span><h2>${L('Time out!','¡Tiempo fuera!')}</h2><p>${L('Your game is saved. Ready when you are.','Tu partido está guardado. Sigue cuando quieras.')}</p><button class="bb-primary bb-resume" type="button">${L('Resume game','Continuar partido')}</button>`;overlayCard.querySelector('button').onclick=resume;action.disabled=true;$('.bb-pause').textContent=L('Resume','Continuar');updateScore();}
 function resume(){if(!paused)return;paused=false;$('.bb-stadium-wrap').classList.remove('bb-paused');last=0;overlay.hidden=true;action.disabled=phase==='result'||phase==='opponent';$('.bb-pause').textContent=L('Pause','Pausa');updateScore();}
 function visibility(){if(document.hidden)pause();}
 function key(e){if(e.code!=='Space'||e.repeat||/^(INPUT|SELECT|TEXTAREA)$/.test(e.target.tagName))return;if(e.target.tagName==='BUTTON')return;e.preventDefault();swing();}
 action.addEventListener('click',swing);canvas.addEventListener('click',e=>{if(e.button!==0)return;e.preventDefault();swing();});$('.bb-sound').onclick=()=>{state.sound=!state.sound;if(state.sound)sound('ready');save();updateScore();};$('.bb-exit').onclick=()=>{save();if(api.onExit)api.onExit();};$('.bb-pause').onclick=()=>paused?resume():pause();$('.bb-rules-button').onclick=()=>{const b=$('.bb-rules-button'),open=b.getAttribute('aria-expanded')!=='true';b.setAttribute('aria-expanded',String(open));$('.bb-rules').hidden=!open;};all('[data-speed]').forEach(b=>b.onclick=()=>{if(phase!=='ready'||paused)return;state.difficulty=b.dataset.speed;save();updateScore();});document.addEventListener('visibilitychange',visibility);document.addEventListener('keydown',key);
 // Original stadium illustration. All drawing coordinates use a stable 1000 × 650 field.
 const field={home:{x:500,y:555},first:{x:695,y:426},second:{x:500,y:306},third:{x:305,y:426},pitcher:{x:500,y:412}};
 function ellipse(x,y,rx,ry,color){ctx.fillStyle=color;ctx.beginPath();ctx.ellipse(x,y,rx,ry,0,0,Math.PI*2);ctx.fill();}
 function line(points,color,width=3){ctx.strokeStyle=color;ctx.lineWidth=width;ctx.beginPath();points.forEach((p,i)=>i?ctx.lineTo(p.x,p.y):ctx.moveTo(p.x,p.y));ctx.stroke();}
 function poly(points,color){ctx.fillStyle=color;ctx.beginPath();points.forEach((p,i)=>i?ctx.lineTo(p.x,p.y):ctx.moveTo(p.x,p.y));ctx.closePath();ctx.fill();}
 function roundRect(x,y,w,h,r,color){ctx.fillStyle=color;ctx.beginPath();ctx.roundRect?ctx.roundRect(x,y,w,h,r):ctx.rect(x,y,w,h);ctx.fill();}
 function person(x,y,scale,team,pose=0,bat=false){ctx.save();ctx.translate(x,y);ctx.scale(scale,scale);ellipse(0,2,12,4,'#10282444');ctx.lineCap='round';const uniform=team==='home'?'#ffcf66':'#eeeef6',dark=team==='home'?'#163a63':'#315b93';line([{x:-4,y:-11},{x:-6-pose*4,y:0}],dark,6);line([{x:4,y:-11},{x:7+pose*5,y:0}],dark,6);roundRect(-9,-31,18,23,5,uniform);line([{x:-7,y:-27},{x:-15-pose*6,y:-16-pose*12}],uniform,6);line([{x:7,y:-27},{x:14+pose*9,y:-22-pose*15}],uniform,6);ellipse(0,-39,9,10,'#c68e63');ellipse(0,-44,10,5,dark);roundRect(-1,-45,16,4,2,dark);if(bat){ctx.save();ctx.translate(13,-24);ctx.rotate(-.55+pose*2.8);line([{x:0,y:0},{x:0,y:-39}],'#edb56e',6);ctx.restore();}ctx.restore();}
 function base(p,active){ctx.save();ctx.translate(p.x,p.y);ctx.rotate(Math.PI/4);roundRect(-7,-7,14,14,1,active?'#ffda6a':'#fff8e5');ctx.restore();if(active){ellipse(p.x,p.y-26,12,12,'#ffda6a');ctx.fillStyle='#17314d';ctx.font='bold 14px system-ui';ctx.textAlign='center';ctx.fillText('●',p.x,p.y-21);}}
 function stadium(t){
  const sky=ctx.createLinearGradient(0,0,0,650);sky.addColorStop(0,'#102f5b');sky.addColorStop(.45,'#4c8299');sky.addColorStop(1,'#091d34');ctx.fillStyle=sky;ctx.fillRect(0,0,1000,650);
  ellipse(840,89,39,39,'#fbcf91');for(let i=0;i<11;i++){const x=i*107+14,h=35+(i*71)%61;roundRect(x,179-h,53,h,3,'#173b59');roundRect(x+8,185-h,4,5,1,'#608899');}
  poly([{x:0,y:180},{x:170,y:115},{x:500,y:96},{x:830,y:115},{x:1000,y:180},{x:1000,y:298},{x:0,y:298}],'#172c45');
  for(let row=0;row<5;row++){const y=158+row*18;line([{x:30,y:y+30},{x:225,y:y},{x:775,y:y},{x:970,y:y+30}],'#254058',7);for(let c=0;c<49;c++){const x=26+c*20,y2=y+Math.pow((x-500)/500,2)*29;ellipse(x,y2,3.2,3.2,['#efad6a','#83b5c1','#fff0c9','#587899'][(c*7+row*3)%4]);}}
  [95,905].forEach(x=>{line([{x,y:245},{x,y:68}],'#b2c4c8',5);roundRect(x-32,58,64,18,4,'#d4dfe0');for(let j=0;j<4;j++)roundRect(x-28+j*15,62,10,10,2,'#fff2ba');if(!reduced){const g=ctx.createRadialGradient(x,69,5,x,100,160);g.addColorStop(0,'#fff5b52c');g.addColorStop(1,'#fff5b500');ctx.fillStyle=g;ctx.fillRect(x-160,60,320,190);}});
  roundRect(398,126,204,64,6,'#081e31');ctx.fillStyle='#f3d57e';ctx.textAlign='center';ctx.font='bold 15px system-ui';ctx.fillText(L('LEARNING LEAGUE','LIGA DEL APRENDIZAJE'),500,149);ctx.fillStyle='#d5f8e2';ctx.font='bold 21px monospace';ctx.fillText(String(state.runs).padStart(2,'0')+'  —  '+String(state.opponentRuns).padStart(2,'0'),500,177);
  // Dark outfield wall and curved turf.
  ctx.fillStyle='#194c49';ctx.beginPath();ctx.ellipse(500,539,574,332,0,Math.PI,2*Math.PI);ctx.lineTo(1074,650);ctx.lineTo(-74,650);ctx.fill();
  ctx.strokeStyle='#e5b96f';ctx.lineWidth=8;ctx.beginPath();ctx.ellipse(500,539,573,330,0,Math.PI,2*Math.PI);ctx.stroke();
  ctx.save();ctx.beginPath();ctx.ellipse(500,555,560,323,0,Math.PI,2*Math.PI);ctx.lineTo(1060,650);ctx.lineTo(-60,650);ctx.clip();ctx.fillStyle='#347951';ctx.fillRect(0,220,1000,430);
  for(let i=-6;i<9;i++){poly([{x:500+i*120,y:215},{x:500+i*120+60,y:215},{x:500+i*180+90,y:650},{x:500+i*180,y:650}],'#3c8257');}ctx.restore();
  // The infield uses the same diamond geometry as the base-running engine.
  poly([{x:500,y:284},{x:737,y:426},{x:500,y:585},{x:263,y:426}],'#c99366');poly([{x:500,y:325},{x:663,y:426},{x:500,y:534},{x:337,y:426}],'#438857');
  line([{x:118,y:309},field.home,{x:882,y:309}],'#fcf3d4',3);line([field.home,field.first,field.second,field.third,field.home],'#eac297',5);
  ellipse(500,420,40,21,'#c99366');roundRect(489,406,22,6,1,'#fff6df');ellipse(500,555,63,25,'#c99366');
  const shown=result&&phase==='result'?result.before.bases:state.bases;base(field.first,shown[0]);base(field.second,shown[1]);base(field.third,shown[2]);poly([{x:491,y:548},{x:509,y:548},{x:511,y:558},{x:500,y:566},{x:489,y:558}],'#fff9e8');
  // Target ring belongs to the plate, not an unrelated timing meter.
  const hot=phase==='pitch';ctx.strokeStyle=hot?'#ffe07b':'#c1fbe5';ctx.lineWidth=hot?5:3;ctx.globalAlpha=phase==='windup'||phase==='pitch'?1:.55;ctx.beginPath();ctx.ellipse(500,529,27,15,0,0,Math.PI*2);ctx.stroke();ctx.globalAlpha=1;
  // Fielders react to the ball and its landing point.
  const positions=[{x:326,y:344},{x:647,y:343},{x:223,y:274},{x:501,y:260},{x:791,y:274},{x:691,y:411}];positions.forEach((p,i)=>{let x=p.x,y=p.y;if(phase==='result'&&flight&&!['strike','strikeout','foul'].includes(flight.outcome)){const q=Math.min(elapsed/flight.duration,1);const selected=flight.target.x<420?2:flight.target.x>600?4:3;if(i===selected){x+=(flight.target.x-x)*q*.8;y+=(flight.target.y-y)*q*.8;}}person(x,y,.62,'away');});
  let pose=phase==='windup'?Math.sin(Math.min(elapsed/pitchWindup,1)*Math.PI):phase==='pitch'?Math.max(0,1-elapsed/400):0;person(500,405,.95,'away',pose);
  const swingPose=swingAt>=0?Math.sin(Math.min(swingAt/330,1)*Math.PI):0;person(452,574,1.5,'home',swingPose,true);person(526,593,.78,'away',.1);
  // Batting-box chalk and foreground stadium rail give depth.
  line([{x:437,y:541},{x:472,y:541},{x:472,y:584},{x:437,y:584},{x:437,y:541}],'#fff3d780',2);
  if(phase==='windup'){const hand={x:514+pose*9,y:381-pose*15};ball(hand.x,hand.y,5);}
  if(phase==='pitch'){
   const q=clamp(elapsed/pitchDuration,0,1.28),x=500+Math.sin(q*Math.PI)*pitchCurve,y=374+155*Math.pow(q,1.35);ellipse(x,y+30,5+q*8,3+q*3,'#0a263633');line([{x:x-2,y:y-18},{x,y}],'#fff5d275',3);ball(x,y,5+q*9);
  }
  if(phase==='result'&&flight){
   const q=clamp(elapsed/flight.duration,0,1);if(!['strike','strikeout'].includes(flight.outcome)){
    const end=flight.outcome==='foul'?{x:flight.target.x>500?1040:-40,y:380}:flight.target;const x=500+(end.x-500)*q,y=529+(end.y-529)*q-Math.sin(q*Math.PI)*(flight.outcome==='homer'?195:flight.outcome==='groundout'?5:90);
    ellipse(x,529+(end.y-529)*q+15,8-q*4,3,'#133c3544');const trailQ=Math.max(0,q-.06);line([{x:500+(end.x-500)*trailQ,y:529+(end.y-529)*trailQ-Math.sin(trailQ*Math.PI)*(flight.outcome==='homer'?195:flight.outcome==='groundout'?5:90)},{x,y}],'#fff9d888',3);ball(x,y,12-q*8);
   }
   const n={single:1,double:2,triple:3,homer:4}[result.outcome];if(n){const route=[field.home,field.first,field.second,field.third,field.home];const run=(start)=>{const dist=q*n,seg=Math.floor(dist),fract=dist-seg;const idx=start+seg;if(idx>=4)return;const a=route[idx],b=route[idx+1];person(a.x+(b.x-a.x)*fract,a.y+(b.y-a.y)*fract,.67,'home',Math.sin(t/60)*.3);};run(0);result.before.bases.forEach((yes,i)=>{if(yes)run(i+1);});}
   if(result.outcome==='homer'&&!reduced){for(let i=0;i<25;i++){const x=(i*137+elapsed*.1)%1000,y=(i*93+elapsed*.06)%360;ctx.fillStyle=['#ffdb7e','#e6f7f0','#77c3c5'][i%3];ctx.fillRect(x,y,5,8);}}
  }
  if(phase==='opponent'){const q=(elapsed%900)/900;ball(500,380+q*135,5+q*8);ctx.fillStyle='#061a2eb8';ctx.fillRect(260,451,480,79);ctx.fillStyle='#ffdf94';ctx.font='bold 24px system-ui';ctx.textAlign='center';ctx.fillText(L('COMETS AT BAT','BATEAN LOS COMETAS'),500,483);ctx.fillStyle='#fff9e9';ctx.font='18px system-ui';ctx.fillText(elapsed>650?(result.opponentAdded+' '+L(result.opponentAdded===1?'run scored':'runs scored',result.opponentAdded===1?'carrera':'carreras')):L('Your fielders take their turn…','Tus jugadores defienden…'),500,512);}
  // Rail drawn last keeps the illustrated ballpark feeling like a place.
  ctx.fillStyle='#102737';ctx.fillRect(0,628,1000,22);ctx.fillStyle='#496b73';ctx.fillRect(0,628,1000,4);for(let i=0;i<11;i++)roundRect(i*100+25,632,4,18,1,'#294650');
 }
 function ball(x,y,r){ellipse(x+2,y+3,r,r,'#10243b35');ellipse(x,y,r,r,'#fffbea');ctx.strokeStyle='#d15d55';ctx.lineWidth=Math.max(1,r*.12);ctx.beginPath();ctx.arc(x-r*.55,y,r*.72,-.95,.95);ctx.stroke();ctx.beginPath();ctx.arc(x+r*.55,y,r*.72,Math.PI-.95,Math.PI+.95);ctx.stroke();}
 function animate(now){if(disposed)return;const dt=last?Math.min(60,now-last):0;last=now;if(!paused){elapsed+=dt;if(swingAt>=0)swingAt+=dt;if(phase==='windup'&&elapsed>=pitchWindup){phase='pitch';elapsed=0;}else if(phase==='pitch'&&elapsed>pitchDuration*1.33){swingAt=-1;resolve('strike',.4);}else if(phase==='result'&&elapsed>(flight?flight.duration:1150)+220){afterResult();}else if(phase==='opponent'&&elapsed>1600){if(state.status==='finished')finish();else ready();}stadium(now);}frame=requestAnimationFrame(animate);}
 ready();save();if(state.status==='finished')finish();frame=requestAnimationFrame(animate);
 return {dispose(){if(disposed)return;disposed=true;save();cancelAnimationFrame(frame);if(audioContext)audioContext.close().catch(()=>{});document.removeEventListener('visibilitychange',visibility);document.removeEventListener('keydown',key);},pause,saveState(){save();return clone(state);},getState:()=>clone(state)};
}
window.MLL_BASEBALL={mount,engine:{create,normalize,timingOutcome,nextPitch,applyPlay,summary}};
})();

;
window.MLL_WONDER_PHOTOS={"faroe-2": {"src": "assets/wonders/faroe-2.jpg", "alt": "The steep coastal cliffs of Suðuroy in the Faroe Islands.", "credit": "Erik Christensen", "license": "CC BY-SA 3.0", "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0", "source": "https://commons.wikimedia.org/wiki/File:Su%C3%B0uroy.FaroeIslands.2.jpg", "width": 1200, "height": 799, "title": "File:Suðuroy.FaroeIslands.2.jpg", "changes": "Resized and compressed. Cards crop the photograph.", "altEs": "Los acantilados costeros de Suðuroy en las islas Feroe."}, "faroe": {"src": "assets/wonders/faroe.jpg", "alt": "Múlafossur waterfall falls from the green cliffs at Gásadalur.", "credit": "Eric Welch eric_welch", "license": "CC0", "licenseUrl": "http://creativecommons.org/publicdomain/zero/1.0/deed.en", "source": "https://commons.wikimedia.org/wiki/File:Faroe_Islands_(Unsplash_eRwWGWkh0vU).jpg", "title": "File:Faroe Islands (Unsplash eRwWGWkh0vU).jpg", "width": 1200, "height": 800, "changes": "Resized and compressed; cards may crop.", "altEs": "La cascada Múlafossur cae desde los acantilados verdes de Gásadalur."}, "faroe-3": {"src": "assets/wonders/faroe-3.jpg", "alt": "Faroese sheep above the village of Sumba.", "credit": "kallerna", "license": "CC BY-SA 4.0", "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0", "source": "https://commons.wikimedia.org/wiki/File:Faroese_sheep_Sumba_1.jpg", "width": 1200, "height": 833, "title": "File:Faroese_sheep_Sumba_1.jpg", "changes": "Resized and compressed. Cards crop the photograph.", "altEs": "Ovejas de las Feroe sobre el pueblo de Sumba."}, "victoria": {"src": "assets/wonders/victoria-3.jpg", "alt": "Morning light and rising mist at Victoria Falls.", "credit": "lumoplank", "license": "CC0", "licenseUrl": "http://creativecommons.org/publicdomain/zero/1.0/deed.en", "source": "https://commons.wikimedia.org/wiki/File:Victoria_Falls_-_VicFalls3464.jpg", "width": 1200, "height": 800, "title": "File:Victoria_Falls_-_VicFalls3464.jpg", "changes": "Resized and compressed. Cards crop the photograph.", "altEs": "Luz de la mañana y neblina en las cataratas Victoria."}, "victoria-3": {"src": "assets/wonders/victoria.jpg", "alt": "Victoria Falls and its clouds of water spray.", "credit": "Diego Delso", "license": "CC BY-SA 4.0", "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0", "source": "https://commons.wikimedia.org/wiki/File:Cataratas_Victoria,_Zambia-Zimbabue,_2018-07-27,_DD_04.jpg", "width": 772, "height": 1200, "title": "File:Cataratas_Victoria,_Zambia-Zimbabue,_2018-07-27,_DD_04.jpg", "changes": "Resized and compressed. Cards crop the photograph.", "altEs": "Las cataratas Victoria y sus nubes de agua pulverizada."}, "victoria-2": {"src": "assets/wonders/victoria-2.jpg", "alt": "An aerial view shows the wide Zambezi River plunging into a narrow gorge.", "credit": "lumoplank", "license": "CC0", "licenseUrl": "http://creativecommons.org/publicdomain/zero/1.0/deed.en", "source": "https://commons.wikimedia.org/wiki/File:Victoria_Falls_-_VicFalls3456.jpg", "width": 1200, "height": 800, "title": "File:Victoria_Falls_-_VicFalls3456.jpg", "changes": "Resized and compressed. Cards crop the photograph.", "altEs": "Una vista aérea del ancho río Zambeze cayendo en una garganta estrecha."}, "iceland-lights-3": {"src": "assets/wonders/iceland-lights-3.jpg", "alt": "Kirkjufell mountain in daylight.", "credit": "Anjali Kiggal", "license": "CC BY-SA 4.0", "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0", "source": "https://commons.wikimedia.org/wiki/File:Kirkjufell_in_Iceland.jpg", "width": 1200, "height": 801, "title": "File:Kirkjufell_in_Iceland.jpg", "changes": "Resized and compressed. Cards crop the photograph.", "altEs": "La montaña Kirkjufell a la luz del día."}, "iceland-lights-2": {"src": "assets/wonders/iceland-lights-2.jpg", "alt": "Northern lights over Kirkjufell, seen from Grundarfjörður.", "credit": "Chr Grundo", "license": "CC BY-SA 4.0", "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0", "source": "https://commons.wikimedia.org/wiki/File:Northern_Lights_over_Kirkjufell_seen_from_Grundarfj%C3%B6r%C3%B0ur.jpg", "width": 1200, "height": 800, "title": "File:Northern Lights over Kirkjufell seen from Grundarfjörður.jpg", "changes": "Resized and compressed. Cards crop the photograph.", "altEs": "Auroras sobre Kirkjufell vistas desde Grundarfjörður."}, "iceland-lights": {"src": "assets/wonders/iceland-lights.jpg", "alt": "Northern lights above Kirkjufell mountain in Iceland.", "credit": "vaidyanathan", "license": "CC BY-SA 4.0", "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0", "source": "https://commons.wikimedia.org/wiki/File:Aurora_Borealis_activity_on_top_of_the_Kirkjufell_mountain_in_September_2018.jpg", "width": 1200, "height": 857, "title": "File:Aurora Borealis activity on top of the Kirkjufell mountain in September 2018.jpg", "changes": "Resized and compressed. Cards crop the photograph.", "altEs": "Auroras boreales sobre Kirkjufell en Islandia."}, "maasai-mara-3": {"src": "assets/wonders/maasai-mara-3.jpg", "alt": "A giraffe in the Maasai Mara landscape.", "credit": "HasselbladWhisperer", "license": "CC0", "licenseUrl": "http://creativecommons.org/publicdomain/zero/1.0/deed.en", "source": "https://commons.wikimedia.org/wiki/File:Masai_Mara_Giraffe.jpg", "width": 1200, "height": 797, "title": "File:Masai_Mara_Giraffe.jpg", "changes": "Resized and compressed. Cards crop the photograph.", "altEs": "Una jirafa en el paisaje de Masái Mara."}, "maasai-mara": {"src": "assets/wonders/maasai-mara.jpg", "alt": "Wildebeest and zebras together on the Maasai Mara grasslands.", "credit": "Key45", "license": "CC BY 2.0", "licenseUrl": "https://creativecommons.org/licenses/by/2.0", "source": "https://commons.wikimedia.org/wiki/File:GnusAndZebrasInMaraMasai.jpg", "width": 1200, "height": 783, "title": "File:GnusAndZebrasInMaraMasai.jpg", "changes": "Resized and compressed. Cards crop the photograph.", "altEs": "Ñus y cebras juntos en las praderas de Masái Mara."}, "maasai-mara-2": {"src": "assets/wonders/maasai-mara-2.jpg", "alt": "A cheetah with cubs in the Maasai Mara.", "credit": "Siddharth Maheshwari", "license": "CC BY-SA 3.0", "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0", "source": "https://commons.wikimedia.org/wiki/File:Cheetah_with_cubs.jpg", "width": 1200, "height": 644, "title": "File:Cheetah_with_cubs.jpg", "changes": "Resized and compressed. Cards crop the photograph.", "altEs": "Un guepardo con sus crías en Masái Mara."}, "octopus": {"src": "assets/wonders/octopus.jpg", "alt": "An octopus among the rocks underwater.", "credit": "albert kok", "license": "CC BY-SA 3.0", "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0", "source": "https://commons.wikimedia.org/wiki/File:Octopus2.jpg", "width": 1200, "height": 913, "title": "File:Octopus2.jpg", "changes": "Resized and compressed. Cards crop the photograph.", "altEs": "Un pulpo entre las rocas bajo el agua."}, "axolotl": {"src": "assets/wonders/axolotl.jpg", "alt": "An axolotl with feathery external gills.", "credit": "LoKiLeCh", "license": "CC BY-SA 3.0", "licenseUrl": "http://creativecommons.org/licenses/by-sa/3.0/", "source": "https://commons.wikimedia.org/wiki/File:Axolotl_ganz.jpg", "width": 1200, "height": 669, "title": "File:Axolotl_ganz.jpg", "changes": "Resized and compressed. Cards crop the photograph.", "altEs": "Un ajolote con branquias externas como plumas."}, "coral": {"src": "assets/wonders/coral.jpg", "alt": "A blue sea star among the corals of a reef.", "credit": "Richard Ling <wikipedia@rling.com>", "license": "CC BY-SA 3.0", "licenseUrl": "http://creativecommons.org/licenses/by-sa/3.0/", "source": "https://commons.wikimedia.org/wiki/File:Blue_Linckia_Starfish.JPG", "width": 900, "height": 1200, "title": "File:Blue_Linckia_Starfish.JPG", "changes": "Resized and compressed. Cards crop the photograph.", "altEs": "Una estrella de mar azul entre los corales de un arrecife."}, "cheetah": {"src": "assets/wonders/cheetah.jpg", "alt": "A cheetah with spotted fur and a long tail.", "credit": "AfricanConservation", "license": "CC BY-SA 4.0", "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0", "source": "https://commons.wikimedia.org/wiki/File:Male_cheetah_facing_left_in_South_Africa.jpg", "width": 1200, "height": 800, "title": "File:Male_cheetah_facing_left_in_South_Africa.jpg", "changes": "Resized and compressed. Cards crop the photograph.", "altEs": "Un guepardo con pelaje manchado y cola larga."}, "elephant": {"src": "assets/wonders/elephant.jpg", "alt": "An African bush elephant in Etosha National Park.", "credit": "Giles Laurent", "license": "CC BY-SA 4.0", "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0", "source": "https://commons.wikimedia.org/wiki/File:178_Male_African_bush_elephant_in_Etosha_National_Park_Photo_by_Giles_Laurent.jpg", "width": 1000, "height": 666, "title": "File:178 Male African bush elephant in Etosha National Park Photo by Giles Laurent.jpg", "changes": "Resized and compressed. Cards crop the photograph.", "altEs": "Un elefante africano en el parque nacional de Etosha."}, "owl": {"src": "assets/wonders/owl.jpg", "alt": "An American barn owl perched on a post.", "credit": "Charles J. Sharp", "license": "CC BY-SA 4.0", "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0", "source": "https://commons.wikimedia.org/wiki/File:American_Barn_Owl_(Tyto_furcata_guatemalae),_Orange_Walk.jpg", "width": 666, "height": 1000, "title": "File:American Barn Owl (Tyto furcata guatemalae), Orange Walk.jpg", "changes": "Resized and compressed. Cards crop the photograph.", "altEs": "Una lechuza americana posada en un poste."}, "bat": {"src": "assets/wonders/bat.jpg", "alt": "A little brown bat held by a gloved wildlife handler.", "credit": "SMBishop", "license": "CC BY-SA 3.0", "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0", "source": "https://commons.wikimedia.org/wiki/File:Little_Brown_Myotis_(cropped).JPG", "width": 945, "height": 1000, "title": "File:Little Brown Myotis (cropped).JPG", "changes": "Resized and compressed. Cards crop the photograph.", "altEs": "Un murciélago pequeño sostenido por un especialista con guantes."}, "turtle": {"src": "assets/wonders/turtle.jpg", "alt": "A green sea turtle swimming in clear ocean water.", "credit": "Charles J. Sharp", "license": "CC BY-SA 4.0", "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0", "source": "https://commons.wikimedia.org/wiki/File:Green_sea_turtle_(Chelonia_mydas)_Moorea.jpg", "width": 1000, "height": 666, "title": "File:Green sea turtle (Chelonia mydas) Moorea.jpg", "changes": "Resized and compressed. Cards crop the photograph.", "altEs": "Una tortuga verde nadando en agua marina transparente."}};
window.MLL_NEW_LESSONS=[
  {
    "section": "ocean",
    "id": "sunlight",
    "title": [
      "The sunlight switch",
      "El interruptor del Sol"
    ],
    "icon": "depth",
    "facts": [
      [
        "Most ocean sunlight is in the top 200 meters.",
        "Deeper down, the water gets darker. Below about 1,000 meters, sunlight does not reach.",
        "Deep-sea animals cannot depend on sunshine to see."
      ],
      [
        "La mayor parte de la luz solar del océano está en los primeros 200 metros.",
        "Más abajo, el agua se oscurece. A más de unos 1.000 metros, no llega la luz del Sol.",
        "Los animales de las profundidades no pueden depender del Sol para ver."
      ]
    ],
    "question": [
      "What happens as you dive deeper?",
      "¿Qué pasa al bajar más?"
    ],
    "options": [
      [
        "It gets darker",
        "It gets sunnier",
        "The water disappears"
      ],
      [
        "Se oscurece",
        "Hay más sol",
        "Desaparece el agua"
      ]
    ],
    "answer": 0,
    "source": "https://ocean.si.edu/ecosystems/deep-sea/deep-sea"
  },
  {
    "section": "ocean",
    "id": "living-lights",
    "title": [
      "Living flashlights",
      "Linternas vivas"
    ],
    "icon": "glow",
    "facts": [
      [
        "Some ocean animals make their own light through a chemical reaction.",
        "This light is called bioluminescence.",
        "It can help an animal attract food, find a mate, or startle a hunter."
      ],
      [
        "Algunos animales marinos producen luz con una reacción química.",
        "Esta luz se llama bioluminiscencia.",
        "Puede ayudar a atraer comida, encontrar pareja o asustar a un cazador."
      ]
    ],
    "question": [
      "What makes an animal’s bioluminescent light?",
      "¿Qué produce la luz bioluminiscente?"
    ],
    "options": [
      [
        "A tiny battery",
        "A chemical reaction",
        "A light bulb"
      ],
      [
        "Una pila pequeña",
        "Una reacción química",
        "Un foco"
      ]
    ],
    "answer": 1,
    "source": "https://ocean.si.edu/ocean-life/fish/bioluminescence"
  },
  {
    "section": "ocean",
    "id": "coral",
    "title": [
      "A city built by animals",
      "Una ciudad de animales"
    ],
    "icon": "coral",
    "facts": [
      [
        "Corals are animals, not rocks or plants.",
        "Tiny animals called polyps build the hard skeletons of many reefs.",
        "A reef has hiding places for fish, crabs, and many other neighbors."
      ],
      [
        "Los corales son animales, no rocas ni plantas.",
        "Animales pequeños llamados pólipos construyen los esqueletos duros de muchos arrecifes.",
        "Un arrecife tiene escondites para peces, cangrejos y muchos vecinos más."
      ]
    ],
    "question": [
      "What are corals?",
      "¿Qué son los corales?"
    ],
    "options": [
      [
        "Plants",
        "Painted rocks",
        "Animals"
      ],
      [
        "Plantas",
        "Rocas pintadas",
        "Animales"
      ]
    ],
    "answer": 2,
    "source": "https://ocean.si.edu/ocean-life/invertebrates/corals-and-coral-reefs"
  },
  {
    "section": "ocean",
    "id": "vents",
    "title": [
      "Hot chimneys underwater",
      "Chimeneas bajo el agua"
    ],
    "icon": "vent",
    "facts": [
      [
        "Deep-sea vents release water heated inside Earth.",
        "No sunlight reaches these deep places.",
        "Some tiny living things use chemicals for energy, helping feed a whole community."
      ],
      [
        "Las fuentes del fondo marino sueltan agua calentada dentro de la Tierra.",
        "La luz del Sol no llega a estos lugares profundos.",
        "Algunos seres diminutos usan sustancias químicas para obtener energía y alimentar a una comunidad."
      ]
    ],
    "question": [
      "What heats the water at a deep-sea vent?",
      "¿Qué calienta el agua de estas fuentes?"
    ],
    "options": [
      [
        "Heat inside Earth",
        "A giant kettle",
        "Sunshine on the sand"
      ],
      [
        "El calor de la Tierra",
        "Una tetera gigante",
        "El Sol sobre la arena"
      ]
    ],
    "answer": 0,
    "source": "https://ocean.si.edu/ocean-life/invertebrates/submarine-volcanoes-and-hydrothermal-vents"
  },
  {
    "section": "ocean",
    "id": "turtles",
    "title": [
      "An ocean traveler",
      "Un viajero del océano"
    ],
    "icon": "turtle",
    "facts": [
      [
        "Sea turtles are reptiles that breathe air.",
        "They must come to the surface to breathe.",
        "Female sea turtles lay their eggs in nests on land."
      ],
      [
        "Las tortugas marinas son reptiles que respiran aire.",
        "Deben subir a la superficie para respirar.",
        "Las hembras ponen huevos en nidos en tierra."
      ]
    ],
    "question": [
      "Why does a sea turtle come to the surface?",
      "¿Por qué sube una tortuga marina?"
    ],
    "options": [
      [
        "To grow wings",
        "To breathe air",
        "To turn into a fish"
      ],
      [
        "Para tener alas",
        "Para respirar aire",
        "Para convertirse en pez"
      ]
    ],
    "answer": 1,
    "source": "https://www.fisheries.noaa.gov/sea-turtles"
  },
  {
    "section": "ocean",
    "id": "octopus",
    "title": [
      "Eight-arm escape artist",
      "Un escapista de ocho brazos"
    ],
    "icon": "octopus",
    "facts": [
      [
        "An octopus has eight arms lined with suckers.",
        "Most octopuses have no hard shell, so they can squeeze through tight spaces.",
        "They can change their skin’s color and texture to hide."
      ],
      [
        "Un pulpo tiene ocho brazos con ventosas.",
        "La mayoría no tiene una concha dura y puede pasar por espacios estrechos.",
        "Puede cambiar el color y la textura de su piel para esconderse."
      ]
    ],
    "question": [
      "Which trick helps an octopus hide?",
      "¿Qué truco ayuda al pulpo a esconderse?"
    ],
    "options": [
      [
        "Growing feathers",
        "Ringing a bell",
        "Changing its skin"
      ],
      [
        "Tener plumas",
        "Tocar una campana",
        "Cambiar su piel"
      ]
    ],
    "answer": 2,
    "source": "https://ocean.si.edu/ocean-life/invertebrates/octopuses-squids-and-relatives"
  },
  {
    "section": "animals",
    "id": "axolotl",
    "title": [
      "The regrowing wonder",
      "El asombroso ajolote"
    ],
    "icon": "axolotl",
    "facts": [
      [
        "An axolotl is a salamander that usually keeps its feathery outside gills as an adult.",
        "It can regrow a lost leg. People cannot do that!",
        "Wild axolotls come from waterways around Mexico City."
      ],
      [
        "El ajolote es una salamandra que suele conservar sus branquias externas al crecer.",
        "Puede volver a formar una pata perdida. ¡Las personas no podemos!",
        "Los ajolotes silvestres son de los canales de la zona de Ciudad de México."
      ]
    ],
    "question": [
      "What can an axolotl regrow?",
      "¿Qué puede volver a formar un ajolote?"
    ],
    "options": [
      [
        "A lost leg",
        "A bicycle",
        "A feather coat"
      ],
      [
        "Una pata perdida",
        "Una bicicleta",
        "Un abrigo de plumas"
      ]
    ],
    "answer": 0,
    "source": "https://animals.sandiegozoo.org/animals/axolotl"
  },
  {
    "section": "animals",
    "id": "cheetah",
    "title": [
      "Built for a sprint",
      "Hecho para correr"
    ],
    "icon": "cheetah",
    "facts": [
      [
        "A cheetah is the fastest land animal.",
        "Its long tail helps it balance when it turns at speed.",
        "It runs fast in short bursts, not all day."
      ],
      [
        "El guepardo es el animal terrestre más rápido.",
        "Su cola larga le ayuda a mantener el equilibrio al girar.",
        "Corre muy rápido por poco tiempo, no todo el día."
      ]
    ],
    "question": [
      "What helps a cheetah balance in a turn?",
      "¿Qué ayuda al guepardo a mantener el equilibrio?"
    ],
    "options": [
      [
        "A helmet",
        "Its tail",
        "Its spots"
      ],
      [
        "Un casco",
        "Su cola",
        "Sus manchas"
      ]
    ],
    "answer": 1,
    "source": "https://animals.sandiegozoo.org/animals/cheetah"
  },
  {
    "section": "animals",
    "id": "bat",
    "title": [
      "Seeing with echoes",
      "Escuchar los ecos"
    ],
    "icon": "bat",
    "facts": [
      [
        "Many bats send out high sounds and listen for the echoes.",
        "The echoes help them find insects and avoid obstacles.",
        "Bats are mammals, and they are not blind."
      ],
      [
        "Muchos murciélagos emiten sonidos agudos y escuchan sus ecos.",
        "Los ecos les ayudan a encontrar insectos y evitar obstáculos.",
        "Los murciélagos son mamíferos y no son ciegos."
      ]
    ],
    "question": [
      "What does an echo do?",
      "¿Qué hace un eco?"
    ],
    "options": [
      [
        "Turns sound into ice",
        "Makes a new wing",
        "Bounces sound back"
      ],
      [
        "Convierte sonido en hielo",
        "Crea un ala",
        "Devuelve el sonido"
      ]
    ],
    "answer": 2,
    "source": "https://animals.sandiegozoo.org/animals/bat"
  },
  {
    "section": "animals",
    "id": "elephant",
    "title": [
      "A nose that can grab",
      "Una nariz que agarra"
    ],
    "icon": "elephant",
    "facts": [
      [
        "An elephant’s trunk is a long nose and upper lip.",
        "It can grab food, smell, and pull up water.",
        "To drink, the elephant squirts that water into its mouth."
      ],
      [
        "La trompa del elefante es su nariz y labio superior alargados.",
        "Puede agarrar comida, oler y recoger agua.",
        "Para beber, el elefante echa esa agua en su boca."
      ]
    ],
    "question": [
      "Where does the elephant put water to drink it?",
      "¿Dónde pone el agua para beberla?"
    ],
    "options": [
      [
        "Into its mouth",
        "Into its ears",
        "Onto its back"
      ],
      [
        "En la boca",
        "En las orejas",
        "En la espalda"
      ]
    ],
    "answer": 0,
    "source": "https://animals.sandiegozoo.org/animals/elephant"
  },
  {
    "section": "animals",
    "id": "owl",
    "title": [
      "A quiet night hunter",
      "Un cazador silencioso"
    ],
    "icon": "owl",
    "facts": [
      [
        "Many owls hunt when light is low.",
        "Special feather edges help many owls fly quietly.",
        "An owl turns its head far around, but not in a full circle."
      ],
      [
        "Muchos búhos cazan cuando hay poca luz.",
        "Los bordes especiales de sus plumas ayudan a muchos a volar en silencio.",
        "Un búho puede girar mucho la cabeza, pero no dar una vuelta completa."
      ]
    ],
    "question": [
      "What helps many owls fly quietly?",
      "¿Qué ayuda a muchos búhos a volar en silencio?"
    ],
    "options": [
      [
        "Rubber wings",
        "Special feathers",
        "Tiny engines"
      ],
      [
        "Alas de goma",
        "Plumas especiales",
        "Motores pequeños"
      ]
    ],
    "answer": 1,
    "source": "https://animals.sandiegozoo.org/animals/owl"
  },
  {
    "section": "animals",
    "id": "camouflage",
    "title": [
      "The disappearing octopus",
      "El pulpo que desaparece"
    ],
    "icon": "octopus",
    "facts": [
      [
        "An octopus can blend into the seafloor.",
        "Changing color and skin texture helps break up its outline.",
        "Camouflage can hide a hunter as well as the animal being hunted."
      ],
      [
        "Un pulpo puede confundirse con el fondo marino.",
        "Cambiar de color y textura ayuda a disimular su forma.",
        "El camuflaje puede esconder al cazador y también a su presa."
      ]
    ],
    "question": [
      "What is camouflage for?",
      "¿Para qué sirve el camuflaje?"
    ],
    "options": [
      [
        "Making louder noises",
        "Growing taller",
        "Blending with the surroundings"
      ],
      [
        "Hacer más ruido",
        "Crecer más alto",
        "Confundirse con el entorno"
      ]
    ],
    "answer": 2,
    "source": "https://ocean.si.edu/ocean-life/invertebrates/octopuses-squids-and-relatives"
  },
  {
    "section": "works",
    "id": "circuit",
    "title": [
      "Make a light turn on",
      "Enciende una luz"
    ],
    "icon": "circuit",
    "facts": [
      [
        "A simple electric circuit needs a complete path.",
        "A battery supplies energy, and wires connect the parts.",
        "Opening a switch breaks the path and turns the light off."
      ],
      [
        "Un circuito eléctrico sencillo necesita un camino completo.",
        "Una pila aporta energía y los cables conectan las piezas.",
        "Abrir el interruptor corta el camino y apaga la luz."
      ]
    ],
    "question": [
      "What happens when the switch breaks the path?",
      "¿Qué pasa cuando el interruptor corta el camino?"
    ],
    "options": [
      [
        "The light goes off",
        "The battery grows",
        "The wire melts every time"
      ],
      [
        "Se apaga la luz",
        "La pila crece",
        "El cable siempre se derrite"
      ]
    ],
    "answer": 0,
    "source": "https://www.sciencebuddies.org/blog/circuits-lessons"
  },
  {
    "section": "works",
    "id": "gears",
    "title": [
      "Teeth that turn wheels",
      "Dientes que giran ruedas"
    ],
    "icon": "gears",
    "facts": [
      [
        "Gears are wheels with teeth that fit together.",
        "Two touching gears turn in opposite directions.",
        "Changing gear sizes can change how fast a wheel turns."
      ],
      [
        "Los engranajes son ruedas con dientes que encajan.",
        "Dos engranajes que se tocan giran en sentidos contrarios.",
        "Cambiar sus tamaños puede cambiar la velocidad de giro."
      ]
    ],
    "question": [
      "Two touching gears turn…",
      "Dos engranajes que se tocan giran…"
    ],
    "options": [
      [
        "Only at night",
        "In opposite directions",
        "Without moving"
      ],
      [
        "Solo de noche",
        "En sentidos contrarios",
        "Sin moverse"
      ]
    ],
    "answer": 1,
    "source": "https://education.lego.com/en-us/lessons/sm/gears/"
  },
  {
    "section": "works",
    "id": "flight",
    "title": [
      "How can a plane stay up?",
      "¿Cómo vuela un avión?"
    ],
    "icon": "plane",
    "facts": [
      [
        "Wings moving through air can produce lift.",
        "Gravity pulls the airplane downward.",
        "Engines provide thrust, while drag resists motion through the air."
      ],
      [
        "Las alas que se mueven por el aire pueden producir sustentación.",
        "La gravedad tira del avión hacia abajo.",
        "Los motores dan empuje y la resistencia del aire frena el movimiento."
      ]
    ],
    "question": [
      "Which force pulls a plane down?",
      "¿Qué fuerza tira del avión hacia abajo?"
    ],
    "options": [
      [
        "Paint",
        "Thrust",
        "Gravity"
      ],
      [
        "La pintura",
        "El empuje",
        "La gravedad"
      ]
    ],
    "answer": 2,
    "source": "https://www.nasa.gov/learning-resources/for-kids-and-students/what-is-aerodynamics-grades-k-4/"
  },
  {
    "section": "works",
    "id": "bridge",
    "title": [
      "Why bridges use triangles",
      "¿Por qué usan triángulos?"
    ],
    "icon": "bridge",
    "facts": [
      [
        "A triangle made from rigid bars keeps its shape when its corners can pivot.",
        "A four-sided frame can lean sideways unless it has extra support.",
        "Engineers choose shapes and materials together to build strong bridges."
      ],
      [
        "Un triángulo de barras rígidas mantiene su forma aunque sus uniones puedan girar.",
        "Un marco de cuatro lados puede inclinarse si no tiene apoyo adicional.",
        "Los ingenieros eligen formas y materiales para hacer puentes resistentes."
      ]
    ],
    "question": [
      "Which bar helps stop a square frame leaning?",
      "¿Qué barra ayuda a que un marco cuadrado no se incline?"
    ],
    "options": [
      [
        "A diagonal bar",
        "An invisible bar",
        "A bar lying nearby"
      ],
      [
        "Una barra diagonal",
        "Una barra invisible",
        "Una barra en el suelo"
      ]
    ],
    "answer": 0,
    "source": "https://www.sciencebuddies.org/stem-activities/popsicle-stick-trusses-what-shape-is-strongest"
  },
  {
    "section": "works",
    "id": "sound",
    "title": [
      "Sound is a wiggle",
      "El sonido es vibración"
    ],
    "icon": "sound",
    "facts": [
      [
        "Sound starts with something vibrating: moving back and forth.",
        "Vibrations travel through air to your ears.",
        "Sound can also travel through water and solids."
      ],
      [
        "El sonido comienza con algo que vibra: se mueve de un lado al otro.",
        "Las vibraciones viajan por el aire hasta tus oídos.",
        "El sonido también puede viajar por agua y sólidos."
      ]
    ],
    "question": [
      "What starts a sound?",
      "¿Qué inicia un sonido?"
    ],
    "options": [
      [
        "A shadow",
        "A vibration",
        "A color"
      ],
      [
        "Una sombra",
        "Una vibración",
        "Un color"
      ]
    ],
    "answer": 1,
    "source": "https://www.nidcd.nih.gov/health/how-do-we-hear"
  },
  {
    "section": "works",
    "id": "friction",
    "title": [
      "The force that slows a slide",
      "La fuerza que frena"
    ],
    "icon": "friction",
    "facts": [
      [
        "Friction is a force between surfaces touching each other.",
        "It can slow a sliding object.",
        "Your shoe grips the ground using friction, helping you walk without slipping."
      ],
      [
        "La fricción es una fuerza entre superficies que se tocan.",
        "Puede frenar un objeto que se desliza.",
        "Tus zapatos se agarran al suelo gracias a la fricción."
      ]
    ],
    "question": [
      "Why is friction useful for shoes?",
      "¿Por qué es útil la fricción en los zapatos?"
    ],
    "options": [
      [
        "It makes them glow",
        "It makes them float",
        "It helps them grip"
      ],
      [
        "Los hace brillar",
        "Los hace flotar",
        "Les ayuda a agarrarse"
      ]
    ],
    "answer": 2,
    "source": "https://www.sciencebuddies.org/stem-activities/slippery-science-explore-friction-by-launching-stuff"
  },
  {
    "section": "sports",
    "id": "arc",
    "title": [
      "Why a ball comes back down",
      "¿Por qué baja la pelota?"
    ],
    "icon": "ball",
    "facts": [
      [
        "A kicked ball keeps moving forward while gravity pulls it down.",
        "This makes its path curve through the air.",
        "Try different launch angles in our simplified ball lab."
      ],
      [
        "Una pelota pateada avanza mientras la gravedad la atrae hacia abajo.",
        "Por eso su camino por el aire es curvo.",
        "Prueba distintos ángulos en nuestro laboratorio de pelotas simplificado."
      ]
    ],
    "question": [
      "What pulls a flying ball down?",
      "¿Qué hace bajar una pelota?"
    ],
    "options": [
      [
        "Gravity",
        "Its color",
        "The scoreboard"
      ],
      [
        "La gravedad",
        "Su color",
        "El marcador"
      ]
    ],
    "answer": 0,
    "source": "https://www1.grc.nasa.gov/beginners-guide-to-aeronautics/forces-on-a-baseball/"
  },
  {
    "section": "sports",
    "id": "spin",
    "title": [
      "A spinning ball can curve",
      "Una pelota con efecto"
    ],
    "icon": "spin",
    "facts": [
      [
        "A spinning ball can push air differently on its two sides.",
        "That can make its path bend.",
        "Baseball pitchers and soccer players use spin to surprise opponents."
      ],
      [
        "Una pelota que gira puede empujar el aire de forma distinta a cada lado.",
        "Eso puede curvar su camino.",
        "Lanzadores de béisbol y futbolistas usan el giro para sorprender."
      ]
    ],
    "question": [
      "What can help a ball’s path bend?",
      "¿Qué puede curvar el camino de una pelota?"
    ],
    "options": [
      [
        "A painted number",
        "Spin",
        "A loud cheer"
      ],
      [
        "Un número pintado",
        "El giro",
        "Un grito"
      ]
    ],
    "answer": 1,
    "source": "https://www1.grc.nasa.gov/beginners-guide-to-aeronautics/forces-on-a-baseball/"
  },
  {
    "section": "sports",
    "id": "bounce",
    "title": [
      "A bounce stores energy",
      "La energía del rebote"
    ],
    "icon": "bounce",
    "facts": [
      [
        "A ball squashes a little when it hits the ground.",
        "As it springs back toward its shape, it can bounce up.",
        "Some energy becomes heat and sound, so each bounce is usually lower."
      ],
      [
        "Una pelota se aplasta un poco al tocar el suelo.",
        "Al recuperar su forma, puede rebotar hacia arriba.",
        "Parte de la energía se vuelve calor y sonido, por eso suele rebotar cada vez menos."
      ]
    ],
    "question": [
      "Why are later bounces usually lower?",
      "¿Por qué suele bajar la altura de los rebotes?"
    ],
    "options": [
      [
        "Gravity stops working",
        "The floor gets taller",
        "Some energy becomes heat and sound"
      ],
      [
        "La gravedad deja de funcionar",
        "El piso sube",
        "Parte de la energía se vuelve calor y sonido"
      ]
    ],
    "answer": 2,
    "source": "https://www.sciencebuddies.org/science-fair-projects/project-ideas/Sports_p038/sports-science/bouncing-basketball-energy"
  },
  {
    "section": "sports",
    "id": "grip",
    "title": [
      "Shoes that hold the ground",
      "Zapatos que se agarran"
    ],
    "icon": "friction",
    "facts": [
      [
        "Friction helps a player push against the ground.",
        "Shoe tread and field conditions affect grip.",
        "A slippery surface can make a quick turn harder."
      ],
      [
        "La fricción ayuda al jugador a empujar contra el suelo.",
        "La suela y las condiciones de la cancha afectan el agarre.",
        "Una superficie resbalosa puede dificultar un giro rápido."
      ]
    ],
    "question": [
      "Which surface makes slipping more likely?",
      "¿Qué superficie facilita resbalarse?"
    ],
    "options": [
      [
        "A slippery one",
        "One with good grip",
        "One painted blue"
      ],
      [
        "Una resbalosa",
        "Una con buen agarre",
        "Una pintada de azul"
      ]
    ],
    "answer": 0,
    "source": "https://www.sciencebuddies.org/stem-activities/slippery-science-explore-friction-by-launching-stuff"
  },
  {
    "section": "sports",
    "id": "reaction",
    "title": [
      "Your brain’s relay team",
      "El equipo de tu cerebro"
    ],
    "icon": "reaction",
    "facts": [
      [
        "Your eyes notice a ball coming toward you.",
        "Your brain uses that information and sends messages to your muscles.",
        "Reaction time is the time between noticing a signal and starting a response."
      ],
      [
        "Tus ojos notan que viene una pelota.",
        "Tu cerebro usa esa información y envía mensajes a tus músculos.",
        "El tiempo de reacción va desde notar una señal hasta empezar a responder."
      ]
    ],
    "question": [
      "What sends messages to your muscles?",
      "¿Qué envía mensajes a tus músculos?"
    ],
    "options": [
      [
        "The stadium lights",
        "Your brain",
        "Your shoes"
      ],
      [
        "Las luces",
        "Tu cerebro",
        "Tus zapatos"
      ]
    ],
    "answer": 1,
    "source": "https://www.ninds.nih.gov/health-information/public-education/brain-basics"
  },
  {
    "section": "sports",
    "id": "fair-test",
    "title": [
      "Be a sports scientist",
      "Sé un científico deportivo"
    ],
    "icon": "test",
    "facts": [
      [
        "A fair test changes one thing at a time.",
        "To compare ball bounces, drop each ball from the same height onto the same surface.",
        "Repeat your tests: one lucky bounce is not enough evidence."
      ],
      [
        "Una prueba justa cambia una sola cosa a la vez.",
        "Para comparar rebotes, suelta cada pelota desde la misma altura sobre la misma superficie.",
        "Repite las pruebas: un rebote afortunado no es suficiente."
      ]
    ],
    "question": [
      "Which is a fair bounce comparison?",
      "¿Cuál es una comparación justa?"
    ],
    "options": [
      [
        "Different heights each time",
        "Different floors each time",
        "Same height and same floor"
      ],
      [
        "Distintas alturas",
        "Distintos pisos",
        "Misma altura y mismo piso"
      ]
    ],
    "answer": 2,
    "source": "https://www.sciencebuddies.org/science-fair-projects/science-fair/variables"
  }
];
window.MLL_PLACES_A.push(...[{"id": "faroe", "name": "Faroe Islands", "country": "Faroe Islands", "lat": 62.107, "lon": -7.435, "category": "Nature", "hook": "A waterfall that falls off an island!", "facts": ["Múlafossur waterfall tumbles over a green cliff toward the Atlantic Ocean.", "The Faroe Islands are a group of 18 main islands between Iceland and Norway.", "Sheep graze on grassy slopes, and seabirds nest on steep cliffs."], "stretch": {"question": "Why might people use tunnels here?", "answer": "Mountains and steep cliffs can make travel difficult. Tunnels let roads pass through rock."}, "sources": [{"title": "Visit Faroe Islands: Múlafossur", "url": "https://visitfaroeislands.com/en/whatson/places/place/mulafossur-the-waterfall-in-gasadalur?lang=en"}, {"title": "Visit Faroe Islands: island guide", "url": "https://visitfaroeislands.com/en/see-do/inspiration-guides/tips-from-travellers/best-things-to-do-in-the-faroe-islands"}], "quiz": {"question": "Where does Múlafossur fall?", "options": ["Toward the ocean", "Into a desert", "Inside a cave"], "answer": 0, "explain": "Múlafossur waterfall tumbles over a green cliff toward the Atlantic Ocean."}, "quiz2": {"question": "How many main islands make up the Faroes?", "options": ["2", "18", "180"], "answer": 1, "explain": "The Faroe Islands are a group of 18 main islands between Iceland and Norway."}}, {"id": "victoria", "name": "Victoria Falls", "country": "Zambia & Zimbabwe", "lat": -17.924, "lon": 25.857, "category": "Nature", "hook": "A wall of water wider than a mile.", "facts": ["The Zambezi River drops into a deep crack at the border of Zambia and Zimbabwe.", "The waterfall stretches about 1,700 meters across—more than a mile!", "Its local name, Mosi-oa-Tunya, means “the smoke that thunders”: the “smoke” is water spray."], "stretch": {"question": "Can water spray make a rainbow?", "answer": "Yes! Sunlight can bend and reflect inside water droplets, separating into colors."}, "sources": [{"title": "UNESCO: Mosi-oa-Tunya / Victoria Falls", "url": "https://whc.unesco.org/en/list/509"}], "quiz": {"question": "Which river tumbles over these falls?", "options": ["Amazon", "Zambezi", "Nile"], "answer": 1, "explain": "The Zambezi River drops into a deep crack at the border of Zambia and Zimbabwe."}, "quiz2": {"question": "About how wide are these falls?", "options": ["17 meters", "170 meters", "1,700 meters"], "answer": 2, "explain": "The waterfall stretches about 1,700 meters across—more than a mile!"}}, {"id": "iceland-lights", "name": "Iceland’s Northern Lights", "country": "Iceland", "lat": 64.941, "lon": -23.307, "category": "Nature", "hook": "A mountain under a glowing sky.", "facts": ["Near Kirkjufell mountain, northern lights sometimes glow above the coast.", "The Sun sends tiny particles into space. Some help make gases high above Earth glow.", "You need dark skies and good conditions; the lights do not appear every night."], "stretch": {"question": "Would bright city lights help you see an aurora?", "answer": "No. A dark place away from bright lights makes a faint aurora easier to spot. Cameras may show brighter colors than your eyes see."}, "sources": [{"title": "Visit Iceland: Northern lights", "url": "https://www.visiticeland.com/article/northern-lights-in-iceland/"}, {"title": "NASA: What is an aurora?", "url": "https://spaceplace.nasa.gov/aurora/en/"}], "quiz": {"question": "What is glowing above the mountain?", "options": ["Paint on clouds", "Northern lights", "A giant TV"], "answer": 1, "explain": "Near Kirkjufell mountain, northern lights sometimes glow above the coast."}, "quiz2": {"question": "Where does the aurora’s light form?", "options": ["Inside the mountain", "Under the sea", "High in the atmosphere"], "answer": 2, "explain": "The Sun sends tiny particles into space. Some help make gases high above Earth glow."}}, {"id": "maasai-mara", "name": "Maasai Mara", "country": "Kenya", "lat": -1.493, "lon": 35.144, "category": "Nature", "hook": "A grassland full of wild neighbors.", "facts": ["The Maasai Mara is a huge wildlife area in Kenya, in East Africa.", "Wildebeest and zebras move between this area and Tanzania’s Serengeti as they follow fresh grass.", "Lions, cheetahs, elephants, and giraffes also live in this landscape."], "stretch": {"question": "What changes if the rains arrive late?", "answer": "Fresh grass may grow at a different time. The herds follow food and water, not a calendar."}, "sources": [{"title": "Kenya Tourism Board: Maasai Mara", "url": "https://magicalkenya.com/"}, {"title": "Maasai Mara wildlife", "url": "https://webmail.magicalkenya.com/default.nsf/doc21/4YGEX3ADMY6?e=1&l=1&opendocument=&s=2"}], "quiz": {"question": "Which country is the Maasai Mara in?", "options": ["Iceland", "Ecuador", "Kenya"], "answer": 2, "explain": "The Maasai Mara is a huge wildlife area in Kenya, in East Africa."}, "quiz2": {"question": "Why do the herds move?", "options": ["To find fresh grass", "To visit a shop", "To build houses"], "answer": 0, "explain": "Wildebeest and zebras move between this area and Tanzania’s Serengeti as they follow fresh grass."}}]);
window.MLL_ES_A.push(...[{"id": "faroe", "name": "Islas Feroe", "country": "Islas Feroe", "lat": 62.107, "lon": -7.435, "category": "Nature", "hook": "¡Una cascada que cae desde una isla!", "facts": ["La cascada Múlafossur cae desde un acantilado verde hacia el océano Atlántico.", "Las Feroe son un grupo de 18 islas principales entre Islandia y Noruega.", "Las ovejas pastan en laderas verdes y las aves marinas anidan en acantilados."], "stretch": {"question": "¿Por qué se usan túneles aquí?", "answer": "Las montañas y los acantilados dificultan viajar. Los túneles permiten que los caminos atraviesen la roca."}, "sources": [{"title": "Visit Faroe Islands: Múlafossur", "url": "https://visitfaroeislands.com/en/whatson/places/place/mulafossur-the-waterfall-in-gasadalur?lang=en"}, {"title": "Visit Faroe Islands: island guide", "url": "https://visitfaroeislands.com/en/see-do/inspiration-guides/tips-from-travellers/best-things-to-do-in-the-faroe-islands"}], "quiz": {"question": "¿Hacia dónde cae Múlafossur?", "options": ["Hacia el océano", "En un desierto", "Dentro de una cueva"], "answer": 0, "explain": "La cascada Múlafossur cae desde un acantilado verde hacia el océano Atlántico."}, "quiz2": {"question": "¿Cuántas islas principales forman las Feroe?", "options": ["2", "18", "180"], "answer": 1, "explain": "Las Feroe son un grupo de 18 islas principales entre Islandia y Noruega."}}, {"id": "victoria", "name": "Cataratas Victoria", "country": "Zambia y Zimbabue", "lat": -17.924, "lon": 25.857, "category": "Nature", "hook": "Una pared de agua de más de un kilómetro.", "facts": ["El río Zambeze cae en una grieta profunda entre Zambia y Zimbabue.", "¡La cascada mide unos 1.700 metros de ancho, más de una milla!", "Su nombre local, Mosi-oa-Tunya, significa «el humo que truena»: ese «humo» es agua pulverizada."], "stretch": {"question": "¿El agua pulverizada puede formar un arcoíris?", "answer": "¡Sí! La luz del Sol puede desviarse y reflejarse dentro de las gotas, separándose en colores."}, "sources": [{"title": "UNESCO: Mosi-oa-Tunya / Victoria Falls", "url": "https://whc.unesco.org/en/list/509"}], "quiz": {"question": "¿Qué río cae por estas cataratas?", "options": ["Amazonas", "Zambeze", "Nilo"], "answer": 1, "explain": "El río Zambeze cae en una grieta profunda entre Zambia y Zimbabue."}, "quiz2": {"question": "¿Qué ancho tienen aproximadamente?", "options": ["17 metros", "170 metros", "1.700 metros"], "answer": 2, "explain": "¡La cascada mide unos 1.700 metros de ancho, más de una milla!"}}, {"id": "iceland-lights", "name": "Auroras de Islandia", "country": "Islandia", "lat": 64.941, "lon": -23.307, "category": "Nature", "hook": "Una montaña bajo un cielo brillante.", "facts": ["Cerca de la montaña Kirkjufell, a veces las auroras brillan sobre la costa.", "El Sol envía partículas diminutas al espacio. Algunas hacen brillar gases en lo alto de la atmósfera terrestre.", "Se necesitan cielos oscuros y buenas condiciones; las luces no aparecen todas las noches."], "stretch": {"question": "¿Las luces de la ciudad ayudan a ver auroras?", "answer": "No. Un lugar oscuro facilita ver una aurora tenue. Las cámaras pueden mostrar colores más intensos que tus ojos."}, "sources": [{"title": "Visit Iceland: Northern lights", "url": "https://www.visiticeland.com/article/northern-lights-in-iceland/"}, {"title": "NASA: What is an aurora?", "url": "https://spaceplace.nasa.gov/aurora/en/"}], "quiz": {"question": "¿Qué brilla sobre la montaña?", "options": ["Pintura en las nubes", "Auroras boreales", "Un televisor gigante"], "answer": 1, "explain": "Cerca de la montaña Kirkjufell, a veces las auroras brillan sobre la costa."}, "quiz2": {"question": "¿Dónde se forma la luz de la aurora?", "options": ["Dentro de la montaña", "Bajo el mar", "En lo alto de la atmósfera"], "answer": 2, "explain": "El Sol envía partículas diminutas al espacio. Algunas hacen brillar gases en lo alto de la atmósfera terrestre."}}, {"id": "maasai-mara", "name": "Masái Mara", "country": "Kenia", "lat": -1.493, "lon": 35.144, "category": "Nature", "hook": "Una pradera llena de vecinos salvajes.", "facts": ["Masái Mara es una gran zona de vida silvestre en Kenia, en África oriental.", "Ñus y cebras viajan entre esta zona y el Serengeti de Tanzania en busca de pasto fresco.", "Leones, guepardos, elefantes y jirafas también viven en este paisaje."], "stretch": {"question": "¿Qué pasa si las lluvias llegan tarde?", "answer": "El pasto fresco puede crecer en otro momento. Las manadas siguen la comida y el agua, no un calendario."}, "sources": [{"title": "Kenya Tourism Board: Maasai Mara", "url": "https://magicalkenya.com/"}, {"title": "Maasai Mara wildlife", "url": "https://webmail.magicalkenya.com/default.nsf/doc21/4YGEX3ADMY6?e=1&l=1&opendocument=&s=2"}], "quiz": {"question": "¿En qué país está Masái Mara?", "options": ["Islandia", "Ecuador", "Kenia"], "answer": 2, "explain": "Masái Mara es una gran zona de vida silvestre en Kenia, en África oriental."}, "quiz2": {"question": "¿Por qué se mueven las manadas?", "options": ["Para buscar pasto fresco", "Para ir de compras", "Para construir casas"], "answer": 0, "explain": "Ñus y cebras viajan entre esta zona y el Serengeti de Tanzania en busca de pasto fresco."}}]);
Object.assign(window.MLL_PHOTOS,{"faroe": {"src": "assets/wonders/faroe.jpg", "alt": "Múlafossur waterfall falls from the green cliffs at Gásadalur.", "credit": "Eric Welch eric_welch", "license": "CC0", "licenseUrl": "http://creativecommons.org/publicdomain/zero/1.0/deed.en", "source": "https://commons.wikimedia.org/wiki/File:Faroe_Islands_(Unsplash_eRwWGWkh0vU).jpg", "title": "File:Faroe Islands (Unsplash eRwWGWkh0vU).jpg", "width": 1200, "height": 800, "changes": "Resized and compressed; cards may crop.", "altEs": "La cascada Múlafossur cae desde los acantilados verdes de Gásadalur."}, "victoria": {"src": "assets/wonders/victoria-3.jpg", "alt": "Morning light and rising mist at Victoria Falls.", "credit": "lumoplank", "license": "CC0", "licenseUrl": "http://creativecommons.org/publicdomain/zero/1.0/deed.en", "source": "https://commons.wikimedia.org/wiki/File:Victoria_Falls_-_VicFalls3464.jpg", "width": 1200, "height": 800, "title": "File:Victoria_Falls_-_VicFalls3464.jpg", "changes": "Resized and compressed. Cards crop the photograph.", "altEs": "Luz de la mañana y neblina en las cataratas Victoria."}, "iceland-lights": {"src": "assets/wonders/iceland-lights.jpg", "alt": "Northern lights above Kirkjufell mountain in Iceland.", "credit": "vaidyanathan", "license": "CC BY-SA 4.0", "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0", "source": "https://commons.wikimedia.org/wiki/File:Aurora_Borealis_activity_on_top_of_the_Kirkjufell_mountain_in_September_2018.jpg", "width": 1200, "height": 857, "title": "File:Aurora Borealis activity on top of the Kirkjufell mountain in September 2018.jpg", "changes": "Resized and compressed. Cards crop the photograph.", "altEs": "Auroras boreales sobre Kirkjufell en Islandia."}, "maasai-mara": {"src": "assets/wonders/maasai-mara.jpg", "alt": "Wildebeest and zebras together on the Maasai Mara grasslands.", "credit": "Key45", "license": "CC BY 2.0", "licenseUrl": "https://creativecommons.org/licenses/by/2.0", "source": "https://commons.wikimedia.org/wiki/File:GnusAndZebrasInMaraMasai.jpg", "width": 1200, "height": 783, "title": "File:GnusAndZebrasInMaraMasai.jpg", "changes": "Resized and compressed. Cards crop the photograph.", "altEs": "Ñus y cebras juntos en las praderas de Masái Mara."}});
Object.assign(window.MLL_ES_PHOTO_ALT,{"faroe": "La cascada Múlafossur cae desde los acantilados verdes de Gásadalur.", "victoria": "Luz de la mañana y neblina en las cataratas Victoria.", "iceland-lights": "Auroras boreales sobre Kirkjufell en Islandia.", "maasai-mara": "Ñus y cebras juntos en las praderas de Masái Mara."});
Object.assign(window.MLL_GALLERY_A,{"faroe": [{"src": "assets/wonders/faroe-2.jpg", "alt": "The steep coastal cliffs of Suðuroy in the Faroe Islands.", "credit": "Erik Christensen", "license": "CC BY-SA 3.0", "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0", "source": "https://commons.wikimedia.org/wiki/File:Su%C3%B0uroy.FaroeIslands.2.jpg", "width": 1200, "height": 799, "title": "File:Suðuroy.FaroeIslands.2.jpg", "changes": "Resized and compressed. Cards crop the photograph.", "altEs": "Los acantilados costeros de Suðuroy en las islas Feroe."}, {"src": "assets/wonders/faroe-3.jpg", "alt": "Faroese sheep above the village of Sumba.", "credit": "kallerna", "license": "CC BY-SA 4.0", "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0", "source": "https://commons.wikimedia.org/wiki/File:Faroese_sheep_Sumba_1.jpg", "width": 1200, "height": 833, "title": "File:Faroese_sheep_Sumba_1.jpg", "changes": "Resized and compressed. Cards crop the photograph.", "altEs": "Ovejas de las Feroe sobre el pueblo de Sumba."}], "victoria": [{"src": "assets/wonders/victoria-2.jpg", "alt": "An aerial view shows the wide Zambezi River plunging into a narrow gorge.", "credit": "lumoplank", "license": "CC0", "licenseUrl": "http://creativecommons.org/publicdomain/zero/1.0/deed.en", "source": "https://commons.wikimedia.org/wiki/File:Victoria_Falls_-_VicFalls3456.jpg", "width": 1200, "height": 800, "title": "File:Victoria_Falls_-_VicFalls3456.jpg", "changes": "Resized and compressed. Cards crop the photograph.", "altEs": "Una vista aérea del ancho río Zambeze cayendo en una garganta estrecha."}, {"src": "assets/wonders/victoria.jpg", "alt": "Victoria Falls and its clouds of water spray.", "credit": "Diego Delso", "license": "CC BY-SA 4.0", "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0", "source": "https://commons.wikimedia.org/wiki/File:Cataratas_Victoria,_Zambia-Zimbabue,_2018-07-27,_DD_04.jpg", "width": 772, "height": 1200, "title": "File:Cataratas_Victoria,_Zambia-Zimbabue,_2018-07-27,_DD_04.jpg", "changes": "Resized and compressed. Cards crop the photograph.", "altEs": "Las cataratas Victoria y sus nubes de agua pulverizada."}], "iceland-lights": [{"src": "assets/wonders/iceland-lights-2.jpg", "alt": "Northern lights over Kirkjufell, seen from Grundarfjörður.", "credit": "Chr Grundo", "license": "CC BY-SA 4.0", "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0", "source": "https://commons.wikimedia.org/wiki/File:Northern_Lights_over_Kirkjufell_seen_from_Grundarfj%C3%B6r%C3%B0ur.jpg", "width": 1200, "height": 800, "title": "File:Northern Lights over Kirkjufell seen from Grundarfjörður.jpg", "changes": "Resized and compressed. Cards crop the photograph.", "altEs": "Auroras sobre Kirkjufell vistas desde Grundarfjörður."}, {"src": "assets/wonders/iceland-lights-3.jpg", "alt": "Kirkjufell mountain in daylight.", "credit": "Anjali Kiggal", "license": "CC BY-SA 4.0", "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0", "source": "https://commons.wikimedia.org/wiki/File:Kirkjufell_in_Iceland.jpg", "width": 1200, "height": 801, "title": "File:Kirkjufell_in_Iceland.jpg", "changes": "Resized and compressed. Cards crop the photograph.", "altEs": "La montaña Kirkjufell a la luz del día."}], "maasai-mara": [{"src": "assets/wonders/maasai-mara-2.jpg", "alt": "A cheetah with cubs in the Maasai Mara.", "credit": "Siddharth Maheshwari", "license": "CC BY-SA 3.0", "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0", "source": "https://commons.wikimedia.org/wiki/File:Cheetah_with_cubs.jpg", "width": 1200, "height": 644, "title": "File:Cheetah_with_cubs.jpg", "changes": "Resized and compressed. Cards crop the photograph.", "altEs": "Un guepardo con sus crías en Masái Mara."}, {"src": "assets/wonders/maasai-mara-3.jpg", "alt": "A giraffe in the Maasai Mara landscape.", "credit": "HasselbladWhisperer", "license": "CC0", "licenseUrl": "http://creativecommons.org/publicdomain/zero/1.0/deed.en", "source": "https://commons.wikimedia.org/wiki/File:Masai_Mara_Giraffe.jpg", "width": 1200, "height": 797, "title": "File:Masai_Mara_Giraffe.jpg", "changes": "Resized and compressed. Cards crop the photograph.", "altEs": "Una jirafa en el paisaje de Masái Mara."}]});
// Family ties supplied by Max's parent: keep place connections, omit relationship explanations.
(function(){
const notes={
'mar-del-plata':["Tío Eduardo is from Mar del Plata. Ask him what he loved doing by the sea!","Tío Eduardo es de Mar del Plata. ¡Pregúntale qué le gustaba hacer junto al mar!"],
'medellin':["Tía Andrea is from Medellín. Ask her about a favorite place in the city!","Tía Andrea es de Medellín. ¡Pregúntale por un lugar favorito de la ciudad!"],
'kirkland':["Dad is from Kirkland. Nana and your uncle still live here. Ask Dad about his favorite childhood adventure!","Papá es de Kirkland. Nana y tu tío todavía viven aquí. ¡Pregúntale por su aventura favorita de la infancia!"],
'las-terrenas':["Mom’s family celebrated her 40th birthday in Las Terrenas! Ask her about a favorite memory from the trip.","¡La familia de Mamá celebró sus 40 años en Las Terrenas! Pregúntale por un recuerdo favorito del viaje."],
'galapagos':["Mom and Dad visited the Galápagos Islands. Ask them which animal surprised them most!","Mamá y Papá visitaron las islas Galápagos. ¡Pregúntales qué animal los sorprendió más!"]};
for(const name of ['MLL_PLACES_FAMILY','MLL_FAMILY_EXTRA','MLL_FAMILY_NEW','MLL_ES_FAMILY','MLL_ES_FAMILY_EXTRA','MLL_ES_FAMILY_NEW'])for(const p of window[name]||[])if(notes[p.id])p.familyNote=notes[p.id][name.includes('_ES_')?1:0];
})();

;
window.MLL_NEW_LESSONS=[{"section": "works", "id": "cereal", "title": ["How does cereal get its shape?", "¿Cómo toma forma el cereal?"], "hook": ["A tiny factory in your breakfast bowl.", "Una pequeña fábrica en tu desayuno."], "facts": [["Cereal begins with grains, such as corn, wheat, rice or oats.", "Factories cook the grains and turn them into flakes, puffs or other shapes.", "Some cereals are toasted to make them crunchy before they go into a box."], ["El cereal empieza con granos, como maíz, trigo, arroz o avena.", "Las fábricas cocinan los granos y les dan forma de hojuelas, bolitas u otras figuras.", "Algunos cereales se tuestan para quedar crujientes antes de entrar en la caja."]], "sources": [{"title": "Post Consumer Brands: How cereal is made", "url": "https://www.postconsumerbrands.com/news/how-is-breakfast-cereal-made/"}], "photoKey": "works-cereal", "video": {"provider": "vimeo", "id": "748872196", "title": ["How Our Cereal Is Made — Let’s Get Cooking", "Cómo se fabrica el cereal — ¡A cocinar!"], "channel": "Post Consumer Brands", "language": "en", "start": 0, "sourceUrl": "https://vimeo.com/748872196", "duration": 108, "oembedVerified": true}, "notice": ["Look for a flake, a ring and a puff. Which shapes are in your bowl? Watch a real Post cereal factory at work.", "Busca una hojuela, un aro y una bolita. ¿Cuáles tienes en tu tazón? Mira una fábrica real de cereales Post."], "question": ["What do cereal makers start with?", "¿Con qué empiezan los fabricantes de cereal?"], "options": [["Grains", "Ice cubes", "Leaves"], ["Granos", "Cubos de hielo", "Hojas"]], "answer": 0, "source": "https://www.postconsumerbrands.com/news/how-is-breakfast-cereal-made/"}, {"section": "works", "id": "airplanes", "title": ["How can a giant plane fly?", "¿Cómo vuela un avión gigante?"], "hook": ["Heavy plane. Invisible air. Real science.", "Un avión pesado. Aire invisible. Ciencia real."], "facts": [["An airplane’s engines push it forward through the air.", "Air flowing around the wings creates lift, a force that helps hold the plane up.", "Moving parts on the wings and tail help the pilot steer."], ["Los motores empujan el avión hacia delante por el aire.", "El aire que pasa alrededor de las alas crea sustentación, una fuerza que ayuda a sostener el avión.", "Las partes móviles de las alas y la cola ayudan al piloto a dirigirlo."]], "sources": [{"title": "NASA: Airplane parts and functions", "url": "https://www1.grc.nasa.gov/beginners-guide-to-aeronautics/airplane-parts-function/"}], "photoKey": "works-airplanes", "video": {"provider": "youtube", "id": "VLpSxHwfU04", "title": ["How Airplanes Fly!", "¡Cómo vuelan los aviones!"], "channel": "SciShow Kids", "language": "en", "start": 0, "sourceUrl": "https://www.youtube.com/watch?v=VLpSxHwfU04", "officialTitle": "How Airplanes Fly! | Airplane Science | SciShow Kids", "oembedVerified": true}, "question": ["Which parts make most of a plane’s lift?", "¿Qué partes crean la mayor parte de la sustentación?"], "options": [["The wheels", "The wings", "The seats"], ["Las ruedas", "Las alas", "Los asientos"]], "answer": 1, "source": "https://www1.grc.nasa.gov/beginners-guide-to-aeronautics/airplane-parts-function/"}, {"section": "works", "id": "directions", "title": ["Find your way without a phone", "Encuentra el camino sin un teléfono"], "hook": ["The world leaves clues. Can you spot them?", "El mundo te da pistas. ¿Puedes encontrarlas?"], "facts": [["A compass uses Earth’s magnetic field to help you find north.", "The Sun rises on the eastern side of the sky and sets on the western side; the exact spot changes with the season.", "A tall building or mountain can be a landmark: something easy to recognize on your route."], ["Una brújula usa el campo magnético de la Tierra para ayudarte a encontrar el norte.", "El Sol sale por el lado este del cielo y se pone por el oeste; el punto exacto cambia según la estación.", "Un edificio alto o una montaña puede ser un punto de referencia: algo fácil de reconocer en tu ruta."]], "sources": [{"title": "National Park Service: Make a compass", "url": "https://home.nps.gov/articles/compass.htm"}], "photoKey": "works-directions", "video": {"provider": "youtube", "id": "ldSG_qVF83M", "title": ["Make Your Own Compass!", "¡Haz tu propia brújula!"], "channel": "SciShow Kids", "language": "en", "start": 0, "sourceUrl": "https://www.youtube.com/watch?v=ldSG_qVF83M", "officialTitle": "Make Your Own Compass!", "oembedVerified": true}, "notice": ["On your next walk with a grown-up, choose a landmark together. Never look straight at the Sun.", "En tu próximo paseo con un adulto, elijan un punto de referencia. Nunca mires directamente al Sol."], "question": ["Which tool can help you find north?", "¿Qué herramienta te ayuda a encontrar el norte?"], "options": [["A spoon", "A compass", "A stopwatch"], ["Una cuchara", "Una brújula", "Un cronómetro"]], "answer": 1, "source": "https://home.nps.gov/articles/compass.htm"}, {"section": "works", "id": "roller-coasters", "title": ["Why do roller coasters zoom?", "¿Por qué corren las montañas rusas?"], "hook": ["Up slowly. Down—whoosh!", "Suben despacio. Bajan… ¡a toda velocidad!"], "facts": [["Many roller coasters use a chain to pull the cars up the first big hill.", "Gravity pulls the cars downhill, turning stored energy into motion.", "Brakes slow the cars so they can stop at the station."], ["Muchas montañas rusas usan una cadena para subir los carros a la primera gran colina.", "La gravedad tira de los carros cuesta abajo y convierte la energía guardada en movimiento.", "Los frenos reducen la velocidad para que los carros se detengan en la estación."]], "sources": [{"title": "SciShow Kids: Why Roller Coasters Are Awesome", "url": "https://www.youtube.com/watch?v=VcRFh-dCxWE"}], "photoKey": "works-roller-coasters", "video": {"provider": "youtube", "id": "irkAtqm-eCs", "title": ["How Roller Coasters Actually Work", "Cómo funcionan las montañas rusas"], "channel": "Jared Owen", "language": "en", "start": 0, "sourceUrl": "https://www.youtube.com/watch?v=irkAtqm-eCs"}, "question": ["What pulls the cars downhill?", "¿Qué tira de los carros cuesta abajo?"], "options": [["Gravity", "A giant fan", "The riders’ voices"], ["La gravedad", "Un ventilador gigante", "Las voces de los pasajeros"]], "answer": 0, "source": "https://www.youtube.com/watch?v=VcRFh-dCxWE"}, {"section": "works", "id": "toilets", "title": ["Where does a flush go?", "¿Adónde va el agua del inodoro?"], "hook": ["Follow a hidden journey under the street.", "Sigue un viaje escondido bajo la calle."], "facts": [["A flush sends used water out of the toilet and into a pipe.", "In many towns, underground sewer pipes carry it to a treatment plant for cleaning.", "Some homes use a septic system instead, where a tank and soil help treat the water."], ["Al descargar, el agua usada sale del inodoro y entra en una tubería.", "En muchas ciudades, las tuberías subterráneas llevan el agua a una planta para limpiarla.", "Algunas casas usan un sistema séptico, donde un tanque y el suelo ayudan a tratar el agua."]], "sources": [{"title": "EPA: About small wastewater systems", "url": "https://www.epa.gov/small-and-rural-wastewater-systems/about-small-wastewater-systems"}], "photoKey": "works-toilets", "question": ["Why does used water go through treatment?", "¿Por qué se trata el agua usada?"], "options": [["To turn it blue", "To clean it", "To freeze it"], ["Para pintarla de azul", "Para limpiarla", "Para congelarla"]], "answer": 1, "source": "https://www.epa.gov/small-and-rural-wastewater-systems/about-small-wastewater-systems"}, {"section": "works", "id": "popcorn", "title": ["What makes popcorn POP?", "¿Qué hace explotar las palomitas?"], "hook": ["A tiny drop of water makes a big change.", "Una gotita de agua causa un gran cambio."], "facts": [["A popcorn kernel has a little water trapped inside a tough shell.", "Heat turns that water into steam, and pressure builds inside.", "The shell bursts and the soft inside puffs out into popcorn!"], ["Un grano de maíz para palomitas tiene un poco de agua dentro de una cáscara dura.", "El calor convierte el agua en vapor y la presión aumenta dentro.", "¡La cáscara se rompe y el interior se infla para formar una palomita!"]], "sources": [{"title": "SciShow Kids: Why Does Popcorn Pop", "url": "https://www.youtube.com/watch?v=Y0e7zGF5Ows"}], "photoKey": "works-popcorn", "video": {"provider": "youtube", "id": "Y0e7zGF5Ows", "title": ["Why Does Popcorn Pop?", "¿Por qué explotan las palomitas?"], "channel": "SciShow Kids", "language": "en", "start": 0, "sourceUrl": "https://www.youtube.com/watch?v=Y0e7zGF5Ows", "officialTitle": "Why Does Popcorn Pop? | The Science of Food! | SciShow Kids", "oembedVerified": true}, "question": ["What builds up inside a hot popcorn kernel?", "¿Qué se acumula dentro de un grano caliente?"], "options": [["Snow", "Steam pressure", "Sand"], ["Nieve", "Presión de vapor", "Arena"]], "answer": 1, "source": "https://www.youtube.com/watch?v=Y0e7zGF5Ows"}, {"section": "sports", "id": "baseballs", "title": ["What is inside a baseball?", "¿Qué hay dentro de una pelota de béisbol?"], "hook": ["It starts with a little core—and lots of yarn.", "Empieza con un pequeño centro… ¡y mucho hilo!"], "facts": [["A baseball has a small cork-and-rubber center called a pill.", "Layers of yarn are wrapped around the center.", "Workers sew two leather pieces over the outside; an MLB ball has 108 double stitches."], ["Una pelota de béisbol tiene un pequeño centro de corcho y goma.", "Se enrollan capas de hilo alrededor del centro.", "Se cosen dos piezas de cuero por fuera; una pelota de la MLB tiene 108 puntadas dobles."]], "sources": [{"title": "Washington State University: How are baseballs made?", "url": "https://askdruniverse.wsu.edu/2022/01/07/how-are-baseballs-made/"}], "photoKey": "sports-baseballs", "video": {"provider": "youtube", "id": "cm74QYZS7uA", "title": ["All About Baseball: How It’s Made", "Todo sobre el béisbol: cómo se fabrica"], "channel": "Science Channel", "language": "en", "start": 0, "sourceUrl": "https://www.youtube.com/watch?v=cm74QYZS7uA", "officialTitle": "All About Baseball | How It's Made | Science Channel", "oembedVerified": true}, "question": ["What is wrapped around a baseball’s center?", "¿Qué se enrolla alrededor del centro?"], "options": [["Yarn", "Leaves", "Bubble wrap"], ["Hilo", "Hojas", "Plástico de burbujas"]], "answer": 0, "source": "https://askdruniverse.wsu.edu/2022/01/07/how-are-baseballs-made/"}, {"section": "sports", "id": "basketballs", "title": ["How do you build a bounce?", "¿Cómo se fabrica un rebote?"], "hook": ["A basketball has more layers than you think.", "Una pelota de básquet tiene más capas de las que imaginas."], "facts": [["Inside a basketball is a rubber bladder that holds air.", "Thread wrapped around it helps the ball keep its round shape.", "An outer cover adds grip, and a small valve lets a pump add air."], ["Dentro de una pelota de básquet hay una cámara de goma que guarda aire.", "El hilo enrollado alrededor ayuda a mantener su forma redonda.", "La cubierta exterior ayuda a sujetarla y una válvula permite inflarla."]], "sources": [{"title": "University of Illinois: Making basketballs", "url": "https://van.physics.illinois.edu/ask/listing/943"}, {"title": "Science Channel: How basketballs are made", "url": "https://www.youtube.com/watch?v=gQvQaLJRt7A"}], "photoKey": "sports-basketballs", "video": {"provider": "youtube", "id": "gQvQaLJRt7A", "title": ["Basketballs: How It’s Made", "Pelotas de básquet: cómo se fabrican"], "channel": "Science Channel", "language": "en", "start": 0, "sourceUrl": "https://www.youtube.com/watch?v=gQvQaLJRt7A", "officialTitle": "Basketballs, Scoreboards and More for Tournament Time! | How It's Made | Science Channel", "oembedVerified": true}, "question": ["What holds the air inside a basketball?", "¿Qué guarda el aire dentro de la pelota?"], "options": [["A wooden box", "A rubber bladder", "A metal spring"], ["Una caja de madera", "Una cámara de goma", "Un resorte de metal"]], "answer": 1, "source": "https://van.physics.illinois.edu/ask/listing/943"}, {"section": "sports", "id": "basketball-history", "title": ["Basketball began with peaches?", "¿El básquet empezó con duraznos?"], "hook": ["The first hoops were real fruit baskets.", "Los primeros aros eran canastas de fruta."], "facts": [["James Naismith invented basketball in 1891 for an indoor winter game.", "The first players aimed a soccer ball at peach baskets.", "Those baskets had closed bottoms, so someone had to get the ball back after a score!"], ["James Naismith inventó el básquet en 1891 para jugar bajo techo en invierno.", "Los primeros jugadores lanzaban una pelota de fútbol a canastas de duraznos.", "¡Las canastas tenían fondo, así que alguien tenía que sacar la pelota después de encestar!"]], "sources": [{"title": "Springfield College: Birthplace of basketball", "url": "https://springfield.edu/about/birthplace-of-basketball"}], "photoKey": "sports-basketball-history", "question": ["What did the first basketball players aim for?", "¿A qué apuntaban los primeros jugadores?"], "options": [["Swimming pools", "Peach baskets", "Car tires"], ["Piscinas", "Canastas de duraznos", "Llantas de autos"]], "answer": 1, "source": "https://springfield.edu/about/birthplace-of-basketball"}, {"section": "sports", "id": "soccer-balls", "title": ["Why does a soccer ball have patches?", "¿Por qué tiene paneles un balón de fútbol?"], "hook": ["Flat pieces become a round ball.", "Las piezas planas se convierten en una pelota redonda."], "facts": [["A soccer ball’s outside is made of shaped pieces called panels.", "A famous black-and-white design has 12 five-sided pieces and 20 six-sided pieces.", "Not every ball uses that pattern; modern balls can use fewer, differently shaped panels."], ["La cubierta de un balón de fútbol se hace con piezas llamadas paneles.", "Un famoso diseño blanco y negro tiene 12 piezas de cinco lados y 20 de seis lados.", "No todos usan ese diseño; los balones modernos pueden tener menos paneles y otras formas."]], "sources": [{"title": "adidas: World Cup ball history", "url": "https://www.adidas.com/us/blog/the-complete-history-of-adidas-world-cup-match-balls"}], "photoKey": "sports-soccer-balls", "question": ["Do all soccer balls have the same panel pattern?", "¿Todos los balones tienen el mismo diseño de paneles?"], "options": [["Yes, every one", "No, designs can differ", "Soccer balls have no panels"], ["Sí, todos", "No, los diseños cambian", "Los balones no tienen paneles"]], "answer": 1, "source": "https://www.adidas.com/us/blog/the-complete-history-of-adidas-world-cup-match-balls"}, {"section": "sports", "id": "swimming", "title": ["Why do swimmers become arrows?", "¿Por qué los nadadores parecen flechas?"], "hook": ["A long, narrow shape slips through water.", "Una forma larga y estrecha se desliza por el agua."], "facts": [["Water pushes back against a moving swimmer; that resistance is called drag.", "Stretching the arms forward with hands together makes a smoother shape.", "Swimmers practice this streamlined shape after pushing off a wall."], ["El agua se opone al nadador en movimiento; esa resistencia se llama arrastre.", "Estirar los brazos al frente con las manos juntas crea una forma más lisa.", "Los nadadores practican esta posición después de impulsarse desde la pared."]], "sources": [{"title": "U.S. Masters Swimming: Perfect your streamline", "url": "https://www.usms.org/fitness-and-training/articles-and-videos/articles/how-to-perfect-your-swimming-streamline"}], "photoKey": "sports-swimming", "question": ["Which shape helps a swimmer slip through the water?", "¿Qué forma ayuda a deslizarse por el agua?"], "options": [["Arms and legs spread wide", "A long, narrow shape", "A sitting position"], ["Brazos y piernas muy abiertos", "Una forma larga y estrecha", "Una posición sentada"]], "answer": 1, "source": "https://www.usms.org/fitness-and-training/articles-and-videos/articles/how-to-perfect-your-swimming-streamline"}, {"section": "sports", "id": "skateboards", "title": ["How can a skateboard jump?", "¿Cómo salta una patineta?"], "hook": ["Your feet and a moving board work together.", "Tus pies y la patineta trabajan juntos."], "facts": [["A skateboard has a deck, four wheels and metal parts called trucks.", "In an ollie, the skater pops the tail down and jumps.", "The front foot guides the board upward and helps level it in the air."], ["Una patineta tiene una tabla, cuatro ruedas y piezas de metal llamadas ejes.", "En un ollie, el patinador golpea la parte trasera contra el suelo y salta.", "El pie delantero guía la tabla hacia arriba y ayuda a nivelarla en el aire."]], "sources": [{"title": "Exploratorium: Skateboard science", "url": "https://annex.exploratorium.edu/skateboarding/"}], "photoKey": "sports-skateboards", "question": ["What is an ollie?", "¿Qué es un ollie?"], "options": [["A skateboard jump", "A baseball pitch", "A swimming turn"], ["Un salto en patineta", "Un lanzamiento de béisbol", "Un giro de natación"]], "answer": 0, "source": "https://annex.exploratorium.edu/skateboarding/"}, {"section": "ocean", "id": "octopus", "title": ["The ocean’s disguise expert", "El experto del océano en disfraces"], "hook": ["Eight arms. Countless hiding tricks.", "Ocho brazos. Muchísimos trucos para esconderse."], "facts": [["An octopus can quickly change its skin’s color to blend with its surroundings.", "Some can also make their skin look bumpy like nearby rocks.", "Its soft body can squeeze into tiny gaps, but its hard beak must fit too."], ["Un pulpo puede cambiar rápidamente el color de su piel para confundirse con el entorno.", "Algunos también pueden hacer que su piel se vea rugosa como las rocas cercanas.", "Su cuerpo blando cabe en huecos pequeños, pero su pico duro también debe pasar."]], "sources": [{"title": "Monterey Bay Aquarium: Giant Pacific octopus", "url": "https://www.montereybayaquarium.org/animals-the-ocean/animals-a-to-z/giant-pacific-octopus"}], "photoKey": "ocean-octopus", "video": {"provider": "youtube", "id": "XyDNTfmFmJw", "title": ["The Outrageous Octopus!", "¡El increíble pulpo!"], "channel": "SciShow Kids", "language": "en", "start": 0, "sourceUrl": "https://www.youtube.com/watch?v=XyDNTfmFmJw", "officialTitle": "The Outrageous Octopus!", "oembedVerified": true}, "question": ["Why might an octopus change color?", "¿Por qué puede cambiar de color un pulpo?"], "options": [["To hide", "To grow wings", "To turn into a rock"], ["Para esconderse", "Para tener alas", "Para convertirse en roca"]], "answer": 0, "source": "https://www.montereybayaquarium.org/animals-the-ocean/animals-a-to-z/giant-pacific-octopus"}, {"section": "ocean", "id": "anglerfish", "title": ["A fish with its own fishing rod", "Un pez con su propia caña de pescar"], "hook": ["Meet the ocean’s patient fishers.", "Conoce a los pacientes pescadores del océano."], "facts": [["Anglerfish use a lure near their mouths to draw small animals closer.", "The sea toad in this photo is an anglerfish that lives near the seafloor; its lure does not glow.", "Some other deep-sea anglerfish have glowing lures, lit by tiny bacteria inside."], ["Los peces pescadores usan un señuelo cerca de la boca para atraer animales pequeños.", "El pez sapo de esta foto es un pez pescador que vive cerca del fondo; su señuelo no brilla.", "Otros peces pescadores abisales tienen señuelos que brillan gracias a bacterias diminutas en su interior."]], "sources": [{"title": "MBARI: Deep-sea anglerfish", "url": "https://www.mbari.org/animal/deep-sea-anglerfish/"}], "photoKey": "ocean-anglerfish", "video": {"provider": "youtube", "id": "VqPMP9X-89o", "title": ["The anglerfish: deep-sea fishing", "El pez pescador de las profundidades"], "channel": "MBARI", "language": "en", "start": 0, "sourceUrl": "https://www.youtube.com/watch?v=VqPMP9X-89o", "officialTitle": "The anglerfish: The original approach to deep-sea fishing", "oembedVerified": true}, "question": ["What does an anglerfish’s lure help it do?", "¿Para qué sirve el señuelo de un pez pescador?"], "options": [["Attract food", "Warm the ocean", "Make a rainbow"], ["Para atraer comida", "Para calentar el océano", "Para hacer un arcoíris"]], "answer": 0, "source": "https://www.mbari.org/animal/deep-sea-anglerfish/"}, {"section": "ocean", "id": "whale-songs", "title": ["The ocean has singers", "El océano tiene cantantes"], "hook": ["Listen for a whale-sized song.", "Escucha una canción del tamaño de una ballena."], "facts": [["Male humpback whales make long songs with repeating patterns of sounds.", "Their songs can change over time.", "Scientists listen with underwater microphones called hydrophones."], ["Los machos de ballena jorobada cantan canciones largas con sonidos que se repiten.", "Sus canciones pueden cambiar con el tiempo.", "Los científicos escuchan con micrófonos submarinos llamados hidrófonos."]], "sources": [{"title": "NOAA: Mysteries of humpback whale song", "url": "https://sanctuaries.noaa.gov/news/sep22/mysteries-of-humpback-whale-song.html"}], "photoKey": "ocean-whale-songs", "question": ["What tool helps scientists hear whales underwater?", "¿Qué herramienta permite escuchar ballenas bajo el agua?"], "options": [["A telescope", "A hydrophone", "A compass"], ["Un telescopio", "Un hidrófono", "Una brújula"]], "answer": 1, "source": "https://sanctuaries.noaa.gov/news/sep22/mysteries-of-humpback-whale-song.html"}, {"section": "ocean", "id": "coral-reefs", "title": ["A city built by tiny animals", "Una ciudad hecha por animales diminutos"], "hook": ["Coral is alive—and its neighbors are amazing.", "El coral está vivo y tiene vecinos increíbles."], "facts": [["Corals are animals, even though many look like rocks or plants.", "Tiny coral animals called polyps build hard skeletons that can grow into reefs.", "Reef holes and branches give fish places to hide and find food."], ["Los corales son animales, aunque muchos parecen rocas o plantas.", "Pequeños animales llamados pólipos construyen esqueletos duros que pueden formar arrecifes.", "Los huecos y ramas del arrecife dan a los peces lugares para esconderse y buscar comida."]], "sources": [{"title": "NOAA: Coral reef ecosystems", "url": "https://sanctuaries.noaa.gov/visit/ecosystems/"}], "photoKey": "ocean-coral-reefs", "video": {"provider": "youtube", "id": "61RzwbaSoeU", "title": ["Check Out the Great Barrier Reef!", "¡Conoce la Gran Barrera de Coral!"], "channel": "SciShow Kids", "language": "en", "start": 0, "sourceUrl": "https://www.youtube.com/watch?v=61RzwbaSoeU", "officialTitle": "Check Out the Great Barrier Reef!", "oembedVerified": true}, "question": ["What are corals?", "¿Qué son los corales?"], "options": [["Animals", "Plastic toys", "Underwater flowers"], ["Animales", "Juguetes de plástico", "Flores submarinas"]], "answer": 0, "source": "https://sanctuaries.noaa.gov/visit/ecosystems/"}, {"section": "ocean", "id": "sea-turtles", "title": ["A turtle with a built-in compass?", "¿Una tortuga con brújula incorporada?"], "hook": ["Long journeys without road signs.", "Viajes largos sin letreros de carretera."], "facts": [["Sea turtles can use Earth’s magnetic field as a clue to find their way.", "Many females return to the region where they hatched to lay eggs.", "They also use other clues, so their navigation is more than one simple trick."], ["Las tortugas marinas pueden usar el campo magnético de la Tierra para orientarse.", "Muchas hembras vuelven a la región donde nacieron para poner huevos.", "También usan otras pistas, así que orientarse requiere más de un truco."]], "sources": [{"title": "USGS: Animals and magnetic navigation", "url": "https://www.usgs.gov/faqs/do-animals-use-magnetic-field-orientation"}], "photoKey": "ocean-sea-turtles", "video": {"provider": "youtube", "id": "pCWUPC3fdvM", "title": ["Turtle Travel Tips", "Consejos de viaje de las tortugas"], "channel": "SciShow Kids", "language": "en", "start": 0, "sourceUrl": "https://www.youtube.com/watch?v=pCWUPC3fdvM", "officialTitle": "Turtle Travel Tips: How Magnets Can Help Us Navigate | Magnetoreception", "oembedVerified": true}, "question": ["Which invisible clue can help sea turtles navigate?", "¿Qué pista invisible ayuda a las tortugas marinas?"], "options": [["Earth’s magnetic field", "Traffic lights", "A printed road map"], ["El campo magnético de la Tierra", "Los semáforos", "Un mapa de carreteras"]], "answer": 0, "source": "https://www.usgs.gov/faqs/do-animals-use-magnetic-field-orientation"}, {"section": "ocean", "id": "ocean-vents", "title": ["Hot springs on the ocean floor", "Manantiales calientes en el fondo del mar"], "hook": ["A dark world where life has another recipe.", "Un mundo oscuro donde la vida usa otra receta."], "facts": [["Seawater slips into cracks, heats up underground and flows out of vents.", "Some vents build tall mineral chimneys on the seafloor.", "Microbes use chemicals for energy, helping feed animals where sunlight cannot reach."], ["El agua entra en grietas, se calienta bajo el suelo y sale por chimeneas.", "Algunas chimeneas crecen con los minerales en el fondo del mar.", "Los microbios usan sustancias químicas para obtener energía y ayudan a alimentar animales donde no llega el Sol."]], "sources": [{"title": "NOAA: What is a hydrothermal vent?", "url": "https://oceanservice.noaa.gov/facts/vents.html"}], "photoKey": "ocean-ocean-vents", "question": ["What provides energy for many microbes near deep-sea vents?", "¿Qué da energía a muchos microbios cerca de estas chimeneas?"], "options": [["Sunlight on the seafloor", "Chemicals", "Lightning"], ["Luz del Sol en el fondo", "Sustancias químicas", "Rayos"]], "answer": 1, "source": "https://oceanservice.noaa.gov/facts/vents.html"}, {"section": "animals", "id": "cheetah", "title": ["Cheetah", "Guepardo"], "name": ["Cheetah", "Guepardo"], "specialty": ["Super speed", "Supervelocidad"], "icon": "animal", "facts": [["A cheetah is the fastest animal on land.", "Its flexible back and long legs help it take huge running strides.", "It sprints for a short chase, then needs a rest."], ["El guepardo es el animal más rápido en tierra.", "Su espalda flexible y sus largas patas le ayudan a dar grandes zancadas.", "Corre muy rápido por poco tiempo y luego necesita descansar."]], "question": ["Is a cheetah built for a short sprint or a long marathon?", "¿El guepardo está hecho para una carrera corta o un maratón?"], "options": [["A long marathon", "A short sprint", "Neither"], ["Un maratón largo", "Una carrera corta", "Ninguna"]], "answer": 1, "source": "https://animals.sandiegozoo.org/animals/cheetah"}, {"section": "animals", "id": "octopus", "title": ["Octopus", "Pulpo"], "name": ["Octopus", "Pulpo"], "specialty": ["Hide-and-seek master", "Maestro del escondite"], "icon": "animal", "facts": [["An octopus can change the color and texture of its skin.", "Blending into rocks or sand helps it hide from hunters.", "It has eight arms lined with suckers that grip and explore."], ["Un pulpo puede cambiar el color y la textura de su piel.", "Parecerse a las rocas o la arena le ayuda a esconderse de sus cazadores.", "Tiene ocho brazos con ventosas para agarrar y explorar."]], "question": ["Why change its skin to look like a rock?", "¿Por qué cambia su piel para parecer una roca?"], "options": [["To grow heavier", "To become a rock", "To hide"], ["Para pesar más", "Para volverse roca", "Para esconderse"]], "answer": 2, "source": "https://ocean.si.edu/ocean-life/invertebrates/how-octopuses-and-squids-change-color"}, {"section": "animals", "id": "bat", "title": ["Bat", "Murciélago"], "name": ["Bat", "Murciélago"], "specialty": ["Finding with echoes", "Encuentra con ecos"], "icon": "animal", "facts": [["Many bats send out high sounds and listen for the echoes.", "Those echoes help them find insects and dodge objects in the dark.", "This skill is called echolocation; bats can also see with their eyes."], ["Muchos murciélagos emiten sonidos agudos y escuchan sus ecos.", "Los ecos les ayudan a encontrar insectos y evitar objetos en la oscuridad.", "Esta habilidad se llama ecolocalización; también ven con sus ojos."]], "question": ["What bounces back to help a bat find an insect?", "¿Qué regresa para ayudar al murciélago a encontrar un insecto?"], "options": [["An echo", "A smell", "A shadow"], ["Un eco", "Un olor", "Una sombra"]], "answer": 0, "source": "https://www.nps.gov/subjects/bats/echolocation.htm"}, {"section": "animals", "id": "elephant", "title": ["Elephant", "Elefante"], "name": ["Elephant", "Elefante"], "specialty": ["Mighty trunk", "Trompa poderosa"], "icon": "animal", "facts": [["An elephant uses its trunk to grab food, smell, and spray water.", "The trunk is strong enough to move heavy branches and gentle enough to pick up small food.", "It has no bones inside: muscles do the bending!"], ["El elefante usa su trompa para agarrar comida, oler y rociar agua.", "Su trompa mueve ramas pesadas y también recoge comida pequeña con cuidado.", "¡No tiene huesos dentro: los músculos la doblan!"]], "question": ["What helps a trunk bend in so many directions?", "¿Qué ayuda a la trompa a doblarse tanto?"], "options": [["A metal hinge", "Muscles", "A bendy bone"], ["Una bisagra de metal", "Los músculos", "Un hueso flexible"]], "answer": 1, "source": "https://animals.sandiegozoo.org/animals/elephant"}, {"section": "animals", "id": "owl", "title": ["Owl", "Búho"], "name": ["Owl", "Búho"], "specialty": ["Quiet flight", "Vuelo silencioso"], "icon": "animal", "facts": [["Many owls have soft feathers and fringed wing edges that quiet their flight.", "Flying quietly helps them listen for food and sneak closer.", "Their excellent hearing helps them find small animals at night."], ["Muchos búhos tienen plumas suaves y bordes con flecos que reducen el ruido al volar.", "Volar sin ruido les ayuda a escuchar y acercarse a su comida.", "Su gran oído les permite encontrar animales pequeños de noche."]], "question": ["Why is quiet flight useful to an owl?", "¿Por qué le sirve al búho volar sin ruido?"], "options": [["It makes more wind", "It makes the owl glow", "It helps it hear and sneak closer"], ["Produce más viento", "Hace brillar al búho", "Le ayuda a escuchar y acercarse"]], "answer": 2, "source": "https://www.allaboutbirds.org/news/to-catch-voles-under-the-snow-great-gray-owls-must-overcome-an-acoustic-mirage/"}, {"section": "animals", "id": "axolotl", "title": ["Axolotl", "Ajolote"], "name": ["Axolotl", "Ajolote"], "specialty": ["Regrowing limbs", "Regenera sus patas"], "icon": "animal", "facts": [["An axolotl can regrow a lost leg, including its bones and muscles.", "The feathery parts beside its head are gills that take oxygen from water.", "This unusual salamander comes from Mexico."], ["Un ajolote puede regenerar una pata perdida, con huesos y músculos.", "Las partes plumosas junto a su cabeza son branquias que toman oxígeno del agua.", "Esta salamandra tan especial es de México."]], "question": ["What are the feathery parts beside its head?", "¿Qué son las partes plumosas junto a su cabeza?"], "options": [["Gills", "Wings", "Flowers"], ["Branquias", "Alas", "Flores"]], "answer": 0, "source": "https://animals.sandiegozoo.org/animals/axolotl"}, {"section": "animals", "id": "gecko", "title": ["Gecko", "Geco"], "name": ["Gecko", "Geco"], "specialty": ["Wall walking", "Camina por paredes"], "icon": "animal", "facts": [["Many geckos can climb smooth walls using special toe pads.", "Tiny hairlike structures on those pads help the feet cling to a surface.", "Their feet do this without dripping glue!"], ["Muchos gecos trepan paredes lisas con almohadillas especiales en los dedos.", "Estructuras diminutas parecidas a pelos ayudan a sus patas a pegarse.", "¡Sus patas lo hacen sin soltar pegamento!"]], "question": ["What helps many geckos grip a wall?", "¿Qué ayuda a muchos gecos a sujetarse a una pared?"], "options": [["Tiny wheels", "Tiny hairlike structures", "Wet glue"], ["Ruedas diminutas", "Estructuras parecidas a pelos", "Pegamento húmedo"]], "answer": 1, "source": "https://sdzwildlifeexplorers.org/animals/gecko"}, {"section": "animals", "id": "chameleon", "title": ["Chameleon", "Camaleón"], "name": ["Chameleon", "Camaleón"], "specialty": ["Lightning tongue", "Lengua veloz"], "icon": "animal", "facts": [["A chameleon shoots out a long, sticky tongue to catch insects.", "Its eyes can look in different directions while it searches.", "Its colors can change to send signals to other chameleons, not just to hide."], ["El camaleón lanza una lengua larga y pegajosa para atrapar insectos.", "Sus ojos miran en distintas direcciones mientras busca.", "También cambia de color para enviar señales a otros camaleones, no solo para esconderse."]], "question": ["What catches the insect?", "¿Qué atrapa al insecto?"], "options": [["Its tail", "Its toes", "Its sticky tongue"], ["La cola", "Los dedos", "La lengua pegajosa"]], "answer": 2, "source": "https://animals.sandiegozoo.org/animals/chameleon"}, {"section": "animals", "id": "peregrine", "title": ["Peregrine falcon", "Halcón peregrino"], "name": ["Peregrine falcon", "Halcón peregrino"], "specialty": ["Super dive", "Picado veloz"], "icon": "animal", "facts": [["A peregrine falcon folds its wings and dives through the air.", "In a steep hunting dive, it can reach about 200 miles per hour.", "That is its diving speed, not its speed during ordinary flying."], ["El halcón peregrino pliega sus alas y se lanza en picado.", "En un picado de caza puede alcanzar unos 320 kilómetros por hora.", "Esa es su velocidad al caer en picado, no en un vuelo normal."]], "question": ["When does a peregrine reach its greatest speed?", "¿Cuándo alcanza su mayor velocidad?"], "options": [["During a steep dive", "While sitting", "While walking"], ["En un picado", "Cuando está posado", "Cuando camina"]], "answer": 0, "source": "https://www.allaboutbirds.org/guide/peregrine_falcon/overview"}, {"section": "animals", "id": "mantis-shrimp", "title": ["Mantis shrimp", "Camarón mantis"], "name": ["Mantis shrimp", "Camarón mantis"], "specialty": ["Super punch", "Supergolpe"], "icon": "animal", "facts": [["Some mantis shrimp have club-shaped front limbs that strike incredibly fast.", "A powerful strike can crack the shell of a crab or snail.", "There are also mantis shrimp with sharp limbs for spearing food."], ["Algunos camarones mantis tienen patas delanteras como mazos que golpean muy rápido.", "Un golpe poderoso puede romper la concha de un caracol o el caparazón de un cangrejo.", "Otros tienen patas afiladas para atrapar su comida."]], "question": ["What can a smashing mantis shrimp break open?", "¿Qué puede romper un camarón mantis con su golpe?"], "options": [["A mountain", "A hard shell", "The Moon"], ["Una montaña", "Una concha dura", "La Luna"]], "answer": 1, "source": "https://www.si.edu/collections/snapshot/behold-mantis-shrimp"}, {"section": "animals", "id": "archerfish", "title": ["Archerfish", "Pez arquero"], "name": ["Archerfish", "Pez arquero"], "specialty": ["Water shooter", "Lanza agua"], "icon": "animal", "facts": [["An archerfish shoots a jet of water from its mouth.", "It aims at insects resting above the water and knocks them down for a meal.", "It can adjust its aim even though light bends where air meets water."], ["El pez arquero lanza un chorro de agua por la boca.", "Apunta a insectos sobre el agua y los hace caer para comerlos.", "Ajusta su puntería aunque la luz se dobla al pasar del aire al agua."]], "question": ["Why does an archerfish shoot water?", "¿Por qué lanza agua el pez arquero?"], "options": [["To wash leaves", "To build a nest", "To knock insects into the water"], ["Para lavar hojas", "Para hacer un nido", "Para hacer caer insectos al agua"]], "answer": 2, "source": "https://www.aquariumofpacific.org/onlinelearningcenter/species/banded_archerfish/"}, {"section": "animals", "id": "electric-eel", "title": ["Electric eel", "Anguila eléctrica"], "name": ["Electric eel", "Anguila eléctrica"], "specialty": ["Living electricity", "Electricidad viva"], "icon": "animal", "facts": [["Special cells in an electric eel’s body make electric signals.", "Small signals help it explore muddy water; strong shocks help it catch food.", "Despite its name, it is a kind of knifefish rather than a true eel."], ["Células especiales de su cuerpo producen señales eléctricas.", "Las señales pequeñas le ayudan a explorar agua turbia; las descargas fuertes le ayudan a cazar.", "A pesar de su nombre, pertenece al grupo de los peces cuchillo, no al de las verdaderas anguilas."]], "question": ["What makes its electric signals?", "¿Qué produce sus señales eléctricas?"], "options": [["Special body cells", "A wall outlet", "Lightning clouds"], ["Células especiales", "Un enchufe", "Nubes de tormenta"]], "answer": 0, "source": "https://www.nationalzoo.si.edu/animals/electric-eel"}, {"section": "animals", "id": "dung-beetle", "title": ["Dung beetle", "Escarabajo pelotero"], "name": ["Dung beetle", "Escarabajo pelotero"], "specialty": ["Nature’s recycler", "Reciclador natural"], "icon": "animal", "facts": [["Some dung beetles roll animal poop into balls bigger than themselves.", "They use dung as food or as a place for their young to grow.", "Burying it puts nutrients back into the soil."], ["Algunos escarabajos peloteros hacen bolas de popó más grandes que ellos.", "La usan como comida o como lugar donde crecen sus crías.", "Al enterrarla devuelven nutrientes al suelo."]], "question": ["How does burying dung help the ground?", "¿Cómo ayuda al suelo enterrar el excremento?"], "options": [["It turns soil into glass", "It returns nutrients to soil", "It removes all plants"], ["Convierte el suelo en vidrio", "Devuelve nutrientes al suelo", "Quita todas las plantas"]], "answer": 1, "source": "https://animals.sandiegozoo.org/animals/dung-beetle"}, {"section": "animals", "id": "sea-otter", "title": ["Sea otter", "Nutria marina"], "name": ["Sea otter", "Nutria marina"], "specialty": ["Rock tools", "Herramientas de roca"], "icon": "animal", "facts": [["Sea otters can use rocks as tools to open hard-shelled food.", "Loose skin under their front legs forms pockets for storing food during dives.", "Their thick fur traps air to help keep them warm."], ["Las nutrias marinas pueden usar piedras para abrir comida con concha dura.", "La piel suelta bajo sus patas delanteras forma bolsillos para guardar comida al bucear.", "Su pelaje espeso atrapa aire y les ayuda a conservar el calor."]], "question": ["Which tool can a sea otter use to open food?", "¿Qué herramienta usa una nutria marina para abrir comida?"], "options": [["A leaf fan", "A pencil", "A rock"], ["Un abanico de hojas", "Un lápiz", "Una piedra"]], "answer": 2, "source": "https://www.montereybayaquarium.org/animals-the-ocean/animals-a-to-z/sea-otter"}, {"section": "animals", "id": "beaver", "title": ["Beaver", "Castor"], "name": ["Beaver", "Castor"], "specialty": ["Dam builder", "Constructor de presas"], "icon": "animal", "facts": [["Beavers cut branches with their strong front teeth.", "They use wood, mud, and stones to build dams that hold back water.", "The pond can help keep the entrance to their home underwater."], ["Los castores cortan ramas con sus fuertes dientes delanteros.", "Usan madera, barro y piedras para construir presas que retienen agua.", "El estanque puede mantener la entrada de su casa bajo el agua."]], "question": ["What does a beaver dam do?", "¿Qué hace la presa de un castor?"], "options": [["Holds back water to make a pond", "Makes drinking water salty", "Drains the whole river"], ["Retiene agua para formar un estanque", "Vuelve salada el agua", "Vacía todo el río"]], "answer": 0, "source": "https://nationalzoo.si.edu/animals/beaver"}, {"section": "animals", "id": "hummingbird", "title": ["Hummingbird", "Colibrí"], "name": ["Hummingbird", "Colibrí"], "specialty": ["Hover power", "Flota en el aire"], "icon": "animal", "facts": [["A hummingbird can hover in front of a flower while its wings beat rapidly.", "It drinks sweet nectar and also eats tiny insects and spiders.", "Its wings move in a special way that lets it stay nearly in one spot."], ["Un colibrí puede mantenerse frente a una flor batiendo sus alas muy rápido.", "Bebe néctar dulce y también come insectos y arañas diminutos.", "Sus alas se mueven de una forma especial que le permite quedarse casi en un mismo sitio."]], "question": ["What does hovering mean?", "¿Qué significa mantenerse suspendido?"], "options": [["Sleeping underwater", "Staying nearly in one spot in the air", "Walking backward"], ["Dormir bajo el agua", "Quedarse casi en un mismo sitio en el aire", "Caminar hacia atrás"]], "answer": 1, "source": "https://www.allaboutbirds.org/news/hummingbirds-flight-beauty-costa-anna-california/"}, {"section": "animals", "id": "woodpecker", "title": ["Woodpecker", "Pájaro carpintero"], "name": ["Woodpecker", "Pájaro carpintero"], "specialty": ["Tree toolkit", "Herramientas para árboles"], "icon": "animal", "facts": [["A woodpecker uses its strong beak to make holes in wood.", "Many use long tongues to pull insects from tiny spaces.", "Holes they leave behind can become homes for other birds."], ["El pájaro carpintero usa su pico fuerte para hacer agujeros en madera.", "Muchos usan lenguas largas para sacar insectos de espacios pequeños.", "Sus agujeros pueden convertirse en casas para otras aves."]], "question": ["Which body part can reach insects inside narrow holes?", "¿Qué parte alcanza insectos en agujeros estrechos?"], "options": [["Its wing", "Its tail", "Its long tongue"], ["El ala", "La cola", "La lengua larga"]], "answer": 2, "source": "https://academy.allaboutbirds.org/built-to-peck-how-woodpeckers-avoid-brain-injury/"}, {"section": "animals", "id": "penguin", "title": ["Emperor penguin", "Pingüino emperador"], "name": ["Emperor penguin", "Pingüino emperador"], "specialty": ["Warm teamwork", "Equipo contra el frío"], "icon": "animal", "facts": [["Emperor penguins huddle close together during the Antarctic winter.", "Small movements help birds change places in the crowd.", "Sharing body warmth helps them survive the bitter cold."], ["Los pingüinos emperadores se agrupan muy juntos durante el invierno antártico.", "Pequeños movimientos les ayudan a cambiar de lugar en el grupo.", "Compartir el calor del cuerpo les ayuda a sobrevivir al frío intenso."]], "question": ["Why do emperor penguins huddle?", "¿Por qué se agrupan los pingüinos emperadores?"], "options": [["To share warmth", "To practice flying", "To hide from sunshine"], ["Para compartir calor", "Para practicar el vuelo", "Para esconderse del Sol"]], "answer": 0, "source": "https://pmc.ncbi.nlm.nih.gov/articles/PMC3106014/"}, {"section": "animals", "id": "tardigrade", "title": ["Tardigrade", "Tardígrado"], "name": ["Tardigrade", "Tardígrado"], "specialty": ["Tiny survivor", "Pequeño superviviente"], "icon": "animal", "facts": [["This tiny eight-legged animal is nicknamed a water bear.", "Some tardigrades can dry into a resting shape called a tun.", "This helps them survive harsh conditions, but they are not indestructible."], ["Este animal diminuto de ocho patas se llama también osito de agua.", "Algunos tardígrados pueden secarse y entrar en un estado de reposo.", "Así sobreviven a condiciones difíciles, pero no son indestructibles."]], "question": ["What can some tardigrades do when their home dries out?", "¿Qué pueden hacer algunos tardígrados cuando su hogar se seca?"], "options": [["Grow wings", "Enter a dry resting state", "Turn into a fish"], ["Desarrollar alas", "Entrar en un estado seco de reposo", "Convertirse en peces"]], "answer": 1, "source": "https://www.amnh.org/explore/ology/ology-cards/364-tardigrade"}, {"section": "animals", "id": "cuttlefish", "title": ["Cuttlefish", "Sepia"], "name": ["Cuttlefish", "Sepia"], "specialty": ["Changing patterns", "Patrones cambiantes"], "icon": "animal", "facts": [["A cuttlefish can change its skin’s colors and patterns very quickly.", "It can also make parts of its skin look bumpy to blend into the seafloor.", "These changes can hide it or send signals to other cuttlefish."], ["La sepia cambia muy rápido los colores y patrones de su piel.", "También hace que partes de su piel parezcan rugosas para mezclarse con el fondo marino.", "Estos cambios la esconden o envían señales a otras sepias."]], "question": ["What can a cuttlefish change to blend in?", "¿Qué puede cambiar una sepia para camuflarse?"], "options": [["The ocean’s color", "The size of the Moon", "Its skin color and texture"], ["El color del océano", "El tamaño de la Luna", "El color y la textura de su piel"]], "answer": 2, "source": "https://www.montereybayaquarium.org/animals-the-ocean/animals-a-to-z/common-cuttlefish"}];
window.MLL_LESSON_PHOTOS={"works-cereal": {"src": "newphotos/lesson-cereal.jpg", "alt": "Colorful ring-shaped breakfast cereal", "credit": "David Streit daviidstreit", "license": "CC0", "licenseUrl": "http://creativecommons.org/publicdomain/zero/1.0/deed.en", "source": "https://commons.wikimedia.org/wiki/File:Fruit_loops_(Unsplash).jpg", "width": 1100, "height": 733, "file": "File:Fruit loops (Unsplash).jpg", "altEs": "Cereal de desayuno de colores con forma de aro"}, "works-airplanes": {"src": "newphotos/lesson-airplanes.jpg", "alt": "A NASA Boeing 737 research airplane flying above buildings and trees", "altEs": "Un avión de investigación Boeing 737 de la NASA vuela sobre edificios y árboles", "credit": "NASA/LRC", "license": "Public domain", "licenseUrl": "", "source": "https://commons.wikimedia.org/wiki/File:NASA_515_Boeing_B-737-130_in_flight.jpg", "width": 1100, "height": 733}, "works-directions": {"src": "newphotos/lesson-directions.jpg", "alt": "A hiking compass with a clear base plate", "credit": "Arpingstone", "license": "Public domain", "licenseUrl": "", "source": "https://commons.wikimedia.org/wiki/File:Walkers_compass_arp.jpg", "width": 763, "height": 1100, "file": "File:Walkers compass arp.jpg", "altEs": "Una brújula de senderismo con base transparente"}, "works-roller-coasters": {"src": "newphotos/lesson-roller-coasters.jpg", "alt": "Tall roller-coaster hills at Dorney Park", "credit": "Arsonwinter at English Wikipedia", "license": "Public domain", "licenseUrl": "", "source": "https://commons.wikimedia.org/wiki/File:Dorney_Park_Steel_Force_Thunderhawk.jpg", "width": 1073, "height": 673, "file": "File:Dorney Park Steel Force Thunderhawk.jpg", "altEs": "Grandes colinas de montaña rusa en Dorney Park"}, "works-toilets": {"src": "newphotos/lesson-toilets.jpg", "alt": "Water swirling inside a flushing toilet bowl", "credit": "User:Jarlhelm", "license": "CC BY-SA 3.0", "licenseUrl": "http://creativecommons.org/licenses/by-sa/3.0/", "source": "https://commons.wikimedia.org/wiki/File:Flushing_toilet.jpg", "width": 920, "height": 1100, "file": "File:Flushing toilet.jpg", "altEs": "Agua girando dentro de un inodoro al descargar"}, "works-popcorn": {"src": "newphotos/lesson-popcorn.jpg", "alt": "Popped popcorn next to unpopped kernels", "credit": "Deavmi", "license": "CC BY-SA 3.0", "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0", "source": "https://commons.wikimedia.org/wiki/File:Popcorn_6.jpg", "width": 1100, "height": 619, "file": "File:Popcorn 6.jpg", "altEs": "Palomitas junto a granos de maíz sin reventar"}, "sports-baseballs": {"src": "newphotos/lesson-baseballs.jpg", "alt": "A close-up of the red stitching on a baseball", "credit": "Tage Olsin", "license": "CC BY-SA 2.0", "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.0", "source": "https://commons.wikimedia.org/wiki/File:Baseball_(crop).jpg", "width": 1100, "height": 1066, "file": "File:Baseball (crop).jpg", "altEs": "Primer plano de las costuras rojas de una pelota de béisbol"}, "sports-basketballs": {"src": "newphotos/lesson-basketballs.jpg", "alt": "An orange basketball with textured grip and black seams", "credit": "", "license": "CC BY-SA 3.0", "licenseUrl": "http://creativecommons.org/licenses/by-sa/3.0/", "source": "https://commons.wikimedia.org/wiki/File:Basketball_(Ball).jpg", "width": 822, "height": 755, "file": "File:Basketball (Ball).jpg", "altEs": "Una pelota de básquet naranja con textura y líneas negras"}, "sports-basketball-history": {"src": "newphotos/lesson-basketball-history.jpg", "alt": "The original basketball court with an elevated peach basket", "credit": "Unknown authorUnknown author", "license": "Public domain", "licenseUrl": "", "source": "https://commons.wikimedia.org/wiki/File:Firstbasketball.jpg", "width": 514, "height": 740, "file": "File:Firstbasketball.jpg", "altEs": "La cancha original de básquet con una canasta de duraznos elevada"}, "sports-soccer-balls": {"src": "newphotos/lesson-soccer-balls.jpg", "alt": "A classic black-and-white 1970 Telstar soccer ball", "credit": "2010 World Cup - Shine 2010 from Johannesburg, South Africa", "license": "CC BY 2.0", "licenseUrl": "https://creativecommons.org/licenses/by/2.0", "source": "https://commons.wikimedia.org/wiki/File:1970_-_Telstar_(Mexico)_(4171467668).jpg", "width": 600, "height": 613, "file": "File:1970 - Telstar (Mexico) (4171467668).jpg", "altEs": "Un balón clásico Telstar de 1970, blanco y negro"}, "sports-swimming": {"src": "newphotos/lesson-swimming.jpg", "alt": "A swimmer gliding underwater in a swimming pool", "altEs": "Un nadador se desliza bajo el agua de una piscina", "credit": "Matt Stevenson", "license": "OGL v1.0", "licenseUrl": "http://NationalArchives.gov.uk/doc/open-government-licence/version/1/", "source": "https://commons.wikimedia.org/wiki/File:RAF_Swimmer_in_Action_MOD_45152006.jpg", "width": 1100, "height": 733}, "sports-skateboards": {"src": "newphotos/lesson-skateboards.jpg", "alt": "A child riding a skateboard at a skate park", "credit": "U.S. Army USAGW by Lisa Bishop", "license": "Public domain", "licenseUrl": "", "source": "https://commons.wikimedia.org/wiki/File:Hainerberg_Skate_Park_Now_Open_(6317086).jpg", "width": 1080, "height": 1059, "file": "File:Hainerberg Skate Park Now Open (6317086).jpg", "altEs": "Un niño en patineta en un parque de patinaje"}, "ocean-octopus": {"src": "newphotos/lesson-octopus.jpg", "alt": "A common octopus blends into the seafloor.", "credit": "albert kok", "license": "CC BY-SA 3.0", "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0", "source": "https://commons.wikimedia.org/wiki/File:Octopus2.jpg", "width": 1200, "height": 913, "title": "File:Octopus2.jpg", "changes": "Resized and compressed. Cards crop the photograph.", "altEs": "Un pulpo común se camufla con el fondo marino."}, "ocean-anglerfish": {"src": "newphotos/lesson-anglerfish.jpg", "alt": "A living sea toad, one kind of anglerfish, on the seafloor near Hawaii. This is not a glowing-lure species.", "altEs": "Un sapo marino vivo, un tipo de pez rape, en el fondo marino cerca de Hawái. Esta especie no tiene un señuelo luminoso.", "credit": "NOAA Office of Ocean Exploration and Research, Deep-Sea Symphony: Exploring the Musicians Seamounts", "license": "Public domain", "licenseUrl": "", "source": "https://commons.wikimedia.org/wiki/File:1031x680-noaa-pifsc-seatoad.jpg", "width": 750, "height": 500, "file": "1031x680-noaa-pifsc-seatoad.jpg", "changes": "Resized and compressed; cards may crop the photograph."}, "ocean-whale-songs": {"src": "newphotos/lesson-whale-songs.jpg", "alt": "A humpback whale leaps from the ocean off California.", "altEs": "Una ballena jorobada salta del océano frente a California.", "credit": "Robert Schwemmer/NOAA", "license": "Public domain", "licenseUrl": "", "source": "https://commons.wikimedia.org/wiki/File:Humpback_whale_breaching.PNG", "width": 1280, "height": 793, "file": "Humpback whale breaching.PNG", "changes": "Resized and compressed; cards may crop the photograph."}, "ocean-coral-reefs": {"src": "newphotos/lesson-coral-reefs.jpg", "alt": "A blue sea star rests among living corals on the Great Barrier Reef.", "credit": "Richard Ling <wikipedia@rling.com>", "license": "CC BY-SA 3.0", "licenseUrl": "http://creativecommons.org/licenses/by-sa/3.0/", "source": "https://commons.wikimedia.org/wiki/File:Blue_Linckia_Starfish.JPG", "width": 900, "height": 1200, "title": "File:Blue_Linckia_Starfish.JPG", "changes": "Resized and compressed. Cards crop the photograph.", "altEs": "Una estrella de mar azul descansa entre corales vivos de la Gran Barrera de Coral."}, "ocean-sea-turtles": {"src": "newphotos/lesson-sea-turtles.jpg", "alt": "A green sea turtle swims through clear water.", "credit": "Charles J. Sharp", "license": "CC BY-SA 4.0", "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0", "source": "https://commons.wikimedia.org/wiki/File:Green_sea_turtle_(Chelonia_mydas)_Moorea.jpg", "width": 1000, "height": 666, "title": "File:Green sea turtle (Chelonia mydas) Moorea.jpg", "changes": "Resized and compressed. Cards crop the photograph.", "altEs": "Una tortuga verde nada en aguas claras."}, "ocean-ocean-vents": {"src": "newphotos/lesson-ocean-vents.jpg", "alt": "A black-smoker hydrothermal vent on the Pacific seafloor.", "altEs": "Una chimenea hidrotermal en el fondo del océano Pacífico.", "credit": "W.R. Normark, Dudley Foster", "license": "Public domain", "licenseUrl": "", "source": "https://commons.wikimedia.org/wiki/File:BlackSmoker.jpg", "width": 1280, "height": 854, "file": "BlackSmoker.jpg", "changes": "Resized and compressed; cards may crop the photograph."}, "cheetah": {"src": "newphotos/cheetah.jpg", "alt": "A cheetah sprints at Cincinnati Zoo.", "altEs": "Un guepardo corre en el zoológico de Cincinnati.", "credit": "Mark Dumont", "license": "CC BY 2.0", "licenseUrl": "https://creativecommons.org/licenses/by/2.0", "source": "https://commons.wikimedia.org/wiki/File:Cheetah_Run.jpg", "width": 1280, "height": 853, "file": "Cheetah Run.jpg", "changes": "Resized and compressed; cards may crop the photograph."}, "octopus": {"src": "newphotos/octopus.jpg", "alt": "Octopus vulgaris (common octopus)", "credit": "albert kok", "license": "CC BY-SA 3.0", "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0", "source": "https://commons.wikimedia.org/wiki/File:Octopus2.jpg", "width": 1200, "height": 913, "title": "File:Octopus2.jpg", "changes": "Resized and compressed; cards may crop the photograph.", "altEs": "Un pulpo común se camufla con el fondo marino."}, "bat": {"src": "newphotos/bat.jpg", "alt": "Little brown bat", "credit": "SMBishop", "license": "CC BY-SA 3.0", "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0", "source": "https://commons.wikimedia.org/wiki/File:Little_Brown_Myotis_(cropped).JPG", "width": 945, "height": 1000, "title": "File:Little Brown Myotis (cropped).JPG", "changes": "Resized and compressed; cards may crop the photograph.", "altEs": "Un pequeño murciélago café."}, "elephant": {"src": "newphotos/elephant.jpg", "alt": "An African elephant stretches its trunk to reach a tree branch.", "altEs": "Un elefante africano estira la trompa para alcanzar una rama.", "credit": "Charles J. Sharp", "license": "CC BY-SA 3.0", "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0", "source": "https://commons.wikimedia.org/wiki/File:African_elephant_(Loxodonta_africana)_reaching_up_3.jpg", "width": 1280, "height": 853, "file": "African elephant (Loxodonta africana) reaching up 3.jpg", "changes": "Resized and compressed; cards may crop the photograph."}, "owl": {"src": "newphotos/owl.jpg", "alt": "Barn owl", "credit": "Charles J. Sharp", "license": "CC BY-SA 4.0", "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0", "source": "https://commons.wikimedia.org/wiki/File:American_Barn_Owl_(Tyto_furcata_guatemalae),_Orange_Walk.jpg", "width": 666, "height": 1000, "title": "File:American Barn Owl (Tyto furcata guatemalae), Orange Walk.jpg", "changes": "Resized and compressed; cards may crop the photograph.", "altEs": "Una lechuza americana posada."}, "axolotl": {"src": "newphotos/axolotl.jpg", "alt": "Axolotl", "credit": "LoKiLeCh", "license": "CC BY-SA 3.0", "licenseUrl": "http://creativecommons.org/licenses/by-sa/3.0/", "source": "https://commons.wikimedia.org/wiki/File:Axolotl_ganz.jpg", "width": 1200, "height": 669, "title": "File:Axolotl_ganz.jpg", "changes": "Resized and compressed; cards may crop the photograph.", "altEs": "Un ajolote con branquias externas plumosas."}, "gecko": {"src": "newphotos/gecko.jpg", "alt": "A gold-dust day gecko grips a plant.", "altEs": "Un gecko diurno de polvo de oro se agarra a una planta.", "credit": "", "license": "CC BY-SA 3.0", "licenseUrl": "http://creativecommons.org/licenses/by-sa/3.0/", "source": "https://commons.wikimedia.org/wiki/File:Phelsuma_l._laticauda.jpg", "width": 600, "height": 737, "file": "Phelsuma_l._laticauda.jpg", "changes": "Resized and compressed; cards may crop the photograph."}, "chameleon": {"src": "newphotos/chameleon.jpg", "alt": "The bright skin of a panther chameleon.", "altEs": "La piel de colores de un camaleón pantera.", "credit": "Rod Waddington", "license": "CC BY-SA 2.0", "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.0", "source": "https://commons.wikimedia.org/wiki/File:Panther_Chameleon_738367_(cropped).jpg", "width": 1280, "height": 799, "file": "Panther_Chameleon_738367_(cropped).jpg", "changes": "Resized and compressed; cards may crop the photograph."}, "peregrine": {"src": "newphotos/peregrine.jpg", "alt": "A peregrine falcon in flight.", "altEs": "Un halcón peregrino en vuelo.", "credit": "Juan Lacruz", "license": "CC BY-SA 3.0", "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0", "source": "https://commons.wikimedia.org/wiki/File:Peregrine_Falcon_La_Ca%C3%B1ada.jpg", "width": 1100, "height": 1100, "file": "Peregrine_Falcon_La_Cañada.jpg", "changes": "Resized and compressed; cards may crop the photograph."}, "mantis-shrimp": {"src": "newphotos/mantis-shrimp.jpg", "alt": "A colorful peacock mantis shrimp.", "altEs": "Un camarón mantis pavo real de colores.", "credit": "Roy L. Caldwell, Department of Integrative Biology, University of California, Berkeley", "license": "Public domain", "licenseUrl": "", "source": "https://commons.wikimedia.org/wiki/File:OdontodactylusScyllarus2.jpg", "width": 1280, "height": 633, "file": "OdontodactylusScyllarus2.jpg", "changes": "Resized and compressed; cards may crop the photograph."}, "archerfish": {"src": "newphotos/archerfish.jpg", "alt": "An archerfish with its distinctive dark bands.", "altEs": "Un pez arquero con sus características bandas oscuras.", "credit": "Chrumps", "license": "CC BY-SA 3.0", "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0", "source": "https://commons.wikimedia.org/wiki/File:Toxotes_jaculatrix.jpg", "width": 1280, "height": 914, "file": "Toxotes_jaculatrix.jpg", "changes": "Resized and compressed; cards may crop the photograph."}, "electric-eel": {"src": "newphotos/electric-eel.jpg", "alt": "An electric eel in water.", "altEs": "Una anguila eléctrica en el agua.", "credit": "Steven G. Johnson", "license": "CC BY-SA 3.0", "licenseUrl": "http://creativecommons.org/licenses/by-sa/3.0/", "source": "https://commons.wikimedia.org/wiki/File:Electric-eel.jpg", "width": 1280, "height": 960, "file": "Electric-eel.jpg", "changes": "Resized and compressed; cards may crop the photograph."}, "dung-beetle": {"src": "newphotos/dung-beetle.jpg", "alt": "A dung beetle pushes a ball of dung.", "altEs": "Un escarabajo pelotero empuja una bola de estiércol.", "credit": "Bernard DUPONT from FRANCE", "license": "CC BY-SA 2.0", "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.0", "source": "https://commons.wikimedia.org/wiki/File:Large_Copper_Dung_Beetle_(Kheper_nigroaeneus)_rolling_a_dung_ball_(15823074113).jpg", "width": 1280, "height": 853, "file": "Large Copper Dung Beetle (Kheper nigroaeneus) rolling a dung ball (15823074113).jpg", "changes": "Resized and compressed; cards may crop the photograph."}, "sea-otter": {"src": "newphotos/sea-otter.jpg", "alt": "A sea otter holds a sea urchin in its paws.", "altEs": "Una nutria marina sostiene un erizo de mar entre las patas.", "credit": "matt knoth from San Francisco, yesicannibus", "license": "CC BY 2.0", "licenseUrl": "https://creativecommons.org/licenses/by/2.0", "source": "https://commons.wikimedia.org/wiki/File:Sea_otter_with_sea_urchin.jpg", "width": 1100, "height": 1100, "file": "Sea otter with sea urchin.jpg", "changes": "Resized and compressed; cards may crop the photograph."}, "beaver": {"src": "newphotos/beaver.jpg", "alt": "A beaver uses its teeth to cut into a tree.", "altEs": "Un castor usa sus dientes para cortar un árbol.", "credit": "D. Gordon E. Robertson", "license": "CC BY-SA 3.0", "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0", "source": "https://commons.wikimedia.org/wiki/File:American_Beaver,_tree_cutting.jpg", "width": 1280, "height": 987, "file": "American Beaver, tree cutting.jpg", "changes": "Resized and compressed; cards may crop the photograph."}, "hummingbird": {"src": "newphotos/hummingbird.jpg", "alt": "A rufous-tailed hummingbird feeds while hovering beside a flower in Ecuador.", "altEs": "Un colibrí colirrufo se alimenta mientras vuela junto a una flor en Ecuador.", "credit": "Andy  Morffew from Itchen Abbas, Hampshire, UK", "license": "CC BY 2.0", "licenseUrl": "https://creativecommons.org/licenses/by/2.0", "source": "https://commons.wikimedia.org/wiki/File:Rufous-tailed_Hummingbird_(54567044907).jpg", "width": 1280, "height": 1024, "file": "Rufous-tailed Hummingbird (54567044907).jpg", "changes": "Resized and compressed; cards may crop the photograph."}, "woodpecker": {"src": "newphotos/woodpecker.jpg", "alt": "A pileated woodpecker pecks into a tree.", "altEs": "Un pájaro carpintero pileado picotea un árbol.", "credit": "ShayneKayePhoto", "license": "CC BY-SA 4.0", "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0", "source": "https://commons.wikimedia.org/wiki/File:Pileated_Woodpecker_closeup_of_head_pecking_a_tree.jpg", "width": 1099, "height": 1100, "file": "Pileated Woodpecker closeup of head pecking a tree.jpg", "changes": "Resized and compressed; cards may crop the photograph."}, "penguin": {"src": "newphotos/penguin.jpg", "alt": "Emperor penguins swim in Antarctic water.", "altEs": "Pingüinos emperador nadan en aguas antárticas.", "credit": "Ian Duffy from UK", "license": "CC BY 2.0", "licenseUrl": "https://creativecommons.org/licenses/by/2.0", "source": "https://commons.wikimedia.org/wiki/File:Aptenodytes_forsteri_-Antarctica_-swimming-8.jpg", "width": 1280, "height": 854, "file": "Aptenodytes forsteri -Antarctica -swimming-8.jpg", "changes": "Resized and compressed; cards may crop the photograph."}, "tardigrade": {"src": "newphotos/tardigrade.jpg", "alt": "A scanning electron microscope image of a tardigrade, also called a water bear.", "altEs": "Una imagen de microscopio electrónico de un tardígrado, también llamado oso de agua.", "credit": "Bob Goldstein and Vicky Madden, UNC Chapel Hill", "license": "CC BY-SA 3.0", "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0", "source": "https://commons.wikimedia.org/wiki/File:Waterbear.jpg", "width": 266, "height": 266, "file": "Waterbear.jpg", "changes": "Resized and compressed; cards may crop the photograph."}, "cuttlefish": {"src": "newphotos/cuttlefish.jpg", "alt": "A cuttlefish blends with the seafloor.", "altEs": "Una sepia se camufla con el fondo marino.", "credit": "Konyali43", "license": "CC BY-SA 4.0", "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0", "source": "https://commons.wikimedia.org/wiki/File:Camouflage_cuttlefish_01.jpg", "width": 1280, "height": 960, "file": "Camouflage_cuttlefish_01.jpg", "changes": "Resized and compressed; cards may crop the photograph."}};
window.MLL_V7_LOCATION_PHOTOS={"las-terrenas": {"src": "newphotos/las-terrenas.jpg", "alt": "Turquoise sea and white sand at Las Terrenas, Dominican Republic.", "altEs": "Mar turquesa y arena blanca en Las Terrenas, República Dominicana.", "credit": "Šarūnas Burdulis", "license": "CC BY-SA 2.0", "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.0", "source": "https://commons.wikimedia.org/wiki/File:Dominican_Republic_Beach.jpg", "width": 1280, "height": 854, "file": "Dominican Republic Beach.jpg", "changes": "Resized and compressed; cards may crop the photograph."}, "galapagos": {"src": "newphotos/galapagos.jpg", "alt": "A Galápagos sea lion rests on the sand at Punta Pitt.", "altEs": "Un lobo marino de Galápagos descansa en la arena de Punta Pitt.", "credit": "Diego Delso", "license": "CC BY-SA 4.0", "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0", "source": "https://commons.wikimedia.org/wiki/File:Lobo_marino_(Zalophus_californianus_wollebaeki),_Punta_Pitt,_isla_de_San_Crist%C3%B3bal,_islas_Gal%C3%A1pagos,_Ecuador,_2015-07-24,_DD_11.JPG", "width": 1280, "height": 853, "file": "Lobo marino (Zalophus californianus wollebaeki), Punta Pitt, isla de San Cristóbal, islas Galápagos, Ecuador, 2015-07-24, DD 11.JPG", "changes": "Resized and compressed; cards may crop the photograph."}, "lima": {"src": "newphotos/lima.jpg", "alt": "Colorful illuminated fountains in Lima's Magic Water Circuit.", "altEs": "Fuentes iluminadas de colores en el Circuito Mágico del Agua de Lima.", "credit": "Murray Foubister", "license": "CC BY-SA 2.0", "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.0", "source": "https://commons.wikimedia.org/wiki/File:Lima,_Peru%E2%80%A6spectacular_water_park_at_night_(8443265859).jpg", "width": 1280, "height": 853, "file": "Lima, Peru…spectacular water park at night (8443265859).jpg", "changes": "Resized and compressed; cards may crop the photograph."}, "sao-paulo": {"src": "newphotos/sao-paulo.jpg", "alt": "Colorful street art in São Paulo's Batman Alley.", "altEs": "Arte callejero de colores en el Callejón de Batman de São Paulo.", "credit": "Slyronit", "license": "CC BY-SA 4.0", "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0", "source": "https://commons.wikimedia.org/wiki/File:Street_art_at_Vila_Madalena,_Sao_Paulo_22.jpg", "width": 1280, "height": 853, "file": "Street art at Vila Madalena, Sao Paulo 22.jpg", "changes": "Resized and compressed; cards may crop the photograph."}, "bogota": {"src": "newphotos/bogota.jpg", "alt": "The tiny golden Muisca raft in Bogotá's Gold Museum.", "altEs": "La pequeña balsa muisca de oro en el Museo del Oro de Bogotá.", "credit": "Mariordo (Mario Roberto Durán Ortiz)", "license": "CC BY-SA 3.0", "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0", "source": "https://commons.wikimedia.org/wiki/File:Muisca_raft_BOG_04_2012_Museo_de_Oro_1253.jpg", "width": 1280, "height": 854, "file": "Muisca raft BOG 04 2012 Museo de Oro 1253.jpg", "changes": "Resized and compressed; cards may crop the photograph."}};
;
/* Reviewed all 30 real source images. Contain is intentional: wide cards must preserve whole heads.
   Positions are fallback focal points only for square thumbnails. Profiles retain contain. */
window.MLL_PORTRAIT_DIRECTIONS = {
  "einstein": {
    "position": "50% 4%",
    "fit": "contain",
    "squarePosition": "50% 4%",
    "gridFit": "cover",
    "homeFit": "contain"
  },
  "katherine-johnson": {
    "position": "50% 6%",
    "fit": "contain",
    "squarePosition": "50% 6%",
    "gridFit": "cover",
    "homeFit": "contain"
  },
  "cousteau": {
    "position": "50% 10%",
    "fit": "contain",
    "squarePosition": "50% 10%",
    "gridFit": "cover",
    "homeFit": "contain"
  },
  "frida-kahlo": {
    "position": "50% 0%",
    "fit": "contain",
    "squarePosition": "50% 0%",
    "gridFit": "cover",
    "homeFit": "contain"
  },
  "neil-armstrong": {
    "position": "50% 8%",
    "fit": "contain",
    "squarePosition": "50% 8%",
    "gridFit": "cover",
    "homeFit": "contain"
  },
  "leonardo-da-vinci": {
    "position": "50% 0%",
    "fit": "contain",
    "squarePosition": "50% 0%",
    "gridFit": "contain",
    "homeFit": "contain"
  },
  "nikola-tesla": {
    "position": "50% 0%",
    "fit": "contain",
    "squarePosition": "50% 0%",
    "gridFit": "cover",
    "homeFit": "contain"
  },
  "thomas-edison": {
    "position": "50% 0%",
    "fit": "contain",
    "squarePosition": "50% 0%",
    "gridFit": "cover",
    "homeFit": "contain"
  },
  "isaac-newton": {
    "position": "50% 0%",
    "fit": "contain",
    "squarePosition": "50% 0%",
    "gridFit": "cover",
    "homeFit": "contain"
  },
  "galileo-galilei": {
    "position": "50% 4%",
    "fit": "contain",
    "squarePosition": "50% 4%",
    "gridFit": "cover",
    "homeFit": "contain"
  },
  "marie-curie": {
    "position": "50% 2%",
    "fit": "contain",
    "squarePosition": "50% 2%",
    "gridFit": "cover",
    "homeFit": "contain"
  },
  "alexander-graham-bell": {
    "position": "50% 12%",
    "fit": "contain",
    "squarePosition": "50% 12%",
    "gridFit": "cover",
    "homeFit": "contain"
  },
  "alexander-fleming": {
    "position": "50% 6%",
    "fit": "contain",
    "squarePosition": "50% 6%",
    "gridFit": "cover",
    "homeFit": "contain"
  },
  "benjamin-franklin": {
    "position": "50% 4%",
    "fit": "contain",
    "squarePosition": "50% 4%",
    "gridFit": "cover",
    "homeFit": "contain"
  },
  "wright-brothers": {
    "position": "50% 4%",
    "fit": "contain",
    "squarePosition": "50% 4%",
    "gridFit": "cover",
    "homeFit": "contain"
  },
  "johannes-gutenberg": {
    "position": "50% 0%",
    "fit": "contain",
    "squarePosition": "50% 0%",
    "gridFit": "cover",
    "homeFit": "contain"
  },
  "george-washington": {
    "position": "50% 10%",
    "fit": "contain",
    "squarePosition": "50% 10%",
    "gridFit": "cover",
    "homeFit": "contain"
  },
  "abraham-lincoln": {
    "position": "50% 0%",
    "fit": "contain",
    "squarePosition": "50% 0%",
    "gridFit": "cover",
    "homeFit": "contain"
  },
  "amelia-earhart": {
    "position": "50% 0%",
    "fit": "contain",
    "squarePosition": "50% 0%",
    "gridFit": "cover",
    "homeFit": "contain"
  },
  "ernest-shackleton": {
    "position": "50% 0%",
    "fit": "contain",
    "squarePosition": "50% 0%",
    "gridFit": "cover",
    "homeFit": "contain"
  },
  "marco-polo": {
    "position": "50% 0%",
    "fit": "contain",
    "squarePosition": "50% 0%",
    "gridFit": "contain",
    "homeFit": "contain"
  },
  "steve-irwin": {
    "position": "50% 0%",
    "fit": "contain",
    "squarePosition": "50% 0%",
    "gridFit": "cover",
    "homeFit": "contain"
  },
  "babe-ruth": {
    "position": "50% 0%",
    "fit": "contain",
    "squarePosition": "50% 0%",
    "gridFit": "cover",
    "homeFit": "contain"
  },
  "jackie-robinson": {
    "position": "50% 0%",
    "fit": "contain",
    "squarePosition": "50% 0%",
    "gridFit": "cover",
    "homeFit": "contain"
  },
  "pele": {
    "position": "50% 0%",
    "fit": "contain",
    "squarePosition": "50% 0%",
    "gridFit": "cover",
    "homeFit": "contain"
  },
  "roberto-clemente": {
    "position": "50% 0%",
    "fit": "contain",
    "squarePosition": "50% 0%",
    "gridFit": "cover",
    "homeFit": "contain"
  },
  "walt-disney": {
    "position": "50% 0%",
    "fit": "contain",
    "squarePosition": "50% 0%",
    "gridFit": "cover",
    "homeFit": "contain"
  },
  "wolfgang-amadeus-mozart": {
    "position": "50% 0%",
    "fit": "contain",
    "squarePosition": "50% 0%",
    "gridFit": "cover",
    "homeFit": "contain"
  },
  "ludwig-van-beethoven": {
    "position": "50% 0%",
    "fit": "contain",
    "squarePosition": "50% 0%",
    "gridFit": "cover",
    "homeFit": "contain"
  },
  "lionel-messi": {
    "position": "50% 0%",
    "fit": "contain",
    "squarePosition": "50% 0%",
    "gridFit": "cover",
    "homeFit": "contain"
  }
};

;
/* Max's Learning Lab: self-contained, touch-first sequence and rescue games. */
(()=>{'use strict';
const puzzles=[
['tree','Grow a tree','Haz crecer un árbol',['Plant a seed','Give it water','Watch a sprout grow','See a young tree'],['Planta una semilla','Dale agua','Mira crecer un brote','Mira el arbolito']],
['bread','Make toast','Prepara una tostada',['Put bread in a toaster','Ask an adult to toast it','Wait for it to pop up','Spread your topping'],['Pon pan en la tostadora','Pide a un adulto que lo tueste','Espera a que salte','Añade lo que te guste']],
['butterfly','A butterfly grows','Crece una mariposa',['Egg','Caterpillar','Chrysalis','Butterfly'],['Huevo','Oruga','Crisálida','Mariposa']],
['frog','A frog grows','Crece una rana',['Egg','Tadpole','Tadpole with legs','Young frog'],['Huevo','Renacuajo','Renacuajo con patas','Rana joven']],
['rain','A raindrop travels','Viaja una gota',['Sun warms ocean water','Water vapor rises','Tiny drops form a cloud','Rain falls'],['El sol calienta el mar','El vapor de agua sube','Las gotitas forman una nube','Cae la lluvia']],
['morning','Ready for school','Listo para la escuela',['Wake up','Get dressed','Pack your backpack','Leave for school'],['Despierta','Vístete','Prepara la mochila','Sal para la escuela']],
['hands','Wash your hands','Lávate las manos',['Wet your hands','Add soap and scrub','Rinse away the soap','Dry your hands'],['Mójate las manos','Añade jabón y frota','Enjuaga el jabón','Sécate las manos']],
['letter','Mail a letter','Envía una carta',['Write your letter','Put it in an envelope','Add address and postage','Put it in the mail'],['Escribe la carta','Ponla en un sobre','Añade dirección y estampilla','Deposítala en el correo']],
['lemon','Make lemonade','Haz limonada',['Wash the lemons','Ask an adult to cut them','Squeeze the juice','Mix with water and sugar'],['Lava los limones','Pide a un adulto que los corte','Exprime el jugo','Mezcla con agua y azúcar']],
['rocket','Rocket launch','Lanzamiento espacial',['Climb into the spacecraft','Buckle your seat belt','Count down to zero','Lift off'],['Entra en la nave','Abróchate el cinturón','Cuenta hasta cero','Despega']],
['soccer','Take a penalty kick','Tira un penal',['Set the ball on the spot','Step back','Run toward the ball','Kick toward the goal'],['Pon el balón en el punto','Da unos pasos atrás','Corre hacia el balón','Patea hacia el arco']],
['library','Borrow a book','Pide un libro prestado',['Choose a library book','Check it out','Read it at home','Return it to the library'],['Elige un libro','Registra el préstamo','Léelo en casa','Devuélvelo a la biblioteca']],
['ice','Make ice cubes','Haz cubitos de hielo',['Fill an ice tray with water','Put it in the freezer','Wait until the water freezes','Pop out the ice cubes'],['Llena una cubetera con agua','Ponla en el congelador','Espera hasta que se congele','Saca los cubitos']],
['pizza','Bake a pizza','Hornea una pizza',['Shape the dough','Add sauce and toppings','Ask an adult to bake it','Let it cool before eating'],['Da forma a la masa','Añade salsa e ingredientes','Pide a un adulto que la hornee','Déjala enfriar antes de comer']],
['teeth','Brush your teeth','Cepíllate los dientes',['Put toothpaste on your brush','Brush all sides of your teeth','Spit out the toothpaste','Rinse your toothbrush'],['Pon pasta en el cepillo','Cepilla todos los lados','Escupe la pasta','Enjuaga el cepillo']],
['fish','Catch and release','Pesca y libera',['Put bait on the hook with help','Cast your line into the water','Reel in a fish gently','Have an adult unhook and release it'],['Pon carnada con ayuda','Lanza la línea al agua','Recoge el pez con cuidado','Un adulto quita el anzuelo y lo libera']],
['shadow','Day into night','Del día a la noche',['Sunrise','Midday','Sunset','Night'],['Amanecer','Mediodía','Atardecer','Noche']],
['year','Months in order','Meses en orden',['January','April','July','October'],['Enero','Abril','Julio','Octubre']],
['week','Days in order','Días en orden',['Monday','Tuesday','Wednesday','Thursday','Friday'],['Lunes','Martes','Miércoles','Jueves','Viernes']],
['numbers','Count by twos','Cuenta de dos en dos',['2','4','6','8','10'],['2','4','6','8','10']],
['tens','Count by tens','Cuenta de diez en diez',['10','20','30','40','50'],['10','20','30','40','50']],
['size','Smallest to largest','De menor a mayor',['Ant','Mouse','Dog','Elephant'],['Hormiga','Ratón','Perro','Elefante']],
['story','A lost dog comes home','Un perro vuelve a casa',['A dog slips out of its yard','A neighbor finds the dog','The neighbor reads its tag','The owner brings the dog home'],['Un perro sale de su patio','Un vecino encuentra al perro','El vecino lee su placa','Su dueño lo lleva a casa']],
['tent','Set up camp','Prepara el campamento',['Find a safe campsite','Put up the tent','Place a sleeping bag inside','Zip the tent before sleeping'],['Busca un lugar seguro','Arma la carpa','Pon el saco de dormir dentro','Cierra la carpa antes de dormir']],
['turtle','A sea turtle begins life','Nace una tortuga marina',['Mother lays eggs in sand','Baby turtle hatches','Baby crawls toward the sea','Baby swims into the ocean'],['La mamá pone huevos en la arena','Nace la tortuguita','Camina hacia el mar','Nada en el océano']],
['banana','Enjoy a banana','Disfruta un banano',['Choose a banana','Peel it','Eat the fruit','Put the peel in compost'],['Elige un banano','Pélalo','Come la fruta','Pon la cáscara en el compost']],
['bus','Take the bus','Viaja en autobús',['Wait at the bus stop','Let passengers get off','Get on the bus','Sit down or hold a rail'],['Espera en la parada','Deja salir a los pasajeros','Sube al autobús','Siéntate o sujétate']],
['experiment','Test an idea','Pon a prueba una idea',['Ask a question','Make a prediction','Try a safe test','Compare results with your prediction'],['Haz una pregunta','Predice qué pasará','Haz una prueba segura','Compara el resultado con tu predicción']],
['sand','Build a sandcastle','Haz un castillo de arena',['Fill a bucket with damp sand','Pack the sand firmly','Flip the bucket onto the beach','Lift the bucket carefully'],['Llena un balde de arena húmeda','Aprieta bien la arena','Voltea el balde en la playa','Levanta el balde con cuidado']],
['save','Save for a toy','Ahorra para un juguete',['Choose a toy and check its price','Set aside a little money','Reach your savings goal','Buy the toy'],['Elige un juguete y mira su precio','Guarda un poco de dinero','Alcanza tu meta de ahorro','Compra el juguete']]
];
const escape=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const svg=(body,bg='#073c57')=>`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 300"><rect width="480" height="300" rx="24" fill="${bg}"/>${body}</svg>`;
const seqThumb=svg('<path d="M90 165H390" stroke="#67e8cf" stroke-width="10"/><g fill="#f5c65d" stroke="#fff" stroke-width="3"><rect x="40" y="85" width="100" height="135" rx="16"/><rect x="190" y="55" width="100" height="135" rx="16"/><rect x="340" y="85" width="100" height="135" rx="16"/></g><g fill="#073c57" font-family="sans-serif" font-weight="bold" font-size="60" text-anchor="middle"><text x="90" y="173">1</text><text x="240" y="143">2</text><text x="390" y="173">3</text></g>');
function mountSequence(host,api){let es=api.lang==='es',selected=[],p,order=[],message='';const t=(a,b)=>es?b:a;const key='sequence-current';function save(){api.set?.(key,{id:p[0],selected,order});}function choose(resume){const stored=resume&&api.get?.(key);p=stored&&puzzles.find(x=>x[0]===stored.id);if(!p){let id=api.nextRandom?.('sequence:puzzles',puzzles.map(x=>x[0]))||puzzles[Math.floor(Math.random()*puzzles.length)][0];p=puzzles.find(x=>x[0]===id)||puzzles[0];selected=[];order=p[3].map((_,i)=>i);for(let i=order.length-1;i>0;i--){let j=Math.floor(Math.random()*(i+1));[order[i],order[j]]=[order[j],order[i]];}if(order.every((x,i)=>x===i))order.reverse();}else{selected=Array.isArray(stored.selected)?stored.selected:[];order=stored.order||p[3].map((_,i)=>i).reverse();}message='';save();render();}
function render(){const words=p[es?4:3];host.innerHTML=`<section class="mll-sequence"><div class="mll-game-kicker">${t('PUT IT IN ORDER','PONLO EN ORDEN')}</div><h2>${escape(p[es?2:1])}</h2><p>${t('Tap the first step, then the next. Tap a chosen step to undo it.','Toca el primer paso y luego el siguiente. Toca un paso elegido para quitarlo.')}</p><div class="mll-seq-slots">${words.map((_,i)=>`<div class="mll-seq-slot ${selected[i]!==undefined?'filled':''}"><span>${i+1}</span>${selected[i]===undefined?`<em>${t('Next step','Siguiente paso')}</em>`:`<button type="button" data-undo="${i}">${escape(words[selected[i]])}</button>`}</div>`).join('')}</div><div class="mll-seq-choices">${order.filter(i=>!selected.includes(i)).map(i=>`<button type="button" data-step="${i}">${escape(words[i])}</button>`).join('')}</div><p class="mll-game-message" role="status">${escape(message)}</p><div class="mll-game-actions"><button type="button" data-check ${selected.length!==words.length?'disabled':''}>${t('Check my order','Revisa mi orden')}</button><button type="button" data-clear>${t('Start again','Empezar de nuevo')}</button><button type="button" data-next>${t('Next puzzle →','Otro reto →')}</button></div></section>`;host.querySelectorAll('[data-step]').forEach(b=>b.onclick=()=>{selected.push(+b.dataset.step);message='';save();render()});host.querySelectorAll('[data-undo]').forEach(b=>b.onclick=()=>{selected.splice(+b.dataset.undo,1);message='';save();render()});host.querySelector('[data-clear]').onclick=()=>{selected=[];message='';save();render()};host.querySelector('[data-next]').onclick=()=>choose(false);host.querySelector('[data-check]').onclick=()=>{let wrong=selected.findIndex((x,i)=>x!==i);if(wrong<0){const earned=api.answer?.('practice:sequence:'+p[0]);message=earned===false?t('Perfect order! You already earned this point. Try another puzzle.','¡Orden perfecto! Ya ganaste este punto. Prueba otro reto.'):t('You put every step in order! Learning point earned.','¡Ordenaste todos los pasos! Punto de aprendizaje ganado.');}else{message=t(`Look again at step ${wrong+1}. What needs to happen before the next step?`,`Mira otra vez el paso ${wrong+1}. ¿Qué debe pasar antes del siguiente paso?`);}render();if(wrong<0)host.querySelector('.mll-sequence').classList.add('mll-game-win');};}choose(true);return{destroy(){host.innerHTML=''}};}
const boat='<path d="M8 25H44L37 39H16Z" fill="#ffce69" stroke="#13324d" stroke-width="2"/><path d="M24 5V25H39Z" fill="#fff"/><path d="M20 12V25H11Z" fill="#ff7968"/>';
const animal='<ellipse cx="26" cy="27" rx="12" ry="10" fill="#70dbba"/><path d="M15 21L8 15M37 21L44 15M15 33L9 40M37 33L43 40" stroke="#70dbba" stroke-width="6" stroke-linecap="round"/><circle cx="26" cy="12" r="6" fill="#70dbba"/><circle cx="24" cy="11" r="1" fill="#06364d"/>';
const rock='<path d="M7 38L14 17L30 10L43 27L46 39Z" fill="#677b87" stroke="#d2e4e8" stroke-width="2"/><path d="M14 17L29 27L30 10M29 27L43 27" fill="none" stroke="#9baab3" stroke-width="2"/>';
const harborThumb=svg(`<g stroke="#4fadc5" stroke-width="3" fill="none" opacity=".55"><path d="M0 95Q80 65 160 95T320 95T480 95M0 210Q80 180 160 210T320 210T480 210"/></g><g transform="translate(195 40) scale(3.5)">${boat}</g><g transform="translate(55 190) scale(1.4)">${animal}</g><g transform="translate(370 180) scale(1.4)">${animal}</g>`);
const reefs=[8,9,15,20,22,27,28],targets=[2,5,13,19,31,35];
function transform(cell,variant){let x=cell%6,y=Math.floor(cell/6);if(variant>=4)x=5-x;for(let n=0;n<variant%4;n++){[x,y]=[5-y,x];}return y*6+x;}
function layout(variant){return{reefs:reefs.map(x=>transform(x,variant)),targets:targets.map(x=>transform(x,variant)),start:transform(30,variant)};}
function fresh(variant=Math.floor(Math.random()*8)){variant=Number.isInteger(variant)&&variant>=0&&variant<8?variant:0;return{version:1,variant,pos:layout(variant).start,moves:48,rescued:[],bumps:0,done:false};}
function normalize(s){if(!s||s.version!==1)return fresh();const variant=Number.isInteger(s.variant)&&s.variant>=0&&s.variant<8?s.variant:0,l=layout(variant);return{version:1,variant,pos:Number.isInteger(s.pos)&&s.pos>=0&&s.pos<36&&!l.reefs.includes(s.pos)?s.pos:l.start,moves:Math.max(0,Math.min(48,Number(s.moves)||0)),rescued:[...new Set((s.rescued||[]).filter(x=>l.targets.includes(x)))],bumps:Math.max(0,Number(s.bumps)||0),done:!!s.done};}
function move(s,dx,dy){if(s.done)return s;const l=layout(s.variant||0);let x=s.pos%6+dx,y=Math.floor(s.pos/6)+dy;if(x<0||x>5||y<0||y>5)return s;let n=y*6+x;const out={...s,rescued:[...s.rescued],moves:s.moves-1};if(l.reefs.includes(n))out.bumps++;else{out.pos=n;if(l.targets.includes(n)&&!out.rescued.includes(n))out.rescued.push(n);}out.done=out.moves<=0||out.rescued.length===6;return out;}
function mountHarbor(host,api){const es=api.lang==='es',t=(a,b)=>es?b:a;let state=normalize(api.snapshot),finished=false;let note=t('Tap an arrow or a neighboring water square to steer.','Toca una flecha o una casilla de agua vecina para navegar.');function persist(){api.onSave?.({...state,rescued:[...state.rescued]});}function finish(){if(state.done&&!finished){finished=true;api.onFinish?.({won:state.rescued.length===6,rescued:state.rescued.length,movesUsed:48-state.moves,bumps:state.bumps,snapshot:state});}}function steer(dx,dy){let before=state;state=move(state,dx,dy);if(before===state)return;note=state.bumps>before.bumps?t('Rock ahead! That used a move. Try another route.','¡Roca adelante! Gastaste un movimiento. Busca otra ruta.'):state.rescued.length>before.rescued.length?t('A turtle is safe aboard! Find the next one.','¡Una tortuga está a salvo! Busca la siguiente.'):t('Watch the rocks. Plan your next move.','Cuidado con las rocas. Planea tu siguiente paso.');persist();render();finish();}
function render(){host.innerHTML=`<section class="mll-harbor"><div class="mll-game-kicker">${t('HARBOR RESCUE','RESCATE EN EL PUERTO')}</div><h2>${t('Bring six turtles to safety','Rescata a seis tortugas')}</h2><p>${t('A pretend rescue mission: collect the turtles and steer around rocks.','Una misión imaginaria: recoge las tortugas y esquiva las rocas.')}</p><div class="mll-harbor-stats"><strong>🐢 ${state.rescued.length}/6</strong><strong>${state.moves} ${t('moves left','movimientos')}</strong></div><div class="mll-harbor-grid" role="group" aria-label="${t('Harbor map','Mapa del puerto')}">${Array.from({length:36},(_,i)=>{const l=layout(state.variant);let kind=i===state.pos?'boat':l.reefs.includes(i)?'rock':l.targets.includes(i)&&!state.rescued.includes(i)?'turtle':'water';let title=kind==='boat'?t('Your boat','Tu barco'):kind==='rock'?t('Rock','Roca'):kind==='turtle'?t('Turtle','Tortuga'):t('Water','Agua');return`<button type="button" data-cell="${i}" aria-label="${title}, ${t('row','fila')} ${Math.floor(i/6)+1}, ${t('column','columna')} ${i%6+1}" ${state.done?'disabled':''}><svg viewBox="0 0 52 52" aria-hidden="true">${kind==='boat'?boat:kind==='rock'?rock:kind==='turtle'?animal:'<path d="M12 29Q18 24 24 29T36 29" stroke="#64bed0" fill="none" stroke-width="2"/>'}</svg></button>`}).join('')}</div><div class="mll-harbor-controls"><button type="button" data-dir="0,-1" aria-label="${t('Up','Arriba')}" ${state.done?'disabled':''}>↑</button><div><button type="button" data-dir="-1,0" aria-label="${t('Left','Izquierda')}" ${state.done?'disabled':''}>←</button><button type="button" data-dir="0,1" aria-label="${t('Down','Abajo')}" ${state.done?'disabled':''}>↓</button><button type="button" data-dir="1,0" aria-label="${t('Right','Derecha')}" ${state.done?'disabled':''}>→</button></div></div><p role="status" class="mll-game-message">${state.done?(state.rescued.length===6?t('All six are safe! Rescue complete.','¡Las seis están a salvo! Misión cumplida.'):t(`Mission complete: you rescued ${state.rescued.length} turtles!`,`¡Misión terminada: rescataste ${state.rescued.length} tortugas!`)):note}</p></section>`;host.querySelectorAll('[data-dir]').forEach(b=>b.onclick=()=>steer(...b.dataset.dir.split(',').map(Number)));host.querySelectorAll('[data-cell]').forEach(b=>b.onclick=()=>{let n=+b.dataset.cell,dx=n%6-state.pos%6,dy=Math.floor(n/6)-Math.floor(state.pos/6);if(Math.abs(dx)+Math.abs(dy)===1)steer(dx,dy);});}
function key(e){const d={ArrowUp:[0,-1],ArrowDown:[0,1],ArrowLeft:[-1,0],ArrowRight:[1,0]}[e.key];if(d){e.preventDefault();steer(...d)}}host.tabIndex=0;host.addEventListener('keydown',key);persist();render();finish();return{destroy(){host.removeEventListener('keydown',key);host.innerHTML=''},getSnapshot(){return state}};}
window.MLL_SEQUENCE={mount:mountSequence,thumbnail:seqThumb,puzzles};window.MLL_HARBOR={mount:mountHarbor,thumbnail:harborThumb,engine:{fresh,normalize,move,reefs,targets,layout,transform}};
})();

;
/* Six bilingual learning areas. Original illustrations and touch activities. */
(function(){
'use strict';
const LESSONS=window.MLL_NEW_LESSONS;
const sections={ocean:['Ocean Explorers','Exploradores del océano','Dive into a hidden world.','Sumérgete en un mundo escondido.','coral'],works:['How Things Work','Cómo funcionan las cosas','Look inside everyday wonders.','Descubre cómo funcionan las cosas.','gears'],animals:['Animal Superpowers','Superpoderes animales','Real animals. Amazing abilities.','Animales reales. Habilidades increíbles.','axolotl'],sports:['Sports Stories','Historias del deporte','How it is made. How it began.','Cómo se fabrica. Cómo empezó.','ball']};
const E=(tag,cls,text)=>{const n=document.createElement(tag);if(cls)n.className=cls;if(text!==undefined)n.textContent=text;return n;};
function B(text,fn,cls='button'){const b=E('button',cls,text);b.type='button';b.onclick=fn;return b;}
function A(text,href,cls='button ghost'){const a=E('a',cls,text);a.href=href;return a;}
function art(kind){let shapes='';
 const circle=(x,y,r,fill)=>`<circle cx="${x}" cy="${y}" r="${r}" fill="${fill}"/>`;
 if(kind==='depth')shapes='<rect y="105" width="320" height="105" fill="#071b32"/><path d="M0 105h320M0 158h320" stroke="#4ea6c0" stroke-dasharray="6 6"/>'+circle(70,41,23,'#ffcc76')+'<path d="M70 71v23m-39-31 17 19m64-19-17 19" stroke="#ffcc76" stroke-width="4"/><rect x="170" y="133" width="66" height="30" rx="15" fill="#eab66d"/>'+circle(192,148,9,'#173950')+'<path d="M263 32v145m-10-13 10 13 10-13" stroke="#8be4dd" stroke-width="4" fill="none"/>';
 else if(kind==='glow')shapes='<path d="M99 111a61 61 0 0 1 122 0z" fill="#93efdf" opacity=".75"/><path d="M110 111q-15 36 8 66m17-66q16 22-1 71m22-71q-16 35 9 79m15-79q21 30 3 69m22-69q-13 28 12 56" stroke="#a8fff1" stroke-width="4" fill="none"/>'+circle(57,59,3,'#a8fff1')+circle(255,97,4,'#a8fff1');
 else if(kind==='vent')shapes='<path d="M0 186l52-22 46 11 39-23 48 18 60-18 75 27v31H0z" fill="#54747d"/><path d="M105 177l9-82 24 4 8 68m35 3 5-54 23-3 10 67" stroke="#b4bba2" stroke-width="10" fill="#697e76"/><path d="M125 90q-20-25 5-45m65 58q22-20 4-41" stroke="#bddecd" stroke-width="17" stroke-linecap="round" opacity=".35" fill="none"/>'+circle(137,30,6,'#8cd1c8')+circle(186,44,4,'#8cd1c8');
 else if(['ball','spin','bounce','reaction','test'].includes(kind))shapes='<path d="M45 160 Q140 -30 260 148" fill="none" stroke="#8be4dd" stroke-width="3" stroke-dasharray="7 7"/>'+circle(160,74,41,'#ffb15e')+'<path d="M120 73h80m-40-40v82m-28-73q52 33 0 63m56-63q-52 33 0 63" stroke="#573324" stroke-width="3" fill="none"/><path d="M32 161h255" stroke="#b5eeee" stroke-width="4"/>';
 else if(kind==='gears')shapes=[{x:116,y:98,r:47},{x:207,y:98,r:43}].map((g,i)=>`<g class="lab-gear gear-${i}" style="transform-origin:${g.x}px ${g.y}px">`+Array.from({length:12},(_,j)=>`<rect x="${g.x-9}" y="${g.y-g.r-12}" width="18" height="23" rx="3" fill="${i?'#ffb15e':'#77dacf'}" transform="rotate(${j*30} ${g.x} ${g.y})"/>`).join('')+circle(g.x,g.y,g.r,i?'#ffb15e':'#77dacf')+circle(g.x,g.y,17,'#102f40')+'</g>').join('');
 else if(kind==='bridge')shapes='<path d="M25 140h270M30 140L95 60 160 140 225 60 290 140M95 60h130M95 60v80M225 60v80" fill="none" stroke="#7cddd0" stroke-width="9" stroke-linejoin="round"/><path d="M30 144v35m260-35v35" stroke="#ffb15e" stroke-width="14"/>';
 else if(kind==='circuit')shapes='<path d="M68 145V62h60m40 0h86v83H68" fill="none" stroke="#7cddd0" stroke-width="7"/><path d="M128 62l39-28" stroke="#ffb15e" stroke-width="7"/><rect x="51" y="103" width="34" height="50" rx="4" fill="#e9bc64"/><path d="M58 115h19m-10-9v18" stroke="#163849" stroke-width="3"/>'+circle(254,104,24,'#f9e4ab')+'<path d="M244 105l20 0m-10-10v20" stroke="#7e652b" stroke-width="3"/>';
 else if(kind==='plane')shapes='<path d="M42 109l100-20 20-54 23-1-7 55 90 15 17 11-107 8-19 42-15-1 4-41-97 5z" fill="#d7f1ec"/><path d="M48 68h57m-76 21h57m-29 60h59" stroke="#ffb15e" stroke-width="5"/>';
 else if(kind==='friction')shapes='<path d="M34 156h252" stroke="#a9d8c4" stroke-width="7"/><path d="M78 119v-34h60l20 35 61 15v15H75z" fill="#ffb15e"/><path d="M51 174h84m-84 0 16-11m-16 11 16 11" stroke="#7cddd0" stroke-width="5" fill="none"/>';
 else if(kind==='sound'||kind==='bat')shapes='<path d="M68 82h30l36-30v106l-36-30H68z" fill="#7cddd0"/><path d="M155 75q28 30 0 60m22-80q50 50 0 100m25-122q70 70 0 144" stroke="#ffb15e" stroke-width="7" fill="none"/>';
 else if(kind==='lemonade')shapes='<path d="M63 91h195v83H63z" fill="#eab66d"/><path d="M47 49h225l-13 42H61z" fill="#7cddd0"/><path d="M76 28v145m171-145v145" stroke="#e7ebd6" stroke-width="7"/><path d="M129 110h50l-6 45h-37z" fill="#fff7b0"/>'+circle(226,136,15,'#f3db51')+'<path d="M155 115l12-25" stroke="white" stroke-width="4"/>';
 else if(kind==='build')shapes=Array.from({length:3},(_,r)=>Array.from({length:5-r*2},(_,c)=>`<rect x="${46+r*46+c*46}" y="${143-r*46}" width="41" height="41" rx="5" fill="${['#79d8ce','#efb570','#b8b1ed'][r]}"/>`).join('')).join('');
 else if(['octopus','axolotl','coral','turtle','cheetah','elephant','owl'].includes(kind)){
 const icons={octopus:'🐙',axolotl:'🦎',coral:'🪸',turtle:'🐢',cheetah:'🐆',elephant:'🐘',owl:'🦉'};shapes=`<text x="160" y="144" text-anchor="middle" font-size="100">${icons[kind]}</text>`;
 }else shapes='<path d="M10 120q40-28 80 0t80 0 80 0 80 0M10 150q40-28 80 0t80 0 80 0 80 0" stroke="#7cddd0" stroke-width="5" fill="none"/>'+circle(170,70,25,kind==='glow'?'#d8ffa7':'#ffb15e');
 return `<svg viewBox="0 0 320 210" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><rect width="320" height="210" rx="20" fill="#123448"/>${shapes}</svg>`;
}
function illustration(kind,cls='lab-art'){const n=E('div',cls);n.innerHTML=art(kind);return n;}
function mount(host,path,api){const L=(a,b)=>api.lang==='es'?b:a,P=pair=>pair[api.lang==='es'?1:0];let disposed=false,timer=null,frame=null;
 const area=path[1],id=path[2];host.classList.add('new-lab');
 const nav=E('nav','page-nav');nav.append(A(L('← Home','← Inicio'),'#home'));if(sections[area]&&id)nav.append(A('← '+P(sections[area]),'#learn/'+area));host.append(nav);
 function heading(title,sub){host.append(E('p','eyebrow',L('MAX’S LEARNING LAB','EL LABORATORIO DE MAX')),E('h1','',title),E('p','lab-intro',sub));}
 function reward(key){if(api.rewardMode)return false;return api.answer('practice:lab6:'+key);}
 function question(parent,key,q,opts,right,explain){const box=E('section','quiz-card lab-question'),status=E('p','quiz-feedback');status.setAttribute('role','status');box.dataset.labQuestion=key;box.append(E('p','eyebrow',L('YOUR TURN','TU TURNO')),E('h2','',q));const buttons=E('div','quiz-options');let done=false;opts.map((o,i)=>({o,i,r:Math.random()})).sort((a,b)=>a.r-b.r).forEach(({o,i})=>buttons.append(B(o,()=>{if(done)return;if(i===right){done=true;const fresh=reward(key);if(api.rewardMode)api.onRoundComplete?.(key);status.textContent=L('Yes! ','¡Sí! ')+(explain||'')+(api.rewardMode?L(' Market day complete!',' ¡Día de mercado completado!'):fresh?L(' +1 learning point!',' ¡+1 punto de aprendizaje!'):L(' Already earned—great practice!',' Ya lo ganaste. ¡Buena práctica!'));[...buttons.children].forEach(b=>b.disabled=true);[...buttons.children].find(b=>b.textContent===o)?.classList.add('correct');}else{status.textContent=L('Try again. Use the clues above.','Inténtalo otra vez. Usa las pistas de arriba.');[...buttons.children].find(b=>b.textContent===o)?.classList.add('retry');}},'')));box.append(buttons,status);parent.append(box);}
 function photo(key,alt,showCredit=true){const meta=window.MLL_LESSON_PHOTOS?.[key]||window.MLL_WONDER_PHOTOS?.[key];if(!meta)return E('p','',L('Photo unavailable','Foto no disponible'));const f=E('figure','lab-photo'),im=E('img');im.src=meta.src.replace(/^assets\//,document.documentElement.dataset.assetLayout==='flat'?'':'assets/');im.alt=(api.lang==='es'?meta.altEs:meta.alt)||alt;im.dataset.photoKey=key;im.loading='lazy';if(key==='owl')im.style.objectPosition='50% 15%';if(meta.focal)im.style.objectPosition=meta.focal;f.append(im);const c=E('figcaption','photo-credit');c.append(document.createTextNode(meta.credit+' · '));const a=A(meta.license,meta.source,'');a.target='_blank';a.rel='noopener';c.append(a);if(showCredit){c.prepend(E('span','lesson-photo-caption',im.alt));f.append(c);}return f;}
 if(sections[area]){
   const sec=sections[area],lesson=LESSONS.find(x=>x.section===area&&x.id===id);
   if(lesson){
     const jump=B(L('See all discoveries ↓','Ver todos los descubrimientos ↓'),()=>document.getElementById('all-discoveries')?.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth',block:'start'}),'button small collection-jump');nav.append(jump);
     heading(P(lesson.title),lesson.hook?P(lesson.hook):P(sec));
     const layout=E('div','lab-detail'),visual=photo(lesson.photoKey||lesson.id,P(lesson.title)),copy=E('div');
     if(lesson.specialty)copy.append(E('p','power-label',P(lesson.specialty)));
     const facts=E('ol','fact-list');P(lesson.facts).forEach(f=>facts.append(E('li','',f)));copy.append(facts);
     if(lesson.notice)copy.append(E('p','lesson-prompt',P(lesson.notice)));
     question(copy,area+':'+lesson.id,P(lesson.question),P(lesson.options),lesson.answer,lesson.explain?P(lesson.explain):P(lesson.options)[lesson.answer]+'.');
     const sources=E('details','fact-sources');sources.append(E('summary','',L('Where these facts come from','Fuentes de estos datos')));for(const source of lesson.sources||[{title:L('Read the reference','Leer la referencia'),url:lesson.source}]){const a=A(source.title,source.url,'');a.target='_blank';a.rel='noopener noreferrer';sources.append(a);}copy.append(sources);
     layout.append(visual,copy);host.append(layout);if(lesson.video)video(lesson);
     collection(lesson.id);
   }else{heading(P(sec),sec[api.lang==='es'?3:2]);collection();}
   if(area==='animals'){const payoff=E('details','camouflage-payoff');payoff.append(E('summary','',L('Bonus: try an octopus disguise','Extra: prueba un disfraz de pulpo')));const inner=E('section','lab-experiment');payoff.append(inner);host.append(payoff);camouflage(inner);}
 }else if(area==='lemonade')lemonade();else if(area==='build')build();else{heading(L('Choose a lab','Elige un laboratorio'),'');Object.entries(sections).forEach(([k,v])=>host.append(A(P(v),'#learn/'+k)));}
 function collection(exclude){const section=E('section','lesson-collection');section.id='all-discoveries';section.append(E('h2','collection-title',exclude?L('What will you discover next?','¿Qué descubrirás ahora?'):L('Choose a discovery','Elige un descubrimiento')));const grid=E('div','lab-lessons');LESSONS.filter(x=>x.section===area&&x.id!==exclude).forEach(x=>{const a=A('','#learn/'+area+'/'+x.id,'lab-lesson');const photoWrap=E('div','lesson-card-image');photoWrap.append(photo(x.photoKey||x.id,P(x.title),false));if(x.specialty)photoWrap.append(E('span','animal-specialty',P(x.specialty)));a.append(photoWrap);const text=E('div','lesson-card-copy');text.append(E('h2','',P(x.title)),E('p','',x.hook?P(x.hook):x.specialty?L('See this superpower in action.','Conoce este superpoder.'):L('Discover the story.','Descubre la historia.')),E('span','lab-card-cta',L('Explore →','Explorar →')));a.append(text);grid.append(a);});section.append(grid);host.append(section);}
 function video(lesson){const v=lesson.video,box=E('section','lesson-video');box.append(E('p','eyebrow',L('WATCH & WONDER','MIRA Y DESCUBRE')),E('h2','',P(v.title)),E('p','video-byline',(v.channel||v.provider)+' · '+(v.language==='es'?L('Video in Spanish','Video en español'):L('Video in English','Video en inglés'))));const player=E('div','video-player'),cover=photo(lesson.photoKey||lesson.id,P(lesson.title),false),play=B(L('▶ Watch the video','▶ Ver el video'),()=>{const iframe=E('iframe');iframe.title=P(v.title);iframe.src=v.provider==='vimeo'?'https://player.vimeo.com/video/'+v.id+'?dnt=1':'https://www.youtube-nocookie.com/embed/'+v.id+'?playsinline=1&rel=0&start='+(v.start||0)+'&hl='+api.lang;iframe.allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen';iframe.allowFullscreen=true;iframe.referrerPolicy='strict-origin-when-cross-origin';player.replaceChildren(iframe);},'button primary video-play');player.append(cover,play);box.append(player);const fallback=A(L('Open video separately ↗','Abrir video aparte ↗'),v.sourceUrl,'video-fallback');fallback.target='_blank';fallback.rel='noopener noreferrer';box.append(fallback,E('p','small-note',L('Videos need internet. If playback is unavailable here, use the link above.','Los videos necesitan internet. Si no se reproducen aquí, usa el enlace de arriba.')));host.append(box);}
 function camouflage(parent){parent.append(E('h2','',L('Try a camouflage coat','Prueba el camuflaje')));const box=E('div','camouflage-scene');box.innerHTML='<svg viewBox="0 0 320 170" aria-hidden="true"><g class="camo-animal" fill="#e780aa" stroke="#e780aa" stroke-width="9" stroke-linecap="round"><ellipse cx="160" cy="72" rx="31" ry="38"/>'+Array.from({length:8},(_,i)=>'<path d="M'+(140+i*6)+' 92 Q'+(83+i*21)+' 153 '+(64+i*28)+' 118" fill="none"/>').join('')+'<circle cx="149" cy="69" r="4" fill="#18384a" stroke="none"/><circle cx="171" cy="69" r="4" fill="#18384a" stroke="none"/></g></svg>';const text=E('p','lab-readout');parent.append(box);for(const[col,en,es]of [['#9e7856','Sand','Arena'],['#52785b','Seaweed','Algas'],['#657e9b','Rock','Roca'],['#c4b999','Shell fragments','Fragmentos de conchas'],['#6c654e','Pebbles','Guijarros'],['#9b6849','Rust-colored rock','Roca rojiza'],['#adc1bc','Pale stone','Piedra clara'],['#534c42','Dark gravel','Grava oscura'],['#6f8854','Seagrass','Pasto marino'],['#7d6359','Coral rubble','Restos de coral'],['#cab58d','Rippling sand','Arena ondulada'],['#756857','Muddy bottom','Fondo lodoso'],['#354958','Shaded reef','Arrecife en sombra']])parent.append(B(L(en,es),()=>{box.style.backgroundColor=col;box.querySelector('.camo-animal').setAttribute('fill',col);box.querySelector('.camo-animal').setAttribute('stroke',col);text.textContent=L('A similar color makes the outline harder to spot.','Un color parecido hace más difícil ver la forma.');}));parent.append(text,E('p','small-note',L('Illustration: a real octopus also changes patterns and skin texture.','Ilustración: un pulpo real también cambia los dibujos y la textura de su piel.')));question(parent,'camouflage-test',L('Which coat would help hide on green seaweed?','¿Qué color ayudaría a esconderse entre algas verdes?'),[L('Bright pink','Rosado brillante'),L('Green','Verde'),L('White spots on black','Blanco sobre negro')],1,'');}
 function lemonade(){heading(L('Money & Mini Business','Dinero y pequeños negocios'),L('Plan a lemonade stand. Learn what you earn, spend, and keep.','Planea un puesto de limonada. Aprende lo que ganas, gastas y conservas.'));if(api.rewardMode)host.append(E('p','reward-session-note',L('Paid session · market day ','Sesión pagada · día de mercado ')+api.roundNumber+' / '+api.roundLimit));let state=api.get('lemonade',null);if(!state){state={id:api.nextRandom('lemonade',Array.from({length:24},(_,i)=>String(i))),cups:6,price:2,sold:null};api.set('lemonade',state);}const n=+state.id,cost=1,budget=12,hot=n%3===0,rain=n%3===1,visitors=8+(n%4)*2+(hot?6:rain?-2:0);const scene=illustration('lemonade','stand-art');host.append(scene);const panel=E('section','lab-experiment');host.append(panel);panel.append(E('h2','',L('Market day ','Día de mercado ')+(n+1)),E('p','',hot?L('Sunny and hot: expect more thirsty visitors.','Hace sol y calor: espera más visitantes con sed.'):rain?L('Rainy: expect fewer visitors.','Llueve: espera menos visitantes.'):L('A mild day in the neighborhood.','Un día templado en el barrio.')),E('p','',L('Practice budget: $12. Supplies cost $1 per cup. Money here is pretend—it is separate from the credits used to enter.','Presupuesto de práctica: $12. Preparar un vaso cuesta $1. El dinero es imaginario: es distinto de los créditos usados para entrar.')));
 const form=E('div','stand-controls');for(const[key,en,es,vals]of [['cups','Cups to prepare','Vasos que preparar',[2,4,6,8,10,12]],['price','Price per cup','Precio por vaso',[1,2,3,4]]]){const label=E('label','lab-control-label',L(en,es)),select=E('select');select.id='stand-'+key;label.htmlFor=select.id;vals.forEach(v=>{const opt=E('option','',key==='price'?'$'+v:String(v));opt.value=v;select.append(opt);});select.value=state[key];select.disabled=state.sold!==null;select.onchange=()=>{state[key]=+select.value;api.set('lemonade',state);preview();};form.append(label,select);}const forecast=E('p','lab-readout');function preview(){forecast.textContent=L('Supply cost: $','Costo de preparación: $')+state.cups+L(' · Budget left before sales: $',' · Presupuesto restante antes de vender: $')+(budget-state.cups);}preview();panel.append(form,forecast,E('p','small-note',L('Higher prices may mean fewer buyers. Unsold lemonade is not saved for tomorrow.','Un precio más alto puede atraer menos compradores. La limonada sobrante no se guarda para mañana.')));
 const results=E('div');const open=B(L('Open my stand →','Abrir mi puesto →'),()=>{if(state.sold!==null)return;state.sold=Math.min(state.cups,Math.max(0,visitors-(state.price-1)*4));api.set('lemonade',state);show();},'button primary');panel.append(open,results);
 function show(){if(state.sold===null)return;open.disabled=true;form.querySelectorAll('select').forEach(s=>s.disabled=true);results.replaceChildren();const revenue=state.sold*state.price,expense=state.cups*cost,profit=revenue-expense;const ledger=E('dl','stand-ledger');for(const[k,v]of [[L('Cups sold','Vasos vendidos'),state.sold],[L('Unsold cups','Vasos sin vender'),state.cups-state.sold],[L('Sales money','Dinero de ventas'),'$'+revenue],[L('Supply cost','Costo de preparación'),'$'+expense],[L('Profit (sales − cost)','Ganancia (ventas − costo)'),'$'+profit]]){ledger.append(E('dt','',k),E('dd','',String(v)));}results.append(ledger,E('p','',profit<0?L('This day lost money. Try making fewer cups or changing the price next time.','Este día perdió dinero. Prueba preparar menos vasos o cambiar el precio.'):L('Sales are not all profit: first subtract what supplies cost.','No todas las ventas son ganancia: primero resta el costo de preparar.')));question(results,'lemonade:'+n,L('You started with $12. After paying costs and collecting sales, how much money is left?','Empezaste con $12. Después de pagar costos y cobrar ventas, ¿cuánto dinero queda?'),[budget+profit,budget+profit+2,budget+profit+4].map(v=>'$'+v).sort((a,b)=>Number(a.slice(1))-Number(b.slice(1))),0,L('Starting money + profit = money left.','Dinero inicial + ganancia = dinero restante.'));results.append(B(L(api.roundNumber>=3?'Finish session →':'Next market day →',api.roundNumber>=3?'Terminar sesión →':'Siguiente día →'),()=>{if(api.rewardMode){api.nextRound();return;}api.set('lemonade',null);api.refresh();},'button primary'));}show();
 }
 function build(){heading(L('Build It Lab','Laboratorio de construcción'),L('Read the blueprint. Tap squares to place blocks. Tap again to remove them.','Lee el plano. Toca los cuadros para poner bloques. Toca otra vez para quitarlos.'));const shapes=[['001100','001100','011110','011110','111111','110011'],['000000','000000','111111','100001','100001','100001'],['001100','011110','111111','001100','001100','001100'],['000000','000000','001100','001100','011110','111111'],['000000','000000','000000','111111','010010','010010'],['001100','001100','111111','011110','010010','110011'],['000000','100001','110011','111111','111111','111111'],['001000','001100','001110','001111','001000','111111']];
 const patterns=[],seen=new Set();for(const shape of shapes){let rot=shape;for(let turn=0;turn<4;turn++){const key=rot.join('');if(!seen.has(key)){seen.add(key);patterns.push(rot);}rot=Array.from({length:6},(_,y)=>Array.from({length:6},(_,x)=>rot[5-x][y]).join(''));}}patterns.length=24;
 if(api.rewardMode)host.append(E('p','reward-session-note',L('Paid session · blueprint ','Sesión pagada · plano ')+api.roundNumber+' / '+api.roundLimit));let state=api.get('build',null);if(!state){state={id:api.nextRandom('build',Array.from({length:24},(_,i)=>String(i))),cells:[],checked:false};api.set('build',state);}const num=+state.id,pattern=patterns[num];const target=pattern.flatMap((r,y)=>[...r].flatMap((v,x)=>v==='1'?[y*6+x]:[]));const wrap=E('div','build-layout'),plan=E('section'),work=E('section');plan.append(E('h2','',L('Blueprint ','Plano ')+(num+1)));const miniature=E('div','blueprint-grid');miniature.setAttribute('role','img');miniature.setAttribute('aria-label',L('Target block pattern','Patrón de bloques objetivo'));for(let i=0;i<36;i++)miniature.append(E('span',target.includes(i)?'filled':''));plan.append(miniature,E('p','',target.length+' '+L('blocks in the plan','bloques en el plano')));work.append(E('h2','',L('Your workbench','Tu mesa de trabajo')));const grid=E('div','build-grid');grid.setAttribute('role','group');grid.setAttribute('aria-label',L('Six by six building grid','Cuadrícula de seis por seis'));const count=E('p','lab-readout'),status=E('p');status.setAttribute('role','status');function paint(){[...grid.children].forEach((b,i)=>{b.classList.toggle('filled',state.cells.includes(i));b.setAttribute('aria-pressed',String(state.cells.includes(i)));});count.textContent=state.cells.length+' / '+target.length+' '+L('blocks','bloques');}for(let i=0;i<36;i++){const b=B('',()=>{state.cells=state.cells.includes(i)?state.cells.filter(v=>v!==i):[...state.cells,i];state.checked=false;api.set('build',state);status.textContent='';paint();},'build-cell');b.setAttribute('aria-label',L('Row ','Fila ')+(Math.floor(i/6)+1)+L(', column ', ', columna ')+(i%6+1));grid.append(b);}work.append(grid,count,B(L('Check my build','Revisar construcción'),()=>{const matches=state.cells.length===target.length&&target.every(i=>state.cells.includes(i));if(matches){const fresh=reward('build:'+num);if(api.rewardMode)api.onRoundComplete?.('build:'+num);state.checked=true;api.set('build',state);status.textContent=L('Blueprint matched!','¡El plano coincide!')+(api.rewardMode?L(' Great building!',' ¡Gran construcción!'):fresh?' +1 ★':L(' Already earned.',' Ya ganado.'));grid.classList.add('build-success');}else{const missing=target.filter(i=>!state.cells.includes(i)).length,extra=state.cells.filter(i=>!target.includes(i)).length;status.textContent=L('Compare row by row: ','Compara fila por fila: ')+missing+L(' missing, ',' faltan, ')+extra+L(' extra.',' sobran.');}},'button primary'),B(L('Clear blocks','Quitar bloques'),()=>{state.cells=[];state.checked=false;api.set('build',state);paint();status.textContent='';}),status);wrap.append(plan,work);host.append(wrap,E('p','small-note',L('A spatial-design puzzle: match position, shape, and symmetry. This is not a structural-strength simulation.','Un reto de diseño espacial: compara posición, forma y simetría. No simula la resistencia de una estructura.')),B(L(api.roundNumber>=3?'Finish session →':'Another blueprint →',api.roundNumber>=3?'Terminar sesión →':'Otro plano →'),()=>{if(api.rewardMode){api.nextRound();return;}api.set('build',null);api.refresh();},'button'));paint();
 }
 return ()=>{disposed=true;if(timer)clearTimeout(timer);if(frame)cancelAnimationFrame(frame);};
}
window.MLL_LABS={mount,sections,art,lessons:LESSONS};
window.MLL_HOME_THUMBS=Object.freeze({...window.MLL_HOME_THUMBS,lemonade:art('lemonade'),build:art('build')});
})();

;
/* Max's Learning Lab — edit content in data/, not in this application shell. */
(function () {
  'use strict';
  const I = window.MLL_I18N, t = value => I.t(value), l = (en, es) => I.pick(en, es);
  const config = window.MLL_CONFIG;
  const english = {family:[...(window.MLL_PLACES_FAMILY||[]),...(window.MLL_FAMILY_EXTRA||[]),...(window.MLL_FAMILY_NEW||[])],a:window.MLL_PLACES_A||[],b:window.MLL_PLACES_B||[],people:[...(window.MLL_PEOPLE||[]).map(p=>({...p,...window.MLL_PEOPLE_EXTRA?.[p.id]})),...(window.MLL_MORE_PEOPLE_A||[]),...(window.MLL_MORE_PEOPLE_B||[]),...(window.MLL_MESSI||[])]};
  // Update this family note without requiring another data-folder upload.
  const guayaquilFamily = english.family.find(place=>place.id==='guayaquil');
  if(guayaquilFamily)guayaquilFamily.familyNote="Mom is from Guayaquil! Your abuelitos, tíos, tías, and primos live there. Ask Mom about her favorite place from childhood and her favorite restaurant or food when she goes home.";
  const photos = {...window.MLL_PHOTOS,...window.MLL_MORE_PHOTOS,...window.MLL_FAMILY_EXTRA_PHOTOS,...window.MLL_FAMILY_NEW_PHOTOS,...window.MLL_CITY_PHOTOS_A,...window.MLL_CITY_PHOTOS_B,...window.MLL_MESSI_PHOTOS,...window.MLL_V7_LOCATION_PHOTOS};
  const photoEs={...window.MLL_ES_PHOTO_ALT,...window.MLL_MORE_ES_PHOTO_ALT,...window.MLL_FAMILY_EXTRA_ES_PHOTO_ALT,...window.MLL_FAMILY_NEW_ES_ALT,...window.MLL_CITY_ES_ALT_A,...window.MLL_CITY_ES_ALT_B,...window.MLL_MESSI_ES_PHOTO_ALT};
  const art=[...(window.MLL_ART_A||[]),...(window.MLL_ART_B||[])];
  const validTasks=new Set([...Array.from({length:40},(_,i)=>'spy:'+String(i+1).padStart(3,'0')),...['en','es'].flatMap(lang=>Array.from({length:100},(_,i)=>'wordsearch:'+lang+':'+String(i+1).padStart(3,'0'))),...art.map(a=>'draw:'+a.id)]);
  const galleries={...window.MLL_GALLERY_A,...window.MLL_GALLERY_B,...window.MLL_GALLERY_C};
  // Match the public repository's top-level photo folders.
  // The layout flag keeps the original assets/ layout compatible too.
  if(document.documentElement.dataset.assetLayout==='flat'){
    for(const photo of [...Object.values(photos),...Object.values(galleries).flat()]){
      if(photo && typeof photo.src==='string')photo.src=photo.src.replace(/^assets\//,'');
    }
  }
  let family=[],surprises=[],nature=[],places=[],people=[],byId=new Map();
  function localizeRecords(original,translated){const lookup=new Map((translated||[]).map(p=>[p.id,p]));return original.map(p=>I.lang==='es'?{...p,...(lookup.get(p.id)||{})}:p);}
  function loadContent(){
    family=localizeRecords(english.family,[...(window.MLL_ES_FAMILY||[]),...(window.MLL_ES_FAMILY_EXTRA||[]),...(window.MLL_ES_FAMILY_NEW||[])]).map(p=>({...p,family:true}));
    nature=[...localizeRecords(english.a,window.MLL_ES_A),...localizeRecords(english.b,window.MLL_ES_B)];
    surprises=localizeRecords([...(window.MLL_CITIES_A||[]),...(window.MLL_CITIES_B||[])],[...(window.MLL_ES_CITIES_A||[]),...(window.MLL_ES_CITIES_B||[])]);
    places=[...family,...nature.filter(p=>['faroe','victoria','iceland-lights','maasai-mara'].includes(p.id)),...surprises,...nature.filter(p=>!['faroe','victoria','iceland-lights','maasai-mara'].includes(p.id))];people=localizeRecords(english.people,[...(window.MLL_ES_PEOPLE||[]).map(p=>({...p,...window.MLL_ES_PEOPLE_EXTRA?.[p.id]})),...(window.MLL_MORE_ES_PEOPLE_A||[]),...(window.MLL_MORE_ES_PEOPLE_B||[]),...(window.MLL_ES_MESSI||[])]);byId=new Map(places.map(p=>[p.id,p]));
  }
  loadContent();
  const view = document.getElementById('view');
  const STORAGE = 'max-learning-lab-v1';
  const empty = () => ({version:1,name:config.name,badge:config.badges[0],visited:[],stamps:[],quiz:[],badges:{},deck:[],lastSurprise:null,games:{},answers:[],voice:{},completedTasks:[],baseball:{spent:0,started:0,finished:0,active:null,lastResult:null},rewards:{spent:0,active:{},finished:{}},scoringVersion:2,legacyPoints:0,pointEvents:[],claimedItems:[]});
  let memoryOnly=false;
  function normalize(input) {
    const next=empty();if(!input||typeof input!=='object')return next;
    if(typeof input.name==='string' && input.name.trim()) next.name=input.name.trim().slice(0,20);
    if(config.badges.includes(input.badge))next.badge=input.badge;
    for(const key of ['visited','stamps','deck'])if(Array.isArray(input[key]))next[key]=[...new Set(input[key].filter(id=>byId.has(id)))];
    if(Array.isArray(input.quiz))next.quiz=[...new Set(input.quiz.filter(id=>typeof id==='string'&&id.length<70))];
    if(input.badges&&typeof input.badges==='object')for(const[k,v]of Object.entries(input.badges))if(typeof v==='string'&&k.length<60)next.badges[k]=v.slice(0,90);
    if(input.games&&typeof input.games==='object'&&!Array.isArray(input.games))next.games=input.games;
    if(Array.isArray(input.answers))next.answers=[...new Set(input.answers.filter(id=>typeof id==='string'&&/^(person|place|practice):[a-z0-9:._-]{1,160}$/.test(id)))].slice(0,100000);
    else next.answers=next.quiz.filter(id=>byId.has(id)||english.people.some(p=>p.id===id)).map(id=>(byId.has(id)?'place:':'person:')+id+':1');
    if(input.voice&&typeof input.voice==='object')for(const lang of ['en','es'])if(typeof input.voice[lang]==='string')next.voice[lang]=input.voice[lang].slice(0,500);
    if(Array.isArray(input.completedTasks))next.completedTasks=[...new Set(input.completedTasks.filter(id=>validTasks.has(id)))];
    next.baseball=normalizeBaseball(input.baseball);next.rewards=normalizeRewards(input.rewards);
    migrateScoring(input,next);
    next.deck=next.deck.filter(id=>surprises.some(p=>p.id===id));
    if(byId.has(input.lastSurprise))next.lastSurprise=input.lastSurprise;
    return next;
  }
  let state;try{state=normalize(JSON.parse(localStorage.getItem(STORAGE)));}catch(e){state=empty();memoryOnly=true;}
  let dispose=null,toastTimer,readingButton=null,routeToken=0,celebrationTimer=null,preserveActivitySelection=false;
  const $=id=>document.getElementById(id);
  function save(){try{localStorage.setItem(STORAGE,JSON.stringify(state));}catch(e){if(!memoryOnly)toast('Progress can’t be saved in this browser.');memoryOnly=true;}updateHeader();}
  function answer(id){if(state.answers.includes(id))return false;state.answers.push(id);const fresh=addPoint('answer:'+id);save();celebrate(fresh?1:0);return fresh;}
  function points(){return state.legacyPoints+state.pointEvents.length;}
  function dismissCelebration(){clearTimeout(celebrationTimer);document.getElementById('task-celebration')?.remove();}
  function celebrate(amount=1,message){
    dismissCelebration();const box=el('div','task-celebration');box.id='task-celebration';box.setAttribute('role','status');box.setAttribute('aria-live','polite');
    const star=el('span','celebration-star','✦');star.setAttribute('aria-hidden','true');box.append(star,el('strong','',message||(amount?l('+'+amount+' '+(amount===1?'point!':'points!'),'¡+'+amount+' '+(amount===1?'punto!':'puntos!')):l('Great practice!','¡Muy buena práctica!'))),el('span','celebration-caption',l('Look what you can do.','¡Mira lo que puedes hacer!')));
    for(let i=0;i<14;i++){const bit=el('i','celebration-bit');bit.setAttribute('aria-hidden','true');bit.style.setProperty('--i',i);bit.style.setProperty('--x',((i*71)%280-140)+'px');bit.style.setProperty('--y',(-55-(i*31)%120)+'px');bit.style.setProperty('--r',(i*53)+'deg');box.append(bit);}document.body.append(box);celebrationTimer=setTimeout(dismissCelebration,2600);
  }
  function completeTask(id){if(!validTasks.has(id))return false;const fresh=!state.completedTasks.includes(id);let earned=false;if(fresh){state.completedTasks.push(id);if(id.startsWith('draw:'))earned=addPoint('task:'+id);save();}celebrate(earned?1:0,fresh&&!id.startsWith('draw:')?l('Puzzle complete!','¡Completaste el reto!'):null);return fresh;}
  function pointEvents(){return state.pointEvents;}
  function addPoint(event){if(state.pointEvents.includes(event))return false;state.pointEvents.push(event);return true;}
  function validFoundItem(id){
    if(typeof id!=='string')return false;
    const word=/^wordsearch:(en|es):(\d{3}):([0-9])$/.exec(id);
    if(word)return +word[2]>=1&&+word[2]<=100;
    const spy=/^spy:(\d{3}):([a-z0-9-]+)$/.exec(id);
    return !!(spy&&+spy[1]>=1&&+spy[1]<=40&&art.some(a=>a.id===spy[2]));
  }
  function validPointEvent(id){
    if(typeof id!=='string')return false;
    if(id.startsWith('item:'))return validFoundItem(id.slice(5));
    if(id.startsWith('task:draw:'))return validTasks.has(id.slice(5));
    return /^answer:(person|place|practice):[a-z0-9:._-]{1,160}$/.test(id);
  }
  function migrateScoring(input,next){
    next.scoringVersion=2;
    if(input.scoringVersion===2){
      next.legacyPoints=Number.isSafeInteger(input.legacyPoints)&&input.legacyPoints>=0?Math.min(10000000,input.legacyPoints):0;
      next.pointEvents=Array.isArray(input.pointEvents)?[...new Set(input.pointEvents.filter(validPointEvent))].slice(0,100000):[];
      next.claimedItems=Array.isArray(input.claimedItems)?[...new Set(input.claimedItems.filter(validFoundItem))].slice(0,10000):[];
      return;
    }
    // Honor the previous scoring rules once. Future correct actions each earn one.
    next.legacyPoints=next.answers.length*10+next.completedTasks.length;
    next.pointEvents=[];next.claimedItems=[];
    for(const[key,value]of Object.entries(next.games)){
      if(!value||typeof value!=='object'||!Array.isArray(value.found))continue;
      if(/^wordsearch:(en|es):\d{3}$/.test(key))for(const found of value.found){const id=key+':'+found.index;if(validFoundItem(id))next.claimedItems.push(id);}
      const spy=/^spy:progress:(\d+)$/.exec(key);
      if(spy)for(const item of value.found){const id='spy:'+spy[1].padStart(3,'0')+':'+item;if(validFoundItem(id))next.claimedItems.push(id);}
    }
    next.claimedItems=[...new Set(next.claimedItems)];
  }
  function findItem(id){
    if(!validFoundItem(id)||state.claimedItems.includes(id))return false;
    const parent=id.slice(0,id.lastIndexOf(':'));
    if(state.completedTasks.includes(parent))return false;
    state.claimedItems.push(id);const fresh=addPoint('item:'+id);save();
    if(fresh)toast(l('+1 learning point!','¡+1 punto de aprendizaje!'));
    return fresh;
  }
  function nextRandom(key,values){
    const ids=[...new Set(values)];if(!ids.length)return undefined;
    const all=state.games.randomDecks&&typeof state.games.randomDecks==='object'&&!Array.isArray(state.games.randomDecks)?state.games.randomDecks:{};
    const previous=all[key]&&typeof all[key]==='object'?all[key]:{},allowed=new Set(ids);
    let deck=Array.isArray(previous.deck)?[...new Set(previous.deck)].filter(id=>allowed.has(id)):[];
    if(!deck.length)deck=shuffle(ids);
    if(deck.length>1&&deck[deck.length-1]===previous.last)[deck[0],deck[deck.length-1]]=[deck[deck.length-1],deck[0]];
    const chosen=deck.pop();all[key]={deck,last:chosen};state.games.randomDecks=all;save();return chosen;
  }

  function personDone(p){return [1,2].every(n=>state.answers.includes('person:'+p.id+':'+n));}
  function el(tag,cls,text){const n=document.createElement(tag);if(cls)n.className=cls;if(text!=null)n.textContent=t(text);return n;}
  function button(text,cls,fn){const b=el('button',cls||'button',text);b.type='button';if(fn)b.addEventListener('click',fn);return b;}
  function link(text,href,cls){const a=el('a',cls||'',text);a.href=href;return a;}
  function external(text,url,cls){const a=link(text,url,cls);a.target='_blank';a.rel='noopener noreferrer';return a;}
  function heading(kicker,title,description){const row=el('div','page-heading'),text=el('div');text.append(el('p','eyebrow',kicker),el('h1','',title));if(description)text.append(el('p','',description));row.append(text);return row;}
  function topNav(back='#home',label='← Explore the lab'){const n=el('nav','page-nav');n.setAttribute('aria-label',t('Activity navigation'));n.append(link(label,back,'back-link'));if(back!=='#home')n.append(link('⌂ Home','#home','button small ghost'));view.append(n);return n;}
  function toast(text){clearTimeout(toastTimer);$('toast').textContent=t(text);$('toast').classList.add('show');toastTimer=setTimeout(()=>$('toast').classList.remove('show'),3300);}
  function updateHeader(){ $('brand-name').textContent=l(state.name.toUpperCase()+"'S",state.name.toUpperCase());$('avatar-symbol').textContent=state.badge;$('nav-count').textContent=state.visited.length;const score=$('header-points');if(score){score.textContent='★ '+baseballBalance();score.setAttribute('aria-label',l(baseballBalance()+' credits available',baseballBalance()+' créditos disponibles'));score.title=l('Credits available to play','Créditos disponibles para jugar');}const total=$('collection-totals');if(total)total.textContent=l(places.length+' places. '+people.length+' remarkable people. Science discoveries, learning activities, and earned baseball games.',places.length+' lugares. '+people.length+' personas extraordinarias. Descubrimientos científicos, actividades de aprendizaje y béisbol como premio.'); }
  function stopReading(){if('speechSynthesis'in window)window.speechSynthesis.cancel();if(readingButton){readingButton.classList.remove('listen-on');readingButton.textContent=readingButton.dataset.beforeReading||t('◖ Listen');readingButton=null;}}
// Quality hints are name-based: Web Speech provides no quality or gender field.
function rankSpanishVoices(availableVoices) {
  const locale = voice => (voice.lang || '').replace(/_/g, '-').toLowerCase();
  const spanish = availableVoices.filter(v => /^es(?:-|$)/.test(locale(v)));
  const score = voice => {
    const name = voice.name || '';
    let quality = /google.*espa[ñn]ol|google.*spanish/i.test(name) ? 600
      : /premium/i.test(name) ? 550
      : /natural|neural/i.test(name) ? 500
      : /enhanced|mejorad[ao]/i.test(name) ? 450
      : /monica|mónica|paulina|marisol|francisca|sabina|helena/i.test(name) ? 300
      : 100;
    // Latin American Spanish is a tie-breaker, never more important than quality.
    const dialects = ['es-ec', 'es-mx', 'es-us', 'es-419', 'es-es'];
    const index = dialects.indexOf(locale(voice));
    return quality + (index < 0 ? 0 : 10 - index);
  };
  return spanish.sort((a, b) => score(b) - score(a) || a.name.localeCompare(b.name));
}

  let voices=[];function refreshVoices(){if('speechSynthesis' in window)voices=window.speechSynthesis.getVoices();}
  refreshVoices();if('speechSynthesis' in window)window.speechSynthesis.addEventListener('voiceschanged',refreshVoices);
  function read(text,b){
    if(!('speechSynthesis'in window)||!('SpeechSynthesisUtterance'in window)){toast('Read-aloud is not available in this browser.');return;}
    if(b&&readingButton===b){stopReading();return;}stopReading();refreshVoices();
    const wanted=I.lang==='es'?'es':'en';const matches=voices.filter(v=>v.lang.toLowerCase().replace('_','-').split('-')[0]===wanted);
    const preferred=I.lang==='es'?['es-EC','es-MX','es-US','es-419','es-ES']:['en-US','en-GB'];
    if(wanted==='es')matches.splice(0,matches.length,...rankSpanishVoices(matches));else matches.sort((a,b)=>{const rank=v=>{const code=v.lang.replace('_','-');const index=preferred.indexOf(code);const rank=I.lang==='es'?(code==='es-ES'?9:index>=0?index:5):(index<0?10:index);return rank+(/premium|enhanced|natural|neural/i.test(v.name)?-2:0)+(v.localService?0:.1);};return rank(a)-rank(b);});
    if(!voices.length){toast(l('Voices are still loading. Please tap Listen again in a moment.','Las voces se están cargando. Toca Escuchar de nuevo en un momento.'));return;}
    if(!matches.length){toast(l('Add an English voice in your device settings to listen.','Para escuchar, agrega una voz en español en los ajustes de tu dispositivo.'));return;}
    const u=new SpeechSynthesisUtterance(text);u.rate=I.lang==='es'?1:.96;u.pitch=1;u.lang=I.lang==='es'?'es-MX':'en-US';const selected=matches.find(v=>(v.voiceURI||v.name)===state.voice[I.lang])||matches[0];if(selected){u.voice=selected;u.lang=selected.lang;}
    if(b){readingButton=b;b.dataset.beforeReading=b.textContent;b.textContent=t('■ Stop reading');b.classList.add('listen-on');}
    u.onend=()=>{if(readingButton===b&&b){b.textContent=b.dataset.beforeReading||t('◖ Listen');b.classList.remove('listen-on');readingButton=null;}};
    u.onerror=event=>{u.onend();if(!['interrupted','canceled'].includes(event.error))toast(l('The voice could not start. Check the voices in your device settings.','No se pudo iniciar la voz. Revisa las voces en los ajustes de tu dispositivo.'));};
    window.speechSynthesis.speak(u);
  }
  const badgeText={
    'five-places':['Five-place explorer','Explorador de cinco lugares'],
    'twenty-places':['World wanderer','Viajero del mundo'],
    'all-places':['Every destination discovered','Todos los destinos descubiertos'],
    'curious-five':['Five curious answers','Cinco respuestas curiosas'],
    'baseball-played':['Ballpark explorer','Explorador del estadio'],
    'baseball-homer':['Home run hero','Héroe del jonrón'],
    'blocks-builder':['Shape builder','Constructor de figuras'],
    'blocks-first-row':['Shape builder','Constructor de figuras'],
    'pattern-artist':['Pattern artist','Artista de patrones'],
    'ocean-explorer':['Ocean explorer','Explorador del océano']
  };
  function badgeLabel(key,fallback){const pair=badgeText[key]||window.MLL_GAME_BADGES?.[key];return pair?l(pair[0],pair[1]):fallback;}
  function award(key,label){if(state.badges[key])return;const pair=badgeText[key]||window.MLL_GAME_BADGES?.[key];state.badges[key]=pair?pair[0]:label;save();toast('✦ '+badgeLabel(key,label));}
  function shuffle(a){const b=a.slice();for(let i=b.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[b[i],b[j]]=[b[j],b[i]];}return b;}
  function surprise(){if(!surprises.length)return;if(!state.deck.length){state.deck=shuffle(surprises.map(p=>p.id));if(state.deck.length>1&&state.deck[state.deck.length-1]===state.lastSurprise)[state.deck[0],state.deck[state.deck.length-1]]=[state.deck[state.deck.length-1],state.deck[0]];}const id=state.deck.pop();state.lastSurprise=id;save();location.hash='place/'+id+'?from=surprise';}
  function markVisited(id){if(!state.visited.includes(id)){state.visited.push(id);save();if(state.visited.length===5)award('five-places','Five-place explorer');if(state.visited.length===20)award('twenty-places','World wanderer');if(state.visited.length===places.length)award('all-places','Every destination discovered');}}
  function collectionJump(id,label){return button(label,'button small collection-jump',()=>{const target=document.getElementById(id);target?.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth',block:'start'});});}
  function picture(p,cls,lazy=true){const photo=photos[p.id];const img=el('img',cls);img.alt=(I.lang==='es'?(photo?.altEs||photoEs[p.id]):null)||photo?.alt||p.photoAlt||p.name;if(photo?.src)img.src=photo.src;img.loading=lazy?'lazy':'eager';img.decoding='async';if(photo){img.width=photo.width||1000;img.height=photo.height||700;const focal=window.MLL_PORTRAIT_DIRECTIONS?.[p.id];if(focal){img.dataset.personId=p.id;img.style.objectFit=cls==='person-card-photo'?focal.gridFit:'contain';img.style.objectPosition=cls==='person-card-photo'?focal.squarePosition:'center';}}return img;}
  function placeCard(p,from='places'){
    const neutral={guayaquil:['A city with a park full of iguanas!','¡Una ciudad con un parque lleno de iguanas!'],kirkland:['A lakeside city with parks to explore.','Una ciudad junto al lago con parques para explorar.'],exuma:['Clear blue water and lemon sharks.','Agua azul transparente y tiburones limón.'],'santa-cruz-bolivia':['Look for sloths in the city’s trees.','Busca perezosos en los árboles de la ciudad.'],'mar-del-plata':['A seaside city with sea lions by the harbor.','Una ciudad costera con lobos marinos junto al puerto.'],medellin:['Cable cars above the city and a flower parade.','Teleféricos sobre la ciudad y un desfile de flores.'],boise:['A green path follows the river through the city.','Un camino verde sigue el río por la ciudad.'],'las-terrenas':['A seaside town near rocks that look like whales.','Un pueblo costero cerca de rocas que parecen ballenas.']};
    const a=link('', '#place/'+p.id+'?from='+from,'place-card');a.append(picture(p));a.append(el('span','place-tag',p.country));if(state.visited.includes(p.id))a.append(el('span','visited-dot','✓'));const c=el('div','place-card-copy');c.append(el('h2','',p.id==='kirkland'?'Kirkland, Washington':p.name),el('p','',neutral[p.id]?l(...neutral[p.id]):p.hook));a.append(c);return a;
  }
  function surpriseCard(){
    const b=button('','place-card surprise-card',surprise),scene=nature.find(p=>p.id==='machu-picchu')||nature.find(p=>/Machu/.test(p.name))||nature[0];
    if(scene){const img=picture(scene);img.alt=l('A mystery destination waiting to be discovered','Un destino misterioso por descubrir');b.append(img);}
    const c=el('div','place-card-copy');c.append(el('p','eyebrow',l('50 CITIES · ONE SURPRISE','50 CIUDADES · UNA SORPRESA')),el('h2','',l('Randomizer','Destino sorpresa')),el('p','',l('Where will you go? Tap to find out.','¿Adónde irás? Toca para descubrirlo.')));b.append(c,el('span','card-arrow','→'));return b;
  }
  function questionBank(){return [...people.flatMap(p=>[p.quiz,p.quiz2].filter(Boolean).map((q,i)=>({...q,id:'person:'+p.id+':'+(i+1),question:p.name+': '+q.question,clue:p.facts.join(' ')}))),...places.flatMap(p=>[p.quiz,p.quiz2].filter(Boolean).map((q,i)=>({...q,id:'place:'+p.id+':'+(i+1),question:p.name+': '+q.question,clue:p.facts.join(' ')}))),...window.MLL_NEW_LESSONS.map(x=>({id:'practice:lab6:'+x.section+':'+x.id,question:l(x.title[0],x.title[1])+': '+l(x.question[0],x.question[1]),options:l(x.options[0],x.options[1]),answer:x.answer,explain:l(x.options[0],x.options[1])[x.answer]+'.',clue:l(x.facts[0],x.facts[1]).join(' ')}))];}
  function nextHomePlace(){const id=nextRandom('home:places',places.filter(p=>photos[p.id]?.src).map(p=>p.id));state.games.homePlaceLast=id;return byId.get(id);}
  function home(){
    view.classList.add('discovery-home');document.title=l(state.name+"'s Learning Lab",'El laboratorio de '+state.name);
    const featurePool=people.filter(p=>p.id!=='lionel-messi');const personId=nextRandom('home:people',featurePool.map(p=>p.id));const featured=featurePool.find(p=>p.id===personId);const featuredPlace=nextHomePlace();save();
    const paths=el('section','discovery-paths');paths.setAttribute('aria-label',l('Explore the lab','Explora el laboratorio'));
    const first=link('','#place/'+featuredPlace.id+'?from=home','discovery-card locations-card');first.dataset.featuredPlace=featuredPlace.id;first.append(picture(featuredPlace,'discovery-photo',false));const c=el('div','discovery-copy');c.append(el('h1','',l('Explore amazing locations','Explora lugares increíbles')),el('strong','featured-name featured-location',featuredPlace.name),el('p','',l('Discover this place.','Descubre este lugar.')));first.append(c,el('span','card-arrow','→'));
    const second=link('','#person/'+featured.id,'discovery-card people-feature');second.dataset.featuredPerson=featured.id;second.append(picture(featured,'discovery-photo',false));const pc=el('div','discovery-copy');pc.append(el('h2','',l('Remarkable people','Personas extraordinarias')),el('strong','featured-name',featured.name),el('p','',l('Discover their story.','Conoce su historia.')));second.append(pc,el('span','card-arrow','→'));paths.append(first,second);view.append(paths);
    const labs=el('section','lab-home-grid');labs.setAttribute('aria-label',l('More to discover','Más por descubrir'));
    for(const[id,section]of Object.entries(window.MLL_LABS.sections)){
      const pool=window.MLL_NEW_LESSONS.filter(x=>x.section===id),chosen=nextRandom('home:lab:'+id,pool.map(x=>x.id)),lesson=pool.find(x=>x.id===chosen),meta=window.MLL_LESSON_PHOTOS[lesson.photoKey||lesson.id];
      const card=link('','#learn/'+id+'/'+lesson.id,'lab-home-card');card.dataset.featuredLesson=id+'/'+lesson.id;
      const im=el('img');im.src=meta.src.replace(/^assets\//,document.documentElement.dataset.assetLayout==='flat'?'':'assets/');im.alt=I.lang==='es'?meta.altEs:meta.alt;im.loading='lazy';card.append(im);
      const copy=el('div','lab-home-copy');copy.append(el('p','eyebrow',l(section[0],section[1])),el('h2','',l(lesson.title[0],lesson.title[1])),el('p','',l('Discover this story →','Descubre esta historia →')));card.append(copy);labs.append(card);
    }view.append(labs);
    const practiceHead=el('div','section-head');practiceHead.append(el('h2','',l('Play & learn','Juega y aprende')));view.append(practiceHead);
    function activityGrid(items,reward=false){const grid=el('div','activity-tiles '+(reward?'reward-tiles':'learning-tiles'));
      for(const[id,en,es]of items){const href=['lemonade','build','harbor'].includes(id)?'#reward/'+id:'#'+id,a=link('',href,'activity-tile activity-'+id),thumb=el('div','activity-thumb');thumb.setAttribute('aria-hidden','true');thumb.innerHTML=id==='sequence'?window.MLL_SEQUENCE.thumbnail:id==='harbor'?window.MLL_HARBOR.thumbnail:window.MLL_HOME_THUMBS?.[id==='wordsearch'&&I.lang==='es'?'wordsearchEs':id]||'';const caption=el('div','activity-caption');caption.append(el('h3','',l(en,es)),el('span','card-arrow','→'));if(reward){const active=id==='baseball'?state.baseball.active:state.rewards.active[id],cost=id==='baseball'?10:REWARD_COSTS[id];caption.append(el('span','activity-price',active?l('Resume · already paid','Continuar · ya pagado'):l(cost+' credits per session',cost+' créditos por sesión')));}a.append(thumb,caption);grid.append(a);}return grid;}
    view.append(el('h3','activity-group-title',l('Earn credits','Gana créditos')),activityGrid([['wordsearch','Word Search','Sopa de letras'],['spy','I Spy','Veo, veo'],['hangman','Hangman','Ahorcado'],['math','Math','Matemáticas'],['draw','Draw & Discover','Dibuja y descubre'],['quiz','Quiz','Preguntas'],['spelling','Spelling Bee','Concurso de palabras'],['sequence','Put It in Order','Ponlo en orden']]));
    view.append(el('h3','activity-group-title',l('Spend credits · reward games','Usa créditos · juegos de premio')),el('p','reward-balance-line',l(baseballBalance()+' credits ready to play',baseballBalance()+' créditos para jugar')),activityGrid([['baseball','Baseball','Béisbol'],['lemonade','Lemonade Stand','Puesto de limonada'],['build','Build It Lab','Construye'],['harbor','Harbor Rescue','Rescate en el puerto']],true));
    const progress=el('details','home-progress'),summary=el('summary','',l('My learning scoreboard','Mi marcador de aprendizaje'));progress.append(summary);const board=el('section','scoreboard');const main=el('div','score-main');main.append(el('strong','score-value',String(points())),el('span','score-label',l('LIFETIME LEARNING POINTS','TOTAL DE PUNTOS GANADOS')));board.append(main);for(const[value,label]of [[state.answers.length,l('Answers discovered','Respuestas descubiertas')],[people.filter(personDone).length+' / '+people.length,l('People completed','Personas completadas')],[state.visited.length+' / '+places.length,l('Places explored','Lugares explorados')]]){const stat=el('div','score-stat');stat.append(el('strong','',String(value)),el('span','',label));board.append(stat);}progress.append(board,el('p','small-note',l(state.completedTasks.length+' puzzles & drawings completed. Progress stays on this device.',state.completedTasks.length+' rompecabezas y dibujos completados. El progreso se guarda en este dispositivo.')));progress.append(el('p','small-note score-spendable',l(baseballBalance()+' credits available for reward games. '+(state.baseball.spent+state.rewards.spent)+' used to play. Your total learning score stays above.',baseballBalance()+' créditos disponibles para juegos de premio. '+(state.baseball.spent+state.rewards.spent)+' usados para jugar. Tu puntaje total de aprendizaje se mantiene arriba.')));view.append(progress);
  }
  function locationGallery(excludeId){
    const section=el('section','location-directory');section.id='all-places';const title=el('div','section-head');title.append(el('h2','',l('Pick your next adventure','Elige tu próxima aventura')));section.append(title);
    const controls=el('div','people-tools'),label=el('label','search-label',l('Find a place','Busca un lugar')),input=el('input');input.type='search';input.id='location-search';input.placeholder=l('Search a city or country…','Busca una ciudad o un país…');label.htmlFor=input.id;const filters=el('div','filter-row'),status=el('p','people-count');status.setAttribute('role','status');controls.append(label,input,filters,status);section.append(controls);const grid=el('div','place-grid');section.append(grid);const more=button(l('Show more places','Ver más lugares'),'button directory-more',()=>{limit+=24;render();});section.append(more);
    let active='all',limit=places.length;const fold=v=>v.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
    function render(){const term=fold(input.value.trim());const pool=active==='cities'?surprises:active==='nature'?nature:places;const list=pool.filter(p=>p.id!==excludeId&&fold([p.name,p.country,p.hook].join(' ')).includes(term));grid.replaceChildren();if(!term&&active==='all'){family.filter(p=>p.id!==excludeId).forEach(p=>grid.append(placeCard(p,'map')));grid.append(surpriseCard());list.filter(p=>!p.family).slice(0,Math.max(0,limit-family.length)).forEach(p=>grid.append(placeCard(p,'map')));}else list.slice(0,limit).forEach(p=>grid.append(placeCard(p,'map')));status.textContent=l(list.length+' places to discover',list.length+' lugares por descubrir');more.hidden=list.length<=limit;if(!list.length)grid.append(el('p','empty-state',l('Try another city or country.','Prueba otra ciudad u otro país.')));}
    for(const[id,en,es]of [['all','All locations','Todos los lugares'],['cities','City discoveries','Ciudades'],['nature','Nature & wonders','Naturaleza y maravillas']]){const b=button(l(en,es),'filter-chip',()=>{active=id;limit=places.length;for(const n of filters.children){n.setAttribute('aria-pressed',String(n===b));n.classList.toggle('active',n===b);}render();});b.setAttribute('aria-pressed',String(id==='all'));b.classList.toggle('active',id==='all');filters.append(b);}input.addEventListener('input',()=>{limit=places.length;render();});render();return section;
  }
  function placeMenu(){mapPage(new URLSearchParams());}
  function creditText(value){if(I.lang!=='es')return value;return String(value).replace(/Public domain/g,'Dominio público').replace(/Unknown photographer/gi,'Fotógrafo desconocido').replace(/Official photographer/gi,'Fotógrafo oficial').replace(/photographer uncredited/gi,'fotógrafo no identificado').replace(/Unknown artist/gi,'Artista desconocido').replace(/Attributed to /gi,'Atribuido a ').replace(/Unknown author/gi,'Autor desconocido').replace(/Wikimedia Commons contributors/gi,'Colaboradores de Wikimedia Commons');}
  function addCredit(p,container){const photo=photos[p.id];if(!photo)return;const c=el('p','photo-credit');c.append(document.createTextNode(l('Image','Imagen')+': '+creditText(photo.credit)+' · '),external(creditText(photo.license),photo.licenseUrl||photo.source));container.append(c);}
  function sources(p){const d=el('details','fact-sources');d.append(el('summary','','Where these facts come from'));(p.sources||[]).forEach(s=>d.append(external(s.title,s.url)));return d;}
  function quiz(p,number=1){
    const data=number===2?p.quiz2:p.quiz,key=(people.some(x=>x.id===p.id)?'person:':'place:')+p.id+':'+number;
    const q=el('section','quiz-card');q.dataset.questionId=key;
    q.append(el('p','eyebrow question-number',p.quiz2?l('YOUR TURN · QUESTION '+number+' OF 2','TU TURNO · PREGUNTA '+number+' DE 2'):t('YOUR TURN')),el('h2','',data.question));
    const opts=el('div','quiz-options'),feedback=el('p','quiz-feedback');feedback.setAttribute('role','status');
    if(state.answers.includes(key))feedback.textContent=l('✓ Points already collected. You can practice again!','✓ Ya ganaste estos puntos. ¡Puedes practicar otra vez!');
    let solved=false;
    data.options.forEach((text,i)=>{const b=button(text,'',()=>{if(solved)return;if(i===data.answer){solved=true;b.classList.add('correct');const fresh=answer(key);feedback.textContent=l('Yes! ','¡Sí! ')+data.explain+(fresh?l(' +1 learning point!',' ¡+1 punto de aprendizaje!'):l(' You already earned these points.',' Ya ganaste estos puntos.'));[...opts.children].forEach(n=>n.disabled=true);if(!state.quiz.includes(p.id)){state.quiz.push(p.id);save();if(state.quiz.length===5)award('curious-five','Five curious answers');}}else{b.classList.add('retry');feedback.textContent=t('Try another idea. Look at the clues above.');}});opts.append(b);});q.append(opts,feedback);return q;
  }
  function stretch(p){const d=el('details','stretch');d.append(el('summary','',l('Think a little bigger: ','Piensa un poquito más: ')+p.stretch.question),el('p','',p.stretch.answer));return d;}
  function photoGallery(p){
    const hero={...photos[p.id],altEs:photos[p.id]?.altEs||photoEs[p.id]};
    const items=[hero,...(galleries[p.id]||[])],wrap=el('section','photo-gallery');wrap.setAttribute('aria-label',l(p.name+' photo gallery','Galería de fotos de '+p.name));
    const frame=el('div','profile-photo gallery-photo'),img=el('img'),tag=el('span','profile-photo-tag',p.country);img.loading='eager';frame.append(img,tag);
    const caption=el('p','gallery-caption'),credit=el('p','photo-credit'),controls=el('div','gallery-controls'),count=el('span','gallery-count'),thumbs=el('div','gallery-thumbs');count.setAttribute('role','status');
    let current=0;
    function show(index){current=(index+items.length)%items.length;const photo=items[current];img.src=photo.src;img.alt=I.lang==='es'?(photo.altEs||photo.alt):photo.alt;img.width=photo.width;img.height=photo.height;caption.textContent=img.alt;count.textContent=l('Photo '+(current+1)+' of '+items.length,'Foto '+(current+1)+' de '+items.length);credit.replaceChildren(document.createTextNode(l('Image','Imagen')+': '+creditText(photo.credit)+' · '),external(creditText(photo.license),photo.licenseUrl||photo.source));for(const[t,n]of [...thumbs.children].entries()){n.classList.toggle('selected',t===current);n.setAttribute('aria-pressed',String(t===current));}}
    wrap.append(frame);if(items.length>1){const previous=button('←','gallery-arrow',()=>show(current-1)),next=button('→','gallery-arrow',()=>show(current+1));previous.setAttribute('aria-label',l('Previous photo','Foto anterior'));next.setAttribute('aria-label',l('Next photo','Foto siguiente'));controls.append(previous,count,next);
      items.forEach((photo,i)=>{const b=button('','gallery-thumb',()=>show(i));b.setAttribute('aria-label',l('Show photo '+(i+1)+': '+photo.alt,'Ver foto '+(i+1)+': '+(photo.altEs||photo.alt)));const thumb=el('img');thumb.src=photo.src;thumb.alt='';thumb.loading='lazy';thumb.width=100;thumb.height=70;b.append(thumb);thumbs.append(b);});wrap.append(controls,thumbs,caption);}
    wrap.append(credit);show(0);return wrap;
  }
  function profile(p,from){
    markVisited(p.id);document.title=p.name+' · '+l(state.name+"'s Lab", "El laboratorio de "+state.name);const back=from==='map'?'#map':from==='passport'?'#passport':from==='home'?'#home':'#places';const nav=topNav(back,from==='map'?'← Back to the map':from==='passport'?'← My passport':from==='home'?'← Explore the lab':'← All places');nav.append(collectionJump('all-places',l('See all places ↓','Ver todos los lugares ↓')));if(from!=='map')nav.append(link(l('World map →','Mapa del mundo →'),'#map?focus='+p.id,'button small ghost'));
    const grid=el('div','profile-layout'),visual=el('div');visual.append(photoGallery(p));
    const mini=el('div','mini-map');if(window.MLL_MAP?.mini){const rendered=MLL_MAP.mini(p);if(typeof rendered==='string')mini.innerHTML=rendered;else if(rendered)mini.append(rendered);}else{mini.append(el('p','','📍 '+p.name+' · '+p.country));}mini.append(link('Find it on the world map ↗','#map?focus='+p.id,'mini-map-label'));visual.append(mini);
    if(p.familyStops){const stops=el('section','family-stops');stops.append(el('h3','','Your family trail'));p.familyStops.forEach(s=>stops.append(el('p','',s.name+', '+s.state+' — '+s.connection)));stops.append(link('See the family pins ↗','#map?filter=family','button small ghost'));visual.append(stops);}
    const copy=el('div','profile-copy');copy.append(el('p','eyebrow',p.family?'A PLACE IN YOUR STORY':p.country.toUpperCase()+l(' / DISCOVERY',' / DESCUBRIMIENTO')),el('h1','',p.name),el('p','profile-hook',p.hook));if(p.familyNote)copy.append(el('p','family-note',p.familyNote));const facts=el('ol','fact-list');p.facts.forEach(f=>facts.append(el('li','',f)));copy.append(facts);const actions=el('div','learn-actions'),listen=button('◖ Listen','button small',()=>read(p.name+'. '+(p.familyNote||'')+' '+p.facts.join(' '),listen));actions.append(listen);const stamp=button(state.stamps.includes(p.id)?'✓ Passport stamped':'✦ Stamp my passport','button small stamp-button',()=>{if(state.stamps.includes(p.id)){toast('Already stamped. You can always come back!');return;}state.stamps.push(p.id);save();stamp.textContent=t('✓ Passport stamped');stamp.classList.add('collected');toast(l('✦ '+p.name+' added to your stamps!','✦ ¡Ya tienes el sello de '+p.name+'!'));});if(state.stamps.includes(p.id))stamp.classList.add('collected');actions.append(stamp);copy.append(actions,stretch(p),quiz(p));if(p.quiz2)copy.append(quiz(p,2));copy.append(sources(p));
    grid.append(visual,copy);view.append(grid);const bottom=el('div','profile-bottom');bottom.append(link('Explore more places','#places','button ghost'),button('✦ Another surprise','button primary',surprise));view.append(bottom,locationGallery(p.id));
  }
  function mapPage(query){topNav();view.append(heading(l('A WORLD OF DISCOVERIES','UN MUNDO POR DESCUBRIR'),l('Explore amazing locations','Explora lugares increíbles'),l('Tap a pin on the map, or choose a photo below.','Toca un punto en el mapa o elige una foto abajo.')));const host=el('div','world-map-host');view.append(host);const stops=family.flatMap(p=>(p.familyStops||[]).filter(s=>!places.some(q=>Math.abs(q.lat-s.lat)<.1&&Math.abs(q.lon-s.lon)<.1&&q.id!==p.id)).map(s=>({id:p.id,name:s.name+' · '+s.state,lat:s.lat,lon:s.lon,family:true,hook:s.connection})));if(window.MLL_MAP){dispose=MLL_MAP.mount(host,[...places.map(p=>({...p,name:p.id==='kirkland'?'Kirkland, Washington':p.name,family:false})),...stops.map(p=>({...p,family:false}))],{onSelect:id=>{location.hash='place/'+id+'?from=map';},visited:new Set(state.visited)});const f=query.get('focus');if(f&&dispose?.focus)dispose.focus(f);host.querySelector('.map-filters')?.remove();host.querySelector('.map-key-family')?.remove();}else host.append(el('p','error-note',l('Choose a place below.','Elige un lugar abajo.')));view.append(locationGallery());}
  function passport(){topNav();const h=heading('YOUR EXPLORER PASSPORT','Look where you’ve been.',l(state.stamps.length+' passport stamps · '+state.answers.length+' answers discovered',state.stamps.length+' sellos en tu pasaporte · '+state.answers.length+' respuestas descubiertas'));h.append(el('div','passport-stat',state.visited.length+' / '+places.length));view.append(h);const bar=el('div','passport-progress'),fill=el('span');fill.style.width=(100*state.visited.length/Math.max(1,places.length))+'%';bar.append(fill);bar.setAttribute('role','img');bar.setAttribute('aria-label',l(state.visited.length+' of '+places.length+' destinations discovered',state.visited.length+' de '+places.length+' destinos descubiertos'));view.append(bar);if(Object.keys(state.badges).length){const row=el('div','badges-row');Object.entries(state.badges).forEach(([key,value])=>row.append(el('span','earned-badge','✦ '+badgeLabel(key,value))));view.append(row);}if(!state.visited.length){const e=el('section','empty-state');e.append(el('h2','','Every adventure starts somewhere.'),el('p','','Open a place to start your passport. Come back here whenever you want to visit it again.'),button('Find my first surprise','button primary',surprise));view.append(e);return;}const grid=el('div','passport-grid');state.visited.slice().reverse().forEach(id=>grid.append(placeCard(byId.get(id),'passport')));view.append(grid);}
  function peopleMenu(){topNav();view.append(heading(l('BIG IDEAS START SMALL','LAS GRANDES IDEAS EMPIEZAN PEQUEÑAS'),l('Meet remarkable people.','Conoce personas extraordinarias.'),l('Choose a face. Discover a story.','Elige una persona. Descubre su historia.')),peopleGallery());}
  function peopleGallery(excludeId){const section=el('section','people-directory');section.id='all-people';section.append(el('h2','collection-title',l('Who will you meet next?','¿A quién conocerás ahora?')));
    const tools=el('div','people-tools'),label=el('label','search-label',l('Find a person','Busca una persona')),search=el('input');search.type='search';search.id='people-search';search.placeholder=l('Try astronaut, baseball, Einstein…','Prueba astronauta, béisbol, Einstein…');label.htmlFor=search.id;tools.append(label,search);
    const filters=el('div','filter-row'),grid=el('div','person-grid'),count=el('p','people-count');count.setAttribute('role','status');let active='all';
    const fold=v=>v.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
    function show(){grid.replaceChildren();const list=people.filter(p=>p.id!==excludeId&&(active==='all'||p.category===active)&&fold([p.name,p.role,p.hook,p.country,...p.facts].join(' ')).includes(fold(search.value.trim())));count.textContent=l(list.length+' people to discover',list.length+' personas por descubrir');for(const p of list){const a=link('','#person/'+p.id,'person-card');a.append(picture(p,'person-card-photo'));a.append(el('span','person-year',p.role),el('h2','',p.name),el('p','',p.hook));if(personDone(p))a.append(el('span','person-complete',l('✓ Both questions completed','✓ Ambas preguntas completadas')));grid.append(a);}if(!list.length)grid.append(el('p','empty-state',l('No one here yet. Try another word or choose All.','No hay resultados. Prueba otra palabra o elige Todos.')));}
    for(const[id,en,es]of [['all','All','Todos'],['science','Science & inventions','Ciencia e inventos'],['explorers','Explorers','Exploradores'],['sports','Sports','Deportes'],['arts','Art & music','Arte y música'],['leaders','Leaders','Líderes']]){const b=button(l(en,es),'filter-chip'+(id==='all'?' active':''),()=>{active=id;for(const n of filters.children){n.classList.toggle('active',n===b);n.setAttribute('aria-pressed',String(n===b));}show();});b.setAttribute('aria-pressed',String(id==='all'));filters.append(b);}tools.append(filters,count);section.append(tools,grid);search.addEventListener('input',show);show();return section;
  }
  function person(p){
    const nav=topNav('#people',l('← All people','← Todas las personas'));nav.append(collectionJump('all-people',l('See all people ↓','Ver todas las personas ↓')));document.title=p.name+' · '+t('Big ideas');
    const grid=el('div','profile-layout'),left=el('div'),im=el('div','profile-photo portrait-photo');im.append(picture(p,'',false));left.append(im);addCredit(p,left);
    if(p.years)left.append(el('p','person-lifetime',p.years+' · '+p.country));
    const activity=el('section','quiz-card');activity.append(el('p','eyebrow','TRY IT YOURSELF'),el('h2','',p.activity.title),el('p','',p.activity.prompt));left.append(activity);
    const copy=el('div','profile-copy');copy.append(el('p','eyebrow',p.role.toUpperCase()),el('h1','',p.name),el('p','profile-hook',p.hook));const list=el('ol','fact-list');p.facts.forEach(f=>list.append(el('li','',f)));copy.append(list);
    const b=button('◖ Listen','button small',()=>read(p.name+'. '+p.facts.join(' '),b));copy.append(b,stretch(p));const questions=el('div','person-questions');questions.append(quiz(p),quiz(p,2));copy.append(questions,sources(p));grid.append(left,copy);view.append(grid);
    const bottom=el('div','profile-bottom');bottom.append(link(l('← Meet more people','← Conoce más personas'),'#people','button primary'),link(l('See my scoreboard →','Ver mi marcador →'),'#home','button ghost'));view.append(bottom,peopleGallery(p.id));
  }
  function practice(kind){
    view.classList.add('practice-page');const host=el('div','practice-host');view.append(host);
    const questions=questionBank();
    dispose=MLL_PRACTICE.mount(kind,host,{lang:I.lang,pick:l,nextRandom,preserveSelection:preserveActivitySelection,answer,hasAnswer:id=>state.answers.includes(id),questions,read,get:(key,fallback)=>state.games[key]??fallback,set:(key,value)=>{state.games[key]=value;save();}});
  }
  function challenge(kind){
    view.classList.add('challenge-page','challenge-'+kind);const host=el('div','challenge-host');view.append(host);
    const api={lang:I.lang,pick:l,nextRandom,preserveSelection:preserveActivitySelection,findItem,art,complete:completeTask,completed:id=>state.completedTasks.includes(id),get:(key,fallback)=>state.games[key]??fallback,set:(key,value)=>{state.games[key]=value;save();},read};
    const module=kind==='spy'?window.MLL_SPY:kind==='draw'?window.MLL_DRAW:window.MLL_WORDSEARCH;
    if(module){const mounted=module.mount(host,api);dispose=typeof mounted==='function'?mounted:Object.assign(()=>mounted?.dispose?.(),{saveState:()=>mounted?.saveState?.()});}else host.append(el('p','error-note',l('This activity could not load. Reload the page and try again.','No se pudo abrir la actividad. Recarga la página e inténtalo otra vez.')));
  }
  // Baseball uses a separate spending ledger; learning achievements never decrease.
  const BASEBALL_COST=10;
  function baseballBalance(){return Math.max(0,points()-state.baseball.spent-state.rewards.spent);}
  function normalizeBaseball(value){
    const out={spent:0,started:0,finished:0,active:null,lastResult:null};
    if(!value||typeof value!=='object')return out;
    for(const key of ['spent','started','finished'])if(Number.isSafeInteger(value[key])&&value[key]>=0)out[key]=Math.min(value[key],10000000);
    if(value.active&&typeof value.active.id==='string'&&value.active.id.length<100){
      const snapshot=value.active.snapshot&&typeof value.active.snapshot==='object'?value.active.snapshot:null;
      out.active={id:value.active.id,snapshot,createdAt:Number(value.active.createdAt)||0};
    }
    if(value.lastResult&&typeof value.lastResult==='object'){
      const v=value.lastResult;
      if(Number.isInteger(v.runs)&&Number.isInteger(v.opponentRuns))out.lastResult={runs:Math.max(0,Math.min(99,v.runs)),opponentRuns:Math.max(0,Math.min(99,v.opponentRuns)),hits:Math.max(0,Number(v.hits)||0),homeRuns:Math.max(0,Number(v.homeRuns)||0),won:!!v.won,innings:3};
    }
    return out;
  }
  function baseballPage(play=false){
    view.classList.add('ballpark-page');
    const token=routeToken;
    if(play&&state.baseball.active&&window.MLL_BASEBALL){
      const id=state.baseball.active.id,host=el('div','ballpark-game-host');view.append(host);
      const mounted=window.MLL_BASEBALL.mount(host,{
        lang:I.lang,pick:l,name:state.name,session:state.baseball.active.snapshot,
        onSave(snapshot){if(state.baseball.active?.id===id){state.baseball.active.snapshot=snapshot;save();}},
        onFinish(summary){
          if(state.baseball.active?.id!==id)return;
          state.baseball.lastResult={runs:summary.runs,opponentRuns:summary.opponentRuns,hits:summary.hits,homeRuns:summary.homeRuns,innings:3,won:!!summary.won};
          state.baseball.finished++;state.baseball.active=null;save();
        },
        onExit(){location.hash='home';}
      });
      const dialogs=['settings-dialog','grownup-dialog'].map($).filter(Boolean);
      const observer=new MutationObserver(()=>{if(dialogs.some(d=>d.open))mounted?.pause?.();});
      dialogs.forEach(d=>observer.observe(d,{attributes:true,attributeFilter:['open']}));
      dispose=Object.assign(()=>{observer.disconnect();mounted?.dispose?.();},{saveState:()=>mounted?.saveState?.()});
      return;
    }
    topNav();
    const lobby=el('section','ballpark-lobby');
    const preview=el('div','ballpark-preview');preview.setAttribute('aria-hidden','true');preview.innerHTML=window.MLL_BASEBALL_THUMB||'';
    const copy=el('div','ballpark-entry');copy.append(el('p','eyebrow',l('THE LEARNING LEAGUE','LA LIGA DEL APRENDIZAJE')),el('h1','',l(state.name+'’s Ballpark','El estadio de '+state.name)),el('p','ballpark-lead',l('You did the learning. Now step up to the plate.','Aprendiste algo nuevo. Ahora, ¡a batear!')));
    const rules=el('ul','ballpark-rules');for(const text of [l('Time your swing as the ball reaches home plate.','Batea cuando la pelota llegue al plato.'),l('Play 3 innings. Three outs end your turn.','Juega 3 entradas. Tres outs terminan tu turno.'),l('Choose Easy, Medium, or Hard. The other team bats automatically after your three outs.','Elige Fácil, Medio o Difícil. El otro equipo batea automáticamente después de tus tres outs.')])rules.append(el('li','',text));copy.append(rules);
    const balance=el('div','ballpark-balance');balance.append(el('strong','',String(baseballBalance())),el('span','',l('points available to play','puntos disponibles para jugar')));copy.append(balance);
    if(!window.MLL_BASEBALL){copy.append(el('p','',l('The game is still loading. Refresh the page to try again.','El juego todavía está cargando. Actualiza la página para intentarlo otra vez.')));}
    else if(state.baseball.active){
      copy.append(button(l('Resume game · already paid','Continuar partida · ya pagada'),'button primary baseball-resume',()=>{if(token===routeToken)location.hash='baseball/play';}),el('p','small-note',l('Your game is saved. No more points needed.','Tu partida está guardada. No necesitas más puntos.')));
    }else if(baseballBalance()>=BASEBALL_COST){
      const start=button(l('Play 3 innings · 10 points','Jugar 3 entradas · 10 puntos'),'button primary baseball-start',()=>{
        if(token!==routeToken||start.disabled)return;start.disabled=true;
        if(state.baseball.active){location.hash='baseball/play';return;}
        if(baseballBalance()<BASEBALL_COST){route();return;}
        state.baseball.spent+=BASEBALL_COST;state.baseball.started++;
        state.baseball.active={id:'ballgame-'+Date.now().toString(36)+'-'+Math.random().toString(36).slice(2,9),createdAt:Date.now(),snapshot:null};
        save();location.hash='baseball/play';
      });copy.append(start,el('p','small-note',l('10 points per game. Your lifetime learning score stays yours.','10 puntos por partida. Tu puntaje total de aprendizaje no baja.')));
    }else{
      const needed=BASEBALL_COST-baseballBalance();
      copy.append(el('p','ballpark-needed',l('Earn '+needed+' more '+(needed===1?'point':'points')+' to play.','Gana '+needed+' '+(needed===1?'punto más':'puntos más')+' para jugar.')));
      const earn=el('div','ballpark-earn');earn.append(link(l('Earn points in Math →','Gana puntos en Matemáticas →'),'#math','button primary'),link(l('Try a quiz','Responde preguntas'),'#quiz','button ghost'));copy.append(earn,el('p','small-note',l('Each new correct answer, found word, or hidden object earns 1 point. You can also collect points by completing puzzles.','Cada respuesta nueva y correcta, palabra encontrada u objeto oculto vale 1 punto. También ganas puntos al completar rompecabezas.')));
    }
    if(state.baseball.lastResult){const last=state.baseball.lastResult;copy.append(el('p','ballpark-last',l('Last game: You '+last.runs+' · Comets '+last.opponentRuns,'Última partida: Tú '+last.runs+' · Cometas '+last.opponentRuns)));}
    lobby.append(preview,copy);view.append(lobby);
  }

  function creditsPage(){
    topNav();view.append(heading('','Photo credits & research',l('Photographs are bundled with the website. Original creators keep their listed licenses.','Las fotos están incluidas en el sitio. Cada imagen conserva la licencia de su creador.')));
    view.append(el('p','small-note',l('Photos were resized and compressed; card layouts may crop them. Family connections were supplied by Max’s parent. Coordinates show public places, never home addresses.','Las fotos se redujeron y comprimieron; algunas tarjetas recortan su vista. El papá de Max compartió los vínculos familiares. Las coordenadas muestran lugares públicos, nunca direcciones de casas.')));
    const list=el('div','credits-grid');
    [...places,...people].forEach(p=>{const photo=photos[p.id];if(!photo)return;const a=el('article');a.id='credit-'+p.id;a.append(picture(p));const copy=el('div');copy.append(el('h2','',p.name),el('p','',(I.lang==='es'?photoEs[p.id]:null)||photo.alt));const credit=el('p');credit.append(document.createTextNode(l('Image','Imagen')+': '+creditText(photo.credit)+' · '),external(l('Original image','Imagen original'),photo.source),document.createTextNode(' · '),external(creditText(photo.license),photo.licenseUrl||photo.source));copy.append(credit,el('p','','Fact sources'));const sources=el('ul');(p.sources||[]).forEach(source=>{const li=el('li');li.append(external(source.title,source.url));sources.append(li);});copy.append(sources);a.append(copy);list.append(a);});view.append(list);
    for(const p of places)for(const photo of galleries[p.id]||[]){const a=el('article'),img=el('img');img.src=photo.src;img.alt=I.lang==='es'?(photo.altEs||photo.alt):photo.alt;img.loading='lazy';const copy=el('div');copy.append(el('h2','',p.name),el('p','',img.alt));const line=el('p');line.append(document.createTextNode(creditText(photo.credit)+' · '),external(l('Original image','Imagen original'),photo.source),document.createTextNode(' · '),external(creditText(photo.license),photo.licenseUrl||photo.source));copy.append(line);a.append(img,copy);list.append(a);}
    for(const photo of Object.values(window.MLL_LESSON_PHOTOS)) {const unused=null,a=el('article'),img=el('img');img.src=photo.src.replace(/^assets\//,document.documentElement.dataset.assetLayout==='flat'?'':'assets/');img.alt=I.lang==='es'?photo.altEs:photo.alt;img.loading='lazy';const copy=el('div');copy.append(el('h2','',img.alt),el('p','',photo.title));const line=el('p');line.append(document.createTextNode(photo.credit+' · '),external(l('Original image','Imagen original'),photo.source),document.createTextNode(' · '),external(photo.license,photo.licenseUrl||photo.source));copy.append(line);a.append(img,copy);list.append(a);}
    const mapNote=el('section','quiz-card');mapNote.append(el('h2','','World map'));const text=el('p');text.append(document.createTextNode(l('Land outlines: ','Contornos de la tierra: ')),external('Natural Earth','https://www.naturalearthdata.com/about/terms-of-use/'),document.createTextNode(l(', public domain. This flat projection stretches shapes near the poles. Location pins are approximate.',', dominio público. Esta proyección plana estira las formas cerca de los polos. Los puntos de ubicación son aproximados.')));mapNote.append(text,el('h2','',l('Learning activities & artwork','Actividades de aprendizaje e ilustraciones')),el('p','',l('Practice activities are original code. The Max rocket emblem is an AI-generated illustration, not a historical image. Historical portraits retain the credits and licenses listed above; later imagined portraits are identified in their image descriptions.','Las actividades son código original. El emblema del cohete de Max es una ilustración generada con IA, no una imagen histórica. Los retratos conservan los créditos y licencias de arriba; los retratos imaginados después se identifican en sus descripciones.')));view.append(mapNote);
  }

  const REWARD_COSTS={lemonade:5,build:5,harbor:5};
  function normalizeRewards(value){const out={spent:0,active:{},finished:{}};if(!value||typeof value!=='object')return out;out.spent=Number.isSafeInteger(value.spent)&&value.spent>=0?Math.min(value.spent,10000000):0;for(const k of ['lemonade','build','harbor']){const a=value.active?.[k];if(a&&typeof a.id==='string'&&a.id.length<100)out.active[k]={id:a.id,cost:5,roundIndex:Number.isInteger(a.roundIndex)&&a.roundIndex>=0?Math.min(a.roundIndex,2):0,rounds:Array.isArray(a.rounds)?[...new Set(a.rounds.filter(x=>typeof x==='string').slice(0,3))]:[],snapshot:a.snapshot&&typeof a.snapshot==='object'?a.snapshot:{},createdAt:Number(a.createdAt)||0};out.finished[k]=Number.isSafeInteger(value.finished?.[k])&&value.finished[k]>=0?value.finished[k]:0;}return out;}
  function sequencePage(){topNav();const host=el('div');view.append(host);const mounted=window.MLL_SEQUENCE.mount(host,{lang:I.lang,nextRandom,answer,get:(key,fallback)=>state.games['sequence:'+key]??fallback,set:(key,value)=>{state.games['sequence:'+key]=value;save();}});dispose=()=>mounted?.destroy?.();}
  function rewardPage(kind,play=false){
    if(!Object.hasOwn(REWARD_COSTS,kind)){home();return;}
    const token=routeToken,names={lemonade:['Lemonade Stand','Puesto de limonada'],build:['Build It Lab','Laboratorio de construcción'],harbor:['Harbor Rescue','Rescate en el puerto']},name=l(...names[kind]),active=state.rewards.active[kind],cost=REWARD_COSTS[kind];
    if(play&&active){
      const sessionId=active.id;
      const finish=()=>{if(state.rewards.active[kind]?.id!==sessionId)return;state.rewards.finished[kind]=(state.rewards.finished[kind]||0)+1;delete state.rewards.active[kind];save();location.hash='reward/'+kind;};
      if(kind==='harbor'){topNav();view.append(el('p','reward-session-note',l('Paid session · rescue 6 turtles · no more credits charged','Sesión pagada · rescata 6 tortugas · sin más cobros')));const host=el('div');view.append(host);const mounted=window.MLL_HARBOR.mount(host,{lang:I.lang,snapshot:active.snapshot?.harbor||null,onSave(snapshot){if(state.rewards.active[kind]?.id!==sessionId)return;active.snapshot={harbor:snapshot};save();},onFinish(result){if(state.rewards.active[kind]?.id!==sessionId)return;state.rewards.finished[kind]=(state.rewards.finished[kind]||0)+1;delete state.rewards.active[kind];save();celebrate(0,l('Rescue mission complete!','¡Misión de rescate terminada!'));view.append(link(l('Back to reward games →','Volver a los juegos de premio →'),'#home','button primary'));}});dispose=()=>mounted?.destroy?.();return;}
      const host=el('div');view.append(host);dispose=window.MLL_LABS.mount(host,['learn',kind],{lang:I.lang,nextRandom,rewardMode:true,roundNumber:active.roundIndex+1,roundLimit:3,
        answer:()=>false,get:(key,fallback)=>active.snapshot?.[key]??fallback,set:(key,value)=>{if(state.rewards.active[kind]?.id!==sessionId)return;active.snapshot[key]=value;save();},
        onRoundComplete(key){if(state.rewards.active[kind]?.id!==sessionId)return;if(!active.rounds.includes(key)){active.rounds.push(key);save();}},
        nextRound(){if(state.rewards.active[kind]?.id!==sessionId)return;if(active.roundIndex>=2){finish();return;}active.roundIndex++;delete active.snapshot[kind];save();route();},refresh:()=>route()});return;
    }
    topNav();view.append(heading(l('REWARD GAME','JUEGO DE PREMIO'),name,l('Use the credits you earned by learning.','Usa los créditos que ganaste aprendiendo.')));
    const panel=el('section','reward-entry'),art=el('div','reward-preview');art.innerHTML=kind==='harbor'?window.MLL_HARBOR.thumbnail:window.MLL_LABS.art(kind);const copy=el('div');copy.append(el('p','reward-balance',l(baseballBalance()+' credits available',baseballBalance()+' créditos disponibles')),el('p','',kind==='harbor'?l('One mission: rescue six turtles before you run out of moves.','Una misión: rescata seis tortugas antes de quedarte sin movimientos.'):kind==='lemonade'?l('One session includes three market days.','Una sesión incluye tres días de mercado.'):l('One session includes three blueprint challenges.','Una sesión incluye tres retos de planos.')));
    if(active){copy.append(button(l('Resume · already paid','Continuar · ya pagado'),'button primary reward-resume',()=>{if(token===routeToken)location.hash='reward/'+kind+'/play';}),el('p','small-note',l('Your unfinished session is saved. Resuming costs nothing.','Tu sesión está guardada. Continuar no cuesta nada.')));}
    else if(baseballBalance()>=cost){copy.append(button(l('Start session · '+cost+' credits','Empezar sesión · '+cost+' créditos'),'button primary reward-start',()=>{if(token!==routeToken||state.rewards.active[kind]||baseballBalance()<cost)return;state.rewards.spent+=cost;state.rewards.active[kind]={id:kind+'-'+Date.now().toString(36)+'-'+Math.random().toString(36).slice(2),cost,roundIndex:0,rounds:[],snapshot:{},createdAt:Date.now()};save();location.hash='reward/'+kind+'/play';}));}
    else{copy.append(el('p','reward-need',l('Earn '+(cost-baseballBalance())+' more credits to play.','Gana '+(cost-baseballBalance())+' créditos más para jugar.')),link(l('Earn credits →','Ganar créditos →'),'#quiz','button primary'));}
    copy.append(el('p','small-note',l('Reward games use credits; they do not earn more credits.','Los juegos de premio usan créditos; no generan créditos nuevos.')));if(state.rewards.finished[kind])copy.append(el('p','small-note',l('Sessions completed: ','Sesiones completadas: ')+state.rewards.finished[kind]));panel.append(art,copy);view.append(panel);
  }

  function labPage(path){dispose=window.MLL_LABS.mount(view,path,{lang:I.lang,nextRandom,answer,get:(key,fallback)=>state.games['lab6:'+key]??fallback,set:(key,value)=>{state.games['lab6:'+key]=value;save();},refresh:()=>route()});}
  function route(){routeToken++;stopReading();dismissCelebration();if(dispose){dispose();dispose=null;}view.className='';view.replaceChildren();const raw=location.hash.slice(1)||'home',parts=raw.split('?'),path=parts[0].split('/'),query=new URLSearchParams(parts[1]||'');const page=path[0];document.querySelectorAll('[data-nav]').forEach(a=>{const active=a.dataset.nav===(page==='place'?(query.get('from')==='map'?'map':'home'):page==='map'?'map':page==='passport'?'passport':'home');if(active)a.setAttribute('aria-current','page');else a.removeAttribute('aria-current');});document.title=l(state.name+"'s Learning Lab", "El laboratorio de "+state.name);
    if(page==='place'&&byId.has(path[1]))profile(byId.get(path[1]),query.get('from'));
    else if(page==='person'&&people.some(p=>p.id===path[1]))person(people.find(p=>p.id===path[1]));
    else if(page==='reward')rewardPage(path[1],path[2]==='play');else if(page==='sequence')sequencePage();else if(page==='learn'&&['lemonade','build'].includes(path[1]))rewardPage(path[1],false);else if(page==='learn')labPage(path);else if(page==='baseball')baseballPage(path[1]==='play');else if(page==='credits')creditsPage();else if(page==='places')placeMenu();else if(page==='map')mapPage(query);else if(page==='passport')passport();else if(page==='people')peopleMenu();else if(['spy','draw','wordsearch'].includes(page))challenge(page);else if(['math','quiz','spelling','hangman'].includes(page))practice(page);else home();
    preserveActivitySelection=false;window.scrollTo(0,0);view.focus({preventScroll:true});
  }
  function renderVoiceSettings(){
    const host=$('voice-settings');if(!host)return;refreshVoices();host.replaceChildren();
    const title=el('h3','',l('Choose a reading voice','Elige una voz de lectura')),label=el('label','',l('Voice for English','Voz para español')),select=el('select');select.id='reading-voice';label.htmlFor=select.id;
    const auto=el('option','',l('Automatic · best available match','Automática · mejor coincidencia disponible'));auto.value='';select.append(auto);
    const matches=I.lang==='es'?rankSpanishVoices(voices):voices.filter(v=>v.lang.toLowerCase().startsWith(I.lang));for(const v of matches){const option=el('option','',v.name+' ('+v.lang+')');option.value=v.voiceURI||v.name;select.append(option);}select.value=state.voice[I.lang]||'';
    select.addEventListener('change',()=>{state.voice[I.lang]=select.value;save();stopReading();});
    const preview=button(l('▶ Try this voice','▶ Prueba esta voz'),'button small',()=>read(l('Hi, '+state.name+'! Every great discovery begins with a question. What will you learn today?','¡Hola, '+state.name+'! Cada gran descubrimiento empieza con una pregunta. ¿Qué aprenderás hoy?'),preview));
    host.append(title,label,select,preview,el('p','small-note',l('Voices come from this device. Try a few and choose your favorite. Enhanced voices may be available in the device’s speech settings; the browser decides which ones it exposes.','Las voces vienen de este dispositivo. Prueba algunas y elige tu favorita. Puede haber voces mejoradas en los ajustes de lectura; el navegador decide cuáles permite usar.')));
  }
  if('speechSynthesis'in window)window.speechSynthesis.addEventListener('voiceschanged',()=>{if($('grownup-dialog').open)renderVoiceSettings();});
  let chosenBadge=state.badge;
  $('settings-button').addEventListener('click',()=>{$('explorer-name').value=state.name;chosenBadge=state.badge;const box=$('badge-choices');box.replaceChildren();config.badges.forEach(symbol=>{const b=button(symbol,'',()=>{chosenBadge=symbol;[...box.children].forEach(n=>n.setAttribute('aria-pressed',String(n===b)));});b.setAttribute('aria-label',l('Choose '+symbol+' badge','Elige la insignia '+symbol));b.setAttribute('aria-pressed',String(symbol===chosenBadge));box.append(b);});$('settings-dialog').showModal();});
  $('save-settings').addEventListener('click',()=>{state.name=$('explorer-name').value.trim().slice(0,20)||'Max';state.badge=chosenBadge;save();route();});
  $('credits-link').addEventListener('click',()=>$('grownup-dialog').close());
  $('grownup-button').addEventListener('click',()=>{renderVoiceSettings();$('grownup-dialog').showModal();});$('close-grownup').addEventListener('click',()=>{stopReading();$('grownup-dialog').close();});$('grownup-dialog').addEventListener('close',stopReading);
  $('export-progress').addEventListener('click',()=>{const blob=new Blob([JSON.stringify(state,null,2)],{type:'application/json'}),url=URL.createObjectURL(blob),a=link('',url);a.download='max-lab-progress.json';document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);});
  $('import-progress').addEventListener('change',async e=>{const file=e.target.files?.[0];if(!file)return;try{if(file.size>8000000)throw new Error();const incoming=JSON.parse(await file.text());if(incoming.version!==1||!Array.isArray(incoming.visited))throw new Error();state=normalize(incoming);save();$('grownup-dialog').close();route();toast('Your explorer passport is back.');}catch(err){toast('That file is not a Learning Lab progress backup.');}e.target.value='';});
  window.addEventListener('hashchange',route);window.addEventListener('pageshow',event=>{if(event.persisted)route();});window.addEventListener('pagehide',()=>{stopReading();if(dispose)dispose();});document.addEventListener('visibilitychange',()=>{if(document.hidden)stopReading();});
  function changeLanguage(lang){
    if(lang===I.lang)return;stopReading();if(dispose?.saveState)dispose.saveState();
    clearTimeout(toastTimer);$('toast').classList.remove('show');I.set(lang);loadContent();I.staticDOM();updateHeader();preserveActivitySelection=true;route();
    const toggle=document.querySelector('[data-language="'+I.lang+'"]');if(toggle)toggle.focus({preventScroll:true});
  }
  document.querySelectorAll('[data-language]').forEach(b=>b.addEventListener('click',()=>changeLanguage(b.dataset.language)));
  I.staticDOM();updateHeader();route();
  // A small read-only handle makes content checks possible without altering progress.
  window.MLL_APP={get language(){return I.lang;},get places(){return places.map(p=>({id:p.id,name:p.name,family:!!p.family}));},get people(){return people;},get galleryCount(){return Object.values(galleries).reduce((n,a)=>n+a.length,0);},get points(){return points();},get baseballBalance(){return baseballBalance();},get rewardState(){return JSON.parse(JSON.stringify(state.rewards));},get baseballState(){return JSON.parse(JSON.stringify(state.baseball));},get homePlaceId(){return state.games.homePlaceLast;},get answerCount(){return state.answers.length;},get taskCount(){return state.completedTasks.length;},get completedTasks(){return state.completedTasks.slice();},get artCount(){return art.length;},get surpriseCount(){return surprises.length;},get questionCount(){return questionBank().length;},get allQuestions(){return questionBank();}};
})();

;
