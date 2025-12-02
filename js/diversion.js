document.addEventListener('DOMContentLoaded', function () {

    const main = document.querySelector('main.container');
    const lugaresContainer = document.getElementById('lugaresContainer');

    const searchHTML = `
        <div class="search-container mb-4">
            <input 
                type="text" 
                id="searchInput" 
                class="form-control search-input" 
                placeholder="Buscar lugares..."
            >
        </div>
    `;

    main.insertAdjacentHTML('afterbegin', searchHTML);

    const searchInput = document.getElementById('searchInput');
    const cards = document.querySelectorAll('.lugar-card');

    searchInput.addEventListener('input', function () {
        const searchText = this.value.toLowerCase();

        cards.forEach(card => {
            const title = card.querySelector('.card-title').textContent.toLowerCase();
            const text = card.querySelector('.card-text').textContent.toLowerCase();
            const location = card.querySelector('.text-muted').textContent.toLowerCase();

            if (title.includes(searchText) || text.includes(searchText) || location.includes(searchText)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});
