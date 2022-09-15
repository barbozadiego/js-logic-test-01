
const boxShowData = document.getElementById('showData'),
      table = document.getElementById('table'),
      boxSteps = document.getElementById('steps'); 


let dato1, dato2, dato3

let showDato1, showDato2, showDato3

export const convertToNumber = (string) => string = parseInt(string,10);

const evaluateDigits = (inputNumber) => {
    if(inputNumber < 100) {
        inputNumber = inputNumber.toString();

        if(inputNumber.length < 2) {
            inputNumber = 0 + inputNumber
            dato1 = inputNumber; // Digitos Ingresado
        } else {
            dato1 = inputNumber; // Digitos Ingresado
        }
        return inputNumber;
    } else { 
        return null;
    }
}

const addTwoDigits = (digits) => {
    let firstDigitInitialNumber = convertToNumber(digits.substring(0,1)),
        secondDigitInitialNumber = convertToNumber(digits.substring(1,2)),
        result = firstDigitInitialNumber + secondDigitInitialNumber;
    
    result = result.toString()
    if(result.length < 2) result = 0 + result
    
    dato2 = result; // Digitos Sumados

    showDato2 = `${firstDigitInitialNumber} + ${secondDigitInitialNumber} = ${result}`; 


    let rightDigitSumResult = result.substring(1,2);
    return {secondDigitInitialNumber, rightDigitSumResult};
};

const combineDigits = (a, b) => {
    a = a.toString();

    dato3 = a + b; // Digitos Combinados
    showDato3 = `${a} y ${b} = ${a + b}`;

    return convertToNumber(dato3);
}

export const processTest = (inputNumber) => {
    const digits = evaluateDigits(inputNumber);
    const { secondDigitInitialNumber, rightDigitSumResult } = addTwoDigits(digits);
    return combineDigits(secondDigitInitialNumber, rightDigitSumResult);
}


export const getSteps = (resultCombinedDigits, inputNumber) => {
    let steps = 1
    resultCombinedDigits = convertToNumber(resultCombinedDigits)

    let tbody = document.createElement('tbody');
    let elementRepeated = document.getElementById('repeated');

    while(resultCombinedDigits != inputNumber) {
            tbody.innerHTML +=  
            `<tr>
                <td>${dato1}</td>
                <td>${showDato2}</td>
                <td>${showDato3}</td>
            </tr>`;

            resultCombinedDigits = processTest(resultCombinedDigits);
            steps++;
    }

    tbody.innerHTML +=  
    `<tr>
        <td>${dato1}</td>
        <td>${showDato2}</td>
        <td>${showDato3}</td>
    </tr>`;

    if(elementRepeated) table.removeChild(elementRepeated)
    
    table.appendChild(tbody)
    tbody.id = 'repeated';
    boxSteps.innerHTML = steps;
}
