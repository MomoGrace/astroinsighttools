
const SIGNS = [
  {name:'Aries', start:'03-21', end:'04-19', element:'Fire', traits:'bold, direct, energetic and action-oriented'},
  {name:'Taurus', start:'04-20', end:'05-20', element:'Earth', traits:'steady, sensual, loyal and patient'},
  {name:'Gemini', start:'05-21', end:'06-20', element:'Air', traits:'curious, expressive, flexible and quick-minded'},
  {name:'Cancer', start:'06-21', end:'07-22', element:'Water', traits:'protective, intuitive, caring and emotionally aware'},
  {name:'Leo', start:'07-23', end:'08-22', element:'Fire', traits:'warm, creative, confident and generous'},
  {name:'Virgo', start:'08-23', end:'09-22', element:'Earth', traits:'practical, observant, helpful and detail-aware'},
  {name:'Libra', start:'09-23', end:'10-22', element:'Air', traits:'balanced, social, diplomatic and beauty-loving'},
  {name:'Scorpio', start:'10-23', end:'11-21', element:'Water', traits:'intense, loyal, private and emotionally deep'},
  {name:'Sagittarius', start:'11-22', end:'12-21', element:'Fire', traits:'adventurous, honest, optimistic and freedom-loving'},
  {name:'Capricorn', start:'12-22', end:'01-19', element:'Earth', traits:'disciplined, ambitious, patient and responsible'},
  {name:'Aquarius', start:'01-20', end:'02-18', element:'Air', traits:'original, independent, future-minded and community-aware'},
  {name:'Pisces', start:'02-19', end:'03-20', element:'Water', traits:'imaginative, compassionate, sensitive and intuitive'}
];
const CHINESE = ['Rat','Ox','Tiger','Rabbit','Dragon','Snake','Horse','Goat','Monkey','Rooster','Dog','Pig'];
const COLORS = {Fire:['coral red','gold','sunset orange'],Earth:['sage green','warm brown','cream'],Air:['sky blue','silver','lavender'],Water:['deep blue','sea green','pearl white']};
const ANGELS = {'111':'new beginnings, focus and intention','222':'balance, trust and patient progress','333':'creative expression and supportive energy','444':'stability, protection and steady foundations','555':'change, movement and fresh choices','666':'realignment, care and emotional grounding','777':'inner wisdom, study and spiritual reflection','888':'confidence, growth and resource awareness','999':'completion, release and a new chapter'};
function $(id){return document.getElementById(id)}
function sumDigits(n){return String(n).split('').reduce((a,b)=>a+(+b||0),0)}
function reduceNum(n){while(n>9 && ![11,22,33].includes(n)) n=sumDigits(n); return n}
function signFromDate(dateStr){
  const d = new Date(dateStr + 'T00:00:00'); if(isNaN(d)) return null;
  const m = d.getMonth()+1, day=d.getDate();
  const md = `${String(m).padStart(2,'0')}-${String(day).padStart(2,'0')}`;
  if(md >= '03-21' && md <= '04-19') return SIGNS[0];
  if(md >= '04-20' && md <= '05-20') return SIGNS[1];
  if(md >= '05-21' && md <= '06-20') return SIGNS[2];
  if(md >= '06-21' && md <= '07-22') return SIGNS[3];
  if(md >= '07-23' && md <= '08-22') return SIGNS[4];
  if(md >= '08-23' && md <= '09-22') return SIGNS[5];
  if(md >= '09-23' && md <= '10-22') return SIGNS[6];
  if(md >= '10-23' && md <= '11-21') return SIGNS[7];
  if(md >= '11-22' && md <= '12-21') return SIGNS[8];
  if(md >= '12-22' || md <= '01-19') return SIGNS[9];
  if(md >= '01-20' && md <= '02-18') return SIGNS[10];
  return SIGNS[11];
}
function nameNumber(name){
  const map = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  return reduceNum(name.toUpperCase().split('').reduce((a,c)=>{const i=map.indexOf(c); return a + (i>=0 ? (i%9)+1 : 0)},0));
}
function setResult(html){$('result').innerHTML = html}
function scoreFromText(t){let v=0; for(const ch of t) v=(v*31 + ch.charCodeAt(0)) % 10000; return 55 + (v % 44)}
function elementText(el){return `${el} energy is often linked with ${el==='Fire'?'confidence, action and visibility':el==='Earth'?'stability, practicality and patience':el==='Air'?'ideas, communication and social movement':'emotion, intuition and inner awareness'}.`}
function initTool(tool){
  const form = document.querySelector('[data-tool-form]'); if(!form) return;
  form.addEventListener('submit', e => {
    e.preventDefault();
    const fd = new FormData(form);
    if(tool==='zodiac-sign-calculator'){
      const s=signFromDate(fd.get('birthdate')); if(!s) return setResult('<p>Please enter a valid date.</p>');
      setResult(`<h2>Your zodiac sign is ${s.name}</h2><div class="result-score">${s.element}</div><p>${s.name} is commonly described as ${s.traits}. Use this as a light reflection prompt, not a fixed label.</p>`)
    }
    if(tool==='zodiac-compatibility-calculator' || tool==='friendship-compatibility-calculator'){
      const a=fd.get('sign1'), b=fd.get('sign2'); const score=scoreFromText(a+b+tool); const mode=tool.includes('friendship')?'friendship':'relationship';
      setResult(`<h2>${a} + ${b}</h2><div class="result-score">${score}%</div><p>This ${mode} match can work best when both people respect different emotional rhythms. Treat the score as a conversation starter.</p>`)
    }
    if(tool==='love-compatibility-test'){
      const a=fd.get('name1'), b=fd.get('name2'), d1=fd.get('date1'), d2=fd.get('date2'); const score=scoreFromText(a+b+d1+d2);
      setResult(`<h2>Love Compatibility Result</h2><div class="result-score">${score}%</div><p>${a || 'Person A'} and ${b || 'Person B'} may connect through curiosity, patience and honest communication. Use this result for fun reflection only.</p>`)
    }
    if(tool==='lucky-color-calculator'){
      const birth = fd.get('birthdate'); const sign = signFromDate(birth); if(!sign) return setResult('<p>Please enter a valid date.</p>'); const colors=COLORS[sign.element];
      setResult(`<h2>Your lucky color palette</h2><div class="result-score">${colors[0]}</div><p>For ${sign.name}, ${colors.join(', ')} can symbolize ${sign.element.toLowerCase()} energy. Choose the color that feels most grounding today.</p>`)
    }
    if(tool==='life-path-number-calculator'){
      const d=fd.get('birthdate'); if(!d) return setResult('<p>Please enter a valid date.</p>'); const n=reduceNum(d.replace(/\D/g,'').split('').reduce((a,b)=>a+(+b),0));
      setResult(`<h2>Your life path number is ${n}</h2><div class="result-score">${n}</div><p>Life path ${n} can be used as a symbolic theme for strengths, lessons and personal reflection.</p>`)
    }
    if(tool==='personal-year-calculator'){
      const d=fd.get('birthdate'), y=fd.get('year') || new Date().getFullYear(); if(!d) return setResult('<p>Please enter a valid date.</p>'); const dt=new Date(d+'T00:00:00'); const n=reduceNum(sumDigits(dt.getMonth()+1)+sumDigits(dt.getDate())+sumDigits(y));
      setResult(`<h2>Your personal year number is ${n}</h2><div class="result-score">${n}</div><p>Use this number as a yearly journaling theme. It is not a prediction or a guarantee.</p>`)
    }
    if(tool==='lucky-number-calculator'){
      const d=fd.get('birthdate'), name=fd.get('name')||''; const n=reduceNum((d||'').replace(/\D/g,'').split('').reduce((a,b)=>a+(+b||0),0)+nameNumber(name));
      setResult(`<h2>Your lucky number is ${n}</h2><div class="result-score">${n}</div><p>This number is a symbolic focus point for journaling, design choices or daily intention.</p>`)
    }
    if(tool==='birthday-personality-calculator'){
      const d=fd.get('birthdate'); const s=signFromDate(d); if(!s) return setResult('<p>Please enter a valid date.</p>'); const day=new Date(d+'T00:00:00').getDate(); const n=reduceNum(day);
      setResult(`<h2>Birthday Personality Theme</h2><div class="result-score">${n}</div><p>Your birthday combines ${s.name} ${s.element} energy with day number ${n}. This suggests a reflection style connected with ${s.traits}.</p>`)
    }
    if(tool==='birth-month-personality-calculator'){
      const month=fd.get('month'); const themes=['fresh starts','steady growth','curiosity','emotional care','confidence','refinement','balance','depth','adventure','discipline','originality','imagination'];
      setResult(`<h2>${month} personality theme</h2><div class="result-score">${themes[Number(month)-1]}</div><p>Use this as a light symbolic prompt for journaling and self-understanding.</p>`)
    }
    if(tool==='name-numerology-calculator'){
      const name=fd.get('name')||''; const n=nameNumber(name);
      setResult(`<h2>${name || 'Your name'} number</h2><div class="result-score">${n}</div><p>Name number ${n} can represent a communication style, personal tone or creative expression theme.</p>`)
    }
    if(tool==='name-compatibility-calculator'){
      const a=fd.get('name1')||'', b=fd.get('name2')||''; const score=scoreFromText(a+b);
      setResult(`<h2>Name Compatibility</h2><div class="result-score">${score}%</div><p>The names create a playful symbolic match. Use the result as a fun prompt, not a relationship rule.</p>`)
    }
    if(tool==='career-personality-calculator'){
      const sign=fd.get('sign'), style=fd.get('style'); const score=scoreFromText(sign+style); const theme = style==='creative'?'creative direction':style==='analytical'?'analysis and structure':style==='people'?'communication and care':'independent problem-solving';
      setResult(`<h2>Your work-style theme</h2><div class="result-score">${theme}</div><p>${sign} energy combined with a ${style} preference suggests strengths in ${theme}. This is self-reflection, not career advice.</p>`)
    }
    if(tool==='moon-phase-birthday-calculator'){
      const d=fd.get('birthdate'); if(!d) return setResult('<p>Please enter a valid date.</p>'); const phases=['New Moon','Waxing Crescent','First Quarter','Waxing Gibbous','Full Moon','Waning Gibbous','Last Quarter','Waning Crescent']; const known=new Date('2000-01-06T18:14:00Z'); const now=new Date(d+'T12:00:00Z'); const days=(now-known)/86400000; const phase=phases[Math.floor((((days%29.53058867)+29.53058867)%29.53058867)/29.53058867*8)%8];
      setResult(`<h2>Estimated birth moon phase</h2><div class="result-score">${phase}</div><p>This is a simple estimate for reflection. Precise moon phase tools use detailed astronomy data.</p>`)
    }
    if(tool==='daily-horoscope-generator'){
      const sign=fd.get('sign'); const moods=['move slowly and choose clarity','say the honest thing kindly','finish one small task before starting another','protect your energy and simplify','let curiosity guide one useful action','make space for rest and reflection']; const idx=scoreFromText(sign+new Date().toDateString())%moods.length;
      setResult(`<h2>${sign} daily reflection</h2><div class="result-score">Today</div><p>Your prompt: ${moods[idx]}. Notice what feels true and leave the rest.</p>`)
    }
    if(tool==='yearly-horoscope-2026'){
      const sign=fd.get('sign'); const themes=['renewal','stability','learning','emotional clarity','visibility','organization','partnership','transformation','adventure','discipline','innovation','healing']; const idx=SIGNS.findIndex(s=>s.name===sign);
      setResult(`<h2>${sign} 2026 theme</h2><div class="result-score">${themes[idx]}</div><p>In 2026, ${sign} may use ${themes[idx]} as a journaling theme for goals, relationships and self-reflection.</p>`)
    }
    if(tool==='chinese-zodiac-calculator'){
      const year=Number(fd.get('year')); if(!year) return setResult('<p>Please enter a valid year.</p>'); const animal=CHINESE[(year-4)%12];
      setResult(`<h2>Your Chinese zodiac animal is ${animal}</h2><div class="result-score">${animal}</div><p>The ${animal} is a symbolic year animal used for cultural and entertainment-based personality reflection.</p>`)
    }
    if(tool==='five-elements-calculator'){
      const year=Number(fd.get('year')); if(!year) return setResult('<p>Please enter a valid year.</p>'); const elements=['Wood','Fire','Earth','Metal','Water']; const el=elements[Math.floor(((year-4)%10+10)%10/2)];
      setResult(`<h2>Your element theme is ${el}</h2><div class="result-score">${el}</div><p>${elementText(el)}</p>`)
    }
    if(tool==='tarot-yes-or-no'){
      const q=fd.get('question')||''; const cards=[['The Sun','Yes','clarity, warmth and forward movement'],['The Hermit','Maybe','pause, reflection and more information'],['Two of Swords','Not yet','choice, delay and inner conflict'],['The Star','Yes','hope, healing and patience'],['The Tower','No','change the plan before moving forward']]; const card=cards[scoreFromText(q)%cards.length];
      setResult(`<h2>${card[0]}</h2><div class="result-score">${card[1]}</div><p>Theme: ${card[2]}. Use this as a symbolic prompt, not a final decision.</p>`)
    }
    if(tool==='angel-number-meaning'){
      const n=fd.get('number'); const meaning=ANGELS[n] || 'personal meaning, timing and reflection';
      setResult(`<h2>Angel number ${n}</h2><div class="result-score">${n}</div><p>${meaning}. Notice what this number reminds you to practice today.</p>`)
    }
  });
}
window.initTool = initTool;
