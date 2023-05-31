const product = require('./product')

describe('The Multiplication Function',() =>{

    test('multiplies 2 * 11 to equal 22',()=>{
    expect(product(2,11)).toBe(22)
})
    test('enters 2,-11 to get error message',() =>{
        expect(product(2,-11)).toBe('Error: Both numbers should be positive.')
    })
    
})
