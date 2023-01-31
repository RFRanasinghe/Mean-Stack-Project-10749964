//                   register-profile Component          Javascript Codes

/*const { style } = require("@angular/animations");*/

//register-profile Page Content
function RegisterLoadFunction()
  {
    document.getElementById("homeId").innerHTML="Home";
    document.getElementById("registerId").innerHTML = "Register Profile";
    document.getElementById("loginId").innerHTML = "Log in";
    document.getElementById("localBrokerId").innerHTML = "Local Broker Details";
    document.getElementById("globalBrokerId").innerHTML = "Global Broker Details";
    document.getElementById("historyId").innerHTML = "History Details";
    document.getElementById("PersonalId").innerHTML = "Personal Profile";
    document.getElementById("registerTopic").innerHTML = "Register Profile";
    document.getElementById("lblFname").innerHTML = "First Name";
    document.getElementById("lblLname").innerHTML = "Last Name";
    document.getElementById("lblmail").innerHTML = "Email Address";
    document.getElementById("lblUname").innerHTML = "Username";
    document.getElementById("lblAddress").innerHTML = "Address";
    document.getElementById("lblCity").innerHTML = "City";
    document.getElementById("lblCountry").innerHTML = "Country";
   document.getElementById("lblPostCode").innerHTML = "Post Code";
  document.getElementById("submitBtn").innerHTML = "Submit";

    //align
  document.getElementById("registerTopic").style.textAlign = "center";

    //padding
    document.getElementById("formId").style.paddingTop = "30px";
    document.getElementById("formId").style.paddingLeft = "60px";
    document.getElementById("lblLname").style.paddingLeft = "100px";
    document.getElementById("fnameTdId").style.paddingLeft = "40px";
    document.getElementById("lnameTdId").style.paddingLeft = "120px";
    document.getElementById("mailTdId").style.paddingLeft = "40px";
    document.getElementById("lblUname").style.paddingLeft = "100px";
    document.getElementById("unameTdId").style.paddingLeft = "120px";
    document.getElementById("addTdId").style.paddingLeft = "40px";
    document.getElementById("cityTdId").style.paddingLeft = "40px";
    document.getElementById("lblCountry").style.paddingLeft = "100px";
    document.getElementById("coutryTdId").style.paddingLeft = "120px";
    document.getElementById("lblPostCode").style.paddingLeft = "100px";
  document.getElementById("postTdId").style.paddingLeft = "120px";
  document.getElementById("submitBtn").style.padding = "20px";

    //background colors
    document.getElementById("formId").style.backgroundColor = "#EDDFB3";

    //border radius
    document.getElementById("txtFnameId").style.borderRadius = "15px";
    document.getElementById("txtLnameId").style.borderRadius = "15px";
    document.getElementById("txtEmailId").style.borderRadius = "15px";
    document.getElementById("txtUsernameId").style.borderRadius = "15px";
    document.getElementById("txtAddressId").style.borderRadius = "15px";
    document.getElementById("txtCityId").style.borderRadius = "15px";
    document.getElementById("txtCountryId").style.borderRadius = "15px";
    document.getElementById("txtPostCodeId").style.borderRadius = "15px";

  //width
  document.getElementById("txtFnameId").style.width = "120%";
  document.getElementById("txtLnameId").style.width = "120%";
  document.getElementById("txtEmailId").style.width = "120%";
  document.getElementById("txtUsernameId").style.width = "120%";
  document.getElementById("txtAddressId").style.width = "120%";
  document.getElementById("txtCityId").style.width = "120%";
  document.getElementById("txtCountryId").style.width = "120%";
  document.getElementById("txtPostCodeId").style.width = "120%";
  document.getElementById("submitBtn").style.width = "200%";

  //fontsize
  document.getElementById("lblFname").style.fontSize = "24px";
  document.getElementById("lblLname").style.fontSize = "24px";
  document.getElementById("lblmail").style.fontSize = "24px";
  document.getElementById("lblUname").style.fontSize = "24px";
  document.getElementById("lblAddress").style.fontSize = "24px";
  document.getElementById("lblCity").style.fontSize = "24px";
  document.getElementById("lblCountry").style.fontSize = "24px";
  document.getElementById("lblPostCode").style.fontSize = "24px";
  document.getElementById("txtFnameId").style.fontSize = "18px";
  document.getElementById("txtLnameId").style.fontSize = "18px";
  document.getElementById("txtEmailId").style.fontSize = "18px";
  document.getElementById("txtUsernameId").style.fontSize = "18px";
  document.getElementById("txtAddressId").style.fontSize = "18px";
  document.getElementById("txtCityId").style.fontSize = "18px";
  document.getElementById("txtCountryId").style.fontSize = "18px";
  document.getElementById("txtPostCodeId").style.fontSize = "18px";
  document.getElementById("submitBtn").style.fontSize = "24px";

  //height
  document.getElementById("txtFnameId").style.height = "60px";
  document.getElementById("txtLnameId").style.height = "60px";
  document.getElementById("txtEmailId").style.height = "60px";
  document.getElementById("txtUsernameId").style.height = "60px";
  document.getElementById("txtAddressId").style.height = "60px";
  document.getElementById("txtCityId").style.height = "60px";
  document.getElementById("txtCountryId").style.height = "60px";
  document.getElementById("txtPostCodeId").style.height = "60px";

  //border width
  document.getElementById("txtFnameId").style.borderWidth = "2px";
  document.getElementById("txtLnameId").style.borderWidth = "2px";
  document.getElementById("txtEmailId").style.borderWidth = "2px";
  document.getElementById("txtUsernameId").style.borderWidth = "2px";
  document.getElementById("txtAddressId").style.borderWidth = "2px";
  document.getElementById("txtCityId").style.borderWidth = "2px";
  document.getElementById("txtCountryId").style.borderWidth = "2px";
  document.getElementById("txtPostCodeId").style.borderWidth = "2px";

  //margin
  document.getElementById("submitBtn").marginLeft = "600px";
  }
         window.onload = RegisterLoadFunction;

//                 button click events in register-profile page
//button click directs from register-profile-page to home-page
function HomeClickPageFunction() {
  window.location.href="/home-page";
}

//alert message
function RegisterAlertFunction() {
  alert("You're already in Register Profile Page");
}

//button click directs to the Login Page
function LoginPageFunctionClick() {
  window.location.href="/login-page";
}

//button click directs to the LocalBroker Page
function LocalBrokerPageFunctionClick() {
  window.location.href="/local-broker-page";
}

//button click directs to the GlobalBroker Page
function GlobalBrokerPageFunctionClick() {
  window.location.href="/global-broker-page";
}

//button click directs to the history Page
function HistoryPageFunctionClick() {
  window.location.href="/history-page";
}

//button click directs to the personalProfile Page
function PersonalProfileFunctionClick() {
  window.location.href="/personal-profile-page";
}

//                       register-profile form validation
function RegisterFormValidation() {
  var isValid = true;
//      first name validation
 let firstName = document.forms["registerForm"]["txtfname"].value;
  if (firstName == "") {
    isValid = false;
   document.getElementById('submitBtn').disabled = true;
   document.getElementById("fnameError").innerHTML = "*Please enter your first name";
   document.getElementById("fnameError").style.color = "red";
 }
 //     last name validation
 let lastName = document.forms["registerForm"]["txtlname"].value;
  if (lastName == "") {
     isValid = false;
   document.getElementById('submitBtn').disabled = true;
   document.getElementById("lnameError").innerHTML = "*Please enter your last name";
   document.getElementById("lnameError").style.color = "red";
 }
 //   email validation
 let email = document.forms["registerForm"]["txtEmail"].value;
  if (email == "") {
     isValid = false;
   document.getElementById('submitBtn').disabled = true;
   document.getElementById("mailError").innerHTML = "*Please enter your email";
   document.getElementById("mailError").style.color = "red";
 }
//username validation
 let username = document.forms["registerForm"]["txtUsername"].value;
  if (username == "") {
     isValid = false;
   document.getElementById('submitBtn').disabled = true;
   document.getElementById("usernameError").innerHTML = "*Please enter your username";
   document.getElementById("usernameError").style.color = "red";
 }
 //address validation
 let address = document.forms["registerForm"]["txtAddress"].value;
  if (address == "") {
     isValid = false;
   document.getElementById('submitBtn').disabled = true;
   document.getElementById("addressError").innerHTML = "*Please enter your address";
   document.getElementById("addressError").style.color = "red";
 }
 //city validation
 let city = document.forms["registerForm"]["txtCity"].value;
  if (city == "") {
     isValid = false;
   document.getElementById('submitBtn').disabled = true;
   document.getElementById("cityError").innerHTML = "*Please enter your city";
   document.getElementById("cityError").style.color = "red";
 }
 //state validation
 let state = document.forms["registerForm"]["txtCountry"].value;
  if (state == "") {
     isValid = false;
   document.getElementById('submitBtn').disabled = true;
   document.getElementById("stateError").innerHTML = "*Please enter your state";
    document.getElementById("stateError").style.color = "red";
 }
 //postal code validation
 let postalCode = document.forms["registerForm"]["txtPostCode"].value;
  if (postalCode == "") {
     isValid = false;
   document.getElementById('submitBtn').disabled = true;
   document.getElementById("postalError").innerHTML = "*Please enter your postal code";
   document.getElementById("postalError").style.color = "red";
  }
  else {
    document.getElementById('submitBtn').disabled = false;
    document.getElementById('sendMsg').innerHTML = "Details entered perfectly";
  }
  return isValid;
}
