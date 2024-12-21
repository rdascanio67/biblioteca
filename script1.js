// login de usuario
document.getElementById('user-button').addEventListener('click', function() {
            document.getElementById('user-popup').classList.toggle('show');
        });

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var userName = document.getElementById('username').value;
     document.getElementById('user-name').textContent = userName;
    document.getElementById('user-popup').classList.remove('show');
});

//lista de libros


const books = [
    {
        title: "Título del Libro 1",
        author: "Autor del Libro 1",
        summary: "Resumen del libro 1...",
        cover: "book-cover1.jpg",
        link: "pagina-libro1.html"
    },
    {
        title: "Título del Libro 2",
        author: "Autor del Libro 2",
        summary: "Resumen del libro 2...",
        cover: "book-cover2.jpg",
        link: "pagina-libro2.html"
    },
    {
        title: "Título del Libro 3",
        author: "Autor del Libro 3",
        summary: "Resumen del libro 3...",
        cover: "book-cover3.jpg",
        link: "pagina-libro3.html"
    },
    {
        title: "Título del Libro 4",
        author: "Autor del Libro 4",
        summary: "Resumen del libro 4...",
        cover: "book-cover4.jpg",
        link: "pagina-libro4.html"
    },
    {
        title: "Título del Libro 5",
        author: "Autor del Libro 5",
        summary: "Resumen del libro 5...",
        cover: "book-cover5.jpg",
        link: "pagina-libro5.html"
    },
];

document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.book-container');
    books.forEach((book, index) => {
        const bookLink = document.createElement('a');
        bookLink.className = 'book-link';
        bookLink.href = book.link;
        bookLink.innerHTML = `
            <div class="book-card">
                <img src="${book.cover}" alt="Portada del libro" class="book-cover">
                <div class="book-info">
                    <h2 class="book-title">${book.title}</h2>
                    <p class="book-author">${book.author}</p>
                    <p class="book-summary">${book.summary}</p>
                    <button class="like-button" data-id="${index + 1}">Me gusta</button>
                    <span class="like-count" data-id="${index + 1}">${getLikes(index + 1)} Me gusta</span>
                </div>
            </div>
        `;
        container.appendChild(bookLink);
    });

    // Añadir eventos a los botones Me gusta
    addLikeEvents();
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







// scripts.js
const books1 = [
    {
        title: "Título del Libro 6",
        author: "Autor del Libro 6",
        summary: "Resumen del libro 6...",
        cover: "book-cover6.jpg",
        link: "pagina-libro6.html"
    },
    {
        title: "Título del Libro 7",
        author: "Autor del Libro 7",
        summary: "Resumen del libro 7...",
        cover: "book-cover7.jpg",
        link: "pagina-libro7.html"
    },
    {
        title: "Título del Libro 8",
        author: "Autor del Libro 8",
        summary: "Resumen del libro 8...",
        cover: "book-cover8.jpg",
        link: "pagina-libro8.html"
    },
    {
        title: "Título del Libro 9",
        author: "Autor del Libro 9",
        summary: "Resumen del libro 9...",
        cover: "book-cover9.jpg",
        link: "pagina-libro9.html"
    },
    {
        title: "Título del Libro 10",
        author: "Autor del Libro 10",
        summary: "Resumen del libro 10...",
        cover: "book-cover10.jpg",
        link: "pagina-libro10.html"

    },
    {
        title: "Título del Libro 11",
        author: "Autor del Libro 11",
        summary: "Resumen del libro 11...",
        cover: "book-cover11.jpg",
        link: "pagina-libro11.html"
    },
    {
        title: "Título del Libro 12",
        author: "Autor del Libro 12",
        summary: "Resumen del libro 12...",
        cover: "book-cover12.jpg",
        link: "pagina-libro12.html"
    },
];

document.getElementById('load-more').addEventListener('click', function() {
    const container = document.querySelector('.book-container');
    books1.forEach((book, index) => {
        const bookCard = document.createElement('div');
        bookCard.className = 'book-card';
        bookCard.innerHTML = `
            <img src="${book.cover}" alt="Portada del libro" class="book-cover">
            <div class="book-info">
                <h2 class="book-title">${book.title}</h2>
                <p class="book-author">${book.author}</p>
                <p class="book-summary">${book.summary}</p>
                <button class="like-button" data-id="${index + 6}">Me gusta</button>
                <span class="like-count" data-id="${index + 6}">${getLikes(index + 6)}</span>
            </div>
        `;
        container.appendChild(bookCard);
    });
    // Ocultar el botón después de cargar más libros
    document.getElementById('load-more').style.display = 'none';

    // Añadir eventos a los botones Me gusta
    addLikeEvents();
});

// Función para obtener la cantidad de "Me gusta" desde localStorage
function getLikes(bookId) {
    return parseInt(localStorage.getItem(`likes-${bookId}`)) || 0;
}

// Función para añadir eventos a los botones Me gusta
function addLikeEvents() {
    document.querySelectorAll('.like-button').forEach(button => {
        button.addEventListener('click', function() {
            const bookId = this.getAttribute('data-id');
            const countSpan = document.querySelector(`.like-count[data-id='${bookId}']`);
            let count = parseInt(countSpan.textContent);
            count++;
            countSpan.textContent = `${count}`;
            localStorage.setItem(`likes-${bookId}`, count);
        });
    });
}

// Añadir eventos a los botones Me gusta en la carga inicial
addLikeEvents();

// Función para cargar los "Me gusta" al cargar la página
function loadLikes() {
    document.querySelectorAll('.like-count').forEach(span => {
        const bookId = span.getAttribute('data-id');
        span.textContent = `${getLikes(bookId)}`;
    });
}

// Cargar los "Me gusta" al cargar la página
document.addEventListener('DOMContentLoaded', loadLikes);





