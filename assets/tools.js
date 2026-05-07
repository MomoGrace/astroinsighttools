const SIGNS = [
  {name:'Aries', start:'03-21', end:'04-19', element:'Fire', modality:'Cardinal', polarity:'Yang', archetype:'The Initiator', traits:'bold, direct, energetic and action-oriented', strengths:['Courage to begin','Fast decision-making','Natural confidence'], watch:['Impatience','Reacting before listening','Burning out by moving too fast'], love:'Aries loves honest desire, direct communication and relationships that still feel alive.', work:'Best when there is movement, challenge and visible progress.', prompt:'Where do I need to act with courage, and where do I need more patience?'},
  {name:'Taurus', start:'04-20', end:'05-20', element:'Earth', modality:'Fixed', polarity:'Yin', archetype:'The Builder', traits:'steady, sensual, loyal and patient', strengths:['Consistency','Practical taste','Emotional steadiness'], watch:['Stubbornness','Comfort-zone attachment','Slow adaptation'], love:'Taurus bonds through trust, presence, loyalty and everyday care.', work:'Best when the path is stable, tangible and worth building.', prompt:'What am I building slowly, and what comfort is holding me back?'},
  {name:'Gemini', start:'05-21', end:'06-20', element:'Air', modality:'Mutable', polarity:'Yang', archetype:'The Messenger', traits:'curious, expressive, flexible and quick-minded', strengths:['Conversation','Learning quickly','Seeing multiple angles'], watch:['Scattered focus','Overthinking','Avoiding emotional depth'], love:'Gemini needs mental chemistry, playful curiosity and room to keep discovering.', work:'Best when ideas, communication and variety are part of the day.', prompt:'Which idea deserves my focus instead of only my attention?'},
  {name:'Cancer', start:'06-21', end:'07-22', element:'Water', modality:'Cardinal', polarity:'Yin', archetype:'The Protector', traits:'protective, intuitive, caring and emotionally aware', strengths:['Emotional intelligence','Caregiving','Strong memory'], watch:['Mood withdrawal','Taking things personally','Overprotecting'], love:'Cancer loves emotional safety, softness and feeling chosen consistently.', work:'Best when the environment feels human, meaningful and emotionally respectful.', prompt:'What does emotional safety look like for me today?'},
  {name:'Leo', start:'07-23', end:'08-22', element:'Fire', modality:'Fixed', polarity:'Yang', archetype:'The Performer', traits:'warm, creative, confident and generous', strengths:['Creativity','Leadership warmth','Self-expression'], watch:['Pride','Needing applause','Drama when unseen'], love:'Leo loves affection, celebration and a relationship that feels proud to be seen.', work:'Best when creativity, leadership or visibility is welcomed.', prompt:'How can I express myself generously without needing approval?'},
  {name:'Virgo', start:'08-23', end:'09-22', element:'Earth', modality:'Mutable', polarity:'Yin', archetype:'The Analyst', traits:'practical, observant, helpful and detail-aware', strengths:['Problem-solving','Refinement','Reliability'], watch:['Perfectionism','Self-criticism','Trying to fix everything'], love:'Virgo loves through thoughtful details, practical care and quiet dependability.', work:'Best when there is a system to improve or a useful outcome to create.', prompt:'What can I improve without turning it into self-pressure?'},
  {name:'Libra', start:'09-23', end:'10-22', element:'Air', modality:'Cardinal', polarity:'Yang', archetype:'The Harmonizer', traits:'balanced, social, diplomatic and beauty-loving', strengths:['Diplomacy','Aesthetic awareness','Fairness'], watch:['People-pleasing','Avoiding conflict','Indecision'], love:'Libra bonds through mutual respect, beauty, conversation and emotional fairness.', work:'Best when collaboration, design or negotiation is involved.', prompt:'Where do I need harmony, and where do I need honesty?'},
  {name:'Scorpio', start:'10-23', end:'11-21', element:'Water', modality:'Fixed', polarity:'Yin', archetype:'The Alchemist', traits:'intense, loyal, private and emotionally deep', strengths:['Depth','Loyalty','Emotional courage'], watch:['Suspicion','Control patterns','All-or-nothing reactions'], love:'Scorpio loves deep trust, emotional truth and loyalty that survives difficult moments.', work:'Best when research, strategy or transformation is required.', prompt:'What truth am I ready to face with calm power?'},
  {name:'Sagittarius', start:'11-22', end:'12-21', element:'Fire', modality:'Mutable', polarity:'Yang', archetype:'The Explorer', traits:'adventurous, honest, optimistic and freedom-loving', strengths:['Big-picture thinking','Humor','Courage to explore'], watch:['Restlessness','Bluntness','Avoiding commitment'], love:'Sagittarius needs honesty, space, laughter and a relationship that still feels expansive.', work:'Best when learning, travel, teaching or growth is involved.', prompt:'What freedom am I seeking, and what responsibility supports it?'},
  {name:'Capricorn', start:'12-22', end:'01-19', element:'Earth', modality:'Cardinal', polarity:'Yin', archetype:'The Strategist', traits:'disciplined, ambitious, patient and responsible', strengths:['Long-term planning','Resilience','Practical leadership'], watch:['Emotional distance','Overwork','Fear of failure'], love:'Capricorn loves reliability, respect and commitments that are proven by action.', work:'Best when effort can compound into meaningful results.', prompt:'What long-term move matters more than today’s mood?'},
  {name:'Aquarius', start:'01-20', end:'02-18', element:'Air', modality:'Fixed', polarity:'Yang', archetype:'The Visionary', traits:'original, independent, future-minded and community-aware', strengths:['Original thinking','Independence','Humanitarian perspective'], watch:['Detachment','Rebellion for its own sake','Difficulty with emotional routine'], love:'Aquarius needs friendship, freedom, respect for individuality and shared ideas.', work:'Best when innovation, systems or community impact are involved.', prompt:'How can I stay original while still staying connected?'},
  {name:'Pisces', start:'02-19', end:'03-20', element:'Water', modality:'Mutable', polarity:'Yin', archetype:'The Dreamer', traits:'imaginative, compassionate, sensitive and intuitive', strengths:['Empathy','Imagination','Spiritual sensitivity'], watch:['Escapism','Weak boundaries','Absorbing others’ emotions'], love:'Pisces loves tenderness, imagination, empathy and emotional soulfulness.', work:'Best when creativity, healing, story or meaning is present.', prompt:'Where do I need compassion, and where do I need a boundary?'}
];

const CHINESE = [
  ['Rat','resourceful, observant and quick to adapt'],['Ox','steady, patient and reliable'],['Tiger','brave, expressive and independent'],['Rabbit','gentle, diplomatic and sensitive'],['Dragon','charismatic, ambitious and bold'],['Snake','intuitive, strategic and private'],['Horse','energetic, free-spirited and social'],['Goat','creative, kind and harmony-seeking'],['Monkey','clever, playful and inventive'],['Rooster','precise, confident and organized'],['Dog','loyal, protective and sincere'],['Pig','generous, warm and pleasure-loving']
];

const ELEMENTS = {
  Fire:{keywords:['Action','confidence','visibility'], gifts:['Initiative','warmth','creative courage'], shadow:['Impatience','burnout','dramatic reactions'], ritual:'Choose one bold action and finish it before starting three more.'},
  Earth:{keywords:['Stability','patience','real results'], gifts:['Reliability','practical wisdom','follow-through'], shadow:['Rigidity','over-control','fear of change'], ritual:'Turn one abstract worry into a simple physical next step.'},
  Air:{keywords:['Ideas','communication','movement'], gifts:['Objectivity','conversation','mental agility'], shadow:['Overthinking','detachment','scattered attention'], ritual:'Write the thought down, then decide whether it needs action or release.'},
  Water:{keywords:['Emotion','intuition','inner truth'], gifts:['Empathy','imagination','emotional depth'], shadow:['Absorbing moods','avoidance','unclear boundaries'], ritual:'Name the feeling before trying to fix it.'},
  Wood:{keywords:['Growth','vision','renewal'], gifts:['Planning','kindness','forward motion'], shadow:['Frustration','overextension','restlessness'], ritual:'Choose one area to grow slowly instead of forcing everything at once.'},
  Metal:{keywords:['Clarity','standards','refinement'], gifts:['Discernment','discipline','clean structure'], shadow:['Harsh judgment','coldness','perfectionism'], ritual:'Simplify one decision by removing what is no longer aligned.'}
};

const LIFE_PATHS = {
  1:{title:'The Independent Starter', gift:'initiative, courage and self-direction', challenge:'learning to lead without isolating yourself', love:'You need respect for your independence and a partner who does not shrink your fire.', career:'You may thrive when you can build, launch, lead or take ownership.', prompt:'What decision would I make if I trusted my own direction?'},
  2:{title:'The Sensitive Connector', gift:'empathy, cooperation and emotional awareness', challenge:'speaking your needs instead of only adapting to others', love:'You need gentleness, consistency and a sense of emotional partnership.', career:'You may thrive in supportive, diplomatic, design, care or coordination roles.', prompt:'Where can I choose peace without abandoning myself?'},
  3:{title:'The Expressive Creator', gift:'communication, humor and creative self-expression', challenge:'turning inspiration into steady follow-through', love:'You need play, conversation and permission to be fully expressive.', career:'You may thrive in writing, content, art, teaching, marketing or social spaces.', prompt:'What wants to be expressed instead of over-edited?'},
  4:{title:'The Grounded Builder', gift:'structure, discipline and reliability', challenge:'not becoming too rigid or self-critical', love:'You need loyalty, practical trust and a relationship that feels solid.', career:'You may thrive in operations, systems, finance, building, planning or craft.', prompt:'What small habit would make my life feel safer?'},
  5:{title:'The Freedom Seeker', gift:'adaptability, curiosity and movement', challenge:'choosing freedom without avoiding commitment', love:'You need variety, honest communication and room to keep growing.', career:'You may thrive in travel, sales, media, entrepreneurship or flexible work.', prompt:'What kind of freedom actually supports my future self?'},
  6:{title:'The Heart-Centered Guardian', gift:'care, beauty, responsibility and protection', challenge:'helping others without becoming responsible for everything', love:'You need warmth, devotion and shared emotional responsibility.', career:'You may thrive in design, teaching, wellness, care, hospitality or community roles.', prompt:'What can I care for without carrying alone?'},
  7:{title:'The Inner Researcher', gift:'analysis, intuition and depth', challenge:'staying connected instead of disappearing into your mind', love:'You need trust, privacy and conversations with emotional intelligence.', career:'You may thrive in research, strategy, psychology, technology, writing or spirituality.', prompt:'What truth am I ready to understand more deeply?'},
  8:{title:'The Power Builder', gift:'ambition, resource management and resilience', challenge:'defining success without losing your inner life', love:'You need respect, loyalty and someone who understands long-term effort.', career:'You may thrive in business, leadership, finance, management or high-responsibility work.', prompt:'What does healthy power look like for me?'},
  9:{title:'The Compassionate Finisher', gift:'wisdom, empathy and big-picture meaning', challenge:'letting go without becoming hopeless or over-responsible', love:'You need emotional maturity, kindness and shared values.', career:'You may thrive in education, art, healing, social impact, writing or global work.', prompt:'What am I ready to complete, forgive or release?'},
  11:{title:'The Intuitive Messenger', gift:'sensitivity, inspiration and spiritual insight', challenge:'grounding strong feelings into daily life', love:'You need emotional honesty, calm support and space for your intuition.', career:'You may thrive when inspiration, teaching, art, healing or vision are part of the work.', prompt:'How can I turn sensitivity into guidance, not anxiety?'},
  22:{title:'The Master Builder', gift:'large-scale vision with practical structure', challenge:'not being crushed by the size of your own standards', love:'You need support for both your heart and your mission.', career:'You may thrive in building systems, organizations, platforms, education or long-term projects.', prompt:'What is the next grounded step for the bigger vision?'},
  33:{title:'The Compassionate Teacher', gift:'service, healing presence and creative devotion', challenge:'giving without self-erasure', love:'You need kindness, maturity and a relationship that honors your tenderness.', career:'You may thrive in teaching, counseling, art, care, community or inspirational work.', prompt:'How can I serve with love while still protecting my energy?'}
};

const MONTHS = ['January','February','March','April','May','June','July','August','September','October','November','December'];
const COLORS_BY_ELEMENT = {
  Fire:[['Solar Coral','Use when you need confidence and visibility'],['Warm Gold','Use for optimism, creativity and courage'],['Deep Red','Use sparingly when you need decisive action']],
  Earth:[['Sage Green','Use for calm focus and grounded growth'],['Clay Brown','Use for stability and steady effort'],['Soft Cream','Use for simplicity and emotional ease']],
  Air:[['Sky Blue','Use for clear communication and lightness'],['Lavender','Use for reflection and softer thinking'],['Silver','Use for objectivity and fresh perspective']],
  Water:[['Ocean Blue','Use for emotional honesty and calm'],['Sea Green','Use for healing and gentle boundaries'],['Pearl White','Use for softness, release and inner quiet']]
};
const ANGELS = {
  '111':['New Beginning','Set a clean intention. Your attention is powerful today.'],
  '222':['Balance','Slow down and rebuild trust through consistent small steps.'],
  '333':['Expression','Create, speak or share what has been living inside you.'],
  '444':['Foundation','Return to routine, protection, structure and the basics.'],
  '555':['Change','A pattern is shifting. Choose movement with awareness, not chaos.'],
  '666':['Realignment','Come back to your body, home, values and emotional center.'],
  '777':['Inner Wisdom','Study, listen inward and let quiet insight guide the next step.'],
  '888':['Power & Resources','Notice confidence, money patterns and how you manage energy.'],
  '999':['Completion','Release what has served its lesson and make room for a cleaner chapter.']
};
const TAROT = [
  ['The Sun','Yes','Warm clarity is present. Move forward, but keep the action simple and honest.','What part of this already feels alive?'],
  ['The Star','Yes, gently','Hope is returning. Choose the path that restores faith rather than panic.','What would healing look like in this situation?'],
  ['The Magician','Yes, if you act','You have tools available, but the result depends on focused action.','What resource am I not using yet?'],
  ['Justice','Maybe','The answer depends on fairness, facts and a balanced decision.','What truth needs to be admitted before I choose?'],
  ['The Hermit','Not yet','More reflection is needed. Delay can protect you from a rushed choice.','What would quiet wisdom say?'],
  ['Two of Swords','Not yet','You may be avoiding a decision or missing key information.','What am I afraid to see clearly?'],
  ['The Tower','No / Change course','The current plan may be unstable. Adjust before forcing the outcome.','What structure is already showing cracks?'],
  ['Temperance','Maybe, slowly','Blend patience with action. This is not a rush-answer situation.','Where do I need moderation?']
];

function $(id){return document.getElementById(id)}
function esc(v){return String(v ?? '').replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]))}
function sumDigits(n){return String(n).split('').reduce((a,b)=>a+(+b||0),0)}
function reduceNum(n){while(n>9 && ![11,22,33].includes(n)) n=sumDigits(n); return n || 0}
function dateObj(dateStr){const d = new Date(dateStr + 'T00:00:00'); return isNaN(d) ? null : d}
function signFromDate(dateStr){
  const d = dateObj(dateStr); if(!d) return null;
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
function byName(name){return SIGNS.find(s=>s.name===name)}
function nameNumber(name){const map='ABCDEFGHIJKLMNOPQRSTUVWXYZ'; return reduceNum(String(name||'').toUpperCase().split('').reduce((a,c)=>{const i=map.indexOf(c); return a + (i>=0 ? (i%9)+1 : 0)},0))}
function lifePath(dateStr){return reduceNum(String(dateStr||'').replace(/\D/g,'').split('').reduce((a,b)=>a+(+b||0),0))}
function hash(t){let v=0; for(const ch of String(t)) v=(v*31+ch.charCodeAt(0))%100000; return v}
function clamp(n,min,max){return Math.max(min,Math.min(max,n))}
function elementScore(a,b){
  if(a===b) return 86;
  const good = {Fire:['Air','Fire'], Air:['Fire','Air'], Earth:['Water','Earth'], Water:['Earth','Water']};
  const tense = {Fire:['Water'], Water:['Fire'], Earth:['Air'], Air:['Earth']};
  if(good[a]?.includes(b)) return 80;
  if(tense[a]?.includes(b)) return 58;
  return 70;
}
function modalityScore(a,b){return a===b ? 68 : 76}
function compatibility(a,b,seed=''){
  const e = elementScore(a.element,b.element);
  const m = modalityScore(a.modality,b.modality);
  const polarity = a.polarity===b.polarity ? 70 : 78;
  const variation = (hash(a.name+b.name+seed)%9)-4;
  const overall = clamp(Math.round(e*.45 + m*.25 + polarity*.2 + 8 + variation),52,96);
  const chemistry = clamp(Math.round(elementScore(a.element,b.element) + ((a.polarity!==b.polarity)?6:0) + variation),50,98);
  const communication = clamp(Math.round((a.element==='Air'||b.element==='Air'?82:72) + (a.modality!==b.modality?4:-2) + variation),50,96);
  const stability = clamp(Math.round((a.element==='Earth'||b.element==='Earth'?84:70) + (a.modality==='Fixed'||b.modality==='Fixed'?5:0) - Math.abs(variation)),48,95);
  const growth = clamp(Math.round((a.element!==b.element?82:72) + (a.modality!==b.modality?5:0) + Math.abs(variation)),50,98);
  return {overall, chemistry, communication, stability, growth};
}
function scoreLabel(score){if(score>=88) return 'High-Resonance Match'; if(score>=78) return 'Strong Potential'; if(score>=68) return 'Balanced Match'; if(score>=58) return 'Growth Match'; return 'Reflective Match'}
function colorBars(obj){return `<div class="insight-bars"><div><span>Chemistry</span><b style="width:${obj.chemistry}%"></b><em>${obj.chemistry}%</em></div><div><span>Communication</span><b style="width:${obj.communication}%"></b><em>${obj.communication}%</em></div><div><span>Stability</span><b style="width:${obj.stability}%"></b><em>${obj.stability}%</em></div><div><span>Growth</span><b style="width:${obj.growth}%"></b><em>${obj.growth}%</em></div></div>`}
function bullets(items){return `<ul class="result-list">${items.map(i=>`<li>${esc(i)}</li>`).join('')}</ul>`}
function cards(items){return `<div class="result-card-grid">${items.map(([h,p])=>`<div class="result-mini-card"><strong>${esc(h)}</strong><p>${esc(p)}</p></div>`).join('')}</div>`}
function resultLayout({kicker='', title, score='', label='', intro='', sections=[], lists=[], footer=''}){
  return `<div class="deep-result">${kicker?`<div class="result-kicker">${esc(kicker)}</div>`:''}<h2>${title}</h2>${score!==''?`<div class="result-score-row"><span>${score}</span><em>${esc(label)}</em></div>`:''}${intro?`<p class="result-intro">${intro}</p>`:''}${sections.join('')}${lists.map(([h,items])=>`<h3>${esc(h)}</h3>${bullets(items)}`).join('')}${footer?`<div class="result-footer-note">${footer}</div>`:''}</div>`}
function setResult(html){$('result').innerHTML = html}
function signSelectName(v){return byName(v) || SIGNS[0]}

function zodiacSignResult(fd){
  const s = signFromDate(fd.get('birthdate')); if(!s) return setResult('<p>Please enter a valid date.</p>');
  return setResult(resultLayout({
    kicker:'Zodiac profile', title:`${s.name}: ${s.archetype}`, score:s.element, label:`${s.modality} · ${s.polarity}`, 
    intro:`${s.name} is commonly linked with ${s.traits}. This profile gives you a deeper self-reflection map: not a fixed identity, but a useful lens for motivation, relationships and daily choices.`,
    sections:[cards([
      ['Core energy', `${s.element} energy: ${ELEMENTS[s.element].keywords.join(', ').toLowerCase()}.`],
      ['Relationship style', s.love],
      ['Work rhythm', s.work],
      ['Journal prompt', s.prompt]
    ])],
    lists:[['Natural strengths', s.strengths], ['Patterns to watch', s.watch]],
    footer:'Use this result as a mirror. The most useful insight is the one that helps you act with more clarity, kindness or courage today.'
  }))
}
function zodiacCompatibilityResult(fd, friendship=false){
  const a=signSelectName(fd.get('sign1')), b=signSelectName(fd.get('sign2'));
  const c=compatibility(a,b,friendship?'friendship':'love');
  const mode = friendship ? 'friendship' : 'relationship';
  const strengths = [
    a.element===b.element ? `Shared ${a.element.toLowerCase()} energy can make the connection feel familiar and easy to understand.` : `${a.element} and ${b.element} energy can create contrast, curiosity and learning.`,
    a.modality!==b.modality ? `Different rhythms can help one person initiate while the other adapts or stabilizes.` : `A shared ${a.modality.toLowerCase()} rhythm means both may approach life with similar timing.`,
    friendship ? 'This match works best when both people respect each other’s pace and communication style.' : 'This match works best when attraction is supported by real listening and emotional safety.'
  ];
  const challenges = [
    c.communication < 72 ? 'Communication may need extra patience because each person processes feelings differently.' : 'Strong communication potential is present, but assumptions can still create distance.',
    c.stability < 72 ? 'The connection may need clearer routines, expectations or boundaries to feel steady.' : 'Stability is possible when both people keep promises in small daily ways.',
    'Do not use the score as a final answer. Use it as a starting point for better questions.'
  ];
  return setResult(resultLayout({
    kicker: friendship ? 'Friendship compatibility' : 'Zodiac compatibility',
    title:`${a.name} + ${b.name}`,
    score:`${c.overall}%`, label:scoreLabel(c.overall),
    intro:`This ${mode} combines ${a.name} ${a.element} energy with ${b.name} ${b.element} energy. The score is not a prediction; it is a structured reflection on chemistry, communication, stability and growth.`,
    sections:[colorBars(c), cards([
      ['Best connection point', c.chemistry>=c.communication ? 'Energy and attraction may feel easier than explanation. Let the connection breathe before defining everything.' : 'Conversation can become the bridge. Ask better questions and the connection becomes clearer.'],
      ['What makes it work', c.stability>=75 ? 'Consistency, respect and repeated small actions.' : 'Honesty, emotional flexibility and willingness to adjust.'],
      ['Question to ask', friendship ? 'Do we give each other space to be different?' : 'Do we feel calmer and more honest after we talk?']
    ])],
    lists:[['Strengths', strengths], ['Growth areas', challenges]],
    footer:'For entertainment and self-reflection only. Real relationships depend on choices, maturity and communication.'
  }))
}
function loveCompatibilityResult(fd){
  const n1=fd.get('name1')||'Person A', n2=fd.get('name2')||'Person B';
  const s1=signFromDate(fd.get('date1')), s2=signFromDate(fd.get('date2')); if(!s1||!s2) return setResult('<p>Please enter both valid birth dates.</p>');
  const lp1=lifePath(fd.get('date1')), lp2=lifePath(fd.get('date2'));
  const base=compatibility(s1,s2,n1+n2+lp1+lp2);
  const numRes = Math.abs(lp1-lp2); const numScore = numRes===0?86:numRes<=2?78:numRes<=5?68:60;
  const nameScore = 58 + (hash(n1+n2)%35);
  const overall=clamp(Math.round(base.overall*.58 + numScore*.24 + nameScore*.18),52,97);
  const final={...base, overall, chemistry:clamp(Math.round(base.chemistry*.7+nameScore*.3),50,98), communication:clamp(Math.round(base.communication*.75+numScore*.25),50,96)};
  return setResult(resultLayout({
    kicker:'Love compatibility', title:`${esc(n1)} + ${esc(n2)}`, score:`${overall}%`, label:scoreLabel(overall),
    intro:`This reading combines zodiac signs, birth-date numerology and name resonance to create a fuller relationship reflection. ${esc(n1)} carries ${s1.name} / Life Path ${lp1} themes, while ${esc(n2)} carries ${s2.name} / Life Path ${lp2} themes.`,
    sections:[colorBars(final), cards([
      ['Emotional tone', `${s1.element} meets ${s2.element}: ${s1.element===s2.element?'familiar, natural and easy to mirror':'different enough to create attraction and learning'}.`],
      ['Numerology rhythm', lp1===lp2 ? `Both share Life Path ${lp1}, which can create a strong sense of recognition.` : `Life Path ${lp1} and ${lp2} may bring different needs, timing and lessons.`],
      ['Best use of this result', 'Read it together as a conversation starter. The real value is the discussion it opens, not the number itself.']
    ])],
    lists:[['What may feel easy', [`${s1.name} brings ${s1.traits}.`, `${s2.name} brings ${s2.traits}.`, 'The match improves when both people explain needs before expecting the other person to guess.']], ['What needs care', ['Do not confuse chemistry with consistency.', 'Notice whether communication feels safer over time.', 'A good score still needs honesty, boundaries and real-world maturity.']]],
    footer:'This is an entertainment tool, not relationship advice. Use it for self-reflection, journaling or a fun conversation.'
  }))
}
function luckyColorResult(fd){
  const s=signFromDate(fd.get('birthdate')); if(!s) return setResult('<p>Please enter a valid date.</p>');
  const palette = COLORS_BY_ELEMENT[s.element];
  return setResult(resultLayout({
    kicker:'Color insight', title:`Your ${s.name} lucky color palette`, score:palette[0][0], label:`${s.element} element`,
    intro:`Your palette is based on ${s.name} ${s.element} energy. Instead of giving only one random color, this tool gives a small usable palette for mood, focus and self-expression.`,
    sections:[`<div class="palette-row">${palette.map(c=>`<div><strong>${esc(c[0])}</strong><span>${esc(c[1])}</span></div>`).join('')}</div>`, cards([
      ['Today’s use', palette[0][1]],
      ['When to choose lighter tones', 'Use lighter shades when you want softness, trust and emotional calm.'],
      ['When to choose stronger tones', 'Use stronger shades when you need action, visibility or decisive energy.']
    ])],
    lists:[['Practical ways to use it', ['Outfit accent color', 'Notebook or workspace theme', 'Phone wallpaper', 'Brand or social post mood', 'A small object that reminds you of your intention']]],
    footer:'Lucky colors are symbolic. The best color is the one that helps you feel clearer, calmer or more intentional.'
  }))
}
function lifePathResult(fd){
  const n=lifePath(fd.get('birthdate')); const item=LIFE_PATHS[n]; if(!item) return setResult('<p>Please enter a valid birth date.</p>');
  return setResult(resultLayout({
    kicker:'Numerology profile', title:`Life Path ${n}: ${item.title}`, score:n, label:'Core life theme',
    intro:`Life Path ${n} is a symbolic numerology theme calculated from your full birth date. It is useful for journaling about strengths, lessons, relationship needs and work style.`,
    sections:[cards([
      ['Core gift', item.gift],
      ['Main lesson', item.challenge],
      ['Love pattern', item.love],
      ['Career energy', item.career]
    ])],
    lists:[['How to use this number well', ['Treat it as a reflection theme, not a fixed destiny.', 'Look for repeated patterns in choices, relationships and motivation.', 'Use the journal prompt when you feel stuck or unfocused.']]],
    footer:`Journal prompt: ${item.prompt}`
  }))
}
function personalYearResult(fd){
  const d=dateObj(fd.get('birthdate')); const y=Number(fd.get('year')||new Date().getFullYear()); if(!d||!y) return setResult('<p>Please enter a valid date and year.</p>');
  const n=reduceNum(sumDigits(d.getMonth()+1)+sumDigits(d.getDate())+sumDigits(y));
  const themes={1:'beginning, identity and new action',2:'patience, cooperation and trust',3:'expression, creativity and visibility',4:'structure, discipline and foundations',5:'change, freedom and flexibility',6:'care, responsibility and relationships',7:'reflection, study and inner clarity',8:'power, money and long-term results',9:'completion, release and wisdom'};
  return setResult(resultLayout({kicker:'Personal year', title:`Your ${y} personal year is ${n}`, score:n, label:'Yearly theme', intro:`This year highlights ${themes[n]}. Use it as a planning and journaling lens rather than a prediction.`, sections:[cards([['Best focus', themes[n]],['Helpful question','What decision would support this theme in a healthy way?'],['Monthly practice','Choose one simple action each month that matches the year theme.']])], footer:'A personal year number is symbolic and should not replace practical planning.'}))
}
function luckyNumberResult(fd){
  const name=fd.get('name')||''; const d=fd.get('birthdate')||''; const nn=nameNumber(name); const lp=lifePath(d); const lucky=reduceNum(nn+lp+sumDigits(hash(name+d)%99));
  return setResult(resultLayout({kicker:'Number insight', title:`Your lucky number is ${lucky}`, score:lucky, label:`Name ${nn} · Life Path ${lp}`, intro:`This number blends your name vibration and birth-date theme into a simple symbolic focus point.`, sections:[cards([['Name number',`Your name number is ${nn}.`],['Birth-date theme',`Your life path is ${lp}.`],['Use it for','A daily intention, journal page, design detail or playful personal symbol.']])], footer:'Lucky numbers are for entertainment and reflection, not financial decisions.'}))
}
function birthdayPersonalityResult(fd){
  const d=dateObj(fd.get('birthdate')); const s=signFromDate(fd.get('birthdate')); if(!d||!s) return setResult('<p>Please enter a valid date.</p>');
  const day=d.getDate(); const dn=reduceNum(day); const lp=lifePath(fd.get('birthdate')); const month=MONTHS[d.getMonth()]; const life=LIFE_PATHS[lp];
  return setResult(resultLayout({
    kicker:'Birthday profile', title:`Born on ${month} ${day}`, score:`${s.name}`, label:`Day ${dn} · Life Path ${lp}`,
    intro:`Your birthday profile combines zodiac season, day number and full-date numerology. This creates a richer personality reflection than a single birthday label.`,
    sections:[cards([
      ['Zodiac layer', `${s.name} brings ${s.traits}.`],
      ['Day number layer', `Day number ${dn} adds a personal expression theme to how you show up.`],
      ['Life path layer', life ? `${life.title}: ${life.gift}.` : `Life Path ${lp} adds your broader growth theme.`],
      ['Reflection prompt', s.prompt]
    ])],
    lists:[['Strengths to develop', [s.strengths[0], s.strengths[1], life ? life.gift : 'personal awareness']], ['Patterns to soften', [s.watch[0], s.watch[1], life ? life.challenge : 'over-identifying with labels']]],
    footer:'Use this profile to notice patterns. You are always more than a tool result.'
  }))
}
function birthMonthResult(fd){
  const m=Number(fd.get('month')); if(!m) return setResult('<p>Please choose a month.</p>');
  const data=[['Quiet Starter','fresh starts, private planning and inner strength'],['Soft Builder','patience, loyalty and emotional warmth'],['Curious Voice','communication, humor and social learning'],['Grounded Grower','stability, persistence and practical care'],['Expressive Heart','confidence, beauty and generous affection'],['Sensitive Analyst','detail, service and emotional intelligence'],['Balanced Connector','fairness, partnership and aesthetic sense'],['Deep Transformer','intensity, loyalty and inner courage'],['Open Explorer','freedom, optimism and truth-seeking'],['Disciplined Climber','ambition, patience and long-term vision'],['Original Thinker','independence, ideas and future focus'],['Intuitive Dreamer','empathy, imagination and spiritual softness']][m-1];
  return setResult(resultLayout({kicker:'Birth month profile', title:`${MONTHS[m-1]}: ${data[0]}`, score:MONTHS[m-1], label:'Month theme', intro:`People born in ${MONTHS[m-1]} are often symbolically associated with ${data[1]}.`, sections:[cards([['Emotional tone',data[1]],['Growth edge','Turn the month theme into a choice, not an excuse.'],['Journal prompt',`How does ${MONTHS[m-1]} energy show up in my relationships, work and habits?`]])], footer:'Birth month meanings are symbolic and best used as light self-reflection.'}))
}
function nameNumerologyResult(fd){
  const name=fd.get('name')||''; const n=nameNumber(name); const item=LIFE_PATHS[n] || LIFE_PATHS[reduceNum(n)];
  return setResult(resultLayout({kicker:'Name numerology', title:`${esc(name)}: Name Number ${n}`, score:n, label:item?.title || 'Expression theme', intro:`This result turns the letters in your name into a symbolic number. It can be used to reflect on communication style, public tone and creative expression.`, sections:[cards([['Expression style', item?.gift || 'personal expression'],['Growth edge', item?.challenge || 'using your voice with awareness'],['Best use','Try it as a branding, journaling or self-description prompt.']])], footer:'Name numerology is symbolic. It does not define your identity.'}))
}
function nameCompatibilityResult(fd){
  const a=fd.get('name1')||'Name A', b=fd.get('name2')||'Name B'; const na=nameNumber(a), nb=nameNumber(b); const diff=Math.abs(na-nb); const score=clamp(88-diff*4+(hash(a+b)%9),54,96);
  return setResult(resultLayout({kicker:'Name match', title:`${esc(a)} + ${esc(b)}`, score:`${score}%`, label:scoreLabel(score), intro:`This match compares name numbers ${na} and ${nb}. It is designed as a playful conversation prompt rather than a serious relationship rule.`, sections:[cards([['Name rhythm', diff<=1?'Similar tone and easy recognition.':'Different tone that may create curiosity or contrast.'],['Best use','Use this for fun, brand-name pairing, character names or light relationship reflection.'],['Question','What feeling do the two names create together?']])], footer:'For entertainment only.'}))
}
function careerPersonalityResult(fd){
  const s=signSelectName(fd.get('sign')), style=fd.get('style');
  const styleMap={creative:['Creative Builder','visual ideas, storytelling, content, design or performance'],analytical:['Strategic Analyst','research, numbers, systems, planning or problem-solving'],people:['People Connector','service, support, sales, teaching, community or hospitality'],independent:['Independent Operator','freelance work, entrepreneurship, solo projects or flexible problem-solving']};
  const chosen=styleMap[style]||styleMap.creative;
  return setResult(resultLayout({kicker:'Career personality', title:`${s.name} ${chosen[0]}`, score:s.element, label:chosen[0], intro:`This result combines ${s.name} energy with your preferred work style. It is not career advice; it is a reflection tool for understanding what kind of work environment may feel more natural.`, sections:[cards([['Natural strengths', s.work],['Best-fit activities', chosen[1]],['Watch-out pattern', s.watch[0]],['Next step','Choose one small project that uses your strength without overwhelming you.']])], footer:'Use this as a career journaling prompt, not a professional assessment.'}))
}
function moonPhaseResult(fd){
  const d=fd.get('birthdate'); if(!dateObj(d)) return setResult('<p>Please enter a valid date.</p>');
  const phases=[['New Moon','beginning, instinct and private intention'],['Waxing Crescent','hope, learning and early growth'],['First Quarter','decision, courage and active challenge'],['Waxing Gibbous','refinement, improvement and preparation'],['Full Moon','visibility, emotion and culmination'],['Waning Gibbous','sharing, gratitude and teaching'],['Last Quarter','release, responsibility and turning points'],['Waning Crescent','rest, closure and spiritual reflection']];
  const known=new Date('2000-01-06T18:14:00Z'); const now=new Date(d+'T12:00:00Z'); const days=(now-known)/86400000; const phase=phases[Math.floor((((days%29.53058867)+29.53058867)%29.53058867)/29.53058867*8)%8];
  return setResult(resultLayout({kicker:'Estimated moon phase', title:`${phase[0]} birthday theme`, score:phase[0], label:'Approximate', intro:`This simple browser calculation estimates the moon phase for your birthday and turns it into a personality reflection.`, sections:[cards([['Symbolic meaning', phase[1]],['Useful prompt','How do I naturally begin, build, share or release energy?'],['Accuracy note','For exact astronomy, use a dedicated ephemeris-based moon tool.']])], footer:'This is an estimate for entertainment and journaling only.'}))
}
function dailyHoroscopeResult(fd){
  const s=signSelectName(fd.get('sign')); const i=hash(s.name+new Date().toDateString())%5;
  const prompts=[['Focus','Choose one priority and protect it from emotional noise.'],['Connection','Say the honest thing gently. Clarity can be kind.'],['Energy','Do less, but do it with presence and completion.'],['Growth','A small uncomfortable step may be more useful than a perfect plan.'],['Reflection','Notice what repeats. Patterns are messages when you slow down.']][i];
  return setResult(resultLayout({kicker:'Daily reflection', title:`${s.name} today`, score:prompts[0], label:'Self-reflection prompt', intro:`Today’s ${s.name} prompt is written for reflection, not prediction. Use it to check your mood, focus and relationship energy.`, sections:[cards([['Main theme', prompts[1]],['Relationship note', s.love],['Work note', s.work],['Evening question', s.prompt]])], footer:'Daily horoscopes work best when they help you become more intentional, not more fearful.'}))
}
function yearly2026Result(fd){
  const s=signSelectName(fd.get('sign')); const themes={Fire:'visibility, courage and creative movement',Earth:'stability, money habits and long-term structure',Air:'ideas, communication and social growth',Water:'healing, intuition and emotional boundaries'};
  return setResult(resultLayout({kicker:'2026 yearly theme', title:`${s.name} 2026 overview`, score:'2026', label:s.element, intro:`For ${s.name}, 2026 can be used as a reflection year for ${themes[s.element]}. This is not a prediction; it is a planning lens.`, sections:[cards([['Growth focus', themes[s.element]],['Relationship focus', s.love],['Work focus', s.work],['Yearly question', `How can I live the higher side of ${s.element} energy this year?`]])], lists:[['Three gentle goals', ['Build one habit that supports emotional clarity.', 'Improve one relationship through better communication.', 'Choose one long-term project and give it consistent attention.']]], footer:'Use this yearly horoscope as a planning prompt, not a guarantee.'}))
}
function chineseZodiacResult(fd){
  const year=Number(fd.get('year')); if(!year) return setResult('<p>Please enter a valid year.</p>'); const animal=CHINESE[((year-4)%12+12)%12];
  return setResult(resultLayout({kicker:'Chinese zodiac', title:`${year}: Year of the ${animal[0]}`, score:animal[0], label:'Year animal', intro:`The ${animal[0]} is symbolically associated with being ${animal[1]}. This tool presents Chinese zodiac ideas in a simple global style for entertainment and self-reflection.`, sections:[cards([['Personality tone', animal[1]],['Best use','Use it as a cultural personality lens, not a fixed destiny.'],['Reflection question',`How can I use the higher side of ${animal[0]} energy this year?`]])], footer:'Chinese zodiac years can vary around Lunar New Year. This simple version uses birth year only.'}))
}
function fiveElementsResult(fd){
  const year=Number(fd.get('year')); if(!year) return setResult('<p>Please enter a valid year.</p>'); const elements=['Wood','Fire','Earth','Metal','Water']; const el=elements[Math.floor((((year-4)%10+10)%10)/2)]; const e=ELEMENTS[el];
  return setResult(resultLayout({kicker:'Five elements', title:`Your element theme is ${el}`, score:el, label:e.keywords.join(' · '), intro:`${el} energy is linked with ${e.keywords.join(', ').toLowerCase()}. This result is a symbolic element profile for mood, behavior and personal reflection.`, sections:[cards([['Core gifts', e.gifts.join(', ')],['Shadow pattern', e.shadow.join(', ')],['Simple practice', e.ritual]])], footer:'This simplified calculator uses birth year. A complete BaZi chart would require birth date, time and location.'}))
}
function tarotResult(fd){
  const q=fd.get('question')||''; if(!q.trim()) return setResult('<p>Please enter a question.</p>'); const card=TAROT[hash(q)%TAROT.length];
  return setResult(resultLayout({kicker:'Tarot prompt', title:card[0], score:card[1], label:'Symbolic answer', intro:card[2], sections:[cards([['Question asked', q],['Reflection prompt', card[3]],['How to use it','Do not hand your decision to the card. Use the card to ask a clearer question.']])], footer:'Tarot tools are for entertainment and reflection only, not life decision advice.'}))
}
function angelResult(fd){
  const n=fd.get('number'); const a=ANGELS[n] || ['Personal Sign','Notice what this number reminds you to practice today.'];
  return setResult(resultLayout({kicker:'Angel number meaning', title:`${n}: ${a[0]}`, score:n, label:a[0], intro:a[1], sections:[cards([['Message', a[1]],['Practice','Write one sentence about what this number makes you notice.'],['Grounding note','A meaningful number is most useful when it leads to a calm, practical action.']])], footer:'Angel numbers are symbolic and personal. They are not predictions or guarantees.'}))
}

function initTool(tool){
  const form = document.querySelector('[data-tool-form]'); if(!form) return;
  form.addEventListener('submit', e => {
    e.preventDefault();
    const fd = new FormData(form);
    const actions = {
      'zodiac-sign-calculator': zodiacSignResult,
      'zodiac-compatibility-calculator': fd => zodiacCompatibilityResult(fd,false),
      'friendship-compatibility-calculator': fd => zodiacCompatibilityResult(fd,true),
      'love-compatibility-test': loveCompatibilityResult,
      'lucky-color-calculator': luckyColorResult,
      'life-path-number-calculator': lifePathResult,
      'personal-year-calculator': personalYearResult,
      'lucky-number-calculator': luckyNumberResult,
      'birthday-personality-calculator': birthdayPersonalityResult,
      'birth-month-personality-calculator': birthMonthResult,
      'name-numerology-calculator': nameNumerologyResult,
      'name-compatibility-calculator': nameCompatibilityResult,
      'career-personality-calculator': careerPersonalityResult,
      'moon-phase-birthday-calculator': moonPhaseResult,
      'daily-horoscope-generator': dailyHoroscopeResult,
      'yearly-horoscope-2026': yearly2026Result,
      'chinese-zodiac-calculator': chineseZodiacResult,
      'five-elements-calculator': fiveElementsResult,
      'tarot-yes-or-no': tarotResult,
      'angel-number-meaning': angelResult
    };
    const fn=actions[tool];
    if(fn) fn(fd); else setResult('<p>This tool is being updated.</p>');
  });
}
window.initTool = initTool;
