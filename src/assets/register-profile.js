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
    //document.getElementById("topicContainerId").style.padding = "10px";
    document.getElementById("lnameId").style.paddingLeft = "60px";

    //background colors
    //document.getElementById("topicContainerId").style.backgroundColor = "#3E8E7E";

    //border radius
    document.getElementById("firstName").style.borderRadius = "15px";
    document.getElementById("lastName").style.borderRadius = "15px";
    document.getElementById("mailInput").style.borderRadius = "15px";
    document.getElementById("usernameInput").style.borderRadius = "15px";
    document.getElementById("addressInput").style.borderRadius = "15px";
    document.getElementById("cityInput").style.borderRadius = "15px";
    document.getElementById("countryInput").style.borderRadius = "15px";
    document.getElementById("postalInput").style.borderRadius = "15px";

  //width
  document.getElementById("fnameId").style.width = "50%";
  document.getElementById("lnameId").style.width = "50%";
  document.getElementById("mailInput").style.width = "50%";
  document.getElementById("usernameInput").style.width = "50%";
  document.getElementById("addressInput").style.width = "50%";
  document.getElementById("cityInput").style.width = "50%";
  document.getElementById("countryInput").style.width = "50%";
  document.getElementById("postalInput").style.width = "50%";
  document.getElementById("formTableId").style.width = "76.2%";

  //fontsize
  document.getElementById("txtFnameId").style.fontSize = "20px";
  document.getElementById("txtLnameId").style.fontSize = "20px";
  document.getElementById("txtEmailId").style.fontSize = "20px";
  document.getElementById("txtUsernameId").style.fontSize = "20px";
  document.getElementById("txtAddressId").style.fontSize = "20px";
  document.getElementById("txtCityId").style.fontSize = "20px";
  document.getElementById("txtCountry").style.fontSize = "20px";
  document.getElementById("txtPostCode").style.fontSize = "20px";

  //height
  document.getElementById("txtFnameId").style.height = "40px";
  document.getElementById("txtLnameId").style.height = "40px";
  document.getElementById("txtEmailId").style.height = "40px";
  document.getElementById("txtUsernameId").style.height = "40px";
  document.getElementById("txtAddressId").style.height = "40px";
  document.getElementById("txtCityId").style.height = "40px";
  document.getElementById("txtCountryId").style.height = "40px";
  document.getElementById("txtPostCodeId").style.height = "40px";

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
  document.getElementById("formContainer").style.marginLeft = "360px";
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
//      first name validation
 let firstName = document.forms["registerForm"]["txtfname"].value;
 if(firstName=="") {
   document.getElementById("fnameError").innerHTML = "*Please enter your first name";
   document.getElementById("fnameError").style.color = "red";
 }
 //     last name validation
 let lastName = document.forms["registerForm"]["txtlname"].value;
 if(lastName=="") {
   document.getElementById("lnameError").innerHTML = "*Please enter your last name";
   document.getElementById("lnameError").style.color = "red";
 }
 //   email validation
 let email = document.forms["registerForm"]["txtEmail"].value;
 if(email=="") {
   document.getElementById("mailError").innerHTML = "*Please enter your email";
   document.getElementById("mailError").style.color = "red";
 }
//username validation
 let username = document.forms["registerForm"]["txtUsername"].value;
 if(username=="") {
   document.getElementById("usernameError").innerHTML = "*Please enter your username";
   document.getElementById("usernameError").style.color = "red";
 }
 //address validation
 let address = document.forms["registerForm"]["txtAddress"].value;
 if(address=="") {
   document.getElementById("addressError").innerHTML = "*Please enter your address";
   document.getElementById("addressError").style.color = "red";
 }
 //city validation
 let city = document.forms["registerForm"]["txtCity"].value;
 if(city=="") {
   document.getElementById("cityError").innerHTML = "*Please enter your city";
   document.getElementById("cityError").style.color = "red";
 }
 //state validation
 let state = document.forms["registerForm"]["txtCountry"].value;
 if(state=="") {
   document.getElementById("stateError").innerHTML = "*Please enter your state";
    document.getElementById("stateError").style.color = "red";
 }
 //postal code validation
 let postalCode = document.forms["registerForm"]["txtPostCode"].value;
 if(postalCode=="") {
   document.getElementById("postalError").innerHTML = "*Please enter your postal code";
   document.getElementById("postalError").style.color = "red";
 }
}


