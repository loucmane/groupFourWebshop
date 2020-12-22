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
            //$("<p>").appendTo($("#checkoutOrderInfo"))
            // .html("Contact" +
            // " " +
            // $("#email").val());

            // $("<hr>")
            // .appendTo($("#checkoutOrderInfo"));

            // $("<p>")
            // .appendTo($("#checkoutOrderInfo"))
            // .html("Ship to " +
            // $("#fName").val() +
            // " " +
            // $("#lName").val() +
            // ", " +
            // $("#adrStreet").val() +
            // ", " +
            // $("#adrPCode").val() +
            // " " +
            // $("#adrCity").val() +
            // ", " +
            // $("#adrCountry").val());

            let email = $("#email").val();
            let fName = $("#fName").val();
            let lName = $("#lName").val();
            let street = $("#adrStreet").val();
            let postal = $("#adrPCode").val();
            let city = $("#adrCity").val();
            let country = $("#adrCountry").val();
            let phone = $("#adrPhone").val();
            let shipping = $("[name='shipping']:checked").val();

            let order = new CustomerInfo(email, fName, lName, street, postal, city, country, phone, shipping);

            custInfo = [];
            custInfo.push(order);
            setToLocalStorage();

            for (let i = 0; i < custInfo.length; i++) {

                console.log(custInfo[i].email);
                console.log(myProducts[i].image);
                
                let container = $("#checkoutOrderInfo");

                $("<h4>")
                .html("Your Order Information")
                .appendTo(container);

                $("<p>")
                .html(custInfo[i].fName)
                .appendTo(container);
                
            }

            $("<hr>")
            .appendTo($("#checkoutOrderInfo"));

            $("<p>")
            .appendTo($("#checkoutOrderInfo"))
            .html("Payment Nets Payment");

            $("<button>")
            .appendTo($("#checkoutOrderInfo"))
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
            .html("Total " + grandTotal() + " SEK");

            window.location.href = "#review";
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