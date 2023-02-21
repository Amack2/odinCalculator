


// then create a way to input the two numbers. As well as the operators from the ui. pretty basic we just use a addeventlistener or something for the click. 
// from the assignment:
// Your calculator should not evaluate more than a single pair of numbers at a time. Example: you press a number button (12), followed by an operator button (+), a second number button (7), and finally a second operator button (-). Your calculator should then do the following: first, evaluate the first pair of numbers (12 + 7), second, display the result of that calculation (19), and finally, use that result (19) as the first number in your new calculation, along with the next operator (-).

//... so we if we click "1" "+" "2" if we go to hit another operator (lets say *) the calculator will immediately calculate the 1+2 =3 and wait for the next number (3 * ?) to be inputted. so we will need to build into a the operator function that if an operator has already been called and you click on an operator again it will treat the second click the same as clicking "=" and also clicking the new operator. 

//... Also note that for we really only need to worry about two numbers in our calculations at a time. theres no need to worry about bedmas or anything. Only one function is possible at a time. therefor 5+1x3 = (5+1)x3 not 5+ (1x3). so we really only need to worry about a A and a B number 

// A is the first input 

//B is the second input

//C is output

// A Operator B = C. 

// if C exists it becomes A when the next function is called. 


// then we will worry about js linking the operate function and the 2 numbers 

// //need function for operators 

// //addition 
// //subtraction
// multiply 
// divide


firstInput = 8;
secondInput = 12;
output = 0;

selectedOperator = "none";
//when you click an operator it will remember the operator and call it when u run the operate function.

// STEP ONE: operator functions
//addition 
function add() {
    output = firstInput + secondInput;
    firstInput = output;
    // need some function to removethesecond input value secondInput = 0;
    return output;
}


// subtraction
function sub() {
    output = firstInput - secondInput;
    firstInput = output;
    return output;
}


// multiply
function multi() {
    output = firstInput * secondInput;
    firstInput = output;
    return output;
}


// divide
function divi() {
    output = firstInput / secondInput;
    firstInput = output;
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
        case "multi":
            multi();
            return output;
            break;
        case "divide":
            divi();
            return output;
            break;

    }
};

// Step 3 - All HTML...

//Step 4 

//Display Value 
let displayText = document.getElementById('display');
let displayValue = 2843;
displayText.innerText = displayValue;

//DOM function to change the innerText of the Display div

//Clear
let clearBtn = document.getElementById('clear');

clearBtn.addEventListener("click", clear);

function clear() {
    displayValue = 0;
    displayText.innerText = displayValue;
}

// -/+
let negaPosaBtn = document.getElementById('negaPosa');

negaPosaBtn.addEventListener("click", negaPosa);

function negaPosa() {
    displayValue = displayValue * -1;
    displayText.innerText = displayValue;
}

//one
let oneBtn = document.getElementById('one');

oneBtn.addEventListener("click", oneClick);

function oneClick() {
    displayValue = (displayValue + "1") * 1;
    displayText.innerText = displayValue;
};


//two
let twoBtn = document.getElementById('two');

twoBtn.addEventListener("click", twoClick);

function twoClick() {
    displayValue = (displayValue + "2") * 1;
    displayText.innerText = displayValue;
};

//three
let threeBtn = document.getElementById('three');

threeBtn.addEventListener("click", threeClick);

function threeClick() {
    displayValue = (displayValue + "3") * 1;
    displayText.innerText = displayValue;
};

//four
let fourBtn = document.getElementById('four');

fourBtn.addEventListener("click", fourClick);

function fourClick() {
    displayValue = (displayValue + "4") * 1;
    displayText.innerText = displayValue;
};

//five
let fiveBtn = document.getElementById('five');

fiveBtn.addEventListener("click", fiveClick);

function fiveClick() {
    displayValue = (displayValue + "5") * 1;
    displayText.innerText = displayValue;
};

//six
let sixBtn = document.getElementById('six');

sixBtn.addEventListener("click", sixClick);

function sixClick() {
    displayValue = (displayValue + "6") * 1;
    displayText.innerText = displayValue;
};

//seven
let sevenBtn = document.getElementById('seven');

sevenBtn.addEventListener("click", sevenClick);

function sevenClick() {
    displayValue = (displayValue + "7") * 1;
    displayText.innerText = displayValue;
};

//eight
let eightBtn = document.getElementById('eight');

eightBtn.addEventListener("click", eightClick);

function eightClick() {
    displayValue = (displayValue + "8") * 1;
    displayText.innerText = displayValue;
};

//nine
let nineBtn = document.getElementById('nine');

nineBtn.addEventListener("click", nineClick);

function nineClick() {
    displayValue = (displayValue + "9") * 1;
    displayText.innerText = displayValue;
};

//zero
let zeroBtn = document.getElementById('zero');

zeroBtn.addEventListener("click", zeroClick);

function zeroClick() {
    displayValue = (displayValue + "0") * 1;
    displayText.innerText = displayValue;
};