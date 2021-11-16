function Validator(options) {
    function validate(inputElement, rule) {
      let errorMessage = rule.test(inputElement.value);
      let errorElement = inputElement.parentElement.querySelector(
        options.errorSelector
      );
      if (errorMessage) {
        errorElement.innerText = errorMessage;
        inputElement.parentElement.classList.add("invalid");
      } else {
        errorElement.innerText = "";
        inputElement.parentElement.classList.remove("invalid");
      }
    }
  
    let formElement = document.querySelector(options.form);
    if (formElement) {
      options.rules.forEach(function (rule) {
        let inputElement = formElement.querySelector(rule.selector);
        let errorElement =
          inputElement.parentElement.querySelector(options.errorSelector);
        if (inputElement) {
          // blurOut input
          inputElement.onblur = function () {
            validate(inputElement, rule);
          };
  
          // Enter Input
          inputElement.oninput = function () {
            let errorElement = inputElement.parentElement.querySelector(
              options.errorSelector
            );
            errorElement.innerText = "";
            inputElement.parentElement.classList.remove("invalid");
          };
        }
      });
    }
  }
  Validator.isRequired = function (selector) {
    return {
      selector: selector,
      test: function (value) {
        return value.trim() ? undefined : "Vui Long Nhap Truong Nay";
      },
    };
  };
  Validator.isEmail = function (selector) {
    return {
      selector: selector,
      test: function (value) {
        let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        return regex.test(value) ? undefined : "Truong nay phai la email";
      },
    };
  };
  
  Validator.minMaxLength = function (selector, min, max) {
    return {
      selector: selector,
      test: function (value) {
          if(value.length < min){
              return `Enter min ${min} characters!`
          }
          else{
              if(value.length >= max){
                  return `Enter <= ${max} characters!`;
              }
          }
      },
    };
  };
  
  
  Validator.isConfirmed = function (selector, getConfirmValue) {
      return {
          selector: selector,
          test: function(value) {
              return value === getConfirmValue() ? undefined : 'Invalid ConfirmPassword';
          }
      }
  }
  isBool = true;
  
  function showHiddenPassword() {
      if(isBool){
          document.getElementById("password").setAttribute("type", "text");
          isBool = false;
      }
      else{
          document.getElementById("password").setAttribute("type", "password");
          isBool = true;
      }
  }
  check = true;
  function showHiddenConfirmPassword() {
      if(check){
          document.getElementById("password_confirmation").setAttribute("type", "text");
          check = false;
      }
      else{
          document.getElementById("password_confirmation").setAttribute("type", "password");
          check = true;
      }
  }