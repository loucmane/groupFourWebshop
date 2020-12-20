$(function () {
    $('.hamburgerButton').click(function () {
        $(' .myUl ').slideToggle();
        $('.myUl').css({
            display: 'flex',
        });
    });

    function getBag() {
        bag = JSON.parse(localStorage.getItem('products'));
    }

    const cartNumbers = () => {

        let itemsInCart = 0;
        
        if (localStorage.getItem("products") != null) { //Only get bag from LS if it has content
            getBag();
        }
        
        for (let i = 0; i < bag.length; i++) {
            itemsInCart += bag[i].quantity;
        }
        return itemsInCart;
    };

    document.querySelector('.shoppingCartButton i').textContent = cartNumbers();
});
