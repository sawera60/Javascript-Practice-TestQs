let products = [
    {
        id: 1,
        name: "Shirt- 1",
        sizes: ["sm", "md", "lg", "xl"],
        price: 800
    },
    {
        id: 2,
        name: "Shirt - 2",
        sizes: ["sm", "md", "lg", "xl"],
        price: 1200
    }


];

function addDiscountProperty(products, discountValue) {
    return products.map(product => {
        if (product.price > 1000) {
            return { ...product, discount: discountValue };
        }
        return { ...product };
    });
}
let prods = addDiscountProperty(products, 0.10);
console.log(prods);
