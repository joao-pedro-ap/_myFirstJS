function CalcularSomaMaiores() {

    let n1 = parseFloat(prompt("Digite o 1° número:"));
    let n2 = parseFloat(prompt("Digite o 2° número:"));
    let n3 = parseFloat(prompt("Digite o 3° número:"));
    let n1maior = 0;
    let n2maior = 0;

    if ((n1 < n2) || (n1 < n3)) {
        n1maior == n2;
        n2maior == n3;
        console.log("Primeira condicional")
    }

    else if ((n2 < n1) || (n2 < n3)) {
        n1maior < n1;
        n2maior < n3;
        console.log("Segunda condicional")
    }

    else if ((n3 > n1) || (n3 < n2)) {
        n1maior < n1;
        n2maior < n2;
        console.log("Terceira condicional")
    }

    let resultado;
    somaMaiores = (n1maior + n2maior);

    alert
        ("A soma dos maiores números é " + somaMaiores  )

}
