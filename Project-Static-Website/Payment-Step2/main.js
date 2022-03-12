
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

function render() {
  let productArray = JSON.parse(localStorage.getItem('productArray'));
  if (!productArray) {
    return;
  }
  let itemHTML = "";
  for (let i = 0; i < productArray.length; i++) {
    let sum = productArray[i].quantity * 20;
    itemHTML += `<div class="cart-product-item d-flex">
    <div class="img">
      <img src="abc3.png" alt="cart-image" />
      <div class="quantity">${productArray[i].quantity}</div>
    </div>
    <div class="text">
      <h6>Váy lông vũ dài</h6>
      <p>Đỏ / S</p>
      <div class="icon">
        <i
          class="fas fa-edit"
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
        ></i>
        <i class="fas fa-trash-alt trash-icon"></i>
      </div>
    </div>

    <div class="price1 line-through">$45.00</div>
    <div class="price2 sale">$20.00</div>
  </div>`
  }
  $(".card-product-header")[0].innerHTML = itemHTML;
}

render();


function Total() {
  let quantities = $(".quantity");
  let result = 0;
  for (let i = 0; i < quantities.length; i++) {
    result += +quantities[i].innerText * 20;
  }
  console.log(result);
  $(".totalMoney").text('$' + `${result}`);
  result -= 10;
  $(".lastTotal").text('$' + `${result}`)

}
Total();
function check() {
  if ($(".card-product-header .cart-product-item").length == 0) {
    $(".banner").empty();
    $("#header").empty();
    $("#body").empty();
    $(".Cart-Empty").css("display", "block");
  }
}
function Delete() {
  $(".trash-icon").click(function () {
    $(this).parent().parent().parent().remove();
    check();
    let productArray = JSON.parse(localStorage.getItem('productArray'));
    productArray = productArray.splice(0, productArray.length - 1);
    localStorage.setItem('productArray', JSON.stringify(productArray));
    Total();
  })
}
Delete();