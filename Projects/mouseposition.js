const xBox = document.getElementById("box1"); 
const yBox = document.getElementById("box2");
const xBoxPercent = document.getElementById("box3");
const yBoxPercent = document.getElementById("box4");
let width = window.innerWidth; //get inner with of the window 
let height = window.innerHeight; //get inner height of window 

function noDecimal(decimalValue) {
//make function that rounds up to nearest no-decimal number
    return Math.round(decimalValue);
};

window.addEventListener('resize', function(e){
//handle resize, by setting a new width & height when resizing window 
    const newWidth = window.innerWidth;
    const newHeight = window.innerHeight; 
    width = newWidth;
    height = newHeight;
});

document.addEventListener('mousemove', (event) => {
//get the x and y coordinates when the mouse moves 
     const xCord = event.clientX;
     const yCord = event.clientY;
     
//add coordinate values to top boxes 
     xBox.value = xCord;
     yBox.value = yCord;

//make coordinates into percent of screen width(for x) and height(for y)
     const xPerc = (xCord / width)*100;
     const yPerc = (yCord / height)*100;

//remove decimals from that value 
     const x = noDecimal(xPerc);
     const y = noDecimal(yPerc);
     
//add percent coordinate values to bottom boxes 
     xBoxPercent.value = x;
     yBoxPercent.value = y;
});







