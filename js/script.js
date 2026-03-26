const container = document.getElementById("booksContainer");
const searchInput = document.getElementById("searchInput");
const buttons = document.querySelectorAll(".filter-btn");
const languageSelect = document.getElementById("languageSelect");

const testamentType = container.getAttribute("data-testament");

let currentCategory = "All";
let currentLanguage = "english";

// Get books for current page
let baseBooks = bibleBooks.filter(
    book => book.testament === testamentType
);

// ✅ Single Display Function (FINAL)
function displayBooks(list) {
    container.innerHTML = "";

    list.forEach(book => {
        const card = document.createElement("div");
        card.classList.add("card");

        // 🌍 Language Logic
        let displayName = book.name;

        if (currentLanguage !== "english") {
            const langData = bibleLanguages[currentLanguage];
            if (langData && langData[book.name]) {
                displayName = langData[book.name];
            }
        }

        card.innerHTML = `
            <h3>${displayName}</h3>
            <p><strong>Category:</strong> ${book.category}</p>
            <p><strong>Chapters:</strong> ${book.chapters}</p>
            <p><strong>Verses:</strong> ${book.verses}</p>
            <p><strong>Writer:</strong> ${book.writer}</p>
        `;

        container.appendChild(card);
    });
}

// 🔄 Apply Filters (Category + Search)
function applyFilters() {
    let filtered = baseBooks;

    // Category filter
    if (currentCategory !== "All") {
        filtered = filtered.filter(
            book => book.category === currentCategory
        );
    }

    // Search filter
    const searchText = searchInput.value.toLowerCase();

    if (searchText) {
        filtered = filtered.filter(book =>
            book.name.toLowerCase().includes(searchText)
        );
    }

    displayBooks(filtered);
}

// 📚 Category Buttons
buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        currentCategory = btn.getAttribute("data-category");
        applyFilters();
    });
});

// 🔍 Search Input
searchInput.addEventListener("input", applyFilters);

// 🌍 Language Change
languageSelect.addEventListener("change", () => {
    currentLanguage = languageSelect.value;
    applyFilters();
});

// 🚀 Initial Load
displayBooks(baseBooks);