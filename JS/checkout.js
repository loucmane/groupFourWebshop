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

let bag = [];

let custInfo = [];

// Save shopping cart in LS
function saveBag() {
    localStorage.setItem("products", JSON.stringify(bag));
}

// Get shopping cart from LS
function getBag() {
    bag = JSON.parse(localStorage.getItem("products"));
}

// Save customer information in LS
function saveCustInfo() {
    localStorage.setItem("Information", JSON.stringify(custInfo));
}

// Get customer information from LS
function getCustInfo() {
    custInfo = JSON.parse(localStorage.getItem("Information"));
}

$(function() {

    $("#btnReviewOrder")
        .on("click", function() {
            $("<p>").appendTo($("#transferredCustPayment"))
                .html("Contact" +
                    " " +
                    $("#email").val());

            $("<hr>")
                .appendTo($("#transferredCustPayment"));

            $("<p>")
                .appendTo($("#transferredCustPayment"))
                .html("Ship to " +
                    $("#fName").val() +
                    " " +
                    $("#lName").val() +
                    ", " +
                    $("#adrStreet").val() +
                    ", " +
                    $("#adrPCode").val() +
                    " " +
                    $("#adrCity").val() +
                    ", " +
                    $("#adrCountry").val());

            $("<hr>")
                .appendTo($("#transferredCustPayment"));

            $("<p>")
                .appendTo($("#transferredCustPayment"))
                .html("Shipping Postnord 59 SEK");

            $("<p>")
                .appendTo($("#transferredCustPayment"))
                .html("Payment Nets Payment");

            $("<button>")
                .appendTo($("#transferredCustPayment"))
                .html("Change")
                .on("click", function() {});

            $("<p>")
                .appendTo($("#checkoutTotal"))
                .html("Subtotal " +
                    costfromLS() +
                    " SEK");

            $("<p>")
                .appendTo($("#checkoutTotal"))
                .html("Shipping 59 SEK");

            $("<hr>")
                .appendTo($("#checkoutTotal"));

            $("<p>")
                .appendTo($("#checkoutTotal"))
                .addClass("total")
                .html("Total " +
                    grandTotal() +
                    " SEK");


        });

    $("#completeButton")
        .on("click", function() {

            window.location.href = "../HTML/confirmation.html";
        });


});

function costfromLS(params) {
    subtotal = 100 + 100;
    return subtotal;
}

function grandTotal(params) {
    total = costfromLS() + 59;
    return total;
}