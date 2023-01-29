function loadSocket(brokerType) {
  var socketUrl = "http://localhost:3000";
  console.log("create socket 30000 | broker :"+brokerType);
  var connectionOptions = {

    "reconnectionAttempts": "Infinity",
    "timeout": 10000,
    "transports": ['websocket', 'polling', 'flashsocket']
  };



  let socket = io(socketUrl, connectionOptions);

  socket.addEventListener("received message", function (msg) {
    var brokerName = msg.toString().split("&")[0];
    var message = msg.toString().split("&")[1];
    if (brokerName == brokerType.toString()) {
      document.querySelector("#board").insertAdjacentHTML("beforeend", "<p class='message'>Received: " + message + "</p>");
    }
    });

  var sendBtn = document.getElementById("send");
  sendBtn.addEventListener("click", function () {

    let msg = document.getElementById("msg").value;
    socket.emit("send message", brokerType+"&"+msg);
    console.log(msg);
    $("#board").append("<p class=\"message sent\">Sent: " + msg + "</p>");
    //document.getElementById("board").append("<p class=\"message sent\">" + msg + "</p>");
    document.getElementById("msg").innerHTML = "";
  });


}
