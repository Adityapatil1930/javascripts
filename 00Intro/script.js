function calculate() {
    const firstNumber = parseFloat(document.getElementById("firstNumber").value);
    const secondNumber = parseFloat(document.getElementById("secondNumber").value);
    const operator = document.getElementById("operator").value;

    switch (operator) {
        case '+':
            console.log(firstNumber + secondNumber);
            break;

        case '-':
            console.log(firstNumber - secondNumber);
            break;
        
        case '*':
            console.log(firstNumber * secondNumber);
            break;

        case '/':
            console.log(firstNumber / secondNumber);
            break;

        case '%':
            console.log(firstNumber % secondNumber);
            break;

        default:
            console.log("Invalid operator. Use +, -, *, or /.")
    }
}