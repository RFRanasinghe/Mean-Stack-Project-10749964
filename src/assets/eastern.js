function EasternContentLoad() {
  document.getElementById("easternTopic").innerHTML = "Eastern Province";
  document.getElementById("omegaTopic").innerHTML = "Omega Shipping Company";
  document.getElementById("kWorldTopic").innerHTML = "K World Software Company";

  //font size
  document.getElementById("omegaTopic").style.fontSize = "24px";
  document.getElementById("kWorldTopic").style.fontSize = "24px";

  //font color
  document.getElementById("easternTopic").style.color = "white";
  document.getElementById("omegaTopic").style.color = "white";
  document.getElementById("kWorldTopic").style.color = "white";

  //font style
  document.getElementById("omegaTopic").style.fontStyle = "italic";
  document.getElementById("kWorldTopic").style.fontStyle = "italic";

  //text alignment
  document.getElementById("easternTopic").style.textAlign = "center";

  //background color
  document.getElementById("EasternContainer").style.backgroundColor = "#52734D";
  document.getElementById("omegaTopic").style.backgroundColor = "#0081B4";
  document.getElementById("kWorldTopic").style.backgroundColor = "#0081B4";
  document.getElementById("omegaHeading").style.backgroundColor = "#FADA9D";
  document.getElementById("omegaData").style.backgroundColor = "#FBF1D3";
  document.getElementById("worldHeading").style.backgroundColor = "#FADA9D";
  document.getElementById("worldTable").style.backgroundColor = "#FBF1D3";

  //border color
  document.getElementById("omegaTopic").style.borderColor = "#0081B4";
  document.getElementById("kWorldTopic").style.borderColor = "#0081B4";

  //margin
  document.getElementById("omegaSubContainer").style.marginLeft = "600px";
  document.getElementById("omegaData").style.marginLeft = "600px";
  document.getElementById("kWorldSubContainer").style.marginLeft = "600px";
  document.getElementById("worldTable").style.marginLeft = "600px";

  //width
  document.getElementById("omegaTopic").style.width = "100%";
  document.getElementById("kWorldTopic").style.width = "100%";

  //padding
  document.getElementById("EasternContainer").style.padding = "6px";
  document.getElementById("omegaSubContainer").style.paddingTop = "8px";
  document.getElementById("omegaTopic").style.padding = "6px";
  document.getElementById("kWorldTopic").style.padding = "6px";
  document.getElementById("kWorldSubContainer").style.paddingTop = "10px";

  //fixed image
  document.getElementById("esId").style.backgroundAttachment = "fixed";
}
  window.onload = EasternContentLoad;
