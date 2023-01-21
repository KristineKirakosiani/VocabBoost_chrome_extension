
function pop_a_word(word, language) {
  let wd = require("word-definition");
  wd.getDef(word, language, null, function (definition) {
    console.log(definition);
  });
}

function get_input_word() {
  let myButton = document.querySelector("#btn");
  myButton.addEventListener("click", function () {
    let input = document.querySelector("#input").value;
    console.log(input)
    pop_a_word(input,"fr")
  });
}
get_input_word();