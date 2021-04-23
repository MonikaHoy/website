const firstInput = document.getElementById("firstInput");
const secondInput = document.getElementById("secondInput");
const result = document.getElementById("result");
const operators = document.getElementById("operators");

operators.addEventListener('input', calculator);
firstInput.addEventListener('input', calculator);
secondInput.addEventListener('input', calculator);
    
function calculator () {
    const aNumb = Number(firstInput.value);
    const bNumb = Number(secondInput.value);

    if (
        operators.value === "add"
    )
    {
        let endResult = aNumb + bNumb;
        result.value = endResult;
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
    