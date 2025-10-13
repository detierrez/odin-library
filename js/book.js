export default class Book {
  uuid = crypto.randomUUID();
  isRead = false;
  constructor({ title, author, year, genre, description, url }) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.genre = genre;
    this.description = description;
    this.url = url;
  }
}
