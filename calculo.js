
function calcularTotal() {
  const fixa = parseFloat(document.getElementById('rendaFixa').value) || 0;
  const extra = parseFloat(document.getElementById('rendaExtra').value) || 0;
  const variavel = parseFloat(document.getElementById('rendaVariavel').value) || 0;

  const total = fixa + extra + variavel;

  const resultadoDiv = document.getElementById('resultado');
  resultadoDiv.innerText = `Renda Total: R$ ${total.toFixed(2)}`;
}




src="https://cdn.jsdelivr.net/npm/chart.js"