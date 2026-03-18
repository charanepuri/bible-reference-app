const container = document.getElementById("booksContainer");

// Get which page we are in (OT or NT)
const testamentType = container.getAttribute("data-testament");

bibleBooks
    .filter(book => book.testament === testamentType)
    .forEach(book => {

        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <h3>${book.name}</h3>
            <p><strong>Testament:</strong> ${book.testament}</p>
            <p><strong>Category:</strong> ${book.category}</p>
            <p><strong>Chapters:</strong> ${book.chapters}</p>
            <p><strong>Verses:</strong> ${book.verses}</p>
            <p><strong>Writer:</strong> ${book.writer}</p>
        `;

        container.appendChild(card);

    });