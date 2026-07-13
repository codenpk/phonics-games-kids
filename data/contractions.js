// Contraction Action — match contractions to their word pairs
// contraction: the short form   parts: [word1, word2] the full form
// distractors: 3 wrong word pairs
window.CONTRACTIONS = [

  // ── Tier 1: common -n't contractions ────────────────────────────────────────
  {tier:1, contraction:"CAN'T",   parts:["CAN","NOT"],
    distractors:[["CAN","HAVE"],["COULD","NOT"],["DO","NOT"]]},

  {tier:1, contraction:"DON'T",   parts:["DO","NOT"],
    distractors:[["DID","NOT"],["CAN","NOT"],["IS","NOT"]]},

  {tier:1, contraction:"ISN'T",   parts:["IS","NOT"],
    distractors:[["IT","IS"],["ARE","NOT"],["WAS","NOT"]]},

  {tier:1, contraction:"DIDN'T",  parts:["DID","NOT"],
    distractors:[["DO","NOT"],["DOES","NOT"],["HAS","NOT"]]},

  {tier:1, contraction:"WASN'T",  parts:["WAS","NOT"],
    distractors:[["WERE","NOT"],["IS","NOT"],["HAS","NOT"]]},

  {tier:1, contraction:"WON'T",   parts:["WILL","NOT"],
    distractors:[["WOULD","NOT"],["CAN","NOT"],["DO","NOT"]]},

  {tier:1, contraction:"AREN'T",  parts:["ARE","NOT"],
    distractors:[["IS","NOT"],["WAS","NOT"],["WERE","NOT"]]},

  {tier:1, contraction:"HASN'T",  parts:["HAS","NOT"],
    distractors:[["HAVE","NOT"],["HAD","NOT"],["DID","NOT"]]},

  // ── Tier 2: 'll / 've / 'd contractions ─────────────────────────────────────
  {tier:2, contraction:"I'LL",    parts:["I","WILL"],
    distractors:[["I","AM"],["I","HAVE"],["I","WOULD"]]},

  {tier:2, contraction:"I'VE",    parts:["I","HAVE"],
    distractors:[["I","AM"],["I","WILL"],["I","WOULD"]]},

  {tier:2, contraction:"I'D",     parts:["I","WOULD"],
    distractors:[["I","DID"],["I","HAD"],["I","HAVE"]]},

  {tier:2, contraction:"HE'S",    parts:["HE","IS"],
    distractors:[["HE","HAS"],["HE","WAS"],["SHE","IS"]]},

  {tier:2, contraction:"SHE'S",   parts:["SHE","IS"],
    distractors:[["SHE","HAS"],["SHE","WAS"],["HE","IS"]]},

  {tier:2, contraction:"WE'LL",   parts:["WE","WILL"],
    distractors:[["WE","HAVE"],["WE","WOULD"],["THEY","WILL"]]},

  {tier:2, contraction:"THEY'RE", parts:["THEY","ARE"],
    distractors:[["THEY","HAVE"],["THEY","WILL"],["WE","ARE"]]},

  {tier:2, contraction:"YOU'RE",  parts:["YOU","ARE"],
    distractors:[["YOU","HAVE"],["YOU","WILL"],["THEY","ARE"]]},

  // ── Tier 3: trickier / less common contractions ───────────────────────────
  {tier:3, contraction:"COULDN'T", parts:["COULD","NOT"],
    distractors:[["SHOULD","NOT"],["WOULD","NOT"],["CAN","NOT"]]},

  {tier:3, contraction:"SHOULDN'T",parts:["SHOULD","NOT"],
    distractors:[["COULD","NOT"],["WOULD","NOT"],["MUST","NOT"]]},

  {tier:3, contraction:"WOULDN'T", parts:["WOULD","NOT"],
    distractors:[["COULD","NOT"],["SHOULD","NOT"],["WILL","NOT"]]},

  {tier:3, contraction:"HAVEN'T",  parts:["HAVE","NOT"],
    distractors:[["HAS","NOT"],["HAD","NOT"],["DID","NOT"]]},

  {tier:3, contraction:"HADN'T",   parts:["HAD","NOT"],
    distractors:[["HAS","NOT"],["HAVE","NOT"],["DID","NOT"]]},

  {tier:3, contraction:"MUSTN'T",  parts:["MUST","NOT"],
    distractors:[["SHOULD","NOT"],["COULD","NOT"],["NEED","NOT"]]},

  {tier:3, contraction:"THEY'VE",  parts:["THEY","HAVE"],
    distractors:[["THEY","ARE"],["THEY","WILL"],["WE","HAVE"]]},

  {tier:3, contraction:"IT'S",     parts:["IT","IS"],
    distractors:[["IT","HAS"],["IT","WAS"],["HE","IS"]]},
];
