let enter = document.getElementById("enter");
let text = document.getElementById("text");
function clearText() {
  text.value = "";
}
function eventText() {
  let value = text.value;
  let li = document.createElement("li");
  li.innerHTML = value;
  clearText();
  let list = document.getElementById('list');

  list.prepend(li);
}
enter.onclick = eventText;
