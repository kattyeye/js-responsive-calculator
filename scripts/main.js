// * Define a function named `pushNumber` that `alert()`s the number associated with its event argument when called; add this function as an event listener for the number buttons

const numButton = document.querySelectorAll('number');
const operatorButton = document.querySelectorAll('.operator');
const equalButton = document.querySelector('.equal-sign');
const percentButton = document.querySelector('.percent');
const plusMinus = document.querySelector('.plus-minus');
const numLgButton = document.querySelector('.number btn-lg');
const decimalButton = document.querySelector('decimal');
const previousOperandTextElement = document.querySelector('[data-previous-operand]');
const currentOperandTextElement = document.querySelector('[data-current-operand]');

resultDisplayed = false;

function pushNumber () {
    console.log("pushed");
    numButton.removeEventListener ("click",pushNumber);
} 
//     function pushNumber() {
//         alert();
//  }
// numButton.addEventListener("click",pushNumber);


    