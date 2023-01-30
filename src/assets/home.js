//                   main-home Component            JavaScript Code
// load content of the page through JAVASCRIPT
function HomeLoadFunction()
  {
    document.getElementById("homeId").innerHTML = "Home";
    document.getElementById("registerId").innerHTML = "Register Profile";
    document.getElementById("loginId").innerHTML = "Log in";
    document.getElementById("localBrokerId").innerHTML = "Local Broker Details";
    document.getElementById("globalBrokerId").innerHTML = "Global Broker Details";
    document.getElementById("historyId").innerHTML = "History Details";
    document.getElementById("PersonalId").innerHTML = "Personal Profile";
    document.getElementById("topicId").innerHTML = "Interact with Local & Global Markets to win wings together";

    //text alignment
    document.getElementById("topicId").style.textAlign = "center";

    //background color
    document.getElementById("bodyId").style.backgroundColor = "#FAF4FF";
    document.getElementById("topicBackground").style.backgroundColor="rgb(255, 238, 99)";
    document.getElementById("buttonTable").style.backgroundColor="rgb(171, 194, 112)";
    document.getElementById("localMarketButton").style.backgroundColor="rgb(31, 70, 144)";
    document.getElementById("globalMarketButton").style.backgroundColor="rgb(31, 70, 144)";
    document.getElementById("homeId").style.backgroundColor = "#5463FF";
    document.getElementById("sideTable").style.backgroundColor = "black";

    //border colors
    document.getElementById("localMarketButton").style.borderColor = "rgb(31, 70, 144)";
    document.getElementById("globalMarketButton").style.borderColor = "rgb(31, 70, 144)";

    //width
    document.getElementById("sideTable").style.width = "350px";
    document.getElementById("localMarketButton").style.width = "300px";
    document.getElementById("globalMarketButton").style.width = "300px";
    document.getElementById("buttonTable").style.width = "75%";
    document.getElementById("bitImage").style.width = "300px";
    document.getElementById("ethImage").style.width = "300px";
    document.getElementById("topicBackground").style.width = "75%";

    //height
    document.getElementById("localMarketButton").style.height = "80px";
    document.getElementById("globalMarketButton").style.height = "80px";
    document.getElementById("buttonTable").style.height = "120px";
    document.getElementById("bitImage").style.height = "300px";
    document.getElementById("ethImage").style.height = "300px";

    //font size
    document.getElementById("localMarketButton").style.fontSize = "24px";
    document.getElementById("globalMarketButton").style.fontSize = "24px";
    document.getElementById("topicId").style.fontSize = "24px";

    //font color
    document.getElementById("localMarketButton").style.color = "white";
    document.getElementById("globalMarketButton").style.color = "white";
    document.getElementById("topicId").style.color = "rgb(153, 0, 0)";

  //font style
    document.getElementById("topicId").style.fontStyle = "italic";

    //padding
    document.getElementById("buttonTable").style.padding = "10px";
    document.getElementById("topicBackground").style.padding = "8px";
    document.getElementById("localMarketButton").style.padding = "8px";
    document.getElementById("globalMarketButton").style.padding = "8px";

    //border spacing
    document.getElementById("sideTable").style.borderSpacing = "20px";
    document.getElementById("buttonTable").style.borderSpacing = "30px";

    //margin
    document.getElementById("sideTable").style.marginRight = "70px";
    document.getElementById("localMarketButton").style.marginLeft = "80px";
    document.getElementById("globalMarketButton").style.marginLeft = "80px";
    document.getElementById("buttonTable").style.marginLeft = "360px";
    document.getElementById("coinTable").style.marginLeft = "500px";
    document.getElementById("topicBackground").style.marginLeft = "360px";
    document.getElementById("topicBackground").style.marginTop = "-420px";
    document.getElementById("sideTable").style.marginTop = "-400px";

    //border space
    document.getElementById("coinTable").style.borderSpacing = "30px";

    //border
    document.getElementById("bitTd").style.paddingBottom = "20px";
    document.getElementById("ethTd").style.paddingLeft = "200px";
    document.getElementById("ethTd").style.paddingBottom = "20px";
    document.getElementById("ethDetTd").style.paddingLeft = "200px";

    document.getElementById("localId").style.paddingLeft = "50px";
    document.getElementById("localId").style.paddingTop = "10px";
    document.getElementById("globalId").style.paddingLeft = "120px";
    document.getElementById("globalId").style.paddingTop = "10px";

    //border radius
    document.getElementById("localMarketButton").style.borderRadius = "15px";
    document.getElementById("globalMarketButton").style.borderRadius = "15px";
    document.getElementById("bitImage").style.borderRadius = "16px";
    document.getElementById("ethImage").style.borderRadius = "16px";

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
  document.getElementById("localMarketButton").style.borderColor = "#A2D2FF";
  document.getElementById("localMarketButton").style.color = "black";
}

function GlobalMouseOver() {
  document.getElementById("globalMarketButton").style.backgroundColor = "#A2D2FF";
  document.getElementById("globalMarketButton").style.borderColor = "#A2D2FF";
  document.getElementById("globalMarketButton").style.color = "black";
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
  document.getElementById("localMarketButton").style.color = "white";
}

function GlobalMouseOut() {
  document.getElementById("globalMarketButton").style.backgroundColor = "rgb(31, 70, 144)";
  document.getElementById("globalMarketButton").style.color = "white";
}
