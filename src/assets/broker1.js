const { Socket } = require("socket.io-client");

//content load on broker1 chat page
function LoadBroker1Content() {
  document.getElementById("mainTopic").innerHTML = "Central Province Broker Contact Page";
  document.getElementById("sendId").innerHTML = "Send";

  //background color
  document.getElementById("topicContainer").style.backgroundColor = "#00416D";
  document.getElementById("input").style.backgroundColor = "#B1B493";

  //font style
  document.getElementById("sendId").style.fontStyle = "italic";
  document.getElementById("textId").style.fontStyle = "italic";

  //font color
  document.getElementById("mainTopic").style.color = "#F8BD7F";

  //placeholder
  document.getElementById("textId").placeholder = "Type your message here..";

  //height
  //document.getElementById("textId").style.height = "40px";

  //element align
  document.getElementById("mainTopic").style.textAlign = "center";
  document.getElementById("sendId").style.textAlign = "center";
}
  window.onload = LoadBroker1Content;
