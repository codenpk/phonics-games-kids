// Word Ladder — change one letter per step to reach the target word
// Each step: show 3 choices (1 correct + 2 wrong); player picks the path
window.WORD_LADDER = [

  // ── Tier 1: 2-step ladders ────────────────────────────────────────────────
  {tier:1, start:"CAT", target:"BAD",
   steps:[
     {from:"CAT", correct:"BAT", wrong:["MAT","CAN"]},
     {from:"BAT", correct:"BAD", wrong:["BIG","BAG"]},
   ]},
  {tier:1, start:"DOG", target:"LAG",
   steps:[
     {from:"DOG", correct:"LOG", wrong:["HOG","DOT"]},
     {from:"LOG", correct:"LAG", wrong:["LEG","LUG"]},
   ]},
  {tier:1, start:"HIT", target:"HAD",
   steps:[
     {from:"HIT", correct:"HAT", wrong:["HOT","HOP"]},
     {from:"HAT", correct:"HAD", wrong:["HAS","BAD"]},
   ]},
  {tier:1, start:"PIG", target:"PAN",
   steps:[
     {from:"PIG", correct:"PIN", wrong:["PIT","BIG"]},
     {from:"PIN", correct:"PAN", wrong:["PEN","RAN"]},
   ]},
  {tier:1, start:"SUN", target:"GUM",
   steps:[
     {from:"SUN", correct:"GUN", wrong:["FUN","SIN"]},
     {from:"GUN", correct:"GUM", wrong:["BUM","GUT"]},
   ]},
  {tier:1, start:"BIG", target:"BAT",
   steps:[
     {from:"BIG", correct:"BAG", wrong:["BIT","DIG"]},
     {from:"BAG", correct:"BAT", wrong:["BAD","RAG"]},
   ]},
  {tier:1, start:"WET", target:"BET",
   steps:[
     {from:"WET", correct:"GET", wrong:["SET","NET"]},
     {from:"GET", correct:"BET", wrong:["BED","BEG"]},
   ]},
  {tier:1, start:"FAN", target:"TIN",
   steps:[
     {from:"FAN", correct:"TAN", wrong:["CAN","RAN"]},
     {from:"TAN", correct:"TIN", wrong:["TEN","TON"]},
   ]},

  // ── Tier 2: 3-step ladders ────────────────────────────────────────────────
  {tier:2, start:"CAT", target:"DOG",
   steps:[
     {from:"CAT", correct:"COT", wrong:["CUT","BAT"]},
     {from:"COT", correct:"DOT", wrong:["DOG","COG"]},
     {from:"DOT", correct:"DOG", wrong:["HOG","DON"]},
   ]},
  {tier:2, start:"SIT", target:"PIG",
   steps:[
     {from:"SIT", correct:"BIT", wrong:["SET","SIN"]},
     {from:"BIT", correct:"BIG", wrong:["BAG","BID"]},
     {from:"BIG", correct:"PIG", wrong:["DIG","RIG"]},
   ]},
  {tier:2, start:"HOG", target:"CAT",
   steps:[
     {from:"HOG", correct:"HOT", wrong:["HON","LOG"]},
     {from:"HOT", correct:"HAT", wrong:["BAT","HIT"]},
     {from:"HAT", correct:"CAT", wrong:["BAT","MAT"]},
   ]},
  {tier:2, start:"BUG", target:"FUN",
   steps:[
     {from:"BUG", correct:"RUG", wrong:["BUN","MUG"]},
     {from:"RUG", correct:"RUN", wrong:["GUN","RUB"]},
     {from:"RUN", correct:"FUN", wrong:["BUN","GUN"]},
   ]},
  {tier:2, start:"PAN", target:"BIT",
   steps:[
     {from:"PAN", correct:"PIN", wrong:["PEN","PIG"]},
     {from:"PIN", correct:"PIT", wrong:["SIT","FIT"]},
     {from:"PIT", correct:"BIT", wrong:["BAT","SIT"]},
   ]},
  {tier:2, start:"FAT", target:"HIM",
   steps:[
     {from:"FAT", correct:"FIT", wrong:["FAD","SIT"]},
     {from:"FIT", correct:"HIT", wrong:["SIT","BIT"]},
     {from:"HIT", correct:"HIM", wrong:["HIS","DIM"]},
   ]},

  // ── Tier 3: 4-step ladders ────────────────────────────────────────────────
  {tier:3, start:"SUN", target:"MAN",
   steps:[
     {from:"SUN", correct:"SIN", wrong:["GUN","SIT"]},
     {from:"SIN", correct:"TIN", wrong:["TAN","SIT"]},
     {from:"TIN", correct:"TAN", wrong:["MAN","TEN"]},
     {from:"TAN", correct:"MAN", wrong:["CAN","MAT"]},
   ]},
  {tier:3, start:"CAT", target:"LOG",
   steps:[
     {from:"CAT", correct:"HAT", wrong:["BAT","COT"]},
     {from:"HAT", correct:"HOT", wrong:["HIT","HOG"]},
     {from:"HOT", correct:"HOG", wrong:["LOG","DOG"]},
     {from:"HOG", correct:"LOG", wrong:["DOG","LAG"]},
   ]},
  {tier:3, start:"BED", target:"DIG",
   steps:[
     {from:"BED", correct:"BAD", wrong:["BIG","BID"]},
     {from:"BAD", correct:"BAG", wrong:["BIG","DAG"]},
     {from:"BAG", correct:"BIG", wrong:["DIG","PIG"]},
     {from:"BIG", correct:"DIG", wrong:["RIG","FIG"]},
   ]},
  {tier:3, start:"HEN", target:"PIG",
   steps:[
     {from:"HEN", correct:"TEN", wrong:["PEN","HEM"]},
     {from:"TEN", correct:"TAN", wrong:["PAN","TON"]},
     {from:"TAN", correct:"PAN", wrong:["PIN","PAT"]},
     {from:"PAN", correct:"PIG", wrong:["PIN","FIG"]},
   ]},
  {tier:3, start:"MOP", target:"NIT",
   steps:[
     {from:"MOP", correct:"MOT", wrong:["HOP","MOB"]},
     {from:"MOT", correct:"NOT", wrong:["NET","NUT"]},
     {from:"NOT", correct:"NIT", wrong:["NET","SIT"]},
   ]},
];
