let myButton = document.querySelector("#btn_translate")
let outputBox = document.querySelector("#pop_definition")
let firstPage = document.getElementById("firstPage")
let random_word_page = document.getElementById("random_word_page")
let btn_switch = document.getElementById("btn_switch")


function pop_a_word(word, language) {
  
  let wd = require("word-definition");
  wd.getDef(word, language, null, function (definition) {
    //console.log(definition.definition);
    outputBox.innerHTML = definition.definition
      });

}

function get_input_word() {
  myButton.addEventListener("click", function () {
    let input = document.querySelector("#input_word").value;
    let chosenLanguage = document.querySelector("#chosenLanguage").value;
    console.log(chosenLanguage)
    console.log(input)
    pop_a_word(input, chosenLanguage)
  });
}
get_input_word();


let array_word=["time","person","year","way","day","thing","man","world","life","hand","part","child","eye","woman","place","work","week","case","point","government","company" ,"number","group","problem","fact"]
/*
function show_random_word(){
    setInterval(function (){
      var randomElement = array_word[Math.floor(Math.random() * array_word.length)];
      document.getElementById("random_word").innerHTML = randomElement
      
      let wd = require("word-definition");
      wd.getDef(randomElement, "en", null, function (definition) {
        console.log(definition.definition);
        document.getElementById("random_def").innerHTML = definition.definition
      });
    }, 6000);

}*/
function show_random_word(){
  document.querySelector("#btn_random").addEventListener("click", function () {
    var randomElement = array_word[Math.floor(Math.random() * array_word.length)];
    document.getElementById("random_word").innerHTML = randomElement
    
    let wd = require("word-definition");
    wd.getDef(randomElement, "en", null, function (definition) {
      console.log(definition.definition);
      document.getElementById("random_def").innerHTML = definition.definition
    });
  });

}

function switch_between_pages(){
  btn_switch.addEventListener("click", function () {
    if(getComputedStyle(firstPage).display != "none"){
      firstPage.style.display = "none";
      random_word_page.style.display = "block";
    } else {
      firstPage.style.display = "block";
      random_word_page.style.display = "none";
    }
  });
}
switch_between_pages()