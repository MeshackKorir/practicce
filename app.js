
// let openShopping = document.querySelector('.shopping');
// let closeShopping = document.querySelector('.closeShopping');
// let list = document.querySelector('.product');
// let listCard = document.querySelector('.listCard');
// let body = document.querySelector('body');
// let total = document.querySelector('.total');
// let quantity = document.querySelector('.quantity');

// openShopping.addEventListener('click', () => {
//     body.classList.add('active');
// });

// closeShopping.addEventListener('click', () => {
//     body.classList.remove('active');
// });

// let products =[
//     {
//         id: 1,
//         name: 'Githeri',
//         url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSleZJihZVBWI_5Dp30yawkjlLoARdMcXaox6rsQneKUw&s",
//         price: 500
//     },

//      {
//         id: 2,
//         name: 'Porridge',
//         url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmZdTlSY0OHnal1o_CF4ANkbgrb8NY8mw-E-Tr1Sje&s",
//         price: 900
//     },

//      {
//         id: 3,
//         name: 'Ugali',
//         url: "https://img-global.cpcdn.com/recipes/52e0c9f92e527831/680x482cq70/white-ugali-recipe-main-photo.jpg",
//         price: 600
//     },

//      {
//         id: 4,
//         name: 'Tea',
//         url: "https://thumbs.dreamstime.com/b/cup-tea-21926665.jpg",
//         price: 400
//     },

//      {
//         id: 5,
//         name: 'Chips',
//         url: "https://www.tamingtwins.com/wp-content/uploads/2022/10/homemade-chips-7.jpg",
//         price: 300
//     },

//      {
//         id: 6,
//         name: 'Sausage',
//         url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_upUi_ELUNW8j-ejLN24GhsLFog5GBKp5N5pGovPr&s",
//         price: 250
//     }
// ];

// let listCards = [];

// function initApp() {
//     // Clear the existing content in the 'product' container
//     list.innerHTML = '';

//     products.forEach(product => {
//         // Create a new 'div' element for each product
//         let newDiv = document.createElement('div');
//         newDiv.innerHTML = `
//             <img src="${product.url}" width="250px"/>
//             <p>${product.name}</p>
//             <p>${product.price}</p>
//             <button data-id="${product.id}" class="add-to-cart">Add to Cart</button>
//         `;

//         // Add an event listener to the "Add to Cart" button
//         newDiv.querySelector('.add-to-cart').addEventListener('click', addToCart);

//         list.appendChild(newDiv);
//     });
// }

// function addToCart(event) {
//     const productId = parseInt(event.target.getAttribute('data-id'));

//     // Find the product with the given ID
//     const selectedProduct = products.find(product => product.id === productId);

//     if (selectedProduct) {
//         // Add the selected product to the 'listCard' and update the total and quantity
//         listCards.push(selectedProduct);
//         updateCart();
//     }
// }

// function updateCart() {
//     // Clear the existing content in the 'listCard' container
//     listCard.innerHTML = '';

//     let cartTotal = 0;
//     quantity.textContent = listCards.length;

//     listCards.forEach(product => {
//         cartTotal += product.price;
//         let cartItem = document.createElement('div');
//         cartItem.innerHTML = `
//             <p>${product.name} - ${product.price}</p>
//         `;
//         listCard.appendChild(cartItem);
//     });

//     total.textContent = cartTotal;
// }

// initApp();


let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.product');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', () => {
    body.classList.add('active');
});

closeShopping.addEventListener('click', () => {
    body.classList.remove('active');
});

let products =[
    {
        id: 1,
        name: 'Githeri',
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSleZJihZVBWI_5Dp30yawkjlLoARdMcXaox6rsQneKUw&s",
        price: 500
    },

     {
        id: 2,
        name: 'Porridge',
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmZdTlSY0OHnal1o_CF4ANkbgrb8NY8mw-E-Tr1Sje&s",
        price: 900
    },

     {
        id: 3,
        name: 'Ugali',
        url: "https://img-global.cpcdn.com/recipes/52e0c9f92e527831/680x482cq70/white-ugali-recipe-main-photo.jpg",
        price: 600
    },

     {
        id: 4,
        name: 'Tea',
        url: "https://thumbs.dreamstime.com/b/cup-tea-21926665.jpg",
        price: 400
    },

     {
        id: 5,
        name: 'Chips',
        url: "https://www.tamingtwins.com/wp-content/uploads/2022/10/homemade-chips-7.jpg",
        price: 300
    },

     {
        id: 6,
        name: 'Sausage',
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_upUi_ELUNW8j-ejLN24GhsLFog5GBKp5N5pGovPr&s",
        price: 250
    }
];

let cart = [];

function initApp() {
    // Clear the existing content in the 'product' container
    list.innerHTML = '';

    products.forEach(product => {
        // Create a new 'div' element for each product
        let newDiv = document.createElement('div');
        newDiv.innerHTML = `
            <img src="${product.url}" width="250px"/>
            <p>${product.name}</p>
            <p>${product.price}</p>
            <button data-id="${product.id}" class="add-to-cart">Add to Cart</button>
        `;

        // Add an event listener to the "Add to Cart" button
        newDiv.querySelector('.add-to-cart').addEventListener('click', addToCart);

        list.appendChild(newDiv);
    });
}

function addToCart(event) {
    const productId = parseInt(event.target.getAttribute('data-id'));

    // Find the product with the given ID
    const selectedProduct = products.find(product => product.id === productId);

    if (selectedProduct) {
        // Add the selected product to the cart
        cart.push(selectedProduct);
        updateCart();
    }
}

function removeFromCart(productId) {
    // Find the index of the product with the given ID in the cart
    const index = cart.findIndex(product => product.id === productId);

    if (index !== -1) {
        // Remove the product from the cart
        cart.splice(index, 1);
        updateCart();
    }
}

function updateCart() {
    // Clear the existing content in the 'listCard' container
    listCard.innerHTML = '';

    let cartTotal = 0;
    quantity.textContent = cart.length;

    cart.forEach(product => {
        cartTotal += product.price;
        let cartItem = document.createElement('div');
        cartItem.innerHTML = `
            <p>${product.name} - ${product.price}</p>
            <button data-id="${product.id}" class="remove-from-cart">Remove from Cart</button>
        `;
        cartItem.querySelector('.remove-from-cart').addEventListener('click', (event) => {
            const productId = parseInt(event.target.getAttribute('data-id'));
            removeFromCart(productId);
        });
        listCard.appendChild(cartItem);
    });

    total.textContent = cartTotal;
}

initApp();
