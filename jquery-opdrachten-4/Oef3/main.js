$("#subBtn").click(function(){
  const phone = $("#phone").val();
  const phoneRegEx = /^\+?([0-9]{2})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{2})[-. ]?([0-9]{2})[-. ]?([0-9]{2})$/;
  if(phone.match(phoneRegEx)){
    return true
  } else {
    alert("Invalid phone number");
    return false
  }


})








//https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/Form_validation
//https://www.w3resource.com/javascript/form/phone-no-validation.php
//https://regexr.com/
