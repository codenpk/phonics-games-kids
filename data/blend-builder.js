// Blend Builder — onset + rime word bank
// tier: 1=simple CVC onsets  2=longer words + digraph onsets  3=blend onsets (FR, ST, BR…)
// onset: the beginning sound  rime: the ending pattern (shown as "___RIME")
// wrong: 3 distractor onsets that would NOT make a real word with the rime
window.BLEND_BUILDER = [

  // ── Tier 1: Single consonant onsets, CVC rimes ───────────────────────────
  // -AT family
  {tier:1, emoji:"🐱", word:"CAT",  rime:"AT",  onset:"C", wrong:["D","M","W"]},
  {tier:1, emoji:"🎩", word:"HAT",  rime:"AT",  onset:"H", wrong:["D","F","W"]},
  {tier:1, emoji:"🦇", word:"BAT",  rime:"AT",  onset:"B", wrong:["D","F","W"]},
  // -AN family
  {tier:1, emoji:"🥫", word:"CAN",  rime:"AN",  onset:"C", wrong:["D","F","W"]},
  {tier:1, emoji:"🌀", word:"FAN",  rime:"AN",  onset:"F", wrong:["B","D","W"]},
  {tier:1, emoji:"🙍", word:"MAN",  rime:"AN",  onset:"M", wrong:["F","D","W"]},
  // -IG family
  {tier:1, emoji:"🐷", word:"PIG",  rime:"IG",  onset:"P", wrong:["D","F","W"]},
  {tier:1, emoji:"🔆", word:"BIG",  rime:"IG",  onset:"B", wrong:["P","F","W"]},
  {tier:1, emoji:"⛏️", word:"DIG",  rime:"IG",  onset:"D", wrong:["B","P","W"]},
  // -OP family
  {tier:1, emoji:"🐇", word:"HOP",  rime:"OP",  onset:"H", wrong:["D","F","W"]},
  {tier:1, emoji:"🎯", word:"TOP",  rime:"OP",  onset:"T", wrong:["H","F","W"]},
  {tier:1, emoji:"🧹", word:"MOP",  rime:"OP",  onset:"M", wrong:["H","T","W"]},
  // -UN family
  {tier:1, emoji:"☀️", word:"SUN",  rime:"UN",  onset:"S", wrong:["B","F","W"]},
  {tier:1, emoji:"🍞", word:"BUN",  rime:"UN",  onset:"B", wrong:["S","F","W"]},
  {tier:1, emoji:"🏃", word:"RUN",  rime:"UN",  onset:"R", wrong:["S","B","W"]},
  // -ET family
  {tier:1, emoji:"🕸️", word:"NET",  rime:"ET",  onset:"N", wrong:["D","F","W"]},
  {tier:1, emoji:"🐾", word:"PET",  rime:"ET",  onset:"P", wrong:["N","F","W"]},
  {tier:1, emoji:"💧", word:"WET",  rime:"ET",  onset:"W", wrong:["N","P","F"]},

  // ── Tier 2: Longer words + digraph onsets ────────────────────────────────
  // -AKE family
  {tier:2, emoji:"🎂", word:"CAKE",  rime:"AKE", onset:"C", wrong:["M","T","W"]},
  {tier:2, emoji:"🏞️", word:"LAKE",  rime:"AKE", onset:"L", wrong:["C","T","W"]},
  {tier:2, emoji:"🐍", word:"SNAKE", rime:"AKE", onset:"SN",wrong:["C","L","T"]},
  // -INE family
  {tier:2, emoji:"🌲", word:"PINE",  rime:"INE", onset:"P", wrong:["M","V","W"]},
  {tier:2, emoji:"💎", word:"MINE",  rime:"INE", onset:"M", wrong:["P","V","W"]},
  {tier:2, emoji:"🦷", word:"SHINE", rime:"INE", onset:"SH",wrong:["P","M","V"]},
  // -OAT family
  {tier:2, emoji:"⛵", word:"BOAT",  rime:"OAT", onset:"B", wrong:["G","C","W"]},
  {tier:2, emoji:"🐐", word:"GOAT",  rime:"OAT", onset:"G", wrong:["B","C","W"]},
  {tier:2, emoji:"🧥", word:"COAT",  rime:"OAT", onset:"C", wrong:["B","G","W"]},
  // -ING family
  {tier:2, emoji:"💍", word:"RING",  rime:"ING", onset:"R", wrong:["S","K","W"]},
  {tier:2, emoji:"🎵", word:"SING",  rime:"ING", onset:"S", wrong:["R","K","W"]},
  {tier:2, emoji:"👑", word:"KING",  rime:"ING", onset:"K", wrong:["R","S","W"]},
  // -ARK family
  {tier:2, emoji:"🏞️", word:"PARK",  rime:"ARK", onset:"P", wrong:["D","B","W"]},
  {tier:2, emoji:"🌑", word:"DARK",  rime:"ARK", onset:"D", wrong:["P","B","W"]},
  {tier:2, emoji:"🐶", word:"BARK",  rime:"ARK", onset:"B", wrong:["P","D","W"]},

  // ── Tier 3: Consonant blend onsets ───────────────────────────────────────
  // -OG family
  {tier:3, emoji:"🐸", word:"FROG",   rime:"OG",   onset:"FR", wrong:["BR","CR","BL"]},
  {tier:3, emoji:"🪵", word:"LOG",    rime:"OG",   onset:"L",  wrong:["FR","BR","CR"]},
  // -AIN family
  {tier:3, emoji:"🚂", word:"TRAIN",  rime:"AIN",  onset:"TR", wrong:["BR","CR","ST"]},
  {tier:3, emoji:"🧠", word:"BRAIN",  rime:"AIN",  onset:"BR", wrong:["TR","CR","ST"]},
  {tier:3, emoji:"🌧️", word:"RAIN",   rime:"AIN",  onset:"R",  wrong:["TR","BR","CR"]},
  // -EAM family
  {tier:3, emoji:"🍦", word:"CREAM",  rime:"EAM",  onset:"CR", wrong:["DR","ST","FL"]},
  {tier:3, emoji:"💭", word:"DREAM",  rime:"EAM",  onset:"DR", wrong:["CR","ST","FL"]},
  {tier:3, emoji:"☁️", word:"STEAM",  rime:"EAM",  onset:"ST", wrong:["CR","DR","FL"]},
  // -IGHT family
  {tier:3, emoji:"🌙", word:"NIGHT",  rime:"IGHT",  onset:"N",  wrong:["BR","FL","ST"]},
  {tier:3, emoji:"💡", word:"LIGHT",  rime:"IGHT",  onset:"L",  wrong:["N","BR","FL"]},
  {tier:3, emoji:"✈️", word:"FLIGHT", rime:"IGHT",  onset:"FL", wrong:["N","L","BR"]},
  // -OWN family
  {tier:3, emoji:"🏘️", word:"TOWN",   rime:"OWN",   onset:"T",  wrong:["CR","BR","DR"]},
  {tier:3, emoji:"👑", word:"CROWN",  rime:"OWN",   onset:"CR", wrong:["T","BR","DR"]},
  {tier:3, emoji:"🟤", word:"BROWN",  rime:"OWN",   onset:"BR", wrong:["T","CR","DR"]},
];
