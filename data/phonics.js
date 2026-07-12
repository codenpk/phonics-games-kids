// Phonics Tap — Grade 1 Phonics Game
// Independent of any textbook. Covers short vowels, digraphs, and consonant blends.
// Format: { emoji, word, position:"beginning"|"middle"|"end", display:"_AT", answer:"C", distractors:["H","B"] }
// display: use _ for the blank (single letter) or __ for digraph/blend blanks
window.PHONICS = [

  // ── Short vowel CVC · Beginning sounds ──────────────────────────────────
  {emoji:"🐱", word:"CAT", position:"beginning", display:"_AT",  answer:"C",  distractors:["H","B"]},
  {emoji:"🐶", word:"DOG", position:"beginning", display:"_OG",  answer:"D",  distractors:["F","H"]},
  {emoji:"☀️",  word:"SUN", position:"beginning", display:"_UN",  answer:"S",  distractors:["R","B"]},
  {emoji:"🕸️", word:"WEB", position:"beginning", display:"_EB",  answer:"W",  distractors:["N","L"]},

  // ── Short vowel CVC · Middle (vowel) sounds ─────────────────────────────
  {emoji:"🎩", word:"HAT", position:"middle",    display:"H_T",  answer:"A",  distractors:["I","U"]},
  {emoji:"🦵", word:"LEG", position:"middle",    display:"L_G",  answer:"E",  distractors:["A","O"]},
  {emoji:"🪴", word:"POT", position:"middle",    display:"P_T",  answer:"O",  distractors:["A","U"]},
  {emoji:"🥜", word:"NUT", position:"middle",    display:"N_T",  answer:"U",  distractors:["O","A"]},

  // ── Short vowel CVC · Ending sounds ─────────────────────────────────────
  {emoji:"🗺️", word:"MAP", position:"end",       display:"MA_",  answer:"P",  distractors:["N","T"]},
  {emoji:"🛏️", word:"BED", position:"end",       display:"BE_",  answer:"D",  distractors:["G","N"]},
  {emoji:"📌", word:"PIN", position:"end",       display:"PI_",  answer:"N",  distractors:["G","T"]},
  {emoji:"🐔", word:"HEN", position:"end",       display:"HE_",  answer:"N",  distractors:["T","D"]},

  // ── Digraphs · SH ───────────────────────────────────────────────────────
  {emoji:"🚢", word:"SHIP", position:"beginning", display:"__IP",  answer:"SH", distractors:["CH","TH"]},
  {emoji:"🐟", word:"FISH", position:"end",       display:"FI__",  answer:"SH", distractors:["CH","TH"]},
  {emoji:"🛒", word:"SHOP", position:"beginning", display:"__OP",  answer:"SH", distractors:["CH","WH"]},

  // ── Digraphs · CH ───────────────────────────────────────────────────────
  {emoji:"😊", word:"CHIN", position:"beginning", display:"__IN",  answer:"CH", distractors:["SH","TH"]},
  {emoji:"🍱", word:"LUNCH",position:"end",       display:"LUN__", answer:"CH", distractors:["SH","TH"]},

  // ── Digraphs · TH ───────────────────────────────────────────────────────
  {emoji:"📏", word:"THIN", position:"beginning", display:"__IN",  answer:"TH", distractors:["SH","CH"]},
  {emoji:"🛁", word:"BATH", position:"end",       display:"BA__",  answer:"TH", distractors:["SH","CH"]},
  {emoji:"3️⃣",  word:"THREE",position:"beginning", display:"__REE", answer:"TH", distractors:["SH","CH"]},

  // ── Digraphs · WH ───────────────────────────────────────────────────────
  {emoji:"🐳", word:"WHALE",position:"beginning", display:"__ALE", answer:"WH", distractors:["SH","TH"]},
  {emoji:"🎡", word:"WHEEL",position:"beginning", display:"__EEL", answer:"WH", distractors:["SH","TH"]},

  // ── Blends · ST ─────────────────────────────────────────────────────────
  {emoji:"⭐", word:"STAR", position:"beginning", display:"__AR",  answer:"ST", distractors:["SP","SN"]},
  {emoji:"✋", word:"STOP", position:"beginning", display:"__OP",  answer:"ST", distractors:["SN","SW"]},

  // ── Blends · TR ─────────────────────────────────────────────────────────
  {emoji:"🌳", word:"TREE", position:"beginning", display:"__EE",  answer:"TR", distractors:["FL","CR"]},
  {emoji:"🚚", word:"TRUCK",position:"beginning", display:"__UCK", answer:"TR", distractors:["GR","CR"]},

  // ── Blends · FL ─────────────────────────────────────────────────────────
  {emoji:"🚩", word:"FLAG", position:"beginning", display:"__AG",  answer:"FL", distractors:["BL","CL"]},

  // ── Blends · CL ─────────────────────────────────────────────────────────
  {emoji:"👏", word:"CLAP", position:"beginning", display:"__AP",  answer:"CL", distractors:["FL","BL"]},

  // ── Blends · BR ─────────────────────────────────────────────────────────
  {emoji:"🍞", word:"BREAD",position:"beginning", display:"__EAD", answer:"BR", distractors:["TR","GR"]},

  // ── Blends · GR ─────────────────────────────────────────────────────────
  {emoji:"🌿", word:"GRASS",position:"beginning", display:"__ASS", answer:"GR", distractors:["TR","CR"]},
];
