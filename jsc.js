$(document).ready(function () {
    let currentInput = "";
    let operator = null;
    let previousInput = "";

    
    function updateDisplay(value) {
        $('#display').val(value);
    }

    $('.btn').click(function () {
        const value = $(this).val();

        if (value === 'C') {
            currentInput = "";
            previousInput = "";
            operator = null;
            updateDisplay("");
            return;
        }

        if (value === '=') {
            if (currentInput !== "" && previousInput !== "" && operator !== null) {
                let result;
                const currentNumber = parseFloat(currentInput);
                const previousNumber = parseFloat(previousInput);

                switch (operator) {
                    case '+':
                        result = previousNumber + currentNumber;
                        break;
                    case '-':
                        result = previousNumber - currentNumber;
                        break;
                    case '*':
                        result = previousNumber * currentNumber;
                        break;
                    case '/':
                        result = previousNumber / currentNumber;
                        break;
                }
                updateDisplay(result);
                previousInput = result.toString();
                currentInput = "";
                operator = null;
            }
            return;
        }

        if (['+', '-', '*', '/'].includes(value)) {
            if (currentInput !== "") {
                previousInput = currentInput;
                operator = value;
                currentInput = "";
            }
            return;
        }

        currentInput += value;
        updateDisplay(currentInput);
    });
});
