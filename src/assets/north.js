function NorthContentFunction() {
  document.getElementById("northTopic").innerHTML = "North Province";
  document.getElementById("companyTopic").innerHTML = "North Companies";
  document.getElementById("SogoId").innerHTML = "Sogo Clothing Company";

  //background color
  document.getElementById("NorthContainer").style.backgroundColor = "#52734D";
  document.getElementById("SubContainer").style.backgroundColor = "#965D62";
  document.getElementById("SogoId").style.backgroundColor = "#277BC0";

  //font color
  document.getElementById("northTopic").style.color = "white";
  document.getElementById("companyTopic").style.color = "white";
  document.getElementById("SogoId").style.color = "white";

  //border color
  document.getElementById("SogoId").style.borderColor = "#277BC0";

  //text alignment
  document.getElementById("northTopic").style.textAlign = "center";
  document.getElementById("companyTopic").style.textAlign = "right";
}
window.onload = NorthContentFunction;
