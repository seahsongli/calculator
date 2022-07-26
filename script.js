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


let displayValue = document.querySelector(".currentOperand");

let deleteButton = document.querySelector(".delete");
deleteButton.addEventListener("click", () => {
    let deletedString = displayValue.innerHTML.split("").slice(0,-1).join("");
    return displayValue.innerHTML = `${deletedString}`;
    
});

let clearButton = document.querySelector(".clear");
clearButton.addEventListener("click", ()=>{
    return displayValue.innerHTML = " ";
})


 //Append numbers into display
let numberButtons = Array.from(document.querySelectorAll(".operands"));
for (i=0; i < numberButtons.length; i++){
    numberButtons[i].addEventListener("click", (e) =>{
    let operandList = [0,1,2,3,4,5,6,7,8,9];
    for (j=0; j < operandList.length; j++){
        if (e.target.value == operandList[j]){
            displayValue.innerHTML += `${operandList[j]}`;
        }
}})
};
//Append operators into display
let operatorButtons = Array.from(document.querySelectorAll(".operator"));
for (i=0; i<operatorButtons.length;i++){
    operatorButtons[i].addEventListener("click", (e)=>{
        let operatorList = ["+","-", "x","÷"];
        for (j=0; j < operatorList.length; j++){
            if (e.target.value == operatorList[j]){
                displayValue.innerHTML += `&nbsp;${operatorList[j]}&nbsp;`;
            }

    }})
};


let equalButton = document.querySelector(".equal");
equalButton.addEventListener("click", (e)=>{
    if(e.buttons == 1){
        
        let result = operate(parseInt(tempArray[0]), parseInt(tempArray[2]), parseInt(tempArray[1]));
        return result;
    }
})

