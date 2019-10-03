let header = document.getElementById("webpage-header");
header.addEventListener("click", function(event) {
  let text = event.target.innerText;
  alert("You cicked me!!!!" + text);
});

window.onload();
