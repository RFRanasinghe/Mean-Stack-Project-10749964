function LoadBroker3Content() {
  document.getElementById("main3Topic").innerHTML = "Northern Province Contact Page";
  document.getElementById("send3Id").innerHTML = "Send";

  //background color
  document.getElementById("topic3Container").style.backgroundColor = "#00416D";
  document.getElementById("input3").style.backgroundColor = "#B1B493";

  //font color
  document.getElementById("main3Topic").style.color = "#F8BD7F";

  //font style
  document.getElementById("send3Id").style.fontStyle = "italic";

  //element align
  document.getElementById("main3Topic").style.textAlign = "center";
  document.getElementById("send3Id").style.textAlign = "center";
}
 window.onload = LoadBroker3Content;
