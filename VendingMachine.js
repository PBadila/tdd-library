class VendingMachine {
    constructor() {
        this.contents = []
    }

    displayContents() {
        return this.contents
    }

    stock(inventory) {
        this.contents.push(...inventory)
    }

    purchase(item){
        this.contents.forEach(content =>{
            if(content.item == item.item){
                if(content.quantity>0){
                content.quantity = content.quantity - item.quantity
                }
                
            }
        })
    }
}
module.exports = VendingMachine