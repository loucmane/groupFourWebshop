class Product {
    constructor(image, name, price, description, id, quantity) {
        this.image = image;
        this.name = name;
        this.price = price;
        this.description = description;
        this.id = id;
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


// Save shopping bag in LS
function saveBag() {
    localStorage.setItem("products", JSON.stringify(bag));
}

// Get shopping bag from LS
function getBag() {
    bag = JSON.parse(localStorage.getItem("products"));
}



$(function() { // Window onload

    if (localStorage.getItem("products") != null) { //Only get bag from LS if it has content
        getBag();
    }

    createBagHTML();

    $.each(myProducts, (i, product) => { // Looping the objects and creating html from them //

        let divTag = $("<div>")
            .appendTo($("#productsContainer"));

        $("<img>")
            .appendTo(divTag)
            .addClass("productImage")
            .attr("src", product.image)
            .attr("alt", product.name + " perfume bottle")
            .attr("id", product.id)
            .on("click", { product: product }, function() {

                for (let addedItem in bag) { // Looping bag, if clicked object id is found in bag -> increase quantity
                    if (bag[addedItem].id === product.id) {
                        bag[addedItem].quantity++;
                        saveBag();
                        getBag();
                        createBagHTML();
                        return; // Stops loop
                    }
                }

                // Otherwise -> push the new object
                let addedItem = new Product(product.image, product.name, product.price, product.description, product.id, 1);
                bag.push(addedItem);
                saveBag();
                getBag();
                createBagHTML();


            })
    });
});



function createBagHTML() {


    $(".bagItems").html("");

    $.each(bag, (i, product) => {

        $("<p>")
            .addClass("bagItems")
            .html(product.name + ", " + product.price + "kr, " + "pcs: " + product.quantity)
            .appendTo("#shoppingBag");
    });
}