$(function() {

    $("#btnToShipping").on("click", function() {
        $("<p>").appendTo($("#transferredCustContact")).html("Contact" + $("#email").val());
        $("<hr>").appendTo($("#transferredCustContact"));
        $("<p>").appendTo($("#transferredCustContact")).html("Ship to " + $("#fName").val() + " " + $("#lName").val() +
            $("#adrStreet").val() + ", " + $("#adrPCode").val() + " " + $("#adrCity").val() + ", " + $("#adrCountry").val());

    });



});