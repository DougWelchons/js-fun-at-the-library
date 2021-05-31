function shelfBook(book, shelf) {
  if (shelf.length < 3) {
    shelf.unshift(book);
  }
}

function unshelfBook(title, shelf) {
  shelf.forEach(function doAThing(book, index) {
    if (book.title === title) {
      shelf.splice(index, 1);
    };
  });
}

function listTitles(shelf) {
  string = '';
  shelf.forEach(function addToString(book, index) {
    string = string + book.title;
    if (shelf.length - 1 != index) {
      string = string + ', ';
    };
  });

  return string;
}

function searchShelf(shelf, title) {
  return shelf.some(function itExists(book) {
    return book.title === title;
  });
}

module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf,
};
