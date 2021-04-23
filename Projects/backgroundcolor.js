const body = document.body;
body.style = "background-color: color";
let width = window.innerWidth;
let height = window.innerHeight; 

window.addEventListener('resize', function(e){
    const newWidth = window.innerWidth;
    const newHeight = window.innerHeight; 
    width = newWidth;
    height = newHeight;
});

document.addEventListener('mousemove', (event) => {
    const xCord = event.clientX;
    const yCord = event.clientY;

    const xPerc = (xCord / width)*360;
    const yPerc = (yCord / height)*100;

    body.style = `background-color: hsl(${xPerc}, ${yPerc}%, 50%)`;
  
});