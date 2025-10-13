import Book from "./book.js";

export default class Library {
  #books = {};

  addBook(args) {
    const book = new Book(args);
    this.#books[book.uuid] = book;
  }

  getBook(uuid) {
    return this.#books[uuid];
  }

  removeBook(uuid) {
    delete this.#books[uuid];
  }

  get books() {
    return Object.values(this.#books);
  }
}
