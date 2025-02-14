// script.js

const products = [
    { id: 1, name: 'AURORA RING', price: 29.99, image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRGqGHpUzpN_5MfUEcHCU60dFsj1SnUR4kMVb7ieVo9onDjXbt-tQQzpJA6iJWreXSOXUleoRtqukBmreueXzbOYmWAJHUn1dQnKYBVldJfQ4zq8iXqKCHx9MhsnxVNzjnY6rETYQ&usqp=CAc' },
    { id: 2, name: 'BELLE RING', price: 29.99, image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTkuNmeyIxrdptUr-Fre7y-w2cwway9ddxuSv2ySaXoQW9gFyKOFlUAwgn2nHXTcntC0hNlD0qaJ_o7-ND9omTm1WYxWUyyi7tmuUcugpYT49bLcmz0Ck-0LRbbsGuoZ9TTJc97_g&usqp=CAc' },
    { id: 3, name: 'CINDERELLA RING', price: 29.99, image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTaP2xoUr-KHBS4_DficjvhRz0ewfBehRQfwldYFnAzQbAnuPK2Er5KLmQ5YT_Mb7d_KFOHwxXWRRAWb_vWGRhDGhQIGk5_R_Bixp0CScXRm9x8MySPyw8TWsDSJBnn8g5mvmDzHn0&usqp=CAc' },
    { id: 4, name: 'CINDERELLA HEART CHARM', price: 49.99, image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcT6YH6DtE-JQbiAu_OYURWQq_ES3AIawJHtycMHeqKRinNArzKZEEpwsUg09VLmjjrwAgNYiWpT0zPiXrMt46PgrAmqDR60xEEsBRN98QiHnSzE6iTCVbmSTiv21VMJhRwoJwG4vw&usqp=CAc' },
    { id: 5, name: 'TIANA RING', price: 24.99, image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTn8g6NcQ93-bgRTnkAaCQDpwStWPiFc1VW6_2tyk8lVFJVS08i8i2VcsPbbXxxohhjvRIIBjZpPTCmWLJ4qMLXfqjOMB5IySZ_xsAPuwTNqlYl8c6AE39TMXylhF_fm-0iXmspA28&usqp=CAc' },
    { id: 6, name: 'ARIEL RING', price: 24.99, image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQIgaYETe9KLFEnNxsdQJHkvr_Z1_QnO_DnmylEEZoKunpn0uqkbQDMOeWoN6CiaeIn4Il-ETJJJTxI5qs1EOe24IGhDYrRYzPx8IKcwlAC-WrA2KesOQz4E6LHFwxn7deV9xZqpA&usqp=CAc' },
    { id: 7, name: 'JASMINE RING', price: 29.99, image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTJ9hT2wfPbB9puAynjAnV-IQgyMHCxLdtHLntkDO0gsv9kRw9SVhynIDkW-M4iBK1vMjJjjsUwB17uFt4zWI8l4muD0FXaBqedlqJCOuBFlpNKdznNxsI5xjDe_AbxkRzNyuu4-MI&usqp=CAc' },
    { id: 8, name: 'SNOW WHITE RING', price: 24.99, image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSHE8IYkAQJ-ItIBy2lDjOg7N3BsGCs_-9f-FG5wuWmDTE2wrnEVnWKCUuDeCf83Nl5-3hcuA5yj9p5kEFAX1gBiw8jH0cmqVikwk7CDziSQOV6fPjVz3jYbXPLctvYGCSwaXvYvw&usqp=CAc' },
    { id: 9, name: 'REPUNZEL LIMITED EDITION RING', price: 49.99, image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRGqGHpUzpN_5MfUEcHCU60dFsj1SnUR4kMVb7ieVo9onDjXbt-tQQzpJA6iJWreXSOXUleoRtqukBmreueXzbOYmWAJHUn1dQnKYBVldJfQ4zq8iXqKCHx9MhsnxVNzjnY6rETYQ&usqp=CAc' },
   
];

let cartCount = 0;

function renderProducts() {
    const productGrid = document.getElementById('productGrid');
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>Price: $${product.price.toFixed(2)}</p>
            <button onclick="addToCart()">Add to Cart</button>
        `;
        productGrid.appendChild(productDiv);
    });
}

function addToCart() {
    cartCount++;
    document.getElementById('cartCount').innerText = cartCount;
}

// Load products when the page is loaded
document.addEventListener('DOMContentLoaded', renderProducts);