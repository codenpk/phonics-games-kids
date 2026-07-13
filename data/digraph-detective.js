// Digraph Detective — identify the digraph in a word
// position: "beginning" | "end"  digraph: CH SH TH WH PH NG CK
// tier 1: SH/CH at beginning (most common)
// tier 2: TH/WH at beginning + SH/CH at end
// tier 3: PH/NG/CK + mixed positions
window.DIGRAPH_DETECTIVE = [

  // ── Tier 1: SH and CH at beginning ──────────────────────────────────────────
  {tier:1, emoji:"🐑", word:"SHEEP",  digraph:"SH", position:"beginning"},
  {tier:1, emoji:"🚢", word:"SHIP",   digraph:"SH", position:"beginning"},
  {tier:1, emoji:"🦈", word:"SHARK",  digraph:"SH", position:"beginning"},
  {tier:1, emoji:"🏪", word:"SHOP",   digraph:"SH", position:"beginning"},
  {tier:1, emoji:"🌊", word:"SHORE",  digraph:"SH", position:"beginning"},
  {tier:1, emoji:"🧀", word:"CHEESE", digraph:"CH", position:"beginning"},
  {tier:1, emoji:"🐔", word:"CHICK",  digraph:"CH", position:"beginning"},
  {tier:1, emoji:"🪑", word:"CHAIR",  digraph:"CH", position:"beginning"},
  {tier:1, emoji:"⛓️", word:"CHAIN",  digraph:"CH", position:"beginning"},
  {tier:1, emoji:"🌰", word:"CHOP",   digraph:"CH", position:"beginning"},

  // ── Tier 2: TH / WH at beginning + SH/CH at end ─────────────────────────────
  {tier:2, emoji:"🧵", word:"THREAD", digraph:"TH", position:"beginning"},
  {tier:2, emoji:"🏆", word:"THREE",  digraph:"TH", position:"beginning"},
  {tier:2, emoji:"🌩️", word:"THUNDER",digraph:"TH", position:"beginning"},
  {tier:2, emoji:"🤔", word:"THINK",  digraph:"TH", position:"beginning"},
  {tier:2, emoji:"🐋", word:"WHALE",  digraph:"WH", position:"beginning"},
  {tier:2, emoji:"🌾", word:"WHEAT",  digraph:"WH", position:"beginning"},
  {tier:2, emoji:"☸️", word:"WHEEL",  digraph:"WH", position:"beginning"},
  {tier:2, emoji:"🥄", word:"WHISK",  digraph:"WH", position:"beginning"},
  {tier:2, emoji:"🍽️", word:"DISH",   digraph:"SH", position:"end"},
  {tier:2, emoji:"🐟", word:"FISH",   digraph:"SH", position:"end"},
  {tier:2, emoji:"💰", word:"CASH",   digraph:"SH", position:"end"},
  {tier:2, emoji:"🛁", word:"WASH",   digraph:"SH", position:"end"},
  {tier:2, emoji:"🛋️", word:"COUCH",  digraph:"CH", position:"end"},
  {tier:2, emoji:"⏱️", word:"WATCH",  digraph:"CH", position:"end"},
  {tier:2, emoji:"🤙", word:"TOUCH",  digraph:"CH", position:"end"},

  // ── Tier 3: PH / NG / CK + mixed ──────────────────────────────────────────
  {tier:3, emoji:"📸", word:"PHOTO",  digraph:"PH", position:"beginning"},
  {tier:3, emoji:"🐬", word:"PHONE",  digraph:"PH", position:"beginning"},
  {tier:3, emoji:"🏋️", word:"PHRASE", digraph:"PH", position:"beginning"},
  {tier:3, emoji:"💍", word:"RING",   digraph:"NG", position:"end"},
  {tier:3, emoji:"🎵", word:"SONG",   digraph:"NG", position:"end"},
  {tier:3, emoji:"💪", word:"STRONG", digraph:"NG", position:"end"},
  {tier:3, emoji:"🦆", word:"DUCK",   digraph:"CK", position:"end"},
  {tier:3, emoji:"🪨", word:"ROCK",   digraph:"CK", position:"end"},
  {tier:3, emoji:"🔒", word:"LOCK",   digraph:"CK", position:"end"},
  {tier:3, emoji:"🎒", word:"BACK",   digraph:"CK", position:"end"},
  {tier:3, emoji:"🦷", word:"TEETH",  digraph:"TH", position:"end"},
  {tier:3, emoji:"💡", word:"WITH",   digraph:"TH", position:"end"},
  {tier:3, emoji:"🛁", word:"BATH",   digraph:"TH", position:"end"},
];
