import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
const supabaseUrl = 'https://rrurrbxgmqvcoqrdoyxt.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJydXJyYnhnbXF2Y29xcmRveXh0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ0NDQ3MDEsImV4cCI6MjA4MDAyMDcwMX0.lnEF038G1I6ihIA8dyomdjpxB5WigJXIYyO9ruwJ7QE'
const supabase = createClient(supabaseUrl, supabaseKey)

// Quando o dom carregar
document.addEventListener('DOMContentLoaded', () => {
    // --- Funcionalidade para mostrar/ocultar senha ---
    handleTogglePassword()

    // --- Validação básica do formulário no envio ---
    validateForm()

    getPatients()
});

function handleTogglePassword() {
    const togglePassword = document.querySelector('#togglePassword');
    const passwordInput = document.querySelector('input[name="senha"]');
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
}

function validateForm() {
    const form = document.querySelector('form');
    const passwordInput = document.querySelector('input[name="senha"]');
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
}

async function getPatients() {
    let { data, error } = await supabase
        .from('Pacientes')
        .select('*')
    console.log(data)

    // const body = document.querySelector('body')
    // const div = document.createElement('div')
    // div.innerHTML = `
    //     <h1>Cliente</h1>
    //     <p>Nome: ${data[0].nome}</p>
    //     <p>endereço: ${data[0].endereço}</p>
    //     <p>Email: ${data[0].cpf}</p>
    // `
    // body.appendChild(div)
}