document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const passwordInput = document.querySelector('input[name="senha"]');
    const togglePassword = document.querySelector('#togglePassword');

    // --- Funcionalidade para mostrar/ocultar senha ---
    if (togglePassword && passwordInput) {
        togglePassword.addEventListener('click', () => {
            // Adiciona uma classe para animar o ícone e a remove após a animação
            togglePassword.classList.add('animate-eye');
            setTimeout(() => togglePassword.classList.remove('animate-eye'), 300);

            // Verifica o tipo do input de senha
            const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordInput.setAttribute('type', type);

            // Troca o ícone do olho
            if (type === 'password') {
                // Se a senha está oculta, mostra o ícone 'hide'
                togglePassword.classList.remove('bxs-show');
                togglePassword.classList.add('bxs-hide');
            } else {
                // Se a senha está visível, mostra o ícone 'show'
                togglePassword.classList.remove('bxs-hide');
                togglePassword.classList.add('bxs-show');
            }
        });
    }

    // --- Validação básica do formulário no envio ---
    if (form) {
        form.addEventListener('submit', (event) => {
            event.preventDefault(); // Impede o envio do formulário para validação

            const emailInput = form.querySelector('input[name="email"]');

            // Exemplo de validação: verifica se os campos não estão vazios
            if (emailInput.value.trim() === '' || passwordInput.value.trim() === '') {
                alert('Por favor, preencha todos os campos.');
            } else {
                alert('Login realizado com sucesso! (simulação)');
                // Aqui você poderia enviar os dados para um servidor
                // form.submit(); // Descomente para enviar o formulário de verdade
            }
        });
    }
});