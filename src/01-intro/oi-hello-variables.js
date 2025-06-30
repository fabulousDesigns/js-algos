// console.log('Oi, Hello Variables!');
const title = Symbol('title');
const author = Symbol('author');
const book = {
  [title]: 'JavaScript: The Good Parts',
  [author]: 'Douglas Crockford',
}

console.log(`Book: ${book[title]} by ${book[author]}`);
