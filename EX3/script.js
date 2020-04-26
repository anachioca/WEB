// Ana Laura Chioca Vieira  9866531

// contando palavras e atualizando o header

var paragraph = document.getElementsByTagName("p")[0].innerHTML
var words = paragraph.split(" ")
var size = words.length
var header = size + " " + document.getElementsByTagName("h1")[0].innerHTML // heading novo, que inclui a contagem de palavras em <p> e o heading antigo
document.getElementsByTagName("h1")[0].innerHTML = header // atualiza o heading antigo com o novo

//link home ao final do ultimo parágrafo

var home = document.createElement("a")
home.href = "index.html"
home.innerHTML = "home"
document.body.appendChild(home)  

// grifando palavras

var paragraph = document.getElementsByTagName("p")[0].innerHTML
var noPunctuation = paragraph.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()"]/g,"")
var finalString = noPunctuation.replace(/\s{2,}/g," ") // retirando a pontuação do paragrafo
var words = finalString.split(" ") 

var heading = document.getElementsByTagName("h1")[0].innerHTML
var noPunctuation_h = heading.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()"]/g,"")
var finalString_h = noPunctuation_h.replace(/\s{2,}/g," ") // retirando a pontuação do heading
var words_h = finalString_h.split(" ")

for (var j = 0; j < words.length; j++){  // verificando palavra por palavra e mudando sua classe conforme a quantidade de letras
    words[j].className = null
    if (words[j].length == 4 || words[j].length == 5)
        words[j].className = 'purple'
    if (words[j].length == 6)
        words[j].className = 'blue'
    if (words[j].length >= 8)
        words[j].className = 'pink'  
}

document.getElementsByTagName("p")[0].innerHTML = words.join(' ');

// não deu certo essa parte de grifar as palavras :(


//separando cada frase em uma nova linha

var new_paragraph = document.createElement("p");

for(var i = 0; i < paragraph.length; i++){
    if(paragraph[i] == "." || paragraph[i] == "!" || paragraph[i] == "?") 
        new_paragraph.innerHTML += paragraph[i] + "<br>"
    else 
        new_paragraph.innerHTML += paragraph[i] 
}

document.getElementsByTagName("p")[0].innerHTML = new_paragraph.innerHTML // atualiza o paragrafo antigo com o novo.
