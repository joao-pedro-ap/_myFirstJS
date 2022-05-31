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

    else {
        if (validateEmail(document.getElementById('Email').value) == false) {
            erro += "O e-mail digitado é inválido. \n"
        }
    }

    if (document.getElementById('Cpf').value.trim() == "") {
        erro += "O campo CPF é obrigatório\n";
    }

    if (document.getElementById('Bairro').value.trim() == "") {
        erro += "O campo bairro é obrigatório\n";
    }

    if (erro != "") {
        alert("Atenção!\n\n" + erro);
        return false;
    }

    else {
        document.getElementById('frmContato').submit();
    }

}

function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}