// Script do menu mobile

const menuMobile = document.querySelector(".header-menuMobile");

function ativarMenuMobile(event) {
  if (event.type === "touchstart") event.preventDefault();
  const nav = document.querySelector(".header-list");
  nav.classList.toggle("ativar");

  const active = nav.classList.contains("ativar");
  event.currentTarget.setAttribute("aria-expanded", active);

  if (active) {
    event.currentTarget.setAttribute("aria-label", "Fechar");
  } else {
    event.currentTarget.setAttribute("aria-label", "Abrir");
  }
}

menuMobile.addEventListener("click", ativarMenuMobile);
menuMobile.addEventListener("touchstart", ativarMenuMobile);

// Script da seção dúvidas do jogo
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

new SimpleAnime();
