function SabaragamuwaContent() {
  document.getElementById("sabaProTopic").innerHTML = "Sabaragamuwa Province Market Area";
  document.getElementById("kyraxBtn").innerHTML = "Kyrax Tech Company";
  document.getElementById("grapBtn").innerHTML = "AMG Graphite Company";

  //text align
  document.getElementById("sabaProTopic").style.textAlign = "center";

  //background color
  document.getElementById("sabaContainer").style.backgroundColor = "#393E46";
  document.getElementById("kyraxBtn").style.backgroundColor = "#61B15A";
  document.getElementById("grapBtn").style.backgroundColor = "#61B15A";
  document.getElementById("kynaxHeading").style.backgroundColor = "#E4E978";
  document.getElementById("grapHeading").style.backgroundColor = "#E4E978";
  document.getElementById("kynaxData").style.backgroundColor = "#F2F4C0";
  document.getElementById("grapData").style.backgroundColor = "#F2F4C0";

  //border color
  document.getElementById("kyraxBtn").style.borderColor = "#61B15A";
  document.getElementById("grapBtn").style.borderColor = "#61B15A";

  //font color
  document.getElementById("sabaProTopic").style.color = "white";
  document.getElementById("kyraxBtn").style.color = "white";
  document.getElementById("grapBtn").style.color = "white";

  //padding
  document.getElementById("sabaProTopic").style.padding = "6px";
  document.getElementById("kyraxBtn").style.padding = "6px";
  document.getElementById("grapBtn").style.padding = "6px";
  document.getElementById("grapContainer").style.paddingTop = "10px";

  //margin
  document.getElementById("kyraxBtn").style.marginLeft = "600px";
  document.getElementById("kynaxData").style.marginLeft = "600px";
  document.getElementById("grapData").style.marginLeft = "600px";
  document.getElementById("grapBtn").style.marginLeft = "600px";

  //width
  document.getElementById("kyraxBtn").style.width = "60.5%";
  document.getElementById("grapBtn").style.width = "60.5%";

  //font size
  document.getElementById("kyraxBtn").style.fontSize = "24px";
  document.getElementById("grapBtn").style.fontSize = "24px";
}
  window.onload = SabaragamuwaContent;

  //kyrax on mouse hover function
  function KyraxOnMouse() {
  document.getElementById("kyraxBtn").style.backgroundColor = "#07689F";
  }

  //graphite on mouse hover function
function GraphOnMouse() {
    document.getElementById("grapBtn").style.backgroundColor = "#07689F";
  }

  //kyrac mouse out hover function
  function KyraxMouseOut() {
  document.getElementById("kyraxBtn").style.backgroundColor = "#61B15A";
  }

  //graphite mouse out hover function
  function GraphMouseOut() {
    document.getElementById("grapBtn").style.backgroundColor = "#61B15A";
  }

  //hide and show kyrax tec table content with button click
  function KyraxButtonClick() {
    var x = document.getElementById("kynaxData");

    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  //hide and show graphite table content with button click
  function GraphiteButtonClick() {
    var x = document.getElementById("grapData");

    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
