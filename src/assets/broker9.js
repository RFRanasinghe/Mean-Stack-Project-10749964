function LoadBroker9Content() {
  document.getElementById("main9Topic").innerHTML = "Western Province Contact Page";
  document.getElementById("send9Id").innerHTML = "Send";

  //background color
  document.getElementById("topic9Container").style.backgroundColor = "#00416D";
  document.getElementById("input9").style.backgroundColor = "#B1B493";

  //font style
  document.getElementById("send9Id").style.fontStyle = "italic";

  //font color
  document.getElementById("main9Topic").style.color = "#F8BD7F";

  //alignment
  document.getElementById("main9Topic").style.textAlign = "center";
  document.getElementById("send9Id").style.textAlign = "center";
}
 window.onload = LoadBroker9Content;
