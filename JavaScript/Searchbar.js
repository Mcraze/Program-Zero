const searchBar = document.getElementById("search-bar");
const books = document.querySelectorAll(".book");

searchBar.addEventListener("input", () => {
    const searchTerm = searchBar.value.toLowerCase();

    books.forEach(book => {
        if (book.id.includes(searchTerm)) {
            book.style.display = "block";
        } else {
            book.style.display = "none";
        }
    });
});