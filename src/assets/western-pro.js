//                                  Western Province          JAVASCRIPT code
function WesternProContentFunction()
{
  document.getElementById("westernMainTopic").innerHTML = "Western Province";
  document.getElementById("aliyaButtonShow").innerHTML = "Aliya Clothing Company";

  //background color
  document.getElementById("westernContainer").style.backgroundColor = "#083C5A";
  document.getElementById("companyContainer").style.backgroundColor = "#25A55F";
  document.getElementById("odelHeading").style.backgroundColor = "#FE9801";
  document.getElementById("odelData").style.backgroundColor = "#F0EEB1";

  //change font color
  document.getElementById("westernMainTopic").style.color = "#E4F4FD";
}
window.onload = WesternProContentFunction;
