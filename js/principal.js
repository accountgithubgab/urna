var inputFirst = document.getElementById('first');
var inputSecond = document.getElementById('second');
var inputThird = document.getElementById('third');
var inputFourth = document.getElementById('fourth');
var img = document.querySelector('.img-borda img');
console.log(img);

//// AUTOTAB
function autotab(original, destination) {
    if (original.getAttribute && original.value.length == original.getAttribute("maxlength"))
        destination.focus()
}

////// CONFIRMA
function confirma() {

    var first = inputFirst.value;
    var second = inputSecond.value;
    var third = inputThird.value;
    var fourth = inputFourth.value;

    var inputConjunto = (first + second + third + fourth);
    console.log(inputConjunto);

    
    nulo();
    votos();
    limpa();
}

/////// BRANCO
function branco() {

    var inputConjunto = "branco";
    console.log(inputConjunto);
}

////// CANCELA
function limpa() {
    inputFirst.value = "";
    inputSecond.value = "";
    inputThird.value = "";
    inputFourth.value = "";

}

/////// NULO  

function nulo() {
    var cond = (first + second + third + fourth);

    if (cond === 0000) {
        console.log("nulo");
    } 
}

///// VOTOS
function votos() {
    var votos = (first + second + third + fourth);

    switch (votos) {
        case 07:
        var caio = img.setAttribute('href','../img/MAD/caio.jpeg');
        document.getElementById('img').innerHTML = caio;
            break;

        default:
            break;
    }
}

