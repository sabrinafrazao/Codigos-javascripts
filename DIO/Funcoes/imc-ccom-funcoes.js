
function calcularIMC(peso, altura){
    return peso / Math.pow(altura, 2);

}

function classificadorIMC(IMC){
    if(IMC < 18.5 ){
        return 'Abaixo do peso';
    } else if(IMC >= 18.5 && IMC < 25) {
        return 'Peso normal';
    } else if(IMC >= 25 && IMC < 30){
        return 'Acima do peso';
    } else if(IMC >= 30 && IMC < 40) {
        return 'Obeso';
    } else {
        return 'Obsesidade Grave';
    }

}

// Main
(function () {
    const peso = 75;
    const altura = 1.75;
    
    const IMC = calcularIMC(peso, altura);
    console.log(classificadorIMC(IMC));
})();


