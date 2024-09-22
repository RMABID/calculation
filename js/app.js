
let count = 0;

const calculateAmount = document.getElementById('calculate-amount');

calculateAmount.addEventListener('click', function(){
    count += 1;

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


const historyItem = document.createElement('div');
historyItem.className = 'bg-white p-3 rounded-md border-l-2 border-indigo-500';

historyItem.innerHTML = `
    <p>Serial : ${count}</p>
    <p class="text-xs text-gray-500 ">${new Date().toLocaleDateString()}</p>
    <p class="text-xs text-gray-500 >Income: $${incomeAmount.toFixed(2)}</p>
    <p class="text-xs text-gray-500 >Expenses: $${totalCost.toFixed(2)}</p>
    <p class="text-xs text-gray-500 >Balance: $${balance.toFixed(2)}</p>
`


    const historyContainer = document.getElementById('history-section');
    historyContainer.insertBefore(historyItem, historyContainer.firstChild)

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
    savings.innerText = savingsAmount.toFixed(2);


    const remaingAmount = balance - savingsAmount;

    const remaingAmountEl = document.getElementById('remaing-balance');
    remaingAmountEl.innerText = remaingAmount.toFixed(3);
    
})


const historyTab = document.getElementById('history-tab');
const assistantTab = document.getElementById('assistant-tab');
historyTab.addEventListener('click', function(){

    historyTab.classList.add(
        'text-white', 
        'font-semibold',
         'bg-gradient-to-r',
          'from-blue-500', 
          'to-purple-600'
        );


        assistantTab.classList.remove(
            'text-white', 
        'font-semibold',
         'bg-gradient-to-r',
          'from-blue-500', 
          'to-purple-600'
        );

        document.getElementById('assistant-hidden').classList.add('hidden')
        document.getElementById('history-section').classList.remove('hidden')
        
})