// Compound Crash — combine two words to make a compound word
// first: the word shown at top  correct: the second word to complete it
// distractors: 3 wrong second words (with emojis)
window.COMPOUND_WORDS = [

  // ── Tier 1: very common compound words ─────────────────────────────────────
  {tier:1, compound:"SUNFLOWER",  first:{emoji:"☀️",word:"SUN"},
    correct:{emoji:"🌸",word:"FLOWER"},
    distractors:[{emoji:"🌧️",word:"RAIN"},{emoji:"⭐",word:"STAR"},{emoji:"🌙",word:"MOON"}]},

  {tier:1, compound:"RAINBOW",    first:{emoji:"🌧️",word:"RAIN"},
    correct:{emoji:"🌈",word:"BOW"},
    distractors:[{emoji:"☀️",word:"SUN"},{emoji:"🌀",word:"FALL"},{emoji:"🌊",word:"WATER"}]},

  {tier:1, compound:"BEDROOM",    first:{emoji:"🛏️",word:"BED"},
    correct:{emoji:"🏠",word:"ROOM"},
    distractors:[{emoji:"🛁",word:"BATH"},{emoji:"🪟",word:"SIDE"},{emoji:"🚪",word:"DOOR"}]},

  {tier:1, compound:"FOOTBALL",   first:{emoji:"🦶",word:"FOOT"},
    correct:{emoji:"⚽",word:"BALL"},
    distractors:[{emoji:"🏃",word:"RUN"},{emoji:"🦵",word:"LEG"},{emoji:"👟",word:"SHOE"}]},

  {tier:1, compound:"SUNSHINE",   first:{emoji:"☀️",word:"SUN"},
    correct:{emoji:"✨",word:"SHINE"},
    distractors:[{emoji:"🌧️",word:"RAIN"},{emoji:"🌊",word:"WATER"},{emoji:"🌙",word:"MOON"}]},

  {tier:1, compound:"CUPCAKE",    first:{emoji:"☕",word:"CUP"},
    correct:{emoji:"🎂",word:"CAKE"},
    distractors:[{emoji:"🍬",word:"CANDY"},{emoji:"🍪",word:"COOK"},{emoji:"🧁",word:"BREAD"}]},

  {tier:1, compound:"STARFISH",   first:{emoji:"⭐",word:"STAR"},
    correct:{emoji:"🐟",word:"FISH"},
    distractors:[{emoji:"🐠",word:"SWIM"},{emoji:"🌊",word:"SEA"},{emoji:"🪸",word:"CORAL"}]},

  {tier:1, compound:"DOORBELL",   first:{emoji:"🚪",word:"DOOR"},
    correct:{emoji:"🔔",word:"BELL"},
    distractors:[{emoji:"🔑",word:"KEY"},{emoji:"🏠",word:"HOUSE"},{emoji:"🚶",word:"STEP"}]},

  {tier:1, compound:"FIREFIGHTER",first:{emoji:"🔥",word:"FIRE"},
    correct:{emoji:"🧯",word:"FIGHTER"},
    distractors:[{emoji:"💧",word:"WATER"},{emoji:"🏃",word:"RUNNER"},{emoji:"🚒",word:"TRUCK"}]},

  {tier:1, compound:"LADYBUG",    first:{emoji:"👒",word:"LADY"},
    correct:{emoji:"🐛",word:"BUG"},
    distractors:[{emoji:"🐝",word:"BEE"},{emoji:"🦋",word:"FLY"},{emoji:"🐜",word:"ANT"}]},

  // ── Tier 2: medium compounds ────────────────────────────────────────────────
  {tier:2, compound:"BUTTERFLY",  first:{emoji:"🧈",word:"BUTTER"},
    correct:{emoji:"🦋",word:"FLY"},
    distractors:[{emoji:"🐝",word:"BEE"},{emoji:"🐛",word:"BUG"},{emoji:"🪲",word:"WORM"}]},

  {tier:2, compound:"WATERFALL",  first:{emoji:"💧",word:"WATER"},
    correct:{emoji:"⬇️",word:"FALL"},
    distractors:[{emoji:"🏃",word:"RUN"},{emoji:"🌊",word:"DROP"},{emoji:"⬆️",word:"RISE"}]},

  {tier:2, compound:"BIRTHDAY",   first:{emoji:"🎂",word:"BIRTH"},
    correct:{emoji:"📅",word:"DAY"},
    distractors:[{emoji:"🌙",word:"NIGHT"},{emoji:"⏰",word:"TIME"},{emoji:"🎉",word:"PARTY"}]},

  {tier:2, compound:"MOONLIGHT",  first:{emoji:"🌙",word:"MOON"},
    correct:{emoji:"💡",word:"LIGHT"},
    distractors:[{emoji:"🌙",word:"GLOW"},{emoji:"⭐",word:"STAR"},{emoji:"🌑",word:"DARK"}]},

  {tier:2, compound:"SNOWBALL",   first:{emoji:"❄️",word:"SNOW"},
    correct:{emoji:"⚽",word:"BALL"},
    distractors:[{emoji:"❄️",word:"FLAKE"},{emoji:"🌨️",word:"STORM"},{emoji:"⛄",word:"MAN"}]},

  {tier:2, compound:"SEASHELL",   first:{emoji:"🌊",word:"SEA"},
    correct:{emoji:"🐚",word:"SHELL"},
    distractors:[{emoji:"🦞",word:"HORSE"},{emoji:"🪸",word:"CORAL"},{emoji:"🐟",word:"FISH"}]},

  {tier:2, compound:"TOOTHBRUSH", first:{emoji:"🦷",word:"TOOTH"},
    correct:{emoji:"🪥",word:"BRUSH"},
    distractors:[{emoji:"🧴",word:"PASTE"},{emoji:"💧",word:"WASH"},{emoji:"🦷",word:"GUARD"}]},

  {tier:2, compound:"BACKPACK",   first:{emoji:"🐾",word:"BACK"},
    correct:{emoji:"🎒",word:"PACK"},
    distractors:[{emoji:"🧳",word:"BAG"},{emoji:"🎒",word:"CARRY"},{emoji:"🏃",word:"YARD"}]},

  // ── Tier 3: less common / longer compounds ───────────────────────────────────
  {tier:3, compound:"THUNDERSTORM",first:{emoji:"⛈️",word:"THUNDER"},
    correct:{emoji:"🌩️",word:"STORM"},
    distractors:[{emoji:"🌧️",word:"RAIN"},{emoji:"💨",word:"WIND"},{emoji:"⚡",word:"BOLT"}]},

  {tier:3, compound:"STRAWBERRY",  first:{emoji:"🌾",word:"STRAW"},
    correct:{emoji:"🫐",word:"BERRY"},
    distractors:[{emoji:"🍓",word:"FRUIT"},{emoji:"🍬",word:"SWEET"},{emoji:"🌸",word:"FLOWER"}]},

  {tier:3, compound:"UNDERGROUND", first:{emoji:"⬇️",word:"UNDER"},
    correct:{emoji:"🌍",word:"GROUND"},
    distractors:[{emoji:"🏠",word:"COVER"},{emoji:"🌊",word:"WATER"},{emoji:"🚇",word:"PASS"}]},

  {tier:3, compound:"BOOKSHELF",   first:{emoji:"📚",word:"BOOK"},
    correct:{emoji:"🪟",word:"SHELF"},
    distractors:[{emoji:"📖",word:"CASE"},{emoji:"🔖",word:"MARK"},{emoji:"📚",word:"WORM"}]},

  {tier:3, compound:"BASKETBALL",  first:{emoji:"🧺",word:"BASKET"},
    correct:{emoji:"⚽",word:"BALL"},
    distractors:[{emoji:"🏃",word:"GAME"},{emoji:"🤸",word:"HOOP"},{emoji:"🏆",word:"NET"}]},
];
