function ConverterTemperatura() {

    let c = parseFloat(document.getElementById('Centigrados').value);
    let f = (9 * c + 160) / 5;
    document.getElementById('Fahrenheit').value = f;

    if (f > 68) {
        document.getElementById('Fahrenheit').style.backgroundColor = 'red'
    }

    else  {
        document.getElementById('Fahrenheit').style.backgroundColor = 'blue'
    }

}