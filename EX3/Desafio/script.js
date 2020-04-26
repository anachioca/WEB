// Ana Laura Chioca Vieira  9866531

//mudando a fonte do body:

document.getElementsByTagName("body")[0].style.fontFamily = "Arial,Charcoal,sans-serif"

//mudando o conteudo dos <span>

document.getElementById("nickname").innerHTML = "Mickey Mouse"
document.getElementById("favorites").innerHTML = "Cheese and Minnie Mouse"
document.getElementById("hometown").innerHTML = "New York"

// criando um elemento image:

var image = document.createElement("img")
image.src = "Mickey.png"
document.body.appendChild(image)  