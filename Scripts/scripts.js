// finds an element that needs different placement based on viewport size and then prepends it accordingly.
var prependPlacer = function (element, greaterthan, lessthan) {
  var width = $(window).width();
  (width > 768) ? greaterthan.prepend(element) : lessthan.prepend(element);
}



$(document).ready (function () {
  prependPlacer($(".search-box"), $("#search-box-shell-sm"), $(".search-box-shell-xs"));
  prependPlacer($("#login-register"), $("#mobile-nav-shell-sm"), $("#mobile-nav-shell-xs"));
  prependPlacer($("#baby-registry"), $("#mobile-nav-shell-sm"), $("#mobile-nav-shell-xs"));

  $(window).resize(function() {
    prependPlacer($(".search-box"), $("#search-box-shell-sm"), $(".search-box-shell-xs"));
    prependPlacer($("#login-register"), $("#mobile-nav-shell-sm"), $("#mobile-nav-shell-xs"));
    prependPlacer($("#baby-registry"), $("#mobile-nav-shell-sm"), $("#mobile-nav-shell-xs"));
  });
});
