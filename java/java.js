document.getElementById('donate-btn').addEventListener('click', function(event) {
    updateAmount('input-id', 'add-money', 'amount-total', 'my_modal_1');
    
  });
document.getElementById('donate-btn2').addEventListener('click', function(event) {
    updateAmount('input-id2', 'add-money2', 'amount-total', 'my_modal_2');

  });
document.getElementById('donate-btn3').addEventListener('click', function(event) {
    updateAmount('input-id3', 'add-money3', 'amount-total', 'my_modal_3');

  });


  document.getElementById('donation-click-btn').addEventListener('click',function(){
    showBtn('donation-form','donation-click-btn')
  })
  document.getElementById('history-click-btn').addEventListener('click',function(){
    showBtn('history-form','history-click-btn')
  })