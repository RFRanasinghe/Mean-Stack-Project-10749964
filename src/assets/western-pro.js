//                                  Western Province          JAVASCRIPT code
function WesternProContentFunction()
{
  document.getElementById("westernMainTopic").innerHTML = "Western Province";
  document.getElementById("aliyaButtonShow").innerHTML = "Aliya Clothing Company";
  document.getElementById("mimosaShowButton").innerHTML = "Mimosa Clothing Company";
  document.getElementById("subTopic").innerHTML = "Wester Province-Clothing Companies";

  //background color
  document.getElementById("westernContainer").style.backgroundColor = "#083C5A";
  document.getElementById("companyContainer").style.backgroundColor = "#25A55F";
  document.getElementById("odelHeading").style.backgroundColor = "#FE9801";
  document.getElementById("odelData").style.backgroundColor = "#F0EEB1";
  document.getElementById("aliyaButtonShow").style.backgroundColor = "#277BC0";
  document.getElementById("mimosaShowButton").style.backgroundColor = "#277BC0";

  //change font color
  document.getElementById("westernMainTopic").style.color = "#E4F4FD";
  document.getElementById("aliyaButtonShow").style.color = "white";
  document.getElementById("mimosaShowButton").style.color = "white";

  //border color
  document.getElementById("aliyaButtonShow").style.borderColor = "#277BC0";
  document.getElementById("mimosaShowButton").style.borderColor = "#277BC0";
}
window.onload = WesternProContentFunction;

//on mouse hover function
function AliyaOnMouseHover() {
  document.getElementById("aliyaButtonShow").style.backgroundColor = "#4FD3C4";
  document.getElementById("aliyaButtonShow").style.borderColor = "#4FD3C4";
}

function MimosaOnMouseHover() {
  document.getElementById("mimosaShowButton").style.backgroundColor = "#4FD3C4";
  document.getElementById("mimosaShowButton").style.borderColor = "#4FD3C4";
}

//mouse out hover function
function AliyaMouseOutHover() {
  document.getElementById("aliyaButtonShow").style.backgroundColor = "#277BC0";
  document.getElementById("aliyaButtonShow").style.borderColor = "#277BC0";
}

function MimosaMouseOutHover() {
  document.getElementById("mimosaShowButton").style.backgroundColor = "#277BC0";
  document.getElementById("mimosaShowButton").style.borderColor = "#277BC0";
}

//hide and show aliya ceylon table content with button click
function AliyaButtonClick() {
  var x = document.getElementById("aliyaTblId");

  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

//hide and show mimosa ceylon table content with button click
function MimosaButtonClick() {
  var x = document.getElementById("mimosaTblId");

  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
