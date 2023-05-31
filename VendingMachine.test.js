const  VendingMachine = require ('./VendingMachine')

describe('The Vending Machine',() =>{

    test('should be able to be stocked with one type of item',()=>{
        const machine = new VendingMachine()
        machine.stock([{item:"Just", quantity:8}])
        expect(machine.contents).toEqual([{item:"Just", quantity:8}])

})
    test('should be able to be stocked with multiple types of items',()=>{
        const machine = new VendingMachine()
        machine.stock([{item:"Just", quantity:8},{item:"Bubblegum", quantity:22}])
        expect(machine.contents).toEqual([{item:"Just", quantity:8},{item:"Bubblegum", quantity:22}])

})
    test('should be able to be vend an item',()=>{
        const machine = new VendingMachine()
        newInventory = [{item:"Just", quantity:8},{item:"Bubblegum", quantity:22},{item:"Red Onion", quantity:20}]
        machine.stock(newInventory)
        machine.purchase({item:"Red Onion",quantity:1})

        expect(machine.contents).toEqual([{item:"Just", quantity:8},{item:"Bubblegum", quantity:22},{item:"Red Onion", quantity:19}])
        
        
    })

    test('should be able to get an error message when trying to vend an out of stock item',()=>{
        const machine = new VendingMachine()
        newInventory = [{item:"Just", quantity:8},{item:"Bubblegum", quantity:22},{item:"Red Onion", quantity:0}]
        machine.stock(newInventory)
        machine.purchase({item:"Red Onion",quantity:1})

        expect(machine.contents).toEqual([{item:"Just", quantity:8},{item:"Bubblegum", quantity:22},{item:"Red Onion", quantity:0}])
        
        
    })

    
})