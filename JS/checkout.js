$(function() {
    renderInfoSection();
    renderShippingSection();
    renderPaymentSection();
    renderReviewSection()
    buttonFunctions();
    $( "#review" ).hide()
});

function renderInfoSection() {

    let infoSection = $("<section>")
    .attr("id", "information")
    .appendTo("main");

    //renderNavButtons();

    let contactForm = $("<form>")
    .attr("id", "contactForm")
    .appendTo(infoSection)

    $("<h2>")
    .html("Contact Information")
    .appendTo(contactForm)

    $("<input>")
        .attr("type", "email")
        .attr("placeholder", "Email Address")
        .attr("id", "email")
        .attr("name", "email")
        .appendTo(contactForm)

    let newsLetter = $("<div>")
    .addClass("checkBox")
    .appendTo(contactForm)

    $("<input>")
    .attr("type", "checkbox")
    .appendTo(newsLetter)

    $("<label>")
    .html("Subscribe to newsletter")
    .appendTo(newsLetter)

    $("<h2>")
    .html("Shipping Address")
    .appendTo(contactForm)

    $("<input>")
    .attr("type", "text")
    .attr("placeholder", "First Name")
    .attr("id", "fName")
    .attr("name", "fName")
    .appendTo(contactForm)

    $("<input>")
    .attr("type", "text")
    .attr("placeholder", "Last Name")
    .attr("id", "lName")
    .attr("name", "lName")
    .appendTo(contactForm)

    $("<input>")
    .attr("type", "text")
    .attr("placeholder", "Street Name, Street Number")
    .attr("id", "adrStreet")
    .attr("name", "adrStreet")
    .appendTo(contactForm)

    $("<input>")
    .attr("type", "number")
    .attr("placeholder", "Postal Code")
    .attr("id", "adrPCode")
    .attr("name", "adrPCode")
    .appendTo(contactForm)

    $("<input>")
    .attr("type", "text")
    .attr("placeholder", "City / Town")
    .attr("id", "adrCity")
    .attr("name", "adrCity")
    .appendTo(contactForm)

    $("<input>")
    .attr("type", "text")
    .attr("placeholder", "Country / Region")
    .attr("id", "adrCountry")
    .attr("name", "adrCountry")
    .appendTo(contactForm)

    $("<input>")
    .attr("type", "tel")
    .attr("placeholder", "Movile Phone Number")
    .attr("id", "adrPhone")
    .attr("name", "adrPhone")
    .appendTo(contactForm)

    let saveInfo = $("<div>")
    .addClass("checkBox")
    .appendTo(contactForm)

    $("<input>")
    .attr("type", "checkbox")
    .appendTo(saveInfo)

    $("<label>")
    .html("Save Information")
    .appendTo(saveInfo)

    $("<button>")
    .addClass("continueButton")
    .attr("id", "btnToShipping")
    .html("Continue to shipping")
    .appendTo(contactForm)

    $("<hr>")
    .appendTo(infoSection)

}

function renderShippingSection() {
    

    let shippingSection = $("<section>")
    .attr("id", "shipping")
    .appendTo("main");
    
    let radioForm = $("<form>")
    .attr("id", "radioForm")
    .appendTo(shippingSection)

    $("<h2>")
    .html("Shipping Method")
    .appendTo(radioForm)

    let postNord = {price: 59, text:'PostNord', id:'postNord'}
    let DHL = {price: 159, text:'Express DHL', id:'DHL'}

    let radioButtons = [postNord, DHL]

    for (let i = 0; i < radioButtons.length; i++) {
        
        $("<input>")
        .attr("type", "radio")
        .attr("name", "shipping")
        .attr("value", radioButtons[i].price)
        .appendTo(radioForm)

        $("<label>")
        .attr("id", radioButtons[i].id)
        .html("Shipping:" + radioButtons[i].text + " " + radioButtons[i].price + " SEK" + "<br>")
        .appendTo(radioForm)
    }

    let aTag = $("<a>")
    .attr("href", "#information")
    .appendTo(shippingSection)

    $("<button>")
    .addClass("returnButton")
    .html("&lt; Return to information")
    .appendTo(aTag)

    $("<button>")
    .addClass("continueButton")
    .attr("id", "btnToPayment")
    .html("Continue to payment")
    .appendTo(shippingSection)

    $("<hr>")
    .appendTo(shippingSection)
}

function renderPaymentSection() {
    let paymentSection = $("<section>")
    .attr("id", "payment")
    .appendTo("main");
    

    $("<h2>")
    .html("Payment")
    .appendTo(paymentSection)

    $("<p>")
    .html("All transactions are secure and encrypted.")
    .appendTo(paymentSection)

    let infoBox = $("<div>")
    .attr("id", "paymentInfoBox")
    .appendTo(paymentSection)

    $("<p>")
    .html("After clicking “Review order”, you will be redirected to Nets Payment to complete your purchase securely.")
    .appendTo(infoBox)

    $("<img>")
    .attr("src", "../IMG/mastercard-icon.png")
    .attr("alt", "Mastercard Icon")
    .appendTo(infoBox)

    let aTag = $("<a>")
    .attr("href", "#shipping")
    .appendTo(paymentSection)

    $("<button>")
    .addClass("returnButton")
    .html("&lt; Return to shipping")
    .appendTo(aTag)

    $("<button>")
    .addClass("continueButton")
    .attr("id", "btnReviewOrder")
    .html("Review Order")
    .appendTo(paymentSection)

    $("<p>")
    .html("You won't be charged yet!")
    .appendTo(paymentSection)

    $("<hr>")
    .appendTo(paymentSection)
}

function renderReviewSection() {

    let reviewSection = $("<section>")
    .attr("id", "review")
    .appendTo("main");

    $("<h2>")
    .html("Review Order")
    .appendTo(reviewSection)

    $("<div>")
    .attr("id", "checkoutOrderInfo")
    .appendTo(reviewSection)

    $("<div>")
    .attr("id", "checkoutTotal")
    .appendTo(reviewSection)

    $("<button>")
    .attr("id", "completeButton")
    .html("Complete Order")
    .appendTo(reviewSection)

    $("<hr>")
    .appendTo(reviewSection)

}
// function renderNavButtons() {

//     let navButton = $("<div>")
//     .addClass("navButtons")

//     $("<a>")
//     .attr("#")
//     .html("Cart >")
//     .appendTo(navButton)

//     $("<a>")
//     .attr("#information")
//     .html("Information >")
//     .appendTo(navButton)

//     $("<a>")
//     .attr("#shipping")
//     .html("Shipping >")
//     .appendTo(navButton)

//     $("<a>")
//     .attr("#payment")
//     .html("Payment >")
//     .appendTo(navButton)

//     $("<a>")
//     .attr("#review")
//     .html("Payment")
//     .appendTo(navButton)

// }

function buttonFunctions() {
    
    $(document).ready(function() {
        $("#btnToShipping")
        .on("click", function() {
            validateForm();
        });

        window.location.href = "#shipping";
    });

    $("#btnToPayment")
    .on("click", function() {
        window.location.href = "#payment";
    });

    
    $("#btnReviewOrder")
    .on("click", function() {

        $( "#review" ).toggle();
        $( "#review" ).css({
            display: "flex"
        })

        getOrderInfo();
        renderOrderInfo();
        renderOrderSummary();

        window.location.href = "#review";
    });  

    $(document).ready(function() {
        $("#completeButton")
        .on("click", function() {
            window.setTimeout(completeOrder, 2000)
    
            $("body").addClass("loading");

            $( ".loadingBar" ).slideToggle();
            $( ".loadingBar" ).css({
                display: "block"
            });
        });
    });
};

function validateForm() {
    $("#contactForm").validate({
        rules: {
            email: 'required',
            fName: 'required',
            lName: 'required',
            adrStreet: 'required',
            adrPCode: 'required',
            adrCity: 'required',
            adrPhone: 'required'
        },
        messages: {
            email : "",
            fName: "",
            lName: "",
            adrStreet: "",
            adrPCode: "",
            adrCity: "",
            adrPhone: ""
        }
    });
}

function completeOrder() {
    validateForm();
    // window.location.href = "../HTML/confirmation.html";
    window.open("../HTML/confirmation.html")
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
    let shipping = parseInt($("[name='shipping']:checked").val());
    let date = new Date().toUTCString();
    let orderNumber = 1 + Math.floor(Math.random() * 1000000);


    let order = new CustomerInfo(email, fName, lName, street, postal, city, country, phone, shipping, date, orderNumber);

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

        if(calculateTotal()<5000){
        $("<p>")
        .html("Shipping: " + custInfo[i].shipping + " SEK")
        .appendTo(orderInfo);
        } else {
            $("<p>")
            .html("Shipping: FREE!")
            .appendTo(orderInfo)
        }
        

        $("<p>")
        .html("Order Number: " + custInfo[i].orderNumber)
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

        if(calculateTotal()<5000){
        $("<p>")
        .appendTo(orderSummary)
        .html("Shipping " + custInfo[i].shipping + " SEK");
        } else {
            $("<p>")
            .appendTo(orderSummary)
            .html("Shipping FREE!");
        }

        $("<hr>")
        .appendTo(orderSummary);
            if(calculateTotal()<5000) {
            $("<p>")
            .appendTo(orderSummary)
            .addClass("total")
            .html("Total " + (calculateTotal() + parseInt(custInfo[i].shipping)) + " SEK");
            } else {
                $("<p>")
            .appendTo(orderSummary)
            .addClass("total")
            .html("Total " + calculateTotal() + " SEK");
            }
    }

    $("<p>")
        .appendTo(orderSummary)
        .html("Need to add more products?");

    $("<button>")
        .appendTo(orderSummary)
        .html("Back to cart")
        .on("click", function() {
            window.location.href = "../HTML/cart.html";
        });
}