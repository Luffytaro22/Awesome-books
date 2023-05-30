const mainContainer = document.querySelector('#books-container');
const titleInput = document.querySelector('#title');
const authorInput = document.querySelector('#author');
const submitButton = document.querySelector('#book-submit');
const form = document.querySelector('#form-book');

/* The main Books class */
class Books {
  /* The constructor accepts the title and author parameters */
  constructor(title, author) {
    this.books = [];

    if (localStorage.getItem('library')) {
      /* Reasign the books array to the localStorage library */
      this.books = JSON.parse(localStorage.getItem('library'));
    }
  }

  info(title, author) {
    this.title = title;
    this.author = author;
  }

  /* A method to save the info in the local storage */
  storage() {
    this.books.push({ title: `${this.title}`, author: `${this.author}` });
    localStorage.setItem('library', JSON.stringify(this.books));
  }

  /* A method to creat each book element */
  createBook(book) {
    /* Create elements */
    const bookContainer = document.createElement('div');
    const pTitle = document.createElement('p');
    const pAuthor = document.createElement('p');
    const removeButton = document.createElement('button');
    const hr = document.createElement('hr');

    /* Add Classes and properties */
    bookContainer.classList.add('books');
    removeButton.tabIndex = this.books.indexOf(book);
    removeButton.name = book.title;

    /* Add text */
    pTitle.textContent = book.title;
    pAuthor.textContent = book.author;
    removeButton.textContent = 'Remove';

    /* Append elements */
    bookContainer.appendChild(pTitle);
    bookContainer.appendChild(pAuthor);
    bookContainer.appendChild(removeButton);
    bookContainer.appendChild(hr);
    mainContainer.appendChild(bookContainer);

    /* A remove book arrow function */
    const deleteBook = () => {
      if (removeButton.name === book.title) {
        bookContainer.remove();

        /* Split and join the array */
        const index = removeButton.tabIndex;
        this.books = [...this.books.slice(0, index), ...this.books.slice(index + 1)];
        localStorage.setItem('library', JSON.stringify(this.books));
      }
    };

    /* Add a click listener to the remove button */
    removeButton.addEventListener('click', deleteBook);
  }
  
  /* A method that displays all the books elements */
  displayBooks() {
    this.books.forEach((book) => {
      this.createBook(book);
    });
  }
};

/* A instance of the class that displays the added books */
const myBooks = new Books();
myBooks.displayBooks();

/* A function that is called when the user clicks the submit button */
function addBook(event) {
  /* Create a new book */
  const book = new Books();
  book.info(titleInput.value, authorInput.value);
  
  /* If the inputs has no values then form is not submmited */
  if (!titleInput.validity.valueMissing && !authorInput.validity.valueMissing) {
    event.preventDefault();
  } else {
    return;
  }

  /* Save the book in the array and the local storage */
  book.storage();

  /* Resets the form */
  form.reset();

  /* Creates the new book element */
  book.createBook(book);
}

submitButton.addEventListener('click', addBook);
