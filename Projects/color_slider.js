const body = document.getElementById("body"); 
const r = document.getElementById("R"); 
const g = document.getElementById("G");
const b = document.getElementById("B");

r.addEventListener('input', updateValue);
g.addEventListener('input', updateValue);
b.addEventListener('input', updateValue);    

function updateValue(e) {
        let rNew = r.value;
        let gNew = g.value;
        let bNew = b.value;
        
        body.style = `background-color: rgb(${rNew}, ${gNew}, ${bNew})`;
}