function ProfileContent() {
  document.getElementById("ProTitle").innerHTML = "Welcome to registered Profiles";

  //alignment
  document.getElementById("ProTitle").style.textAlign = "center";

  //background color
  document.getElementById("TitleContainer").style.backgroundColor = "#59CE8F";
  document.getElementById("andriaHeading").style.backgroundColor = "#ACB992";
  document.getElementById("andriaData").style.backgroundColor = "#F4FCD9";

  //padding
  document.getElementById("TitleContainer").style.padding = "10px";

  //margin
  document.getElementById("proContainer").style.marginLeft = "30px";

  //font size
  document.getElementById("andriaHeading").style.fontSize = "26px";
}
  window.onload = ProfileContent;
