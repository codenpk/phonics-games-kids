// Word Sort — sort words into their word families / rime pattern
// Each entry has a word + its family. Game picks 2-3 families per round.
// tier 1: simple CVC families (-AT, -IG, -AN, -OP, -UN, -ET)
// tier 2: CVCe / longer families (-AKE, -INE, -OAT, -ING, -ARK)
// tier 3: vowel team / blend families (-IGHT, -AIN, -EAM, -OWN, -ONG)
window.WORD_SORT = [

  // ── Tier 1: CVC families ────────────────────────────────────────────────────
  // -AT
  {tier:1, emoji:"🐱", word:"CAT",  family:"-AT"},
  {tier:1, emoji:"🎩", word:"HAT",  family:"-AT"},
  {tier:1, emoji:"🦇", word:"BAT",  family:"-AT"},
  {tier:1, emoji:"🐀", word:"RAT",  family:"-AT"},
  // -IG
  {tier:1, emoji:"🐷", word:"PIG",  family:"-IG"},
  {tier:1, emoji:"🔆", word:"BIG",  family:"-IG"},
  {tier:1, emoji:"⛏️", word:"DIG",  family:"-IG"},
  {tier:1, emoji:"🌿", word:"JIG",  family:"-IG"},
  // -AN
  {tier:1, emoji:"🥫", word:"CAN",  family:"-AN"},
  {tier:1, emoji:"🌀", word:"FAN",  family:"-AN"},
  {tier:1, emoji:"🙍", word:"MAN",  family:"-AN"},
  {tier:1, emoji:"🍳", word:"PAN",  family:"-AN"},
  // -OP
  {tier:1, emoji:"🐇", word:"HOP",  family:"-OP"},
  {tier:1, emoji:"🎯", word:"TOP",  family:"-OP"},
  {tier:1, emoji:"🧹", word:"MOP",  family:"-OP"},
  {tier:1, emoji:"⏰", word:"POP",  family:"-OP"},
  // -UN
  {tier:1, emoji:"☀️", word:"SUN",  family:"-UN"},
  {tier:1, emoji:"🍞", word:"BUN",  family:"-UN"},
  {tier:1, emoji:"🏃", word:"RUN",  family:"-UN"},
  {tier:1, emoji:"🔫", word:"GUN",  family:"-UN"},
  // -ET
  {tier:1, emoji:"🕸️", word:"NET",  family:"-ET"},
  {tier:1, emoji:"🐾", word:"PET",  family:"-ET"},
  {tier:1, emoji:"💧", word:"WET",  family:"-ET"},
  {tier:1, emoji:"🃏", word:"SET",  family:"-ET"},

  // ── Tier 2: CVCe / longer families ─────────────────────────────────────────
  // -AKE
  {tier:2, emoji:"🎂", word:"CAKE",  family:"-AKE"},
  {tier:2, emoji:"🏞️", word:"LAKE",  family:"-AKE"},
  {tier:2, emoji:"🐍", word:"SNAKE", family:"-AKE"},
  {tier:2, emoji:"🫱", word:"TAKE",  family:"-AKE"},
  // -INE
  {tier:2, emoji:"🌲", word:"PINE",  family:"-INE"},
  {tier:2, emoji:"💎", word:"MINE",  family:"-INE"},
  {tier:2, emoji:"🦷", word:"SHINE", family:"-INE"},
  {tier:2, emoji:"🍷", word:"WINE",  family:"-INE"},
  // -OAT
  {tier:2, emoji:"⛵", word:"BOAT",  family:"-OAT"},
  {tier:2, emoji:"🐐", word:"GOAT",  family:"-OAT"},
  {tier:2, emoji:"🧥", word:"COAT",  family:"-OAT"},
  {tier:2, emoji:"🗒️", word:"NOTE",  family:"-OTE"},
  // -ING
  {tier:2, emoji:"💍", word:"RING",  family:"-ING"},
  {tier:2, emoji:"🎵", word:"SING",  family:"-ING"},
  {tier:2, emoji:"👑", word:"KING",  family:"-ING"},
  {tier:2, emoji:"🪁", word:"SLING", family:"-ING"},
  // -ARK
  {tier:2, emoji:"🏞️", word:"PARK",  family:"-ARK"},
  {tier:2, emoji:"🌑", word:"DARK",  family:"-ARK"},
  {tier:2, emoji:"🐶", word:"BARK",  family:"-ARK"},
  {tier:2, emoji:"🦈", word:"SHARK", family:"-ARK"},

  // ── Tier 3: vowel team / blend families ────────────────────────────────────
  // -IGHT
  {tier:3, emoji:"🌙", word:"NIGHT",  family:"-IGHT"},
  {tier:3, emoji:"💡", word:"LIGHT",  family:"-IGHT"},
  {tier:3, emoji:"✈️", word:"FLIGHT", family:"-IGHT"},
  {tier:3, emoji:"⚔️", word:"FIGHT",  family:"-IGHT"},
  // -AIN
  {tier:3, emoji:"🚂", word:"TRAIN",  family:"-AIN"},
  {tier:3, emoji:"🧠", word:"BRAIN",  family:"-AIN"},
  {tier:3, emoji:"🌧️", word:"RAIN",   family:"-AIN"},
  {tier:3, emoji:"🔗", word:"CHAIN",  family:"-AIN"},
  // -EAM
  {tier:3, emoji:"🍦", word:"CREAM",  family:"-EAM"},
  {tier:3, emoji:"💭", word:"DREAM",  family:"-EAM"},
  {tier:3, emoji:"☁️", word:"STEAM",  family:"-EAM"},
  {tier:3, emoji:"🫁", word:"SCREAM", family:"-EAM"},
  // -OWN
  {tier:3, emoji:"🏘️", word:"TOWN",   family:"-OWN"},
  {tier:3, emoji:"👑", word:"CROWN",  family:"-OWN"},
  {tier:3, emoji:"🟤", word:"BROWN",  family:"-OWN"},
  {tier:3, emoji:"🤡", word:"CLOWN",  family:"-OWN"},
  // -ONG
  {tier:3, emoji:"🎵", word:"SONG",   family:"-ONG"},
  {tier:3, emoji:"💪", word:"STRONG", family:"-ONG"},
  {tier:3, emoji:"⏳", word:"LONG",   family:"-ONG"},
  {tier:3, emoji:"🔔", word:"GONG",   family:"-ONG"},
];

// Pairs of families used per round (2 families per round in game)
window.WORD_SORT_ROUNDS = {
  1: [["-AT","-IG"],["-AN","-OP"],["-UN","-ET"]],
  2: [["-AKE","-INE"],["-OAT","-ING"],["-ARK","-AKE"]],
  3: [["-IGHT","-AIN"],["-EAM","-OWN"],["-ONG","-IGHT"]],
};
