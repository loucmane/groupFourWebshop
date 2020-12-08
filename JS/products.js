$(function() {

    class Product {
        constructor(image, name, price, description) {
            this.image = image;
            this.name = name;
            this.price = price;
            this.description = description;
        }
    }

    let description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias natus perferendis inventore debitis, facere amet incidunt asperiores optio! At est quia maxime! Doloribus autem sit aliquam perspiciatis repellendus nisi! Ut?";

    let product1 = new Product("../IMG/perfume-bottle-bergamot.jpg", "Bergamot", 850, description);
    let product2 = new Product("../IMG/perfume-bottle-iris.jpg", "Iris", 850, description);
    let product3 = new Product("../IMG/perfume-bottle-saffron.jpg", "Saffron", 850, description);
    let product4 = new Product("../IMG/perfume-bottle-sandalwood.jpg", "Sandalwood", 850, description);
    let product5 = new Product("../IMG/perfume-bottle-ginger.jpg", "Ginger", 850, description);



    let myProducts = [product1, product2, product3, product4, product5];



    $.each(myProducts, (i, product) => {

        console.log(product);
        let divTag = $("<div>").appendTo($("#productsContainer"));
        let productImage = $("<img>").appendTo(divTag);
        let productName = $("<h4>").appendTo(divTag);
        let productPrice = $("<h5>").appendTo(divTag);
        let productDescription = $("<p>").appendTo(divTag);

        productImage.attr("src", product.image);
        productName.html(product.name);
        productPrice.html(product.price + " kr");
        productDescription.html(product.description);

    });
})