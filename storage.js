const mainContainer = document.querySelector('#books-container');

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
