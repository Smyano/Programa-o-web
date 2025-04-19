function calcularGastos() {
  const fixa = parseFloat(document.getElementById('rendaFixa').value) || 0;
  const extra = parseFloat(document.getElementById('rendaExtra').value) || 0;
  const variavel = parseFloat(document.getElementById('rendaVariavel').value) || 0;
  const alimentacao = parseFloat(document.getElementById('alimentacao').value) || 0;
  const saude = parseFloat(document.getElementById('saude').value) || 0;
  const moradia = parseFloat(document.getElementById('moradia').value) || 0;
  const necessidades = parseFloat(document.getElementById('necessidades').value) || 0;
  const lazer = parseFloat(document.getElementById('lazer').value) || 0;

  const total = (fixa + extra + variavel) - (alimentacao + saude + moradia + necessidades + lazer);

  
  const resultado1Div = document.getElementById('resultadoGastos');
  resultado1Div.innerText = `Gastos Totais: R$ ${total.toFixed(2)}`;
}



src="https://cdn.jsdelivr.net/npm/chart.js"