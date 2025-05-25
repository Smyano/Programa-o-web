function gerarRelatorio() {
  const rendaFixa = parseFloat(document.getElementById("rendaFixa").value) || 0;
  const rendaExtra = parseFloat(document.getElementById("rendaExtra").value) || 0;
  const rendaVariavel = parseFloat(document.getElementById("rendaVariavel").value) || 0;
  const totalRenda = rendaFixa + rendaExtra + rendaVariavel;

  const alimentacao = parseFloat(document.getElementById("alimentacao").value) || 0;
  const saude = parseFloat(document.getElementById("saude").value) || 0;
  const moradia = parseFloat(document.getElementById("moradia").value) || 0;
  const lazer = parseFloat(document.getElementById("lazer").value) || 0;
  const necessidades = parseFloat(document.getElementById("necessidades").value) || 0;
  const totalGastos = alimentacao + saude + moradia + lazer + necessidades;

  const saldoFinal = totalRenda - totalGastos;

  document.querySelector(".tela").innerHTML = `
    <div class="resultado-relatorio">
      <h3>Total de Renda: R$ ${totalRenda.toFixed(2)}</h3>
      <h3>Total de Gastos: R$ ${totalGastos.toFixed(2)}</h3>
      <h3>Saldo Final: <span style="color:${saldoFinal >= 0 ? 'lightgreen' : 'red'}">R$ ${saldoFinal.toFixed(2)}</span></h3>
    </div>
    <div class="graficos-container">
      <canvas id="graficoRenda"></canvas>
      <canvas id="graficoGasto"></canvas>
    </div>
  `;

  // Gráfico de Renda
  new Chart(document.getElementById("graficoRenda"), {
    type: 'pie',
    data: {
      labels: ['Renda Fixa', 'Renda Extra', 'Renda Variável'],
      datasets: [{
        data: [rendaFixa, rendaExtra, rendaVariavel],
        backgroundColor: ['#4C1D5C', 'rgb(212, 148, 214)', 'rgb(152, 43, 155)'],
      }]
    },
    options: {
      layout: {
        padding: 0
      },
      plugins: {
        title: {
          display: true,
          text: 'Distribuição da Renda (%)',
          padding: 5
        },
        tooltip: {
          callbacks: {
            label: function (context) {
              const total = rendaFixa + rendaExtra + rendaVariavel;
              const value = context.raw;
              const percent = ((value / total) * 100).toFixed(1);
              return `${context.label}: R$ ${value} (${percent}%)`;
            }
          }
        }
      }
    }
  });

  // Gráfico de Gastos
  new Chart(document.getElementById("graficoGasto"), {
    type: 'pie',
    data: {
      labels: ['Alimentação', 'Saúde', 'Moradia', 'Lazer', 'Necessidades'],
      datasets: [{
        data: [alimentacao, saude, moradia, lazer, necessidades],
        backgroundColor: ['#6A0DAD', '#9B59B6', '#7D3C98', '#8E44AD', '#5B2C6F'],
      }]
    },
    options: {
      layout: {
        padding: 0
      },
      plugins: {
        title: {
          display: true,
          text: 'Distribuição dos Gastos (%)',
          padding: 5
        },
        tooltip: {
          callbacks: {
            label: function (context) {
              const total = alimentacao + saude + moradia + lazer + necessidades;
              const value = context.raw;
              const percent = ((value / total) * 100).toFixed(1);
              return `${context.label}: R$ ${value} (${percent}%)`;
            }
          }
        }
      }
    }
  });
}
