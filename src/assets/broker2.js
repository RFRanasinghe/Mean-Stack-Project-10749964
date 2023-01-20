//Local chat 2 page content
function LoadBroker2Content() {
  document.getElementById("main2Topic").innerHTML = "North Central Province Broker Contact Page";
  document.getElementById("send2Id").innerHTML = "Send";

  //background color
  document.getElementById("topic2Container").style.backgroundColor = "#00416D";
  document.getElementById("input2").style.backgroundColor = "#B1B493";

  //font style
  document.getElementById("send2Id").style.fontStyle = "italic";

  //font color
  document.getElementById("main2Topic").style.color = "#F8BD7F";

  //element align
  document.getElementById("main2Topic").style.textAlign = "center";
}
 window.onload = LoadBroker2Content;
