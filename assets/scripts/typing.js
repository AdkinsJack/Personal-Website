/* Typing Effect */
const typing = document.getElementById('typing');
const view = window.location.pathname.slice(1) || ' ';
const typeVals = [];
switch (view) {
  case ' ':
  case 'index.html':
    typeVals.push('adkinsjack.com', 'python', 'javascript', 'css', 'html', 'adkinsjack.com');
    break;
  case 'projects.html':
    typeVals.push('adkinsjack.com', 'SQL', 'react', 'node', 'adkinsjack.com');
    break;
}

let idx = -1;
let word = '';
let message = typing.innerHTML;
let mode = true;
let delay = 500;
let timeout;

const updateText = (txt) => {
  typing.innerHTML = txt;
};

const writer = () => {
  message += word.slice(0, 1);
  word = word.substr(1);
  updateText(message);
  if (!word.length && idx === typeVals.length - 1) {
    window.clearTimeout(timeout);
    return;
  }
  if (!word.length) {
    mode = false;
    delay = 1000;
  } else {
    delay = 30 + Math.round(Math.random() * 50);
  }
};

const deleter = () => {
  message = message.slice(0, -1);
  updateText(message);
  if (!message.length) {
    mode = true;
    delay = 750;
  } else {
    delay = 30 + Math.round(Math.random() * 100);
  }
};

const typer = () => {
  if (!message) {
    idx++;
    word = typeVals[idx];
    message = '';
    mode = true;
  }
  switch (mode) {
    case true:
      writer();
      break;
    case false:
      deleter();
      break;
  }
  timeout = window.setTimeout(typer, delay);
};
timeout = window.setTimeout(typer, delay);
