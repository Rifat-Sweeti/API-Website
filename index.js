const cardContainer = document.getElementById('card-container');
const loading = document.getElementById('loading');

// Fetch data from the API and display cards
fetch('https://fakestoreapi.com/products?limit=10')
    .then(res => res.json())
    .then(data => {
        loading.style.display = 'none'; // Hide loading

        // Generate card HTML
        cardContainer.innerHTML = data.map(item => `
            <div class="card">
                <img src="${item.image}" alt="Product Image">
                <h3>${item.title}</h3>
                <p>${item.description.slice(0, 100)}...</p>
            </div>
        `).join('');
    })
    .catch(err => {
        loading.textContent = 'Failed to load cards!';
        console.error('Error:', err);
    });