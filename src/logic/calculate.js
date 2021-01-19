import operate from './operate';

function calculate(data, buttonName) {
  const { total, next, operation = buttonName } = data;
  let result;
  const arr = ['+', '-', 'x', '÷', '%'];

  if (buttonName === '=') {
    result = { total };
  }
  if (buttonName === '+/-') {
    result = {
      total: total * -1,
      next: next * -1,
      operation: null,
    };
  }
  if (buttonName === 'AC') {
    result = {
      total: null,
      next: null,
      operation: null,
    };
  }
  if (arr.includes(buttonName)) {
    result = operate(total, next, operation);
  }
  return result;
}

export default calculate;
