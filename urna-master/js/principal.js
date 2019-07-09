var inputFirst = document.getElementById('first');
var inputSecond = document.getElementById('second');
var inputThird = document.getElementById('third');
var inputFourth = document.getElementById('fourth');
var img = document.querySelector('.img-borda img');


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

    nulo();
    limpa();

    switch (inputConjunto) {
        case '67':
            img.src = './img/MAD/presidente/tiago.jpeg';
            break;

        case '6748':
            img.src = './img/MAD/caioE.jpeg';
            break;

        case '6778':
            img.src = './img/MAD/vitorC.jpeg';
            break;

        case '6726':
            img.src = './img/MAD/samuel.jpeg';
            break;

        case '42':
            img.src = './img/PLB/presidente/matheusM.jpeg';
            break;

        case '4224':
            img.src = './img/PLB/luiz.jpeg';
            break;

        case '4242':
            img.src = './img/PLB/pedro.jpeg';
            break;

        case '4222':
            img.src = './img/PLB/joaoB.jpeg';
            break;

        case '69':
            img.src = './img/PBM/presidente/mateusS.jpeg';
            break;

        case '6969':
            img.src = './img/PBM/gabrielZ.jpeg';
            break;

        case '6996':
            img.src = './img/PBM/joaoP.jpeg';
            break;

        case '6966':
            img.src = './img/PBM/arthur.jpeg';
            break;

        case '24':
            img.src = './img/PJ/presidente/gabrielT.jpeg';

            break;

        case '2403':
            img.src = './img/PJ/giulia.jpeg';

            break;

        case '2420':
            img.src = './img/PJ/lucas.jpeg';

            break;

        case '2442':
            img.src = './img/PJ/sophia.jpeg';

            break;

        case '39':
            img.src = './img/PLCJ/presidente/caioG.jpeg';

            break;

        case '3911':
            img.src = './img/PLCJ/gabrielS.jpeg';

            break;

        case '3995':
            img.src = './img/PLCJ/kaue.jpeg';

            break;

        case '3947':
            img.src = './img/PLCJ/theo.jpeg';

            break;

        case '98':
            img.src = './img/PDM/presidente/isadora.jpeg';

            break;

        case '9898':
            img.src = './img/PDM/ana.jpeg';

            break;

        case '9858':
            img.src = './img/PDM/gabrielaO.jpeg';

            break;

        case '9828':
            img.src = './img/PDM/natalia.jpeg';

            break;

        case '26':
            img.src = './img/MMCB/presidente/vitorM.jpeg';

            break;

        case '2602':
            img.src = './img/MMCB/beatriz.jpeg';

            break;

        case '2603':
            img.src = './img/MMCB/carol.jpeg';

            break;

        case '2604':
            img.src = './img/MMCB/maria.jpeg';

            break;

        default:
            break;
    }

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
