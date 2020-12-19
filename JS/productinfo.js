$(function() {

    $( ".hamburgerButton" ).click(function() {
        $( " .myUl " ).slideToggle();
        $( ".myUl" ).css({
            display: "flex"
        })
        console.log(("klick"));
        });
        function getBag() {
            bag = JSON.parse(localStorage.getItem("products"));
            }
        const cartNumbers = () => {
            getBag();
            let itemsInCart = 0;
            for (let i = 0; i < bag.length; i++) {
              itemsInCart += bag[i].quantity;
            }
            return itemsInCart;
          };
    
        document.querySelector('.shoppingCartButton i').textContent = cartNumbers();
    });