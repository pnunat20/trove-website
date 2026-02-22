
    
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
  },

  "explodingkittens": {
    title: "Exploding Kittens",
    category: "Category 1",
    players: "2–5 players",
    playtime: "15 min",
    description: "A strategic card game full of kittens, explosions, and sometimes goats. Players draw cards until someone draws an Exploding Kitten and loses. Use action cards to avoid, mitigate, or cause explosions to stay in the game.",
    includes: [
      "56x Cards",
      "1x Instruction Manual",
      "1x Box"
    ],
    copies: 1,
    donor: "Katlin Doroja",
    images: ["https://imgs.search.brave.com/RW2vogrBbuLdPPovf2lUQJ9hrk81UGGrQUhUvXx3rbg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZXhwbG9kaW5na2l0/dGVucy5jb20vY2Ru/L3Nob3AvZmlsZXMv/NTM1eDQ0MF9QYWNr/X1Nob3RfMGI4N2I1/YWItYTI4MS00MTky/LWFmMTQtOTMxMDg5/MGNmZTdlLnBuZz92/PTE2ODkyNjI3MDMm/d2lkdGg9MTUwMA",
    "https://imgs.search.brave.com/zS02BBgJjdr_xptqjDJ7MMKKyNEWfjDfn1AYutyuOEk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sdWNr/YW5kc3RyYXRlZ3ku/Y29tL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDI0LzAxL0V4cGxv/ZGluZy1LaXR0ZW5z/LWFjdGlvbi1jYXJk/cy0xMDI0eDc3MS5q/cGc"]
  },

  "fakeartistgoestonewyork": {
    title: "Fake Artist Goes to New York",
    category: "Category 1",
    players: "5–10 players",
    playtime: "20 min",
    description: "A social deduction drawing game where players collaboratively draw a picture, but one player is the fake artist who doesn't know what they're drawing. Everyone tries to identify the faker while the faker tries to blend in.",
    includes: [
      "Question Cards",
      "Dry Erase Markers",
      "Whiteboards",
      "1x Instruction Manual",
      "1x Box",
     "Print and Play version"
    ],
    copies: 1,
    donor: "High Council '25-'26",
    images: ["https://imgs.search.brave.com/eEI48ZEz0qZNr823oFhK4IctqM6FKTU_63vWa81w38A/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wcmVz/cy5pbnZpbmNpYmxl/Lmluay93cC1jb250/ZW50L3VwbG9hZHMv/MjAxOS8xMS9mYXJ0/aXN0LnBuZw",
    "https://imgs.search.brave.com/7OkV_qJ2yb69gocMkq-A9tLf1-mEE52p1dgTEJj3H0Y/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NDF3YXBCbEVLS0wu/anBn"]
  },

  "explodingkittensnsfw": {
    title: "Exploding Kittens (NSFW)",
    category: "Category 1",
    players: "2–5 players",
    playtime: "15 min",
    description: "The adult version of Exploding Kittens with inappropriate humor and mature content. Same strategic gameplay but with NSFW illustrations and themes. For mature audiences only.",
    includes: [
      "56x Cards",
      "1x Instruction Manual",
      "1x Box"
    ],
    copies: 1,
    donor: "Emmanuel David Tolentino",
    images: ["https://imgs.search.brave.com/awWBtSFWEJSUZGjpxJTDun6k-9yb3C56NgbNPEoGkW0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9mbHlp/bmdwaWd0b3lzLmNv/bS9jZG4vc2hvcC9m/aWxlcy9FS19OU0ZX/X1YyLUhlcm9fMTMw/MHhfMWU4YmY0MDIt/OGM3OS00ZTBjLWEx/MGYtZTFlZDk2ZTY5/MDIzXzQwMHgucG5n/P3Y9MTcyMDI4NDcw/MQ",
    "https://imgs.search.brave.com/jk6Jmi5RYiZVY32xR58J4w0scYaTUexcbUN3fR56_NQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/c3ZjLmFzbW9kZWUu/bmV0L3Byb2R1Y3Rp/b24tYXNtb2RlZWNh/L3VwbG9hZHMvaW1h/Z2UtY29udmVydGVy/LzIwMjMvMDQvRUtH/LU5TRlctNi1FWFBM/T0RJTkdfS0lUVEVO/Uy1OU0ZXLUVOLTNE/X1JJR0hULTEwMjR4/MTAyNC53ZWJw"]
  },

  "rummikub": {
    title: "Rummikub",
    category: "Category 2",
    players: "2–4 players",
    playtime: "30–60 min",
    description: "A tile-based game combining elements of rummy and mahjong. Players manipulate sets and runs of numbered tiles to be the first to use all their tiles. Strategic thinking and pattern recognition are key.",
    includes: [
      "106x Tiles",
      "4x Tile Racks",
      "1x Instruction Manual",
      "1x Box"
    ],
    copies: 1,
    donor: "Clare Trasga",
    images: ["https://imgs.search.brave.com/YcBcaRVLdTCjh-yAtf-Lsm7nBYI1DlQXxR97oBCsvlQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Z29vZHBsYXlndWlk/ZS5jb20vd3AtY29u/dGVudC91cGxvYWRz/LzIwMjQvMTIvUnVt/bWlrdWItMy5wbmc",
    "https://imgs.search.brave.com/6_85zS3OBjHgo81569wH3UHlcpwBhbe3OSGQj7QjMGM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9ydW1t/aWt1Yi10aWxlcy1z/aG93aW5nLW5ldy15/ZWFyLWdhbWUtc3Rp/bGwtcGxheWluZy13/aW5uZXItbGVpc3Vy/ZS1jb21wZXRpdGlv/bi1jaGFsbGVuZ2Ut/Ym9hcmQtZ2FtZS1m/YW1pbHktdGltZS0x/NjU2NzQ0OTYuanBn"]
  },

  "go": {
    title: "Go",
    category: "Category 1",
    players: "2 players",
    playtime: "30–180 min",
    description: "An ancient Chinese strategy board game where players place black and white stones to surround territory. Simple rules but incredibly deep strategic gameplay that has been played for thousands of years.",
    includes: [
      "Go Board",
      "Black Stones",
      "White Stones",
      "Bowls",
      "1x Instruction Manual"
    ],
    copies: 1,
    donor: "DavidEmmanuel  Tolentino",
    images: ["https://imgs.search.brave.com/ZQ-6Kj72QfPCP3FiA_-CS8ZBagqx1z8gTTyjmp_ps8I/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzF0bTFUVU1sZVMu/anBn",
    "https://imgs.search.brave.com/vT2LARK2F0JnLnCoExtPMtK9_lDMgjWomK-p9mmKlE0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90YXJn/ZXQuc2NlbmU3LmNv/bS9pcy9pbWFnZS9U/YXJnZXQvR1VFU1Rf/OWVlYmJmZWQtMDAx/NS00OGQzLTk1NmIt/ZmNiZmEyODE4OTlm/P3dpZD04MDAmaGVp/PTgwMCZxbHQ9ODAm/Zm10PXBqcGVn"]
  },

  "farkle": {
    title: "Farkle",
    category: "Category 1",
    players: "2+ players",
    playtime: "30 min",
    description: "A press-your-luck dice game where players roll to score points but risk losing everything if they farkle. Easy to learn with addictive gameplay that keeps everyone engaged.",
    includes: [
      "6x Dice",
      "Score Pad",
      "1x Instruction Manual",
      "1x Container/Box"
    ],
    copies: 1,
    donor: "High Council '25-'26",
    images: ["https://imgs.search.brave.com/pmPIHdSpk3sw-_8lnXuNX28nqpVGDYfQPuktItVaD7U/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4x/MS5iaWdjb21tZXJj/ZS5jb20vcy03MDE4/NC9pbWFnZXMvc3Rl/bmNpbC8zNTB4MzUw/L3Byb2R1Y3RzLzQ0/NjUvMTI3NTgvZmFy/a2xlLWJveGVkLWdh/bWVfXzE5MTI3LjE3/MDI0MTI5OTguanBn/P2M9Mg",
    "https://imgs.search.brave.com/ybBsPVcBk9SQodCLfu5iVqfHXcLbUruxRl8VsyOYiJ4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cGxheW1vbnN0ZXIu/Y29tL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDI0LzA4LzY5MTlf/RmFya2xlX2JveDQt/NDE2eDMxMi5qcGc"]
  },

  "bogglea": {
    title: "Boggle",
    category: "Category 1",
    players: "2+ players",
    playtime: "10 min",
    description: "A fast-paced word game where players shake the grid and race to find as many words as possible in the jumbled letters. Perfect for word enthusiasts and quick thinking.",
    includes: [
      "Boggle Grid with Cover",
      "16x Letter Cubes",
      "Timer",
      "Score Pads",
      "1x Instruction Manual"
    ],
    copies: 2,
    donor: "High Council '25-'26",
    images: ["https://imgs.search.brave.com/iSqmHmfPuoDKvscRfO1hBuFPZQSSqsVg_m5xN6L9jwY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLmVi/YXlpbWcuY29tL3Ro/dW1icy9pbWFnZXMv/Zy91Z01BQWVTd2Ft/cHBOSHVpL3MtbDQw/MC53ZWJw",
    "https://imgs.search.brave.com/F5IGKfDF5g62x6QuXch6ozvGhd4MfTwPGsCRC9T2XC0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pNS53/YWxtYXJ0aW1hZ2Vz/LmNvbS9zZW8vU3Vw/ZXItSW1wdWxzZS1T/VUktNTA2MS1DLVdv/cmxkcy1TbWFsbGVz/dC1Cb2dnbGUtR2Ft/ZV84ODQzMzRiMy02/ZGM4LTRjYTMtODlj/OS04OWU2YWI3NmQ3/NDYuNmFkYmViMTQz/MDhhODNlOWRhM2Rk/NTQ2MjA0M2IwOTAu/anBlZz9vZG5IZWln/aHQ9NTgwJm9kbldp/ZHRoPTU4MCZvZG5C/Zz1GRkZGRkY"]
  },

  

  "gameofthegenerals": {
    title: "Game of the Generals",
    category: "Category 2",
    players: "2 players",
    playtime: "20–40 min",
    description: "A Filipino strategy board game where players command armies with different ranked pieces. Unlike chess, piece identities are hidden, adding bluffing and deduction to tactical gameplay.",
    includes: [
      "Game Board",
      "Playing Pieces",
      "1x Instruction Manual",
      "1x Box"
    ],
    copies: 1,
    donor: "Clare Trasga",
    images: ["https://imgs.search.brave.com/bddunfpI-IXlA7Wr6wZWTlJgMtwYtpmywkAlq1OcU5E/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly95dWNo/ZW5nY29tdXNldW0u/b3JnL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDI0LzA4L2luc3Rh/Z3JpZF8yMDI0ODEy/MTQ0ODIzOTMtNTAw/eDUwMC1vcHRpbWl6/ZWQuanBn",
    "https://imgs.search.brave.com/llhtcxIjrFwQal9XGp7RSItlF5XyCOrAfbebpYgEey4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9nZWVr/Ym94cGguY29tL2Nk/bi9zaG9wL2ZpbGVz/L0lNR183MzU2Xzgw/MHguanBnP3Y9MTcz/ODI5ODAxNA"]
  },

  "onenightultimatewerewolf": {
    title: "One Night Ultimate Werewolf",
    category: "Category 1",
    players: "3–10 players",
    playtime: "10 min",
    description: "A fast-paced social deduction game where players have secret roles and must figure out who the werewolves are in just one night. Bluffing, deduction, and accusation make every round intense.",
    includes: [
      "Role Cards",
      "Tokens",
      "1x Instruction Manual",
      "1x Box"
    ],
    copies: 1,
    donor: "High Council '25-'26",
    images: ["https://imgs.search.brave.com/H7Fi-47kfTILcl5iuSTOXMeuENPeePejF6Z5qn0oVrc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc3F1YXJlc3Bh/Y2UtY2RuLmNvbS9j/b250ZW50L3YxLzUy/M2RlZThlZTRiMGM1/OTc3NmVmOGMzYS8x/NjM5MjUyODI2MzMx/LUMySzlGT1I2STYx/MlMwRkVYQTVHL29u/ZStuaWdodCt3ZXJl/d29sZit1bHRpbWF0/ZS5wbmc",
    "https://imgs.search.brave.com/UdtN5kcJ980bV7N9-CGHgHu9qbydmqXqCKmaOuuWXrw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Z2Vla3lob2JiaWVz/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAyNC8wMS9PbmUt/TmlnaHQtVWx0aW1h/dGUtV2VyZXdvbGYt/Q29tcG9uZW50cy03/Mjh4NDEwLmpwZw"]
  },

  "chess": {
    title: "Chess",
    category: "Category 1",
    players: "2 players",
    playtime: "30–60 min",
    description: "The timeless classic strategy game. Command your army of pieces to checkmate the opponent's king. Deep tactical and strategic gameplay that has captivated players for centuries.",
    includes: [
      "Chess Board",
      "32x Chess Pieces",
      "1x Instruction Manual",
      "1x Box"
    ],
    copies: 1,
    donor: "Thonie Kyle Sanico",
    images: ["https://imgs.search.brave.com/dlx9RbjxKOOGEeyVH3I23QzrQl49q-7Om_UBB_-SKMM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTE5/ODI0ODA3L3Bob3Rv/L2NoZXNzLWJveC5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/NEs3dUtLMGZTbUYy/S0VicXVZS1AwQ1Mt/OEhaMzBXYUlOU05D/dWpCTWxLQT0",
   ]
  },

  "popuppirate": {
    title: "Pop-up Pirate",
    category: "Category 1",
    players: "2–4 players",
    playtime: "10–15 min",
    description: "A suspenseful game where players take turns inserting swords into a barrel. One sword will trigger the pirate to pop out! Simple, silly, and fun for all ages.",
    includes: [
      "Pirate Barrel",
      "Swords",
      "1x Instruction Manual"
    ],
    copies: 1,
    donor: "Clare Trasga",
    images: ["https://imgs.search.brave.com/CW2bWhgIXXigTCi2woIouoNXg3LGYhiuWTJtZ0JHwEY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLmVi/YXlpbWcuY29tL2lt/YWdlcy9nL1RGY0FB/T1N3eGR0YW45Rzkv/cy1sNDAwLndlYnA",
    "https://imgs.search.brave.com/3Xw4wlGDrzk4BL1Ugiu244qN5qXGzTjVyGE6CnX2joA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLmVi/YXlpbWcuY29tL2lt/YWdlcy9nL0MySUFB/ZVN3UzhGb3VOdEcv/cy1sMjI1LmpwZw"]
  },

  "tortuga": {
    title: "Tortuga",
    category: "Category 2",
    players: "2–9 players",
    playtime: "20–40 min",
    description: `This 2-player game is played on an hexagonal grid. Each player controls 8 turtles on his side of the board. The winner is the one who will send one of his turtles to the opponent's side

Turtles can be moved one step forwards, or jump over other turtles. Jumping over an opponent's turtle neutralizes it, while jumping over a neutralized turtle activates it again - on either side.`,
    Includes: [
      "1x Map",
      "Instruction Pamphlet",
      "16x Tortugas (Turtles)",
      "1x Tortuga Container",
      
    ],
    copies: 1,
    donor: "Clare Trasga",
    images: ["https://cf.geekdo-images.com/60O76oFmWKsrnW6JCjn_xw__itemrep/img/VE7kfKQeDS2xVRMuacs_pYOKZ-g=/fit-in/246x300/filters:strip_icc()/pic581831.jpg",
            "https://cf.geekdo-images.com/dPNH2FkvrZuspnLg2-TcoQ__crop100@2x/img/bYWWIz0w8ueBoOxo__GJqHrKmZw=/200x200/filters:strip_icc()/pic227848.jpg"]
  },

  "unoflip": {
    title: "UNO Flip",
    category: "Category 1",
    players: "2–10 players",
    playtime: "30 min",
    description: "A twist on classic UNO with double-sided cards. The Flip card switches between the light and dark sides, completely changing the game. More strategic and unpredictable than original UNO.",
    includes: [
      "112x Double-Sided Cards",
      "1x Instruction Manual",
      "1x Box"
    ],
    copies: 1,
    donor: "Clare Trasga",
    images: ["https://imgs.search.brave.com/UHGYmKTxHTYMVK7M6-FRXM-2GbIl9F1e0JsGZ1U55nI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/c2hvcGxpZ2h0c3Bl/ZWQuY29tL3Nob3Bz/LzYzNTQwMi9maWxl/cy8xOTQyNzAyMy8x/NjAweDIwNDh4Mi9t/YXR0ZWwtaW5jLXVu/by1mbGlwLmpwZw",
    "https://imgs.search.brave.com/neJPBDMmMTKoHxjA62WgbHm4ikfAE_NUFsqY-Rit5IQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90YXJn/ZXQuc2NlbmU3LmNv/bS9pcy9pbWFnZS9U/YXJnZXQvR1VFU1Rf/ZGQxZDI4YmYtMTU2/NS00N2FiLWE1Y2It/NDQxNjA4YmJmM2E3/P3dpZD04MDAmaGVp/PTgwMCZxbHQ9ODAm/Zm10PXBqcGVn"]
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

  
  



