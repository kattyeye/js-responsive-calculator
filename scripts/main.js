// * Define a function named `pushNumber` that `alert()`s the number associated with its event argument when called; add this function as an event listener for the number buttons

const numButtons = document.querySelectorAll('.number');
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

document.querySelectorAll('.number').forEach(item => {
    item.addEventListener('click', function pushNumber() {
        alert(document.querySelector('.number').textContent);
    })
  });




// function pushNumber () {
//     console.log("pushed");
//     numButton.removeEventListener("click", pushNumber);
//     alert("button clicked");
// } 



//     function pushNumber() {
//         alert();
//  }
// numButton.addEventListener("click",pushNumber);


    