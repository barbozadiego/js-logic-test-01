import { processTest, getSteps } from './functions.js'

const btnSend = document.getElementById('btnSend'),
      boxShowData = document.getElementById('showData');

btnSend.addEventListener('click', e => {
    e.preventDefault();

    const refInputNumber = document.getElementById('inputNumber');
    let inputNumber = parseInt(refInputNumber.value.trim(), 10)

    getSteps(processTest(inputNumber), inputNumber);
    refInputNumber.value = '';

    if(boxShowData) boxShowData.style.display = 'block'
});

