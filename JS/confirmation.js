let bag = [];

function getBag() {
    let productsFromLS = localStorage.getItem("products")

    if (productsFromLS) { //Only get bag from LS if it has content
        bag = JSON.parse(localStorage.getItem("products"));
    }

}

$(function() {

    getBag();

    //Link to landing page
    $(".logotype")
        .on("click", function() {
            window.location.href = "../index.html";
        });

    //Link to checkoutpage
    $("button")
        .on("click", function() {
            localStorage.clear();
            window.location.href = "../HTML/products.html";
        });
});