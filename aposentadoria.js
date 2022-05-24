function CalcularAposentadoria() {
    var nome = prompt("Nome do usuário");
    var DTnscmt = parseFloat(prompt("Data de nascimento"));
    var DTadmss = parseFloat(prompt("Data de admissão"));
    var idd = parseFloat()
    var admss = parseFloat(0)

    idd = 2022 - DTnscmt
    admss = 2022 - DTadmss
    if (idd >= 65) {
        if (admss >= 30) {
            alert("Requerer")
        }
    }
    else if (idd >= 60 && admss >= 25) {
        alert("Requerer")
    }
    else {
        alert("Não requerer")
    }
}