//       Page content
function globalMarketPageContent() {
  document.getElementById("globalTopic").innerHTML = "Global Market Area";
  document.getElementById("spaCeylonButton").innerHTML = "Spa Ceylon Global Company";
  document.getElementById("louisButton").innerHTML = "Louis Global Company";

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

  //border color
  document.getElementById("spaCeylonButton").style.borderColor = "#965D62";
  document.getElementById("louisContainer").style.borderColor = "#965D62";
  document.getElementById("louisButton").style.borderColor = "#965D62";

  //font color
  document.getElementById("spaCeylonButton").style.color = "white";
  document.getElementById("louisButton").style.color = "white";
}
window.onload = "globalMarketPageContent";
