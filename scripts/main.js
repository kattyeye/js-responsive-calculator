
const numButtons = document.querySelectorAll('.number');
numButtons.forEach(button => {
    button.addEventListener('click', function pushNumber(event) {;
        // console.log(event.target.value);       
        alert(event.target.value);
        
    });
});

const operatorButtons = document.querySelectorAll('.operator, .clear, .plus-minus, .percent');
operatorButtons.forEach(button => {
    button.addEventListener('click', function pushOperator (event) {
        alert(event.target.value);
    })
})


const equals = document.querySelectorAll('.equal-sign');
    equals.forEach(button => {
        button.addEventListener('click', function calculate (event) {
            alert(event.target.value)
            calculation.push(event.target.value);
        })
})
const calculation = [];

    
// * Define a variable `calculation` pointing to an empty array
// * Using `Array.prototype.push`, perform actions on the `calculation` variable when numbers and operators are pressed


console.log(calculation);
//     calculation.forEach(button => {
//         button.addEventListener('click', function workingCalc() {
//             Array.prototype.push();
//         });
//     });

// console.log(calculation); 










// * Define a function named `pushNumber` that `alert()`s the number associated with its event argument when called; add this function as an event listener for the number buttons

//     function pushNumber(newNumber) {
        
//         numButtons.nodeValue = newNumber;
//             alert(newNumber);
//     }

// const el = document.querySelector('button');
// el.addEventListener('click', function() {pushNumber (newNumber)});

// const numButtons = document.querySelectorAll('.number');
// const operatorButton = document.querySelectorAll('.operator');
// const equalButton = document.querySelector('.equal-sign');
// const percentButton = document.querySelector('.percent');
// const plusMinus = document.querySelector('.plus-minus');
// const numLgButton = document.querySelector('.number btn-lg');
// const decimalButton = document.querySelector('decimal');

// function pushNumber(){
//     if (pushNumber === numButtons) {
//         alert(Number);
// }
// }

//     numButtons.forEach(button => {
//         button.addEventListener('click', function pushNumber(newNumber) {;
//             // alert(document.querySelector('.number').textContent);
//             numButtons.forEach.nodeValue = newNumber;
            
//         });
//   });


//   function pushNumber(newNumber) {
//         const numButtons = document.querySelectorAll('.number');
//         numButtons.forEach.nodeValue = newNumber;
           
//   }





// function pushNumber () {
//     console.log("pushed");
//     numButton.removeEventListener("click", pushNumber);
//     alert("button clicked");
// } 



//     function pushNumber() {
//         alert();
//  }
// numButton.addEventListener("click",pushNumber);


    