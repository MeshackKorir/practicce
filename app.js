let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.product');
let listCard = document.querySelector('.listCard')
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity')
// let display_product = document.querySelector('.product')


openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})

closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

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

// let listCards = [];
function initApp(){
    let display_product = document.querySelector('.product')

    products.forEach(product =>{

        let newDiv = document.createElement('div');
        newDiv.innerHTML = `
        <img src="${product.url}" width="250px"/>
        <p>${product.name}</p>
        <p>${product.price}</p>

        `;
        list.appendChild(newDiv);
    })
}

initApp();

