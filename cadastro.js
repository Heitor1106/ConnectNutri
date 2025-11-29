document.addEventListener('DOMContentLoaded', () => {
    // Seleciona o formulário pelo sua classe
    const form = document.querySelector('.formulario');

    if (form) {
        form.addEventListener('submit', (event) => {
            // Impede o envio padrão do formulário para podermos validar primeiro
            event.preventDefault();

            // Seleciona os campos de senha e o checkbox de termos
            const senhaInput = form.querySelector('input[name="senha"]');
            const confirmarSenhaInput = form.querySelector('input[name="confirmarsenha"]');
            const termosCheckbox = form.querySelector('input[name="termos"]');

            // 1. Validação: Verificar se as senhas coincidem
            if (senhaInput.value !== confirmarSenhaInput.value) {
                return; // Para a execução se as senhas forem diferentes
            }

            // 2. Validação: Verificar se os termos de uso foram aceitos
            if (!termosCheckbox.checked) {
                return; // Para a execução se os termos não foram aceitos
            }
        });
    }
});