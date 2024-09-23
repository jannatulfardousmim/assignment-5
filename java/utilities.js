//Get the input
function getInputId(id) {
    const inputValue=document.getElementById(id).value;
    const inputValue2=parseFloat(inputValue)
    return inputValue2
    
}
//value input
function valueInputId(id) {
    const Value=document.getElementById(id).innerText;
    const Value2=parseFloat(Value)
    return Value2
    
}

function showBtn(id, btn) {
    document.getElementById('donation-form').classList.add('hidden');
    document.getElementById('donation-click-btn').classList.remove('active');
    document.getElementById('history-form').classList.add('hidden');
    document.getElementById('history-click-btn').classList.remove('active');
    document.getElementById(id).classList.remove('hidden');
    document.getElementById(btn).classList.add('active');
}




