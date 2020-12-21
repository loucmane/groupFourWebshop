$(function() {
  
});

function renderHTML(){

  $("<h1>")
  .html("LOGOTYPE")
  .appendTo("main")

  $("<img>")
  .attr("src", "../IMG/iceman.jpeg")
  .appendTo("main")

  let container = $("<div>")
  .attr("id", "contactContainer")
  .appendTo("main")

  $("<h2>")
  .html("contact")
  .appendTo(container)

  $("<h3>")
  .html("official retailers world wide:")
  .appendTo(container)

  $("<h4>")
  .html("US")
  .appendTo(container)

  $("<p>")
  .html("us@company.com")
  .appendTo(container)

  $("<h4>")
  .html("SWEDEN")
  .appendTo(container)

  $("<p>")
  .html("se@company.com")
  .appendTo(container)

  $("<h4>")
  .html("UK")
  .appendTo(container)

  $("<p>")
  .html("uk@company.com")
  .appendTo(container)

  $("<h4>")
  .html("FRANCE")
  .appendTo(container)

  $("<p>")
  .html("fr@company.com")
  .appendTo(container)

  $("<h4>")
  .html("JAPAN")
  .appendTo(container)

  $("<p>")
  .html("jp@company.com")
  .appendTo(container)

  $("<h4>")
  .html("DENMARK")
  .appendTo(container)

  $("<p>")
  .html("dk@company.com")
  .appendTo(container)

  $("<h4>")
  .html("AUSTRALIA")
  .appendTo(container)

  $("<p>")
  .html("au@company.com")
  .appendTo(container)

  $("<h4>")
  .html("GENERAL INQUIRIES")
  .appendTo(container)

  $("<p>")
  .html("info@company.com")
  .appendTo(container)
  
  $("<h4>")
  .html("PRESS")
  .appendTo(container)

  $("<p>")
  .html("press@company.com")
  .appendTo(container)

  let postalAddress = $("<div>")
  .addClass("sectionContainer")
  .appendTo(container)

  $("<h4>")
  .html("POSTAL ADDRESS")
  .appendTo(postalAddress)

  $("<p>")
  .html("Company Name")
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
  .html("instagram.com/company")
  .appendTo(followContainer)
  $("<p>")
  .html("twitter.com/company")
  .appendTo(followContainer)
  $("<p>")
  .html("facebook.com/company")
  .appendTo(followContainer)

  $("<h4>")
  .html("WEBSITE BY")
  .appendTo(container)

  $("<p>")
  .html("Group 4 - FED20S @ Medieinstitutet")
  .appendTo(container)
}

