const mainContainer = document.querySelector('#books-container');
const titleInput = document.querySelector('#title');
const authorInput = document.querySelector('#author');
const submitButton = document.querySelector('#book-submit');
const form = document.querySelector('#form-book');

let books = [];

if (localStorage.getItem('library')) {
  /* Reasign the books array to the localStorage library */
  books = JSON.parse(localStorage.getItem('library'));
} 

function Book(title, author) {
  this.title = title;
  this.author = author;
}

function createBook(book) {
  /* Create elements */
  const bookContainer = document.createElement('div');
  const pTitle = document.createElement('p');
  const pAuthor = document.createElement('p');
  const removeButton = document.createElement('button');

  /* Add Classes and properties */
  bookContainer.classList.add('books');
  removeButton.tabIndex = books.indexOf(book);

  /* Add text */
  pTitle.textContent = book.title;
  pAuthor.textContent = book.author;
  removeButton.textContent = 'Remove';

  /* Append elements */
  bookContainer.appendChild(pTitle);
  bookContainer.appendChild(pAuthor);
  bookContainer.appendChild(removeButton);
  mainContainer.appendChild(bookContainer);
}

books.forEach((book) => {
  createBook(book);
});

function addBook(event) {
  /* Create a new book */
  const book = new Book(titleInput.value, authorInput.value);

  /* If the inputs has no values then form is not submmited */
  if (!titleInput.validity.valueMissing && !authorInput.validity.valueMissing) {
    event.preventDefault();
  } else {
    return;
  }

  /* If the library key exists */
  if (localStorage.getItem('library')) {
    /* Copy the library key to the books array */
    books.push(book);
    localStorage.setItem('library', JSON.stringify(books));
  } else {
    books.push(book);
    localStorage.setItem('library', JSON.stringify(books));
  }

  form.reset(); 
  createBook(book);
}

submitButton.addEventListener('click', addBook);
