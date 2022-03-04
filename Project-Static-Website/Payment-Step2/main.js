
function plus() {
  $(".icon-plus").click(function () {
    let defaultValue = +$("#quantity").val() + 1
    $("#quantity").val(`${defaultValue}`)
    $("#quantity-number").text(`${defaultValue}`)
  })
}
plus();

function minus() {
  $(".icon-minus").click(function () {
    let defaultValue = +$("#quantity").val() - 1
    if (defaultValue == 0) return;
    $("#quantity").val(`${defaultValue}`)
    $("#quantity-number").text(`${defaultValue}`)
  })
}
minus();

function purchase() {
  $(".Purchase").click(function () {
    $("section").remove();
    $(".banner").remove();
    $(".back-to-homepage").css("display", "block");
    $(".Purchase-successful").css("display", "flex");
    $(".image-purchase-successful").css("display", "block");

  })
}
purchase();