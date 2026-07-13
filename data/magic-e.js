// Magic E — CVC words that become CVCe words with a silent E
// Mechanic: show cvc word; player picks which CVCe word it becomes
// distractors: 2 other CVCe words that are wrong answers
window.MAGIC_E = [

  // ── Tier 1: A-E pairs ────────────────────────────────────────────────────
  {tier:1, cvc:{emoji:"🎩",word:"HAT"}, cvce:{emoji:"😤",word:"HATE"}, distractors:[{emoji:"🕐",word:"LATE"},{emoji:"🎂",word:"CAKE"}]},
  {tier:1, cvc:{emoji:"🧢",word:"CAP"}, cvce:{emoji:"🦸",word:"CAPE"}, distractors:[{emoji:"📏",word:"TAPE"},{emoji:"🦁",word:"MANE"}]},
  {tier:1, cvc:{emoji:"🚰",word:"TAP"}, cvce:{emoji:"📏",word:"TAPE"}, distractors:[{emoji:"🦸",word:"CAPE"},{emoji:"📖",word:"TALE"}]},
  {tier:1, cvc:{emoji:"🧹",word:"MAT"}, cvce:{emoji:"🤝",word:"MATE"}, distractors:[{emoji:"🦁",word:"MANE"},{emoji:"😤",word:"HATE"}]},
  {tier:1, cvc:{emoji:"🥫",word:"CAN"}, cvce:{emoji:"🦯",word:"CANE"}, distractors:[{emoji:"🦸",word:"CAPE"},{emoji:"🎂",word:"CAKE"}]},
  {tier:1, cvc:{emoji:"🐷",word:"FAT"}, cvce:{emoji:"⭐",word:"FATE"}, distractors:[{emoji:"😊",word:"FACE"},{emoji:"🎭",word:"FAKE"}]},
  {tier:1, cvc:{emoji:"👨",word:"MAN"}, cvce:{emoji:"🦁",word:"MANE"}, distractors:[{emoji:"🤝",word:"MATE"},{emoji:"📏",word:"TAPE"}]},

  // ── Tier 2: I-E and O-E pairs ─────────────────────────────────────────────
  {tier:2, cvc:{emoji:"📌",word:"PIN"}, cvce:{emoji:"🌲",word:"PINE"}, distractors:[{emoji:"📚",word:"PILE"},{emoji:"🥧",word:"LIME"}]},
  {tier:2, cvc:{emoji:"🕯️",word:"DIM"}, cvce:{emoji:"💰",word:"DIME"}, distractors:[{emoji:"🤿",word:"DIVE"},{emoji:"🎵",word:"DINE"}]},
  {tier:2, cvc:{emoji:"😢",word:"RIP"}, cvce:{emoji:"🍎",word:"RIPE"}, distractors:[{emoji:"🐎",word:"RIDE"},{emoji:"🍚",word:"RICE"}]},
  {tier:2, cvc:{emoji:"💬",word:"BIT"}, cvce:{emoji:"🦷",word:"BITE"}, distractors:[{emoji:"🚲",word:"BIKE"},{emoji:"🪁",word:"KITE"}]},
  {tier:2, cvc:{emoji:"🐰",word:"HOP"}, cvce:{emoji:"🌈",word:"HOPE"}, distractors:[{emoji:"🏠",word:"HOME"},{emoji:"🕳️",word:"HOLE"}]},
  {tier:2, cvc:{emoji:"🦹",word:"ROB"}, cvce:{emoji:"👘",word:"ROBE"}, distractors:[{emoji:"🚂",word:"RODE"},{emoji:"🌹",word:"ROSE"}]},
  {tier:2, cvc:{emoji:"❌",word:"NOT"}, cvce:{emoji:"📝",word:"NOTE"}, distractors:[{emoji:"👃",word:"NOSE"},{emoji:"🌹",word:"ROSE"}]},

  // ── Tier 3: U-E and mixed ─────────────────────────────────────────────────
  {tier:3, cvc:{emoji:"🐻",word:"CUB"}, cvce:{emoji:"🎲",word:"CUBE"}, distractors:[{emoji:"💊",word:"CURE"},{emoji:"😊",word:"CUTE"}]},
  {tier:3, cvc:{emoji:"🛁",word:"TUB"}, cvce:{emoji:"📺",word:"TUBE"}, distractors:[{emoji:"🎵",word:"TUNE"},{emoji:"🏜️",word:"DUNE"}]},
  {tier:3, cvc:{emoji:"✂️",word:"CUT"}, cvce:{emoji:"😊",word:"CUTE"}, distractors:[{emoji:"🎲",word:"CUBE"},{emoji:"💊",word:"CURE"}]},
  {tier:3, cvc:{emoji:"🤗",word:"HUG"}, cvce:{emoji:"🦛",word:"HUGE"}, distractors:[{emoji:"🏠",word:"HOME"},{emoji:"🌈",word:"HOPE"}]},
  {tier:3, cvc:{emoji:"🧰",word:"KIT"}, cvce:{emoji:"🪁",word:"KITE"}, distractors:[{emoji:"🚲",word:"BIKE"},{emoji:"🦷",word:"BITE"}]},
  {tier:3, cvc:{emoji:"🪑",word:"SIT"}, cvce:{emoji:"🌐",word:"SITE"}, distractors:[{emoji:"🦷",word:"BITE"},{emoji:"🪁",word:"KITE"}]},
];
