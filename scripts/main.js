const numButtons = document.querySelectorAll('.number');
numButtons.forEach(button => {
    button.addEventListener('click', function pushNumber(event) {;
        console.log(event.target);       
        alert(event.target.value);
    });
});



















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


    