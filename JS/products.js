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

$(function() {

    getFromLocalStorage();

    $.each(myProducts, (i, product) => {

        let divTag = $("<div>")
        .appendTo($("#productsContainer"));
        
        $("<img>")
        .appendTo(divTag)
        .addClass("productImage")
        .attr("src", product.image)
        .attr("alt", product.name + " perfume bottle")
        .on("click", function() {
            
                bag.push(product);

            localStorage.setItem("products", JSON.stringify(bag));
            renderShoppingBag();
        })
    });
});

function getFromLocalStorage() {

    let productFromLS = localStorage.getItem("products");
    
        let lsList = JSON.parse(productFromLS);
        
        $.each(lsList, (i, product) => {

            let addedItem = new Product(product.image, product.name, product.price, product.description, product.id, product.quantity);
             
            bag.push(addedItem);
        });
    renderShoppingBag();
};

function renderShoppingBag() {

    $("#shoppingBag").html(" ");
        
        $.each(bag, (i, product) => {

            $("<p>")
            .html(product.name + ", " + product.price + "kr")
            .appendTo("#shoppingBag");
        });
    };     
