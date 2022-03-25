let buttons = document.getElementsByClassName('btn');
let cg = document.querySelector('#container-general');
let currentButton;

function changeShape(event) {
  let newClassName = event.target.className.split(' ')[1];
  cg.className = newClassName;
 
  currentButton?.classList.remove('active');
  if (currentButton === event.target) {
    currentButton = undefined;
    cg.className = '';
  } else {
    event.target.classList.add('active');
    currentButton = event.target;
  }
}

for (let button of buttons) {
  button.addEventListener('click', changeShape, false)
}