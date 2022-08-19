document.getElementById("deposit-button").addEventListener("click", function () {
    /*
    1. get the element by id
    2. get the value from the element
    3.convert  string value to a number
    */
    const depositInput = getInputValueById('deposit-amount');
    /*
    1. get previous deposit total by id
    */
    const getDepositPerAmount = getPrevesAmount('deposit');


    // calculate new deposit total
    const totalDepositAmount = getDepositPerAmount + depositInput;

    //set deposit total value
    getTotalMainBlanes('deposit', totalDepositAmount)

    // get previous balance by using the function
    const getBlanesPerAmount = getPrevesAmount('blanes');

    // calculate new  balance total
    const totalBalanceAmount = getBlanesPerAmount + depositInput;

    //set balance total value
    getTotalMainBlanes('blanes', totalBalanceAmount)


})

/*
1. add withdraw button event handler
2. get withdraw amount by using  getInputValueById  function
3. get previous withdraw amount by using  getPrevesAmount  function
4. calculate new withdraw Total and set the value
4-5: set new withdraw total by using  getTotalMainBlanes
*/


document.getElementById("withdeaw-button").addEventListener("click", function () {
    /*
    1. get the element by id
    2. get the value from the element
    3.convert  string value to a number
    */
    const depositInput = getInputValueById('withdraw-amount');
    /*
    1. get previous deposit total by id
    */
    const getDepositPerAmount = getPrevesAmount('withdraw');

    // calculate new deposit total
    const totalDepositAmount = getDepositPerAmount + depositInput;

    //set deposit total value
    getTotalMainBlanes('withdraw', totalDepositAmount)

    // get previous balance by using the function
    const getBlanesPerAmount = getPrevesAmount('blanes');

    // calculate new  balance total
    const totalBalanceAmount = getBlanesPerAmount - depositInput;

    //set balance total value
    getTotalMainBlanes('blanes', totalBalanceAmount)


})



