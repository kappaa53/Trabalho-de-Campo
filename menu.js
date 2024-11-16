
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('#filtros button');
    const items = document.querySelectorAll('.menu-item');
  
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        const filter = button.getAttribute('data-filter');
  
        items.forEach(item => {
          if (filter === 'all' || item.classList.contains(filter)) {
            item.style.display = 'flex'; // Mostra o item
          } else {
            item.style.display = 'none'; // Esconde o item
          }
        });
      });
    });
  });
  