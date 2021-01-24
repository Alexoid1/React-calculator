import operate from '../logic/operate';

describe('operate', () => {
  it('should return the sum of numbers', () => {
    const newData = operate(5, 20, '+');
    expect(newData).toEqual('25');
  });
  it('should return the rest of numbers', () => {
    const newData = operate(5, 20, '-');
    expect(newData).toEqual('-15');
  });
  it('should return the multiplication of numbers', () => {
    const newData = operate(5, 20, 'x');
    expect(newData).toEqual('100');
  });
  it('should return the multiplication of numbers', () => {
    const newData = operate(20, 5, '÷');
    expect(newData).toEqual('4');
  });
  it('should return the multiplication of numbers', () => {
    const newData = operate(20, 5, '%');
    expect(newData).toEqual('0');
  });
});
