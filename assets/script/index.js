const bill = document.querySelector('#bill');
const servicePercent = document.querySelector('#serviceQuality');
const population = document.querySelector('#people');
const calculateTip = document.querySelector('#btn');
const tip = document.querySelector('#result');
const displayResult = document.querySelector('.result');
const each = document.querySelector('#each');

calculateTip.onclick = function () {
    let totalBill = bill.value
    let percent = servicePercent.value
    let people = population.value || 1

    if (isNaN(totalBill) || isNaN(people)) {
        alert('Only figures can be used for Bill and Population')
    } else if (totalBill === '') {
        alert('Add value to Bill')
    } else if (percent == 0) {
        alert('Choose an option')
    } else {
        displayResult.style.display = 'flex'

        if (people <= 1) {
            people = 1
            each.style.display = 'none'
        } else {
            each.style.display = 'block'
        }

        tip.innerText = ((totalBill * percent) / people).toFixed(2)
    }
}