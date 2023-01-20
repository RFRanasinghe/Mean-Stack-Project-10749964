function LoadBroker6Content() {
  document.getElementById("main6Topic").innerHTML = "Southern Province Contact Page";
  document.getElementById("send6Id").innerHTML = "Send";

  //background color
  document.getElementById("topic6Container").style.backgroundColor = "#00416D";
  document.getElementById("input6").style.backgroundColor = "#B1B493";

  //font style
  document.getElementById("send6Id").style.fontStyle = "italic";

  //font color
  document.getElementById("main6Topic").style.color = "#F8BD7F";

  //alignment
  document.getElementById("main6Topic").style.textAlign = "center";
  document.getElementById("send6Id").style.textAlign = "center";
}
 window.onload = LoadBroker6Content;
