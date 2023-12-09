function exibirPontos() {
   const resultElement = document.getElementById("result");
   if (resultElement) {
      resultElement.innerHTML = localStorage.getItem("counter") || 0;
   }
}

function incrementarPontos() {
   localStorage.counter = (parseInt(localStorage.counter) || 0) + 5;
   exibirPontos();
}
