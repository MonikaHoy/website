const firstInput = document.getElementById("firstInput");
const secondInput = document.getElementById("secondInput");
const result = document.getElementById("result");
const operators = document.getElementById("operators");

//run calculator when input is changed on operator, first or second input box
operators.addEventListener('input', calculator);
firstInput.addEventListener('input', calculator);
secondInput.addEventListener('input', calculator);
    
function calculator () {
    //convert input values from string to number 
    const aNumb = Number(firstInput.value);
    const bNumb = Number(secondInput.value);

    if (
        operators.value === "add" //if "+" with the html value "add" is chosen 
    )
    {
        let endResult = aNumb + bNumb; //..add the numbers in the two boxes 
        result.value = endResult; //update the result box value with result of calculation
    }
    if (
        operators.value === "sub"
    )
    {
        let endResult = aNumb - bNumb;
        result.value = endResult;
    } 
    if (
        operators.value === "multi"
    )
    {
        let endResult = aNumb * bNumb;
        result.value = endResult;
    }
    if (
        operators.value === "divi"
    )
    {
        let endResult = aNumb / bNumb;
        result.value = endResult;
    }     
}
    