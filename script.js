let myLibrary = [];

class Book {
    constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = Number(pages);
    this.read = read ? "Read" : "Not Read";
    this.id = crypto.randomUUID();
    }
}

function addBookToLibrary(title, author, pages, read) {
    myLibrary.push(new Book(title, author, pages,read));
}

const tableBody = document.getElementById("table-body");

function displayBook() {
    tableBody.textContent = "";
    myLibrary.forEach((book, index) => {
        const row = document.createElement("tr");
        const properties = [book.title, book.author, book.pages, book.read, book.id];
        properties.forEach(text => {
            const cell = document.createElement("td");
            cell.textContent = text;
            row.appendChild(cell);
        })
        const delCell = document.createElement("td");
        const delBtn = document.createElement("button");
        delBtn.textContent = "Delete";
        delBtn.addEventListener("click", () => {
            myLibrary.splice(index, 1);
            displayBook();
        })
        delCell.appendChild(delBtn);
        row.appendChild(delCell);
        tableBody.appendChild(row);
    })
}

const newBook = document.getElementById("new-book");
const dialog = document.querySelector("dialog");

newBook.addEventListener("click", () => {
    dialog.showModal();
})

const myForm = document.querySelector("form");
myForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(myForm);
    const title = formData.get("title");
    const author = formData.get("author");
    const pages = formData.get("pages");
    const status = formData.get("status") === "is-read";
    addBookToLibrary(title, author, pages, status);
    displayBook();
    dialog.close();
    myForm.reset();
})

