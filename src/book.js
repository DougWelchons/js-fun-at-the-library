function createTitle(title) {
  return `The ${title}`;
}

function buildMainCharacter(name, age, pronouns) {
  return {
    name: name,
    age: age,
    pronouns: pronouns,
  };
}

function saveReview(review, reviews) {
  if (!reviews.includes(review)) {
    reviews.push(review);
  }
}

function calculatePageCount(title) {
  return title.length * 20;
}

function writeBook(title, character, genre) {
  return {
    title: title,
    mainCharacter: character,
    pageCount: calculatePageCount(title),
    genre: genre,
  };
}

function editBook(book) {
  book.pageCount *= 0.75;
}

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook,
};
