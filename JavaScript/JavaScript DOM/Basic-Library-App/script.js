// Book data
const booksData = [
  {
    id: 1,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    image: "book1.jpg"
  },
  {
    id: 2,
    title: "1984",
    author: "George Orwell",
    image: "book2.jpg"
  },
  {
    id: 3,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    image: "book3.jpg"
  }
];

// Retrieve the bookshelf element
const bookshelf = document.querySelector(".bookshelf");

// Retrieve the receipt elements
const receiptContainer = document.querySelector(".receipt");
const receiptMessage = document.getElementById("receipt-message");

// Retrieve the borrowed books list
const borrowedBooksList = document.getElementById("borrowed-books-list");

// Create books and add them to the bookshelf
booksData.forEach(bookData => {
  const bookElement = createBookElement(bookData);
  bookshelf.appendChild(bookElement);
});

// Function to create a book element
function createBookElement(bookData) {
  const book = document.createElement("div");
  book.classList.add("book");
  book.innerHTML = `
    <img src="${bookData.image}" alt="${bookData.title}">
    <h4>${bookData.title}</h4>
    <p>${bookData.author}</p>
  `;

  book.addEventListener("click", () => {
    // Toggle book details display
    book.classList.toggle("checked-out");

    // Display receipt message
    if (book.classList.contains("checked-out")) {
      receiptMessage.textContent = `You checked out "${bookData.title}" by ${bookData.author}.`;
    } else {
      receiptMessage.textContent = "";
    }

    // Display or hide the receipt container
    receiptContainer.style.display = book.classList.contains("checked-out") ? "block" : "none";

    // Add or remove the book from the borrowed books list
    if (book.classList.contains("checked-out")) {
      const borrowedBookItem = document.createElement("li");
      borrowedBookItem.textContent = `${bookData.title} by ${bookData.author}`;
      borrowedBooksList.appendChild(borrowedBookItem);
    } else {
      const borrowedBookItem = borrowedBooksList.querySelector(`li:contains("${bookData.title} by ${bookData.author}")`);
      if (borrowedBookItem) {
        borrowedBooksList.removeChild(borrowedBookItem);
      }
    }
  });

  return book;
}
