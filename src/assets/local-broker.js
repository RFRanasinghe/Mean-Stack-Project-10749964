//          local-broker-page
//load content of the through JAVASCRIPT
function RegisterLoadContentFunction()
  {
    document.getElementById("homeId").innerHTML="Home";
    document.getElementById("registerId").innerHTML="Register Profile";
    document.getElementById("loginId").innerHTML="Log In";
    document.getElementById("localBrokerId").innerHTML="Local Broker Details";
    document.getElementById("globalBrokerId").innerHTML="Global Broker Details";

    //background colors
    document.getElementById("localBrokerId").style.backgroundColor="#5463FF";

    document.getElementById("historyId").innerHTML="History";
    document.getElementById("PersonalId").innerHTML="Personal Profile";
  }
         window.onload = RegisterLoadContentFunction;

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

//alert message
function LocalBrokerAlertFunction() {
  alert("You're already in Local Broker Page");
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


