$(function() {

    class Product {
        constructor(image, name, price, description, id) {
            this.image = image;
            this.name = name;
            this.price = price;
            this.description = description;
            this.id = id;
        }
    }

    let description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias natus perferendis inventore debitis, facere amet incidunt asperiores optio. At est quia maxime. Doloribus autem sit aliquam perspiciatis repellendus nisi.";

    let product1 = new Product("../IMG/perfume-bottle-bergamot.jpg", "Bergamot", 850, description, 1);
    let product2 = new Product("../IMG/perfume-bottle-iris.jpg", "Iris", 850, description, 2);
    let product3 = new Product("../IMG/perfume-bottle-saffron.jpg", "Saffron", 850, description, 3);
    let product4 = new Product("../IMG/perfume-bottle-sandalwood.jpg", "Sandalwood", 850, description, 4);
    let product5 = new Product("../IMG/perfume-bottle-ginger.jpg", "Ginger", 850, description, 5);



    let myProducts = [product1, product2, product3, product4, product5];



    $.each(myProducts, (i, product) => {

        console.log(product);
        let divTag = $("<div>").appendTo($("#productsContainer"));
        let productImage = $("<img>").appendTo(divTag).addClass("productImage");
        let productName = $("<h4>").appendTo(divTag);
        let productPrice = $("<h5>").appendTo(divTag);
        let productDescription = $("<p>").appendTo(divTag);

        productImage.attr("src", product.image);
        productImage.attr("alt", product.name + " perfume bottle");
        productName.html(product.name);
        productPrice.html(product.price + " kr");
        productDescription.html(product.description);

        productImage.on("click", function() {
            localStorage.setItem("product", JSON.stringify(product));

            let productFromLS = localStorage.getItem("product");
            let productAsObject = JSON.parse(productFromLS);
            console.log(productAsObject);


            let shoppingBag = $("#shoppingBag");
            $("<p>").appendTo(shoppingBag).html(productAsObject.name + ", " + productAsObject.price + "kr");




        });



    });












})