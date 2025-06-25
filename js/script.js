function Book(title, author, year, genre, description, url) {
  this.title = title;
  this.author = author;
  this.year = year;
  this.genre = genre;
  this.description = description;
  this.url = url;
  this.uuid = crypto.randomUUID();
  this.isRead = false;
}

function addBookToLibrary(title, author, year, genre, description, url) {
  const newBook = new Book(title, author, year, genre, description, url);
  myLibrary[newBook.uuid] = newBook;
}

const urls = [
  "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/book-cover-design-template-75787feabf29b152e933300fcd458156.webp?ts=1698304091",
  "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/motivational-self-help-book-cover-design-template-549362a7c9d568279e866eb81510239c.webp?ts=1731915633",
  "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/white-affair-party-flyer-template-design-b354673168c35af8368759001a01cfac.webp?ts=1737239766",
  "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/yellow-business-leadership-book-cover-design-template-dce2f5568638ad4643ccb9e725e5d6ff.webp?ts=1734006041",
  "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/book-cover-design-template-9b0c664d341885e048f709d0c89a2bc0.webp?ts=1711503102",
  "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/book-cover-design-template-d154d1f1b13b693a9cf4c1b3dec58889.webp?ts=1737216177",
  "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/contemporary-fiction-night-time-book-cover-design-template-1be47835c3058eb42211574e0c4ed8bf.webp?ts=1734004864",
  "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/city-night-urban-gold-flyer-template-design-6ae3a0fe5b77af2fc6190fbff7fa8d78.webp?ts=1737810849",
  "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/white-maximalist-book-kindle-book-covers-design-template-f9da99f2e43eea74ead453aa4704f4ed.webp?ts=1716973291",
  "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/escape-room-fiction-thriller-book-cover-design-template-62e0fd4c8cb025948da890343a7984e4.webp?ts=1737397366",
];
const sampleBooks = [
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: "1925",
    genre: "Novel",
    description:
      "A story of the mysterious Jay Gatsby and his unrequited love for Daisy Buchanan.",
    url: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/book-cover-design-template-75787feabf29b152e933300fcd458156.webp?ts=1698304091",
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: "1960",
    genre: "Fiction",
    description:
      "A young girl's perspective on racial injustice in the Deep South.",
    url: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/motivational-self-help-book-cover-design-template-549362a7c9d568279e866eb81510239c.webp?ts=1731915633",
  },
  {
    title: "1984",
    author: "George Orwell",
    year: "1949",
    genre: "Dystopian",
    description:
      "A chilling vision of a totalitarian future ruled by Big Brother.",
    url: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/white-affair-party-flyer-template-design-b354673168c35af8368759001a01cfac.webp?ts=1737239766",
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    year: "1813",
    genre: "Romance",
    description:
      "A classic tale of love and misunderstanding in 19th-century England.",
    url: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/yellow-business-leadership-book-cover-design-template-dce2f5568638ad4643ccb9e725e5d6ff.webp?ts=1734006041",
  },
  {
    title: "Moby-Dick",
    author: "Herman Melville",
    year: "1851",
    genre: "Adventure",
    description:
      "Captain Ahab's obsessive quest to hunt the white whale, Moby Dick.",
    url: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/book-cover-design-template-9b0c664d341885e048f709d0c89a2bc0.webp?ts=1711503102",
  },
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    year: "1937",
    genre: "Fantasy",
    description:
      "Bilbo Baggins embarks on an epic quest to reclaim a lost dwarf kingdom.",
    url: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/book-cover-design-template-d154d1f1b13b693a9cf4c1b3dec58889.webp?ts=1737216177",
  },
  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    year: "1951",
    genre: "Fiction",
    description:
      "Holden Caulfield's journey through New York City after being expelled from school.",
    url: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/contemporary-fiction-night-time-book-cover-design-template-1be47835c3058eb42211574e0c4ed8bf.webp?ts=1734004864",
  },
  {
    title: "Brave New World",
    author: "Aldous Huxley",
    year: "1932",
    genre: "Science Fiction",
    description:
      "A futuristic society driven by technology and controlled by conditioning.",
    url: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/city-night-urban-gold-flyer-template-design-6ae3a0fe5b77af2fc6190fbff7fa8d78.webp?ts=1737810849",
  },
  {
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    year: "1954",
    genre: "Fantasy",
    description: "The epic struggle to destroy the One Ring and defeat Sauron.",
    url: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/white-maximalist-book-kindle-book-covers-design-template-f9da99f2e43eea74ead453aa4704f4ed.webp?ts=1716973291",
  },
  {
    title: "Jane Eyre",
    author: "Charlotte Brontë",
    year: "1847",
    genre: "Gothic",
    description:
      "An orphaned governess finds love and faces dark secrets at Thornfield Hall.",
    url: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/escape-room-fiction-thriller-book-cover-design-template-62e0fd4c8cb025948da890343a7984e4.webp?ts=1737397366",
  },
];

const myLibrary = {};

const READ_ICON_PATH = "./src/img/book-check.svg";
const UNREAD_ICON_PATH = "./src/img/book-off.svg";
const DELETE_ICON_PATH = "./src/img/delete.svg";

for (const book of sampleBooks) {
  addBookToLibrary(...Object.values(book));
}

const cards = document.querySelector(".cards");
const spanBookCount = document.querySelector(".book-count");
const dialog = document.querySelector("dialog");
const btnOpenDialog = document.querySelector(".body-head button");
const btnCloseDialog = document.querySelector("dialog button[type='button']");
const btnAddBook = document.querySelector("dialog button[type='submit']");

btnOpenDialog.addEventListener("click", openDialog);
btnCloseDialog.addEventListener("click", closeDialog);
btnAddBook.addEventListener("click", userAddBook);

spanBookCount.textContent = 0;

function addBookHTML(book) {
  const iconPath = book.isRead ? READ_ICON_PATH : UNREAD_ICON_PATH;
  const btnText = book.isRead ? "Read" : "Unread";

  const card = document.createElement("div");
  const img = document.createElement("img");
  const btnRead = document.createElement("button");
  const btnReadIcon = document.createElement("img");
  const btnReadText = document.createTextNode(btnText);
  const btnDelete = document.createElement("button");
  const btnDeleteIcon = document.createElement("img");
  const details = document.createElement("div");
  const h2 = document.createElement("h2");
  const h3 = document.createElement("h3");
  const p = document.createElement("p");
  card.className = "card";
  btnRead.className = "read";
  btnDelete.className = "delete";
  details.className = "details";

  img.setAttribute("src", book.url);
  img.setAttribute("alt", "book cover");
  btnReadIcon.setAttribute("src", iconPath);
  btnDeleteIcon.setAttribute("src", DELETE_ICON_PATH);

  h2.textContent = book.title;
  h3.textContent = `${book.year}, ${book.author}`;
  p.textContent = `${book.genre} - ${book.description}`;

  btnRead.addEventListener("click", toggleIsRead);
  btnDelete.addEventListener("click", deleteCard);

  btnRead.appendChild(btnReadIcon);
  btnRead.appendChild(btnReadText);
  btnDelete.appendChild(btnDeleteIcon);
  details.appendChild(h2);
  details.appendChild(h3);
  details.appendChild(p);
  card.appendChild(img);
  card.appendChild(btnRead);
  card.appendChild(btnDelete);
  card.appendChild(details);

  card.setAttribute("data-uuid", book.uuid);
  if (book.isRead) {
    card.setAttribute("read", "");
  }
  cards.appendChild(card);
  spanBookCount.textContent++;
}

for (const uuid in myLibrary) {
  addBookHTML(myLibrary[uuid]);
}

function deleteCard(e) {
  e.stopPropagation();
  const btn = e.currentTarget;
  const card = btn.parentElement;
  delete myLibrary[card.dataset.uuid];
  spanBookCount.textContent--;
  card.remove();
}

function toggleIsRead(e) {
  e.stopPropagation();
  const btn = e.currentTarget;
  const card = btn.parentElement;
  const book = myLibrary[card.dataset.uuid];

  book.isRead = !book.isRead;
  card.toggleAttribute("read");
  const iconPath = book.isRead ? READ_ICON_PATH : UNREAD_ICON_PATH;
  const btnText = book.isRead ? "Read" : "Unread";
  btn.childNodes[0].setAttribute("src", iconPath);
  btn.childNodes[1].textContent = btnText;
}

function openDialog() {
  const inputs = document.querySelectorAll("form input, select, textarea");
  for (const input of inputs) {
    input.value = "";
  }
  document.querySelector("form textarea").textContent = "";

  dialog.showModal();
}

function closeDialog() {
  dialog.close();
}

function userAddBook() {
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const year = document.querySelector("#year").value;
  const genre = document.querySelector("#genre").value;
  const description = document.querySelector("#description").value;
  const url = document.querySelector("#url").value;

  console.log(description)

  const newBook = new Book(title, author, year, genre, description, url);

  addBookToLibrary(newBook);
  addBookHTML(newBook);
}
