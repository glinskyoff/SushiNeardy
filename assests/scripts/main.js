$(document).ready(function () {
  $("a[href*='#']").on("click", function (e) {
    var anchor = $(this);
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $(anchor.attr("href")).offset().top - 50,
        },
        800
      );
    e.preventDefault();
    return false;
  });

  $(".toggle").change(function () {
    if ($('input[name="delivery"]').prop("checked")) {
      console.log("доставка");
      $(".checkoutForm .change .delivery").css("display", "flex");
      $(".checkoutForm .change .pickup").css("display", "none");
    } else {
      console.log("самовывоз");
      $(".checkoutForm .change .delivery").css("display", "none");
      $(".checkoutForm .change .pickup").css("display", "flex");
    }
  });
});
