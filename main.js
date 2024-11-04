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
        });})

    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });
