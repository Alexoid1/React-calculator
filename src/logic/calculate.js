import operate from './operate';

function calculate(data, buttonName) {
  const { total } = data;
  const { next } = data;
  const { operation } = data;
  let result;
  const arr = ['+', '-', 'x', '÷', '%'];
  const nums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

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
  if (nums.includes(buttonName)) {
    result = {
      total,
      next: next ? `${next}${buttonName}` : `${buttonName}`,
      operation,
    };
  }
  return result;
}

export default calculate;
