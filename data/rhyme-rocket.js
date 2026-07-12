// Rhyme Rocket — rhyme pair bank
// tier: 1=simple CVC rhymes  2=longer/less-common rhymes  3=harder words+confusable distractors
// hardDistractors: share the answer's first letter (forces real phoneme matching in Hard mode)
window.RHYME_ROCKET = [

  // ── Tier 1: Simple CVC rhymes ─────────────────────────────────────────────
  {tier:1, emoji:"🐱", word:"CAT",   answer:{emoji:"🎩", word:"HAT"},   distractors:[{emoji:"🐶",word:"DOG"},{emoji:"☀️",word:"SUN"}],   hardDistractors:[{emoji:"🎩",word:"HOP"},{emoji:"🎩",word:"HAM"}]},
  {tier:1, emoji:"🐝", word:"BEE",   answer:{emoji:"🌳", word:"TREE"},  distractors:[{emoji:"🚗",word:"CAR"},{emoji:"🎩",word:"HAT"}],   hardDistractors:[{emoji:"🌳",word:"TRIP"},{emoji:"🌳",word:"TRAP"}]},
  {tier:1, emoji:"📌", word:"PIN",   answer:{emoji:"🗑️", word:"BIN"},   distractors:[{emoji:"🐱",word:"CAT"},{emoji:"🐶",word:"DOG"}],   hardDistractors:[{emoji:"🗑️",word:"BIG"},{emoji:"🗑️",word:"BAT"}]},
  {tier:1, emoji:"☀️", word:"SUN",   answer:{emoji:"🍞", word:"BUN"},   distractors:[{emoji:"🐱",word:"CAT"},{emoji:"📌",word:"PIN"}],   hardDistractors:[{emoji:"🍞",word:"BAG"},{emoji:"🍞",word:"BIT"}]},
  {tier:1, emoji:"✈️", word:"JET",   answer:{emoji:"🕸️", word:"NET"},   distractors:[{emoji:"☕",word:"CUP"},{emoji:"🐶",word:"DOG"}],   hardDistractors:[{emoji:"🕸️",word:"NOD"},{emoji:"🕸️",word:"NUT"}]},
  {tier:1, emoji:"🗺️", word:"MAP",   answer:{emoji:"🧢", word:"CAP"},   distractors:[{emoji:"🐶",word:"DOG"},{emoji:"🐝",word:"BEE"}],   hardDistractors:[{emoji:"🧢",word:"CUP"},{emoji:"🧢",word:"COT"}]},
  {tier:1, emoji:"🐔", word:"HEN",   answer:{emoji:"✏️", word:"PEN"},   distractors:[{emoji:"🐱",word:"CAT"},{emoji:"☀️",word:"SUN"}],   hardDistractors:[{emoji:"✏️",word:"PIG"},{emoji:"✏️",word:"POT"}]},
  {tier:1, emoji:"⚽", word:"BALL",  answer:{emoji:"🧱", word:"WALL"},  distractors:[{emoji:"🐱",word:"CAT"},{emoji:"☀️",word:"SUN"}],   hardDistractors:[{emoji:"🧱",word:"WEB"},{emoji:"🧱",word:"WIG"}]},
  {tier:1, emoji:"🐛", word:"BUG",   answer:{emoji:"☕", word:"MUG"},   distractors:[{emoji:"🐱",word:"CAT"},{emoji:"🐶",word:"DOG"}],   hardDistractors:[{emoji:"☕",word:"MOP"},{emoji:"☕",word:"MAN"}]},
  {tier:1, emoji:"🌀", word:"FAN",   answer:{emoji:"🥫", word:"CAN"},   distractors:[{emoji:"📌",word:"PIN"},{emoji:"🐶",word:"DOG"}],   hardDistractors:[{emoji:"🥫",word:"CUP"},{emoji:"🥫",word:"COB"}]},
  {tier:1, emoji:"🏃", word:"RUN",   answer:{emoji:"☀️", word:"SUN"},   distractors:[{emoji:"📌",word:"PIN"},{emoji:"🚌",word:"BUS"}],   hardDistractors:[{emoji:"☀️",word:"SIT"},{emoji:"☀️",word:"SAP"}]},

  // ── Tier 2: Longer / less-common rhymes ───────────────────────────────────
  {tier:2, emoji:"🪵", word:"LOG",   answer:{emoji:"🐸", word:"FROG"},  distractors:[{emoji:"🐱",word:"CAT"},{emoji:"🚌",word:"BUS"}],   hardDistractors:[{emoji:"🐸",word:"FIG"},{emoji:"🐸",word:"FAN"}]},
  {tier:2, emoji:"📦", word:"BOX",   answer:{emoji:"🦊", word:"FOX"},   distractors:[{emoji:"🐝",word:"BEE"},{emoji:"📌",word:"PIN"}],   hardDistractors:[{emoji:"🦊",word:"FAN"},{emoji:"🦊",word:"FIT"}]},
  {tier:2, emoji:"🎂", word:"CAKE",  answer:{emoji:"🏞️", word:"LAKE"},  distractors:[{emoji:"🐶",word:"DOG"},{emoji:"📌",word:"PIN"}],   hardDistractors:[{emoji:"🏞️",word:"LEG"},{emoji:"🏞️",word:"LIP"}]},
  {tier:2, emoji:"🌧️", word:"RAIN",  answer:{emoji:"🚂", word:"TRAIN"}, distractors:[{emoji:"🚌",word:"BUS"},{emoji:"🐱",word:"CAT"}],   hardDistractors:[{emoji:"🚂",word:"TRIP"},{emoji:"🚂",word:"TRAP"}]},
  {tier:2, emoji:"🌙", word:"MOON",  answer:{emoji:"🥄", word:"SPOON"}, distractors:[{emoji:"🐱",word:"CAT"},{emoji:"🐶",word:"DOG"}],   hardDistractors:[{emoji:"🥄",word:"SKIP"},{emoji:"🥄",word:"SLUG"}]},
  {tier:2, emoji:"🐟", word:"FISH",  answer:{emoji:"🍽️", word:"DISH"},  distractors:[{emoji:"🐱",word:"CAT"},{emoji:"🚌",word:"BUS"}],   hardDistractors:[{emoji:"🍽️",word:"DROP"},{emoji:"🍽️",word:"DENT"}]},
  {tier:2, emoji:"👑", word:"KING",  answer:{emoji:"💍", word:"RING"},  distractors:[{emoji:"🐶",word:"DOG"},{emoji:"🌀",word:"FAN"}],   hardDistractors:[{emoji:"💍",word:"RAN"},{emoji:"💍",word:"RUG"}]},
  {tier:2, emoji:"⛵", word:"BOAT",  answer:{emoji:"🐐", word:"GOAT"},  distractors:[{emoji:"🚗",word:"CAR"},{emoji:"📌",word:"PIN"}],   hardDistractors:[{emoji:"🐐",word:"GUN"},{emoji:"🐐",word:"GAP"}]},
  {tier:2, emoji:"🦆", word:"DUCK",  answer:{emoji:"🚛", word:"TRUCK"}, distractors:[{emoji:"🐝",word:"BEE"},{emoji:"🐱",word:"CAT"}],   hardDistractors:[{emoji:"🚛",word:"TRAP"},{emoji:"🚛",word:"TWIG"}]},
  {tier:2, emoji:"⭐", word:"STAR",  answer:{emoji:"🚗", word:"CAR"},   distractors:[{emoji:"🐶",word:"DOG"},{emoji:"🐝",word:"BEE"}],   hardDistractors:[{emoji:"🚗",word:"CUP"},{emoji:"🚗",word:"CAP"}]},
  {tier:2, emoji:"🏠", word:"HOUSE", answer:{emoji:"🖱️", word:"MOUSE"}, distractors:[{emoji:"🚗",word:"CAR"},{emoji:"📌",word:"PIN"}],   hardDistractors:[{emoji:"🖱️",word:"MOP"},{emoji:"🖱️",word:"MAN"}]},
  {tier:2, emoji:"🕐", word:"CLOCK", answer:{emoji:"🧦", word:"SOCK"},  distractors:[{emoji:"🐱",word:"CAT"},{emoji:"📌",word:"PIN"}],   hardDistractors:[{emoji:"🧦",word:"SIT"},{emoji:"🧦",word:"SUB"}]},
  {tier:2, emoji:"🐷", word:"PIG",   answer:{emoji:"🌿", word:"TWIG"},  distractors:[{emoji:"🐱",word:"CAT"},{emoji:"☀️",word:"SUN"}],   hardDistractors:[{emoji:"🌿",word:"TOP"},{emoji:"🌿",word:"TAP"}]},
  {tier:2, emoji:"🌊", word:"SEA",   answer:{emoji:"🐝", word:"BEE"},   distractors:[{emoji:"🚗",word:"CAR"},{emoji:"📌",word:"PIN"}],   hardDistractors:[{emoji:"🐝",word:"BAG"},{emoji:"🐝",word:"BIT"}]},

  // ── Tier 3: Harder words + confusable distractors ─────────────────────────
  {tier:3, emoji:"🌬️", word:"BREEZE", answer:{emoji:"🧀", word:"CHEESE"}, distractors:[{emoji:"🚗",word:"CAR"},{emoji:"🐶",word:"DOG"}],   hardDistractors:[{emoji:"🧀",word:"CHOP"},{emoji:"🧀",word:"CHIN"}]},
  {tier:3, emoji:"🪨", word:"STONE",  answer:{emoji:"🦴", word:"BONE"},   distractors:[{emoji:"🍕",word:"PIZZA"},{emoji:"🐱",word:"CAT"}],  hardDistractors:[{emoji:"🦴",word:"BIG"},{emoji:"🦴",word:"BAT"}]},
  {tier:3, emoji:"🌸", word:"SPRING", answer:{emoji:"💍", word:"RING"},   distractors:[{emoji:"🐱",word:"CAT"},{emoji:"☀️",word:"SUN"}],   hardDistractors:[{emoji:"💍",word:"ROW"},{emoji:"💍",word:"RUN"}]},
  {tier:3, emoji:"🎠", word:"BRIGHT", answer:{emoji:"💡", word:"LIGHT"},  distractors:[{emoji:"🐱",word:"CAT"},{emoji:"🚗",word:"CAR"}],   hardDistractors:[{emoji:"💡",word:"LOG"},{emoji:"💡",word:"LAP"}]},
  {tier:3, emoji:"⛄", word:"SNOW",   answer:{emoji:"🌈", word:"FLOW"},   distractors:[{emoji:"🐱",word:"CAT"},{emoji:"☀️",word:"SUN"}],   hardDistractors:[{emoji:"🌈",word:"FAN"},{emoji:"🌈",word:"FIG"}]},
  {tier:3, emoji:"🍇", word:"GRAPES", answer:{emoji:"🥊", word:"SHAPES"}, distractors:[{emoji:"🐶",word:"DOG"},{emoji:"📌",word:"PIN"}],   hardDistractors:[{emoji:"🥊",word:"SHOP"},{emoji:"🥊",word:"SHIP"}]},
  {tier:3, emoji:"🦅", word:"FLIGHT", answer:{emoji:"🌙", word:"NIGHT"},  distractors:[{emoji:"🐱",word:"CAT"},{emoji:"🚗",word:"CAR"}],   hardDistractors:[{emoji:"🌙",word:"NUT"},{emoji:"🌙",word:"NAP"}]},
  {tier:3, emoji:"🎨", word:"BLUE",   answer:{emoji:"👟", word:"SHOE"},   distractors:[{emoji:"🐶",word:"DOG"},{emoji:"☀️",word:"SUN"}],   hardDistractors:[{emoji:"👟",word:"SIT"},{emoji:"👟",word:"SAP"}]},
  {tier:3, emoji:"🎯", word:"FOUND",  answer:{emoji:"🔊", word:"SOUND"},  distractors:[{emoji:"🐱",word:"CAT"},{emoji:"📌",word:"PIN"}],   hardDistractors:[{emoji:"🔊",word:"SOCK"},{emoji:"🔊",word:"SLUG"}]},
  {tier:3, emoji:"🌺", word:"DREAM",  answer:{emoji:"🍦", word:"CREAM"},  distractors:[{emoji:"🐶",word:"DOG"},{emoji:"🚗",word:"CAR"}],   hardDistractors:[{emoji:"🍦",word:"CRAB"},{emoji:"🍦",word:"CLIP"}]},
];
