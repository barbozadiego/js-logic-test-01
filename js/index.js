import { processTest, getSteps, convertToNumber } from './functions.js'

const btnSend = document.getElementById('btnSend'),
      containerTable = document.getElementById('containerTable');

const boxForm = document.getElementById('boxForm');
const messageAlert = document.createElement('p');

btnSend.addEventListener('click', e => {
    e.preventDefault();

    const refInputNumber = document.getElementById('inputNumber');
    let inputNumber = parseInt(refInputNumber.value.trim(), 10)

    // Validamos si el usuario ingreso un número entre 0-99    
    inputNumber = inputNumber.toString();

    if(inputNumber.length < 3 && inputNumber.length > 0) {
        inputNumber = convertToNumber(inputNumber)

        getSteps(processTest(inputNumber), inputNumber);
        refInputNumber.value = '';
        if(containerTable) containerTable.style.display = 'block'
        messageAlert.innerHTML = '';

    } else {
        messageAlert.className = 'message-alert'
        messageAlert.innerHTML = '⚠️ Dato inválido, verifique e ingrese nuevamente la cifra.'
        boxForm.appendChild(messageAlert)
    }


});

