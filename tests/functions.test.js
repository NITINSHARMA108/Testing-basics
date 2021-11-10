const {capitalize, reverseString,arrayAnalysis}=require('../functions.js');

it('it runs',()=>{
    expect(capitalize('ravi')).toBe('Ravi');
});




it('reverse string',()=>{
    expect(reverseString('NiTiN')).toBe('NiTiN');
})

it('array analysis',()=>{
    expect(arrayAnalysis([1,2,3,4,5,6])).toEqual({maximum:6,minimum:1,length:6,average:3.5});
})

it('empty array',()=>{
    expect(arrayAnalysis([])).toBeUndefined();
})


