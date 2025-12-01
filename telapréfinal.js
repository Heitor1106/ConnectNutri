document.addEventListener('DOMContentLoaded', function() {

const cancelButton = document.querySelector('.cancel-button');
    if (cancelButton) {
      cancelButton.addEventListener('click', (event) => {
        event.preventDefault(); // Previne o comportamento padrão do link primeiro.
        window.location.href = 'telainicio.html'; // Força o redirecionamento para a tela inicial.
      });
    }
  });