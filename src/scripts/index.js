// get elements from html page 

let myButton = document.querySelector("#btn_translate");
let outputBox = document.querySelector("#pop_definition");
let firstPage = document.getElementById("firstPage");
let random_word_page = document.getElementById("random_word_page");
let btn_switch = document.getElementById("btn_switch");


// function that allows to get definition. It takes the word and the language parameters and shows in first page of html 

function pop_a_word(word, language) {
  let wd = require("word-definition");
  wd.getDef(word, language, null, function (definition) {
    outputBox.innerHTML = definition.definition;
  });
}

// this function on click of the btn gets written word and selected language and passes this arguments to the function pop_a_word

function get_input_word() {
  myButton.addEventListener("click", function () {
    let input = document.querySelector("#input_word").value;
    let chosenLanguage = document.querySelector("#chosenLanguage").value;
    pop_a_word(input, chosenLanguage);
  });
}
get_input_word();

// words to get by chance with math random function

let array_word = [
  "time",
  "person",
  "year",
  "way",
  "day",
  "thing",
  "man",
  "world",
  "hand",
  "part",
  "child",
  "eye",
  "woman",
  "place",
  "work",
  "week",
  "case",
  "point",
  "government",
  "company",
  "number",
  "group",
  "problem",
  "fact",
];
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


// this function gets a random word element from the array and prints it in output box

function show_random_word() {
  document.querySelector("#btn_random").addEventListener("click", function () {
    var randomElement =
      array_word[Math.floor(Math.random() * array_word.length)];
    document.getElementById("random_word").innerHTML = randomElement;

    let wd = require("word-definition");
    wd.getDef(randomElement, "en", null, function (definition) {
      console.log(definition.definition);
      document.getElementById("random_def").innerHTML = definition.definition;
    });
  });
}
show_random_word();



function switch_between_pages() {
  btn_switch.addEventListener("click", function () {
    if (getComputedStyle(firstPage).display != "none") {
      firstPage.style.display = "none";
      random_word_page.style.display = "flex";
    } else {
      firstPage.style.display = "flex";
      random_word_page.style.display = "none";
    }
  });
}
switch_between_pages();
