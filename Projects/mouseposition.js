const xBox = document.getElementById("box1");
const yBox = document.getElementById("box2");
const xBoxPercent = document.getElementById("box3");
const yBoxPercent = document.getElementById("box4");
let width = window.innerWidth;
let height = window.innerHeight; 

function noDecimal(decimalValue) {
    return Math.round(decimalValue);
};

window.addEventListener('resize', function(e){
    const newWidth = window.innerWidth;
    const newHeight = window.innerHeight; 
    width = newWidth;
    height = newHeight;
});

document.addEventListener('mousemove', (event) => {
     const xCord = event.clientX;
     const yCord = event.clientY;
     xBox.value = xCord;
     yBox.value = yCord;

     const xPerc = (xCord / width)*100;
     const yPerc = (yCord / height)*100;
     const x = noDecimal(xPerc);
     const y = noDecimal(yPerc);
     xBoxPercent.value = x;
     yBoxPercent.value = y;
});







