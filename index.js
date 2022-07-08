import DonutMaker from "./DonutMaker.js";

//Put all query selectors in the same spot to reduce clutter and to make it read better
const donutButton = document.querySelector("#make__donut")
const countDonut = document.querySelector("#donut__count")
const purchaseAuto = document.querySelector("#purchase__auto_clicker")
const countAuto = document.querySelector("#auto__clicker_count")
const purchaseMulti = document.querySelector("#purchase__donut_multiplier")
const countMulti = document.querySelector("#donut__multiplier_count")
const resetGame = document.querySelector("#reset")
const btn1 = document.querySelector ('.click1')
const btn2 = document.querySelector('.click2')

//New instance of donutMaker. Passed functions into the donutMaker so we can access the selectors. 
const donutMaker = new DonutMaker(onDonutCountChanged, onAutoClickerPurchased, onMultiplierPurchased);

//Set interval function. Using arrow function so "this" is accessable in activateautoclickers. Set it to activate autoclickers every 1000 ms or 1 sec.
setInterval(() => donutMaker.activateAutoClickers(), 1000);

//Updates Donut count. Also keeps the purchase auto and purchase multi buttons disabled/greyed-out if there aren't enough donuts to putchase them.
function onDonutCountChanged() {
    countDonut.innerHTML = donutMaker.getDonutCount();
    purchaseMulti.disabled = !donutMaker.canBuyMultiplier() 
    purchaseAuto.disabled = !donutMaker.canBuyAutoClicker()
}

//Updates the text in the auto clicker count field
function onAutoClickerPurchased() {
    countAuto.innerHTML = donutMaker.getAutoClickerCount();
}

//Updates the text in the multiplier count field. 
function onMultiplierPurchased() {
    countMulti.innerHTML = donutMaker.getDonutMultiplierCount();
}

//Next three methods/functions listen for the click event from the html element/buttons, and calls the appropriate functions (click, purchase auto or multi) on donutMaker.
donutButton.addEventListener("click", () => {
    donutMaker.click() 
})

purchaseAuto.addEventListener("click", () => {
    donutMaker.purchaseAutoClicker()
})

purchaseMulti.addEventListener("click", () => {
    donutMaker.purchaseMultiplier()
})

//Resets the game. window.location.reload essentially refreshes the page, which resets all of the values. 
resetGame.addEventListener("click", () => {
    window.location.reload();
})

//Next two methods/functions are to open the modals. 
btn1.addEventListener('click', ()=>{
    const modal1 = document.querySelector('.modal1');
    modal1.classList.toggle('show1');
  })


btn2.addEventListener('click', ()=>{
    const modal2 = document.querySelector('.modal2');
    modal2.classList.toggle('show2');
  })

