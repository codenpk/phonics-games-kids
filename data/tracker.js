// Phonics Games — accuracy tracker
// Stores per-answer records in localStorage under 'phonics_tracker'.
// API: Tracker.record(game, word, correct, firstTry, ms)
//      Tracker.getEntries()
//      Tracker.clear()
window.Tracker=(function(){
  const KEY='phonics_tracker';
  function load(){
    try{
      const d=JSON.parse(localStorage.getItem(KEY)||'null');
      return(d&&d.v===1)?d:{v:1,entries:[]};
    }catch(e){return{v:1,entries:[]};}
  }
  function save(d){
    if(d.entries.length>3000)d.entries=d.entries.slice(-3000);
    try{localStorage.setItem(KEY,JSON.stringify(d));}catch(e){}
  }
  return{
    record(game,word,correct,first,ms){
      const d=load();
      d.entries.push({
        g:game,
        w:(word||'').toLowerCase().trim(),
        c:correct?1:0,
        f:first?1:0,
        ms:Math.min(Math.round(ms||0),30000),
        ts:Date.now()
      });
      save(d);
    },
    getEntries(){return load().entries;},
    clear(){localStorage.removeItem(KEY);}
  };
})();
