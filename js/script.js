const container = document.getElementById("booksContainer");
const searchInput = document.getElementById("searchInput");
const buttons = document.querySelectorAll(".filter-btn");

const testamentType = container.getAttribute("data-testament");

let currentCategory = "All";

// Get books for current page
let baseBooks = bibleBooks.filter(
    book => book.testament === testamentType
);

// Display function
function displayBooks(list) {
    container.innerHTML = "";

    list.forEach(book => {
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <h3>${book.name}</h3>
            <p><strong>Category:</strong> ${book.category}</p>
            <p><strong>Chapters:</strong> ${book.chapters}</p>
            <p><strong>Verses:</strong> ${book.verses}</p>
            <p><strong>Writer:</strong> ${book.writer}</p>
        `;

        container.appendChild(card);
    });
}

// Apply filters (Combines Category + Search)
function applyFilters() {
    let filtered = baseBooks;

    // Category filter logic
    if (currentCategory !== "All") {
        filtered = filtered.filter(book => book.category === currentCategory);
    }

    // Search filter logic
    const searchText = searchInput.value.toLowerCase();
    if (searchText) {
        filtered = filtered.filter(book =>
            book.name.toLowerCase().includes(searchText)
        );
    }

    displayBooks(filtered);
}

// Category Button click listeners
buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        currentCategory = btn.getAttribute("data-category");
        applyFilters();
    });
});

// Search input listener
searchInput.addEventListener("input", applyFilters);

// Initial load
displayBooks(baseBooks);