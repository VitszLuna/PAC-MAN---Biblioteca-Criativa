  function salvarNome() {
      const nome = document.getElementById("nome").value;
      if (nome.trim() !== "") {
        localStorage.setItem("nomeUsuario", nome);
        window.location.href = "home.html";
      } else {
        alert("Por favor, digite seu nome.");
      }
    }