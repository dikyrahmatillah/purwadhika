class Book {
  public title: string;
  author: string;
  isAvailable: boolean;

  constructor(title: string, author: string, isAvailable: boolean = true) {
    this.title = title;
    this.author = author;
    this.isAvailable = isAvailable;
  }
}

class Library {
  books: Book[] = [];

  addbook(book: Book) {
    this.books.push(book);
  }

  listAvailableBooks() {
    return this.books;
  }

  borrowBook(title: string) {
    this.books = this.books.filter((el) => el.title !== title);
  }
}

const library = new Library();
const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald");
const book2 = new Book("To Kill a Mockingbird", "Harper Lee");

library.addbook(book1);
library.addbook(book2);

console.log(library.listAvailableBooks().length);

library.borrowBook("The Great Gatsby");

console.log(library.listAvailableBooks().length);
console.log(library.listAvailableBooks()[0].title);
