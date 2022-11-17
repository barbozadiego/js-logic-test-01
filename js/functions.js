const table = document.getElementById('table'),
      tableSteps = document.getElementById('tableSteps');
    //   boxSteps = document.getElementById('steps'); 

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
    
    let tBodyElement = document.createElement('tbody'),
        tBodyRepeated = document.getElementById('tBodyRepeated'),
        trElement = document.createElement('tr'),
        trRepeated = document.getElementById('trRepeated'),
        steps = 1;

    trElement.innerHTML += `<td>${initialNumber}</td>`;

    while(resultCombinedDigits !== inputNumber) {
            if(steps === 1) {
                tBodyElement.innerHTML +=  
                `<tr>
                    <td><mark>${initialNumber}</mark></td>
                    <td>${sumResult}</td>
                    <td>${combinedDigits} ${combinedDigitsResult}</td>
                </tr>`;
            } else {
                tBodyElement.innerHTML +=  
                `<tr>
                    <td>${initialNumber}</td>
                    <td>${sumResult}</td>
                    <td>${combinedDigits} ${combinedDigitsResult}</mark></td>
                </tr>`;
            }

            resultCombinedDigits = processTest(resultCombinedDigits);
            steps++;
    }

    tBodyElement.innerHTML +=  
    `<tr>
        <td>${initialNumber}</td>
        <td>${sumResult}</td>
        <td>${combinedDigits} <mark>${combinedDigitsResult}</mark></td>
    </tr>`;

    trElement.innerHTML += `<td>${steps}</td>`;

    if(tBodyRepeated) table.removeChild(tBodyRepeated);
    if(trRepeated) trRepeated.remove();
    
    table.appendChild(tBodyElement)
    tableSteps.appendChild(trElement)

    tBodyElement.id = 'tBodyRepeated';
    trElement.id = 'trRepeated';

    // boxSteps.innerHTML = steps;
}
