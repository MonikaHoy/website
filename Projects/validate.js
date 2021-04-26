const yesElement = document.getElementById("ok").classList;
const noElement = document.getElementById("not").classList;
const input = document.getElementById("input");

input.addEventListener('input', validate);
//validate when input is changed 

function validate() {
    //trim the value of input for whitespace in beginning and end. Split at every "space"
    const words = input.value.trim().split(" ");

    //hide the two elements 
    yesElement.add("hidden");
    noElement.add("hidden");

    if (
        words.length === 2 && //check for two words 
        words[0].length >= 3 && //check if first word is equal or longer than 3 characters
        words[1].length >= 3 //check if second word is equal or longer than 3 characters
    ) {
         yesElement.remove("hidden"); //if true, show yesElement 
    } else {
        noElement.remove("hidden"); //if false, show noElement 
    }
};



