// Ana Laura Chioca Vieira 9866531
// Exercício 3

document.getElementById("botao").addEventListener("click", grifar);

function grifar() {
    document.getElementsByTagName("p")[0].className = "grifo";
}