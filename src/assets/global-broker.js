//            global-broker-page  Component         Component        Component

/*const { Button } = require("bootstrap");*/

//load content of the page through JAVASCRIPT
function GlobalBrokerPageLoadFunction()
  {
    document.getElementById("homeId").innerHTML="Home";
    document.getElementById("registerId").innerHTML="Register Profile";
    document.getElementById("loginId").innerHTML="Log In";
    document.getElementById("localBrokerId").innerHTML="Local Broker Details";
    document.getElementById("globalBrokerId").innerHTML = "Global Broker Details";
    document.getElementById("historyId").innerHTML="History Details";
    document.getElementById("PersonalId").innerHTML = "Personal Profile";
    document.getElementById("globalHeading").innerHTML = "Global Broker Details";

    //background colors
    document.getElementById("globalBrokerId").style.backgroundColor = "#5463FF";
    document.getElementById("headingContainer").style.backgroundColor = "#21209C";

    //font color
  document.getElementById("globalHeading").style.color = "white";

  //font size
  document.getElementById("globelHeading").style.fontSize = "30px";

    //text alignment
    document.getElementById("globalHeading").style.textAlign = "center";

    //padding
    document.getElementById("globalHeading").style.padding = "6px";

    //width
    document.getElementById("sideWidth").style.width = "350px";
    document.getElementById("homeId").style.width = "90%";
    document.getElementById("registerId").style.width = "90%";
    document.getElementById("loginId").style.width = "90%";
    document.getElementById("localBrokerId").style.width = "90%";
    document.getElementById("globalBrokerId").style.width = "90%";
    document.getElementById("historyId").style.width = "90%";
  document.getElementById("PersonalId").style.width = "90%";
  document.getElementById("gbrokerId").style.width = "1000px";

  //height
  document.getElementById("gbrokerId").style.height = "500px";

    //margin
  document.getElementById("homeId").style.marginLeft = "15px";
  document.getElementById("registerId").style.marginLeft = "15px";
  document.getElementById("loginId").style.marginLeft = "15px";
  document.getElementById("localBrokerId").style.marginLeft = "15px";
  document.getElementById("globalBrokerId").style.marginLeft = "15px";
  document.getElementById("historyId").style.marginLeft = "15px";
  document.getElementById("PersonalId").style.marginLeft = "15px";
  document.getElementById("globeContainer").style.marginLeft = "400px";
  document.getElementById("gbrokerId").style.marginLeft = "440px";
  document.getElementById("gbrokerId").style.marginTop = "-560px";
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
