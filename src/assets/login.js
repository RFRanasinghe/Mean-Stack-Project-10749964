function LoginContent() {
  document.getElementById("logId").innerHTML = "Login Page";
  document.getElementById("labelId").innerHTML = "Email";
  document.getElementById("usernameId").innerHTML = "Username";
  document.getElementById("loginBtn").innerHTML = "Log in";

  //text alignment
  document.getElementById("logId").style.textAlign = "center";

  //font size
  document.getElementById("labelId").style.fontSize = "24px";
  document.getElementById("usernameId").style.fontSize = "20px";
  document.getElementById("mailbox").style.fontSize = "20px";
  document.getElementById("unamebox").style.fontSize = "20px";
  document.getElementById("loginBtn").style.fontSize = "30px";

  //font style
  document.getElementById("mailbox").style.fontStyle = "italic";
  document.getElementById("unamebox").style.fontStyle = "italic";
  //document.getElementById("loginBtn").style.fontStyle = "bold";

  //color
  document.getElementById("logId").style.color = "#BCE29E";

  //background color
  document.getElementById("logContainer").style.backgroundColor = "#243763";
  document.getElementById("formContainer").style.backgroundColor = "#ADDDD0";

  //shadow color
   document.getElementById("formContainer").style.boxShadow = "10px 20px 30px lightblue";

  //margin
  document.getElementById("formContainer").style.marginLeft = "300px";
  document.getElementById("formContainer").style.marginTop = "100px";
  document.getElementById("loginBtn").style.marginTop = "30px";
  document.getElementById("loginBtn").style.marginLeft = "360px";
  document.getElementById("mailbox").style.marginLeft = "50px";
  document.getElementById("unamebox").style.marginLeft = "50px";

  //padding
  document.getElementById("logContainer").style.padding = "8px";
  document.getElementById("labelId").style.paddingLeft = "30px";
  document.getElementById("labelId").style.paddingTop = "10px";
  document.getElementById("usernameId").style.paddingLeft = "30px";
  document.getElementById("usernameId").style.paddingTop = "10px";
  document.getElementById("formContainer").style.paddingBottom = "30px";
  document.getElementById("loginBtn").style.padding = "6px";

  //width
  document.getElementById("logContainer").style.width = "100%";
  document.getElementById("formContainer").style.width = "60%";
  document.getElementById("mailbox").style.width = "50%";
  document.getElementById("unamebox").style.width = "50%";
  document.getElementById("loginBtn").style.width = "30%";

  //height
  document.getElementById("loginBtn").style.height = "30%";

  //border radius
  document.getElementById("loginBtn").style.borderRadius = "15px";
  document.getElementById("mailbox").style.borderRadius = "15px";
  document.getElementById("unamebox").style.borderRadius = "15px";
  document.getElementById("formContainer").style.borderRadius = "15px";
}
window.onload = LoginContent;

function AndriaProfile() {
  window.location.href = "/personal-profile-page";
}
