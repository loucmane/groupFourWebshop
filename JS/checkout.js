$(function() {
    buttonFunctions();
    $( "#review" ).hide()

});

function buttonFunctions() {

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

        $( " #review " ).toggle();
        $( " #review " ).css({
            display: "flex"
        })

        getOrderInfo();
        renderOrderInfo();
        renderOrderSummary();

        window.location.href = "#review";
    });

    $("#completeButton")
    .on("click", function() {
        window.location.href = "../HTML/confirmation.html";
    });
} 

function getOrderInfo() {

    let email = $("#email").val();
            let fName = $("#fName").val();
            let lName = $("#lName").val();
            let street = $("#adrStreet").val();
            let postal = $("#adrPCode").val();
            let city = $("#adrCity").val();
            let country = $("#adrCountry").val();
            let phone = $("#adrPhone").val();
            let shipping = $("[name='shipping']:checked").text() + parseInt($("[name='shipping']:checked").val());

            let order = new CustomerInfo(email, fName, lName, street, postal, city, country, phone, shipping);

            custInfo = [];
            custInfo.push(order);
            setToLocalStorage();

}

function renderOrderInfo() {

    let orderInfo = $("#checkoutOrderInfo");

    for (let i = 0; i < custInfo.length; i++) {

        orderInfo.html("");

        $("<h4>")
        .html("Your order information")
        .appendTo(orderInfo);

        let pContainer = $("<div>")
        .addClass("pContainer")
        .appendTo(orderInfo) 

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
        .appendTo(orderInfo);

        $("<p>")
        .html("Shipping: " + custInfo[i].shipping + " SEK")
        .appendTo(orderInfo);
        }

    $("<hr>")
        .appendTo(orderInfo);

    $("<p>")
        .appendTo(orderInfo)
        .html("Payment: Nets Payment");

    $("<button>")
    .appendTo(orderInfo)
    .html("Change")
    .on("click", function() {
        window.location.href = "#information";
    });
}

function renderOrderSummary() {

    let orderSummary = $("#checkoutTotal");
    orderSummary.html("");

    let productDivContainer = $("<div>")
    .attr("id", "productDivContainer")
    .appendTo(orderSummary)

    $("<h4>")
    .html("Your Products")
    .appendTo(orderSummary);

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
        .html(bag[i].product.name + "<br>" + bag[i].product.price + " SEK " + "<br>" + bag[i].quantity + "pc(s)" )
        .appendTo(productDiv);
    }

    //ADD COST + GRAND TOTAL TO ORDER SUMMARY
    for (let i = 0; i < custInfo.length; i++) {

        $("<p>")
        .appendTo(orderSummary)
        .html("Subtotal " + calculateTotal() + " SEK");

        $("<p>")
        .appendTo(orderSummary)
        .html("Shipping " + custInfo[i].shipping + " SEK");

        $("<hr>")
        .appendTo(orderSummary);

        $("<p>")
        .appendTo(orderSummary)
        .addClass("total")
        .html("Total " + (calculateTotal() + parseInt(custInfo[i].shipping)) + " SEK");
    }
}