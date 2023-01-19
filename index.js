let btn = document.querySelector("#btn")
let input = document.querySelector("#input").value

function getValue () {
    input = document.querySelector("#input").value
    console.log(input)
}


btn.addEventListener('click', getValue)