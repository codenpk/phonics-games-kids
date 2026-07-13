// Syllable Chop — syllable division data
// syllables: the word split at the correct point(s) using · as divider
// wrong: 2 incorrect divisions of the same word (must use the SAME word letters, wrong split position)
// tier: 1=VC/CV easy splits  2=V/CV or tricky  3=3-syllable words
window.SYLLABLE_CHOP = [
  // ── Tier 1 — VC/CV split (split between two consonants in the middle) ──
  {tier:1, emoji:"🐇", word:"RABBIT",  syllables:"RAB·BIT",  wrong:["RA·BBIT",  "RABB·IT"]},
  {tier:1, emoji:"🧺", word:"BASKET",  syllables:"BAS·KET",  wrong:["BA·SKET",  "BASK·ET"]},
  {tier:1, emoji:"✏️", word:"PENCIL",  syllables:"PEN·CIL",  wrong:["PE·NCIL",  "PENC·IL"]},
  {tier:1, emoji:"🐒", word:"MONKEY",  syllables:"MON·KEY",  wrong:["MO·NKEY",  "MONK·EY"]},
  {tier:1, emoji:"🌷", word:"GARDEN",  syllables:"GAR·DEN",  wrong:["GA·RDEN",  "GARD·EN"]},
  {tier:1, emoji:"🧈", word:"BUTTER",  syllables:"BUT·TER",  wrong:["BU·TTER",  "BUTT·ER"]},
  {tier:1, emoji:"🧤", word:"MITTEN",  syllables:"MIT·TEN",  wrong:["MI·TTEN",  "MITT·EN"]},
  {tier:1, emoji:"🌇", word:"SUNSET",  syllables:"SUN·SET",  wrong:["SU·NSET",  "SUNS·ET"]},
  {tier:1, emoji:"🌵", word:"CACTUS",  syllables:"CAC·TUS",  wrong:["CA·CTUS",  "CACT·US"]},
  {tier:1, emoji:"🎪", word:"CIRCUS",  syllables:"CIR·CUS",  wrong:["CI·RCUS",  "CIRC·US"]},
  {tier:1, emoji:"🌊", word:"DOLPHIN", syllables:"DOL·PHIN", wrong:["DO·LPHIN", "DOLP·HIN"]},
  {tier:1, emoji:"🐱", word:"KITTEN",  syllables:"KIT·TEN",  wrong:["KI·TTEN",  "KITT·EN"]},
  {tier:1, emoji:"🧻", word:"NAPKIN",  syllables:"NAP·KIN",  wrong:["NA·PKIN",  "NAPK·IN"]},
  {tier:1, emoji:"📚", word:"LESSON",  syllables:"LES·SON",  wrong:["LE·SSON",  "LESS·ON"]},
  {tier:1, emoji:"🪖", word:"HELMET",  syllables:"HEL·MET",  wrong:["HE·LMET",  "HELM·ET"]},
  // ── Tier 2 — V/CV split or tricky patterns ──
  {tier:2, emoji:"🐯", word:"TIGER",   syllables:"TI·GER",   wrong:["TIG·ER",   "TIGE·R"]},
  {tier:2, emoji:"🥓", word:"BACON",   syllables:"BA·CON",   wrong:["BAC·ON",   "BACO·N"]},
  {tier:2, emoji:"🎵", word:"MUSIC",   syllables:"MU·SIC",   wrong:["MUS·IC",   "MUSI·C"]},
  {tier:2, emoji:"🤖", word:"ROBOT",   syllables:"RO·BOT",   wrong:["ROB·OT",   "ROBO·T"]},
  {tier:2, emoji:"✈️", word:"PILOT",   syllables:"PI·LOT",   wrong:["PIL·OT",   "PILO·T"]},
  {tier:2, emoji:"🍋", word:"LEMON",   syllables:"LEM·ON",   wrong:["LE·MON",   "LEMO·N"]},
  {tier:2, emoji:"🧲", word:"MAGNET",  syllables:"MAG·NET",  wrong:["MA·GNET",  "MAGN·ET"]},
  {tier:2, emoji:"🪞", word:"VELVET",  syllables:"VEL·VET",  wrong:["VE·LVET",  "VELV·ET"]},
  {tier:2, emoji:"👑", word:"CAMEL",   syllables:"CA·MEL",   wrong:["CAM·EL",   "CAME·L"]},
  {tier:2, emoji:"🌙", word:"COMET",   syllables:"CO·MET",   wrong:["COM·ET",   "COME·T"]},
  // ── Tier 3 — 3-syllable words ──
  {tier:3, emoji:"☂️",  word:"UMBRELLA",  syllables:"UM·BREL·LA",   wrong:["UMB·REL·LA",    "UM·BRELLA"]},
  {tier:3, emoji:"🦋", word:"BUTTERFLY",  syllables:"BUT·TER·FLY",  wrong:["BUTT·ER·FLY",   "BUT·TERFLY"]},
  {tier:3, emoji:"🐊", word:"CROCODILE",  syllables:"CROC·O·DILE",  wrong:["CRO·CO·DILE",   "CROC·OD·ILE"]},
  {tier:3, emoji:"🌅", word:"TOMORROW",   syllables:"TO·MOR·ROW",   wrong:["TOM·OR·ROW",    "TO·MORR·OW"]},
  {tier:3, emoji:"🍓", word:"STRAWBERRY", syllables:"STRAW·BER·RY", wrong:["STRA·WBE·RRY",  "STRAWB·ER·RY"]},
  {tier:3, emoji:"🐘", word:"ELEPHANT",   syllables:"EL·E·PHANT",   wrong:["ELE·PHANT",     "EL·EPH·ANT"]},
  {tier:3, emoji:"🌈", word:"TOGETHER",   syllables:"TO·GETH·ER",   wrong:["TOG·ETH·ER",    "TOGET·H·ER"]},
];
