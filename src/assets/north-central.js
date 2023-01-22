//north central province page content
function NorthCentralContent() {
  document.getElementById("northCenMainTopic").innerHTML = "North Central Province Market Area";
  document.getElementById("techTopicButton").innerHTML = "TechScroll Company";
  document.getElementById("diaryTopicButton").innerHTML = "Ulankuluma Diary Company";

  //text alignment
  document.getElementById("northCenMainTopic").style.textAlign = "center";
  document.getElementById("techTopicButton").style.textAlign = "right";
  document.getElementById("diaryTopicButton").style.textAlign = "right";

  //element alignment
  document.getElementById("techTopicButton").style.marginLeft = "590px";
  document.getElementById("diaryTopicButton").style.marginLeft = "590px";

  //font size
  document.getElementById("techTopicButton").style.fontSize = "32px";
  document.getElementById("diaryTopicButton").style.fontSize = "32px";

  //length
  document.getElementById("techTopicButton").style.width = "61%";
  document.getElementById("diaryTopicButton").style.width = "61%";

  //background color
  document.getElementById("northCentralContain").style.backgroundColor = "#C21010";
  document.getElementById("techTopicButton").style.backgroundColor = "#224B0C";
  document.getElementById("techHeading").style.backgroundColor = "#B1D7B4";
  document.getElementById("techData").style.backgroundColor = "#F7F6DC";
  document.getElementById("diaryTopicButton").style.backgroundColor = "#224B0C";
  document.getElementById("foodHeading").style.backgroundColor = "#B1D7B4";
  document.getElementById("foodData").style.backgroundColor = "#F7F6DC";

  //border color
  document.getElementById("techTopicButton").style.borderColor = "#224B0C";
  document.getElementById("diaryTopicButton").style.borderColor = "#224B0C";
  //font color
  document.getElementById("techTopicButton").style.color = "white";
  document.getElementById("diaryTopicButton").style.color = "white";

  //font style
  document.getElementById("techTopicButton").style.fontStyle = "italic";
  document.getElementById("diaryTopicButton").style.fontStyle = "italic";

  //padding
  document.getElementById("northCentralContain").style.padding = "8px";
  document.getElementById("techTopicButton").style.padding = "6px";
}
  window.onload = NorthCentralContent;
