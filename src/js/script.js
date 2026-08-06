// Script do menu mobile

function menuMobile() {
  const menuMobile = document.querySelector(".header-menuMobile");
  const nav = document.querySelector(".header-list");
  const links = document.querySelectorAll(".header-menu a");

  function ativarMenuMobile(event) {
    if (event.type === "touchstart") event.preventDefault();

    nav.classList.toggle("ativar");
    document.body.classList.toggle("menu-aberto");

    const active = nav.classList.contains("ativar");

    menuMobile.setAttribute("aria-expanded", active);
    menuMobile.setAttribute(
      "aria-label",
      active ? "Fechar menu" : "Abrir menu"
    );
  }

  function fecharMenu() {
    nav.classList.remove("ativar");
    document.body.classList.remove("menu-aberto");

    menuMobile.setAttribute("aria-expanded", false);
    menuMobile.setAttribute("aria-label", "Abrir menu");
  }

  menuMobile.addEventListener("click", ativarMenuMobile);
  menuMobile.addEventListener("touchstart", ativarMenuMobile);

  links.forEach((link) => {
    link.addEventListener("click", fecharMenu);
  });
}

menuMobile();

// Script da seção dúvidas do jogo

function perguntasJogo() {
  const perguntas = document.querySelectorAll(".perguntas button");

  function ativarPergunta(event) {
    const pergunta = event.currentTarget;
    const controls = pergunta.getAttribute("aria-controls");
    const resposta = document.getElementById(controls);

    resposta.classList.toggle("ativa");
    const ativa = resposta.classList.contains("ativa");
    pergunta.setAttribute("aria-expanded", ativa);
  }

  function eventosPerguntas(pergunta) {
    pergunta.addEventListener("click", ativarPergunta);
  }

  perguntas.forEach(eventosPerguntas);
}

perguntasJogo();

// Script para ativar o modal

function ativarModal() {
  const jogoModal = document.querySelector("#jogo-modal");
  const btnModal = document.querySelector(".btn-modal");
  const btnCloseModal = document.querySelector(".btn-close");

  function abrirModal() {
    jogoModal.classList.add("ativo");
    document.body.classList.add("modal-aberto");
  }

  function fecharModal() {
    jogoModal.classList.remove("ativo");
    document.body.classList.remove("modal-aberto");
  }

  btnModal.addEventListener("click", abrirModal);
  
  btnCloseModal.addEventListener("click", fecharModal);

  jogoModal.addEventListener("click", (event) => {
    if (event.target === jogoModal) {
      fecharModal();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && jogoModal.classList.contains("ativo")) {
      fecharModal();
    }
  });
}

ativarModal();

new SimpleAnime();