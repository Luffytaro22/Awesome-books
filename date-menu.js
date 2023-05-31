const pDate = document.querySelector('#date');
const list = document.querySelector('.nav-sections:nth-child(1)');
const addNew = document.querySelector('.nav-sections:nth-child(2)');
const contact = document.querySelector('.nav-sections:nth-child(3)');
const booksSection = document.querySelector('#books-section');
const formSection = document.querySelector('#addBook-section');
const contactSection = document.querySelector('#contact');

const today = new Date();

pDate.innerHTML = today;

function showForm() {
  booksSection.classList.add('hide');
  formSection.classList.remove('hide');
  contactSection.classList.add('hide');
}

function showContact() {
  booksSection.classList.add('hide');
  formSection.classList.add('hide');
  contactSection.classList.remove('hide');
}

function showBooks() {
  booksSection.classList.remove('hide');
  formSection.classList.add('hide');
  contactSection.classList.add('hide');
}

list.addEventListener('click', showBooks);
addNew.addEventListener('click', showForm);
contact.addEventListener('click', showContact);
