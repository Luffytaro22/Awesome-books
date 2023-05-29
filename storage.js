const mainContainer = document.querySelector('#books-container');
const titleInput = document.querySelector('#title');
const authorInput = document.querySelector('#author');
const submitButton = document.querySelector('#book-submit');

let books = [];

function Book(title, author) {
  this.title = title;
  this.author = author;
}

function createBook() {
  /* Create elements */
  const bookContainer = document.createElement('div');
  const pTitle = document.createElement('p');
  const pAuthor = document.createElement('p');
  const removeButton = document.createElement('button');

  /* Add Classes and properties */
  bookContainer.classList.add('books');
  removeButton.tabIndex = books.indexOf(Book.title);

  /* Add text */
  pTitle = Book.title;
  pAuthor = Book.author;

  /* Append elements */
  bookContainer.appendChild(pTitle);
  bookContainer.appendChild(pAuthor);
  bookContainer.appendChild(removeButton);
  mainContainer.appendChild(bookContainer);
}

function addBook() {
  const book = new Book(titleInput.value, authorInput.value);
  
  /* If the library key exists */
  if (localStorage.getItem('library')) {
    /* Copy the library key to the books array */
    books = JSON.parse(localStorage.getItem('library'));
    localStorage.setItem('libray', JSON.stringify(books));
  } else {
    /* Just create a new library key */
    localStorage.setItem('libray', JSON.stringify(books));
  }
}

submitButton.add('click', addBook);
