import calculate from '../logic/calculate';

const dataNull = {
  total: null,
  next: null,
  operation: null,
};

const dataNum = {
  total: 9,
  next: null,
  operation: null,
};

const operaNull = {
  total: 36,
  next: 5,
  operation: null,
};

const sumData = {
  total: 36,
  next: 5,
  operation: '+',
};

const nextNull = {
  total: 36,
  next: null,
  operation: '+',
};


describe('calculate', () => {
      
    it('should return and empty object', () => {
        const newData = calculate(sumData, 'AC');
        expect(newData).toEqual(dataNull);
    });
    it('should return the operation between total and next numbers', () => {
      const newData = calculate(sumData, '=');
      expect(newData).toEqual({
        total: '41',
        next: null,
        operation: null,
      });
    });
    it('should return the object with the elements with the oposite sign', () => {
      const newData = calculate(operaNull, '+/-');
      expect(newData).toEqual( {
        total: -36,
        next: -5,
        operation: null,
      });
    });
    it('should return the selected operation', () => {
      const newData = calculate(dataNull, '+');
      expect(newData).toEqual({
        total: null,
        next: null,
        operation: '+',
      });
    });
    it('should change the operation (-)', () => {
      const newData = calculate(nextNull, '-');
      expect(newData).toEqual({
        total: 36,
        next: null,
        operation: '-',
      });
    });
    it('should change the operation (÷)', () => {
      const newData = calculate(nextNull, '÷');
      expect(newData).toEqual({
        total: 36,
        next: null,
        operation: '÷',
      });
    });
    it('should execute consecutive operations', () => {
      const newData = calculate(sumData, '÷');
      expect(newData).toEqual({
        total: '41',
        next: null,
        operation: '÷',
      });
    });
    it('add first numbers to total', () => {
      const newData = calculate(dataNum, '9');
      expect(newData).toEqual({
        total: '99',
        next: null,
        operation: null,
      });
    });
    it('add decimal to number', () => {
      const newData = calculate(dataNum, '.');
      expect(newData).toEqual({
        total: '9.',
        next: null,
        operation: null,
      });
    });
    it('add next numbers after operator', () => {
      const newData = calculate(nextNull, '9')
      expect(newData).toEqual({
        total: 36,
        next: '9',
        operation: '+',
      });
    });
})