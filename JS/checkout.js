$(function() {

    $("#btnToShipping").one("click", function() {
        $("<p>").appendTo($("#transferredCustContact")).html("Contact" + " " + $("#email").val());
        $("<hr>").appendTo($("#transferredCustContact"));
        $("<p>").appendTo($("#transferredCustContact")).html("Ship to " + $("#fName").val() + " " + $("#lName").val() + ", " +
            $("#adrStreet").val() + ", " + $("#adrPCode").val() + " " + $("#adrCity").val() + ", " + $("#adrCountry").val());
        $("<button>").appendTo($("#transferredCustContact")).html("Change").on("click", function() {});
    });



    $("#btnToPayment").on("click", function() {
        $("<p>").appendTo($("#transferredCustShipping")).html("Contact" + " " + $("#email").val());
        $("<hr>").appendTo($("#transferredCustShipping"));
        $("<p>").appendTo($("#transferredCustShipping")).html("Ship to " + $("#fName").val() + " " + $("#lName").val() + ", " +
            $("#adrStreet").val() + ", " + $("#adrPCode").val() + " " + $("#adrCity").val() + ", " + $("#adrCountry").val());
        $("<hr>").appendTo($("#transferredCustShipping"));
        $("<p>").appendTo($("#transferredCustShipping")).html("Shipping Postnord 59 SEK");
    });

    $("#btnReviewOrder").on("click", function() {
        $("<p>").appendTo($("#transferredCustPayment")).html("Contact" + " " + $("#email").val());
        $("<hr>").appendTo($("#transferredCustPayment"));
        $("<p>").appendTo($("#transferredCustPayment")).html("Ship to " + $("#fName").val() + " " + $("#lName").val() + ", " +
            $("#adrStreet").val() + ", " + $("#adrPCode").val() + " " + $("#adrCity").val() + ", " + $("#adrCountry").val());
        $("<hr>").appendTo($("#transferredCustPayment"));
        $("<p>").appendTo($("#transferredCustPayment")).html("Shipping Postnord 59 SEK");
        $("<p>").appendTo($("#transferredCustPayment")).html("Payment Nets Payment");

        $("<p>").appendTo($("#checkoutTotal")).html("Subtotal " + costfromLS() + " SEK");
        $("<p>").appendTo($("#checkoutTotal")).html("Shipping 59 SEK");
        $("<hr>").appendTo($("#checkoutTotal"));
        $("<p>").appendTo($("#checkoutTotal")).html("Total " + grandTotal() + " SEK");
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


// Save shopping bag in LS
function saveInfo() {
    localStorage.setItem("info");
}

// Get shopping bag from LS
function getInfo() {
    localStorage.getItem("info");
}

