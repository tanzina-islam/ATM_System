document.getElementById('btn-deposit').addEventListener('click', function(){
    const depositField= document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);

    depositField.value ='';

        if(isNaN(newDepositAmount)){
        alert('Please provide a valid number');
        return;
    }
    const depositTotal = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotal.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);

    const currentDepositTotal = previousDepositTotal+ newDepositAmount;
    depositTotal.innerText = currentDepositTotal; 

    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceAmountString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceAmountString);
    const balance = previousBalanceTotal + newDepositAmount;
    balanceTotalElement.innerText = balance;

})


/*
// step:1   add eventlistener to the deposit button
document.getElementById('btn-deposit').addEventListener('click', function () {
// step:2    get the deposit amount from the deposit field area
//   for the input field use value. to the value inside the input field
    const depositField = document.getElementById ('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);
    // step 3:  get the current deposit total
    // for non input use inner text to get text 
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);
    //  step 4: add numbers  to set the deposit
    const currentDepositTotal = previousDepositTotal+ newDepositAmount;
    depositTotalElement.innerText= currentDepositTotal;
    //  step 5: get balance current total
    const balanceTotalElement = document.getElementById('balance-total');
     
    const previousBalanceAmountString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceAmountString); 
    const currentBalanceTotal = previousBalanceTotal+newDepositAmount;
    balanceTotalElement.innerText = currentBalanceTotal;
    // step 7:   clear the deposit field
    depositField.value = '';
})*/
