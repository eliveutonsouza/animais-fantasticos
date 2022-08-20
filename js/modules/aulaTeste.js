// Mude a cor da tela para azul e depois para vermelho a cada 2s.

// setInterval(() => {
//   const body = document.querySelector("body");
//   body.classList.toggle("active");
// }, 3000);

// Crie um cronometro utilizando o setInterval. Deve ser possível
// iniciar, pausar e resetar (duplo clique no pausar).

// const iniciar = document.querySelector("[data-iniciar]");
// const pausar = document.querySelector("[data-pausar]");
// const tempo = document.querySelector("[data-contador]");

// iniciar.addEventListener("click", iniciarTempo);
// pausar.addEventListener("click", pausarTempo);
// pausar.addEventListener("dblclick", resetarTempo);

// let tempoInicial = 0;
// let timer;

// function iniciarTempo() {
//   timer = setInterval(() => {
//     tempo.innerText = tempoInicial++;
//   }, 500);

//   iniciar.setAttribute("disabled", "");
// }

// function pausarTempo() {
//   clearInterval(timer);
//   iniciar.removeAttribute("disabled");
// }

// function resetarTempo() {
//   tempo.innerText = 0;
//   i = 0;
// }
