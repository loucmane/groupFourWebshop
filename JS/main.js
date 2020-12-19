$(function() {

  $( ".hamburgerButton" ).click(function() {
      $( " .myUl " ).slideToggle();
      $( ".myUl" ).css({
          display: "flex"
      })
      console.log(("klick"));
      });
  });

