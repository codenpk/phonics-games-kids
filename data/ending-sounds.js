// Ending Sounds — find the word that ends with the same sound
// target: the word whose ending sound to match
// answer: the word that shares the ending sound
// distractors: 2 words with different ending sounds
window.ENDING_SOUNDS = [

  // ── Tier 1: simple CVC ending sounds ──────────────────────────────────────
  // ends in /t/
  {tier:1, target:{emoji:"🐱",word:"CAT"}, sound:"/t/",
    answer:{emoji:"🐀",word:"RAT"},
    distractors:[{emoji:"🐶",word:"DOG"},{emoji:"🐝",word:"BEE"}]},

  {tier:1, target:{emoji:"🐠",word:"NET"}, sound:"/t/",
    answer:{emoji:"🐾",word:"PET"},
    distractors:[{emoji:"🌀",word:"FAN"},{emoji:"🏠",word:"CUP"}]},

  // ends in /g/
  {tier:1, target:{emoji:"🐛",word:"BUG"}, sound:"/g/",
    answer:{emoji:"🦌",word:"JUG"},
    distractors:[{emoji:"☀️",word:"SUN"},{emoji:"🐱",word:"CAT"}]},

  {tier:1, target:{emoji:"🐷",word:"PIG"}, sound:"/g/",
    answer:{emoji:"⛏️",word:"DIG"},
    distractors:[{emoji:"📌",word:"PIN"},{emoji:"🎩",word:"HAT"}]},

  // ends in /n/
  {tier:1, target:{emoji:"🥫",word:"CAN"}, sound:"/n/",
    answer:{emoji:"🙍",word:"MAN"},
    distractors:[{emoji:"🐱",word:"CAT"},{emoji:"🐶",word:"DOG"}]},

  {tier:1, target:{emoji:"☀️",word:"SUN"}, sound:"/n/",
    answer:{emoji:"🍞",word:"BUN"},
    distractors:[{emoji:"🏃",word:"RUN"},{emoji:"🐛",word:"BUG"}]},

  // ends in /p/
  {tier:1, target:{emoji:"🗺️",word:"MAP"}, sound:"/p/",
    answer:{emoji:"🧢",word:"CAP"},
    distractors:[{emoji:"🐱",word:"CAT"},{emoji:"🌀",word:"FAN"}]},

  {tier:1, target:{emoji:"☕",word:"CUP"}, sound:"/p/",
    answer:{emoji:"🛁",word:"TUB"},
    distractors:[{emoji:"🎯",word:"TOP"},{emoji:"🐛",word:"BUG"}]},

  // ends in /k/
  {tier:1, target:{emoji:"🕐",word:"CLOCK"}, sound:"/k/",
    answer:{emoji:"🦆",word:"DUCK"},
    distractors:[{emoji:"🐟",word:"FISH"},{emoji:"🌀",word:"FAN"}]},

  // ── Tier 2: blends and digraphs ──────────────────────────────────────────────
  // ends in /sh/
  {tier:2, target:{emoji:"🐟",word:"FISH"}, sound:"/sh/",
    answer:{emoji:"💰",word:"CASH"},
    distractors:[{emoji:"🐸",word:"FROG"},{emoji:"🎵",word:"RING"}]},

  {tier:2, target:{emoji:"🍽️",word:"DISH"}, sound:"/sh/",
    answer:{emoji:"💨",word:"LASH"},
    distractors:[{emoji:"💡",word:"LIGHT"},{emoji:"🐱",word:"CAT"}]},

  // ends in /ch/
  {tier:2, target:{emoji:"⏱️",word:"WATCH"}, sound:"/ch/",
    answer:{emoji:"🛋️",word:"COUCH"},
    distractors:[{emoji:"🚢",word:"SHIP"},{emoji:"🎩",word:"HAT"}]},

  // ends in /ng/
  {tier:2, target:{emoji:"💍",word:"RING"}, sound:"/ng/",
    answer:{emoji:"🎵",word:"SING"},
    distractors:[{emoji:"🌙",word:"MOON"},{emoji:"🐟",word:"FISH"}]},

  {tier:2, target:{emoji:"🎵",word:"SONG"}, sound:"/ng/",
    answer:{emoji:"💪",word:"LONG"},
    distractors:[{emoji:"🐱",word:"CAT"},{emoji:"⭐",word:"STAR"}]},

  // ends in /mp/
  {tier:2, target:{emoji:"🪣",word:"PUMP"}, sound:"/mp/",
    answer:{emoji:"🏕️",word:"CAMP"},
    distractors:[{emoji:"☀️",word:"SUN"},{emoji:"🔔",word:"BELL"}]},

  // ends in /st/
  {tier:2, target:{emoji:"🏰", word:"NEST"}, sound:"/st/",
    answer:{emoji:"🎁",word:"BEST"},
    distractors:[{emoji:"🌙",word:"MOON"},{emoji:"🐟",word:"FISH"}]},

  // ── Tier 3: longer words + vowel teams ───────────────────────────────────────
  // ends in /ight/
  {tier:3, target:{emoji:"🌙",word:"NIGHT"}, sound:"/ight/",
    answer:{emoji:"💡",word:"LIGHT"},
    distractors:[{emoji:"🌧️",word:"RAIN"},{emoji:"🐸",word:"FROG"}]},

  {tier:3, target:{emoji:"✈️",word:"FLIGHT"}, sound:"/ight/",
    answer:{emoji:"⚔️",word:"FIGHT"},
    distractors:[{emoji:"🚂",word:"TRAIN"},{emoji:"🌊",word:"WAVE"}]},

  // ends in /ain/
  {tier:3, target:{emoji:"🌧️",word:"RAIN"}, sound:"/ain/",
    answer:{emoji:"🚂",word:"TRAIN"},
    distractors:[{emoji:"🌙",word:"MOON"},{emoji:"🐟",word:"FISH"}]},

  // ends in /eam/
  {tier:3, target:{emoji:"💭",word:"DREAM"}, sound:"/eam/",
    answer:{emoji:"☁️",word:"STEAM"},
    distractors:[{emoji:"🌧️",word:"RAIN"},{emoji:"💡",word:"LIGHT"}]},

  // ends in /ound/
  {tier:3, target:{emoji:"🐕",word:"HOUND"}, sound:"/ound/",
    answer:{emoji:"🏔️",word:"MOUND"},
    distractors:[{emoji:"🌙",word:"MOON"},{emoji:"🐱",word:"CAT"}]},

  // ends in /own/
  {tier:3, target:{emoji:"🏘️",word:"TOWN"}, sound:"/own/",
    answer:{emoji:"👑",word:"CROWN"},
    distractors:[{emoji:"🌧️",word:"RAIN"},{emoji:"🐶",word:"DOG"}]},
];
