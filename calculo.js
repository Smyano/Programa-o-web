function calcularGastos() {
  const parse = (id) => parseFloat(document.getElementById(id).value.replace(',', '.')) || 0;

  const fixa = parse('rendaFixa');
  const extra = parse('rendaExtra');
  const variavel = parse('rendaVariavel');

  let alimentacao = parse('alimentacao');
  let saude = parse('saude');
  let moradia = parse('moradia');
  let necessidades = parse('necessidades');
  let lazer = parse('lazer');

  let totalReceita = fixa + extra + variavel;
  let totalGastos = alimentacao + saude + moradia + necessidades + lazer;

  let sobra = totalReceita - totalGastos;

  while (sobra > 0) {
    let escolha = prompt(`Você ainda tem R$ ${sobra.toFixed(2)}. Deseja DISTRIBUIR ou GUARDAR?`).toLowerCase();

    if (escolha === 'guardar') {
      alert(`Valor guardado: R$ ${sobra.toFixed(2)}.`);
      break;
    } else if (escolha === 'distribuir') {
      let categoria = prompt("Para qual categoria deseja adicionar? (alimentacao, saude, moradia, necessidades, lazer)").toLowerCase();
      let valor = parseFloat(prompt("Qual valor deseja adicionar?").replace(',', '.'));

      if (isNaN(valor) || valor <= 0 || valor > sobra) {
        alert("Valor inválido ou maior que o valor restante.");
      } else {
        switch (categoria) {
          case 'alimentacao': alimentacao += valor; break;
          case 'saude': saude += valor; break;
          case 'moradia': moradia += valor; break;
          case 'necessidades': necessidades += valor; break;
          case 'lazer': lazer += valor; break;
          default:
            alert("Categoria inválida.");
            continue;
        }

        sobra -= valor;
      }
    } else {
      alert("Escolha inválida. Digite 'distribuir' ou 'guardar'.");
    }
  }

  const resultado1Div = document.getElementById('resultadoGastos');
  const totalFinal = totalReceita - sobra;

  resultado1Div.innerText = `Total de Gastos: R$ ${totalFinal.toFixed(2)}\nValor Guardado: R$ ${sobra.toFixed(2)}`;
}
function buscarRenda() {
  const estado = document.getElementById("estado").value;
  const resultadoDiv = document.getElementById("resultadoRenda");

  if (!estado) {
    resultadoDiv.innerText = "Por favor, selecione um estado.";
    return;
  }

  const rendaEstados = {
    "12": 950.50,
    "27": 890.70,
    "13": 1000.20,
    "29": 1100.30,
    "23": 950.90,
    "53": 2800.00,
    "32": 1600.00,
    "52": 1700.00,
    "31": 1800.00,
    "33": 2300.00,
    "35": 2500.00,

  };

  const renda = rendaEstados[estado];



  if (renda) {
    resultadoDiv.innerText = `Renda média é de: R$ ${renda.toFixed(2).replace('.', ',')}`;
  } else {
    resultadoDiv.innerText = "Dados não disponíveis.";
  }
}