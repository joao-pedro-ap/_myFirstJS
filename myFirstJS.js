function CalcularIMC() {
    let nome = prompt("Digite o seu nome:");
    let peso = parseFloat(prompt("Digite o seu peso:"));
    let altura = parseFloat(prompt("Digite a sua altura:"));
    let imc = 0;
    let resultado;

    imc = peso / (altura * altura);

    console.log(imc);


    if (imc < 18.5) {
        resultado = "Abaixo do peso"
    }

    if (imc >= 18.5 && imc < 25) {
        resultado = "Peso normal"
    }

    else if (imc >= 25 && imc < 30) {
        resultado = "Sobrepeso"
    }

    
    else if (imc >= 30 && imc < 35) {
        resultado = "Obesidade"
    }


    else if (imc >= 35 && imc < 40) {
        resultado = "Peso Obesidade 2"
    }

    else {
        resultado = "Peso Obesidade 3"
    }
alert(nome + " possui o imc " + imc + " e está " + resultado);

}

