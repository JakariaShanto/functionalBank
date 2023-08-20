document.getElementById('deposite-btn').addEventListener('click', function(){
  console.log('hi there');
  const depositeField = document.getElementById('deposite-input');
  console.log(depositeField);
  const depositeString = depositeField.value;
  console.log(depositeString);
  const newDepositeAdd = parseFloat(depositeString);
  console.log(newDepositeAdd);
// step -2-------------------------------------------------------------------
const depoBalance = document.getElementById('depo-balance');
console.log(depoBalance);
const depoBalanceString = depoBalance.innerText;
console.log(depoBalanceString);
const depoBalanceAdd = parseFloat(depoBalanceString);
console.log(depoBalanceAdd);

const currentDepoBalance = depoBalanceAdd + newDepositeAdd;
depoBalance.innerText = currentDepoBalance;

depositeField.value = '';


// step-3=------------total balance cheak-----------------------------------------
 
const totalBalanceField = document.getElementById('total-balance');
const totalBalanceString = totalBalanceField.innerText;
const totalBalanceAdd = parseFloat(totalBalanceString);

const currentTotalBalance = totalBalanceAdd + newDepositeAdd;
totalBalanceField.innerText = currentTotalBalance;


// step-4--------------------now withdraw ------------------------------------------------
})



document.getElementById('withdraw-btn').addEventListener('click', function(){
  console.log('paise')
  const withdrawField = document.getElementById('withdraw-input');
  const withdrawString = withdrawField.value;
  const newWithdraw = parseFloat(withdrawString);
  console.log(newWithdraw);


  const withdrawBalance = document.getElementById('withdraw-balance');
  const withdrawBalanceString = withdrawBalance.innerText;
  const withdrawAdd = parseFloat(withdrawBalanceString);

  const currentwithdraw = withdrawAdd + newWithdraw;
  withdrawBalance.innerText = currentwithdraw;


  const withdrawtotalfield = document.getElementById('total-balance');
  const withdrawtotalString = withdrawtotalfield.innerText;
  const withdrawaddtotal = parseFloat(withdrawtotalString);


  const currentwithdrawtotal = withdrawaddtotal - newWithdraw;
  withdrawtotalfield.innerText = currentwithdrawtotal;



  withdrawField.value = '';




})