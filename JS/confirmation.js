$(function() {

    getFromLocalStorage();

    localStorage.clear();

    //Link to landing page
    $(".logotype")
        .on("click", function() {
            window.location.href = "../index.html";
        });

    //Link to checkoutpage
    $("button")
        .on("click", function() {

            window.location.href = "../HTML/products.html";
        });
});