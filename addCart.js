let products = [
    { id: 1, price: 100, discount: 0.10 },
    { id: 2, price: 200, discount: 0.10 },
    { id: 3, price: 300, discount: 0.10 },
    { id: 4, price: 400, discount: 0.10 },
    { id: 5, price: 500, discount: 0.05 },
];

let cart = [];
let quantity = 1;

//if the selected product from products is item.no 2 
let product = products[2]

//function to add the products in the cart
function addToCart(cart, product) {
    // Create a copy (to keep it a pure function
    let newCart = [...cart];


    // find the already existing product in the cart
    let existingProduct = newCart.find((item) => {
        return item.id == product.id; //whatever the item is-coming in the cart during loop matches with the id in the products object
    })
    console.log(existingProduct)


    //  //case2: if the product is already exists in the cart 
    if (existingProduct) {
        existingProduct.quantity += 1;
        existingProduct.total =
            existingProduct.quantity *
            (existingProduct.price - existingProduct.price * existingProduct.discount);

    }
    else {
        //case1:
        let newProduct = {
            ...product,
            quantity: 1,
            total: product.price - product.price * product.discount,
        };
        newCart.push(newProduct);
    }
    return newCart;

}

cart = addToCart(cart, products[2]); 
cart = addToCart(cart, products[2]); 
cart = addToCart(cart, products[0]); 

console.log(cart);



//function to remove the items from cart

function removeFromCart(cart, product) {

}




//function to increment the items quantity in the cart
function incrementCart(cart, product) {

}




function decrementCart(cart, product) {

}



