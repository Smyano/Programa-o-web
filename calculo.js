function calcularTotal() {
    const fixa = parseFloat(document.getElementById('rendaFixa').value) || 0;
    const extra = parseFloat(document.getElementById('rendaExtra').value) || 0;
    const variavel = parseFloat(document.getElementById('rendaVariavel').value) || 0;

    const total = fixa + extra + variavel;

    document.getElementById('resultado').innerText = `Renda Total: R$ ${total.toFixed(2)}`;
  }