window.addEventListener("load", function () {
const progress = document.getElementById("progress");
const button = document.getElementById("button");

function randomValue() {
    return Math.random();
};

button.addEventListener("click",function () {
    progress.value=randomValue();
})
})