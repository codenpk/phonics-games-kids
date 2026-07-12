// Long Vowel Magic — word bank
// tier 1: two choices (short vs magic-E), both are real words
// tier 2: three choices (correct magic-E + two wrong spellings)
// tier 3: vowel team words (AI, OA, EE, EA, OW) + two plausible misspellings
window.LONG_VOWEL = [

  // ── Tier 1: Magic-E pairs (both short & long are real words) ─────────────
  {tier:1, emoji:"📌", choices:["PIN","PINE"],   correct:"PINE"},
  {tier:1, emoji:"🧢", choices:["CAP","CAPE"],   correct:"CAPE"},
  {tier:1, emoji:"🎲", choices:["CUB","CUBE"],   correct:"CUBE"},
  {tier:1, emoji:"🪁", choices:["KIT","KITE"],   correct:"KITE"},
  {tier:1, emoji:"🤞", choices:["HOP","HOPE"],   correct:"HOPE"},
  {tier:1, emoji:"🦯", choices:["CAN","CANE"],   correct:"CANE"},
  {tier:1, emoji:"🦷", choices:["BIT","BITE"],   correct:"BITE"},
  {tier:1, emoji:"📺", choices:["TUB","TUBE"],   correct:"TUBE"},
  {tier:1, emoji:"📝", choices:["NOT","NOTE"],   correct:"NOTE"},
  {tier:1, emoji:"🪙", choices:["DIM","DIME"],   correct:"DIME"},
  {tier:1, emoji:"🍓", choices:["RIP","RIPE"],   correct:"RIPE"},
  {tier:1, emoji:"🐱", choices:["CUT","CUTE"],   correct:"CUTE"},
  {tier:1, emoji:"🪟", choices:["PAN","PANE"],   correct:"PANE"},
  {tier:1, emoji:"👌", choices:["FIN","FINE"],   correct:"FINE"},
  {tier:1, emoji:"🏇", choices:["ROD","RODE"],   correct:"RODE"},

  // ── Tier 2: Magic-E, 3 choices (correct + 2 plausible wrong) ─────────────
  {tier:2, emoji:"🚲", choices:["BIK","BIKE","BICK"],    correct:"BIKE"},
  {tier:2, emoji:"🏞️", choices:["LAKE","LAK","LAIK"],    correct:"LAKE"},
  {tier:2, emoji:"🏠", choices:["HOM","HOAM","HOME"],    correct:"HOME"},
  {tier:2, emoji:"🎮", choices:["GAM","GAME","GAIM"],    correct:"GAME"},
  {tier:2, emoji:"5️⃣", choices:["FIV","FIEV","FIVE"],    correct:"FIVE"},
  {tier:2, emoji:"🌹", choices:["ROSE","ROS","ROZE"],    correct:"ROSE"},
  {tier:2, emoji:"🐴", choices:["MUL","MOOL","MULE"],    correct:"MULE"},
  {tier:2, emoji:"🌊", choices:["WAV","WAVE","WAIV"],    correct:"WAVE"},
  {tier:2, emoji:"😊", choices:["SMIL","SMYLE","SMILE"], correct:"SMILE"},
  {tier:2, emoji:"🍽️", choices:["PLAT","PLAYT","PLATE"], correct:"PLATE"},
  {tier:2, emoji:"🦁", choices:["BRAV","BRAIV","BRAVE"], correct:"BRAVE"},
  {tier:2, emoji:"🪨", choices:["STON","STOAN","STONE"], correct:"STONE"},

  // ── Tier 3: Vowel team words (AI, OA, EA, EE, OW) ────────────────────────
  {tier:3, emoji:"🌧️", choices:["RANE","RAIN","RAYN"],    correct:"RAIN"},
  {tier:3, emoji:"⛵", choices:["BOTE","BOWT","BOAT"],    correct:"BOAT"},
  {tier:3, emoji:"🌱", choices:["SEAD","SEID","SEED"],    correct:"SEED"},
  {tier:3, emoji:"🍃", choices:["LEEF","LEAF","LEFE"],    correct:"LEAF"},
  {tier:3, emoji:"🧥", choices:["COTE","COWT","COAT"],    correct:"COAT"},
  {tier:3, emoji:"🫘", choices:["BENE","BEIN","BEAN"],    correct:"BEAN"},
  {tier:3, emoji:"🐐", choices:["GOTE","GOWT","GOAT"],    correct:"GOAT"},
  {tier:3, emoji:"🏖️", choices:["BEECH","BEATCH","BEACH"],correct:"BEACH"},
  {tier:3, emoji:"🚂", choices:["TRANE","TRAYN","TRAIN"], correct:"TRAIN"},
  {tier:3, emoji:"🍽️", choices:["MEEL","MELE","MEAL"],    correct:"MEAL"},
  {tier:3, emoji:"🐸", choices:["TODE","TOWD","TOAD"],    correct:"TOAD"},
  {tier:3, emoji:"🍦", choices:["CREEM","CREME","CREAM"], correct:"CREAM"},
  {tier:3, emoji:"🌊", choices:["FLOWT","FLOTE","FLOAT"], correct:"FLOAT"},
];
