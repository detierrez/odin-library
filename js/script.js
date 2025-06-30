class Book {
  uuid = crypto.randomUUID();
  isRead = false;
  constructor(title, author, year, genre, description, url) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.genre = genre;
    this.description = description;
    this.url = url;
  }
}

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

class Library {
  #books = {};
  constructor() {
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
        description:
          "The epic struggle to destroy the One Ring and defeat Sauron.",
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
    sampleBooks.forEach((book) => this.addBook(...Object.values(book)));
  }

  addBook(title, author, year, genre, description, url) {
    const newBook = new Book(...arguments);
    this.#books[newBook.uuid] = newBook;
  }

  getBook(uuid) {
    return this.#books[uuid];
  }

  removeBook(uuid) {
    delete this.#books[uuid];
  }

  get books() {
    return [...Object.values(this.#books)];
  }
}

class DOMController {
  READ_ICON_PATH = "./src/img/book-check.svg";
  UNREAD_ICON_PATH = "./src/img/book-off.svg";
  DELETE_ICON_PATH = "./src/img/delete.svg";

  cards = document.querySelector(".cards");
  spanBookCount = document.querySelector(".book-count");
  dialog = document.querySelector("dialog");
  btnOpenDialog = document.querySelector(".body-head button");
  btnCloseDialog = document.querySelector("dialog button[type='button']");
  btnAddBook = document.querySelector("dialog button[type='submit']");

  library = new Library();

  constructor() {
    this.btnOpenDialog.addEventListener("click", this.openDialog);
    this.btnCloseDialog.addEventListener("click", this.closeDialog);
    this.btnAddBook.addEventListener("click", this.addBook);
    this.updateDisplay();
  }

  updateDisplay() {
    const cards = [];
    for (const book of this.library.books) {
      cards.push(this.getCardElement(book));
    }
    this.cards.replaceChildren(...cards);
    this.spanBookCount.textContent = cards.length;
  }

  getCardElement(book) {
    const img = document.createElement("img");
    const h2 = document.createElement("h2");
    const h3 = document.createElement("h3");
    const p = document.createElement("p");
    const btnReadIcon = document.createElement("img");
    const btnReadText = document.createTextNode("");
    const btnRead = document.createElement("button");
    const btnDeleteIcon = document.createElement("img");
    const btnDelete = document.createElement("button");
    const details = document.createElement("div");
    const card = document.createElement("div");

    btnRead.className = "read";
    btnDelete.className = "delete";
    details.className = "details";
    card.className = "card";

    {
      img.setAttribute("src", book.url);
      img.setAttribute("alt", "book cover");
    }
    {
      {
        btnReadIcon.setAttribute(
          "src",
          book.isRead ? this.READ_ICON_PATH : this.UNREAD_ICON_PATH
        );
        btnReadText.textContent = book.isRead ? "Read" : "Unread";
      }
      btnRead.appendChild(btnReadIcon);
      btnRead.appendChild(btnReadText);
      btnRead.addEventListener("click", this.toggleIsRead);
    }
    {
      {
        btnDeleteIcon.setAttribute("src", this.DELETE_ICON_PATH);
      }
      btnDelete.appendChild(btnDeleteIcon);
      btnDelete.addEventListener("click", this.removeBook);
    }
    {
      {
        h2.textContent = book.title;
        h3.textContent = `${book.year}, ${book.author}`;
        p.textContent = `${book.genre} - ${book.description}`;
      }
      details.appendChild(h2);
      details.appendChild(h3);
      details.appendChild(p);
    }
    card.appendChild(img);
    card.appendChild(btnRead);
    card.appendChild(btnDelete);
    card.appendChild(details);
    card.setAttribute("data-uuid", book.uuid);
    if (book.isRead) card.setAttribute("read", "");
    return card;
  }

  toggleIsRead = (e) => {
    const btn = e.currentTarget;
    const card = btn.parentElement;
    const book = this.library.getBook([card.dataset.uuid]);
    book.isRead = !book.isRead;
    this.updateDisplay();
  };

  removeBook = (e) => {
    const btn = e.currentTarget;
    const card = btn.parentElement;
    this.library.removeBook(card.dataset.uuid);
    this.updateDisplay();
  };

  openDialog = (e) => {
    const inputs = document.querySelectorAll("form input, select, textarea");
    for (const input of inputs) {
      input.value = "";
    }
    document.querySelector("form textarea").textContent = "";

    this.dialog.showModal();
  };

  closeDialog = (e) => {
    this.dialog.close();
  };

  addBook = (e) => {
    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const year = document.querySelector("#year").value;
    const genre = document.querySelector("#genre").value;
    const description = document.querySelector("#description").value;
    const url = document.querySelector("#url").value;
    this.library.addBook(title, author, year, genre, description, url);
    this.updateDisplay();
  };
}

const app = new DOMController();
