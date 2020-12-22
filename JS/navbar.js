$(function() {
    renderNavbar();
    cartNumbers();
});

function renderNavbar() {
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
}

function cartNumbers() {

    getFromLocalStorage();

    let itemsInCart = 0;
    
    for (let i = 0; i < bag.length; i++) {
        itemsInCart += bag[i].quantity;
    }  

    $(".shoppingCartButton i")
    .html(itemsInCart);
}