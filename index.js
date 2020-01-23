
function runCalc() {
    runningTotalFunc()
}

function runningTotalFunc() {
    let runningTotal = 0
    screenOutput(runningTotal)
}

function screenOutput(runningTotal, newRunningTotal) {
    var div = document.getElementById('screen');
    div.innerHTML = runningTotal;

    if(newRunningTotal !== runningTotal) {
        runningTotal = newRunningTotal
    }

    // backspace(runningTotal)
    // multiply(runningTotal)
    // divide(runningTotal)
    // decimal(runningTotal)
    // subtract(runningTotal)
    // add(runningTotal)
    // eval(runningTotal)
    // switchSign(runningTotal)
    // addOneToScreen(runningTotal)
    // addTwoToScreen(runningTotal) 
    // addThreeToScreen(runningTotal) 
    // addFourToScreen(runningTotal) 
    // addFiveToScreen(runningTotal) 
    // addSixToScreen(runningTotal) 
    // addSevenToScreen(runningTotal) 
    // addEightToScreen(runningTotal) 
    // addNineToScreen(runningTotal) 
    // addZeroToScreen(runningTotal) 
}

function clearScreen() {
    let runningTotal = 0
    screenOutput(runningTotal)
    console.log("CLEARING")
}

function backspace() {
//if the last button I pressed was a number, remove last digit from value.
//Else if the last button I pressed was an operator, replace currentOperator with 'backspace'
}

function multiply() {
//if the last button I pressed was a number, multiply runningTotal with nextTotal.
//Else if the last button I pressed was an operator, replace currentOperator with 'multiply'
}

function divide() {
//if the last button I pressed was a number, divide runningTotal with next nextTotal.
//Else if the last button I pressed was an operator, replace currentOperator with 'divide'
}

function decimal() {
//append decimal to end of runningTotal.
}

function subtract() {
//if the last button I pressed was a number, subtract runningTotal with next nextTotal.
//Else if the last button I pressed was an operator, replace currentOperator with 'subtract'
}

function add() {
//if the last button I pressed was a number, add runningTotal with next nextTotal.
//Else if the last button I pressed was an operator, replace currentOperator with 'add'
}

function eval() {
    console.log("Evaluating!!!")
}

function switchSign() {
    console.log("Switching Signs!!!")
}

function addOneToScreen() {
//if the last button I pressed was a number, append '1' to runningTotal
//Else if the last button I pressed was an operator, replace runningTotal with '1'
//Else if runningTotal = 0, replace runningTotal with '1'
var div = document.getElementById('screen');
div.innerHTML = runningTotal;

if(runningTotal === 0) {
    runningTotal = 1
}
screenOutput(newRunningTotal)
console.log("1")
}

function addTwoToScreen() {
//if the last button I pressed was a number, append '2' to runningTotal
//Else if the last button I pressed was an operator, replace runningTotal with '2'
//Else if runningTotal = 0, replace runningTotal with '2'
console.log("2")
}

function addThreeToScreen() {
//if the last button I pressed was a number, append '3' to runningTotal
//Else if the last button I pressed was an operator, replace runningTotal with '3'
//Else if runningTotal = 0, replace runningTotal with '3'
console.log("3")
}

function addFourToScreen() {
//if the last button I pressed was a number, append '4' to runningTotal
//Else if the last button I pressed was an operator, replace runningTotal with '4'
//Else if runningTotal = 0, replace runningTotal with '4'
console.log("4")
}

function addFiveToScreen() {
//if the last button I pressed was a number, append '5' to runningTotal
//Else if the last button I pressed was an operator, replace runningTotal with '5'
//Else if runningTotal = 0, replace runningTotal with '5'
console.log("5")
}

function addSixToScreen() {
//if the last button I pressed was a number, append '6' to runningTotal
//Else if the last button I pressed was an operator, replace runningTotal with '6'
//Else if runningTotal = 0, replace runningTotal with '6'
console.log("6")
}

function addSevenToScreen() {
//if the last button I pressed was a number, append '7' to runningTotal
//Else if the last button I pressed was an operator, replace runningTotal with '7'
//Else if runningTotal = 0, replace runningTotal with '7'
console.log("7")
}

function addEightToScreen() {
//if the last button I pressed was a number, append '8' to runningTotal
//Else if the last button I pressed was an operator, replace runningTotal with '8'
//Else if runningTotal = 0, replace runningTotal with '8'
console.log("8")
}

function addNineToScreen() {
//if the last button I pressed was a number, append '9' to runningTotal
//Else if the last button I pressed was an operator, replace runningTotal with '9'
//Else if runningTotal = 0, replace runningTotal with '9'
console.log("9")
}

function addZeroToScreen() {
//if the last button I pressed was a number, append '0' to runningTotal
//Else if the last button I pressed was an operator, replace runningTotal with '0'
//Else if runningTotal = 0, do nothing
console.log("0")
}

runCalc()