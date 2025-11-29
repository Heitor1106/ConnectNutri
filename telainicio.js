document.addEventListener('DOMContentLoaded', () => {
    const userProfileNameElement = document.querySelector('.profile-section span');

    const userName = 'Heitor'; 
    if (userProfileNameElement) {
        userProfileNameElement.textContent = userName;
    }

    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => {
        item.addEventListener('click', (event) => {
            event.preventDefault();
            const itemId = item.id;
            let message = '';
            
            switch (itemId) {
                case 'menu-inicio':
                    // Recarrega a página
                    location.reload();
                    break;
                case 'menu-suporte':
                    window.location.href = 'telasuporte.html';
                    break;
                case 'menu-consultas':
                    message = "Você clicou em CONSULTAS. Carregando sua agenda...";
                    break;
                default:
                    message = 'Item de menu clicado.';
            }
        });
    });

    const profileSection = document.querySelector('.profile-section');
    if (profileSection) {
        profileSection.addEventListener('click', () => {
            alert("Você clicou no perfil. Exibindo opções da conta...");
        });
    }

    const scheduleButtons = document.querySelectorAll('.schedule-button');
    if (scheduleButtons) {
        scheduleButtons.forEach(button => {
            button.addEventListener('click', () => {
                const buttonText = button.textContent.trim();

                if (buttonText === 'Agendar Consulta') {
                    // Redireciona o usuário para a página de agendamento
                    window.location.href = 'agendamento.html';
                } else if (buttonText === 'Atendimento') {
                    // Redireciona o usuário para a página de suporte
                    window.location.href = 'telasuporte.html';
                }
            });
        });
    }
});