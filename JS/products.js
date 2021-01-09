$(function() {

    $.each(myProducts, (i, product) => { 

        let divTag = $("<div>")
            .addClass("eachProduct")
            .appendTo($("#productsContainer"));

        $("<img>").appendTo(divTag)
            .addClass("productImage")
            .attr("src", product.image)
            .attr("alt", product.name + " perfume bottle")
            .attr("id", product.id);

        let descDiv = $("<div>")
        .addClass("descDiv")
        .appendTo(divTag);

        $("<p>").appendTo(descDiv)
            .html(product.name + "<br>" + product.price + " SEK");

        $("<button>").appendTo(descDiv)
            .addClass("addCartBtn")
            .attr("type", "button")
            .html("<i class='fas fa-cart-plus'></i>")
            .on("click", { product: product }, function() {

                let foundProduct = false;

                for (let i = 0; i < cart.length; i++) {
                    if (cart[i].product.id === product.id) {
                        foundProduct = true;
                        cart[i].quantity++;
                    }
                }

                if (foundProduct === false) {
                    let addedItem = new CartItem(product, 1);
                    cart.push(addedItem);
                }

                //MAIN.JS
                setToLocalStorage();

                //NAVBAR.JS
                cartNumbers();
            });
    });

    $("<div>")
        .attr("id", "cartBtnContainer")
        .appendTo("#productsContainer")

    $("<button>")
        .attr("id", "goCartBtn")
        .html("<i class='fas fa-shopping-cart'></i> " + "Go to Shopping Cart")
        .on("click", function() {
            window.location.href = "../HTML/cart.html";
        })
        .appendTo("#cartBtnContainer")
});