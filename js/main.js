let buttons = document.getElementsByClassName('btn');
let cg = document.querySelector('#container-general');

function changeShape(event) {
  let newClassName = event.target.className.split(' ')[1];
  cg.className = newClassName;
}

for (let button of buttons) {
  button.addEventListener('click', changeShape, false)
}