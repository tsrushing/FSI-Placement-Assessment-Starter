// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')
// First, tell us your name
let yourName = "Tanya Rushing" // HINT: Replace this with your own name!

//update Gingerbread quantities
function updateGbQuantity(displayGbQuantity){
    let gb = document.querySelector('#qty-gb')
    gb.innerHTML = displayGbQuantity
}
//update Chocolate Chip quantities
function updateCcQuantity(displayCcQuantity){
    let cc = document.querySelector('#qty-cc')
    cc.innerHTML = displayCcQuantity
}

//update Sugar quantities
function updateSugarQuantity(displaySugarQuantity){
    let sugar = document.querySelector('#qty-sugar')
    sugar.innerHTML = displaySugarQuantity
}

//update total Cookies
function updateTotalQuantity(displayTotalQuantity) {
    let total = document.querySelector('#qty-total')
    total.innerHTML = displayTotalQuantity
}
// We'll use these variables to track the counts of each cookie type
let gb = 0 // Gingerbread
let cc = 0 // Chocolate Chip
let sugar = 0 // Sugar Sprinkle
let total = 0 // Total of all cookies

// selecting the element with an id of credit
const credit = document.querySelector('#credit')

// Buttons
const gbPlusBtn = document.querySelector('#add-gb')
const gbMinusBtn = document.querySelector('#minus-gb')
const ccPlusBtn = document.querySelector('#add-cc')
const ccMinusBtn = document.querySelector('#minus-cc')
const sugarPlusBtn = document.querySelector('#add-sugar')
const sugarMinusBtn = document.querySelector('#minus-sugar')

// Code to update name display
credit.textContent = `Created by ${yourName}`

// Event listener for clicks on the "+"&"-" button for Gingerbread cookies
gbPlusBtn.addEventListener('click', function() {
    gb++
    total++
    updateGbQuantity (`${gb}`)
    updateTotalQuantity(`${total}`)
    
})

gbMinusBtn.addEventListener('click', function(e){
    if (gb > 0) {
        gb--
        total--
    }
        updateGbQuantity (`${gb}`)
        updateTotalQuantity(`${total}`)
   
})

// Event listener for clicks on the "+"&"-" button for Chocolate Chip cookies
ccPlusBtn.addEventListener('click', function() {
    cc++
    total++
    updateCcQuantity (`${cc}`)
    updateTotalQuantity(`${total}`)
})

ccMinusBtn.addEventListener('click', function(e){
    if (cc > 0) {
        cc--
        total--
    }
        updateCcQuantity (`${cc}`)
        updateTotalQuantity(`${total}`)
})

// Event listener for clicks on the "+"&"-" button for Sugar cookies
sugarPlusBtn.addEventListener('click', function() {
    sugar++
    total++
 updateSugarQuantity(`${sugar}`)
 updateTotalQuantity(`${total}`)
})

sugarMinusBtn.addEventListener('click', function(e){
    if (sugar>0){
        sugar--
        total--
    }
    updateSugarQuantity(`${sugar}`)
    updateTotalQuantity(`${total}`)
})

//function getTotal() {
    //var all = document.querySelectorAll('.button-container')
   // var total = 0
   // for(var i = 0;i < all.length; i++){
       // if (parseInt(all[i].value)){
       //     total += parseInt(all[i].value)
       // }
   // }
    //document.getElementById('qty-total').value = total
//}