let buttonSubmit = document.getElementById("submit-email");
let inputEmail = document.getElementById("email");


buttonSubmit.addEventListener('click', formSent);

function formSent() {

    if (inputEmail.value != "") {
        alert("E-mail cadastrado, agora você será atualizado sobre tudo que acontece na Rocketseat");
    }
}

