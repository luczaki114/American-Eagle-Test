// finds an element that needs different placement based on viewport size and then prepends it accordingly.
var prependPlacer = function (element, greaterthan, lessthan) {
  var width = $(window).width();
  (width > 768) ? greaterthan.prepend(element) : lessthan.prepend(element);
}

$(document).ready (function () {
  var searchBox = $(".search-box"),
  searchBoxShellSm = $("#search-box-shell-sm"),
  searchBoxShellXs = $(".search-box-shell-xs"),
  loginRegister = $("#login-register"),
  babyRegistry = $("#baby-registry")
  mobileNavShellSm = $("#mobile-nav-shell-sm"),
  mobileNavShellXs = $("#mobile-nav-shell-xs"),
  copyrightImgLogo = $("#copyright-img-logo"),
  copyrightText = $("#copyright-text"),
  copyrightShellRight = $("#copyright-shell-right"),
  copyrightShellLeft = $("#copyright-shell-left");

  prependPlacer(searchBox, searchBoxShellSm , searchBoxShellXs);
  prependPlacer(loginRegister, mobileNavShellSm, mobileNavShellXs);
  prependPlacer(babyRegistry, mobileNavShellSm, mobileNavShellXs);
  prependPlacer(copyrightImgLogo, copyrightShellRight, copyrightShellLeft);
  prependPlacer(copyrightText, copyrightShellLeft, copyrightShellRight);

  $(window).resize(function() {
    prependPlacer(searchBox, searchBoxShellSm , searchBoxShellXs);
    prependPlacer(loginRegister, mobileNavShellSm, mobileNavShellXs);
    prependPlacer(babyRegistry, mobileNavShellSm, mobileNavShellXs);
    prependPlacer(copyrightImgLogo, copyrightShellRight, copyrightShellLeft);
    prependPlacer(copyrightText, copyrightShellLeft, copyrightShellRight);
  });
});
