//north central province page content
function NorthCentralContent() {
  document.getElementById("northCenMainTopic").innerHTML = "North Central Province Market Area";
  document.getElementById("techTopicButton").innerHTML = "TechScroll Company";

  //text alignment
  document.getElementById("northCenMainTopic").style.textAlign = "center";
  document.getElementById("techTopicButton").style.textAlign = "right";

  //element alignment
  document.getElementById("techTopicButton").style.marginLeft = "590px";

  //font size
  document.getElementById("techTopicButton").style.fontSize = "32px";

  //length
  document.getElementById("techTopicButton").style.width = "61%";

  //background color
  document.getElementById("northCentralContain").style.backgroundColor = "#C21010";
  document.getElementById("techTopicButton").style.backgroundColor = "#224B0C";
  document.getElementById("techHeading").style.backgroundColor = "#B1D7B4";
  document.getElementById("techData").style.backgroundColor = "#F7F6DC";

  //font color
  document.getElementById("techTopicButton").style.color = "white";

  //font style
   document.getElementById("techTopicButton").style.fontStyle = "italic";

  //padding
  document.getElementById("northCentralContain").style.padding = "8px";
  document.getElementById("techTopicButton").style.padding = "6px";
}
  window.onload = NorthCentralContent;
