
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

