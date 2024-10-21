// Fetch and display products from Fake Store API
document.addEventListener("DOMContentLoaded", function() {
    const productList = document.getElementById('product-list');

    // Fetch data from the Fake Store API
    fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(products => {
        // Iterate over the products and create HTML elements for each product
        products.forEach(product => {
            // Create product card
            const productCard = document.createElement('div');
            productCard.classList.add('product');

            // Create product image
            const productImg = document.createElement('img');
            productImg.src = product.image;
            productImg.alt = product.title;

            // Create product title
            const productTitle = document.createElement('h4');
            productTitle.textContent = product.title;

            // Create product description
            const productDesc = document.createElement('p');
            productDesc.textContent = product.description.substring(0, 100) + '...';

            // Create product price
            const productPrice = document.createElement('p');
            productPrice.classList.add('price');
            productPrice.textContent = `$${product.price}`;

            // Append the product image, title, description, and price to the card
            productCard.appendChild(productImg);
            productCard.appendChild(productTitle);
            productCard.appendChild(productDesc);
            productCard.appendChild(productPrice);

            // Append the product card to the product list
            productList.appendChild(productCard);
        });
    })
    .catch(error => console.error('Error fetching products:', error));
});
