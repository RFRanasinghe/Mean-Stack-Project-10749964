//                                  Western Province          JAVASCRIPT code
function WesternProContentFunction()
{
  document.getElementById("westernMainTopic").innerHTML = "Western Province";
  document.getElementById("aliyaButtonShow").innerHTML = "Aliya Clothing Company";
  document.getElementById("mimosaShowButton").innerHTML = "Mimosa Clothing Company";

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
