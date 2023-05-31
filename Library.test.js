const Library = require('./Library')

describe('The Library Function',() =>{

    let library
    beforeEach(() => {
        library = new Library()
    })

    const books = [{title:'The Alchemist',author:'Paul Cohelo' }]
    
    
    test('should be able to add books to inventory',()=>{
        library.add(books)
        expect(library.contents).toEqual([{title:'The Alchemist',author:'Paul Cohelo' }])
})
    
    
})
