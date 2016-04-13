$(document).ready (function () {
  var jumboHeader = $(".jumbo-header"),
  jumboHeaderShellSm = $("#jumbo-header-shell-sm"),
  jumboHeaderShellXs = $("#jumbo-header-shell-xs");

  prependPlacer(jumboHeader, jumboHeaderShellSm, jumboHeaderShellXs);

  $(window).resize(function() {
    prependPlacer(jumboHeader, jumboHeaderShellSm, jumboHeaderShellXs);
  });
});
