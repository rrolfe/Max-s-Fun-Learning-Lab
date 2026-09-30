// Replacement for the voices/refreshVoices/read block in Max Learning Lab.
// Uses existing I, state, toast, l, t, stopReading and readingButton helpers.
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
