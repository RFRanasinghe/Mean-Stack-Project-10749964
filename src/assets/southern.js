function SouthernContent() {
  document.getElementById("topicHead").innerHTML = "Southern Province Market Area";
  document.getElementById("MegaId").innerHTML = "Suthern Mega Factory";

  //text alignment
  document.getElementById("topicHead").style.textAlign = "center";

  //background color
  document.getElementById("HeadContainer").style.backgroundColor = "#31087B";
  document.getElementById("MegaId").style.backgroundColor = "#80558C";
  document.getElementById("megaHeading").style.backgroundColor = "#FFCBCB";
  document.getElementById("megaData").style.backgroundColor = "#E7FBBE";

  //border color
  document.getElementById("MegaId").style.borderColor = "#80558C";

  //padding
  document.getElementById("HeadContainer").style.padding = "8px";
  document.getElementById("MegaId").style.padding = "6px";

  //margin
  document.getElementById("MegaId").style.marginLeft = "600px";
  document.getElementById("megaData").style.marginLeft = "600px";

  //font size
  document.getElementById("MegaId").style.fontSize = "24px";

  //width
  document.getElementById("MegaId").style.width = "60.5%";

  //font color
  document.getElementById("topicHead").style.color = "white";
  document.getElementById("MegaId").style.color = "white";
}
window.onload = SouthernContent;

//on mouse hover function
function MegaOnMouse() {
  document.getElementById("MegaId").style.backgroundColor = "#B93160";
}

//out mouse hover function
function MegaOutMouse() {
  document.getElementById("MegaId").style.backgroundColor = "#80558C";
}

//hide and show suthern table content with button click
  function MegaButtonClick() {
    var x = document.getElementById("megaData");

    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
