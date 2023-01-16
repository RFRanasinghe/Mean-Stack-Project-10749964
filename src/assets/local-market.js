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
    document.getElementById("provinceIdTable").style.backgroundColor="#00ABB3"; // table
    document.getElementById("central").style.backgroundColor="#3C4048"; //buttons
    document.getElementById("northCentral").style.backgroundColor="#3C4048";
    document.getElementById("northern").style.backgroundColor="#3C4048";
    document.getElementById("eastern").style.backgroundColor="#3C4048";
    document.getElementById("northWestern").style.backgroundColor="#3C4048";
    document.getElementById("southern").style.backgroundColor="#3C4048";
    document.getElementById("uva").style.backgroundColor="#3C4048";
    document.getElementById("sabaragamuwa").style.backgroundColor="#3C4048";
    document.getElementById("western").style.backgroundColor="#3C4048";
    document.getElementById("topicId").style.backgroundColor="#FF7B54";
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
