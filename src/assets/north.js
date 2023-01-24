function NorthContentFunction() {
  document.getElementById("northTopic").innerHTML = "North Province";
  document.getElementById("companyTopic").innerHTML = "North Companies";
  document.getElementById("SogoId").innerHTML = "Sogo Clothing Company";
  document.getElementById("jewelId").innerHTML = "Happy Jewellery Company";

  //background color
  document.getElementById("NorthContainer").style.backgroundColor = "#52734D";
  document.getElementById("SubContainer").style.backgroundColor = "#965D62";
  document.getElementById("SogoId").style.backgroundColor = "#277BC0";
  document.getElementById("sogoHeading").style.backgroundColor = "#A6DCEF";
  document.getElementById("sogoData").style.backgroundColor = "#DDF3F5";
  document.getElementById("jewelId").style.backgroundColor = "#277BC0";
  document.getElementById("jewelData").style.backgroundColor = "#DDF3F5";
  document.getElementById("jewelHeading").style.backgroundColor = "#A6DCEF";

  //font color
  document.getElementById("northTopic").style.color = "white";
  document.getElementById("companyTopic").style.color = "white";
  document.getElementById("SogoId").style.color = "white";
  document.getElementById("jewelId").style.color = "white";

  //border color
  document.getElementById("SogoId").style.borderColor = "#277BC0";
  document.getElementById("jewelId").style.borderColor = "#277BC0";

  //text alignment
  document.getElementById("northTopic").style.textAlign = "center";
  document.getElementById("companyTopic").style.textAlign = "right";
}
window.onload = NorthContentFunction;

//hide and show sogo table content with button click
  function SogoButtonClick() {
    var x = document.getElementById("sogoData");

    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  //hide and show jewellery table content with button click
  function JewelButtonClick() {
    var x = document.getElementById("jewelData");

    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
