let myButton = document.querySelector("#btn")
let languageList = document.querySelector("#languageList")
let outputBox = document.querySelector("#output")



function pop_a_word(word, language) {
  let wd = require("word-definition");
  wd.getDef(word, language, null, function (definition) {
    console.log(definition);
    outputBox.innerHTML = definition.definition
  });
}

function get_input_word() {
  myButton.addEventListener("click", function () {
    let input = document.querySelector("#input").value;
    let chosenLanguage = document.querySelector("#chosenLanguage").value;
    console.log(chosenLanguage)
    console.log(input)
    pop_a_word(input, chosenLanguage)
  });
}
get_input_word();