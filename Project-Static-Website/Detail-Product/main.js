
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

function showImage() {
  $('.small-image').click(function () {
    let linkImage = $(this).attr("src");
    $('.big-image').attr("src", linkImage);
    $('.small-image').removeClass("default-border");
    $(this).addClass("default-border");
  })
}
showImage();

let productsArray;
function addProduct() {
  $(".add-product").click(function () {
    let quantity = +$("#quantity-number").text();
    let price = 20;
    let product = {
      quantity,
      price
    }
    productsArray = JSON.parse(localStorage.getItem('productArray')) ?? []
    console.log(productsArray)
    productsArray.push(product)
    localStorage.setItem('productArray', JSON.stringify(productsArray))
  })
}
addProduct();