const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = Number(pages);
    this.read = Boolean(read);
    this.id = crypto.randomUUID();
}

function addBookToLibrary(title, author, pages, read) {
    myLibrary.push(new Book(title, author, pages,read));
}

const tableBody = document.getElementById("table-body");

function displayBook() {
    tableBody.textContent = "";
    myLibrary.forEach((book) => {
        const row = document.createElement("tr");
        const properties = [book.title, book.author, book.pages, book.read, book.id];
        properties.forEach(text => {
            const cell = document.createElement("td");
            cell.textContent = text;
            row.appendChild(cell);
        })
        tableBody.appendChild(row);
    })
}