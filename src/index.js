let btn = document.querySelector("#btn")

function getValue () {
   let value = document.querySelector("#input").value
   let input =  value
    // send the data to php with ajax
    $.ajax({
      type: 'POST',
      url: 'http://localhost:8888/hug/post.php',
      data: input,
      success: function(data) {
        //success code
        console.log(data)
      }
    })
}


btn.addEventListener('click', getValue);