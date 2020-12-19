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

    $( ".hamburgerButton" ).click(function() {
        $( " .myUl " ).slideToggle();
        $( ".myUl" ).css({
            display: "flex"
        })
        console.log(("klick"));
        });

    if (localStorage.getItem("products") != null) { //Only get bag from LS if it has content
        getBag();
    }

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
                    let addedItem = new Product(product.image, product.name, product.price, product.description, product.id, 1);
                    bag.push(addedItem);
                }

                saveBag();
                getBag();
                createBagHTML();
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
                        getBag();
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
                        getBag();
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
                        getBag();
                        createBagHTML();

                    }
                }
            });

    })



    $("<p>").appendTo("#shoppingBag").html("Total: " + calculateTotal() + " SEK");
     // finds the i tag within the shoppingCartButton class and changes the html to what the quantity of the bag is.
    document.querySelector('.shoppingCartButton i').textContent = cartNumbers(); 

}

// CALCULATE TOTAL //
function calculateTotal() {
    let total = 0;
    for (let i = 0; i < bag.length; i++) {
        total = total + (bag[i].quantity * bag[i].price);

    }
    return total;
  
}
 //shows the amount of items on your cart
const cartNumbers = () => {
  let itemsInCart = 0;
  for (let i = 0; i < bag.length; i++) {
    itemsInCart += bag[i].quantity;
  }
  return itemsInCart;
};


