function pop_a_word(word, language) {
    var wd = require(["word-definition"]);
  
    wd.getDef(word, language, null, function (definition) {
      console.log(definition);
  
    });
  }

function get_input_word() {
  let btn = document.querySelector("#btn");
  btn.addEventListener("click", function () {
    input = document.querySelector("#input").value;
    console.log(input)
    pop_a_word(input,"fr")
  });
}
get_input_word();