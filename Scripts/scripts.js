// finds an element that needs different placement based on viewport size and then prepends it accordingly.
var prependPlacer = function (element, greaterthan, lessthan) {
  var width = $(window).width();
  (width > 768) ? greaterthan.prepend(element) : lessthan.prepend(element);
}



$(document).ready (function () {
  prependPlacer($(".search-box"), $("#search-box-shell-sm"), $(".search-box-shell-xs"));
  prependPlacer($("#login-register"), $("#mobile-nav-shell-sm"), $("#mobile-nav-shell-xs"));
  prependPlacer($("#baby-registry"), $("#mobile-nav-shell-sm"), $("#mobile-nav-shell-xs"));
  prependPlacer($(".jumbo-header"), $("#jumbo-header-shell-sm"), $("#jumbo-header-shell-xs"));
  prependPlacer($("#copyright-img-logo"), $("#copyright-shell-right"), $("#copyright-shell-left"));
  prependPlacer($("#copyright-text"), $("#copyright-shell-left"), $("#copyright-shell-right"));

  $(window).resize(function() {
    prependPlacer($(".search-box"), $("#search-box-shell-sm"), $(".search-box-shell-xs"));
    prependPlacer($("#login-register"), $("#mobile-nav-shell-sm"), $("#mobile-nav-shell-xs"));
    prependPlacer($("#baby-registry"), $("#mobile-nav-shell-sm"), $("#mobile-nav-shell-xs"));
    prependPlacer($(".jumbo-header"), $("#jumbo-header-shell-sm"), $("#jumbo-header-shell-xs"));
    prependPlacer($("#copyright-img-logo"), $("#copyright-shell-right"), $("#copyright-shell-left"));
    prependPlacer($("#copyright-text"), $("#copyright-shell-left"), $("#copyright-shell-right"));
  });
});
