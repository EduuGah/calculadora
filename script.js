document.addEventListener("DOMContentLoaded", function () { // Carrega os eventos
    const display = document.getElementById('display'); // Define o display
    const buttons = document.querySelectorAll('.button'); // Define os botões

    let currentExpression = ''; // Define a expressão para nenhuma

    buttons.forEach(button => { // Loop para o botão quando for clicado
        button.addEventListener('click', function () { // Quando o botão for clicado:
            const value = this.textContent; // Valor do botão pressionado

            if (value === '=') { // Se o botão pressionado for "="
                try { // Tente
                    const result = eval(currentExpression); // Eval é tipo um comando de calculadora própria
                    display.value = result; // O valor do display é mudado pro resultado da expressão
                    currentExpression = result.toString(); // A expressão atual vira uma string
                } catch (error) { // Caso aconteça algum erro
                    display.value = 'Error'; // Mostre "Error" no display
                    currentExpression = ''; // E a expressão é zerada
                }
            } else if (value === 'C') { // Se o botão pressionado for "C"
                display.value = ''; // Limpa o display
                currentExpression = ''; // E zera a expressão atual
            } else { 
                display.value += value; // Atualiza o display com a expressão
                currentExpression += value; // Atualiza a expressão
            }
        });
    });
});

