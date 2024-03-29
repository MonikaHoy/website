const inputName = document.getElementById("name");
const inputCost = document.getElementById("cost");
const addCost = document.getElementById("add-button");
const table = document.getElementById("table-input");
const total = document.getElementById("total");

addCost.addEventListener('click', function() {
    addMoney();
    clear();
})

inputCost.addEventListener("keyup", function (e) {
    if (e.key === 'Enter') {
        addMoney();
        clear();
    }
});

inputName.addEventListener("keyup", function (e) {
    if (e.key === 'Enter') {
        addMoney();
        clear();
    }
});

//function declarations 
function clear () {
    inputName.value = "";
    inputCost.value = "";
}

function setFocus () {
    inputName.focus(); 
}

function sum () {
    const a = Number(inputCost.value);
    const b = Number(total.value);
    let c = Number(total.value) + Number(inputCost.value);
    total.value = c + "$"; 
}

function addMoney () {
    const person = inputName.value;
    const cost = inputCost.value;

    if (person === "") {
        return 
    }

    const newContri = {
        name: person, 
        cost: cost
    }

    sum();

    contributions.push(newContri);

    renderContributions();

    setFocus();
}

//create an array
let contributions = [] 

function renderCon(person, cost) {
    return `<tr>
    <td>
        <input type="text" value="${person}"/>
    </td>
    <td>
        <input type="text" value="${cost}$"/>
    </td>`; 	
}

//create function that renders all attendees to html string
function renderContributions () {
    let theFinalHtml = "";

    for(let i = 0; i < contributions.length; i++) {

    const newContribution = contributions[i];

    const newHtml = renderCon(newContribution.name, newContribution.cost);

    theFinalHtml += newHtml;
    }

    table.innerHTML = theFinalHtml; 
};

//call function so screen is not empty when opening 
renderContributions();




