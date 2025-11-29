document.addEventListener('DOMContentLoaded', () => {
    // Seleciona os itens do menu
    const menuInicio = document.getElementById('menu-inicio');
    const menuSuporte = document.getElementById('menu-suporte');
    const menuConsultas = document.getElementById('menu-consultas');

    // Adiciona o evento de clique para o item "INÍCIO"
    if (menuInicio) {
        menuInicio.addEventListener('click', (event) => {
            event.preventDefault(); // Previne o comportamento padrão do link
            window.location.href = 'telainicio.html'; // Redireciona para a tela inicial
        });
    }

    // Adiciona o evento de clique para o item "SUPORTE" (recarrega a página atual)
    if (menuSuporte) {
        menuSuporte.addEventListener('click', (event) => {
            event.preventDefault();
            window.location.reload();
        });
    }

    // Adiciona o evento de clique para o item "CONSULTAS"
    if (menuConsultas) {
        menuConsultas.addEventListener('click', (event) => {
            event.preventDefault();
            window.location.href = 'agendamento.html'; // Redireciona para a tela de agendamento
        });
    }
});