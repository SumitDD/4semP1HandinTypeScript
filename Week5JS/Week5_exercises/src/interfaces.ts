let http = require("http");

//a) Create a TypeScript interface IBook, which should encapsulate information about a book, including:
//b) Create a function that takes an IBook instance and test it with an object instance.
//d) Change the interface to make published and pages become optional - Verify the new behaviour.
//e) Change the interface to make author readonly - Verify the new behaviour.

interface IBook {
    title: string,
    readonly author: string,
    published?: Date,
    pages?: number
}

function myIBook(book: IBook) {
    return console.log(book.author, book.pages, book.published, book.title)
}

let date: Date = new Date();
const myBook: IBook = {
    title: 'myTitle',
    author: 'Sumit',
    published: date,
    pages: 300

}
//f) Create a class Book and demonstrate the "Java way" of implementing an interface.
class Book implements IBook {
    title: string
    author: string
    published: Date
    pages: number

    constructor(title: string, author: string, published: Date, pages: number) {
        this.title = title
        this.author = author
        this.published = published
        this.pages = pages

    }
}