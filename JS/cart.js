$(function() {

    $( ".hamburgerButton" ).click(function() {
        $( " .myUl " ).slideToggle();
        $( ".myUl" ).css({
            display: "flex"
        })
        console.log(("klick"));
        });

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

renderCart();


});

function saveBag() {
    localStorage.setItem("products", JSON.stringify(bag));
}

// Get shopping bag from LS
function getBag() {
    bag = JSON.parse(localStorage.getItem("products"));
}

function renderCart() {

    getBag();
    console.log(bag)

    $("#shoppingBag").html("");

    $.each(bag, (i, product) => {

       let tableRow = $("<tr>")
        .appendTo("table")

        $("<td>")
        .html(product.image)
        .appendTo(tableRow)

        $("<td>")
        .html(product.price)
        .appendTo(tableRow)

        $("<td>")
        .html(product.quantity)
        .appendTo(tableRow)

        $("<td>")
        .html(product.price * product.quantity)
        .appendTo(tableRow)

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


}

// CALCULATE TOTAL //
function calculateTotal() {
    let total = 0;
    for (let i = 0; i < bag.length; i++) {
        total = total + (bag[i].quantity * bag[i].price);

    }
    return total;

}