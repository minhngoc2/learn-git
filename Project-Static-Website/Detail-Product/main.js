
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
let TotalSum = 0;
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
    TotalSum += quantity;
    $(".quantity").text(TotalSum);
  })
}
addProduct();

function showBorder() {
  $(".circle-size").click(function () {
    $(".circle-size").removeClass("circle-border");
    $(this).addClass("circle-border");
    let newSize = "Kích cỡ: " + ($(this).text())
    $(".h6-size").text(newSize);
  })
}
showBorder();

function borderColor() {
  $(".circle-color").click(function () {
    $(".circle-color").removeClass("circle-border");
    $(this).addClass("circle-border");
    if ($(this).hasClass("circle-cyan")) {
      $(".h6-color").text("Màu sắc: Lục lam")
    }
    else if ($(this).hasClass("circle-black")) {
      $(".h6-color").text("Màu sắc: Đen")
    }
    else if ($(this).hasClass("circle-green")) {
      $(".h6-color").text("Màu sắc: Xanh lá")
    }


  })
}
borderColor();