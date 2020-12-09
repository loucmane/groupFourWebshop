// Class and constructor for every object (product) //

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

// Using variable to write same description for all of them //

let description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias natus perferendis inventore debitis, facere amet incidunt asperiores optio. At est quia maxime. Doloribus autem sit aliquam perspiciatis repellendus nisi.";

// Creating all our objects and deciding their properties //

let product1 = new Product("../IMG/perfume-bottle-bergamot.jpg", "Bergamot", 850, description, 1, 0);
let product2 = new Product("../IMG/perfume-bottle-iris.jpg", "Iris", 850, description, 2, 0);
let product3 = new Product("../IMG/perfume-bottle-saffron.jpg", "Saffron", 850, description, 3, 0);
let product4 = new Product("../IMG/perfume-bottle-sandalwood.jpg", "Sandalwood", 850, description, 4, 0);
let product5 = new Product("../IMG/perfume-bottle-ginger.jpg", "Ginger", 850, description, 5, 0);

// Creating an array of the objects //

let myProducts = [product1, product2, product3, product4, product5];

$(function() {

    // Running loop of that array //

    $.each(myProducts, (i, product) => {

        console.log(product);

        // Creating html displaying the result //

        let divTag = $("<div>").appendTo($("#productsContainer"));
        let productImage = $("<img>").appendTo(divTag).addClass("productImage")
            .attr("src", product.image).attr("alt", product.name + " perfume bottle");

        let productName = $("<h4>").appendTo(divTag).html(product.name);
        let productPrice = $("<h5>").appendTo(divTag).html(product.price + " kr");
        let productDescription = $("<p>").appendTo(divTag).html(product.description);


        // Adding a click function for every product image //

        productImage.on("click", function() {

            // Creating new object of the product clicked on //

            let addedItem = new Product(product.image, product.name, product.price, product.description, product.id, product.quantity);

            // Creating a new array for the items added to shopping bag //

            let bag = [];

            // Add the new object to the shopping bag array //

            bag.push(addedItem);

            // Add the shopping bag items to local storage //

            localStorage.setItem("products", JSON.stringify(bag));


            // Get the shopping bag items from local storage and convert them to array again //

            let productFromLS = localStorage.getItem("products");
            let lsList = JSON.parse(productFromLS);



            // Run loop of that array //

            $.each(lsList, (i, product) => {
                console.log(lsList);

                // Create html displaying the result //

                let shoppingBag = $("#shoppingBag");

                $("<p>").appendTo(shoppingBag).html(product.name + ", " + product.price + "kr");
            });


        });



    });





})