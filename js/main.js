let buttons = document.getElementsByClassName('btn');
let cg = document.querySelector('#container-general');

function changeShape(event) {
  let newClassName = event.target.className
    .split(' ')[1];
  cg.className = newClassName;
}

console.log(buttons);
for (let button of buttons) {
  console.log(button);
  button.addEventListener('click', changeShape, false)
}