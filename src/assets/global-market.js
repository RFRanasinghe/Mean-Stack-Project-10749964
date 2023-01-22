//       Page content
function globalMarketPageContent() {
  document.getElementById("globalTopic").innerHTML = "Global Market Area";
  document.getElementById("spaCeylonButton").innerHTML = "Spa Ceylon Global Company";
  document.getElementById("louisButton").innerHTML = "Louis Global Company";
  document.getElementById("hermerButton").innerHTML = "Hermers Global Company";

  //content align
  document.getElementById("globalTopic").style.textAlign = "Center";

  //background color
  document.getElementById("topicContainer").style.backgroundColor = "#E7305B";
  document.getElementById("spaCeylonButton").style.backgroundColor = "#965D62";
  document.getElementById("spaHeading").style.backgroundColor = "#FF8C8C";
  document.getElementById("spaTableId").style.backgroundColor = "#FAF0D7";
  document.getElementById("louisButton").style.backgroundColor = "#965D62";
  document.getElementById("louisHeading").style.backgroundColor = "#FF8C8C";
  document.getElementById("louisTableId").style.backgroundColor = "#FAF0D7";
  document.getElementById("hermerButton").style.backgroundColor = "#965D62";
  document.getElementById("hermerHeading").style.backgroundColor = "#FF8C8C";
  document.getElementById("hermerTableId").style.backgroundColor = "#FAF0D7";

  //border color
  document.getElementById("spaCeylonButton").style.borderColor = "#965D62";
  document.getElementById("louisContainer").style.borderColor = "#965D62";
  document.getElementById("louisButton").style.borderColor = "#965D62";
  document.getElementById("hermerButton").style.borderColor = "#965D62";

  //font color
  document.getElementById("spaCeylonButton").style.color = "white";
  document.getElementById("louisButton").style.color = "white";
  document.getElementById("hermerButton").style.color = "white";

  //font size
  document.getElementById("louisButton").style.fontSize = "24px";
  document.getElementById("hermerButton").style.fontSize = "24px";
  document.getElementById("spaCeylonButton").style.fontSize = "24px";

  //padding
  document.getElementById("topicContainer").style.padding = "8px";
  document.getElementById("louisContainer").style.paddingTop = "10px";
  document.getElementById("hermerContainer").style.paddingTop = "10px";
  document.getElementById("louisButton").style.padding = "8px";
  document.getElementById("hermerButton").style.padding = "8px";
  document.getElementById("spaCeylonButton").style.padding = "8px";

  //element size
  document.getElementById("louisButton").style.width = "100%";
  document.getElementById("hermerButton").style.width = "100%";
  document.getElementById("spaCeylonButton").style.width = "60.5%";
}
window.onload = "globalMarketPageContent";

//on mouse hover function
function SpaMouseOver() {
  document.getElementById("spaCeylonButton").style.backgroundColor = "#FFE6AB";
  document.getElementById("spaCeylonButton").style.color = "black";
}

function LouisMouseOver() {
  document.getElementById("louisButton").style.backgroundColor = "#FFE6AB";
  document.getElementById("louisButton").style.color = "black";
}

function HermerMouseOver() {
  document.getElementById("hermerButton").style.backgroundColor = "#FFE6AB";
  document.getElementById("hermerButton").style.color = "black";
}

//mouse out hover function
function SpaMouseOut() {
  document.getElementById("spaCeylonButton").style.backgroundColor = "#965D62";
  document.getElementById("spaCeylonButton").style.color = "white";
}

function LouisMouseOut() {
  document.getElementById("louisButton").style.backgroundColor = "#965D62";
  document.getElementById("louisButton").style.color = "white";
}

function hermerButton() {
  document.getElementById("hermerButton").style.backgroundColor = "#965D62";
  document.getElementById("hermerButton").style.color = "white";
}

//hide and show spa ceylon table content with button click
function SpaButtonClick() {
  var x = document.getElementById("spaTableId");

  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

//hide and show louis table content with button click
function LouisButtonClick() {
  var x = document.getElementById("louisTableId");

  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

//hide and show louis table content with button click
function HermerButtonClick() {
  var x = document.getElementById("hermerTableId");

  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
