function ValidarFormulario() {
    let erro = "";

    if (document.getElementById('Nome').value.trim() == "") {
        erro = "O campo nome é obrigatório\n";
    }

    if (document.getElementById('Telefone').value.trim() == "") {
        erro += "O campo telefone é obrigatório\n";
    }

    if (document.getElementById('Email').value.trim() == "") {
        erro += "O campo e-mail é obrigatório\n";
    }

    else if
        (validateEmail(document.getElementById('Email').value) == false) {
        erro += "O e-mail digitado é inválido. \n"
    }

    if (document.getElementById('Cpf').value.trim() == "") {
        erro += "O campo CPF é obrigatório\n";
    }

    else if
        (validarCPF(document.getElementById('Cpf').value) == false) {
        erro += "O CPF digitado é inválido. \n";
    }

    if (erro != "") {
        alert("Atenção!\n\n" + erro);
        return false;
    }

    else {
        document.getElementById('frmContato').submit();
    }

    if (document.getElementById('Bairro').value.trim() == "") {
        erro += "O campo bairro é obrigatório\n";
    }

}

function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

function validarCPF(cpf) {
    cpf = cpf.replace(/[^\d]+/g, '');
    if (cpf == '') return false;
    // Elimina CPFs invalidos conhecidos	
    if (cpf.length != 11 ||
        cpf == "00000000000" ||
        cpf == "11111111111" ||
        cpf == "22222222222" ||
        cpf == "33333333333" ||
        cpf == "44444444444" ||
        cpf == "55555555555" ||
        cpf == "66666666666" ||
        cpf == "77777777777" ||
        cpf == "88888888888" ||
        cpf == "99999999999")
        return false;
    // Valida 1o digito	
    add = 0;
    for (i = 0; i < 9; i++)
        add += parseInt(cpf.charAt(i)) * (10 - i);
    rev = 11 - (add % 11);
    if (rev == 10 || rev == 11)
        rev = 0;
    if (rev != parseInt(cpf.charAt(9)))
        return false;
    // Valida 2o digito	
    add = 0;
    for (i = 0; i < 10; i++)
        add += parseInt(cpf.charAt(i)) * (11 - i);
    rev = 11 - (add % 11);
    if (rev == 10 || rev == 11)
        rev = 0;
    if (rev != parseInt(cpf.charAt(10)))
        return false;
    return true;
}