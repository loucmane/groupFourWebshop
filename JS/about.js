$(function() {
    renderInfoBox();
    handleClick();
});

function renderInfoBox() {
    $("#infoBox")
    .html("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nullam vehicula ipsum a arcu cursus vitae congue mauris.")
}

function handleClick() {
    $("#about")
    .on("click", function() {
        $("#categoryContainer div")
        .removeClass("selected")

        $("#about")
        .addClass("selected")

        $("#infoBox")
        .removeClass()
        .html("Sed adipiscing diam donec adipiscing. Morbi tristique senectus et netus et malesuada fames ac turpis. At urna condimentum mattis pellentesque id nibh tortor id aliquet. Adipiscing tristique risus nec feugiat.")

        $("#imgBox")
        .removeClass()
    })

    $("#founders")
    .on("click", function() {
        $("#categoryContainer div")
        .removeClass("selected")

        $("#about")
        .removeClass("selected")

        $("#founders")
        .addClass("selected")

        $("#infoBox")
        .removeClass()
        .addClass("founders")
        .html("Mi proin sed libero enim sed faucibus turpis in eu. Morbi non arcu risus quis varius quam. Feugiat vivamus at augue eget arcu dictum varius duis. Vulputate sapien nec sagittis aliquam malesuada. Quisque non tellus orci ac auctor augue mauris.")

        $("#imgBox")
        .removeClass()
        .addClass("founders")
    })

    $("#history")
    .on("click", function() {
        $("#categoryContainer div")
        .removeClass("selected")

        $("#about")
        .removeClass("selected")

        $("#history")
        .addClass("selected")

        $("#infoBox")
        .removeClass()
        .addClass("history")
        .html("Potenti nullam ac tortor vitae purus faucibus. Posuere sollicitudin aliquam ultrices sagittis orci. Odio ut sem nulla pharetra diam sit amet. Enim ut tellus elementum sagittis. Nunc aliquet bibendum enim facilisis.")

        $("#imgBox")
        .removeClass()
        .addClass("history")
    })

    $("#philosophy")
    .on("click", function() {
        $("#categoryContainer div")
        .removeClass("selected")

        $("#about")
        .removeClass("selected")

        $("#philosophy")
        .addClass("selected")

        $("#infoBox")
        .removeClass()
        .addClass("philosophy")
        .html("Mauris augue neque gravida in fermentum et sollicitudin ac. Nisi lacus sed viverra tellus in. Quisque sagittis purus sit amet volutpat consequat mauris nunc. Eu volutpat odio facilisis mauris sit amet. Risus feugiat in ante metus dictum at.")

        $("#imgBox")
        .removeClass()
        .addClass("philosophy")
    })

    $("#manufacture")
    .on("click", function() {
        $("#categoryContainer div")
        .removeClass("selected")

        $("#about")
        .removeClass("selected")

        $("#manufacture")
        .addClass("selected")

        $("#infoBox")
        .removeClass()
        .addClass("manufacture")
        .html("Nulla aliquet enim tortor at auctor urna nunc. Elit duis tristique sollicitudin nibh sit. Amet consectetur adipiscing elit ut aliquam purus. Non curabitur gravida arcu ac tortor dignissim convallis aenean et. Aliquam faucibus purus in massa.")

        $("#imgBox")
        .removeClass()
        .addClass("manufacture")
    })
}