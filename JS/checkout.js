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

            let container1 = $("#checkoutOrderInfo");

            for (let i = 0; i < custInfo.length; i++) {

                container1.html("");

                $("<h4>")
                    .html("Your order information")
                    .appendTo(container1);

                $("<p>")
                    .html("Name: " + custInfo[i].fName + " " + custInfo[i].lName)
                    .appendTo(container1);

                $("<p>")
                    .html("Email: " + custInfo[i].email)
                    .appendTo(container1);

                $("<p>").html("Phone: " + custInfo[i].phone)
                    .appendTo(container1);


                $("<p>")
                    .html("Address: " + custInfo[i].street + ", " + custInfo[i].postal + " " + custInfo[i].city + ", " + custInfo[i].country)
                    .appendTo(container1);

                $("<hr>")
                    .appendTo(container1);

                $("<p>")
                    .html("Shipping: " + "XXX " + custInfo[i].shipping + " SEK")
                    .appendTo(container1);


            }



            $("<hr>")
                .appendTo(container1);

            $("<p>")
                .appendTo(container1)
                .html("Payment: Nets Payment");

            $("<button>")
                .appendTo(container1)
                .html("Change")
                .on("click", function() {
                    window.location.href = "#information";
                });





            let container2 = $("#checkoutTotal");

            for (let i = 0; i < bag.length; i++) {

                container2.html("");

                $("<h4>")
                    .html("Your Products")
                    .appendTo(container2);

                //Product container
                let productDiv = $("<div>")
                    .addClass("productDiv")
                    .appendTo(container2);

                //Product image
                $("<img>")
                    .attr("src", bag[i].product.image)
                    .attr("alt", bag[i].product.name + " perfume bottle")
                    .appendTo(productDiv);

                //Product Name, Quantity, Price
                $("<p>")
                    .html(bag[i].product.name + " " + bag[i].quantity + " pcs " + bag[i].product.price + " SEK")
                    .appendTo(productDiv);

            }

            for (let i = 0; i < custInfo.length; i++) {

                // CALCULATE TOTAL //
                function costFromLS() {
                    let subTotal = 0;
                    for (let i = 0; i < bag.length; i++) {
                        subTotal = subTotal + (bag[i].quantity * bag[i].product.price);
                    }
                    return subTotal;
                };

                $("<p>")
                    .appendTo(container2)
                    .html("Subtotal " + costFromLS() + " SEK");

                // let shippingCost = custInfo[i].shipping;

                $("<p>")
                    .appendTo(container2)
                    .html("Shipping " + custInfo[i].shipping + " SEK");

                $("<hr>")
                    .appendTo(container2);



                function grandTotal() {
                    let grandTotal = 0;
                    for (let i = 0; i < custInfo.length; i++) {

                        grandTotal = grandTotal + (costFromLS() + custInfo[i].shipping);
                    }

                    return grandTotal;
                };

                $("<p>")
                    .appendTo(container2)
                    .addClass("total")
                    .html("Total " + grandTotal() + " SEK");
            }

            window.location.href = "#review";
        });

    $("#completeButton")
        .on("click", function() {

            window.location.href = "../HTML/confirmation.html";
        });
});

// function costfromLS(params) {
//     subTotal =  + 100;
//     return subTotal;
// }