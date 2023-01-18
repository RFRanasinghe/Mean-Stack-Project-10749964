function LocalMarketPageLoadFunction()
  {
    document.getElementById("topicHead").innerHTML="Local Market Area";
    document.getElementById("homeId").innerHTML="Home";
    document.getElementById("registerId").innerHTML="Register Profile";
    document.getElementById("loginId").innerHTML="Log In";
    document.getElementById("localBrokerId").innerHTML="Local Broker Details";
    document.getElementById("globalBrokerId").innerHTML="Global Broker Details";
    document.getElementById("historyId").innerHTML="History Details";
    document.getElementById("PersonalId").innerHTML="Personal Profile";
    document.getElementById("central").innerHTML="Central Province";
    document.getElementById("northCentral").innerHTML="North Central Province";
    document.getElementById("northern").innerHTML="Northern Province";
    document.getElementById("eastern").innerHTML="Eastern Province";
    document.getElementById("northWestern").innerHTML="North Western Province";
    document.getElementById("southern").innerHTML="Southern Province";
    document.getElementById("uva").innerHTML="Uva Province";
    document.getElementById("sabaragamuwa").innerHTML="Sabaragamuwa Province";
    document.getElementById("western").innerHTML="Western Province";

    //background colors
    document.getElementById("central").style.backgroundColor="#3C4048"; //buttons
    document.getElementById("northCentral").style.backgroundColor="#3C4048";
    document.getElementById("northern").style.backgroundColor="#3C4048";
    document.getElementById("eastern").style.backgroundColor="#3C4048";
    document.getElementById("northWestern").style.backgroundColor="#3C4048";
    document.getElementById("southern").style.backgroundColor="#3C4048";
    document.getElementById("uva").style.backgroundColor="#3C4048";
    document.getElementById("sabaragamuwa").style.backgroundColor="#3C4048";
    document.getElementById("western").style.backgroundColor="#3C4048";
    document.getElementById("topicId").style.backgroundColor = "#FF7B54";
  }
         window.onload = LocalMarketPageLoadFunction;

         //           Button click event
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

//      mouse over function for province table
function CentralMouseOver() {
  document.getElementById("central").style.backgroundColor="#00ABB3"; // table
}

function northCentralMouseOver() {
  document.getElementById("northCentral").style.backgroundColor="#00ABB3";
}

function northernMouseOver() {
  document.getElementById("northern").style.backgroundColor="#00ABB3";
}

function easternMouseOver() {
  document.getElementById("eastern").style.backgroundColor="#00ABB3";
}

function northWesternMouseOver() {
  document.getElementById("northWestern").style.backgroundColor="#00ABB3";
}

function southernMouseOver() {
  document.getElementById("southern").style.backgroundColor = "#00ABB3";
}

function uvaMouseOver() {
  document.getElementById("uva").style.backgroundColor="#00ABB3";
}

function sabaMouseOver() {
  document.getElementById("sabaragamuwa").style.backgroundColor="#00ABB3";
}

function WesternMouseOver() {
  document.getElementById("western").style.backgroundColor="#00ABB3";
}
//mouse out function for side bar table
function HomeMouseOut() {
  document.getElementById("homeId").style.backgroundColor = "";
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

//               mouseout function for province table
function CentralMouseOut() {
  document.getElementById("provinceIdTable").style.backgroundColor=""; // table
}

function northCentralMouseOut() {
  document.getElementById("northCentral").style.backgroundColor="";
}

function northernMouseOut() {
  document.getElementById("northern").style.backgroundColor="";
}

function easternMouseOut() {
  document.getElementById("eastern").style.backgroundColor="";
}

function northWesternMouseOut() {
  document.getElementById("northWestern").style.backgroundColor="";
}

function southernMouseOut() {
  document.getElementById("southern").style.backgroundColor = "";
}

function uvaMouseOut() {
  document.getElementById("uva").style.backgroundColor="";
}

function sabaMouseOut() {
  document.getElementById("sabaragamuwa").style.backgroundColor="";
}

function WesternMouseOut() {
  document.getElementById("western").style.backgroundColor="";
}
