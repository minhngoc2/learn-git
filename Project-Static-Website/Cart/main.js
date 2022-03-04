
function plus() {
  $(".icon-plus").click(function () {
    let defaultValue = +$(this).parent().children(":first").val() + 1
    $(this).parent().children(":first").val(`${defaultValue}`)
    let currentMoney = $(this).parent().parent().parent().parent().children(":nth-child(3)").children(":first").text();
    currentMoney = +currentMoney.slice(1) + 15.00;
    currentMoney = "$" + currentMoney;
    $(this).parent().parent().parent().parent().children(":nth-child(3)").children(":first").text(currentMoney);
    $(this).parent().parent().parent().parent().children(":last").children(":first").text(currentMoney);
  })
}
plus();

function minus() {
  $(".icon-minus").click(function () {
    let defaultValue = +$(this).parent().children(":first").val() - 1
    let currentMoney = $(this).parent().parent().parent().parent().children(":nth-child(3)").children(":first").text();
    if (+currentMoney.slice(1) < 30) {
      return;
    }
    currentMoney = +currentMoney.slice(1) - 15.00;
    currentMoney = "$" + currentMoney;
    $(this).parent().parent().parent().parent().children(":nth-child(3)").children(":first").text(currentMoney);
    $(this).parent().parent().parent().parent().children(":last").children(":first").text(currentMoney);
    if (defaultValue == 0) return;
    $(this).parent().children(":first").val(`${defaultValue}`)
  })
}
minus();

function Delete() {
  $(".icon").click(function () {
    $(this).parent().parent().parent().remove();
    check();
  })
}
Delete();

function check() {
  console.log($("tbody tr").length == 0);
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
purchase();