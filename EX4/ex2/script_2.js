// Ana Laura Chioca Vieira 9866531
// Exercício 2

// Substitua o texto "Change me" com algo da sua escolha.

document.getElementById("change_heading").innerHTML = "Hover over the color"

// Faça com que quando passado o mouse em cima das “caixas” um texto que diz a cor da mesma, apareça.

document.getElementsByClassName("brown")[0].addEventListener("mouseover", MouseOverBrown);
document.getElementsByClassName("brown")[0].addEventListener("mouseout", MouseOut);

document.getElementsByClassName("green")[0].addEventListener("mouseover", MouseOverGreen);
document.getElementsByClassName("green")[0].addEventListener("mouseout", MouseOut);

document.getElementsByClassName("blue")[0].addEventListener("mouseover", MouseOverBlue);
document.getElementsByClassName("blue")[0].addEventListener("mouseout", MouseOut);

document.getElementsByClassName("yellow")[0].addEventListener("mouseover", MouseOverYellow);
document.getElementsByClassName("yellow")[0].addEventListener("mouseout", MouseOut);

function MouseOverBrown(){
    document.getElementsByClassName("selected")[0].innerHTML = "Brown";
}

function MouseOverGreen(){
  document.getElementsByClassName("selected")[0].innerHTML = "Green";
}

function MouseOverBlue(){
  document.getElementsByClassName("selected")[0].innerHTML = "Blue";
}

function MouseOverYellow(){
  document.getElementsByClassName("selected")[0].innerHTML = "Yellow";
}

function MouseOut(){
    document.getElementsByClassName("selected")[0].innerHTML = "None!";
}


// Crie um novo elemento <div> coloque uma classe radom, e um evento que faça com que a cor dessa nova “caixa” mude quando clicada

var newdiv = document.createElement("div");
newdiv.id = "random"
newdiv.className = "purple";
document.getElementsByTagName("section")[0].appendChild(newdiv);

document.getElementById("random").addEventListener("click", ChangeColor);

function ChangeColor() {
  document.getElementById("random").className = "yellow";
}