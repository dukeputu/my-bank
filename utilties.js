/*
1. get the element by id
2. get the value from the element
3. convert string to value to a number
*/


function getInputValueById(inputId) {
    const inputField = document.getElementById(inputId);

    //input now string and i  convert number by using parseFloat
    const inputFieldNumber = parseFloat(inputField.value);
    inputField.value = '';
    

}


// this is  for perveus balencs
function getPrevesAmount(amountId) {
    const inputField = document.getElementById(amountId);

    //input now string and i  convert number by using parseFloat
    const inputFieldNumber = parseFloat(inputField.innerText);
    return inputFieldNumber;

}

function getTotalMainBlanes(elementId, inputValue) {
    const getTotalMainBlanesId = document.getElementById(elementId);
    getTotalMainBlanesId.innerText = inputValue;
    
}