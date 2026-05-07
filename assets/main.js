
document.addEventListener('click', e => {
  const t = e.target.closest('[data-nav-toggle]');
  if (t) document.querySelector('[data-nav]')?.classList.toggle('open');
});
function byId(id){ return document.getElementById(id); }
function getVal(id){ return (byId(id)?.value || '').trim(); }
function hashText(str){ let h=0; for(let i=0;i<str.length;i++){ h=((h<<5)-h)+str.charCodeAt(i); h|=0; } return Math.abs(h); }
function render(html){ const box=byId('result'); if(box) box.innerHTML=html; }
function list(items){ return '<ul>'+items.map(i=>`<li>${i}</li>`).join('')+'</ul>'; }
function scoreFrom(){ return 48 + (hashText(Array.from(arguments).join('|')) % 45); }
function zodiacFromDate(month, day){
  const signs=[["Capricorn",1,19],["Aquarius",2,18],["Pisces",3,20],["Aries",4,19],["Taurus",5,20],["Gemini",6,20],["Cancer",7,22],["Leo",8,22],["Virgo",9,22],["Libra",10,22],["Scorpio",11,21],["Sagittarius",12,21],["Capricorn",12,31]];
  for(const [s,m,d] of signs){ if(month<m || (month===m && day<=d)) return s; }
  return "Capricorn";
}
const ZDATA={
  Aries:{el:"Fire",mod:"Cardinal",gift:"initiative, courage and direct action",blind:"rushing before listening",love:"needs honesty, momentum and respect for independence",work:"thrives with clear goals and room to act"},
  Taurus:{el:"Earth",mod:"Fixed",gift:"patience, loyalty and grounded consistency",blind:"holding comfort too tightly",love:"needs trust, calm affection and practical reliability",work:"thrives with craft, stability and visible progress"},
  Gemini:{el:"Air",mod:"Mutable",gift:"curiosity, language and adaptability",blind:"scattered focus or emotional avoidance",love:"needs conversation, humour and mental freshness",work:"thrives with variety, learning and communication"},
  Cancer:{el:"Water",mod:"Cardinal",gift:"care, memory and emotional intelligence",blind:"retreating behind mood walls",love:"needs safety, tenderness and emotional presence",work:"thrives where empathy and protection matter"},
  Leo:{el:"Fire",mod:"Fixed",gift:"warmth, confidence and creative visibility",blind:"needing approval to feel secure",love:"needs admiration, loyalty and playful generosity",work:"thrives with leadership, performance and creative ownership"},
  Virgo:{el:"Earth",mod:"Mutable",gift:"skill, precision and useful service",blind:"overthinking or harsh self-criticism",love:"needs practical care, honesty and calm routines",work:"thrives with systems, editing, analysis and improvement"},
  Libra:{el:"Air",mod:"Cardinal",gift:"balance, beauty and relationship awareness",blind:"people-pleasing or delayed decisions",love:"needs fairness, communication and mutual respect",work:"thrives with design, negotiation and social intelligence"},
  Scorpio:{el:"Water",mod:"Fixed",gift:"depth, loyalty and transformation",blind:"testing others instead of trusting slowly",love:"needs emotional honesty, privacy and strong commitment",work:"thrives with research, crisis work and strategy"},
  Sagittarius:{el:"Fire",mod:"Mutable",gift:"freedom, optimism and truth seeking",blind:"restlessness or bluntness",love:"needs space, humour and shared adventure",work:"thrives with travel, teaching, publishing and big ideas"},
  Capricorn:{el:"Earth",mod:"Cardinal",gift:"discipline, strategy and long-term building",blind:"emotional distance or pressure",love:"needs respect, loyalty and shared responsibility",work:"thrives with management, planning and durable achievement"},
  Aquarius:{el:"Air",mod:"Fixed",gift:"originality, independence and future thinking",blind:"detachment or stubborn ideals",love:"needs friendship, space and intellectual respect",work:"thrives with innovation, systems and social change"},
  Pisces:{el:"Water",mod:"Mutable",gift:"empathy, imagination and spiritual sensitivity",blind:"blurred boundaries or avoidance",love:"needs gentleness, imagination and emotional compassion",work:"thrives with art, healing, intuition and storytelling"}
};
function lifePath(dateStr){
  let digits=dateStr.replace(/\D/g,'').split('').map(Number);
  let sum=digits.reduce((a,b)=>a+b,0);
  while(sum>9 && ![11,22,33].includes(sum)){ sum=String(sum).split('').reduce((a,b)=>a+Number(b),0); }
  return sum;
}
const LIFE={
  1:["initiative","leading without isolating yourself","You need respect for your independence, but love deepens when you let others support you.","Leadership, entrepreneurship, independent projects or roles that need courage."],
  2:["sensitivity","speaking needs without disappearing","You need emotional safety, patience and gentle communication.","Mediation, support work, care, design, partnership roles or detail-sensitive work."],
  3:["expression","turning ideas into consistent practice","You need laughter, creativity and room to be emotionally honest.","Writing, media, teaching, design, performance, marketing or creative entrepreneurship."],
  4:["structure","staying flexible instead of rigid","You need loyalty, practical trust and a relationship that feels solid.","Operations, systems, finance, building, planning, craft or long-term projects."],
  5:["freedom","building stability without feeling trapped","You need space, novelty and a partner who does not control your growth.","Sales, travel, content, communication, events, product testing or flexible work."],
  6:["care","helping without carrying everyone","You need appreciation, responsibility and emotional reciprocity.","Education, wellness, family services, design, hospitality or community roles."],
  7:["depth","trusting people while protecting solitude","You need privacy, truth and a bond that respects your inner world.","Research, analysis, psychology, writing, spirituality, technology or specialized study."],
  8:["ambition","defining success without losing your inner life","You need respect, loyalty and someone who understands long-term effort.","Business, leadership, finance, management or high-responsibility work."],
  9:["compassion","serving without self-abandonment","You need emotional maturity, shared values and room for forgiveness.","Creative service, education, social impact, art, healing or global work."],
  11:["intuition","grounding inspiration in daily habits","You need emotional honesty and a partner who respects sensitivity.","Creative guidance, teaching, coaching, art, spiritual or communication work."],
  22:["vision","building big ideas patiently","You need commitment, stability and shared purpose.","Systems, architecture, enterprise, social projects or long-term building."],
  33:["healing presence","protecting your energy while supporting others","You need reciprocal care and boundaries that keep love healthy.","Education, counselling-adjacent support, arts, caregiving or community leadership."]
};
function runTool(type){
  if(type==="zodiac"){
    const d=getVal('birthdate'); if(!d) return render('<div class="result-card"><p>Please enter a birth date.</p></div>');
    const dt=new Date(d+"T00:00:00"); const z=zodiacFromDate(dt.getMonth()+1,dt.getDate()); const data=ZDATA[z];
    render(`<div class="result-card"><h2>${z}</h2><div class="pill-row"><span class="pill">${data.el} element</span><span class="pill">${data.mod} modality</span></div><p>Your sign is best read as a symbolic style, not a fixed identity.</p></div>
    <div class="result-card"><h3>Core gift</h3><p>${data.gift}.</p><h3>Possible blind spot</h3><p>${data.blind}.</p><h3>Love style</h3><p>${data.love}.</p><h3>Work rhythm</h3><p>${data.work}.</p><h3>Reflection prompt</h3><p>Where does this sign describe you clearly, and where do you want to grow beyond the label?</p></div>`);
  }
  if(type==="life"){
    const d=getVal('birthdate'); if(!d) return render('<div class="result-card"><p>Please enter a birth date.</p></div>');
    const n=lifePath(d); const t=LIFE[n]||LIFE[1];
    render(`<div class="result-card"><h2>Life Path ${n}</h2><p><strong>Core gift:</strong> ${t[0]}.</p><p><strong>Main lesson:</strong> ${t[1]}.</p></div>
    <div class="result-card"><h3>Love pattern</h3><p>${t[2]}</p><h3>Career energy</h3><p>${t[3]}</p><h3>Journal prompt</h3><p>Where am I using this gift wisely, and where am I overusing it?</p></div>`);
  }
  if(type==="compat"){
    const a=getVal('sign1')||getVal('name1')||"Person A"; const b=getVal('sign2')||getVal('name2')||"Person B";
    const score=scoreFrom(a,b); const label=score>=82?"High resonance":score>=70?"Promising match":score>=58?"Mixed but workable":"Growth-focused match";
    render(`<div class="result-card"><div class="score">${score}%</div><h2>${label}</h2><p>This score is a playful reflection. It is not a verdict and should never replace honest communication.</p></div>
    <div class="result-card"><h3>Connection strengths</h3>${list(["There is room for curiosity if both people stay open.","The match improves when expectations are spoken clearly.","Different rhythms can become balance instead of conflict."])}
    <h3>Growth areas</h3>${list(["Avoid using a score to force a relationship.","Notice whether both people can repair after tension.","Look at daily behaviour, not only chemistry."])}
    <h3>Conversation prompt</h3><p>What does this connection make easier, and what does it ask each person to learn?</p></div>`);
  }
  if(type==="color"){
    const seed=getVal('birthdate')||getVal('sign')||"astro"; const colors=["Gold","Indigo","Forest Green","Rose","Silver","Ocean Blue","Terracotta","Violet","Ivory","Teal","Coral","Charcoal"]; const i=hashText(seed)%colors.length; const c=[colors[i],colors[(i+3)%colors.length],colors[(i+7)%colors.length]];
    render(`<div class="result-card"><h2>Your reflection palette</h2><div class="pill-row">${c.map(x=>`<span class="pill">${x}</span>`).join('')}</div></div>
    <div class="result-card"><h3>How to use it</h3><p>Use the first color for focus, the second for calm and the third for confidence. This is not luck control; it is a small design cue that helps set an intention.</p><h3>Practical prompt</h3><p>Choose one color for your notes, workspace or phone wallpaper this week. Connect it to one habit you want to strengthen.</p></div>`);
  }
  if(type==="year"){
    const y=parseInt(getVal('year')||new Date().getFullYear()); const animals=["Monkey","Rooster","Dog","Pig","Rat","Ox","Tiger","Rabbit","Dragon","Snake","Horse","Goat"]; const animal=animals[y%12];
    render(`<div class="result-card"><h2>${animal} year theme</h2><p>Your Chinese zodiac animal is based on a 12-year symbolic cycle. Use it as cultural reflection, not fixed destiny.</p></div>
    <div class="result-card"><h3>Reflection themes</h3>${list(["What habit is ready to mature?","Where do I need patience instead of panic?","What relationship needs clearer expectations?"])}<p>If you were born in January or February, lunar-year boundaries may affect your animal.</p></div>`);
  }
  if(type==="text"){
    const q=getVal('question')||getVal('name')||"your question"; const options=["Yes, if you simplify the next step.","No, pause and gather more information.","Maybe, but only after an honest conversation.","Wait. The timing needs more clarity.","Choose the option that gives you peace, not pressure."]; const ans=options[hashText(q)%options.length];
    render(`<div class="result-card"><h2>${ans}</h2><p>This answer is symbolic and for reflection only. Use it as a prompt, not as a command.</p></div><div class="result-card"><h3>Ask yourself</h3>${list(["What am I hoping this answer will confirm?","What practical information is still missing?","What would a calm version of me choose?"])}</div>`);
  }
}
window.runTool=runTool;



/* Advanced Astrology Tools */
const ASTRO_SIGNS = ["Aries","Taurus","Gemini","Cancer","Leo","Virgo","Libra","Scorpio","Sagittarius","Capricorn","Aquarius","Pisces"];
const PLANETS = ["Sun","Moon","Mercury","Venus","Mars","Jupiter","Saturn","Uranus","Neptune","Pluto"];
const ASPECTS = ["Conjunction","Sextile","Square","Trine","Opposition"];

const SIGN_DEEP = {
  Aries:{element:"Fire", mode:"Cardinal", tone:"direct, brave and action-oriented", gift:"starting before fear becomes too loud", blind:"rushing past nuance", need:"honest momentum and room to act"},
  Taurus:{element:"Earth", mode:"Fixed", tone:"steady, sensual and loyal", gift:"building comfort that lasts", blind:"staying too long in familiar patterns", need:"trust, patience and physical calm"},
  Gemini:{element:"Air", mode:"Mutable", tone:"curious, verbal and adaptable", gift:"making connections between ideas", blind:"scattering energy or avoiding depth", need:"conversation, variety and mental freshness"},
  Cancer:{element:"Water", mode:"Cardinal", tone:"protective, intuitive and emotionally aware", gift:"creating safety and memory", blind:"retreating instead of naming needs", need:"emotional gentleness and belonging"},
  Leo:{element:"Fire", mode:"Fixed", tone:"warm, expressive and proud-hearted", gift:"radiating courage and creativity", blind:"needing applause to feel safe", need:"loyalty, play and sincere appreciation"},
  Virgo:{element:"Earth", mode:"Mutable", tone:"precise, observant and service-minded", gift:"improving what others overlook", blind:"self-criticism and perfection pressure", need:"usefulness, order and grounded care"},
  Libra:{element:"Air", mode:"Cardinal", tone:"relational, aesthetic and diplomatic", gift:"building bridges and restoring balance", blind:"over-pleasing or delaying decisions", need:"fairness, beauty and mutual respect"},
  Scorpio:{element:"Water", mode:"Fixed", tone:"intense, private and transformative", gift:"going below the surface", blind:"testing trust instead of building it slowly", need:"truth, loyalty and emotional depth"},
  Sagittarius:{element:"Fire", mode:"Mutable", tone:"adventurous, honest and future-seeking", gift:"expanding meaning and possibility", blind:"restlessness or blunt escape", need:"freedom, humour and shared discovery"},
  Capricorn:{element:"Earth", mode:"Cardinal", tone:"disciplined, strategic and resilient", gift:"turning time into achievement", blind:"carrying too much alone", need:"respect, consistency and long-range purpose"},
  Aquarius:{element:"Air", mode:"Fixed", tone:"independent, original and future-minded", gift:"seeing systems from the outside", blind:"detachment or rigid ideals", need:"space, friendship and intellectual honesty"},
  Pisces:{element:"Water", mode:"Mutable", tone:"empathetic, imaginative and spiritually porous", gift:"feeling what others miss", blind:"blurred boundaries and avoidance", need:"compassion, art and emotional sanctuary"}
};

const PLANET_MEANING = {
  Sun:{domain:"identity, vitality and conscious direction", question:"Who am I becoming when I act from my center?", relationship:"shows how you shine and where you want to be recognized", growth:"practice confidence without turning identity into performance"},
  Moon:{domain:"emotional needs, comfort and instinctive reactions", question:"What makes me feel safe enough to be honest?", relationship:"shows what you need when vulnerable", growth:"build emotional habits that soothe without trapping you"},
  Mercury:{domain:"thinking, language, learning and communication", question:"How do I process information and express ideas?", relationship:"shows how you explain, listen and handle misunderstanding", growth:"communicate with clarity instead of reflex"},
  Venus:{domain:"love style, pleasure, beauty and attraction", question:"What kind of affection helps me open naturally?", relationship:"shows how you give and receive love", growth:"choose love patterns that feel warm, not addictive"},
  Mars:{domain:"action, desire, conflict and motivation", question:"How do I pursue what I want?", relationship:"shows attraction, anger and initiative", growth:"use desire with courage and self-control"},
  Jupiter:{domain:"growth, belief, opportunity and meaning", question:"Where do I expand when I trust life?", relationship:"shows generosity and shared belief systems", growth:"grow without exaggerating or over-promising"},
  Saturn:{domain:"discipline, boundaries, responsibility and maturity", question:"Where does life ask me to become stronger?", relationship:"shows commitment, fear and long-term lessons", growth:"turn pressure into structure instead of shame"},
  Uranus:{domain:"freedom, disruption, originality and awakening", question:"Where do I need more honesty and space?", relationship:"shows independence needs and sudden change", growth:"innovate without destabilizing everything"},
  Neptune:{domain:"imagination, spirituality, longing and idealization", question:"What dream inspires me, and where do I need clarity?", relationship:"shows compassion and projection", growth:"keep inspiration while checking reality"},
  Pluto:{domain:"power, transformation, intensity and deep change", question:"Where am I being asked to transform, not just cope?", relationship:"shows control, trust and psychological depth", growth:"release what controls you from underneath"}
};

function optionList(arr){ return arr.map(x=>`<option>${x}</option>`).join(""); }
function signBlock(sign, label){
  const s = SIGN_DEEP[sign] || SIGN_DEEP.Aries;
  return `<div class="result-card"><h3>${label}: ${sign}</h3><div class="pill-row"><span class="pill">${s.element}</span><span class="pill">${s.mode}</span></div><p>${sign} is ${s.tone}. Its gift is ${s.gift}; its blind spot can be ${s.blind}. It often needs ${s.need}.</p></div>`;
}
function runAdvancedTool(type){
  if(type==="advancedBigThree"){
    const sun=getVal("sunSign"), moon=getVal("moonSign"), rising=getVal("risingSign");
    render(`<div class="result-card"><h2>Your Big Three Profile</h2><p>Your Big Three combines identity, emotional needs and outer style. Read this as a layered self-reflection map, not a fixed personality label.</p></div>
    ${signBlock(sun,"Sun / identity style")}
    ${signBlock(moon,"Moon / emotional needs")}
    ${signBlock(rising,"Rising / outer style")}
    <div class="result-card"><h3>How these three work together</h3><p>Your Sun describes what you are growing into, your Moon describes what keeps you emotionally safe, and your Rising describes how you enter situations. Growth happens when these three parts can cooperate instead of competing.</p><h3>Journal prompt</h3><p>Which part of my Big Three do I show easily, and which part needs more care?</p></div>`);
  }
  if(type==="advancedPlanetSign"){
    const planet=getVal("planet"), sign=getVal("sign"); const p=PLANET_MEANING[planet] || PLANET_MEANING.Sun; const s=SIGN_DEEP[sign]||SIGN_DEEP.Aries;
    render(`<div class="result-card"><h2>${planet} in ${sign}</h2><p>${planet} represents ${p.domain}. In ${sign}, it expresses through a ${s.tone} style.</p></div>
    <div class="result-card"><h3>Core meaning</h3><p>This placement blends ${planet}'s focus on ${p.domain} with ${sign}'s need for ${s.need}. It can show ${s.gift}, but may struggle with ${s.blind}.</p><h3>Relationship angle</h3><p>${p.relationship}.</p><h3>Growth advice</h3><p>${p.growth}. Ask: ${p.question}</p></div>`);
  }
  if(type==="advancedSingleSign"){
    const sign=getVal("singleSign"); const page=document.body.dataset.advanced||"Moon"; const p=PLANET_MEANING[page] || PLANET_MEANING.Moon; const s=SIGN_DEEP[sign]||SIGN_DEEP.Aries;
    render(`<div class="result-card"><h2>${page} in ${sign}</h2><p>${page} describes ${p.domain}. In ${sign}, the pattern becomes ${s.tone}.</p></div>
    <div class="result-card"><h3>Strengths</h3><p>${s.gift} can become a clear strength when it is grounded in real choices.</p><h3>Blind spot</h3><p>Watch for ${s.blind}. This is not a flaw; it is a growth edge.</p><h3>Love and life pattern</h3><p>${p.relationship}. You may need ${s.need} to feel natural and expressive.</p><h3>Journal prompt</h3><p>${p.question}</p></div>`);
  }
  if(type==="advancedAspect"){
    const a=getVal("planetA"), b=getVal("planetB"), aspect=getVal("aspect");
    const flow = aspect==="Trine"||aspect==="Sextile" ? "flow and natural support" : aspect==="Square"||aspect==="Opposition" ? "tension that asks for integration" : "a strong merging of two planetary drives";
    render(`<div class="result-card"><h2>${a} ${aspect} ${b}</h2><p>This aspect suggests ${flow} between ${a}'s themes and ${b}'s themes.</p></div>
    <div class="result-card"><h3>Core meaning</h3><p>${a} relates to ${(PLANET_MEANING[a]||PLANET_MEANING.Sun).domain}. ${b} relates to ${(PLANET_MEANING[b]||PLANET_MEANING.Moon).domain}. The ${aspect} shows how these two areas interact.</p><h3>Strength</h3><p>The aspect can create awareness and motivation when handled consciously.</p><h3>Challenge</h3><p>The same pattern can repeat automatically if you do not name the need underneath it.</p><h3>Growth prompt</h3><p>How can these two parts of me cooperate instead of pulling in separate directions?</p></div>`);
  }
  if(type==="advancedHouse"){
    const planet=getVal("planet"), house=getVal("house"); const p=PLANET_MEANING[planet]||PLANET_MEANING.Sun;
    const houseMeanings={1:"identity, body and first impressions",2:"money, values and security",3:"communication, siblings and learning",4:"home, roots and emotional foundations",5:"creativity, romance and joy",6:"work habits, health routines and service",7:"partnerships and one-to-one bonds",8:"shared resources, intimacy and transformation",9:"beliefs, travel and higher learning",10:"career, reputation and public role",11:"friends, networks and future vision",12:"solitude, dreams and the unconscious"};
    render(`<div class="result-card"><h2>${planet} in the ${house} House</h2><p>${planet} represents ${p.domain}. The ${house} house points to ${houseMeanings[house]||houseMeanings[1]}.</p></div>
    <div class="result-card"><h3>Life area affected</h3><p>This placement suggests that ${p.domain} becomes visible through ${houseMeanings[house]||houseMeanings[1]}.</p><h3>Strength</h3><p>You may bring strong awareness or energy into this life area.</p><h3>Growth advice</h3><p>${p.growth}. Ask: ${p.question}</p></div>`);
  }
  if(type==="advancedChecklist"){
    const level=getVal("chartLevel")||"Beginner";
    const focus=getVal("chartFocus")||"Self-understanding";
    const known=getVal("knownPlacements")||"Sun sign";
    render(`<div class="result-card"><h2>Your Natal Chart Reading Plan</h2><p>This checklist is tailored for a ${level.toLowerCase()} reader focusing on ${focus.toLowerCase()}.</p></div>
    <div class="result-card"><h3>Start with what you already know</h3><p>You entered: ${known}. Begin there instead of trying to read the whole chart at once.</p><h3>Step-by-step order</h3>${list(["Sun: identity and life direction","Moon: emotional needs and comfort","Rising: outer style and first approach","Mercury: thinking and communication","Venus: love, attraction and pleasure","Mars: action, desire and conflict","Houses: where themes show up in life","Aspects: how planets interact"])}<h3>Best practice</h3><p>Write one sentence per layer. Then choose one pattern that actually helps your current ${focus.toLowerCase()} reflection.</p></div>`);
  }
  if(type==="advancedBirthTime"){
    const date=getVal("birthDateUnknown")||"your birth date";
    const timeStatus=getVal("timeStatus")||"I do not know my birth time";
    const approx=getVal("approxBirthTime");
    const place=getVal("birthPlaceUnknown")||"your birth place";
    const question=getVal("mainQuestion")||"which parts of my chart can I still read?";
    const approxLine = approx ? ` You entered an approximate time: ${approx}.` : "";
    const nextStep = timeStatus.includes("approximate")
      ? "Because your time is approximate, Rising sign and house positions may be close but should still be treated as uncertain. Use them as learning clues, not final chart data."
      : timeStatus.includes("morning")
      ? "A broad time window can sometimes narrow possibilities, but Rising sign and houses remain uncertain. Use sign placements first."
      : "With no birth time, use Sun sign, many planet sign placements and general themes first. Rising sign, houses and Midheaven should be left unknown.";
    render(`<div class="result-card"><h2>Your Birth Time Unknown Guide</h2><p>Based on ${date}, ${place}, and your time status: ${timeStatus}.${approxLine} Your main question is: ${question}</p></div>
    <div class="result-card"><h3>You can usually still read</h3>${list(["Sun sign","Many planet sign placements","General element balance","Some broad personality themes"])}<h3>Uncertain or unavailable</h3>${list(["Rising sign / Ascendant","House positions","Midheaven","Time-sensitive Moon sign in some cases"])}<h3>Best next step</h3><p>${nextStep}</p></div>`);
  }
}
window.runAdvancedTool=runAdvancedTool;
