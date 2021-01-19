import React from 'react';
import operate from './operate'

function calculate(data,buttonName) {
    let result;
    const arr = ['+', '-', 'x', '÷', '%'];
  
    if (btn === '=') {
      result = { total: data.total };
    }
    if (btn === '+/-') {
      result = {
        total: data.total * -1,
        next: data.next * -1,
        operation: null,
      };
    }
    if (btn === 'AC') {
      result = {
        total: null,
        next: null,
        operation: null,
      };
    }
    if (arr.includes(btn)) {
      result = operate(data.total, data.next, btn);
    }
    return result;

    
}

export default calculate;