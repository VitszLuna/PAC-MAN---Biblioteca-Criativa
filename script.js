

// CAPTURA ELEMENTOS
const botao = document.getElementById("continuar");
const inputNome = document.getElementById("nome");
const gif = document.querySelector(".img2");

// QUANDO O GIF TERMINAR A ANIMAÇÃO → remove do fluxo
gif.addEventListener("animationend", () => {
    gif.style.display = "none";
});

// BOTÃO "CONTINUAR"
botao.addEventListener("click", () => {
    if(inputNome.value.trim() === ""){
        alert("Por favor, digite seu nome!");
    } else {
        window.location.href = "home.html";
    }
});
