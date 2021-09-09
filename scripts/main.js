let calculation = [];
let calcDisplay = document.querySelector(".calculator-screen");
const clearButton = document.querySelector('.clear');


let showTotal = function () { //function to show the total when calculated on the display
  let total;
  for (let i = 0; i < calculation.length; i++) {
      if (calculation[i] === 'plus-minus'){
          total = total.split(calculation[i - 1])
          if (calculation[i - 1] && calculation[i - 1] > 0) {
                calculation[i - 1] = -calculation[i - 1];
                console.log(calculation[i - 1])
          } else if (calculation[i - 1] && calculation[i - 1] < 0) {
            calculation[i - 1] = Math.abs(calculation[i - 1]);
          } 
        //   figure out what to do in case the negative number is the first num
          total = `${total}${calculation[i - 1]}`;
      }
    if (total) {
      total = `${total}${calculation[i]}`;
    } else {
      total = `${calculation[i]}`;
    }

    // .value = `${calcDisplay.value}${calculation[i]}`;
    // console.log(calculation[i]);
  }

  document.querySelector(".calculator-screen").value = total;
};


// for each number button clicked this function pushes an alert and is displayed
const numButtons = document.querySelectorAll(".number");
numButtons.forEach((button) => {
  button.addEventListener("click", function (event) {
    // console.log(event.target.value);
    alert(event.target.value);
    calculation.push(event.target.value);
    console.log('calc', calculation);
    showTotal();
  });
});

const display = document.querySelector('input')
const clear = document.querySelectorAll('.clear');
clear.forEach((button) => {
  button.addEventListener('click', function mrClear (event) {
calculation.push(event.target.value)

})

})

// for each operator button  ["+", "-", "/", "*", "%", "=", 'C'], shows on display and alerts
const operatorButtons = document.querySelectorAll(
  ".operator, .plus-minus, .percent"
);
operatorButtons.forEach((button) => {
  button.addEventListener("click", function(event) {
    // console.log('calc', calculation);
    alert(event.target.value);
    calculation.push(event.target.value);
    console.log(calculation);
    showTotal();
  });
});



clearButton.addEventListener('click', function(event) {
  alert('you clicked the clear button');
  calcDisplay.value = '0';
  calculation = [];
});



//when equal sign is clicked, it's pushed to the end of the array, then total is calculated
const equals = document.querySelector(".equal-sign");
equals.addEventListener("click", function (event) {
    calculation.push("=");
    let total = 0;
    let symbols = ["+", "-", "/", "*", "%", "=", "C"];
    let previousSymbolIndex = 0;
    let previousSymbol;
    
    for (let i = 0; i < calculation.length; i++) {
      if (symbols.includes(calculation[i])) {
          let firstNum;

        firstNum = calculation.slice(previousSymbolIndex, i).join("");
        calculatedNum = parseInt(firstNum) //parse int is adding the first num to the array

        if(i === 0){
            total = calculatedNum
        }

        previousSymbolIndex = i + 1;
        
        if (!previousSymbol) {
            total = calculatedNum;
        }
        switch (previousSymbol) {
          case '+':
            total = total + calculatedNum;
            break;
          case '-':
            total = total - calculatedNum;
            break;
          case '/':
            total = total / calculatedNum;
            break;
            case '*':
            total = total * calculatedNum;
            break;
            case '%':
                total = calculatedNum / 100;
            break;
            case "=" :
                total = total;
                break  ; 
            case "C" :
             total = document.querySelector('input') = '0';
                break  ; 
        }
        previousSymbol = calculation[i]


      }
      document.querySelector(".calculator-screen").value = total;
    }
    alert(event.target.value);
    console.log(calculation);
  });

