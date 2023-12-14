document.getElementById('btn-withdraw').addEventListener('click',function(){
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);
    
    withdrawField.value ='';

    if(isNaN(newWithdrawAmount)){
        alert('Please provide a valid number');
        return;
    }

    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);
    
    
    const balance = document.getElementById('balance-total');
    const previousBalanceAmountString = balance.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceAmountString);
    
    if(newWithdrawAmount>previousBalanceTotal)
    {
        alert('You have not enough money');
        return;
    }
     
    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = currentWithdrawTotal;

    const currentBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balance.innerText = currentBalanceTotal;

    
})


/*
document.getElementById('btn-withdraw').addEventListener('click',function () {
    const withdrawElement = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawElement.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

    const withdrawTotalElement =document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

    const currentWithdrawTotal = previousWithdrawTotal+ newWithdrawAmount;
    withdrawTotalElement.innerText = currentWithdrawTotal;

    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal =parseFloat(previousBalanceTotalString);
    const newBalanceTotal =previousBalanceTotal - newWithdrawAmount;
    withdrawTotalElement.innerText = newBalanceTotal;

    withdrawElement.value ='';

})*/