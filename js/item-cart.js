const countUpBtn = document.querySelector('.count-up');
const countDownBtn = document.querySelector('.count-down');
let countNum = document.querySelector('.quantity');
let itemTotal = document.querySelector('.item-total')
let itemCost = document.querySelector('.item-cost')

countUpBtn.addEventListener('click', countUp);
countDownBtn.addEventListener('click', countDown);

for (let i = 0; i < countUpBtn.length; i++) {
    countUp(i)
}

for (let i = 0; i < countDownBtn.length; i++) {
    countDown(i)
}

function countUp(){
    countNum.innerHTML++
}

function countDown(){
    countNum.innerHTML -= 1
}

function itemTotal(){
    let total = countNum * itemCost;
    total.innerHTML
}