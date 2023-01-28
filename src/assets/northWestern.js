function NorthWesternContent() {
  document.getElementById("northWes").innerHTML = "North Western Market Area";
  document.getElementById("cyclomaxBtn").innerHTML = "Cyclomax Tech Company";
  document.getElementById("jiffyBtn").innerHTML = "Jiffy Product Company";

  //text align
  document.getElementById("northWes").style.textAlign = "center";

  //background color
  document.getElementById("headContainer").style.backgroundColor = "#86C8BC";
  document.getElementById("cyclomaxBtn").style.backgroundColor = "#C0EEE4";
  document.getElementById("jiffyBtn").style.backgroundColor = "#C0EEE4";
  document.getElementById("cycloHeading").style.backgroundColor = "#FAAB78";
  document.getElementById("cycloData").style.backgroundColor = "#FAEAB1";
  document.getElementById("jiffyHeading").style.backgroundColor = "#FAAB78";
  document.getElementById("jiffyData").style.backgroundColor = "#FAEAB1";

  //border color
  document.getElementById("cyclomaxBtn").style.borderColor = "#C0EEE4";
  document.getElementById("jiffyBtn").style.borderColor = "#C0EEE4";

  //padding
  document.getElementById("headContainer").style.padding = "6px";
  document.getElementById("cyclomaxBtn").style.padding = "6px";
  document.getElementById("jiffyBtn").style.padding = "6px";
  document.getElementById("cycloContainer").style.paddingTop = "8px";
  document.getElementById("jiffyBtnContainer").style.paddingTop = "10px";

  //margin
  document.getElementById("cyclomaxBtn").style.marginLeft = "600px";
  document.getElementById("cycloData").style.marginLeft = "600px";
  document.getElementById("jiffyBtn").style.marginLeft = "600px";
  document.getElementById("jiffyData").style.marginLeft = "600px";

  //width
  document.getElementById("cyclomaxBtn").style.width = "60.4%";
  document.getElementById("jiffyBtn").style.width = "60.4%";

  //font size
  document.getElementById("cyclomaxBtn").style.fontSize = "24px";
  document.getElementById("jiffyBtn").style.fontSize = "24px";

}
  window.onload = NorthWesternContent;

  //on mouse hover in cyclomax table
function CycloOnMouse() {
  document.getElementById("cyclomaxBtn").style.backgroundColor = "#68B984";
  document.getElementById("cyclomaxBtn").style.color = "white";
}

function JiffyOnMouse() {
  document.getElementById("jiffyBtn").style.backgroundColor = "#68B984";
  document.getElementById("jiffyBtn").style.color = "white";
}

//out mouse hover in cyclomax table
function CycloOutMouse() {
  document.getElementById("cyclomaxBtn").style.backgroundColor = "#C0EEE4";
  document.getElementById("cyclomaxBtn").style.color = "black";
}

function JiffyOutMouse() {
  document.getElementById("jiffyBtn").style.backgroundColor = "#C0EEE4";
  document.getElementById("jiffyBtn").style.color = "black";
}
