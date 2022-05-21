function CalcularPar() {

    let n = prompt("Digite um número:");
    let resto = n % 2;

    if (resto == 0) {
        console.log(n + " par");
        alert (n + " é um número par");
    }

    else {
        console.log(n + " impar");
        alert (n + " é um número ímpar");
    }

}
