class Book {
  constructor(id, title, author) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.available = true;
  }
}

class Library {
  constructor() {
    this.books = [];
  }

  addBook(id, title, author) {
    const book = new Book(id, title, author);
    this.books.push(book);
  }

  removeBook(id) {
    const index = this.books.findIndex(book => book.id === id);
    if (index !== -1) {
      this.books.splice(index, 1);
    }
  }

  borrowBook(id) {
    const book = this.books.find(book => book.id === id);
    if (book && book.available) {
      book.available = false;
      console.log(`Book "${book.title}" by ${book.author} has been borrowed.`);
    } else {
      console.log("Book not found or already borrowed.");
    }
  }

  returnBook(id) {
    const book = this.books.find(book => book.id === id);
    if (book && !book.available) {
      book.available = true;
      console.log(`Book "${book.title}" by ${book.author} has been returned.`);
    } else {
      console.log("Book not found or already returned.");
    }
  }

  displayAvailableBooks() {
    const availableBooks = this.books.filter(book => book.available);
    console.log("Available Books:");
    availableBooks.forEach(book => {
      console.log(`- "${book.title}" by ${book.author}`);
    });
  }

  displayBorrowedBooks() {
    const borrowedBooks = this.books.filter(book => !book.available);
    console.log("Borrowed Books:");
    borrowedBooks.forEach(book => {
      console.log(`- "${book.title}" by ${book.author}`);
    });
  }
}

// Example usage:
const library = new Library();

library.addBook(1, "To Kill a Mockingbird", "Harper Lee");
library.addBook(2, "1984", "George Orwell");
library.addBook(3, "Pride and Prejudice", "Jane Austen");

library.borrowBook(2);
library.borrowBook(3);

library.displayAvailableBooks();
library.displayBorrowedBooks();

library.returnBook(2);

library.displayAvailableBooks();
library.displayBorrowedBooks();
