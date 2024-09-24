document.getElementById('donate-btn2').addEventListener('click', function(event) {
   
    const money = getInputId('input-id2');
    const amount = valueInputId('amount-total');
        if (!isNaN(money) && money > 0 && money<=amount) {
            const addMoneySection = valueInputId('add-money2');
            var totalAddMoney = addMoneySection + money;
            document.getElementById('add-money2').innerText = totalAddMoney;
           
            const totalAmount = amount - money;
            document.getElementById('amount-total').innerText = totalAmount;
            document.getElementById( 'my_modal_2').showModal();
    const div=document.createElement('div')
    const date=new Date();
    div.classList.add('border')
    div.classList.add('text-center')
    div.classList.add('p-6')
    div.classList.add('mb-5')
   
    
    div.innerHTML=`   
    <h4  class="text-3xl font-bold"> ${money} Taka is Donate for Flood Relief in Feni,Bangladesh</h4>
    <P >${date}</P>`
      
    
    document.getElementById('history-form').appendChild(div);
           
        } else {     
            alert("Invalid input. Please try again.");
            return;
        }
    

  });