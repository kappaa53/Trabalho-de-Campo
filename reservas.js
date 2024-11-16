document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form-reserva');
    const mensagemSucesso = document.getElementById('mensagem-sucesso');
  
    form.addEventListener('submit', (event) => {
      event.preventDefault(); // Impede o envio padrão do formulário
  
      // Verifica se todos os campos estão preenchidos
      const nome = document.getElementById('nome').value.trim();
      const email = document.getElementById('email').value.trim();
      const telefone = document.getElementById('telefone').value.trim();
      const data = document.getElementById('data').value;
      const hora = document.getElementById('hora').value;
      const numeroPessoas = document.getElementById('numero-pessoas').value;
  
      if (!nome || !email || !telefone || !data || !hora || !numeroPessoas) {
        alert('Por favor, preencha todos os campos corretamente.');
        return;
      }
  
      // Verifica se a data e hora são válidas
      const dataAtual = new Date();
      const dataReserva = new Date(`${data}T${hora}`);
  
      if (dataReserva < dataAtual) {
        alert('A data e hora da reserva devem ser futuras.');
        return;
      }
  
      // Exibe a mensagem de confirmação
      mensagemSucesso.classList.remove('hidden');
      mensagemSucesso.scrollIntoView();
  
      // Limpa o formulário
      form.reset();
    });
  });
  