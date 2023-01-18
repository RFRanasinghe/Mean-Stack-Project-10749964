//                                  Western Province          JAVASCRIPT code
function WesternProContentFunction()
{
  document.getElementById("westernMainTopic").innerHTML = "Western Province";

  //background color
  document.getElementById("westernContainer").style.backgroundColor = "#083C5A";
  document.getElementById("companyContainer").style.backgroundColor = "#25A55F";

  //change font color
  document.getElementById("westernMainTopic").style.color = "#E4F4FD";
}
window.onload = WesternProContentFunction;
