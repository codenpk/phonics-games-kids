// ABC Order — tap 4 words in alphabetical order
// words array is already in correct A-Z order; game shuffles for display
// tier 1: all different first letters (easy)
// tier 2: some share a first letter — sort by 2nd letter
// tier 3: share first 2 letters — sort by 3rd letter
window.ABC_ORDER = [

  // ── Tier 1 ───────────────────────────────────────────────────────────────────
  {tier:1, words:["ANT","BEE","CAT","DOG"]},
  {tier:1, words:["EGG","FIG","HEN","JAM"]},
  {tier:1, words:["KID","LEG","MAN","NUT"]},
  {tier:1, words:["OWL","PIG","RAT","SUN"]},
  {tier:1, words:["ARM","BUS","CUP","DEN"]},
  {tier:1, words:["ELK","FOX","GOT","HOP"]},
  {tier:1, words:["ICE","JOY","KEY","LIP"]},
  {tier:1, words:["MOP","NAP","OAK","PEA"]},
  {tier:1, words:["BAG","COT","DIG","FUN"]},
  {tier:1, words:["GUM","HAT","INK","JET"]},

  // ── Tier 2 ───────────────────────────────────────────────────────────────────
  {tier:2, words:["BALL","BARN","BEAR","BELL"]},
  {tier:2, words:["CAKE","CAT","CORN","CRAB"]},
  {tier:2, words:["DARK","DEER","DESK","DOOR"]},
  {tier:2, words:["FARM","FERN","FISH","FROG"]},
  {tier:2, words:["SAND","SEAL","SKIP","STAR"]},
  {tier:2, words:["HAND","HEAD","HILL","HOSE"]},
  {tier:2, words:["LAMP","LEAF","LION","LOCK"]},
  {tier:2, words:["MEAT","MILK","MINT","MOON"]},
  {tier:2, words:["PARK","PEAR","PINE","POND"]},
  {tier:2, words:["RAKE","REED","RING","ROPE"]},

  // ── Tier 3 ───────────────────────────────────────────────────────────────────
  {tier:3, words:["SHIP","SHOP","SHOT","SHOW"]},
  {tier:3, words:["CRAB","CRACK","CROP","CROW"]},
  {tier:3, words:["PLAY","PLEA","PLOD","PLOT"]},
  {tier:3, words:["BLEND","BLESS","BLEW","BLOT"]},
  {tier:3, words:["CLAM","CLAP","CLAY","CLIP"]},
  {tier:3, words:["DRAB","DRAG","DRAW","DRIP"]},
  {tier:3, words:["FLAG","FLAT","FLAW","FLEA"]},
  {tier:3, words:["GRAB","GRIM","GRIP","GRIT"]},
  {tier:3, words:["SLAM","SLAP","SLIM","SLIP"]},
  {tier:3, words:["SNAP","SNIP","SNOB","SNOW"]},
];
