const bill =document.querySelector('#bill');
const servicePercent = document.querySelector('#serviceQuality');
const population = document.querySelector('#people');
const calculateTip = document.querySelector('#btn');
const tip = document.querySelector('#result');
const displayResult = document.querySelector('.result');
const each = document.querySelector('#each');

calculateTip.onclick = function (){
    let totalBill = bill.value
    let percent = servicePercent.value
    let people = population.value || 1

    let tipCalculation = function () {
        displayResult.style.display = 'flex'
    
        if(people == 1 ){
        each.style.display = 'none'
        }else{
        each.style.display = 'block'
        }
    
        let amount = ((totalBill * percent)/ people)
        let result = amount.toFixed(2)
        tip.innerText = result
    }
    
    let text = 'Only figures can be used for Bill and Population'

    if (isNaN(totalBill) || isNaN(people)){
        alert(text)
    }else{
    tipCalculation()
}
}