
function plus() {
  $(".icon-plus").click(function () {
    let defaultValue = +$(this).parent().children(":first").val();
    console.log(defaultValue);
    defaultValue++;
    $(this).parent().children(":first").val(`${defaultValue}`);
    let sumOfItem = defaultValue * 20;
    $(this).parent().parent().parent().parent().children(":last").children(":first").text('$' + `${sumOfItem}`);
    Total();
  })
}


function minus() {
  $(".icon-minus").click(function () {
    let defaultValue = +$(this).parent().children(":first").val();
    console.log(defaultValue);
    if (defaultValue == 1) {
      return;
    }
    defaultValue--;
    $(this).parent().children(":first").val(`${defaultValue}`);
    let sumOfItem = defaultValue * 20;
    $(this).parent().parent().parent().parent().children(":last").children(":first").text('$' + `${sumOfItem}`);
    Total();
  })
}


function Delete() {
  $(".icon").click(function () {
    $(this).parent().parent().parent().remove();
    check();
    let productArray = JSON.parse(localStorage.getItem('productArray'));
    productArray = productArray.splice(0, productArray.length - 1);
    localStorage.setItem('productArray', JSON.stringify(productArray));
    Total();
  })

}


function check() {
  if ($("tbody tr").length == 0) {
    $("table").empty();
    $(".footer-cart").empty();
    $(".Cart-Empty").css("display", "block");
  }
}

function purchase() {
  $(".Purchase").click(function () {
    $("h2").remove();
    $(".container-fluid").remove();
    $(".footer-cart").remove();
    $(".back-to-homepage").css("display", "block");
    $(".Purchase-successful").css("display", "flex");
    $(".image-purchase-successful").css("display", "block");

  })
}


function render() {
  let productArray = JSON.parse(localStorage.getItem('productArray'));
  if (!productArray) {
    return;
  }
  let itemHTML = "";
  for (let i = 0; i < productArray.length; i++) {
    let sum = productArray[i].quantity * 20;
    itemHTML += `<tr>
    <td>
      <div class="wrapper">
        <div class="image">
          <img src="images/cart-sp1 1 (2).png" alt="anh1" />
        </div>
      </div>
    </td>
    <td>
      <div class="desc">
        <h3>Váy lông vũ dài</h3>
        <p class="color">Màu sắc: Đỏ</p>
        <p class="size">Kích cỡ: S</p>
        <p class="brand">Thương hiệu: NEM</p>
        <p class="code">Mã sản phẩm: #21</p>
        <p class="add">Giá Tiền: $20.00</p>
        <p class="add">Số lượng : ${productArray[i].quantity}</p>
        <div class="icon">
          <i class="fas fa-trash-alt"></i>
        </div>
      </div>
    </td>
    <td><p>$20</p></td>
    <td>
      <div class="add-or-delete mt-3 mb-3">
        <form action="#">
          <input
            style="text-align: center"
            type="text"
            value=${productArray[i].quantity}
            name="quantity"
            id="quantity"
            class="quantity1"
            pattern="[0-9]*"
            min="0"
            maxlength="3"
            required
          />
          <span class="icon-minus icon-quantity">
            <i class="fas fa-minus"></i>
          </span>
          <span class="icon-plus icon-quantity">
            <i class="fas fa-plus"></i>
          </span>
        </form>
      </div>
    </td>
    <td>
      <p class="total">$${sum}</p>
    </td>
  </tr>`
  }
  document.getElementsByTagName("tbody")[0].innerHTML = itemHTML;
}

render();
plus();
minus();
purchase();
Delete();
function Total() {
  let total = $(".total");
  let result = 0;
  for (let i = 0; i < total.length; i++) {
    result += +total[i].innerText.slice(1);
  }
  $(".beforeTotalSum").text('$' + result);
  result -= 10;
  $(".totalMoney").text('$' + result);

};
Total();