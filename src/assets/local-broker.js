//          local-broker-page
//load content of the through JAVASCRIPT
function RegisterLoadContentFunction()
{
    document.getElementById("mainTopic").innerHTML = "Local Broker Details";
    document.getElementById("homeId").innerHTML="Home";
    document.getElementById("registerId").innerHTML="Register Profile";
    document.getElementById("loginId").innerHTML="Log In";
    document.getElementById("localBrokerId").innerHTML="Local Broker Details";
    document.getElementById("globalBrokerId").innerHTML = "Global Broker Details";
    document.getElementById("historyId").innerHTML = "History Details";
    document.getElementById("PersonalId").innerHTML = "Personal Profile";

    //background colors
    document.getElementById("localBrokerId").style.backgroundColor = "#5463FF";
    document.getElementById("mainTopic").style.backgroundColor = "#FF5D5D";
    document.getElementById("brokerlHeading").style.backgroundColor = "#DBD0C0";
    document.getElementById("brokerData").style.backgroundColor = "#FAEEE0";

    //change font color
  document.getElementById("mainTopic").style.color="white";
  document.getElementById("province").style.color = "white";
  document.getElementById("brokerId").style.color = "white";
  document.getElementById("brokerName").style.color = "white";
  document.getElementById("brokerNumber").style.color = "white";
  document.getElementById("brokerMail").style.color = "white";
  document.getElementById("mainTopic").style.color = "white";
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

//button click directs to western-province-page
function DirectWesternProvinceFunctionClick() {
  window.location.href="/western-province-page";
}
