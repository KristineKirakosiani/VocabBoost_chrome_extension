function show_random_word(){
    //const randomElement = array_word[Math.floor(Math.random() * array_word.length)];
    let array_word=["time","person","year","way","day","thing","man","world","life","hand","part","child","eye","woman","place","work","week","case","point","government","company" ,"number","group","problem","fact"]

      setInterval(function (){
        const randomElement = array_word[Math.floor(Math.random() * array_word.length)];
        alert(randomElement)
      }, 6000);
  
  }
chrome.runtime.onInstalled.addListener(() => {
    chrome.action.setBadgeText({
     show_random_word
    });
  });