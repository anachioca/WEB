// Ana Laura Chioca Vieira  9866531
// Exercício 4

let box = document.querySelector(".box");
box.style.backgroundColor = "black";
let btn = document.querySelector("button");
btn.addEventListener("click", myFunction);

function myFunction() {

    // faz um request no servidor e troca a cor da "box" para a cor retornada
    // a cor retornada é aleatória, podendo retornar a mesma cor duas ou mais vezes seguidas
    fetch (`https://reqres.in/api/unknown/${((Math.round(Math.random()*11))+1)}`)
        .then(function(response){
            return response.json()
        })
        .then(function(response){
            box.innerHTML = response.data.color + "<br>" + response.data.name;
            box.style.backgroundColor = response.data.color;
        })

}