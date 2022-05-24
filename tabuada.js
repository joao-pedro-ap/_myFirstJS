function CalcularTabuada() {
    var tabu = prompt("Digite um número da tabuada")
    var rstd = parseFloat()

    if (tabu <= 9 && tabu >= 1) {
        for (var i = 0; i < 11; i++) {
            rstd = tabu * i
            alert(tabu + " x" + i + " = " + rstd)
        }
    }
    else {
        alert("Número inválido")
    }
}