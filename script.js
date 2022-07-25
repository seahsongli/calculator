const add = function(a,b){
    let sum = a + b;
    return sum; 
};

const subtract = function(a,b){
    subtraction = a - b;
    return subtraction;
};

const multiply = function(a,b){
    let product = a * b;
    return product;
};

const divide = function(a,b){
    let quotient = a / b;
    return quotient;

};


let operate = function(a,b,operator){
    let operatorList = [add, subtract, multiply, divide];
    for (i=0; i<operatorList.length;i++){
        if (operator == operatorList[i]){
            return operatorList[i](a,b);
        }
    }
};



let displayValue = document.querySelector(".currentOperand")


// let displayNumber = function(e){
    
//     };

 
let numberButtons = Array.from(document.querySelectorAll(".operands"));
for (i=0; i < numberButtons.length; i++){
    numberButtons[i].addEventListener("click", (e) =>{
    let operandList = [0,1,2,3,4,5,6,7,8,9];
    for (j=0; j < operandList.length; j++){
        if (e.target.value == operandList[j]){
            displayValue.innerHTML += `${operandList[j]}`;
        }
}});
}

let operatorButtons = Array.from(document.querySelectorAll(".operator"));

