let products = [
    { id: 1, price: 100, discount: 0.10 },
    { id: 2, price: 200, discount: 0.10 },
    { id: 3, price: 300, discount: 0.10 },
    { id: 4, price: 400, discount: 0.10 },
    { id: 5, price: 500, discount: 0.05 },
];

let cart = [];
let quantity = 1;

let product = products[2]

function addToCart(cart, product) {

    let newCart = [...cart];
    let existingProduct = newCart.find((item) => {
        return item.id == product.id; 
    })
    console.log(existingProduct)

    if (existingProduct) {
        existingProduct.quantity += 1;
        existingProduct.total =
            existingProduct.quantity *
            (existingProduct.price - existingProduct.price * existingProduct.discount);

    }
    else {

        let newProduct = {
            ...product,
            quantity: 1,
            total: product.price - product.price * product.discount,
        };
        newCart.push(newProduct);
    }
    return newCart;

}

cart = addToCart(cart, products[2]); //diff usecases
cart = addToCart(cart, products[2]);
cart = addToCart(cart, products[0]);

console.log(cart);


 //----- Remove Cart function
function removeFromCart(cart, product) {
  return cart.filter((item) => item.id !== product.id);
}
let productToRemove = cart[1];
cart = removeFromCart(cart, productToRemove);
console.log(cart);

  // --------- Increment function
function incrementCart(cart, product) {
  return cart.map((item) => {
    if (item.id === product.id) {
      return {
        ...item,
        quantity: item.quantity + 1,
        total: (item.quantity + 1) * (item.price - item.price * item.discount),
      };
    }
    return item;
  });
}
cart = incrementCart(cart, products[0]);
console.log(cart);


            //-----Decrement Function
function decrementCart(cart, product) {
  return cart
    .map((item) => {
      if (item.id === product.id) {
        return {
          ...item,
          quantity: item.quantity - 1,
          total: (item.quantity - 1) * (item.price - item.price * item.discount),
        };
      }
      return item;
    })
    .filter((item) => item.quantity > 0);
}

cart = decrementCart(cart, products[2]);
console.log(cart);



