import Big from 'big.js';

const operate = (number1, number2, operation) => {
  const num1 = Big(number1);
  const num2 = Big(number2);
  let total = 0;

  const divide = () => (num2 === 0 ? 'NaN' : num1.div(num2));

  switch (operation) {
    case '+':
      total = num1.plus(num2).toString();
      break;
    case 'x':
      total = num1.times(num2).toString();
      break;
    case '-':
      total = num1.minus(num2).toString();
      break;
    case '÷':
      total = divide(num1, num2).toString();
      break;
    case '%':
      total = num1.mod(num2).toString();
      break;
    default:
  }

  return total;
};

export default operate;
