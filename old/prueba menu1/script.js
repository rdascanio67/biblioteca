
let currentIndex = 0;
const itemsPerPage = 5;

document.addEventListener('DOMContentLoaded', function() {
    fetch('libros.json')
        .then(response => response.json())
        .then(data => {
            const container = document.querySelector('.book-container');
            const loadMoreButton = document.getElementById('load-more');

            function loadBooks() {
                const end = currentIndex + itemsPerPage;
                const booksToShow = data.slice(currentIndex, end);

                booksToShow.forEach((book, index) => {
                    const bookCard = document.createElement('div');
                    bookCard.className = 'book-card';
                    bookCard.innerHTML = `
                        <img src="${book.cover}" alt="Portada del libro" class="book-cover">
                        <div class="book-info">
                            <h2 class="book-title">${book.title}</h2>
                            <p class="book-author">${book.author}</p>
                            <p class="book-summary">${book.summary}</p>
                            <button class="like-button" data-id="${currentIndex + index + 1}">Me gusta</button>
                            <span class="like-count" data-id="${currentIndex + index + 1}">${getLikes(currentIndex + index + 1)} </span>
                            <a href="${book.link}" class="like-button">Info</a>
                        </div>
                    `;
                    container.appendChild(bookCard);
                });

                currentIndex = end;

                // Ocultar el botón si no hay más libros para mostrar
                if (currentIndex >= data.length) {
                    loadMoreButton.style.display = 'none';
                }

                // Añadir eventos a los botones Me gusta
                addLikeEvents();
            }

            loadBooks();

            loadMoreButton.addEventListener('click', loadBooks);
        });
});

// Función para obtener la cantidad de "Me gusta" desde localStorage
function getLikes(bookId) {
    return parseInt(localStorage.getItem(`likes-${bookId}`)) || 0;
}

// Función para añadir eventos a los botones Me gusta
function addLikeEvents() {
    document.querySelectorAll('.like-button').forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            const bookId = this.getAttribute('data-id');
            const countSpan = document.querySelector(`.like-count[data-id='${bookId}']`);
            let count = parseInt(countSpan.textContent) || 0;
            count++;
            countSpan.textContent = `${count} Me gusta`;
            localStorage.setItem(`likes-${bookId}`, count);
        });
    });
}

// Función para cargar los "Me gusta" al cargar la página
function loadLikes() {
    document.querySelectorAll('.like-count').forEach(span => {
        const bookId = span.getAttribute('data-id');
        span.textContent = `${getLikes(bookId)} Me gusta`;
    });
}

// Cargar los "Me gusta" al cargar la página
document.addEventListener('DOMContentLoaded', loadLikes);
