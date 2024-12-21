document.getElementById('load-more').addEventListener('click', function() {
   
   
   
    fetch("book.json")
    .then((book)=>book.json())
    .then((libros)=>{
        console.log(libros)
        const container = document.querySelector('.book-container');
        libros.forEach((book, index) => {
            console.log(book.author);
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
});
