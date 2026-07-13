// Diphthong Dash — OI / OY / OU / OW words
// Tier 1: OI vs OY only (same /ɔɪ/ sound, different spelling position)
// Tier 2: OU vs OW only (same /aʊ/ sound, different spelling)
// Tier 3: all 4 patterns mixed
window.DIPHTHONGS = [

  // ── OI words (middle of word) ────────────────────────────────────────────
  {tier:1, emoji:"🪙", word:"COIN",  pattern:"OI"},
  {tier:1, emoji:"🧅", word:"FOIL",  pattern:"OI"},
  {tier:1, emoji:"🛢️", word:"OIL",   pattern:"OI"},
  {tier:1, emoji:"🫧", word:"BOIL",  pattern:"OI"},
  {tier:1, emoji:"🌱", word:"SOIL",  pattern:"OI"},
  {tier:1, emoji:"🤝", word:"JOIN",  pattern:"OI"},
  {tier:1, emoji:"👆", word:"POINT", pattern:"OI"},
  {tier:1, emoji:"🌀", word:"COIL",  pattern:"OI"},
  {tier:1, emoji:"🎤", word:"VOICE", pattern:"OI"},
  {tier:1, emoji:"📢", word:"NOISE", pattern:"OI"},

  // ── OY words (end of word / before suffix) ────────────────────────────────
  {tier:1, emoji:"👦", word:"BOY",    pattern:"OY"},
  {tier:1, emoji:"🧸", word:"TOY",    pattern:"OY"},
  {tier:1, emoji:"😊", word:"JOY",    pattern:"OY"},
  {tier:1, emoji:"🫘", word:"SOY",    pattern:"OY"},
  {tier:1, emoji:"🎉", word:"ENJOY",  pattern:"OY"},
  {tier:1, emoji:"😤", word:"ANNOY",  pattern:"OY"},
  {tier:1, emoji:"👑", word:"ROYAL",  pattern:"OY"},
  {tier:1, emoji:"🦪", word:"OYSTER", pattern:"OY"},
  {tier:1, emoji:"💥", word:"DESTROY",pattern:"OY"},
  {tier:1, emoji:"🤜", word:"LOYAL",  pattern:"OY"},

  // ── OU words (/aʊ/ sound) ────────────────────────────────────────────────
  {tier:2, emoji:"🚪", word:"OUT",    pattern:"OU"},
  {tier:2, emoji:"☁️", word:"CLOUD",  pattern:"OU"},
  {tier:2, emoji:"📢", word:"SHOUT",  pattern:"OU"},
  {tier:2, emoji:"📣", word:"LOUD",   pattern:"OU"},
  {tier:2, emoji:"🔍", word:"FOUND",  pattern:"OU"},
  {tier:2, emoji:"🔊", word:"SOUND",  pattern:"OU"},
  {tier:2, emoji:"⚪", word:"ROUND",  pattern:"OU"},
  {tier:2, emoji:"👄", word:"MOUTH",  pattern:"OU"},
  {tier:2, emoji:"🏠", word:"HOUSE",  pattern:"OU"},
  {tier:2, emoji:"🐭", word:"MOUSE",  pattern:"OU"},

  // ── OW words (/aʊ/ sound — NOT the /əʊ/ snow/blow OW) ───────────────────
  {tier:2, emoji:"🐄", word:"COW",    pattern:"OW"},
  {tier:2, emoji:"⏰", word:"NOW",    pattern:"OW"},
  {tier:2, emoji:"❓", word:"HOW",    pattern:"OW"},
  {tier:2, emoji:"🏘️", word:"TOWN",   pattern:"OW"},
  {tier:2, emoji:"⬇️", word:"DOWN",   pattern:"OW"},
  {tier:2, emoji:"🤎", word:"BROWN",  pattern:"OW"},
  {tier:2, emoji:"👑", word:"CROWN",  pattern:"OW"},
  {tier:2, emoji:"🤡", word:"CLOWN",  pattern:"OW"},
  {tier:2, emoji:"🦉", word:"OWL",    pattern:"OW"},
  {tier:2, emoji:"🌸", word:"FLOWER", pattern:"OW"},

  // ── Tier 3: mixed all 4 patterns ─────────────────────────────────────────
  {tier:3, emoji:"🪙", word:"COIN",   pattern:"OI"},
  {tier:3, emoji:"🧸", word:"TOY",    pattern:"OY"},
  {tier:3, emoji:"☁️", word:"CLOUD",  pattern:"OU"},
  {tier:3, emoji:"🐄", word:"COW",    pattern:"OW"},
  {tier:3, emoji:"🌱", word:"SOIL",   pattern:"OI"},
  {tier:3, emoji:"😊", word:"JOY",    pattern:"OY"},
  {tier:3, emoji:"🏠", word:"HOUSE",  pattern:"OU"},
  {tier:3, emoji:"🤡", word:"CLOWN",  pattern:"OW"},
  {tier:3, emoji:"📢", word:"NOISE",  pattern:"OI"},
  {tier:3, emoji:"😤", word:"ANNOY",  pattern:"OY"},
  {tier:3, emoji:"👄", word:"MOUTH",  pattern:"OU"},
  {tier:3, emoji:"👑", word:"CROWN",  pattern:"OW"},
  {tier:3, emoji:"👆", word:"POINT",  pattern:"OI"},
  {tier:3, emoji:"👑", word:"ROYAL",  pattern:"OY"},
  {tier:3, emoji:"🔊", word:"SOUND",  pattern:"OU"},
  {tier:3, emoji:"🌸", word:"FLOWER", pattern:"OW"},
];
