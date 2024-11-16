document.addEventListener('DOMContentLoaded', () => {
    const formContato = document.getElementById('form-contato');
    const mensagemSucesso = document.getElementById('mensagem-sucesso');
  
    formContato.addEventListener('submit', (event) => {
      event.preventDefault(); // Impede o envio real do formulário (simulando envio)
  
      // Mostra a mensagem de sucesso
      mensagemSucesso.style.display = 'block';
  
      // Limpa os campos do formulário após o envio
      formContato.reset();
    });
  });
  