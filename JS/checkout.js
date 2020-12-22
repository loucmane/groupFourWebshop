class CustomerInfo {
    constructor(email, firstName, lastName) {
        
    }
}

let bag = [];

let custInfo = [];

$(function() {

    $("#btnToShipping")
        .on("click", function() {
            window.location.href = "#shipping";
        });

    $("#btnToPayment")
        .on("click", function() {
            window.location.href = "#payment";
        });

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

            window.location.href = "#review";

            custInfo.push();
            saveBag();
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