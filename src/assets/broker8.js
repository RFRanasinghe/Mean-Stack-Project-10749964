function LoadBroker8Content() {
  document.getElementById("main8Topic").innerHTML = "Sabaragamuwa Province Contact Page";
  document.getElementById("send8Id").innerHTML = "Send";

  //background color
  document.getElementById("topic8Container").style.backgroundColor = "#00416D";
  document.getElementById("input8").style.backgroundColor = "#B1B493";

  //font style
  document.getElementById("send8Id").style.fontStyle = "italic";

  //font color
  document.getElementById("main8Topic").style.color = "#F8BD7F";

  //alignment
  document.getElementById("main8Topic").style.textAlign = "center";
  document.getElementById("send8Id").style.textAlign = "center";
}
 window.onload = LoadBroker8Content;
