$(function() {

    renderHTML();
});

function renderHTML() {

    $("<img>")
        .attr("id", "iceMan")
        .attr("src", "../IMG/iceman.jpeg")
        .appendTo("main")

    let container = $("<div>")
        .attr("id", "contactContainer")
        .appendTo("main")

    $("<h2>")
        .html("Contact")
        .appendTo(container)

    $("<h3>")
        .html("Official Retailers World Wide:")
        .appendTo(container)

    $("<h4>")
        .html("US")
        .appendTo(container)

    $("<p>")
        .html("us@accent.com")
        .appendTo(container)

    $("<h4>")
        .html("SWEDEN")
        .appendTo(container)

    $("<p>")
        .html("se@accent.com")
        .appendTo(container)

    $("<h4>")
        .html("UK")
        .appendTo(container)

    $("<p>")
        .html("uk@accent.com")
        .appendTo(container)

    $("<h4>")
        .html("FRANCE")
        .appendTo(container)

    $("<p>")
        .html("fr@accent.com")
        .appendTo(container)

    $("<h4>")
        .html("JAPAN")
        .appendTo(container)

    $("<p>")
        .html("jp@accent.com")
        .appendTo(container)

    $("<h4>")
        .html("DENMARK")
        .appendTo(container)

    $("<p>")
        .html("dk@accent.com")
        .appendTo(container)

    $("<h4>")
        .html("AUSTRALIA")
        .appendTo(container)

    $("<p>")
        .html("au@accent.com")
        .appendTo(container)

    $("<h4>")
        .html("GENERAL INQUIRIES")
        .appendTo(container)

    $("<p>")
        .html("info@accent.com")
        .appendTo(container)

    $("<h4>")
        .html("PRESS")
        .appendTo(container)

    $("<p>")
        .html("press@accent.com")
        .appendTo(container)

    let postalAddress = $("<div>")
        .addClass("sectionContainer")
        .appendTo(container)

    $("<h4>")
        .html("POSTAL ADDRESS")
        .appendTo(postalAddress)

    $("<p>")
        .html("/ACCENT")
        .appendTo(postalAddress)

    $("<p>")
        .html("Box 1234")
        .appendTo(postalAddress)

    $("<p>")
        .html("S-123 45 Stockholm")
        .appendTo(postalAddress)

    $("<p>")
        .html("Sweden")
        .appendTo(postalAddress)

    $("<h4>")
        .html("PHONE")
        .appendTo(container)

    $("<p>")
        .html("+46(0)70-123 45 67")
        .appendTo(container)

    let followContainer = $("<div>")
        .addClass("sectionContainer")
        .appendTo(container)

    $("<h4>")
        .html("FOLLOW")
        .appendTo(followContainer)

    $("<p>")
        .html("instagram.com/accent")
        .appendTo(followContainer)
    $("<p>")
        .html("twitter.com/accent")
        .appendTo(followContainer)
    $("<p>")
        .html("facebook.com/accent")
        .appendTo(followContainer)

    $("<h4>")
        .html("WEBSITE BY")
        .appendTo(container)

    $("<p>")
        .html("Group 4 - FED20S @ Medieinstitutet")
        .appendTo(container)
}