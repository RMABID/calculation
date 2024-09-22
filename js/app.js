const calculateAmount = document.getElementById('calculate-amount');

calculateAmount.addEventListener('click', function(){

    const incomeAmount = parseFloat(document.getElementById('income-input').value);
const softwareAmount = parseFloat(document.getElementById('software-input').value);
const cousesAmount = parseFloat(document.getElementById('couses-input').value);
const internetAmount = parseFloat(document.getElementById('internet-input').value);


const totalCost = softwareAmount + cousesAmount + internetAmount;
const balance = incomeAmount - totalCost;

const totalExpensesEl = document.getElementById('total-expenses');
totalExpensesEl.innerText = totalCost.toFixed(2);

const totalBalanceEl = document.getElementById('total-balance');
totalBalanceEl.innerText = balance.toFixed(2);

const result = document.getElementById('result');
result.classList.remove('hidden')


})

const calculateSavingsAmount = document.getElementById('savings-calculate');
calculateSavingsAmount.addEventListener('click', function(){
    
    const incomeAmount = parseFloat(document.getElementById('income-input').value);
    const softwareAmount = parseFloat(document.getElementById('software-input').value);
    const cousesAmount = parseFloat(document.getElementById('couses-input').value);
    const internetAmount = parseFloat(document.getElementById('internet-input').value);
    const savingsAmountEl = parseFloat(document.getElementById('savings-input').value)
  
    
    const totalCost = softwareAmount + cousesAmount + internetAmount;
    const balance = incomeAmount - totalCost;

    const savingsAmount = (savingsAmountEl * balance) / 100 ;
    
    const savings = document.getElementById('savings-amo');
    savings.innerText = savingsAmount;


    const remaingAmount = balance - savingsAmount;

    const remaingAmountEl = document.getElementById('remaing-balance');
    remaingAmountEl.innerText = remaingAmount;
    
})
