//Task 2:Fetch product data and display basic information.
const productList = document.getElementById('productList');

// Fetch data from the supplier's product API
fetch('https://www.course-api.com/javascript-store-products')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json(); // Parse the response as JSON
    })
    .then(products => {
        products.forEach(product => {
            const listItem = document.createElement('li');
            listItem.classList.add('product');
//Task 3: Format product information dynamically.
            listItem.innerHTML = `
            <h5>${product.name}</h5>
            <p>Company: ${product.company}</p>
            <p>Price: $${product.price}</p> 
            <img src="${product.image}" alt="${product.name}" style="width: 100px; height: auto;">
        `;
        
        productList.appendChild(listItem);
        });})

    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
//Task 4: Display a friendly error message to the user
        productList.innerHTML = '<li>Sorry! We failed to load products. Please try again later:)</li>';
    });
