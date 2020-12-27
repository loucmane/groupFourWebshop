$(function() {

    getFromLocalStorage();


    $.each(myProducts, (i, product) => { // Looping the objects and creating html from them //

        let divTag = $("<div>")
            .appendTo($("#productsContainer"))
            .addClass("eachProduct");

        $("<img>").appendTo(divTag)
            .addClass("productImage")
            .attr("src", product.image)
            .attr("alt", product.name + " perfume bottle")
            .attr("id", product.id);


        let textLeft = $("<div>").appendTo(divTag);

        $("<p>").appendTo(textLeft)
            .html(product.name);

        $("<p>").appendTo(textLeft)
            .html(product.price + " SEK");

        $("<button>").appendTo(divTag)
            .addClass("addCartBtn")
            .attr("type", "button")
            .html("Add to bag")
            .on("click", { product: product }, function() {

                let foundProduct = false;

                for (let i = 0; i < bag.length; i++) {
                    if (bag[i].product.id === product.id) {
                        foundProduct = true;
                        bag[i].quantity++;
                    }
                }

                if (foundProduct === false) {
                    let addedItem = new CartItem(product, 1);
                    bag.push(addedItem);
                }

                setToLocalStorage();

                cartNumbers();
            });
    });

    $("<div>")
    .attr("id", "cartBtnContainer")
    .appendTo("#productsContainer")

    $("<button>")
    .attr("id", "goCartBtn")
    .html("<i class='fas fa-shopping-cart'></i> " + "Go to Shopping Cart")
    .on ("click", function(){
        window.location.href = "../HTML/cart.html";
      })
    .appendTo("#cartBtnContainer")
});
