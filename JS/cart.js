let bag = [];

$(function() {

    renderCart();
});

function saveBag() {
    localStorage.setItem("products", JSON.stringify(bag));
}

function getBag() {
    let productsFromLS = localStorage.getItem("products")

    if (productsFromLS) { //Only get bag from LS if it has content
        bag = JSON.parse(localStorage.getItem("products"));
    }
    
}

$( "<h1>" )
.html ( "LOGOTYPE" )
.appendTo("main")

function renderCart() {

    getBag();

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

        //Product decrease button
        $("<button>")
        .attr("type", "button")
        .addClass("qtyBtn")
        .html("&#8722")
        .on("click", function() {
    
            for (let i = 0; i < bag.length; i++) {
                if (bag[i].id === product.id) {
                    bag[i].quantity--;

                    if (bag[i].quantity === 0) { 
                        bag.splice([i], 1);
                    }
                saveBag();
                renderCart();
                }
            }
        })
        .appendTo(productContainer);

        //Product container
        let productSpan = $("<span>")
        .addClass("productSpan")
        .appendTo(productContainer)

        //Product image
        $("<img>")
        .attr("src", product.image)
        .attr("alt", product.name + " perfume bottle")
        .appendTo(productSpan)

        //Product Name
        $("<p>")
        .html(product.name)
        .appendTo(productSpan)

        //Remove button
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
     
        //Product increase button
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

        $("<td>")
        .addClass("phoneDescription")
        .html(product.name + "<br>" + "(x" + product.quantity+")")
        .appendTo(tableRow);

        $("<td>")
        .addClass("ghostTd")
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
        .html("quantity:")
        .appendTo(dropDownRow)

        let phoneInputTd = $("<td>")
        .appendTo(dropDownRow)

        let qtyInput = $("<input>")
        .attr("type", "number")
        .appendTo(phoneInputTd)

        let phoneTd4 = $("<td>")
        .appendTo(dropDownRow)

        //Update input:number
        $("<button>")
        .attr("type", "button")
        .addClass("phoneUpdateBtn")
        .html("Update")
        .on("click", function() {
    
            for (let i = 0; i < bag.length; i++) {
                console.log(bag[i].quantity)
                if (bag[i].id === product.id) {
                    bag[i].quantity = parseInt(qtyInput.val());
                    saveBag();
                    renderCart();
                }
            }
        })
        .appendTo(phoneTd4);
    });

    //Footer Card
    $("<div>")
    .addClass("tableSum")
    .appendTo(".tableContainer");

    //Hidden Phone button
    $("<button>")
    .attr("id", "editBtn")
    .attr("type", "button")
    .html("<i class='far fa-edit'></i>" + " Edit Cart")
    .on("click", function() {
        $(".phoneRow").toggle();
    })
    .appendTo(".tableSum");

    $("<span>")
    .html("<b>Subtotal:</b> " + calculateTotal() + " SEK")
    .appendTo(".tableSum");

    $("<span>")
    .html("<i>shipping & taxes calculated at checkout</i>")
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