$(function() {
    renderOrderSummary();

    //Link to checkoutpage
    $("#continueShopping")
        .on("click", function() {

            window.location.href = "../HTML/products.html";
        });
});

function renderOrderSummary() {

    let orderSummary = $("#orderSummary");

    for (let i = 0; i < custInfo.length; i++) {

        orderSummary.html("");

        $("<h4>")
            .html("Your Order Details")
            .appendTo(orderSummary);

        $("<hr>")
            .appendTo(orderSummary)

        let pContainer =  $("<div>")
            .addClass("pContainer")
            .appendTo(orderSummary)

        $("<p>")
            .html("Name: " + custInfo[i].fName + " " + custInfo[i].lName)
            .appendTo(pContainer);

        $("<p>")
            .html("Email: " + custInfo[i].email)
            .appendTo(pContainer);

        $("<p>").html("Phone: " + custInfo[i].phone)
            .appendTo(pContainer);

        $("<p>")
            .html("Address: " + custInfo[i].street + ", " + custInfo[i].postal + " " + custInfo[i].city + ", " + custInfo[i].country)
            .appendTo(pContainer);

        $("<hr>")
            .appendTo(orderSummary);

        $("<p>")
            .attr("id", "orderNumber")
            .html("Order Number: " + custInfo[i].orderNumber)
            .appendTo(orderSummary);

        if (calculateTotal() < 5000) {
            $("<p>")
                .html("Shipping: " + custInfo[i].shipping + " SEK")
                .appendTo(orderSummary);
        } else {
            $("<p>")
                .html("Shipping: FREE!")
                .appendTo(orderSummary)
        }

        $("<p>")
            .html(custInfo[i].date)
            .appendTo(orderSummary);

        $("<p>")
            .appendTo(orderSummary)
            .html("Nets Payment");

    }

    $("<hr>")
        .appendTo(orderSummary);

    $("<h4>")
        .html("Your Products")
        .appendTo(orderSummary);

    let productDivContainer = $("<div>")
        .attr("id", "productDivContainer")
        .appendTo(orderSummary)

    //ADD IMAGES TO ORDER SUMMARY
    for (let i = 0; i < bag.length; i++) {

        let productDiv = $("<div>")
            .addClass("productDiv")
            .appendTo(productDivContainer);

        $("<img>")
            .attr("src", bag[i].product.image)
            .attr("alt", bag[i].product.name + " perfume bottle")
            .appendTo(productDiv);

        $("<p>")
            .html(bag[i].product.name + "<br>" + bag[i].product.price + " SEK " + "<br>" + bag[i].quantity + "pc(s)")
            .appendTo(productDiv);
    }

    //ADD COST + GRAND TOTAL TO ORDER SUMMARY
    for (let i = 0; i < custInfo.length; i++) {

        $("<hr>")
            .appendTo(orderSummary);

        if (calculateTotal() < 5000) {
            $("<h4>")
                .appendTo(orderSummary)
                .addClass("total")
                .html("Total Cost: " + (calculateTotal() + parseInt(custInfo[i].shipping)) + " SEK");
        } else {
            $("<h4>")
                .appendTo(orderSummary)
                .addClass("total")
                .html("Total " + calculateTotal() + " SEK");
        }
    }

    $("<p>")
        .html("(VAT included)")
        .appendTo(orderSummary)

        localStorage.clear();
        cartNumbers();
    }


