const table = document.getElementById('table'),
      boxSteps = document.getElementById('steps'); 

let initialNumber, sumResult, combinedDigits, combinedDigitsResult


export const convertToNumber = (string) => string = parseInt(string,10);

const evaluateDigits = (inputNumber) => {
    if(inputNumber < 100) {
        inputNumber = inputNumber.toString();

        if(inputNumber.length < 2) initialNumber = (inputNumber = 0 + inputNumber);
        else initialNumber = inputNumber;

        return inputNumber;
    }
}

const addTwoDigits = (digits) => {
    let firstDigit = convertToNumber(digits.substring(0,1)),
        secondDigit = convertToNumber(digits.substring(1,2)),
        result = (firstDigit + secondDigit).toString();
    
    if(result.length < 2) result = 0 + result
    
    sumResult = `${firstDigit} + ${secondDigit} = ${result}`; // Digitos Sumados

    let rightDigitSumResult = result.substring(1,2);
    return {secondDigit, rightDigitSumResult};
};

const combineDigits = (a, b) => {
    a = a.toString(); // Convertimos a string para poder combinar los digitos
    combinedDigits = `${a} y ${b} = `;
    combinedDigitsResult = a + b;
    return convertToNumber(a + b);
}

export const processTest = (inputNumber) => {
    const digits = evaluateDigits(inputNumber);
    const { secondDigit, rightDigitSumResult } = addTwoDigits(digits);
    return combineDigits(secondDigit, rightDigitSumResult);
}


export const getSteps = (resultCombinedDigits, inputNumber) => {
    
    let tbody = document.createElement('tbody'),
        elementRepeated = document.getElementById('repeated'),
        steps = 1;


    while(resultCombinedDigits !== inputNumber) {
            tbody.innerHTML +=  
            `<tr>
                <td>${initialNumber}</td>
                <td>${sumResult}</td>
                <td>${combinedDigits} ${combinedDigitsResult}</td>
                <td>${steps}</td>
            </tr>`;

            resultCombinedDigits = processTest(resultCombinedDigits);
            steps++;
    }

    tbody.innerHTML +=  
    `<tr>
        <td>${initialNumber}</td>
        <td>${sumResult}</td>
        <td>${combinedDigits}<mark>${combinedDigitsResult}</mark></td>
        <td>${steps}</td>
    </tr>`;

    if(elementRepeated) table.removeChild(elementRepeated)
    
    table.appendChild(tbody)
    tbody.id = 'repeated';
    boxSteps.innerHTML = steps;
}
