// Ana Laura Chioca Vieira 9866531
// Exercício 1

document.getElementById("lib-button").addEventListener("click", makeMadTalk);

function makeMadTalk() {

    var text = "";
    text += document.getElementById("person").value + " really likes ";
    text += document.getElementById("adjective").value + " ";
    text += document.getElementById("noun").value + ".<br>";
    
    
    document.getElementById("story").innerHTML = text;
}
