$(function() {

    $( ".hamburgerButton" ).click(function() {
        $( " .myUl " ).slideToggle();
        $( ".myUl" ).css({
            display: "flex"
        })
        console.log(("klick"));
        });

let bag = [];

renderCart();

});

function saveBag() {
    localStorage.setItem("products", JSON.stringify(bag));
}

function getBag() {
    bag = JSON.parse(localStorage.getItem("products"));
}

function renderCart() {

    getBag();

    $(".tableContainer")
    .remove();

    $("<div>")
    .addClass("tableContainer")
    .appendTo($("main"));

    $("<table>")
    .appendTo(".tableContainer");

    $("<tr>")
    .appendTo("table");

    $("<th>")
    .html("price")
    .appendTo("tr");

    $("<th>")
    .html("Quantity")
    .appendTo("tr");

    $("<th>")
    .html("Total")
    .appendTo("tr");

    $("<hr>")
    .appendTo("table")

    $.each(bag, (i, product) => {

        let tableRow = $("<tr>")
        .appendTo("table")

        let productContainer = $("<div>")
        .addClass("productContainer")
        .appendTo(tableRow)

        $("<img>")
        .attr("src", product.image)
        .attr("alt", product.name + " perfume bottle")
        .appendTo(productContainer)

        $("<p>")
        .html(product.name)
        .appendTo(productContainer)

        $("<td>")
        .html(product.price)
        .appendTo(tableRow)

        $("<td>")
        .html(product.quantity)
        .appendTo(tableRow)

        $("<td>")
        .html(product.price * product.quantity)
        .appendTo(tableRow)      

    });

    $("<p>")
    .appendTo(".tableContainer")
    .html("<b>subtotal:</b> " + calculateTotal() + " SEK");

    $("<p>")
    .appendTo(".tableContainer")
    .html("shipping & taxes calculated at checkout");

    $("<button>")
    .attr("type", "button")
    .html("Continue Shopping")
    .appendTo(".tableContainer")

    $("<button>")
    .attr("type", "button")
    .html("CHECKOUT")
    .appendTo(".tableContainer")

    renderQuantityButtons();

}

function renderQuantityButtons() {
    $.each(bag, (i, product) => {

        // DELETE FROM SHOPPING BAG //
        $("<button>").appendTo(".productContainer")
        .attr("type", "button")
        .html("x")
        .on("click", function() {
    
            for (let i = 0; i < bag.length; i++) {
                if (bag[i].id === product.id) {
                    bag.splice([i], 1);
                    saveBag();
                    renderCart();
                }
            }
        });
    
        $("<button>").appendTo(".productContainer")
            .attr("type", "button")
            .html("+")
            .on("click", function() {
                for (let i = 0; i < bag.length; i++) {
                    if (bag[i].id === product.id) {
                        product.quantity++;
                        saveBag();
                        renderCart();
                    }
    
                }
            });
    
        // DECREASE QUANTITY IN SHOPPING BAG //
        $("<button>").appendTo(".productContainer")
            .attr("type", "button")
            .html("-")
            .on("click", function() {
    
            for (let i = 0; i < bag.length; i++) { // Looping bag, if clicked object id is found in bag -> decrease quantity of that product
    
                if (bag[i].id === product.id) {
                    bag[i].quantity--;
                    if (bag[i].quantity === 0) { // If the quantity of the product becomes 0 -> splice that product from array
                        bag.splice([i], 1);
                    }
                    saveBag();
                    renderCart();
    
                }
            }
        });
    });
}

// CALCULATE TOTAL //
function calculateTotal() {
    let total = 0;
    for (let i = 0; i < bag.length; i++) {
        total = total + (bag[i].quantity * bag[i].price);

    }
    return total;

};