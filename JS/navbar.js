$(function() {
    getBag();

    $( ".hamburgerButton" )
    .click(function() {
        $( " .myUl " ).slideToggle();
        $( ".myUl" ).css({
            display: "flex"
        })
    });

    $( ".shoppingCartButton").click(function(){
        window.location.href = "../HTML/cart.html";
    });

    cartNumbers();
});

function getBag() {
    let productsFromLS = localStorage.getItem("products");

    if (productsFromLS) { //Only get bag from LS if it has content
        bag = JSON.parse(localStorage.getItem("products"));
    }
}

function cartNumbers() {

    getBag();

    let itemsInCart = 0;
    
    for (let i = 0; i < bag.length; i++) {
        itemsInCart += bag[i].quantity;
    }    

    $(".shoppingCartButton i")
    .html(itemsInCart);
};