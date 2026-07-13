// Blend or Not? — blend detection data
// blend: true  = starts with a consonant cluster (two separate sounds)
// blend: false = starts with ONE sound (single consonant OR digraph like SH/CH/TH)
// tier: 1=easy/clear cases  2=includes digraphs  3=rare blends + harder distractors
window.BLEND_OR_NOT = [

  // ── Tier 1: Clear blends ─────────────────────────────────────────────────────
  {tier:1, emoji:"🚩", word:"FLAG",   blend:true,  start:"FL"},
  {tier:1, emoji:"🌸", word:"FLOWER", blend:true,  start:"FL"},
  {tier:1, emoji:"🐦", word:"FLOCK",  blend:true,  start:"FL"},
  {tier:1, emoji:"🛑", word:"STOP",   blend:true,  start:"ST"},
  {tier:1, emoji:"⭐", word:"STAR",   blend:true,  start:"ST"},
  {tier:1, emoji:"🪜", word:"STEP",   blend:true,  start:"ST"},
  {tier:1, emoji:"🖊️", word:"BLOB",   blend:true,  start:"BL"},
  {tier:1, emoji:"🫐", word:"BLUE",   blend:true,  start:"BL"},
  {tier:1, emoji:"🏆", word:"BLINK",  blend:true,  start:"BL"},
  {tier:1, emoji:"🦞", word:"CRAB",   blend:true,  start:"CR"},
  {tier:1, emoji:"👑", word:"CROWN",  blend:true,  start:"CR"},
  {tier:1, emoji:"🌳", word:"TREE",   blend:true,  start:"TR"},
  {tier:1, emoji:"🚂", word:"TRACK",  blend:true,  start:"TR"},
  {tier:1, emoji:"🏊", word:"SWIM",   blend:true,  start:"SW"},
  {tier:1, emoji:"🦢", word:"SWAN",   blend:true,  start:"SW"},
  {tier:1, emoji:"💨", word:"SPIN",   blend:true,  start:"SP"},
  {tier:1, emoji:"🐍", word:"SNAP",   blend:true,  start:"SN"},
  {tier:1, emoji:"🌫️", word:"SMOG",   blend:true,  start:"SM"},

  // ── Tier 1: Clear singles ────────────────────────────────────────────────────
  {tier:1, emoji:"🐶", word:"DOG",    blend:false, start:"D"},
  {tier:1, emoji:"🐱", word:"CAT",    blend:false, start:"C"},
  {tier:1, emoji:"🐸", word:"FROG",   blend:false, start:"F"},
  {tier:1, emoji:"🌺", word:"BUD",    blend:false, start:"B"},
  {tier:1, emoji:"🐭", word:"MOUSE",  blend:false, start:"M"},
  {tier:1, emoji:"🌙", word:"NIGHT",  blend:false, start:"N"},
  {tier:1, emoji:"🐷", word:"PIG",    blend:false, start:"P"},
  {tier:1, emoji:"🌧️", word:"RAIN",   blend:false, start:"R"},
  {tier:1, emoji:"🌮", word:"TOP",    blend:false, start:"T"},
  {tier:1, emoji:"🐋", word:"WHALE",  blend:false, start:"W"},
  {tier:1, emoji:"🏠", word:"HOME",   blend:false, start:"H"},
  {tier:1, emoji:"🦁", word:"GOAT",   blend:false, start:"G"},

  // ── Tier 2: Digraphs as "tricky singles" ─────────────────────────────────────
  {tier:2, emoji:"🐑", word:"SHEEP",  blend:false, start:"SH"},
  {tier:2, emoji:"🛳️", word:"SHIP",   blend:false, start:"SH"},
  {tier:2, emoji:"🛒", word:"SHOP",   blend:false, start:"SH"},
  {tier:2, emoji:"🐚", word:"SHELL",  blend:false, start:"SH"},
  {tier:2, emoji:"💡", word:"SHINE",  blend:false, start:"SH"},
  {tier:2, emoji:"🍟", word:"CHIP",   blend:false, start:"CH"},
  {tier:2, emoji:"💬", word:"CHAT",   blend:false, start:"CH"},
  {tier:2, emoji:"✅", word:"CHECK",  blend:false, start:"CH"},
  {tier:2, emoji:"🪑", word:"CHIN",   blend:false, start:"CH"},
  {tier:2, emoji:"🧵", word:"THIN",   blend:false, start:"TH"},
  {tier:2, emoji:"📚", word:"THICK",  blend:false, start:"TH"},
  {tier:2, emoji:"🧠", word:"THINK",  blend:false, start:"TH"},
  {tier:2, emoji:"🌡️", word:"THAT",   blend:false, start:"TH"},

  // ── Tier 2: More blends to mix in ───────────────────────────────────────────
  {tier:2, emoji:"🕶️", word:"GLASS",  blend:true,  start:"GL"},
  {tier:2, emoji:"🍇", word:"GRAPE",  blend:true,  start:"GR"},
  {tier:2, emoji:"✈️", word:"PLANE",  blend:true,  start:"PL"},
  {tier:2, emoji:"🎁", word:"PRESS",  blend:true,  start:"PR"},
  {tier:2, emoji:"🦏", word:"SCALE",  blend:true,  start:"SC"},
  {tier:2, emoji:"🛹", word:"SKATE",  blend:true,  start:"SK"},
  {tier:2, emoji:"🛷", word:"SLED",   blend:true,  start:"SL"},
  {tier:2, emoji:"🐌", word:"SLUG",   blend:true,  start:"SL"},

  // ── Tier 3: Rare clusters (STR, SCR, SPL, SPR) ──────────────────────────────
  {tier:3, emoji:"💪", word:"STRONG", blend:true,  start:"STR"},
  {tier:3, emoji:"🏞️", word:"STREAM", blend:true,  start:"STR"},
  {tier:3, emoji:"🎋", word:"STRAP",  blend:true,  start:"STR"},
  {tier:3, emoji:"🐾", word:"SCRATCH",blend:true,  start:"SCR"},
  {tier:3, emoji:"📜", word:"SCREAM", blend:true,  start:"SCR"},
  {tier:3, emoji:"💦", word:"SPLASH", blend:true,  start:"SPL"},
  {tier:3, emoji:"🌱", word:"SPLIT",  blend:true,  start:"SPL"},
  {tier:3, emoji:"🌸", word:"SPRING", blend:true,  start:"SPR"},
  {tier:3, emoji:"🧹", word:"SPREAD", blend:true,  start:"SPR"},

  // ── Tier 3: WH digraph (ONE sound — tricky!) ────────────────────────────────
  {tier:3, emoji:"🎡", word:"WHEEL",  blend:false, start:"WH"},
  {tier:3, emoji:"📅", word:"WHEN",   blend:false, start:"WH"},
  {tier:3, emoji:"❓", word:"WHERE",  blend:false, start:"WH"},
  {tier:3, emoji:"🌾", word:"WHEAT",  blend:false, start:"WH"},

  // ── Tier 3: More tricky digraph words ───────────────────────────────────────
  {tier:3, emoji:"🪑", word:"CHAIR",  blend:false, start:"CH"},
  {tier:3, emoji:"📊", word:"CHART",  blend:false, start:"CH"},
  {tier:3, emoji:"⏱️", word:"THEN",   blend:false, start:"TH"},
  {tier:3, emoji:"🌿", word:"THESE",  blend:false, start:"TH"},
  {tier:3, emoji:"🎭", word:"THEME",  blend:false, start:"TH"},

  // ── Tier 3: Extra clear blends for contrast ──────────────────────────────────
  {tier:3, emoji:"🥐", word:"CRISP",  blend:true,  start:"CR"},
  {tier:3, emoji:"🥶", word:"FROST",  blend:true,  start:"FR"},
  {tier:3, emoji:"🍀", word:"CLOVER", blend:true,  start:"CL"},
  {tier:3, emoji:"🥁", word:"DRUM",   blend:true,  start:"DR"},
  {tier:3, emoji:"🎺", word:"BRASS",  blend:true,  start:"BR"},
  {tier:3, emoji:"🌍", word:"GLOBE",  blend:true,  start:"GL"},
];
