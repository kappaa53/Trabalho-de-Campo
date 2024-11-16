
document.addEventListener('DOMContentLoaded', () => {
    const destaques = document.getElementById('destaques');
    const promocoes = [
      "Cozinha Moçambicana - Sexta-feira às 19h",
      "Promocao no Almoço: na compra de dois pratos uma agua pequena.",
      "Festival de Mariscos: Todo último sábado do mês"
    ];
  
    promocoes.forEach(promocao => {
      const promoItem = document.createElement('p');
      promoItem.textContent = promocao;
      destaques.appendChild(promoItem);
    });
  });
  