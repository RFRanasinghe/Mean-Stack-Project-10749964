function LoadBroker4Content() {
  document.getElementById("main4Topic").innerHTML = "Eastern Province Contact Page";
   document.getElementById("send4Id").innerHTML = "Send";

  //background color
  document.getElementById("topic4Container").style.backgroundColor = "#00416D";
  document.getElementById("input4").style.backgroundColor = "#B1B493";

  //font color
   document.getElementById("main4Topic").style.color = "#F8BD7F";

  //font style
  document.getElementById("send4Id").style.fontStyle = "italic";

  //text align
  document.getElementById("main4Topic").style.textAlign = "center";
  document.getElementById("send4Id").style.textAlign = "center";
}
 window.onload = LoadBroker4Content;
