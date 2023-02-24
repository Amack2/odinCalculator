firstInput = "notSet";
secondInput = "notSet";
output = 0;
selectedOperator = "none";

//re run  will prevent the user from typing additional numbers into the first input after the calculation has run. real calculators will let you select another operator to use with your output of your last equation and run a new calculation. But on a real calculator if you type a number after you get the result of your last calculation it wipes the display and starts a new equation.

// so when you run the operate function it will set rerun to yes. if you click a number when re run is yes it will run Clear(), which sets rerun to no and then types your number, since after that rerun is no you can then continue to type numbers. BUT if you choose an operator when rerun is yes it will use the result of the last equation as the first input, and set rerun to no allowing you to type numbers in for your second input with out clearing the calc.

reRunStatus = "no";


//Display Value 
let displayText = document.getElementById('display');
let displayValue = 0;
let displayValue2 = 0;
displayText.innerText = displayValue;

//Operator functions
//addition 
function add() {
    output = firstInput + secondInput;
    displayValue = output;
    displayText.innerText = displayValue;
    return output;
}
// subtraction
function sub() {
    output = firstInput - secondInput;
    displayValue = output;
    displayText.innerText = displayValue;
    return output;
}
// multiply
function multi() {
    output = firstInput * secondInput;
    displayValue = output;
    displayText.innerText = displayValue;
    return output;
}
// divide
function divi() {
    output = firstInput / secondInput;
    displayValue = output;
    displayText.innerText = displayValue;
    return output;
}
//STEP TWO: Operate function 

function operate() {
    switch (selectedOperator) {

        case "add":
            add();
            return output;
            break;
        case "subtract":
            sub();
            return output;
            break;
        case "multiply":
            multi();
            return output;
            break;
        case "divide":
            divi();
            return output;
            break;

    }


};

//Clear
let clearBtn = document.getElementById('clear');

clearBtn.addEventListener("click", clear);

function clear() {
    firstInput = "notSet";
    secondInput = "notSet";
    reRunStatus = "no";
    displayValue = 0;
    displayValue2 = 0;
    displayText.innerText = displayValue;

}

// -/+
let negaPosaBtn = document.getElementById('negaPosa');

negaPosaBtn.addEventListener("click", negaPosa);

function negaPosa() {
    if (firstInput !== "notSet") {
        displayValue2 = displayValue2 * -1;
        displayText.innerText = displayValue2;
    } else {
        displayValue = displayValue * -1;
        displayText.innerText = displayValue;
    }
}

const
numBtns = document.getElementsByClassName("numBtn");


for (let i = 0; i < numBtns.length; i++) { 
     numBtns[i].addEventListener("click", numberClick);}

function numberClick() {
            if (reRunStatus === "no") {
            if (firstInput !== "notSet") {
                displayValue2 = (displayValue2 + this.innerText) * 1;
                displayText.innerText = displayValue2;
            } else {
                displayValue = (displayValue + this.innerText) * 1;
                displayText.innerText = displayValue;
    
            }
        } else {
            clear();
            displayValue = (displayValue + this.innerText) * 1;
            displayText.innerText = displayValue;
    
        }
    };


//one
// let oneBtn = document.getElementById('one');
// oneBtn.addEventListener("click", oneClick);
// // im now realizing theres probably a way to use a dom based on the the class element to have just one function for this instead of one per button.
// function oneClick() {
//     if (reRunStatus === "no") {
//         if (firstInput !== "notSet") {
//             displayValue2 = (displayValue2 + this.innerText) * 1;
//             displayText.innerText = displayValue2;
//         } else {
//             displayValue = (displayValue + this.innerText) * 1;
//             displayText.innerText = displayValue;

//         }
//     } else {
//         clear();
//         displayValue = (displayValue + this.innerText) * 1;
//         displayText.innerText = displayValue;

//     }
// };


// //two
// let twoBtn = document.getElementById('two');

// twoBtn.addEventListener("click", twoClick);

// function twoClick() {
//     if (reRunStatus === "no") {
//         if (firstInput !== "notSet") {
//             displayValue2 = (displayValue2 + this.innerText) * 1;
//             displayText.innerText = displayValue2;
//         } else {
//             displayValue = (displayValue + this.innerText) * 1;
//             displayText.innerText = displayValue;

//         }
//     } else {
//         clear();
//         displayValue = (displayValue + this.innerText) * 1;
//         displayText.innerText = displayValue;

//     }
// };

// //three
// let threeBtn = document.getElementById('three');

// threeBtn.addEventListener("click", threeClick);

// function threeClick() {
//     if (reRunStatus === "no") {
//         if (firstInput !== "notSet") {
//             displayValue2 = (displayValue2 + this.innerText) * 1;
//             displayText.innerText = displayValue2;
//         } else {
//             displayValue = (displayValue + this.innerText) * 1;
//             displayText.innerText = displayValue;

//         }
//     } else {
//         clear();
//         displayValue = (displayValue + this.innerText) * 1;
//         displayText.innerText = displayValue;

//     }
// };

// //four
// let fourBtn = document.getElementById('four');

// fourBtn.addEventListener("click", fourClick);

// function fourClick() {
//     if (reRunStatus === "no") {
//         if (firstInput !== "notSet") {
//             displayValue2 = (displayValue2 + this.innerText) * 1;
//             displayText.innerText = displayValue2;
//         } else {
//             displayValue = (displayValue + this.innerText) * 1;
//             displayText.innerText = displayValue;

//         }
//     } else {
//         clear();
//         displayValue = (displayValue + this.innerText) * 1;
//         displayText.innerText = displayValue;

//     }
// };
// //five
// let fiveBtn = document.getElementById('five');

// fiveBtn.addEventListener("click", fiveClick);

// function fiveClick() {
//     if (firstInput !== "notSet") {
//         displayValue2 = (displayValue2 + this.innerText) * 1;
//         displayText.innerText = displayValue2;
//     } else {
//         displayValue = (displayValue + this.innerText) * 1;
//         displayText.innerText = displayValue;

//     }
// }
// //six
// let sixBtn = document.getElementById('six');

// sixBtn.addEventListener("click", sixClick);

// function sixClick() {
//     if (reRunStatus === "no") {
//         if (firstInput !== "notSet") {
//             displayValue2 = (displayValue2 + this.innerText) * 1;
//             displayText.innerText = displayValue2;
//         } else {
//             displayValue = (displayValue + this.innerText) * 1;
//             displayText.innerText = displayValue;

//         }
//     } else {
//         clear();
//         displayValue = (displayValue + this.innerText) * 1;
//         displayText.innerText = displayValue;

//     }
// };

// //seven
// let sevenBtn = document.getElementById('seven');

// sevenBtn.addEventListener("click", sevenClick);

// function sevenClick() {
//     if (reRunStatus === "no") {
//         if (firstInput !== "notSet") {
//             displayValue2 = (displayValue2 + this.innerText) * 1;
//             displayText.innerText = displayValue2;
//         } else {
//             displayValue = (displayValue + this.innerText) * 1;
//             displayText.innerText = displayValue;

//         }
//     } else {
//         clear();
//         displayValue = (displayValue + this.innerText) * 1;
//         displayText.innerText = displayValue;

//     }
// };

// //eight
// let eightBtn = document.getElementById('eight');

// eightBtn.addEventListener("click", eightClick);

// function eightClick() {
//     if (reRunStatus === "no") {
//         if (firstInput !== "notSet") {
//             displayValue2 = (displayValue2 + this.innerText) * 1;
//             displayText.innerText = displayValue2;
//         } else {
//             displayValue = (displayValue + this.innerText) * 1;
//             displayText.innerText = displayValue;

//         }
//     } else {
//         clear();
//         displayValue = (displayValue + this.innerText) * 1;
//         displayText.innerText = displayValue;

//     }
// };

// //nine
// let nineBtn = document.getElementById('nine');

// nineBtn.addEventListener("click", nineClick);

// function nineClick() {
//     if (reRunStatus === "no") {
//         if (firstInput !== "notSet") {
//             displayValue2 = (displayValue2 + this.innerText) * 1;
//             displayText.innerText = displayValue2;
//         } else {
//             displayValue = (displayValue + this.innerText) * 1;
//             displayText.innerText = displayValue;

//         }
//     } else {
//         clear();
//         displayValue = (displayValue + this.innerText) * 1;
//         displayText.innerText = displayValue;

//     }
// };
// //zero
// let zeroBtn = document.getElementById('zero');

// zeroBtn.addEventListener("click", zeroClick);

// function zeroClick() {
//     if (reRunStatus === "no") {
//         if (firstInput !== "notSet") {
//             displayValue2 = (displayValue2 + this.innerText) * 1;
//             displayText.innerText = displayValue2;
//         } else {
//             displayValue = (displayValue + this.innerText) * 1;
//             displayText.innerText = displayValue;

//         }
//     } else {
//         clear();
//         displayValue = (displayValue + this.innerText) * 1;
//         displayText.innerText = displayValue;

//     }
// };
// // decimal 
// let dotBtn = document.getElementById('dot');

// dotBtn.addEventListener("click", dotClick);

// function dotClick() {
//     if (reRunStatus === "no") {
//         if (firstInput !== "notSet") {
//             if (Number.isInteger(displayValue2)) {
//                 displayValue2 = (displayValue2 + this.innerText);
//                 displayText.innerText = displayValue2;
//             }
//         } else {
//             if (Number.isInteger(displayValue))
//                 displayValue = (displayValue + this.innerText);
//             displayText.innerText = displayValue;

//         }
//     } else {
//         clear();
//         displayValue = (displayValue + this.innerText);
//         displayText.innerText = displayValue;

//      }
// };

//OPERATOR BUTTONS

// these do a few things,
// 1. They save the current display value as first input
// 2. They set the selected operator to what ever its supposed to be add sets it as add.
// 3. It primes the buttons to accept the next input values as the second input. 
//Calculators are weird we need to come up with a way that after you click on of these 
// buttons it will still display the current DisplayValue until you start typing in a new number.  
// some form of statement saying that if firstInput ==! notset then 

//Add button: this works
let addBtn = document.getElementById('add');

addBtn.addEventListener("click", addClick);

function addClick() {
    firstInput = displayValue;
    selectedOperator = "add";
    reRunStatus = "no";
};

//minus button
let minusBtn = document.getElementById('minus');

minusBtn.addEventListener("click", minusClick);

function minusClick() {
    firstInput = displayValue;
    selectedOperator = "subtract";
    reRunStatus = "no";
};

//divide button 
let divideBtn = document.getElementById('divide');

divideBtn.addEventListener("click", divideClick);

function divideClick() {
    firstInput = displayValue;
    selectedOperator = "divide";
    reRunStatus = "no";
};

//multiply button

let multiplyBtn = document.getElementById('multiply');

multiplyBtn.addEventListener("click", multiplyClick);

function multiplyClick() {
    firstInput = displayValue;
    selectedOperator = "multiply";
    reRunStatus = "no";
};

//equal sign button 
//this will run operate, it will also let what ever is in the displayValue become the secondInput

let equalsBtn = document.getElementById('equals');

equalsBtn.addEventListener("click", equalsClick);

function equalsClick() {
    secondInput = displayValue2;
    operate();
    //following line stops the calculator from repeating its last action when you hit the equal sign. most calculators actually repeat the last function when you hit equals. 
    firstInput = displayValue;
    selectedOperator = "notSet";
    displayValue2 = "0";
    secondInput = "notSet";
    reRunStatus = 'yes';

};