function createLibrary(name) {
  return {
    name: name,
    shelves: {
      fantasy: [],
      fiction: [],
      nonFiction: [],
    },
  };
}

function addBook(library, book) {
  Object.keys(library.shelves).forEach((shelf, index) => {
    if (book.genre === shelf) {
      library.shelves[`${shelf}`].push(book);
    }
  });
}

function checkoutBook(library, title, shelf) {
  message = `Sorry, there are currently no copies of ${title} available at the ${library.name}`;
  library.shelves[`${shelf}`].forEach((book, index) => {
    if (book.title === title) {
      library.shelves[`${shelf}`].splice(index);
      message = `You have now checked out ${title} from the ${library.name}`;
    }
  });
  return message;
}

module.exports = {
  createLibrary,
  addBook,
  checkoutBook,
};
