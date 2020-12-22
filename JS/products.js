class Product {
    constructor(image, name, price, description, id) {
        this.image = image;
        this.name = name;
        this.price = price;
        this.description = description;
        this.id = id;
    }
}

class CartItem {
    constructor(product, quantity) {
        this.product = product;
        this.quantity = quantity;
    }
}

let description = "Lorem ipsum";

let product1 = new Product("../IMG/perfume-bottle-bergamot.jpg", "Bergamot", 850, description, 1, 0);
let product2 = new Product("../IMG/perfume-bottle-iris.jpg", "Iris", 850, description, 2, 0);
let product3 = new Product("../IMG/perfume-bottle-saffron.jpg", "Saffron", 850, description, 3, 0);
let product4 = new Product("../IMG/perfume-bottle-sandalwood.jpg", "Sandalwood", 850, description, 4, 0);
let product5 = new Product("../IMG/perfume-bottle-ginger.jpg", "Ginger", 850, description, 5, 0);

let myProducts = [product1, product2, product3, product4, product5];

let bag = [];

$(function() {
    
    getBag();
    createBagHTML();

    $.each(myProducts, (i, product) => { // Looping the objects and creating html from them //

        let divTag = $("<div>")
            .appendTo($("#productsContainer"))
            .addClass("eachProduct");

        $("<img>").appendTo(divTag)
            .addClass("productImage")
            .attr("src", product.image)
            .attr("alt", product.name + " perfume bottle")
            .attr("id", product.id);
        // .on("click", { product: product }, function(){ LINK TO PRODUCT DESCRIPTION PAGE });

        let textLeft = $("<div>").appendTo(divTag);

        $("<p>").appendTo(textLeft)
        .html(product.name);

        $("<p>").appendTo(textLeft)
        .html(product.price + " SEK");

        $("<button>").appendTo(divTag)
        .attr("type", "button")
        .html("Add to bag")
        .on("click", { product: product }, function() {

            let foundProduct = false;

            for (let i = 0; i < bag.length; i++) {
                if (bag[i].id === product.id) {
                    foundProduct = true;
                    bag[i].quantity++;
                }
            }

            if (foundProduct === false) {
                let addedItem = new CartItem(product, 1);
                bag.push(addedItem);
            }
            
            saveBag();
            createBagHTML();
            cartNumbers();
        });
    });
});

function createBagHTML() {

    $("#shoppingBag").html("");

    $.each(bag, (i, product) => {

        $("<img>").appendTo("#shoppingBag")
        .attr("src", product.image)
        .attr("alt", product.name + " perfume bottle");

        // DELETE FROM SHOPPING BAG //
        $("<button>").appendTo("#shoppingBag")
        .attr("type", "button")
        .html("x")
        .on("click", { product: product }, function() {

            for (let i = 0; i < bag.length; i++) {
                if (bag[i].id === product.id) {
                    bag.splice([i], 1);
                    saveBag();
                    createBagHTML();
                }
            }
        });

        $("<p>").appendTo("#shoppingBag")
        .html(product.name + ", " + product.price + " SEK, " + "pcs: " + product.quantity);

        // INCREASE QUANTITY IN SHOPPING BAG //
        $("<button>").appendTo("#shoppingBag")
        .attr("type", "button")
        .html("+")
        .on("click", { product: product }, function() {
            for (let i = 0; i < bag.length; i++) {
                if (bag[i].id === product.id) {
                    product.quantity++;
                    saveBag();
                    createBagHTML();
                }
            }
        });

        // DECREASE QUANTITY IN SHOPPING BAG //
        $("<button>").appendTo("#shoppingBag")
        .attr("type", "button")
        .html("-")
        .on("click", { product: product }, function() {

            for (let i = 0; i < bag.length; i++) { // Looping bag, if clicked object id is found in bag -> decrease quantity of that product

                if (bag[i].id === product.id) {
                    bag[i].quantity--;

                    if (bag[i].quantity === 0) { // If the quantity of the product becomes 0 -> splice that product from array
                        bag.splice([i], 1);
                    }
                    saveBag();
                    createBagHTML();
                }
            }
        });
    })
}

// CALCULATE TOTAL //
function calculateTotal() {
    let total = 0;
    for (let i = 0; i < bag.length; i++) {
        total += (bag[i].quantity * bag[i].price);
    }
    return total;
}


