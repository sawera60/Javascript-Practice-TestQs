
let products = [
    { id: 1, name: "Shirt-1", sizes: ["sm", "md", "lg", "xl"] },
    { id: 2, name: "Shirt-2", sizes: ["lg", "xl"] },
    { id: 3, name: "Shirt-3", sizes: ["sm", "md"] },
    { id: 4, name: "Shirt-4", sizes: ["md", "lg", "xl"] },
];

// user can pass any size like sm or md, lg or even empty array
let sizes = ["xl"];

function filterProductsBySize(products, sizes) { //we pasing objects and sizes as an param for filtering in future
    // convert single string to array automatically
    if (typeof sizes === "string") {
        sizes = [sizes];
    }

    // if no sizes are given (empty array), return all products
    if (!sizes || sizes.length === 0) {
        return products;
    }

    // filter products that have any of the given sizes apply the filter method loop through every product and check if there is any size includes the size that is given in the sizes array then   //.some() checks if any size in product.sizes matches any in the user’s selected sizes
    const filteredProducts = products.filter(product =>
        product.sizes.some(size => sizes.includes(size))
    );

    return filteredProducts;
}

// first time running the function with whatever the size user enters
let prods = filterProductsBySize(products, sizes);
console.log(prods);
