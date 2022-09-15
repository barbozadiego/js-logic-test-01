import { processTest, getSteps } from './functions.js'

const btnSend = document.getElementById('btnSend'),
      containerTable = document.getElementById('containerTable');

btnSend.addEventListener('click', e => {
    e.preventDefault();

    const refInputNumber = document.getElementById('inputNumber');
    let inputNumber = parseInt(refInputNumber.value.trim(), 10)

    getSteps(processTest(inputNumber), inputNumber);
    refInputNumber.value = '';

    if(containerTable) containerTable.style.display = 'block'
});

