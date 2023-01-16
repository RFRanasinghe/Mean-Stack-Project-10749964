//            global-broker-page  Component         Component        Component

const { Button } = require("bootstrap");

//load content of the page through JAVASCRIPT
function GlobalBrokerPageLoadFunction()
  {
    document.getElementById("homeId").innerHTML="Home";
    document.getElementById("registerId").innerHTML="Register Profile";
    document.getElementById("loginId").innerHTML="Log In";
    document.getElementById("localBrokerId").innerHTML="Local Broker Details";
    document.getElementById("globalBrokerId").innerHTML="Global Broker Details";

    //background colors
    document.getElementById("globalBrokerId").style.backgroundColor="#5463FF";

    document.getElementById("historyId").innerHTML="History Details";
    document.getElementById("PersonalId").innerHTML="Personal Profile";
  }
         window.onload = GlobalBrokerPageLoadFunction;

               //Button click event
//button click directs to the Home Page
function HomeClickPageFunction() {
  window.location.href="/home-page";
}

//button click directs to the Register Profile page
function RegisterProfileClick() {
  window.location.href="/register-page";
}

//button click directs to the Login Page
function LoginPageFunctionClick() {
  window.location.href="/login-page";
}

//alert function
function LocalBrokerAlertFunction(){
  alert("You're already in Local Broker Details Page");
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
