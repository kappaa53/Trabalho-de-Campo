document.addEventListener('DOMContentLoaded', () => {
    const formComentario = document.getElementById('form-comentario');
    const listaComentarios = document.getElementById('lista-comentarios');
  
    // Função para salvar e exibir comentários
    function carregarComentarios() {
      // Recupera os comentários do localStorage
      const comentarios = JSON.parse(localStorage.getItem('comentarios')) || [];
  
      // Limpa a lista de comentários
      listaComentarios.innerHTML = '';
  
      // Exibe os comentários
      comentarios.forEach((comentario, index) => {
        const divComentario = document.createElement('div');
        divComentario.classList.add('comentario');
        divComentario.textContent = comentario;
        listaComentarios.appendChild(divComentario);
      });
    }
  
    // Carregar comentários quando a página for carregada
    carregarComentarios();
  
    // Evento para o formulário de envio de comentário
    formComentario.addEventListener('submit', (event) => {
      event.preventDefault();
  
      // Captura o valor do comentário
      const comentario = document.getElementById('comentario').value.trim();
  
      if (comentario) {
        // Recupera os comentários do localStorage
        const comentarios = JSON.parse(localStorage.getItem('comentarios')) || [];
  
        // Adiciona o novo comentário
        comentarios.push(comentario);
  
        // Salva os comentários atualizados no localStorage
        localStorage.setItem('comentarios', JSON.stringify(comentarios));
  
        // Limpa o campo de texto
        document.getElementById('comentario').value = '';
  
        // Recarrega os comentários
        carregarComentarios();
      } else {
        alert('Por favor, escreva um comentário!');
      }
    });
  });
  