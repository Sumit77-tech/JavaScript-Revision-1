function createProduct(name, price, category) {
    return {
        name,
        price,
        category,
        applyDiscount(discountPercentage) {
            this.price = this.price - (this.price*discountPercentage)/100;
        },
    };
}
function createCategoryManager() {
    let products = [];
    return {
        addProduct(product) {
            products.push(product);
        },
        removeProduct(productName) {
            let index = products.findIndex(product => product.name === productName);
            if(index !== -1) {
                products.splice(index, 1);
            }
        },
        listProducts() {
            return products;
        },
        applyDiscountToCategory(category, discountPercentage) {
            products.forEach(product => {
                if (products.category === category) {
                    product.applyDiscount(discountPercentage);
                }
            });
        },
    };
}
let product1 = createProduct("Laptop", 5000, "Electronics");
let product2 = createProduct("SmartPhone", 800, "Electronics");
let categoryManager = createCategoryManager();
categoryManager.addProduct(product1);
categoryManager.addProduct(product2);
console.log("All Products:", categoryManager.listProducts());
categoryManager.applyDiscountToCategory("Electronics", 10);
console.log("Products after discount:", categoryManager.listProducts());
categoryManager.removeProduct("SmartPhone");
console.log("Products after removal:", categoryManager.listProducts());