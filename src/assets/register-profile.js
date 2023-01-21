//                   register-profile Component          Javascript Codes

/*const { style } = require("@angular/animations");*/

//register-profile Page Content
function RegisterLoadFunction()
  {
    document.getElementById("homeId").innerHTML="Home";
    document.getElementById("registerId").innerHTML="Register Profile";

    //background colors
    document.getElementById("registerId").style.backgroundColor="#5463FF";
    document.getElementById("firstName").style.backgroundColor="#899857";
    document.getElementById("lastName").style.backgroundColor="#899857";
    document.getElementById("mailInput").style.backgroundColor="#899857";
    document.getElementById("usernameInput").style.backgroundColor="#899857";
    document.getElementById("addressInput").style.backgroundColor="#899857";
    document.getElementById("cityInput").style.backgroundColor="#899857";
    document.getElementById("countryInput").style.backgroundColor="#899857";
    document.getElementById("postalInput").style.backgroundColor="#899857";
    document.getElementById("formTableId").style.backgroundColor="#A4D4AE";
    document.getElementById("topicContainerId").style.backgroundColor="#FFCE76";
    document.getElementById("submitButton").style.backgroundColor="#F9C4AA";

    document.getElementById("loginId").innerHTML="Log In";
    document.getElementById("localBrokerId").innerHTML="Local Broker Details";
    document.getElementById("globalBrokerId").innerHTML="Global Broker Details";
    document.getElementById("historyId").innerHTML="History Details";
    document.getElementById("PersonalId").innerHTML="Personal Profile";
    document.getElementById("fname").innerHTML="First Name";
    document.getElementById("lname").innerHTML="Last Name";
    document.getElementById("mail").innerHTML="Email Address";
    document.getElementById("uname").innerHTML="Username";
    document.getElementById("address").innerHTML="Address";
    document.getElementById("city").innerHTML="City";
    document.getElementById("country").innerHTML="Country";
    document.getElementById("postalCode").innerHTML="Postal Code";
    document.getElementById("registerTopic").innerHTML="Register Profile form";
    document.getElementById("submitButton").innerHTML="Submit";
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
 let firstName = document.forms["registerForm"]["firstName"].value;
 if(firstName=="") {
  document.getElementById("fnameError").innerHTML="Please enter your first name";
 }
 //     last name validation
 let lastName = document.forms["registerForm"]["lastName"].value;
 if(lastName=="") {
  document.getElementById("lnameError").innerHTML="Please enter your last name"
 }
 //   email validation
 let email = document.forms["registerForm"]["email"].value;
 if(email=="") {
  document.getElementById("mailError").innerHTML="Please enter your email";
 }
//username validation
 let username = document.forms["registerForm"]["userName"].value;
 if(username=="") {
  document.getElementById("usernameError").innerHTML="*Please enter your username";
 }
 //address validation
 let address = document.forms["registerForm"]["address"].value;
 if(address=="") {
  document.getElementById("addressError").innerHTML="*Please enter your address";
 }
 //city validation
 let city = document.forms["registerForm"]["city"].value;
 if(city=="") {
  document.getElementById("cityError").innerHTML="*Please enter your city";
 }
 //state validation
 let state = document.forms["registerForm"]["state"].value;
 if(state=="") {
  document.getElementById("stateError").innerHTML="*Please enter your state";
 }
 //postal code validation
 let postalCode = document.forms["registerForm"]["postal"].value;
 if(postalCode=="") {
  document.getElementById("postalError").innerHTML="*Please enter your postal code";
 }
}


