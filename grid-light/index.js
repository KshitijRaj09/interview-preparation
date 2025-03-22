console.log('loaded js')

const gridSize = 3// document.getElementById('grid-size');
const containerBox = document.getElementById('container');
containerBox.style.grid = `repeat(${gridSize}, 60px) / auto-flow 100px`;
const stack = [];

const showStack = document.getElementById('show-stack');

const removeFromStack = () => {
   const timerId = setInterval(() => {
      if (stack.length < 1) {
         clearInterval(timerId);
         containerBox.childNodes.forEach(element => element.disabled = false)
      }
      const elementId = stack.pop();
      const element = document.getElementById(elementId);
      element?.classList.remove('changeBackgroundColor');
      showStack.innerHTML = stack.toString();
   }, 300);
   
}
const changeColour = (event) => {
   const element = event.target;
   element.classList.add('changeBackgroundColor');
   stack.push(element.id);
   element.disabled = true;
   showStack.innerHTML = stack.toString();
   if (stack.length === (gridSize * gridSize) - 1) {
      removeFromStack();
   }
}


for (let i = 0; i < gridSize * gridSize; i++) {
   const box = document.createElement('button');
   box.style.height = "30px";
   box.style.width = "30px";
   box.style.border = "2px solid black"
   containerBox.appendChild(box);
   box.id = i;
   if (i === Math.floor((gridSize * gridSize) / 2)) {
      box.style.visibility = "hidden";
   }
   box.addEventListener('click', changeColour);
}

