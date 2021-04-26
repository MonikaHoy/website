const body = document.body;
body.style = "background-color: color";
let width = window.innerWidth;
let height = window.innerHeight; 

window.addEventListener('resize', function(e){
    //update screen size if window is resized 
    const newWidth = window.innerWidth;
    const newHeight = window.innerHeight; 
    width = newWidth;
    height = newHeight;
});

document.addEventListener('mousemove', (event) => {
    //get x and y coordinates  
    const xCord = event.clientX;
    const yCord = event.clientY;

    //turn the coordinate values into percent
    const xPerc = (xCord / width)*360; //multi with 360 (highest hue value in hsl)
    const yPerc = (yCord / height)*100;

    //update string that defines backgroundcolor on body.style
    body.style = `background-color: hsl(${xPerc}, ${yPerc}%, 50%)`;
  
});