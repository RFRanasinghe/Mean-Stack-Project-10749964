function CentralLoadContent() {
  document.getElementById("centralTopic").innerHTML = "Central Province";
  document.getElementById("subTopic").innerHTML = "Mukuwa Technical Company";

  //alignment
  document.getElementById("centralTopic").style.textAlign = "center";
  document.getElementById("companyContainer").style.textAlign = "right";

  //background color
  document.getElementById("centralContainer").style.backgroundColor = "#AC0D0D";
  document.getElementById("companyContainer").style.backgroundColor = "#F8BD7F";
  document.getElementById("mukuwaHeading").style.backgroundColor = "#AFA939";
  document.getElementById("mukuwaData").style.backgroundColor = "#F2F3F3";

  //font color
  document.getElementById("centralTopic").style.color = "white";

  //font size
  document.getElementById("subTopic").style.fontSize = "32px";
}
   window.onload = CentralLoadContent;
