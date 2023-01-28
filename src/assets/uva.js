function UvaContent() {
  document.getElementById("UvaHeading").innerHTML = "Uva Province Market Area";
  document.getElementById("teaButton").innerHTML = "Halpe Tea Company";
  document.getElementById("teamBtn").innerHTML = "Better Team Company";

  //text alignment
  document.getElementById("UvaHeading").style.textAlign = "center";

  //background color
  document.getElementById("HeadContainer").style.backgroundColor = "#9A0680";
  document.getElementById("teaButton").style.backgroundColor = "#C3BA85";
  document.getElementById("teamBtn").style.backgroundColor = "#C3BA85";

  //border color
  document.getElementById("teaButton").style.borderColor = "#C3BA85";
  document.getElementById("teamBtn").style.borderColor = "#C3BA85";

  //margin
  document.getElementById("teaButton").style.marginLeft = "600px";
  document.getElementById("teaData").style.marginLeft = "600px";
  document.getElementById("teamBtn").style.marginLeft = "600px";
  document.getElementById("teamData").style.marginLeft = "600px";

  //padding
  document.getElementById("HeadContainer").style.padding = "8px";
  document.getElementById("teaButton").style.padding = "6px";
  document.getElementById("teamBtn").style.padding = "6px";

  //width
  document.getElementById("teaButton").style.width = "60.5%";
  document.getElementById("teamBtn").style.width = "60.5%";
  document.getElementById("teamData").style.width = "60%";

  //font color
  document.getElementById("UvaHeading").style.color = "white";

  //font size
  document.getElementById("teaButton").style.fontSize = "24px";
  document.getElementById("teamBtn").style.fontSize = "24px";
}
  window.onload = UvaContent;
