/*
1. add event handler with the withdraw button
2. get the withdraw amount from the withdraw input field
2-5.  also make sere to convert the input value into a numberby using the parseFloat

3. get previous withdraw total

4. calculate total withdraw amount
4-5. set total withdraw amount

5. get the previous blanes total
6. calculate new blanes total
6-5. set the new blanes total

7. clear the input field

*/



document.getElementById('deposit-button').addEventListener('click', function () {
    /* 
        1. Get the element by id
        2. get the value from the element
        3. convert string value to a number
    */

    const getDepositAmount = document.getElementById('deposit-amount');
    const getDepositAmountValue = parseFloat(getDepositAmount.value);

    const getDepositPreAmount = document.getElementById('deposit');
    const getDepositPreAmountValue = parseFloat(getDepositPreAmount.innerText);

    const totalDepositAmount = getDepositAmountValue + getDepositPreAmountValue;

    getDepositPreAmount.innerText = totalDepositAmount;
    // ******************

    const mainBlanesString = document.getElementById('blanes');
    const mainBlanesNumber = parseFloat(mainBlanesString.innerText);
    const getTotalMainBlanes = mainBlanesNumber + getDepositAmountValue
    mainBlanesString.innerText = getTotalMainBlanes;

    // **************
    getDepositAmount.value = '';

})



document.getElementById('withdeaw-button').addEventListener('click', function () {

    /* 
    1. Get the element by id
    2. get the value from the element
    3. convert string value to a number
*/
    const getWithdeawSt ring = document.getElementById('withdraw-amount');
    const getWithdeawNumber = parseFloat(getWithdeawString.value);

    const getWithdeawPreString = document.getElementById('withdraw');
    const getWithdeawPreNumber = parseFloat(getWithdeawPreString.innerText);

    const totalWithdraw = getWithdeawNumber + getWithdeawPreNumber;
    getWithdeawPreString.innerText = totalWithdraw;

    // **********************

    const mainBlanesString = document.getElementById('blanes');
    const mainBlanesNumber = parseFloat(mainBlanesString.innerText);
    const getTotalMainBlanes = mainBlanesNumber - getWithdeawNumber;
    mainBlanesString.innerText = getTotalMainBlanes;

    // **************
    getWithdeawString.value = '';
})

