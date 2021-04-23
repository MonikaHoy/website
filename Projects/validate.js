const yesElement = document.getElementById("ok").classList;
const noElement = document.getElementById("not").classList;
const input = document.getElementById("input");

input.addEventListener('input', validate);

function validate() {
    const words = input.value.trim().split(" ");

    yesElement.add("hidden");
    noElement.add("hidden");

    if (
        words.length === 2 && 
        words[0].length >= 3 && 
        words[1].length >= 3
    ) {
         yesElement.remove("hidden");
    } else {
        noElement.remove("hidden");
    }
};



