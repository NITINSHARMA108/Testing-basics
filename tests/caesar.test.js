const caesar=require('../caesar.js');


it('caesar function',()=>{
    expect(caesar('Attack-At*dawn',5)).toBe('Fyyfhp-Fy*ifbs');
})

it('caesar function',()=>{
    expect(caesar('attackatdawn',0)).toBe('attackatdawn');
})

it('caesar function',()=>{
    expect(caesar('attackatdawn',-1)).toBe('attackatdawn');
})