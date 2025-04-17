function buscarRenda() {
    const estado = document.getElementById("estado").value;
    const resultadoDiv = document.getElementById("resultado");

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