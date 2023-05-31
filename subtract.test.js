const subtract = require('./subtract')

describe('The Multiplication Function',() =>{

    test('subtracts 11 from 15 to get answer of 4',()=>{
    expect(subtract(15,11)).toBe(4)
})
    test('susbtracts 15 from 11 to get error message',() =>{
        expect(subtract(11,15)).toBe('Error: Difference must be a positive number.')
    })


  
    
})