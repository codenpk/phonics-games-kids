// Vowel Swap — consonant frames; try each vowel and find all real words
// valid: array of {vowel, word, emoji} for each real-word combination
window.VOWEL_SWAP = [

  // ── Tier 1: mostly 3-4 valid words (success-oriented) ────────────────────
  {tier:1, frame:"B_T",
   valid:[{v:"A",word:"BAT",emoji:"🦇"},{v:"E",word:"BET",emoji:"🤝"},{v:"I",word:"BIT",emoji:"💬"},{v:"U",word:"BUT",emoji:"🔄"}]},
  {tier:1, frame:"H_T",
   valid:[{v:"A",word:"HAT",emoji:"🎩"},{v:"I",word:"HIT",emoji:"🥊"},{v:"O",word:"HOT",emoji:"🌶️"},{v:"U",word:"HUT",emoji:"🏠"}]},
  {tier:1, frame:"P_T",
   valid:[{v:"A",word:"PAT",emoji:"👋"},{v:"E",word:"PET",emoji:"🐾"},{v:"I",word:"PIT",emoji:"🕳️"},{v:"O",word:"POT",emoji:"🍯"},{v:"U",word:"PUT",emoji:"📤"}]},
  {tier:1, frame:"N_T",
   valid:[{v:"E",word:"NET",emoji:"🕸️"},{v:"I",word:"NIT",emoji:"🔍"},{v:"O",word:"NOT",emoji:"❌"},{v:"U",word:"NUT",emoji:"🥜"}]},
  {tier:1, frame:"R_T",
   valid:[{v:"A",word:"RAT",emoji:"🐀"},{v:"O",word:"ROT",emoji:"♻️"},{v:"U",word:"RUT",emoji:"🛤️"}]},
  {tier:1, frame:"C_T",
   valid:[{v:"A",word:"CAT",emoji:"🐱"},{v:"O",word:"COT",emoji:"🛏️"},{v:"U",word:"CUT",emoji:"✂️"}]},
  {tier:1, frame:"M_P",
   valid:[{v:"A",word:"MAP",emoji:"🗺️"},{v:"O",word:"MOP",emoji:"🧹"}]},
  {tier:1, frame:"D_P",
   valid:[{v:"I",word:"DIP",emoji:"🫙"},{v:"O",word:"DOP",emoji:"🪂"}]},

  // ── Tier 2: all 5 vowels shown; some are NOT real words ───────────────────
  {tier:2, frame:"B_G",
   valid:[{v:"A",word:"BAG",emoji:"👜"},{v:"E",word:"BEG",emoji:"🙏"},{v:"I",word:"BIG",emoji:"🐘"},{v:"O",word:"BOG",emoji:"🌿"},{v:"U",word:"BUG",emoji:"🐛"}]},
  {tier:2, frame:"P_N",
   valid:[{v:"A",word:"PAN",emoji:"🍳"},{v:"E",word:"PEN",emoji:"🖊️"},{v:"I",word:"PIN",emoji:"📌"},{v:"U",word:"PUN",emoji:"😄"}]},
  {tier:2, frame:"L_G",
   valid:[{v:"A",word:"LAG",emoji:"🐢"},{v:"E",word:"LEG",emoji:"🦵"},{v:"O",word:"LOG",emoji:"🪵"},{v:"U",word:"LUG",emoji:"💪"}]},
  {tier:2, frame:"T_N",
   valid:[{v:"A",word:"TAN",emoji:"😎"},{v:"E",word:"TEN",emoji:"🔢"},{v:"I",word:"TIN",emoji:"🥫"},{v:"O",word:"TON",emoji:"⚖️"}]},
  {tier:2, frame:"F_N",
   valid:[{v:"A",word:"FAN",emoji:"💨"},{v:"I",word:"FIN",emoji:"🦈"},{v:"U",word:"FUN",emoji:"🎉"}]},
  {tier:2, frame:"R_G",
   valid:[{v:"A",word:"RAG",emoji:"🧹"},{v:"I",word:"RIG",emoji:"⛽"},{v:"U",word:"RUG",emoji:"🏠"}]},
  {tier:2, frame:"S_T",
   valid:[{v:"A",word:"SAT",emoji:"🪑"},{v:"E",word:"SET",emoji:"🎯"},{v:"I",word:"SIT",emoji:"🧘"}]},
  {tier:2, frame:"D_G",
   valid:[{v:"I",word:"DIG",emoji:"⛏️"},{v:"O",word:"DOG",emoji:"🐕"},{v:"U",word:"DUG",emoji:"🕳️"}]},

  // ── Tier 3: blend frames (2 consonants on each side) ─────────────────────
  {tier:3, frame:"ST_P",
   valid:[{v:"E",word:"STEP",emoji:"👟"},{v:"O",word:"STOP",emoji:"🛑"}]},
  {tier:3, frame:"SH_P",
   valid:[{v:"I",word:"SHIP",emoji:"🚢"},{v:"O",word:"SHOP",emoji:"🛒"}]},
  {tier:3, frame:"TR_P",
   valid:[{v:"A",word:"TRAP",emoji:"🪤"},{v:"I",word:"TRIP",emoji:"✈️"}]},
  {tier:3, frame:"DR_P",
   valid:[{v:"I",word:"DRIP",emoji:"💧"},{v:"O",word:"DROP",emoji:"🫧"}]},
  {tier:3, frame:"FL_P",
   valid:[{v:"A",word:"FLAP",emoji:"🦋"},{v:"I",word:"FLIP",emoji:"🤸"},{v:"O",word:"FLOP",emoji:"🎭"}]},
  {tier:3, frame:"CR_P",
   valid:[{v:"A",word:"CRAP",emoji:"💩"},{v:"O",word:"CROP",emoji:"🌾"}]},
];
