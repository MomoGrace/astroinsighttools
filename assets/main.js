
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
