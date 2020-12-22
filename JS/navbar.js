$(function() {

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

bag = [];

function saveBag() {
    localStorage.setItem("products", JSON.stringify(bag));
}

function getBag() {
    bag = JSON.parse(localStorage.getItem("products")) || [] ;
}

function cartNumbers() {

    getBag();

    let itemsInCart = 0;
    
    for (let i = 0; i < bag.length; i++) {
        itemsInCart += bag[i].quantity;
    }  

    $("#cartNumber")
    .html(itemsInCart);
};