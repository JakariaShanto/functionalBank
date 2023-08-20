document.getElementById('deposite-btn').addEventListener('click', function(){
  const inputselect = getinputfield ('deposite-input');
  const depositeFieldselect = getDepositeFieldValue ('depo-balance');
  const totalDepositeBalance = depositeFieldselect + inputselect;
  setdepositeBalance('depo-balance', totalDepositeBalance);

  const totalBalanceField = getDepositeFieldValue ('total-balance');
  const newTotal = totalBalanceField + inputselect;
  setdepositeBalance ('total-balance', newTotal);


})


function getinputfield (input){
  const newinputfield = document.getElementById(input);
  const inputstring = newinputfield.value;
  const inputadd = parseFloat(inputstring);
  newinputfield.value = '';
  return inputadd;
}


function getDepositeFieldValue (balance){
  const depositeBalance = document.getElementById(balance);
  const depobalanceString = depositeBalance.innerText;
  const depobalanceAdd = parseFloat(depobalanceString);
  return depobalanceAdd;
}
function setdepositeBalance (balance, newvalue){
  const Showdepo = document.getElementById(balance);
  Showdepo.innerText = newvalue;
}

