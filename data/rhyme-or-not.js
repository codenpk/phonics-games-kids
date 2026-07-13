// Rhyme or No Rhyme — do these two words rhyme? true/false
window.RHYME_OR_NOT = [

  // ── Tier 1: obvious CVC pairs ────────────────────────────────────────────────
  {tier:1, w1:{emoji:"🐱",word:"CAT"}, w2:{emoji:"🎩",word:"HAT"},   rhymes:true},
  {tier:1, w1:{emoji:"🐱",word:"CAT"}, w2:{emoji:"🐶",word:"DOG"},   rhymes:false},
  {tier:1, w1:{emoji:"☀️",word:"SUN"}, w2:{emoji:"🍞",word:"BUN"},   rhymes:true},
  {tier:1, w1:{emoji:"☀️",word:"SUN"}, w2:{emoji:"🐟",word:"FISH"},  rhymes:false},
  {tier:1, w1:{emoji:"🐛",word:"BUG"}, w2:{emoji:"🦌",word:"JUG"},   rhymes:true},
  {tier:1, w1:{emoji:"🐛",word:"BUG"}, w2:{emoji:"🐸",word:"FROG"},  rhymes:false},
  {tier:1, w1:{emoji:"🐷",word:"PIG"}, w2:{emoji:"⛏️",word:"DIG"},   rhymes:true},
  {tier:1, w1:{emoji:"🐷",word:"PIG"}, w2:{emoji:"🏃",word:"RUN"},   rhymes:false},
  {tier:1, w1:{emoji:"🐸",word:"HOP"}, w2:{emoji:"🛑",word:"STOP"},  rhymes:true},
  {tier:1, w1:{emoji:"🐸",word:"HOP"}, w2:{emoji:"🌙",word:"MOON"},  rhymes:false},
  {tier:1, w1:{emoji:"🐝",word:"BEE"}, w2:{emoji:"🌳",word:"TREE"},  rhymes:true},
  {tier:1, w1:{emoji:"🐝",word:"BEE"}, w2:{emoji:"🌺",word:"ROSE"},  rhymes:false},
  {tier:1, w1:{emoji:"🥫",word:"CAN"}, w2:{emoji:"🙍",word:"MAN"},   rhymes:true},
  {tier:1, w1:{emoji:"🥫",word:"CAN"}, w2:{emoji:"🌳",word:"TREE"},  rhymes:false},

  // ── Tier 2: blends + digraphs ────────────────────────────────────────────────
  {tier:2, w1:{emoji:"🐟",word:"FISH"}, w2:{emoji:"💰",word:"DISH"},  rhymes:true},
  {tier:2, w1:{emoji:"🐟",word:"FISH"}, w2:{emoji:"🐕",word:"RUSH"},  rhymes:false},
  {tier:2, w1:{emoji:"🚂",word:"TRAIN"},w2:{emoji:"🌧️",word:"RAIN"},  rhymes:true},
  {tier:2, w1:{emoji:"🚂",word:"TRAIN"},w2:{emoji:"🌊",word:"WAVE"},  rhymes:false},
  {tier:2, w1:{emoji:"🐸",word:"FROG"}, w2:{emoji:"🪵",word:"LOG"},   rhymes:true},
  {tier:2, w1:{emoji:"🐸",word:"FROG"}, w2:{emoji:"🍃",word:"STEM"},  rhymes:false},
  {tier:2, w1:{emoji:"⭐",word:"STAR"}, w2:{emoji:"🚗",word:"CAR"},   rhymes:true},
  {tier:2, w1:{emoji:"⭐",word:"STAR"}, w2:{emoji:"🌙",word:"MOON"},  rhymes:false},
  {tier:2, w1:{emoji:"💡",word:"LIGHT"},w2:{emoji:"🌙",word:"NIGHT"}, rhymes:true},
  {tier:2, w1:{emoji:"💡",word:"LIGHT"},w2:{emoji:"🌊",word:"LAKE"},  rhymes:false},
  {tier:2, w1:{emoji:"🐍",word:"SNAKE"},w2:{emoji:"🎂",word:"CAKE"},  rhymes:true},
  {tier:2, w1:{emoji:"🐍",word:"SNAKE"},w2:{emoji:"🏠",word:"HOME"},  rhymes:false},

  // ── Tier 3: longer words + tricky pairs ─────────────────────────────────────
  {tier:3, w1:{emoji:"🌩️",word:"THUNDER"},w2:{emoji:"🤔",word:"WONDER"},  rhymes:true},
  {tier:3, w1:{emoji:"🌩️",word:"THUNDER"},w2:{emoji:"🌊",word:"WATER"},   rhymes:false},
  {tier:3, w1:{emoji:"🦋",word:"BUTTER"}, w2:{emoji:"🧡",word:"UTTER"},   rhymes:true},
  {tier:3, w1:{emoji:"🦋",word:"BUTTER"}, w2:{emoji:"📖",word:"LETTER"},   rhymes:false},
  {tier:3, w1:{emoji:"📸",word:"PHONE"},  w2:{emoji:"🏠",word:"STONE"},    rhymes:true},
  {tier:3, w1:{emoji:"📸",word:"PHONE"},  w2:{emoji:"🐶",word:"BONE"},     rhymes:true},
  {tier:3, w1:{emoji:"🎪",word:"CIRCUS"}, w2:{emoji:"🐟",word:"FISH"},     rhymes:false},
  {tier:3, w1:{emoji:"🌈",word:"RAINBOW"},w2:{emoji:"⛓️",word:"CHAIN"},    rhymes:false},
  {tier:3, w1:{emoji:"🍓",word:"BERRY"},  w2:{emoji:"🍒",word:"CHERRY"},   rhymes:true},
  {tier:3, w1:{emoji:"🍓",word:"BERRY"},  w2:{emoji:"🍎",word:"APPLE"},    rhymes:false},
];
