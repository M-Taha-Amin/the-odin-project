"use strict";

// Book Class: Represents a book
class Book {
  static counter = 0;
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    // Add id to each instance
    this.id = (function () {
      return ++Book.counter;
    })();
  }
  static toggleReadStatus(clickedElement) {
    let id;
    if (clickedElement.classList.contains("circle-bg")) {
      id =
        +clickedElement.parentElement.parentElement.firstElementChild
          .textContent;
    } else if (clickedElement.classList.contains("circle")) {
      id =
        +clickedElement.parentElement.parentElement.parentElement
          .firstElementChild.textContent;
    }

    const books = Store.getBooks();
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        book.read = !book.read;
      }
      return book;
    });
    localStorage.setItem("books", JSON.stringify(updatedBooks));
  }
}

// UI Class: Handles ui tasks
class UI {
  // Add book to UI
  static displayBook(book) {
    const container = document.querySelector("#container");

    const card = ` 
    <article id="card" class="card ${book.read ? "read" : "unread"}">
    <span class="absolute top-0 left-0 hidden" >${book.id}</span>
    <span class="delete-button">×</span>
    <h2 class="title">${book.title}</h2>
    <div class="mx-auto text-center font-mono text-base">
      <p class="flex flex-col text-xl capitalize">
        <span class="text-xs font-bold uppercase underline">Author</span>
        ${book.author}
      </p>
    </div>
    <div class="mx-auto text-center font-mono text-base">
      <p class="flex flex-col text-xl">
        <span class="text-xs font-bold uppercase underline">Pages</span>
        ${book.pages}
      </p>
    </div>

    <!-- Mark as read section -->
    <div
      class="flex absolute bottom-4 left-0 right-0 items-center justify-center gap-x-4 text-sm font-semibold"
    >
      <p class="text-xs sm:text-sm">Mark as read:</p>
      <span
        id="circle-bg"
        class="circle-bg flex h-6 w-12 cursor-pointer rounded-full border-[1px] border-black/50 ${
          book.read ? "circle-bg-read" : "circle-bg-unread"
        }"
      >
        <!-- Circle -->
        <span
          id="circle"
          class="circle ${
            book.read ? "circle-read" : "circle-unread"
          } h-full w-6 rounded-full"
        ></span>
      </span>
    </div>
  </article>`;
    container.insertAdjacentHTML("beforeend", card);
  }

  // Remove book from UI
  static removeBook(deleteButton) {
    deleteButton.parentElement.remove();
  }

  // Show book form
  static displayBookForm() {
    document.querySelector("#overlay").classList.toggle("show");
  }

  // Hides book form from ui
  static hideBookForm() {
    document.querySelector("#overlay").classList.remove("show");
  }

  // Toggles theme
  static toggleCardTheme(clickedElement) {
    let card;
    if (clickedElement.classList.contains("circle-bg")) {
      card = clickedElement.parentElement.parentElement;
    } else if (clickedElement.classList.contains("circle")) {
      card = clickedElement.parentElement.parentElement.parentElement;
    }
    const circleBackground = card.querySelector("#circle-bg");
    const circle = card.querySelector("#circle");
    card.classList.toggle("read");
    card.classList.toggle("unread");
    circleBackground.classList.toggle("circle-bg-read");
    circleBackground.classList.toggle("circle-bg-unread");
    circle.classList.toggle("circle-read");
    circle.classList.toggle("circle-unread");
  }

  // Clears input fields
  static clearInputFields() {
    document.querySelector("#title").value = "";
    document.querySelector("#author").value = "";
    document.querySelector("#pages").value = "";
  }
}

// Storage Class: handles localStorage
class Store {
  // Retrieve books from localStorage
  static getBooks() {
    let books;
    if (localStorage.getItem("books") === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem("books"));
    }
    return books;
  }

  // adds book to localStorage
  static addBook(book) {
    const books = Store.getBooks();
    books.push(book);
    localStorage.setItem("books", JSON.stringify(books));
  }

  // remove book from localStorage
  static removeBook(id) {
    const books = Store.getBooks();
    const filteredBooks = books.filter((book) => book.id !== id);
    localStorage.setItem("books", JSON.stringify(filteredBooks));
  }
}
// Event: show book form when "+" is clicked
const formPopupButton = document.querySelector("#form-popup-button");
formPopupButton.addEventListener("click", () => {
  UI.displayBookForm();
});

// Prevent form from actual submit
const bookForm = document.querySelector("#book-form");
bookForm.addEventListener("submit", (e) => e.preventDefault());

// Event: add book when "Add book" button is clicked
const addBookButton = document.querySelector("#add-book-button");
addBookButton.addEventListener("click", () => {
  // Input fields
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const pages = document.querySelector("#pages").value;
  const read = document.querySelector("#read").checked;

  // Validate Input
  const inputIsNotGiven = title === "" || author === "" || pages === "";
  if (inputIsNotGiven) return;

  // Instantiate book object
  const book = new Book(title, author, pages, read);

  // hide book form
  UI.hideBookForm();

  // Add book to storage
  Store.addBook(book);

  // The form fades out in 300ms/0.3s so the book should be only displayed after the form is hidden
  setTimeout(() => {
    // Clear form fields
    UI.clearInputFields();

    // display book in ui
    UI.displayBook(book);
  }, 300);
});

// Event: hide form when "cancel" button is clicked
const cancelButton = document.querySelector("#cancel-button");
cancelButton.addEventListener("click", UI.hideBookForm);

// Event: remove book when "x" is clicked
const container = document.querySelector("#container");
container.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete-button")) {
    // remove book from ui
    UI.removeBook(e.target);

    // remove book from storage
    const id = +e.target.previousElementSibling.textContent;
    Store.removeBook(id);
  }
});

// Event: allow only numbers in pages input
const pages = document.querySelector("#pages");
pages.addEventListener("input", function () {
  if (isNaN(this.value)) this.value = "";
});

// Event: toggle theme when "mark as read" button is clicked
container.addEventListener("click", (e) => {
  const isReadToggleButton =
    e.target.classList.contains("circle-bg") ||
    e.target.classList.contains("circle");
  if (isReadToggleButton) {
    // Toggle theme in ui
    UI.toggleCardTheme(e.target);

    // Toggle book's acutal read status
    Book.toggleReadStatus(e.target);
  }
});

// Display books on page startup
document.addEventListener("DOMContentLoaded", () => {
  const books = Store.getBooks();
  books.forEach((book) => UI.displayBook(book));
});
