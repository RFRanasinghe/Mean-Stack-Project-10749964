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

  //onmouse hover
  function MukuwaMouseOver() {
    document.getElementById("subTopic").style.backgroundColor = "#EA5C2B";
    document.getElementById("subTopic").style.color = "white";
}

  //onmouse hover
  function EngMouseOver() {
    document.getElementById("engId").style.backgroundColor = "#EA5C2B";
    document.getElementById("engId").style.color = "white";
  }

  //mouseout hover
  function MukuwaMouseOut() {
    document.getElementById("subTopic").style.backgroundColor = "#F8BD7F";
    document.getElementById("subTopic").style.color = "black";
}

  //mouseout hover
  function EngMouseOut() {
    document.getElementById("engId").style.backgroundColor = "#F8BD7F";
    document.getElementById("engId").style.color = "black";
  }

  //hide and show mukuwa table content with button click
  function MukuwaButtonClick() {
    var x = document.getElementById("mukuwaData");

    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  //hide and show eng table content with button click
  function EngButtonClick() {
    var x = document.getElementById("engData");

    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
