function LoadBroker5Content() {
  document.getElementById("main5Topic").innerHTML = "North Western Province Contact Page";
  document.getElementById("send5Id").innerHTML = "Send";

  //background color
  document.getElementById("topic5Container").style.backgroundColor = "#00416D";
  document.getElementById("input5").style.backgroundColor = "#B1B493";

  //font style
  document.getElementById("send5Id").style.fontStyle = "italic";

  //font color
  document.getElementById("main5Topic").style.color = "#F8BD7F";

  //alignment
  document.getElementById("main5Topic").style.textAlign = "center";
   document.getElementById("send5Id").style.textAlign = "center";
}
 window.onload = LoadBroker5Content;
