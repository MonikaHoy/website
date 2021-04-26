const date = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");
const button = document.getElementById("button");
const hidden = document.getElementById("hidden-screen").classList;
const ageScreen = document.getElementById("age-screen").classList;

button.addEventListener('click', checkAge);

function checkAge () {
    if (date.value === "") {
        return
    }
    if (month.value === "") {
        return
    }
    if (year.value === "") {
        return
    }

    const birthDate = new Date();
    birthDate.setDate(date.value);
    birthDate.setMonth(month.value);
    birthDate.setFullYear(year.value);

    const currentDate = new Date();

    const age = (currentDate - birthDate)/1000/60/60/24/365;

    if (age >= 18) {
        hidden.remove("hidden");
        ageScreen.add("hidden");
    } else {
        alert("Sneaky! You are not old enough. Go to disney.com ❤️");
    }
}

function renderOption(input) {
    //create html string for select option 
    return `<option value="${input}">${input}</option>`;
}


function createDay () {

    //create numbers from 1-31
    for (let i = 1; i <= 31; i++) {

        //render values from for loop into html string using the renderOption function and i(days) as parameter
        const dayHtml = renderOption(i);

        //add html string to the inner html of the select days options
        date.innerHTML += dayHtml;
    }
}

//call function 
createDay();

function createYear () {
    for (let index = 2021; index >= 1900; index--) {
        const yearHtml = renderOption(index);
        year.innerHTML += yearHtml;
    }
}

//call function 
createYear();




