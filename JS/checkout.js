$(function() {

    $("#btnToShipping").on("click", function() {
        $("<p>").appendTo
        $("<p>").appendTo($("#transferredCustContact")).html($("#fName").val());
        $("<p>").appendTo($("#transferredCustContact")).html($("#lName").val());
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

      document.querySelector(
        '[data-cart-number]'
      ).textContent = cartNumbers();
    });