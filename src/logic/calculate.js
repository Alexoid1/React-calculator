import operate from './operate';

function calculate(data, buttonName) {
  let result;
  const arr = ['+', '-', 'x', '÷', '%'];

  if (buttonName === '=') {
    result = { total: data.total };
  }
  if (buttonName === '+/-') {
    result = {
      total: data.total * -1,
      next: data.next * -1,
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
    result = operate(data.total, data.next, buttonName);
  }
  return result;
}

export default calculate;
