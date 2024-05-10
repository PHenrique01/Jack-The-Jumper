// Script do menu mobile

const menuMobile = document.querySelector(".header-menu")

function btnMenuMobile(){
  if(menuMobile.style.display === "block"){
    menuMobile.style.display = "none"
  }else{
    menuMobile.style.display = "block"
  }
}

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