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

    alert("Cadastro realizado com sucesso! Faça login com seus dados.");

    // Limpa os campos do formulário de cadastro
    document.querySelector(".sign-up-form input[type='text']").value = "";
    document.querySelector(".sign-up-form input[type='password']").value = "";
    document.getElementById("dataNascimento").value = "";

    // Alterna para o modo de login
    container.classList.remove("sign-up-mode");
}

function verificarlogin(event) {
    event.preventDefault(); 
    let usuario = document.getElementById("user").value.trim();
    let senha = document.getElementById("senha").value.trim();
    let usuarioSalvo = localStorage.getItem("usuarioCadastrado");
    let senhaSalva = localStorage.getItem("senhaCadastrada");

    if (usuario === usuarioSalvo && senha === senhaSalva) {
    alert("Login realizado com sucesso!");
    localStorage.setItem("usuarioLogado", "true");
    window.location.href="../home/index.html";
} else {
    alert("Usuário ou senha incorretos.");
}

}


document.querySelector(".sign-in-form").addEventListener("submit", verificarlogin);

function mascaraCEP(input) {
      let v = input.value.replace(/\D/g, '');
      if (v.length > 5) v = v.slice(0, 5) + '-' + v.slice(5, 8);
      input.value = v;
    }

    document.addEventListener('DOMContentLoaded', function () {
      const cepInput = document.getElementById('cep');
      const cepInfo = document.getElementById('cep-info');

      if (cepInput) {
        cepInput.addEventListener('blur', function () {
          const cep = cepInput.value.replace(/\D/g, '');

          if (cep.length === 8) {
            fetch(`https://viacep.com.br/ws/${cep}/json/`)
              .then(response => response.json())
              .then(data => {
                if (data.erro) {
                  cepInfo.textContent = 'CEP não encontrado.';
                } else {
                  cepInfo.textContent = `${data.logradouro || ''} ${data.bairro || ''} ${data.localidade || ''} - ${data.uf || ''}`;
                }
              })
              .catch(() => {
                cepInfo.textContent = 'Erro ao buscar o CEP.';
              });
          } else if (cep.length > 0) {
            cepInfo.textContent = 'CEP inválido.';
          } else {
            cepInfo.textContent = '';
          }
        });
      }
    });
  

