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
    document.getElementById("sideTableId").style.backgroundColor = "rgb(0, 0, 0)";
    document.getElementById("central").style.backgroundColor = "#3C4048"; //buttons
    document.getElementById("northCentral").style.backgroundColor="#3C4048";
    document.getElementById("northern").style.backgroundColor="#3C4048";
    document.getElementById("eastern").style.backgroundColor="#3C4048";
    document.getElementById("northWestern").style.backgroundColor="#3C4048";
    document.getElementById("southern").style.backgroundColor="#3C4048";
    document.getElementById("uva").style.backgroundColor="#3C4048";
    document.getElementById("sabaragamuwa").style.backgroundColor="#3C4048";
    document.getElementById("western").style.backgroundColor="#3C4048";
    document.getElementById("topicId").style.backgroundColor = "#FF7B54";

    //border color
    document.getElementById("central").style.borderColor = "#E6A400"; //buttons
    document.getElementById("northCentral").style.borderColor="#E6A400";
    document.getElementById("northern").style.borderColor="#E6A400";
    document.getElementById("eastern").style.borderColor="#E6A400";
    document.getElementById("northWestern").style.borderColor="#E6A400";
    document.getElementById("southern").style.borderColor="#E6A400";
    document.getElementById("uva").style.borderColor="#E6A400";
    document.getElementById("sabaragamuwa").style.borderColor="#E6A400";
    document.getElementById("western").style.borderColor="#E6A400";

    //font size
    document.getElementById("topicHead").style.fontSize = "30px";

    //alignment
    document.getElementById("topicHead").style.textAlign = "center";

    //padding
    document.getElementById("topicHead").style.padding = "8px";

    //width
    document.getElementById("sideTableId").style.width = "350px";
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

//button directs to central province page
function CentralProvinceClick() {
  window.location.href="/central-province-page";
}

//button directs to central province page
function NorthCentralProvinceClick() {
  window.location.href="/north-central-pro-page";
}

//button directs to northern province page
function NorthernProvinceClick() {
  window.location.href="/north-province-page";
}

//button directs to eastern province page
function EasternProvinceClick() {
  window.location.href="/eastern-province-page";
}

//button directs to northWestern province page
function NorthWesternClick() {
  window.location.href="/north-western-page";
}

//button directs to southern province page
function SouthernClick() {
  window.location.href="/southern-provice-page";
}

//button directs to uva province page
function UvaClick() {
  window.location.href="/uva-province-page";
}

//button directs to sabaragamuwa province page
function SabClick() {
  window.location.href="/sabaragamuwa-province-page";
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
  document.getElementById("central").style.backgroundColor="#3C4048"; // table
}

function northCentralMouseOut() {
  document.getElementById("northCentral").style.backgroundColor="#3C4048";
}

function northernMouseOut() {
  document.getElementById("northern").style.backgroundColor="#3C4048";
}

function easternMouseOut() {
  document.getElementById("eastern").style.backgroundColor="#3C4048";
}

function northWesternMouseOut() {
  document.getElementById("northWestern").style.backgroundColor="#3C4048";
}

function southernMouseOut() {
  document.getElementById("southern").style.backgroundColor = "#3C4048";
}

function uvaMouseOut() {
  document.getElementById("uva").style.backgroundColor="#3C4048";
}

function sabaMouseOut() {
  document.getElementById("sabaragamuwa").style.backgroundColor="#3C4048";
}

function WesternMouseOut() {
  document.getElementById("western").style.backgroundColor="#3C4048";
}
