function CalcularSomaMaiores() {

    var n1 = parseFloat(prompt("Digite o 1° número:"));
    var n2 = parseFloat(prompt("Digite o 2° número:"));
    var n3 = parseFloat(prompt("Digite o 3° número:"));
    var n4 = parseFloat(0);

    if(n1 >= n2 && n2 >= n3){        
        n4 = n1 + n2
    }
    else if(n1 >= n2 && n3 >= n2){
        n4 = n1 + n3
    }
    else{
        n4 = n3 + n2
    }

    alert(n4)
}
    