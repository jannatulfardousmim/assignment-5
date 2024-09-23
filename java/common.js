/*const money=getInputId('input-id');
if(isNaN(money)===false && money>0){
 const addMoneySection=valueInputId('add-money');
 var totalAddMoney =addMoneySection+money;
document.getElementById('add-money').innerText=totalAddMoney
const amount=valueInputId('amount-total');
const totalAmount=amount-money;
document.getElementById('amount-total').innerText=totalAmount

 
}
else{
    alert("invalid input.please Try again.")
}*/




function updateAmount(inputId, valueId, amountId, model) {
    const money = getInputId(inputId);

    if (!isNaN(money) && money > 0) {
        const addMoneySection = valueInputId(valueId);
        var totalAddMoney = addMoneySection + money;
        document.getElementById(valueId).innerText = totalAddMoney;
        const amount = valueInputId(amountId);
        const totalAmount = amount - money;
        document.getElementById(amountId).innerText = totalAmount;
        document.getElementById(model).showModal();
    } else {     
        alert("Invalid input. Please try again.");
        return;
    }
}

