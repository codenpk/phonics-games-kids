// Missing Vowel — fill in the blank vowel
// display: word with _ replacing vowel(s)  answer: the vowel letter(s)
// tier 1: simple CVC words
// tier 2: consonant blends and digraphs
// tier 3: CCVCC / harder words
window.MISSING_VOWEL = [

  // ── Tier 1: simple CVC ───────────────────────────────────────────────────────
  {tier:1, emoji:"🐱", word:"CAT",  display:"C_T",  answer:"A"},
  {tier:1, emoji:"🎩", word:"HAT",  display:"H_T",  answer:"A"},
  {tier:1, emoji:"🌀", word:"FAN",  display:"F_N",  answer:"A"},
  {tier:1, emoji:"🐷", word:"PIG",  display:"P_G",  answer:"I"},
  {tier:1, emoji:"📌", word:"PIN",  display:"P_N",  answer:"I"},
  {tier:1, emoji:"🔆", word:"BIG",  display:"B_G",  answer:"I"},
  {tier:1, emoji:"🐶", word:"DOG",  display:"D_G",  answer:"O"},
  {tier:1, emoji:"🍲", word:"POT",  display:"P_T",  answer:"O"},
  {tier:1, emoji:"🧹", word:"MOP",  display:"M_P",  answer:"O"},
  {tier:1, emoji:"🛏️", word:"BED",  display:"B_D",  answer:"E"},
  {tier:1, emoji:"✏️", word:"PEN",  display:"P_N",  answer:"E"},
  {tier:1, emoji:"☀️", word:"SUN",  display:"S_N",  answer:"U"},
  {tier:1, emoji:"🍞", word:"BUN",  display:"B_N",  answer:"U"},
  {tier:1, emoji:"🐛", word:"BUG",  display:"B_G",  answer:"U"},
  {tier:1, emoji:"🥫", word:"CAN",  display:"C_N",  answer:"A"},

  // ── Tier 2: blends and digraphs ───────────────────────────────────────────────
  {tier:2, emoji:"🐸", word:"FROG",  display:"FR_G",  answer:"O"},
  {tier:2, emoji:"🚢", word:"SHIP",  display:"SH_P",  answer:"I"},
  {tier:2, emoji:"🥁", word:"DRUM",  display:"DR_M",  answer:"U"},
  {tier:2, emoji:"🌊", word:"WAVE",  display:"W_VE",  answer:"A"},
  {tier:2, emoji:"🦀", word:"CRAB",  display:"CR_B",  answer:"A"},
  {tier:2, emoji:"🏳️", word:"FLAG",  display:"FL_G",  answer:"A"},
  {tier:2, emoji:"🌱", word:"STEM",  display:"ST_M",  answer:"E"},
  {tier:2, emoji:"🦊", word:"SLED",  display:"SL_D",  answer:"E"},
  {tier:2, emoji:"🧊", word:"CHIP",  display:"CH_P",  answer:"I"},
  {tier:2, emoji:"⭐", word:"SPIN",  display:"SP_N",  answer:"I"},
  {tier:2, emoji:"📚", word:"GLOW",  display:"GL_W",  answer:"O"},
  {tier:2, emoji:"🌳", word:"SHRUB", display:"SHR_B", answer:"U"},
  {tier:2, emoji:"⚡", word:"STUN",  display:"ST_N",  answer:"U"},
  {tier:2, emoji:"🎁", word:"TRIM",  display:"TR_M",  answer:"I"},
  {tier:2, emoji:"🫧", word:"DRIP",  display:"DR_P",  answer:"I"},

  // ── Tier 3: CVCC / CCVCC / harder ────────────────────────────────────────────
  {tier:3, emoji:"🎁", word:"GIFT",   display:"G_FT",  answer:"I"},
  {tier:3, emoji:"🪣", word:"PUMP",   display:"P_MP",  answer:"U"},
  {tier:3, emoji:"🐑", word:"LAMB",   display:"L_MB",  answer:"A"},
  {tier:3, emoji:"🧱", word:"BRICK",  display:"BR_CK", answer:"I"},
  {tier:3, emoji:"⚡", word:"FLASH",  display:"FL_SH", answer:"A"},
  {tier:3, emoji:"🐾", word:"STOMP",  display:"ST_MP", answer:"O"},
  {tier:3, emoji:"🌬️", word:"BLEND",  display:"BL_ND", answer:"E"},
  {tier:3, emoji:"🏋️", word:"CLENCH", display:"CL_NCH",answer:"E"},
  {tier:3, emoji:"🌊", word:"BRISK",  display:"BR_SK", answer:"I"},
  {tier:3, emoji:"🎯", word:"THRUST", display:"THR_ST",answer:"U"},
  {tier:3, emoji:"💐", word:"SPRIG",  display:"SPR_G", answer:"I"},
  {tier:3, emoji:"🚀", word:"BLAST",  display:"BL_ST", answer:"A"},
  {tier:3, emoji:"🦁", word:"DWELL",  display:"DW_LL", answer:"E"},
  {tier:3, emoji:"🥁", word:"STRUM",  display:"STR_M", answer:"U"},
  {tier:3, emoji:"🐸", word:"CRUNCH", display:"CR_NCH",answer:"U"},
];
