let input = document.querySelector('#inputText');
let textValue = '';

function addNumber(number) {
    textValue += number;
    upText();
}

function addOperator(operator) {
    if (textValue === '' || isOperator(textValue.slice(-1))) return; // confirmação
    textValue += operator;
    upText();
}

function addDecimal() {
    const lastChar = textValue.slice(-1);
    if (lastChar === '.' || isOperator(lastChar)) return; // confirmação

    const lastNumber = textValue.split(/[\+\-\*\/\%]/).pop();

    if (!lastNumber.includes('.')) { // confirmação
        textValue += '.';
        upText();
    }
}

function delText() {
    textValue = textValue.slice(0, -1);
    upText();
}

function clearText() {
    textValue = '';
    upText();
}

function calculate() {
    try {
        if (textValue === '' || isOperator(textValue.slice(-1))) return; // confirmação

        textValue = eval(textValue).toString();
        upText();
    } catch (e) {
        input.value = 'ERROR';
        textValue = '';
    }
}

function upText() {
    input.value = textValue;
}

function isOperator(char) {
    return ['+', '-', '*', '/', '%'].includes(char);
}