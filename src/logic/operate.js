import Big from 'big.js';

const operate = (number1, number2, operation) => {
    const num1 = Big(number1);
    const num2 = Big(number2);
    let total = 0;

    const divide = () => (num2 == 0 ? 'NaN' : num1.div(num2));

    const modulus = (num1, num2) => (!num2 ? num1.times(0.01) : num1.times(num2).times(0.01));

    switch(operation) {
        case '+':
            total=num1.plus(num2)
          break;
        case 'x':
            total=num1.times(num2)
          break;
        case '-':
            total=num1.minus(num2)
          break;
        case '÷':
            total=divide(num1, num2)
          break; 
        case '%':
            total=modulus(num1, num2)
        break;
        default:
          // code block
    }

    return total

    // const operations = {
    //     '+': () => num1.plus(num2),
    //     '-': () => num1.minus(num2),
    //     X: () => num1.times(num2),
    //     '÷': () => divide(num1, num2),
    //     '%': () => modulus(num1, num2),
    // };

    // total = operations[operation]();

    // return total.toString();
}

export default operate;
