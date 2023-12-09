function goToReceberRecompensa () {
   window.location.href = './resgatarRecomensa.html'
}



//#############################################
//######     PUXAR NOME DO USÚARIO     ########
//#############################################



//#############################################
//####  PUXAR PONTOS PARA EXIBIR NA PG   ######
//#############################################
// Função para obter e exibir os pontos do localStorage
function exibirPontos() {
   const resultElement = document.getElementById("result");
   const pontos = localStorage.getItem("counter") || 0;
   console.log("Pontos exibidos:", pontos);
   resultElement.innerHTML = pontos;
}

// Função para incrementar os pontos no localStorage
function incrementarPontos() {
   localStorage.counter = (parseInt(localStorage.counter) || 0) + 5;
   console.log("Pontos incrementados para:", localStorage.counter);
   exibirPontos(); // Atualiza a exibição dos pontos após o incremento
}

document.addEventListener("DOMContentLoaded", function () {
   exibirPontos(); // Exibe os pontos ao carregar a página

   const myButtonElement = document.getElementById("myButton");

   if (myButtonElement) {
      myButtonElement.addEventListener("click", incrementarPontos);
      console.log("Evento de clique configurado para incrementar os pontos");
   }
});

