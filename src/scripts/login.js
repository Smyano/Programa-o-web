const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

document.addEventListener("DOMContentLoaded", function () {
    let usuarioSalvo = localStorage.getItem("usuarioCadastrado");
    let senhaSalva = localStorage.getItem("senhaCadastrada");

    if (usuarioSalvo && senhaSalva) {
        document.getElementById("user").value = usuarioSalvo;
        document.getElementById("senha").value = senhaSalva;
    }
});

function cadastro() {
    let usuario = document.querySelector(".sign-up-form input[type='text']").value.trim();
    let senha = document.querySelector(".sign-up-form input[type='password']").value.trim();
    let dataNascimento = document.getElementById("dataNascimento").value;

    if (usuario === "" || senha === "" || dataNascimento === "") {
        alert('Todos os campos devem ser preenchidos!');
        return;
    }

    
    localStorage.setItem("usuarioCadastrado", usuario);
    localStorage.setItem("senhaCadastrada", senha);

    alert("Cadastro realizado com sucesso! Redirecionando para o login...");

   
    window.location.href = "login.html"; 
}

function verificarlogin(event) {
    event.preventDefault(); 
    let usuario = document.getElementById("user").value.trim();
    let senha = document.getElementById("senha").value.trim();
    let usuarioSalvo = localStorage.getItem("usuarioCadastrado");
    let senhaSalva = localStorage.getItem("senhaCadastrada");

    if (usuario === "senac" && senha === "2025") {
        alert("Login realizado com sucesso!");
        localStorage.setItem("usuarioLogado", "true");
        window.location.href = "home.html"; 
    } else {
        alert("Usuário ou senha incorretos.");
    }
}


document.querySelector(".sign-in-form").addEventListener("submit", verificarlogin);



