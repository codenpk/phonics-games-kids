// First Sound — letter-sound matching bank
// tier: 1=common single consonants  2=remaining consonants + short vowels  3=digraphs + blends
// target: the picture that starts with the sound
// distractors: 3 pictures that do NOT start with the sound
window.FIRST_SOUND = [

  // ── Tier 1: Common single consonants ─────────────────────────────────────
  {tier:1, sound:"B", target:{emoji:"🐝",word:"BEE"},      distractors:[{emoji:"🐱",word:"CAT"},{emoji:"☀️",word:"SUN"},{emoji:"🐶",word:"DOG"}]},
  {tier:1, sound:"C", target:{emoji:"🐱",word:"CAT"},      distractors:[{emoji:"🐝",word:"BEE"},{emoji:"🐷",word:"PIG"},{emoji:"☀️",word:"SUN"}]},
  {tier:1, sound:"D", target:{emoji:"🐶",word:"DOG"},      distractors:[{emoji:"🐱",word:"CAT"},{emoji:"🐷",word:"PIG"},{emoji:"🐝",word:"BEE"}]},
  {tier:1, sound:"F", target:{emoji:"🐟",word:"FISH"},     distractors:[{emoji:"🐶",word:"DOG"},{emoji:"🐱",word:"CAT"},{emoji:"☀️",word:"SUN"}]},
  {tier:1, sound:"G", target:{emoji:"🐐",word:"GOAT"},     distractors:[{emoji:"🐟",word:"FISH"},{emoji:"🐶",word:"DOG"},{emoji:"🐷",word:"PIG"}]},
  {tier:1, sound:"H", target:{emoji:"🎩",word:"HAT"},      distractors:[{emoji:"🐐",word:"GOAT"},{emoji:"🐟",word:"FISH"},{emoji:"☀️",word:"SUN"}]},
  {tier:1, sound:"J", target:{emoji:"🍓",word:"JAM"},      distractors:[{emoji:"🎩",word:"HAT"},{emoji:"🐱",word:"CAT"},{emoji:"🐶",word:"DOG"}]},
  {tier:1, sound:"L", target:{emoji:"🦁",word:"LION"},     distractors:[{emoji:"🍓",word:"JAM"},{emoji:"🐶",word:"DOG"},{emoji:"☀️",word:"SUN"}]},
  {tier:1, sound:"M", target:{emoji:"🐒",word:"MONKEY"},   distractors:[{emoji:"🦁",word:"LION"},{emoji:"🐱",word:"CAT"},{emoji:"🐝",word:"BEE"}]},
  {tier:1, sound:"N", target:{emoji:"🕸️",word:"NET"},      distractors:[{emoji:"🐒",word:"MONKEY"},{emoji:"🐶",word:"DOG"},{emoji:"☀️",word:"SUN"}]},
  {tier:1, sound:"P", target:{emoji:"🐷",word:"PIG"},      distractors:[{emoji:"🕸️",word:"NET"},{emoji:"🐱",word:"CAT"},{emoji:"🐝",word:"BEE"}]},
  {tier:1, sound:"R", target:{emoji:"🐭",word:"RAT"},      distractors:[{emoji:"🐷",word:"PIG"},{emoji:"🐱",word:"CAT"},{emoji:"☀️",word:"SUN"}]},
  {tier:1, sound:"S", target:{emoji:"☀️",word:"SUN"},      distractors:[{emoji:"🐭",word:"RAT"},{emoji:"🐶",word:"DOG"},{emoji:"🐝",word:"BEE"}]},
  {tier:1, sound:"T", target:{emoji:"🐢",word:"TURTLE"},   distractors:[{emoji:"☀️",word:"SUN"},{emoji:"🐷",word:"PIG"},{emoji:"🐱",word:"CAT"}]},
  {tier:1, sound:"W", target:{emoji:"🐺",word:"WOLF"},     distractors:[{emoji:"🐢",word:"TURTLE"},{emoji:"☀️",word:"SUN"},{emoji:"🐷",word:"PIG"}]},

  // ── Tier 2: Remaining consonants + short vowel starters ──────────────────
  {tier:2, sound:"K", target:{emoji:"🪁",word:"KITE"},     distractors:[{emoji:"🐺",word:"WOLF"},{emoji:"☀️",word:"SUN"},{emoji:"🐶",word:"DOG"}]},
  {tier:2, sound:"V", target:{emoji:"🚐",word:"VAN"},      distractors:[{emoji:"🪁",word:"KITE"},{emoji:"🐱",word:"CAT"},{emoji:"🐝",word:"BEE"}]},
  {tier:2, sound:"Y", target:{emoji:"🍠",word:"YAM"},      distractors:[{emoji:"🚐",word:"VAN"},{emoji:"🐶",word:"DOG"},{emoji:"☀️",word:"SUN"}]},
  {tier:2, sound:"Z", target:{emoji:"🦓",word:"ZEBRA"},    distractors:[{emoji:"🍠",word:"YAM"},{emoji:"🐱",word:"CAT"},{emoji:"🐷",word:"PIG"}]},
  {tier:2, sound:"QU", target:{emoji:"👸",word:"QUEEN"},   distractors:[{emoji:"🦓",word:"ZEBRA"},{emoji:"🐶",word:"DOG"},{emoji:"🐝",word:"BEE"}]},
  {tier:2, sound:"A",  target:{emoji:"🐜",word:"ANT"},     distractors:[{emoji:"👸",word:"QUEEN"},{emoji:"🐱",word:"CAT"},{emoji:"☀️",word:"SUN"}]},
  {tier:2, sound:"E",  target:{emoji:"🥚",word:"EGG"},     distractors:[{emoji:"🐜",word:"ANT"},{emoji:"🐶",word:"DOG"},{emoji:"🐷",word:"PIG"}]},
  {tier:2, sound:"I",  target:{emoji:"🖊️",word:"INK"},     distractors:[{emoji:"🥚",word:"EGG"},{emoji:"🐱",word:"CAT"},{emoji:"☀️",word:"SUN"}]},
  {tier:2, sound:"O",  target:{emoji:"🐙",word:"OCTOPUS"}, distractors:[{emoji:"🖊️",word:"INK"},{emoji:"🐶",word:"DOG"},{emoji:"🐝",word:"BEE"}]},
  {tier:2, sound:"U",  target:{emoji:"☂️",word:"UMBRELLA"},distractors:[{emoji:"🐙",word:"OCTOPUS"},{emoji:"🐱",word:"CAT"},{emoji:"☀️",word:"SUN"}]},
  {tier:2, sound:"SH", target:{emoji:"🚢",word:"SHIP"},    distractors:[{emoji:"☂️",word:"UMBRELLA"},{emoji:"🐶",word:"DOG"},{emoji:"🐷",word:"PIG"}]},
  {tier:2, sound:"CH", target:{emoji:"🪑",word:"CHAIR"},   distractors:[{emoji:"🚢",word:"SHIP"},{emoji:"🐱",word:"CAT"},{emoji:"🐝",word:"BEE"}]},
  {tier:2, sound:"TH", target:{emoji:"👍",word:"THUMB"},   distractors:[{emoji:"🪑",word:"CHAIR"},{emoji:"☀️",word:"SUN"},{emoji:"🐶",word:"DOG"}]},
  {tier:2, sound:"WH", target:{emoji:"🐋",word:"WHALE"},   distractors:[{emoji:"👍",word:"THUMB"},{emoji:"🐷",word:"PIG"},{emoji:"🐱",word:"CAT"}]},

  // ── Tier 3: Consonant blends ──────────────────────────────────────────────
  {tier:3, sound:"BL", target:{emoji:"🔵",word:"BLUE"},    distractors:[{emoji:"🐋",word:"WHALE"},{emoji:"☀️",word:"SUN"},{emoji:"🐶",word:"DOG"}]},
  {tier:3, sound:"CL", target:{emoji:"☁️",word:"CLOUD"},   distractors:[{emoji:"🔵",word:"BLUE"},{emoji:"🐱",word:"CAT"},{emoji:"🐝",word:"BEE"}]},
  {tier:3, sound:"FL", target:{emoji:"🚩",word:"FLAG"},    distractors:[{emoji:"☁️",word:"CLOUD"},{emoji:"🐶",word:"DOG"},{emoji:"🐷",word:"PIG"}]},
  {tier:3, sound:"SL", target:{emoji:"🐌",word:"SLUG"},    distractors:[{emoji:"🚩",word:"FLAG"},{emoji:"🐱",word:"CAT"},{emoji:"☀️",word:"SUN"}]},
  {tier:3, sound:"BR", target:{emoji:"🧠",word:"BRAIN"},   distractors:[{emoji:"🐌",word:"SLUG"},{emoji:"🐶",word:"DOG"},{emoji:"🐝",word:"BEE"}]},
  {tier:3, sound:"CR", target:{emoji:"🦀",word:"CRAB"},    distractors:[{emoji:"🧠",word:"BRAIN"},{emoji:"☀️",word:"SUN"},{emoji:"🐷",word:"PIG"}]},
  {tier:3, sound:"FR", target:{emoji:"🐸",word:"FROG"},    distractors:[{emoji:"🦀",word:"CRAB"},{emoji:"🐱",word:"CAT"},{emoji:"🐶",word:"DOG"}]},
  {tier:3, sound:"GR", target:{emoji:"🍇",word:"GRAPE"},   distractors:[{emoji:"🐸",word:"FROG"},{emoji:"☀️",word:"SUN"},{emoji:"🐝",word:"BEE"}]},
  {tier:3, sound:"PR", target:{emoji:"🥨",word:"PRETZEL"}, distractors:[{emoji:"🍇",word:"GRAPE"},{emoji:"🐶",word:"DOG"},{emoji:"🐱",word:"CAT"}]},
  {tier:3, sound:"TR", target:{emoji:"🚂",word:"TRAIN"},   distractors:[{emoji:"🥨",word:"PRETZEL"},{emoji:"🐷",word:"PIG"},{emoji:"☀️",word:"SUN"}]},
  {tier:3, sound:"ST", target:{emoji:"⭐",word:"STAR"},    distractors:[{emoji:"🚂",word:"TRAIN"},{emoji:"🐱",word:"CAT"},{emoji:"🐝",word:"BEE"}]},
  {tier:3, sound:"SK", target:{emoji:"⛸️",word:"SKATE"},   distractors:[{emoji:"⭐",word:"STAR"},{emoji:"🐶",word:"DOG"},{emoji:"🐷",word:"PIG"}]},
  {tier:3, sound:"SP", target:{emoji:"🕷️",word:"SPIDER"},  distractors:[{emoji:"⛸️",word:"SKATE"},{emoji:"☀️",word:"SUN"},{emoji:"🐱",word:"CAT"}]},
  {tier:3, sound:"SW", target:{emoji:"🦢",word:"SWAN"},    distractors:[{emoji:"🕷️",word:"SPIDER"},{emoji:"🐶",word:"DOG"},{emoji:"🐝",word:"BEE"}]},
  {tier:3, sound:"SN", target:{emoji:"🐍",word:"SNAKE"},   distractors:[{emoji:"🦢",word:"SWAN"},{emoji:"🐱",word:"CAT"},{emoji:"☀️",word:"SUN"}]},
];
