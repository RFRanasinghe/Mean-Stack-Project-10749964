//                   main-home Component            JavaScript Code
// load content of the page through JAVASCRIPT
function HomeLoadFunction()
  {
    document.getElementById("homeId").innerHTML="Home";
    //home-page > background color
    document.getElementById("topicBackground").style.backgroundColor="rgb(255, 238, 99)";
    document.getElementById("buttonTable").style.backgroundColor="rgb(171, 194, 112)";
    document.getElementById("localMarketButton").style.backgroundColor="rgb(31, 70, 144)";
    document.getElementById("globalMarketButton").style.backgroundColor="rgb(31, 70, 144)";
    document.getElementById("homeId").style.backgroundColor="#5463FF";

    //border colors
  document.getElementById("localMarketButton").style.borderColor = "rgb(31, 70, 144)";
  document.getElementById("globalMarketButton").style.borderColor="rgb(31, 70, 144)";

    document.getElementById("registerId").innerHTML="Register Profile";
    document.getElementById("loginId").innerHTML="Log In";
    document.getElementById("localBrokerId").innerHTML="Local Broker Details";
    document.getElementById("globalBrokerId").innerHTML="Global Broker Details";
    document.getElementById("historyId").innerHTML="History Details";
    document.getElementById("PersonalId").innerHTML = "Personal Profile";
  document.getElementById("topicId").innerHTML = "Interact with Local and Global markets to win wings together";
  }
         window.onload = HomeLoadFunction;

         //Button click event
//alert function
function HomeAlertFunction(){
  alert("You're already in Home Page");
}

//button click directs to the Register Profile page
function RegisterProfileClick() {
  window.location.href="/register-page";
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

//button click directs from home-page to local-market-page
function LocalMarketPageFunctionClick() {
  window.location.href="/local-market-page";
}

//button click directs from home-page to global-market-page
function GlobalMarketPageFunctionClick(){
  window.location.href="/global-market-page";
}

//mouse over function
function HomeMouseOver() {
  document.getElementById("homeId").style.backgroundColor = "#E6A400";
}
function RegisterMouseOver() {
  document.getElementById("registerId").style.backgroundColor = "#E6A400";
}

function LoginMouseOver() {
  document.getElementById("loginId").style.backgroundColor = "#E6A400";
}

function LocalBrokerMouseOver() {
  document.getElementById("localBrokerId").style.backgroundColor = "#E6A400";
}

function GlobalBrokerMouseOver() {
  document.getElementById("globalBrokerId").style.backgroundColor = "#E6A400";
}

function HistoryMouseOver() {
  document.getElementById("historyId").style.backgroundColor = "#E6A400";
}

function PersonalMouseOver() {
  document.getElementById("PersonalId").style.backgroundColor = "#E6A400";
}

function LocalMouseOver() {
  document.getElementById("localMarketButton").style.backgroundColor = "#A2D2FF";
}

function GlobalMouseOver() {
  document.getElementById("globalMarketButton").style.backgroundColor = "#A2D2FF";
}

//mouse out function for side bar table
function HomeMouseOut() {
  document.getElementById("homeId").style.backgroundColor = "#5463FF";
}

function RegisterMouseOut() {
  document.getElementById("registerId").style.backgroundColor = "";
}

function LoginMouseOut() {
  document.getElementById("loginId").style.backgroundColor = "";
}

function LocalBrokerMouseOut() {
  document.getElementById("localBrokerId").style.backgroundColor = "";
}

function GlobalBrokerMouseOut() {
  document.getElementById("globalBrokerId").style.backgroundColor = "";
}

function HistoryMouseOut() {
  document.getElementById("historyId").style.backgroundColor = "";
}

function PersonalMouseOut() {
  document.getElementById("PersonalId").style.backgroundColor = "";
}

function LocalMouseOut() {
  document.getElementById("localMarketButton").style.backgroundColor = "rgb(31, 70, 144)";
}

function GlobalMouseOut() {
  document.getElementById("globalMarketButton").style.backgroundColor = "rgb(31, 70, 144)";
}
