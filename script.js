
    const sheetURL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSXxxanvdsuF_vjCGQjki2TSbsrCbxX_-c3iPgJuCvudgP-j4mXsvSxUK2RtdeVQwQ9PigUtQlEstLF/pub?output=csv";

    function normalizeTitle(s){
      if(!s && s !== 0) return '';
      return s.toString().toLowerCase()
        .replace(/[:'"\u2019]/g,'')
        .replace(/[^a-z0-9]+/g,' ')
        .trim().replace(/\s+/g,' ');
    }

    function parseCSV(text){
      const rows = [];
      let cur='', row=[], inQuotes=false;
      for(let i=0;i<text.length;i++){
        const ch=text[i], nxt=text[i+1];
        if(ch==='"'){
          if(inQuotes&&nxt==='"'){cur+='"'; i++;}
          else inQuotes=!inQuotes;
        } else if(ch===','&&!inQuotes){
          row.push(cur); cur='';
        } else if((ch==='\n'||ch==='\r')&&!inQuotes){
          row.push(cur);
          if(!(row.length===1&&row[0]==='')) rows.push(row);
          row=[]; cur='';
        } else cur+=ch;
      }
      if(cur!==''||row.length>0){ row.push(cur); rows.push(row); }
      return rows;
    }

    
  
 const games = {
  "uno": {
    title: "UNO Show 'Em No Mercy",
    category: "Category 1",
    players: "2-10 players",
    playtime: "30 min",
    description: `Amp up the chaos with new wild cards and brutal moves in this fierce twist on classic UNO!

In UNO: Show ‘Em No Mercy, players enjoy the classic card-matching gameplay of UNO with an extra dose of mayhem. This edition adds special "Show No Mercy" wild cards that allow players to unleash powerful moves on their opponents, creating intense, unpredictable moments in every round. From stacking penalties to sabotaging others' hands, these new cards make each turn even more strategic and unpredictable, while still keeping the fast-paced fun of the original game.

With its easy-to-learn rules and added twists, UNO: Show ‘Em No Mercy is perfect for families and friends looking to add more excitement and surprises to their game nights.`,


    includes: [
      
"180 sleeved cards (36 per color, 24 wild, 12 blank)",
"Instruction manual"



    ],
    copies: 1,
    donor: "High Council '25-'26",
    images: ["https://imgs.search.brave.com/8Gyem-se42_VYJ7hzxmu8ytDKxsMextmrextYXl8Edg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/c2hvcGxpZ2h0c3Bl/ZWQuY29tL3Nob3Bz/LzYzMzY4My9maWxl/cy82MTIxODY1MC8x/NjAweDIwNDh4MS9t/YXR0ZWwtdW5vLXNo/b3ctZW0tbm8tbWVy/Y3kuanBn",
    "https://i.imgur.com/n4mo3MR.png",
    "https://i.imgur.com/PGWFPwb.png"]
  },

  "tacocat": {
    title: "Taco Cat Goat Cheese Pizza",
    category: "Category 1",
    players: "3–8 players",
    playtime: "15 min",
    description: "A quick reflex game of chanting and slapping cards in sequence.",
    includes: [
      "66x sleeved cards",
      "2x Instruction Cards",
      "11x Taco",
      "11x Cat",
      "11x Goat",
      "11x Cheese",
      "11x Pizza",
      "3x Narwhal",
      "3x Gorilla",
      "3x Groundhog"
    ],
    copies: 1,
    donor: "High Council '25-'26",
    images: ["https://i.imgur.com/XT1L0Zo.png",
    "https://i.imgur.com/SjdDe6o.jpeg",
    "https://i.imgur.com/4PwbKJb.jpeg" ]
  },

  "balancingchairs": {
    title: "Balancing Chairs",
    category: "Category 1",
    players: "2+ players",
    playtime: "10–20 min",
    description: "Stack tiny chairs without toppling the pile.",
    includes: [
      "1x Box (worn out)",
      "18x Chairs"
    ],
    copies: 1,
    donor: "High Council '25-'26",
    images: ["https://imgs.search.brave.com/dKMWhuLcCnylbM_Rsr7WXbgrnt9z9SqX_5yWVGhvV9Y/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG91bmRmdW4uY29t/L2Nkbi9zaG9wL2Zp/bGVzL0JhbGFuY2lu/Z0NoYWlyc0dhbWVf/MS5wbmc_dj0xNzQ5/NjA0OTI1JndpZHRo/PTE5NDY", 
    "https://i.imgur.com/vKLrfgC.jpeg", 
    "https://i.imgur.com/7L6f63z.jpeg"]
  },

  "tapple": {
    title: "Tapple",
    category: "Category 1",
    players: "2–8 players",
    playtime: "20 min",
    description: "Fast-paced word game of categories and letters.",
    includes: [
      "1x Box (worn out)",
      "1x Tapple Board",
      "2x AA Batteries",
      "36x Category Cards"
    ],
    copies: 1,
    donor: "High Council '25-'26",
    images: ["https://i.imgur.com/4rxy42Q.jpeg",
    "https://i.imgur.com/Ym349K7.jpeg",
    "https://i.imgur.com/53hsaM3.png"]
  },

  "cluedo": {
    title: "Cluedo Suspect",
    category: "Category 1",
    players: "2–6 players",
    playtime: "20–40 min",
    description: "Card/container version of the detective classic.",
    includes: [
      "1x Container",
      "1x Instruction Manual",
      "1x The Crime Card",
      "2x Reminder Cards",
      "6x Character Profile Cards",
      "6x Orange Evidence Cards (Suspects)",
      "5x Orange Evidence Cards (Location)",
      "4x Orange Evidence Cards (Weapon)",
      "24x Case File Suspects (4 of each)",
      "20x Case File Locations (4 of each)",
      "16x Case File Weapons (4 of each)"
    ],
    copies: 1,
    donor: "High Council '25-'26",
    images: ["https://i.imgur.com/zbQTmtM.jpeg",
    "https://i.imgur.com/KotrHRh.png",
    "https://i.imgur.com/1ckqq7V.jpeg"]
  },

  "coup": {
    title: "Coup",
    category: "Category 1",
    players: "2–6 players",
    playtime: "15 min",
    description: "Bluffing and deduction in a dystopian world.",
    includes: [
      "15x character cards (3 each of Duke, Assassin, Captain, Ambassador, Contessa)",
      "6x summary cards",
      "50x coins",
      "1x Rules",
      "1x Box"
    ],
    copies: 1,
    donor: "High Council '25-'26",
    images: ["https://imgs.search.brave.com/HT5w9Bsl-UQ-T6nGoqpmbAsMT5Hu3rpwYqtKffFWUmU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/emF0dS5jb20vd3At/Y29udGVudC91cGxv/YWRzLzIwMTkvMTEv/MTgwODM5MTcvWkJH/LUlCQ0NPVTFfRlJP/TlQtMS5qcGc",
    "https://i.imgur.com/k7rD3Mn.jpeg",
    "https://i.imgur.com/0TXvyIr.jpeg"]
  },

  "jenga": {
    title: "Jenga",
    category: "Category 1",
    players: "2+ players",
    playtime: "15 min",
    description: "Classic tower stacking challenge.",
    includes: [
      "54x Wooden Blocks",
      "1x Box"
    ],
    copies: 1,
    donor: "High Council '25-'26",
    images: ["https://i.imgur.com/YyHS7uG.jpeg", 
    "https://i.imgur.com/h78pNle.jpeg", 
    "https://i.imgur.com/4jY12Gr.png"]
  },

  "codenames": {
    title: "Codenames",
    category: "Category 2",
    players: "2–8 players",
    playtime: "15 min",
    description: "Give clever clues to help teammates find the right words.",
    includes: [
      "200x Word Cards",
      "40x Keys",
      "1x Stand",
      "1x Hourglass",
      "8x Red Agents",
      "8x Blue Agents",
      "1x Double Agent",
      "7x Bystanders",
      "1x Assassin",
      "1x Instruction Manual",
      "1x Catalog"
    ],
    copies: 1,
    donor: "High Council '25-'26",
    images: ["https://imgs.search.brave.com/PrViIP7cVxnzU4p8Yshnw8Y3Pn22XNrcYeZt8rT-kfk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/YXNtb2RlZS5jby51/ay9jZG4vc2hvcC9m/aWxlcy9DR0UwMDAz/MV8xXzEzYThiMGYz/LWY1MTktNDE0NC05/NjRlLTBlNzU4Y2U1/NDAzYi5qcGc_dj0x/NzY0Nzc4OTQyJndp/ZHRoPTQ2MA",
    "https://imgs.search.brave.com/BJYxlaUPmOijXlCWE80djGrihZglKhhsWFRSpWc-7Pg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHNpby5nbndjZG4u/Y29tL2NvZGVuYW1l/cy1ib2FyZC1nYW1l/LWxheW91dC0yLnBu/Zz93aWR0aD0yMDQ4/JmhlaWdodD0yMDQ4/JmZpdD1ib3VuZHMm/cXVhbGl0eT04NSZm/b3JtYXQ9anBnJmF1/dG89d2VicA",
    "https://imgs.search.brave.com/wUHzqZaxfMkb4aNTL2v00jZddCKiJG07sZebiCxai3Q/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/emF0dS5jb20vd3At/Y29udGVudC91cGxv/YWRzLzIwMTcvMDkv/MTgxMzE3MjUvUGxh/eWluZy1Db2RlbmFt/ZXMtR2FtZS5qcGc"]
  },

  "dungeonmayhem": {
    title: "Dungeon Mayhem!",
    category: "Category 2",
    players: "2–4 players",
    playtime: "15 min",
    description: "Quick D&D-inspired card battles.",
    includes: [
      "30x Barbarian Cards (including reference and hit point tracker)",
      "30x Rogue Cards (including reference and hit point tracker)",
      "30x Paladin Cards (including reference and hit point tracker)",
      "30x Wizard Cards (including reference and hit point tracker)",
      "16x HP tokens",
      "4x character tokens",
      "1x Instruction Manual"
    ],
    copies: 1,
    donor: "High Council '25-'26",
    images: ["https://imgs.search.brave.com/-XqBz6z3UX92mjQjqfailclT8wR6RbB5eONDC99J1iM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pNS53/YWxtYXJ0aW1hZ2Vz/LmNvbS9zZW8vRC1E/LUR1bmdlb24tTWF5/aGVtLUJvYXJkLUdh/bWVfYmNkMThiNzkt/NDA3Yy00ODY5LWEy/NGEtNmJlNjAyYzBm/NjAzLmVjMTA2OTll/OTgyYzJhNDY5YTg5/MzU1NTQ5NDQxNzk5/LmpwZWc_b2RuSGVp/Z2h0PTU3MyZvZG5X/aWR0aD01NzMmb2Ru/Qmc9RkZGRkZG", 
    "https://imgs.search.brave.com/h5RqN3G6ZVVxVxBONcX3GWYLs6G5CClMs3HcajsyIj0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL1Mv/YXBsdXMtbWVkaWEv/dmMvYzNiYTg0ZWEt/N2YxYy00OWU2LThk/NzMtNDY1OTk4MjYx/MmIwLl9fQ1IwLDAs/MzAwLDMwMF9QVDBf/U1gzMDBfVjFfX18u/anBn",
    "https://imgs.search.brave.com/RbeLsg3Ce-_2QjP2sqmgcAYSs3QrUmGce38mrvVOuRg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zaG9w/LnBob2VuaXhzZWF0/dGxlLmNvbS9jZG4v/c2hvcC9wcm9kdWN0/cy9XT0NDNjE2NF9O/XzEwMDB4MTAwMC5q/cGc_dj0xNTg3NzUy/Njc4"]
  },

  "flip7": {
    title: "Flip7!",
    category: "Category 2",
    players: "2–6 players",
    playtime: "30 min",
    description: "A math and card-flipping strategy game.",
    includes: [
      "94x Cards",
      "79x Number Cards",
      "6x Modifier Cards",
      "9x Action Cards (3 of each)",
      "1x Container"
    ],
    copies: 1,
    donor: "High Council '25-'26",
    images: ["https://imgs.search.brave.com/2RcfwkcCV0axMwkqHQWVLUDZrv_WQCvP0C_LN15cY5A/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9nLmNo/cmlzdGlhbmJvb2su/Y29tL2RnL3Byb2R1/Y3Qvd2ViL2Y0MDAv/NDE1ODYwNC5qcGc", 
    "https://imgs.search.brave.com/CF7a-o4j58kXxhAyWRk8xWtI9Ufl9HR2fi2OyjC4bMU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bW9qby1uYXRpb24u/Y29tL2ZpbGVzLzIw/MjQvMDgvRmxpcDcu/anBn", 
    "https://imgs.search.brave.com/ByBW9sQhLmzrANCovHCATYN01PPaLjNBfUZOIwVAjgg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMua21hcnQuY29t/LmF1L3RyYW5zZm9y/bS9hZmJiZmQ4My0x/MDI3LTRjYWEtODJh/Yy1hYTRmNzgxM2Fi/N2EvNDM1NzM2NjAt/Mj9pbz10cmFuc2Zv/cm06Zml0LHdpZHRo/OjM4NDAsaGVpZ2h0/OjM4NDAmcXVhbGl0/eT05MA"]
  },

  "throwthrowburrito": {
    title: "Throw Throw Burrito",
    category: "Category 3",
    players: "2–6 players",
    playtime: "15 min",
    description: "Dodgeball meets card game with foam burritos.",
    includes: [
      "120x Cards",
      "2x Burritos",
      "6x Burrito Bruises",
      "1x Fear Me Badge"
    ],
    copies: 1,
    donor: "High Council '25-'26",
    images: ["https://imgs.search.brave.com/tJPZnHTBHlLuiNx_ZJlnMnZqk1NemxjsP_p03SfB-FA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly92aWxs/YWdldG95ZnVuYXRp/Yy5jb20vd3AtY29u/dGVudC91cGxvYWRz/LzIwMjEvMTIvR1VF/U1RfYzc4YmM5NjEt/OTA1ZC00MWZlLThm/NjgtNTc0NDExZWIx/YTBkLndlYnA",
    "https://imgs.search.brave.com/gDjyRsIB69h9gJHOKMC6-lgeGllO6FhEHommfRF6zkU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/a3VrYXJhZ2FtZXMu/Y29tL2Nkbi9zaG9w/L3Byb2R1Y3RzL3Ro/cm93LXRocm93LWJ1/cnJpdG8tanVlZ28t/ZGUtaGFiaWxpZGFk/LXktY2FydGFzLTcx/NjA0NC5qcGc_dj0x/NzA3MDAxOTYwJndp/ZHRoPTUwMA",
    "https://imgs.search.brave.com/MGnHfCHBVbHKVSbQi3MB4ZNTVoWE8A9tvbXxYUNGJ7E/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5naW9kaWNhcnQu/Y2xvdWQvcC9zL1g0/Mzg3NF82LndlYnA"]
  },

  "beatthat": {
    title: "Beat That!",
    category: "Category 3",
    players: "2–8 players",
    playtime: "20–40 min",
    description: "Party challenge game with measuring & dexterity tasks.",
    includes: [
      "1x Measuring Tape",
      "2x Chopsticks",
      "1x Hourglass",
      "10x Cups",
      "5x Balls",
      "4x Orange Dice",
      "39x Blue Tokens",
      "15x Yellow Tokens",
      "25x Orange Tokens",
      "1x Sealed Notepad",
      "160x Challenges",
      "1x Instruction Manual",
      "1x Box (slightly worn out)"
    ],
    copies: 1,
    donor: "High Council '25-'26",
    images: ["https://imgs.search.brave.com/-SXPhfYpa2BzsGgkxF5wqrqjzrNeyohJ_pAH3_wcQgo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/ODEydWgtR1N5M0wu/anBn", 
    "https://imgs.search.brave.com/kTKaHE4Z-_vg8i7cgXaaW_0DKsNhK-aDGfWByviHXsc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9lbW1h/cmVlZC5uZXQvd3At/Y29udGVudC91cGxv/YWRzLzIwMTkvMDkv/QmVhdC1UaGF0LTct/OTYweDc2Mi5qcGc",
    "https://imgs.search.brave.com/DPdI1dXzD1ue8ABgjUpgu0ibzwII5UZWoIl-Eau0H84/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zaG9w/YmVmaWthci5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMjQv/MDgvYmVhdC10aGF0/LXBhcnR5LWdhbWUz/LmpwZw"]
  },

  "poetryforneanderthals": {
    title: "Poetry for Neanderthals",
    category: "Category 1",
    players: "2–6 players",
    playtime: "15–30 min",
    description: "Make your teammate guess a word using only one-syllable clues.",
    includes: [
      "1x Box",
      "400x Cards",
      "1x Inflatable Club",
      "1x Mini Balloon Pump",
      "Print-and-play version"
    ],
    copies: 1,
    donor: "High Council '25-'26",
    images: ["https://imgs.search.brave.com/KkFjNIvUN1_iNaRmBGuxZNuiYy_BrizIVxASPp5xw5U/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/c2hvcGxpZ2h0c3Bl/ZWQuY29tL3Nob3Bz/LzYwNTg3OS9maWxl/cy80OTMzNDMyNy8x/MDI0eDEwMjR4Mi9l/eHBsb2Rpbmcta2l0/dGVucy1wb2V0cnkt/Zm9yLW5lYW5kZXJ0/aGFscy5qcGc",
    "https://imgs.search.brave.com/4oI7x68GWrQwbtenAcjAF_5zM-p2uQV1lNUxlwu3iAU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLmVi/YXlpbWcuY29tL2lt/YWdlcy9nL2toRUFB/T1N3TDlabTIwUjgv/cy1sNTAwLmpwZw"
    ]
  },

  "soundsfishy": {
    title: "Sounds Fishy",
    category: "Category 1",
    players: "2–8 players",
    playtime: "15–30 min",
    description: "Sound-based party/word game (print-and-play).",
    includes: [
      "1x Box",
      "400x Cards",
      "Print-and-play version"
    ],
    copies: 1,
    donor: "High Council '25-'26",
    images: ["https://imgs.search.brave.com/GCYMJhA_lqdfPW3dAJi_MPG5jMX9gejzn0fq3ZwSbjE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NjFiMVZ5ZjB5Skwu/anBn",
    "https://imgs.search.brave.com/risJpErgr2ufgKNvpcwHb7wclqKzSKxzikh_2jNMb1o/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Y29nc3RveXNhbmRn/YW1lcy5pZS9jZG4v/c2hvcC9wcm9kdWN0/cy9GSUhTWS5qcGc_/dj0xNjgzNTMxNzE3/JndpZHRoPTE1MDA"
    ]
  }
};


   let statusData={};
async function loadStatus(){
  const cacheBuster = `&_=${new Date().getTime()}`;
  try {
    const res = await fetch(sheetURL + cacheBuster, {
      cache: 'no-store',
      headers: {
        'Cache-Control': 'no-cache',
        'Pragma': 'no-cache'
      }
    });
    
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    
    const txt = await res.text();
    const rows = parseCSV(txt);
    
    if (rows.length === 0) {
      console.warn("No data received from spreadsheet");
      renderAll();
      return;
    }
    
    const headers = rows.shift().map(h=>h.trim());
    console.log("📋 Sheet Headers:", headers);
    
    statusData={};
    
    rows.forEach(r=>{
      const obj={};
      headers.forEach((h,i)=>obj[h]=r[i]);
      const originalTitle = obj.Title || "";
      const t = normalizeTitle(originalTitle);
      const status = (obj.Status||"Available").toLowerCase();
      
      if(t) {
        statusData[t] = status;
        console.log(`📝 "${originalTitle}" → "${t}" → "${status}"`);
      }
    });
    
    console.log("✅ Final statusData:", statusData);
    renderAll();
  } catch (error) {
    console.error("❌ Error loading status data:", error);
    renderAll();
  }
}

function renderAll(){
  document.querySelectorAll('.game-grid').forEach(g => g.innerHTML = '');
  for (let k in games) {
    const g = games[k];
    const norm = normalizeTitle(g.title);
    const stat = statusData[norm] || "available";
    console.log(`🎮 Rendering "${g.title}" → normalized: "${norm}" → status found: "${stat}"`);
    renderCard(g, stat);
  }
}
    

    function renderCard(g, stat) {
  const cat = g.category.toLowerCase().replace(/\s+/g, '-');
  const grid = document.getElementById("grid-" + cat);
  if (!grid) return;

  const d = document.createElement("div");
  d.className = "card";
  d.onclick = () => showDetails(g, stat);

  // choose first image if present; otherwise use an auto-generated placeholder
  const imgSrc = (g.images && g.images.length)
    ? g.images[0]
    : "https://via.placeholder.com/300x140?text=" + encodeURIComponent(g.title);

  const imgHTML = `<img src="${imgSrc}" alt="${g.title}" class="card-img">`;

  d.innerHTML = `
    ${imgHTML}
    <h4>${g.title}</h4>
    <p>${g.players}</p>
    <p>${g.playtime}</p>
    <p class="status ${stat}">${stat.toUpperCase()}</p>
  `;
  grid.appendChild(d);
}

    

    function showDetails(g,stat){
  document.getElementById("hero").style.display="none";
  document.getElementById("guidelinesSection").style.display="none";
  document.getElementById("howToBorrowSection").style.display="none"; // hide How To Borrow
  document.querySelectorAll(".section").forEach(s=>s.style.display="none");
  const det=document.getElementById("detailsView");
  document.getElementById("detailsCategory").innerText=g.category;
  document.getElementById("detailsTitle").innerText=g.title;
  document.getElementById("detailsPlayers").innerText=g.players;
  document.getElementById("detailsPlaytime").innerText=g.playtime;
  const st=document.getElementById("detailsStatus");
  st.innerText=stat.toUpperCase();
  st.className="status "+stat;
  document.getElementById("detailsCopies").innerText=g.copies;
  document.getElementById("detailsDonor").innerText=g.donor;
  const incl=document.getElementById("detailsIncludes");
  incl.innerHTML=g.includes.map(i=>`<li>${i}</li>`).join("");
  document.getElementById("detailsDesc").innerText=g.description;
  const thumbs=document.getElementById("thumbs");
  thumbs.innerHTML="";
  let main=document.getElementById("mainImg");
  if(g.images.length){
    main.src=g.images[0];
    g.images.forEach((src,i)=>{
      const im=document.createElement("img");
      im.src=src; im.onclick=()=>{main.src=src};
      thumbs.appendChild(im);
    });
  }else{
    main.src="https://via.placeholder.com/300x300?text="+encodeURIComponent(g.title);
  }
  det.classList.add("active");
  det.setAttribute("aria-hidden","false");
}

function hideDetails(){
  document.getElementById("detailsView").classList.remove("active");
  document.getElementById("detailsView").setAttribute("aria-hidden","true");
  document.getElementById("hero").style.display="block";
  document.querySelectorAll(".section").forEach(s=>s.style.display="block");
}

function showGuidelines(){
  document.getElementById("hero").style.display="none";
  document.getElementById("guidelinesSection").style.display="block";
  document.getElementById("howToBorrowSection").style.display="none";
  document.getElementById("faqSection").style.display="none"; // hide FAQ
  document.querySelectorAll(".section").forEach(s=>s.style.display="none");
  document.getElementById("detailsView").classList.remove("active");
}

function showHero(){

  document.getElementById("hero").style.display="block";
  document.getElementById("guidelinesSection").style.display="none";
  document.getElementById("howToBorrowSection").style.display="none";
  document.getElementById("faqSection").style.display="none"; // hide FAQ
  document.querySelectorAll(".section").forEach(s=>s.style.display="block");
  document.getElementById("detailsView").classList.remove("active");
}


function showHowToBorrow(){
  document.getElementById("hero").style.display="none";
  document.getElementById("guidelinesSection").style.display="none";
  document.getElementById("howToBorrowSection").style.display="block";
  document.getElementById("faqSection").style.display="none"; // hide FAQ
  document.querySelectorAll(".section").forEach(s=>s.style.display="none");
  document.getElementById("detailsView").classList.remove("active");
}

function goToCollection(id){
  showHero();
  document.getElementById(id).scrollIntoView({behavior:"smooth"});
}

function showFAQ(){
  document.getElementById("hero").style.display="none";
  document.getElementById("guidelinesSection").style.display="none";
  document.getElementById("howToBorrowSection").style.display="none";
  document.getElementById("faqSection").style.display="block";
  document.querySelectorAll(".section").forEach(s=>s.style.display="none");
  document.getElementById("detailsView").classList.remove("active");
}

// Accordion behavior
document.addEventListener("click", function(e) {
  if (e.target.classList.contains("accordion")) {
    e.target.classList.toggle("active");
    const panel = e.target.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  }
});



loadStatus();

// Set icon images for How to Borrow section
document.getElementById('eligibilityIcon').src="https://i.imgur.com/8Ojhue6.png";
document.getElementById('memberPerkIcon').src="https://i.imgur.com/t7soEjL.png";

  