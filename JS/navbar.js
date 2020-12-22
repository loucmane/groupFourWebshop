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
custInfo = [];

function saveBag() {
    localStorage.setItem("products", JSON.stringify(bag));
    localStorage.setItem("Information", JSON.stringify(custInfo));

}

function getBag() {
    bag = JSON.parse(localStorage.getItem("products")) || [] ;
    custInfo = JSON.parse(localStorage.getItem("Information")) || [] ;
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