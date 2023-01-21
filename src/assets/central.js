function CentralLoadContent() {
  document.getElementById("centralTopic").innerHTML = "Central Province";
  document.getElementById("subTopic").innerHTML = "Mukuwa Technical Company";
  document.getElementById("engId").innerHTML = "NTC Engineering Company";

  //alignment
  document.getElementById("centralTopic").style.textAlign = "center";
  document.getElementById("companyContainer").style.textAlign = "right";
  document.getElementById("engContainer").style.textAlign = "right";

  //background color
  document.getElementById("centralContainer").style.backgroundColor = "#AC0D0D";
  document.getElementById("subTopic").style.backgroundColor = "#F8BD7F";
  document.getElementById("mukuwaHeading").style.backgroundColor = "#AFA939";
  document.getElementById("mukuwaData").style.backgroundColor = "#F2F3F3";
  document.getElementById("engId").style.backgroundColor = "#F8BD7F";
  document.getElementById("engHeading").style.backgroundColor = "#AFA939";
  document.getElementById("engData").style.backgroundColor = "#F2F3F3";

  //border color
  document.getElementById("subTopic").style.borderColor = "#F8BD7F";
  document.getElementById("engId").style.borderColor = "#F8BD7F";

  //padding
  document.getElementById("engContainer").style.padding = "8px";
  document.getElementById("centralContainer").style.padding = "8px";
  document.getElementById("companyContainer").style.padding = "6px";

  //width
  document.getElementById("subTopic").style.width = "100%";
  document.getElementById("engId").style.width = "56%";

  //font color
  document.getElementById("centralTopic").style.color = "white";

  //font size
  document.getElementById("subTopic").style.fontSize = "32px";
  document.getElementById("engId").style.fontSize = "32px";
}
   window.onload = CentralLoadContent;
