$(function() {

    $("#btnToShipping").on("click", function() {
        $("<p>").appendTo($("#transferredCustContact")).html("Contact" + $("#email").val());
        $("<hr>").appendTo($("#transferredCustContact"));
        $("<p>").appendTo($("#transferredCustContact")).html("Ship to" + $("#fName").val());
        $("<p>").appendTo($("#transferredCustContact")).html($("#fName").val());
        $("<p>").appendTo($("#transferredCustContact")).html($("#lName").val());
    });



});