$(function() {
    renderNavbar();
    cartNumbers();
});

function renderNavbar() {
    $( ".hamburgerButton" )
    .on("click", function() {
        $( " .myUl " ).slideToggle();
        $( ".myUl" ).css({
            display: "flex"
        })
        $(" main ").fadeToggle()
    });

    //HYPERLINK SHOPPINGCARTBUTTON -> CART
$( ".shoppingCartButton",)
.on ("click", function(){
  window.location.href = "../HTML/cart.html";
});

$

//HYPERLINK LOGOTYPE -> HOME
$( ".logotype" )
.on("click", function(){
  window.location.href = "../index.html";
  console.log("klick");
});
}

function cartNumbers() {

    getFromLocalStorage();

    let itemsInCart = 0;
    
    for (let i = 0; i < bag.length; i++) {
        itemsInCart += bag[i].quantity;
    }  

    $("#counterContainer")
    .html(itemsInCart);
}