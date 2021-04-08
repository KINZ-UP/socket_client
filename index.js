const socket = io.connect("http://13.125.251.188:8080");

socket.on("connect", function () {
  const name = prompt("반갑습니다.", "");

  if (!name) {
    name = "unknown";
  }

  socket.emit("newUser", name);
});

socket.on("update", function (data) {
  console.log(`${data.name}: ${data.message}`);
});

function send() {
  const message = document.getElementById("test").value;
  document.getElementById("test").value = "";
  socket.emit("message", { type: "message", message: message });
}
