function CalcularVelocidade() {
    if (document.getElementById('Tempo').value == "")
        alert("O prenchimento é obrigatório");
    document.getElementById('Tempo').focus();
    return
}

let t = parseFloat(document.getElementById('Tempo').value);
let d = parseFloat(document.getElementById('DistanciaPercorrida').value);

let f = (9 * c + 160) / 5;
document.getElementById('Fahrenheit').value = f;

if (f > 68) {
    document.getElementById('Fahrenheit').style.backgroundColor = 'red'
}

else {
    document.getElementById('Fahrenheit').style.backgroundColor = 'blue'
}

