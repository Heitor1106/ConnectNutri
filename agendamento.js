document.addEventListener('DOMContentLoaded', function() {
    // Encontra o elemento no HTML onde o calendário será renderizado
    var calendarEl = document.getElementById('calendar');
    // Variável para guardar a célula do dia que foi clicada anteriormente
    let previouslyClickedDateCell = null;
  
    // Cria uma nova instância do FullCalendar
    var calendar = new FullCalendar.Calendar(calendarEl, {
      // Define a visualização inicial para o mês
      initialView: 'dayGridMonth',
      
      locale: 'pt-br',

      // Configura os botões do cabeçalho (anterior, próximo, hoje, título do mês)
      headerToolbar: {
        left: 'prev,next',
        center: 'title',
        right: '' // Remove os botões de visualização de mês, semana e dia
      },

      views: {
        dayGridMonth: {
          titleFormat: { year: 'numeric', month: 'long' }
        }
      },

      dateClick: function(info) {
        const selectedDateSpan = document.getElementById('selected-date');
        const timeSlotsContainer = document.querySelector('.time-slots-container');
        const timeSlotsDiv = document.getElementById('time-slots');

        // Verifica se a célula clicada é a mesma que já estava selecionada
        if (previouslyClickedDateCell === info.dayEl) {
          // Se for, remove a seleção
          info.dayEl.classList.remove('selected-day');
          previouslyClickedDateCell = null;
          selectedDateSpan.textContent = 'Nenhuma';
          // Esconde a seção de horários
          timeSlotsContainer.style.display = 'none';
          timeSlotsDiv.innerHTML = ''; // Limpa os horários
        } else {
          // Se for uma nova data, atualiza a seleção

          // Remove a classe de destaque da célula clicada anteriormente, se houver uma
          if (previouslyClickedDateCell) {
            previouslyClickedDateCell.classList.remove('selected-day');
          }

          // Adiciona a classe de destaque à nova célula clicada
          info.dayEl.classList.add('selected-day');
          // Atualiza a referência para a célula atual
          previouslyClickedDateCell = info.dayEl;

          // Formata a data para o padrão brasileiro (dd/mm/aaaa)
          const formattedDate = info.date.toLocaleDateString('pt-BR');
          // Atualiza o texto com a data selecionada
          selectedDateSpan.textContent = formattedDate;

          // Mostra a seção de horários e a popula
          timeSlotsContainer.style.display = 'flex';
          populateTimeSlots(timeSlotsDiv);
        }
      }
    });

    calendar.render();

    // Função para popular os horários disponíveis
    function populateTimeSlots(container) {
      container.innerHTML = ''; // Limpa horários anteriores
      const availableTimes = ['08:00', '08:30', '09:00', '09:30', '10:00', '10:30', '11:00', '11:30'];
      let selectedTimeSlot = null;

      availableTimes.forEach(time => {
        const timeSlotButton = document.createElement('button');
        timeSlotButton.className = 'time-slot';
        timeSlotButton.textContent = time;
        
        timeSlotButton.addEventListener('click', () => {
          if (selectedTimeSlot === timeSlotButton) {
            // Se o botão clicado já estiver selecionado, desmarca ele
            timeSlotButton.classList.remove('selected');
            selectedTimeSlot = null;
          } else {
            // Se for um novo botão, ou nenhum estiver selecionado
            // Remove a seleção do horário anterior, se houver
            if (selectedTimeSlot) {
              selectedTimeSlot.classList.remove('selected');
            }
            // Adiciona a classe 'selected' ao botão clicado
            timeSlotButton.classList.add('selected');
            // Atualiza a referência do horário selecionado
            selectedTimeSlot = timeSlotButton;
          }
        });

        container.appendChild(timeSlotButton);
      });
    }
    
    // Garante que o link funcione, mesmo que outro script esteja interferindo.
    const cancelButton = document.querySelector('.cancel-button');
    if (cancelButton) {
      cancelButton.addEventListener('click', (event) => {
        event.preventDefault(); // Previne o comportamento padrão do link primeiro.
        window.location.href = 'telainicio.html'; // Força o redirecionamento para a tela inicial.
      });
    }
  });