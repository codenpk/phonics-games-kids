// R-Controlled Vowels — bossy R changes the vowel sound
// pattern: AR | ER | IR | OR | UR
// tier 1: AR and OR (most distinct)
// tier 2: ER and UR (sound alike — harder)
// tier 3: IR + mixed, including less common words
window.R_CONTROLLED = [

  // ── Tier 1: AR and OR ────────────────────────────────────────────────────────
  {tier:1, emoji:"⭐", word:"STAR",   pattern:"AR"},
  {tier:1, emoji:"🚗", word:"CAR",    pattern:"AR"},
  {tier:1, emoji:"🌿", word:"FARM",   pattern:"AR"},
  {tier:1, emoji:"🎸", word:"HARP",   pattern:"AR"},
  {tier:1, emoji:"🌑", word:"DARK",   pattern:"AR"},
  {tier:1, emoji:"🦈", word:"SHARK",  pattern:"AR"},
  {tier:1, emoji:"🌽", word:"CORN",   pattern:"OR"},
  {tier:1, emoji:"🍴", word:"FORK",   pattern:"OR"},
  {tier:1, emoji:"🏰", word:"FORT",   pattern:"OR"},
  {tier:1, emoji:"🐴", word:"HORSE",  pattern:"OR"},
  {tier:1, emoji:"🌳", word:"FOREST", pattern:"OR"},
  {tier:1, emoji:"🧭", word:"NORTH",  pattern:"OR"},

  // ── Tier 2: ER and UR (same sound) ──────────────────────────────────────────
  {tier:2, emoji:"🦋", word:"FERN",   pattern:"ER"},
  {tier:2, emoji:"🌾", word:"STERN",  pattern:"ER"},
  {tier:2, emoji:"🦅", word:"PERCH",  pattern:"ER"},
  {tier:2, emoji:"🌿", word:"HERB",   pattern:"ER"},
  {tier:2, emoji:"🧇", word:"SERVE",  pattern:"ER"},
  {tier:2, emoji:"☀️", word:"BURN",   pattern:"UR"},
  {tier:2, emoji:"🫙", word:"PURSE",  pattern:"UR"},
  {tier:2, emoji:"🐢", word:"TURTLE", pattern:"UR"},
  {tier:2, emoji:"🌷", word:"NURSE",  pattern:"UR"},
  {tier:2, emoji:"🪐", word:"TURN",   pattern:"UR"},
  {tier:2, emoji:"🌀", word:"SWIRL",  pattern:"UR"},

  // ── Tier 3: IR + mixed ───────────────────────────────────────────────────────
  {tier:3, emoji:"🐦", word:"BIRD",   pattern:"IR"},
  {tier:3, emoji:"👕", word:"SHIRT",  pattern:"IR"},
  {tier:3, emoji:"🔄", word:"STIR",   pattern:"IR"},
  {tier:3, emoji:"🌱", word:"FIRST",  pattern:"IR"},
  {tier:3, emoji:"💫", word:"SWIRL",  pattern:"IR"},
  {tier:3, emoji:"🎪", word:"CIRCUS", pattern:"IR"},
  {tier:3, emoji:"🌲", word:"BARK",   pattern:"AR"},
  {tier:3, emoji:"⚡", word:"STORM",  pattern:"OR"},
  {tier:3, emoji:"❄️", word:"WINTER", pattern:"ER"},
  {tier:3, emoji:"🐿️", word:"SQUIRT", pattern:"IR"},
  {tier:3, emoji:"🎯", word:"PURPLE", pattern:"UR"},
  {tier:3, emoji:"🧲", word:"CHIRP",  pattern:"IR"},
];
