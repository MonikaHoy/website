const body = document.getElementById("body"); 
const r = document.getElementById("R"); //get the range inputs and make them variables 
const g = document.getElementById("G");
const b = document.getElementById("B");

//when sliding the range input, run the function "updateValue"
r.addEventListener('input', updateValue);
g.addEventListener('input', updateValue);
b.addEventListener('input', updateValue);    

//updates the value dependent on where the range slider is 
function updateValue(e) {
        let rNew = r.value;
        let gNew = g.value;
        let bNew = b.value;
        
        //update html string that defines background color on body.style with the new values 
        body.style = `background-color: rgb(${rNew}, ${gNew}, ${bNew})`;
}