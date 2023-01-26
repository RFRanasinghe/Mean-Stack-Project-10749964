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
    document.getElementById("brokerphoto").innerHTML = "Board of Local Brokers";
    document.getElementById("lb1").innerHTML = "Mr K.A.Sujeewa - Central Province";
    document.getElementById("lb2").innerHTML = "Mr G.K.L.Gunasena - North Central Province";
    document.getElementById("lb3").innerHTML = "Mr Jayalakshan Sriniwasan - Northen Province";
    document.getElementById("lb4").innerHTML = "Mr K.Anura Kottage - Eastern Province";
    document.getElementById("lb5").innerHTML = "Mr L.P.K.Dissasekara - North Western Province";
    document.getElementById("lb6").innerHTML = "Mr G.Liyanage - Southern Province";
    document.getElementById("lb7").innerHTML = "Mr K.Anura Kottage - Eastern Province";
    document.getElementById("lb8").innerHTML = "Mr L.P.K.Dissasekara - North Western Province";
    document.getElementById("lb9").innerHTML = "Mr G.Liyanage - Southern Province";
    document.getElementById("l1Chat").innerHTML = "Chat";
    document.getElementById("l2Chat").innerHTML = "Chat";
    document.getElementById("l3Chat").innerHTML = "Chat";
    document.getElementById("l4Chat").innerHTML = "Chat";
    document.getElementById("l5Chat").innerHTML = "Chat";
    document.getElementById("l6Chat").innerHTML = "Chat";
    document.getElementById("l7Chat").innerHTML = "Chat";
    document.getElementById("l8Chat").innerHTML = "Chat";
    document.getElementById("l9Chat").innerHTML = "Chat";

    //background colors
    document.getElementById("localBrokerId").style.backgroundColor = "#5463FF";
    document.getElementById("mainTopic").style.backgroundColor = "#FF5D5D";
    document.getElementById("brokerlHeading").style.backgroundColor = "#DBD0C0";
    document.getElementById("brokerData").style.backgroundColor = "#FAEEE0";
    document.getElementById("TopicContainer").style.backgroundColor = "#0779E4";

    //change font color
  document.getElementById("mainTopic").style.color="white";
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

//directs to the 1st broker chatting page
function Broker1ChatClick() {
  window.location.href = "/broker-one-chat";
}

//directs to the 2nd broker chatting page
function Broker2ChatClick() {
  window.location.href = "/broker-two-chat";
}

//directs to the 3rd broker chatting page
function Broker3ChatClick() {
  window.location.href = "/broker-three-chat";
}

//directs to the 4th broker chatting page
function Broker4ChatClick() {
  window.location.href = "/broker-four-chat";
}

//directs to the 5th broker chatting page
function Broker5ChatClick() {
  window.location.href = "/broker-five-chat";
}

//directs to the 6th broker chatting page
function Broker6ChatClick() {
  window.location.href = "/broker-six-chat";
}

//directs to the 7th broker chatting page
function Broker7ChatClick() {
  window.location.href = "/broker-seven-chat";
}

//directs to the 8th broker chatting page
function Broker8ChatClick() {
  window.location.href = "/broker-eight-chat";
}

//directs to the 9th broker chatting page
function Broker9ChatClick() {
  window.location.href = "/broker-nine-chat";
}
