var searchBoxPlacer = function() {
  var width = $(window).width();
  if (width > 768) {
    $("#search-box-shell-sm").append($(".search-box"));
  } else if (width <= 768) {
    $(".search-box-shell-xs").prepend($(".search-box"));
  }
};

$(document).ready (function () {
  searchBoxPlacer();

  $( window ).resize(function() {
    searchBoxPlacer();
    console.log("resize happened");
  });
});
