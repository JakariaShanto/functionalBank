document.getElementById('withdraw-btn').addEventListener('click', function(){
  const withdrawField = getinputfield ('withdraw-input');
  const withdrawBalance = getDepositeFieldValue ('withdraw-balance');
  const newWithdraw = withdrawBalance + withdrawField;
  setdepositeBalance ('withdraw-balance', newWithdraw);
  // console.log(newWithdraw);
  // console.log(totalbalance);
  const totalbalance = getDepositeFieldValue ('total-balance');
  const newtotalbalance = totalbalance - newWithdraw;
  setdepositeBalance('total-balance', newtotalbalance);

})