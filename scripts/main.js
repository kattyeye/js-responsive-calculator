const calculation = [];
let calcDisplay = document.getElementsByClassName("calculator-screen");

let showTotal = function () {
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

  document.getElementsByClassName("calculator-screen")[0].value = total;
};

const numButtons = document.querySelectorAll(".number");
numButtons.forEach((button) => {
  button.addEventListener("click", function pushNumber(event) {
    // console.log(event.target.value);
    alert(event.target.value);
    calculation.push(event.target.value);
    showTotal();
  });
});

const operatorButtons = document.querySelectorAll(
  ".operator, .clear, .plus-minus, .percent"
);
operatorButtons.forEach((button) => {
  button.addEventListener("click", function pushOperator(event) {
    alert(event.target.value);
    calculation.push(event.target.value);
    console.log({ calculation });
    showTotal();
  });
});

const equals = document.querySelectorAll(".equal-sign");
equals.forEach((button) => {
  button.addEventListener("click", function calculate(event) {
    calculation.push("=");
    let total = 0;
    let symbols = ["+", "-", "/", "*", "%", "="];
    let previousSymbolIndex = 0;
    let previousSymbol;
    
    for (let i = 0; i < calculation.length; i++) {
      if (symbols.includes(calculation[i])) {
          let firstNum;

        firstNum = calculation.slice(previousSymbolIndex, i).join("");
        calculatedNum = parseInt(firstNum)

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
                break   
        }
        previousSymbol = calculation[i]


      }
      document.getElementsByClassName("calculator-screen")[0].value = total;
    }
    alert(event.target.value);
    console.log({ calculation });
  });
});

