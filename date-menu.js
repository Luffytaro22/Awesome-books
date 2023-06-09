const pDate = document.querySelector('#date');
const list = document.querySelector('.nav-sections:nth-child(1)');
const addNew = document.querySelector('.nav-sections:nth-child(2)');
const contact = document.querySelector('.nav-sections:nth-child(3)');
const booksSection = document.querySelector('#books-section');
const formSection = document.querySelector('#addBook-section');
const contactSection = document.querySelector('#contact');
const iconList = document.querySelector('#icon-list');
const iconBook = document.querySelector('#icon-book');
const iconContact = document.querySelector('#icon-contact');

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const date = new Date();

const month = months[date.getMonth()];
const day = date.getDate();
const year = date.getFullYear();
let hours = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();
const period = hours >= 12 ? 'pm' : 'am';

/* Function to get the suffix for the day */
function getOrdinalSuffix(day) {
  if (day >= 11 && day <= 13) {
    return 'th';
  }
  switch (day % 10) {
    case 1:
      return 'st';
    case 2:
      return 'nd';
    case 3:
      return 'rd';
    default:
      return 'th';
  }
}

/* Function to add additional zeros to the minutes and seconds if they are less than 10 */
function addLeadingZeros(value) {
  return value < 10 ? `0${value}` : value;
}

/* Change the format of the hours to 12 */
if (hours > 12) {
  hours -= 12;
}

/* Insert the format in the p element */
pDate.innerHTML = `${month} ${day}${getOrdinalSuffix(day)} ${year}, ${hours}:${addLeadingZeros(minutes)}:${addLeadingZeros(seconds)} ${period}`;

function showForm() {
  booksSection.classList.add('hide');
  formSection.classList.remove('hide');
  contactSection.classList.add('hide');

  list.classList.remove('change-color');
  contact.classList.remove('change-color');
  addNew.classList.add('change-color');

  iconList.classList.remove('change-color');
  iconBook.classList.add('change-color');
  iconContact.classList.remove('change-color');
}

function showContact() {
  booksSection.classList.add('hide');
  formSection.classList.add('hide');
  contactSection.classList.remove('hide');

  list.classList.remove('change-color');
  addNew.classList.remove('change-color');
  contact.classList.add('change-color');

  iconList.classList.remove('change-color');
  iconBook.classList.remove('change-color');
  iconContact.classList.add('change-color');
}

function showBooks() {
  booksSection.classList.remove('hide');
  formSection.classList.add('hide');
  contactSection.classList.add('hide');

  addNew.classList.remove('change-color');
  contact.classList.remove('change-color');
  list.classList.add('change-color');

  iconList.classList.add('change-color');
  iconBook.classList.remove('change-color');
  iconContact.classList.remove('change-color');
}

list.addEventListener('click', showBooks);
iconList.addEventListener('click', showBooks);

addNew.addEventListener('click', showForm);
iconBook.addEventListener('click', showForm);

contact.addEventListener('click', showContact);
iconContact.addEventListener('click', showContact);
