document.getElementById('donate-btn').addEventListener('click', function(event) {
   
        const money = getInputId('input-id');
        const amount = valueInputId('amount-total');
        if (!isNaN(money) && money > 0 && money<=amount) {
            const addMoneySection = valueInputId('add-money');
            var totalAddMoney = addMoneySection + money;
            document.getElementById('add-money').innerText = totalAddMoney;
          
            const totalAmount = amount - money;
            document.getElementById('amount-total').innerText = totalAmount;
            document.getElementById( 'my_modal_1').showModal();
    const div=document.createElement('div')
    const date=new Date();
    div.classList.add('border')
    div.classList.add('text-center')
    div.classList.add('p-6')
    div.classList.add('mb-5')
   
    
    div.innerHTML=`   
    <h4  class="text-3xl font-bold"> ${money} Taka is Donate for Flood at Noakhali, Bangladesh</h4>
    <P >Date: ${date}</P>`
      
    
    document.getElementById('history-form').appendChild(div);
           
        } else {     
            alert("Invalid input. Please try again.");
            return;
        }
    
    
    
  });









  //btn click.................................
  document.getElementById('donation-click-btn').addEventListener('click',function(){
    showBtn('donation-form','donation-click-btn')
  })
  document.getElementById('history-click-btn').addEventListener('click',function(){
    showBtn('history-form','history-click-btn')
  })