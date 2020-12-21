let bag = [];

$(function() {

    $( ".hamburgerButton" )
    .click(function() {
        $( " .myUl " ).slideToggle();
        $( ".myUl" ).css({
            display: "flex"
        })
    });

    renderCart();
});

function saveBag() {
    localStorage.setItem("products", JSON.stringify(bag));
}

function getBag() {
    bag = JSON.parse(localStorage.getItem("products"));
}

function renderCart() {

    if (localStorage.getItem("products") != null) { //Only get bag from LS if it has content
        getBag();
    }

    $(".tableContainer")
    .remove();

    $("<div>")
    .addClass("tableContainer")
    .appendTo($("main"));

    $("<table>")
    .appendTo(".tableContainer");

    let tableHeads = $("<tr>")
    .appendTo("table");

    $("<th>")
    .html("<u>Product</u>")
    .appendTo(tableHeads);

    $("<th>")
    .html("<u>Price</u>")
    .appendTo(tableHeads);

    $("<th>")
    .html("<u>Quantity</u>")
    .appendTo(tableHeads);

    $("<th>")
    .html("<u>Total</u>")
    .appendTo(tableHeads);

    $.each(bag, (i, product) => {

        let tableRow = $("<tr>")
        .appendTo("table")

        let dropDownRow = $("<tr>")
        .addClass("phoneRow")
        .appendTo("table")

        let productContainer = $("<div>")
        .addClass("productContainer")
        .appendTo(tableRow)

        $("<button>")
        .attr("type", "button")
        .addClass("qtyBtn")
        .html("&#8722")
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
        })
        .appendTo(productContainer);

        let productSpan = $("<span>")
        .addClass("productSpan")
        .appendTo(productContainer)

        $("<img>")
        .attr("src", product.image)
        .attr("alt", product.name + " perfume bottle")
        .appendTo(productSpan)

        $("<p>")
        .html(product.name)
        .appendTo(productSpan)
     
         $("<button>")
        .attr("type", "button")
        .addClass("qtyBtn")
        .html("&#43;")
        .on("click", function() {
            for (let i = 0; i < bag.length; i++) {
                if (bag[i].id === product.id) {
                    product.quantity++;
                    saveBag();
                    renderCart();
                }
            }
        })
        .appendTo(productContainer);

        $("<button>")
        .attr("type", "button")
        .html("Remove")
        .on("click", function() {
    
            for (let i = 0; i < bag.length; i++) {
                if (bag[i].id === product.id) {
                    bag.splice([i], 1);
                    saveBag();
                    renderCart();
                }
            }
        })
        .appendTo(productSpan)

        $("<td>")
        .addClass("tdDesc")
        .attr("type", "number")
        .html(product.name + "<br>" + "(x" + product.quantity+")")
        .appendTo(tableRow);

        $("<td>")
        .appendTo(tableRow)

        $("<td>")
        .addClass("tdPrice")
        .html(product.price + " SEK")
        .appendTo(tableRow)

        $("<td>")
        .addClass("tdQty")
        .html(product.quantity + "pc")
        .appendTo(tableRow)

        $("<td>")
        .addClass("tdTotal")
        .html(product.price * product.quantity + " SEK")
        .appendTo(tableRow)
        
        let phoneTd1 = $("<td>")
        .appendTo(dropDownRow)

        $("<button>")
        .attr("type", "button")
        .attr("id", "phoneRemoveBtn")
        .html("Remove")
        .on("click", function() {
    
            for (let i = 0; i < bag.length; i++) {
                if (bag[i].id === product.id) {
                    bag.splice([i], 1);
                    saveBag();
                    renderCart();
                }
            }
        })
        .appendTo(phoneTd1);

        $("<td>")
        //.addClass("tdQty")
        .html("quantity:")
        .appendTo(dropDownRow)

        let phoneInputTd = $("<td>")
        .appendTo(dropDownRow)

        $("<input>")
        .attr("type", "number")
        .attr()
        .appendTo(phoneInputTd)

        let phoneTd4 = $("<td>")
        .appendTo(dropDownRow)

        $("<button>")
        .attr("type", "button")
        .attr("id", "phoneUpdateBtn")
        .html("Update")
        .on("click", function() {
    
            for (let i = 0; i < bag.length; i++) {
                if (bag[i].id === product.id) {
                    bag.splice([i], 1);
                    saveBag();
                    renderCart();
                }
            }
        })
        .appendTo(phoneTd4);
    });

    $("<div>")
    .addClass("tableSum")
    .appendTo(".tableContainer");

    $("<button>")
    .attr("id", "editBtn")
    .attr("type", "button")
    .html("<i class='far fa-edit'></i>" + " Edit Cart")
    .on("click", function() {
        $(".phoneRow").toggle();
    })
    .appendTo(".tableSum");

    $("<span>")
    .html("<b>subtotal:</b> " + calculateTotal() + " SEK")
    .appendTo(".tableSum");

    $("<span>")
    .html("shipping & taxes calculated at checkout")
    .appendTo(".tableSum");

    //Link to checkoutpage
    $("<button>")
    .attr("type", "button")
    .attr("id", "checkoutBtn")
    .html("CHECKOUT")
    .on("click", function(){
        window.location.href = "../HTML/checkout.html";
    })
    .appendTo(".tableSum")

    $("<p>")
    .html("need something else?")
    .appendTo(" .tablesum ")

    //Link to products page
    $("<button>")
    .attr("type", "button")
    .attr("id", "shopBtn")
    .html("Continue Shopping")
    .on("click", function(){
        window.location.href = "../HTML/products.html";
    })
    .appendTo(".tableSum")
}

// CALCULATE TOTAL //
function calculateTotal() {
    let total = 0;
    for (let i = 0; i < bag.length; i++) {
        total = total + (bag[i].quantity * bag[i].price);
    }
    return total;
};