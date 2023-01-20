function LoadBroker7Content() {
  document.getElementById("main7Topic").innerHTML = "Uva Province Contact Page";
  document.getElementById("send7Id").innerHTML = "Send";

  //background color
  document.getElementById("topic7Container").style.backgroundColor = "#00416D";
  document.getElementById("input7").style.backgroundColor = "#B1B493";

  //font style
  document.getElementById("send7Id").style.fontStyle = "italic";

  //font color
  document.getElementById("main7Topic").style.color = "#F8BD7F";

  //alignment
  document.getElementById("main7Topic").style.textAlign = "center";
  document.getElementById("send7Id").style.textAlign = "center";
}
 window.onload = LoadBroker7Content;
