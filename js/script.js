import Library from "./library.js";
import books from "../assets/books.json" with { type: "json" };

class DOMController {
  ICONS_PATH = "./assets/img/";
  READ_ICON_PATH = this.ICONS_PATH + "book-check.svg";
  UNREAD_ICON_PATH = this.ICONS_PATH + "book-off.svg";
  DELETE_ICON_PATH = this.ICONS_PATH + "delete.svg";

  cards = document.querySelector(".cards");
  bookCount = document.querySelector(".book-count");
  dialog = document.querySelector("dialog");
  openDialogButton = document.querySelector(".body-head button");
  closeDialogButton = document.querySelector("dialog button[type='button']");
  addBookButton = document.querySelector("dialog button[type='submit']");

  constructor(library) {
    this.library = library;
    this.openDialogButton.addEventListener("click", this.openDialog);
    this.closeDialogButton.addEventListener("click", this.closeDialog);
    this.addBookButton.addEventListener("click", this.addBook);
    this.updateDisplay();
  }

  updateDisplay() {
    const cards = [];
    for (const book of this.library.books) {
      cards.push(this.createCard(book));
    }
    this.cards.replaceChildren(...cards);
    this.bookCount.textContent = cards.length;
  }

  createCard(book) {
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

const library = new Library();
for (const bookArgs of books) {
  library.addBook(bookArgs);
}

const app = new DOMController(library);
