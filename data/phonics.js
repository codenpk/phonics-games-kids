// Phonics Tap — phonics question bank
// tier: 1=CVC short vowels  2=digraphs+blends  3=long vowels+r-controlled+vowel teams
// display: _ = single-letter blank,  __ = two-letter blank,  ____ = four-letter blank
// hard: trickier distractors used in Hard mode (defaults to distractors if absent)
window.PHONICS = [

  // ══ TIER 1: CVC Short Vowels ══════════════════════════════════════════════

  // Beginning sounds
  {tier:1, emoji:"🐱", word:"CAT",  position:"beginning", display:"_AT",  answer:"C",  distractors:["H","B"],   hard:["H","M"]},
  {tier:1, emoji:"🐶", word:"DOG",  position:"beginning", display:"_OG",  answer:"D",  distractors:["F","H"],   hard:["B","F"]},
  {tier:1, emoji:"☀️", word:"SUN",  position:"beginning", display:"_UN",  answer:"S",  distractors:["R","B"],   hard:["R","F"]},
  {tier:1, emoji:"🕸️", word:"WEB",  position:"beginning", display:"_EB",  answer:"W",  distractors:["N","L"],   hard:["N","V"]},
  {tier:1, emoji:"🐷", word:"PIG",  position:"beginning", display:"_IG",  answer:"P",  distractors:["B","D"],   hard:["B","F"]},
  {tier:1, emoji:"🏃", word:"RUN",  position:"beginning", display:"_UN",  answer:"R",  distractors:["S","G"],   hard:["S","N"]},
  {tier:1, emoji:"🚌", word:"BUS",  position:"beginning", display:"_US",  answer:"B",  distractors:["P","F"],   hard:["P","M"]},
  {tier:1, emoji:"🐸", word:"HOP",  position:"beginning", display:"_OP",  answer:"H",  distractors:["T","M"],   hard:["T","N"]},
  {tier:1, emoji:"✈️", word:"JET",  position:"beginning", display:"_ET",  answer:"J",  distractors:["N","P"],   hard:["N","L"]},
  {tier:1, emoji:"👨", word:"MAN",  position:"beginning", display:"_AN",  answer:"M",  distractors:["C","P"],   hard:["C","N"]},

  // Middle (vowel) sounds
  {tier:1, emoji:"🎩", word:"HAT",  position:"middle",    display:"H_T",  answer:"A",  distractors:["I","U"],   hard:["I","O"]},
  {tier:1, emoji:"🦵", word:"LEG",  position:"middle",    display:"L_G",  answer:"E",  distractors:["A","O"],   hard:["A","I"]},
  {tier:1, emoji:"🪴", word:"POT",  position:"middle",    display:"P_T",  answer:"O",  distractors:["A","U"],   hard:["A","U"]},
  {tier:1, emoji:"🥜", word:"NUT",  position:"middle",    display:"N_T",  answer:"U",  distractors:["O","A"],   hard:["O","I"]},
  {tier:1, emoji:"🐙", word:"BIT",  position:"middle",    display:"B_T",  answer:"I",  distractors:["A","U"],   hard:["E","A"]},
  {tier:1, emoji:"✂️", word:"CUT",  position:"middle",    display:"C_T",  answer:"U",  distractors:["A","I"],   hard:["O","A"]},
  {tier:1, emoji:"🌀", word:"TOP",  position:"middle",    display:"T_P",  answer:"O",  distractors:["U","A"],   hard:["U","A"]},
  {tier:1, emoji:"☕", word:"MUG",  position:"middle",    display:"M_G",  answer:"U",  distractors:["A","I"],   hard:["O","A"]},

  // Ending sounds
  {tier:1, emoji:"🗺️", word:"MAP",  position:"end",       display:"MA_",  answer:"P",  distractors:["N","T"],   hard:["N","B"]},
  {tier:1, emoji:"🛏️", word:"BED",  position:"end",       display:"BE_",  answer:"D",  distractors:["G","N"],   hard:["G","B"]},
  {tier:1, emoji:"📌", word:"PIN",  position:"end",       display:"PI_",  answer:"N",  distractors:["G","T"],   hard:["G","M"]},
  {tier:1, emoji:"🐔", word:"HEN",  position:"end",       display:"HE_",  answer:"N",  distractors:["T","D"],   hard:["T","M"]},
  {tier:1, emoji:"🎒", word:"BAG",  position:"end",       display:"BA_",  answer:"G",  distractors:["T","N"],   hard:["D","N"]},
  {tier:1, emoji:"☕", word:"CUP",  position:"end",       display:"CU_",  answer:"P",  distractors:["T","N"],   hard:["B","T"]},
  {tier:1, emoji:"🎯", word:"HIT",  position:"end",       display:"HI_",  answer:"T",  distractors:["N","D"],   hard:["D","N"]},

  // ══ TIER 2: Digraphs + Blends ═════════════════════════════════════════════

  // SH
  {tier:2, emoji:"🚢", word:"SHIP",  position:"beginning", display:"__IP",   answer:"SH", distractors:["CH","TH"],  hard:["CH","WH"]},
  {tier:2, emoji:"🐟", word:"FISH",  position:"end",       display:"FI__",   answer:"SH", distractors:["CH","TH"],  hard:["CH","PH"]},
  {tier:2, emoji:"🛒", word:"SHOP",  position:"beginning", display:"__OP",   answer:"SH", distractors:["CH","WH"],  hard:["CH","WH"]},
  {tier:2, emoji:"🐑", word:"SHEEP", position:"beginning", display:"__EEP",  answer:"SH", distractors:["CH","TH"],  hard:["CH","WH"]},

  // CH
  {tier:2, emoji:"😊", word:"CHIN",  position:"beginning", display:"__IN",   answer:"CH", distractors:["SH","TH"],  hard:["SH","WH"]},
  {tier:2, emoji:"🍱", word:"LUNCH", position:"end",       display:"LUN__",  answer:"CH", distractors:["SH","TH"],  hard:["SH","PH"]},
  {tier:2, emoji:"✔️", word:"CHECK", position:"beginning", display:"__ECK",  answer:"CH", distractors:["SH","TH"],  hard:["SH","WH"]},

  // TH
  {tier:2, emoji:"📏", word:"THIN",  position:"beginning", display:"__IN",   answer:"TH", distractors:["SH","CH"],  hard:["SH","CH"]},
  {tier:2, emoji:"🛁", word:"BATH",  position:"end",       display:"BA__",   answer:"TH", distractors:["SH","CH"],  hard:["SH","PH"]},
  {tier:2, emoji:"3️⃣", word:"THREE", position:"beginning", display:"__REE",  answer:"TH", distractors:["SH","CH"],  hard:["SH","WH"]},

  // WH
  {tier:2, emoji:"🐳", word:"WHALE", position:"beginning", display:"__ALE",  answer:"WH", distractors:["SH","TH"],  hard:["SH","CH"]},
  {tier:2, emoji:"🎡", word:"WHEEL", position:"beginning", display:"__EEL",  answer:"WH", distractors:["SH","TH"],  hard:["SH","TH"]},

  // PH
  {tier:2, emoji:"📞", word:"PHONE", position:"beginning", display:"__ONE",  answer:"PH", distractors:["SH","TH"],  hard:["SH","WH"]},

  // CK
  {tier:2, emoji:"🦆", word:"DUCK",  position:"end",       display:"DU__",   answer:"CK", distractors:["SH","CH"],  hard:["CH","SH"]},
  {tier:2, emoji:"🔒", word:"LOCK",  position:"end",       display:"LO__",   answer:"CK", distractors:["SH","CH"],  hard:["CH","TH"]},

  // Beginning blends
  {tier:2, emoji:"⭐", word:"STAR",  position:"beginning", display:"__AR",   answer:"ST", distractors:["SP","SN"],  hard:["SP","SC"]},
  {tier:2, emoji:"✋", word:"STOP",  position:"beginning", display:"__OP",   answer:"ST", distractors:["SN","SW"],  hard:["SN","SP"]},
  {tier:2, emoji:"🌳", word:"TREE",  position:"beginning", display:"__EE",   answer:"TR", distractors:["FL","CR"],  hard:["CR","FR"]},
  {tier:2, emoji:"🚚", word:"TRUCK", position:"beginning", display:"__UCK",  answer:"TR", distractors:["GR","CR"],  hard:["CR","GR"]},
  {tier:2, emoji:"🚩", word:"FLAG",  position:"beginning", display:"__AG",   answer:"FL", distractors:["BL","CL"],  hard:["BL","SL"]},
  {tier:2, emoji:"👏", word:"CLAP",  position:"beginning", display:"__AP",   answer:"CL", distractors:["FL","BL"],  hard:["FL","BL"]},
  {tier:2, emoji:"🍞", word:"BREAD", position:"beginning", display:"__EAD",  answer:"BR", distractors:["TR","GR"],  hard:["GR","FR"]},
  {tier:2, emoji:"🌿", word:"GRASS", position:"beginning", display:"__ASS",  answer:"GR", distractors:["TR","CR"],  hard:["CR","TR"]},
  {tier:2, emoji:"🖤", word:"BLACK", position:"beginning", display:"__ACK",  answer:"BL", distractors:["CL","FL"],  hard:["CL","SL"]},
  {tier:2, emoji:"🦀", word:"CRAB",  position:"beginning", display:"__AB",   answer:"CR", distractors:["GR","TR"],  hard:["GR","FR"]},
  {tier:2, emoji:"🥁", word:"DRUM",  position:"beginning", display:"__UM",   answer:"DR", distractors:["GR","TR"],  hard:["GR","BR"]},
  {tier:2, emoji:"🌱", word:"PLANT", position:"beginning", display:"__ANT",  answer:"PL", distractors:["CL","FL"],  hard:["CL","BL"]},
  {tier:2, emoji:"🐍", word:"SNACK", position:"beginning", display:"__ACK",  answer:"SN", distractors:["ST","SP"],  hard:["ST","SC"]},
  {tier:2, emoji:"🏊", word:"SWIM",  position:"beginning", display:"__IM",   answer:"SW", distractors:["ST","SN"],  hard:["ST","SL"]},
  {tier:2, emoji:"🛷", word:"SLED",  position:"beginning", display:"__ED",   answer:"SL", distractors:["ST","SN"],  hard:["ST","SW"]},
  {tier:2, emoji:"🐸", word:"FROG",  position:"beginning", display:"__OG",   answer:"FR", distractors:["BR","GR"],  hard:["GR","BR"]},

  // Ending blends
  {tier:2, emoji:"✋", word:"HAND",  position:"end",       display:"HA__",   answer:"ND", distractors:["NT","NG"],  hard:["NT","NK"]},
  {tier:2, emoji:"🏕️", word:"TENT",  position:"end",       display:"TE__",   answer:"NT", distractors:["ND","NG"],  hard:["ND","NK"]},
  {tier:2, emoji:"💍", word:"RING",  position:"end",       display:"RI__",   answer:"NG", distractors:["ND","NT"],  hard:["ND","NK"]},
  {tier:2, emoji:"💪", word:"LAMP",  position:"end",       display:"LA__",   answer:"MP", distractors:["ND","NT"],  hard:["ND","NK"]},
  {tier:2, emoji:"🏦", word:"BANK",  position:"end",       display:"BA__",   answer:"NK", distractors:["NG","ND"],  hard:["NG","NT"]},

  // ══ TIER 3: Long Vowels, Vowel Teams, R-controlled ════════════════════════

  // Silent-e (CVCe) — long vowel in middle
  {tier:3, emoji:"🎂", word:"CAKE",  position:"middle",    display:"C_KE",   answer:"A",  distractors:["I","U"],   hard:["I","E"]},
  {tier:3, emoji:"🐍", word:"GAME",  position:"middle",    display:"G_ME",   answer:"A",  distractors:["I","U"],   hard:["E","I"]},
  {tier:3, emoji:"🌲", word:"PINE",  position:"middle",    display:"P_NE",   answer:"I",  distractors:["A","U"],   hard:["A","E"]},
  {tier:3, emoji:"🪁", word:"KITE",  position:"middle",    display:"K_TE",   answer:"I",  distractors:["A","U"],   hard:["E","A"]},
  {tier:3, emoji:"🦴", word:"BONE",  position:"middle",    display:"B_NE",   answer:"O",  distractors:["A","U"],   hard:["U","A"]},
  {tier:3, emoji:"🏠", word:"HOME",  position:"middle",    display:"H_ME",   answer:"O",  distractors:["A","U"],   hard:["U","E"]},
  {tier:3, emoji:"🎵", word:"TUNE",  position:"middle",    display:"T_NE",   answer:"U",  distractors:["O","A"],   hard:["O","I"]},
  {tier:3, emoji:"🧊", word:"CUBE",  position:"middle",    display:"C_BE",   answer:"U",  distractors:["O","I"],   hard:["O","A"]},

  // Vowel teams
  {tier:3, emoji:"🌧️", word:"RAIN",  position:"middle",    display:"R__N",   answer:"AI", distractors:["AY","EA"], hard:["AY","EI"]},
  {tier:3, emoji:"🕹️", word:"PLAY",  position:"end",       display:"PL__",   answer:"AY", distractors:["AI","OA"], hard:["AI","AE"]},
  {tier:3, emoji:"🏖️", word:"BEACH", position:"middle",    display:"B__CH",  answer:"EA", distractors:["EE","AI"], hard:["EE","IE"]},
  {tier:3, emoji:"🌳", word:"TREE",  position:"end",       display:"TR__",   answer:"EE", distractors:["EA","OO"], hard:["EA","IE"]},
  {tier:3, emoji:"⛵", word:"BOAT",  position:"middle",    display:"B__T",   answer:"OA", distractors:["AI","EA"], hard:["OO","OU"]},
  {tier:3, emoji:"📚", word:"BOOK",  position:"middle",    display:"B__K",   answer:"OO", distractors:["EA","OA"], hard:["OA","OU"]},
  {tier:3, emoji:"🌙", word:"MOON",  position:"middle",    display:"M__N",   answer:"OO", distractors:["OA","AI"], hard:["OA","OU"]},

  // R-controlled vowels
  {tier:3, emoji:"⭐", word:"STAR",  position:"end",       display:"ST__",   answer:"AR", distractors:["OR","ER"], hard:["OR","UR"]},
  {tier:3, emoji:"🌽", word:"CORN",  position:"middle",    display:"C__N",   answer:"OR", distractors:["AR","UR"], hard:["AR","ER"]},
  {tier:3, emoji:"🐦", word:"BIRD",  position:"middle",    display:"B__D",   answer:"IR", distractors:["AR","ER"], hard:["ER","UR"]},
  {tier:3, emoji:"🌿", word:"FERN",  position:"middle",    display:"F__N",   answer:"ER", distractors:["AR","OR"], hard:["IR","UR"]},
  {tier:3, emoji:"🌊", word:"SURF",  position:"middle",    display:"S__F",   answer:"UR", distractors:["OR","AR"], hard:["IR","ER"]},
];
