const {calculator}=require('../functions.js');


it('calculator addition function success',()=>{
    expect(calculator(5,6,'+')).toBe(11);
});
it('calculator subtraction function success',()=>{
    expect(calculator(10,99.9999999,'-')).toEqual(-89.9999999);
});
it('calculator multiply function success',()=>{
    expect(calculator(12,1.2345,'*')).toEqual(14.814);
});
it('calculator division function success',()=>{
    expect(calculator(1,2,'/')).toEqual(0.5);
});
it('divide by zero case',()=>{
    expect(calculator(100,0,'/')).toBe('infinity');
});