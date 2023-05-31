class Library {
    constructor() {
        this.contents = []
    }

    display() {
        return this.contents
    }

    add(book){
        this.contents.push(...book)
    }
}
module.exports = Library
