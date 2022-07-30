// To do list:
// Prevent equal when only 1 num [Done!!!]
// Del button should be able to amend upper display [Done!!]
// Do not allow 0 to be at the start [Done!!]
// Prevent division by 0 [Done!!]
// Allow negative number [Done!!]
// After pressing equal and pressing operator should give correct results. [Done!!]
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
    switch(operator) {
        case "+":
            return add(a,b);

        case "-":
            return subtract(a,b);
        
        case "x":
            return multiply(a,b);

        case "÷":
            return divide(a,b);
    }
};
  


let displayValue = document.querySelector(".currentOperand");
let upperDisplayValue = document.querySelector(".previousOperand");

let deleteButton = document.querySelector(".delete");
deleteButton.addEventListener("click", () => {
    if (displayValue.innerHTML!= ""){
        let deletedString = displayValue.innerHTML.split("").slice(0,-1).join("");
        return displayValue.innerHTML = `${deletedString}`;
    }
    else{
        let deletedString = upperDisplayValue.innerHTML.split("").slice(0,-1).join("");
        return upperDisplayValue.innerHTML = `${deletedString}`;
    }
});

let clearButton = document.querySelector(".clear");
clearButton.addEventListener("click", ()=>{
    upperDisplayValue.innerHTML = " "
    return displayValue.innerHTML = "0";
});


 //Append numbers into display
let numberButtons = Array.from(document.querySelectorAll(".operands"));

for (i=0; i < numberButtons.length; i++){
    numberButtons[i].addEventListener("click", (e) =>{
    let operandList = [".","(",")",0,1,2,3,4,5,6,7,8,9];
    let tempArray = displayValue.innerHTML.split("");
// if button clicked is 0 and there is only a 0 in lower display, then we do not allow addition of 0s.
    if (e.target.value == 0 && tempArray[0] == "0"){
        return;
    }
    for (j=0; j < operandList.length; j++){
            if (e.target.value == operandList[j] && tempArray[0]!= "0"){
                displayValue.innerHTML += `${operandList[j]}`;
            }
            
            else if (e.target.value == operandList[j] && tempArray == "0"){
                displayValue.innerHTML = `${operandList[j]}`;
            }
                
            }
        })
    };


//Append operators into display
let operatorButtons = Array.from(document.querySelectorAll(".operator"));
for (i=0; i<operatorButtons.length;i++){
    operatorButtons[i].addEventListener("click", (e)=>{
        let processedString = upperDisplayValue.innerHTML.split(" ");
        let operatorList = ["+","-","x","÷"];
        // To allow input of negative numbers
        if (e.target.value == "-" && displayValue.innerHTML == ""){
            return displayValue.innerHTML += "-";
        }
        else if (e.target.value == "-" && displayValue.innerHTML == "0"){
            return displayValue.innerHTML = "-";
        }
// If there is already an operator in upper display, calulate the current two numbers first, append the new operator to upper display.
        if ((processedString.find(string => string == "+"||string == "-" || string == "x" || string == "÷") && !(processedString.find(string=> string == "=")))){
            for (j=0; j < operatorList.length; j++){
                if (e.target.value == operatorList[j]){
                    processedString.filter(Boolean);
                   
                    upperDisplayValue.innerHTML= `${operate(Number(processedString[0]),Number(displayValue.innerHTML), processedString[1])} ${operatorList[j]}`;
                    displayValue.innerHTML = " ";
        }
    }

}       
//For the case where after pressing = and obtaining a result, allows continuation of calculation.
        else if (upperDisplayValue.innerHTML!=""  && processedString.find(string=> string == "=")){
            upperDisplayValue.innerHTML = displayValue.innerHTML;
            for (j=0; j < operatorList.length; j++){
            if (e.target.value == operatorList[j]){
                upperDisplayValue.innerHTML = displayValue.innerHTML +  ` ${operatorList[j]}`;
                displayValue.innerHTML = " ";

        }
    }
}
//For the case to append numbers into lower display and push it up to upper display for storing of value.
        else{
            for (j=0; j < operatorList.length; j++){
                if (e.target.value == operatorList[j]){
                    upperDisplayValue.innerHTML = displayValue.innerHTML +  ` ${operatorList[j]}`;
                    displayValue.innerHTML = " ";
                }
    
        }
}
    return displayValue.innerHTML;})
};


let equalButton = document.querySelector(".equal");
let operator;
equalButton.addEventListener("click", (e)=>{
        let tempArray = upperDisplayValue.innerHTML.split(" ");
        //if only 1 number in display , do not allow = to be appended to display.
        if (tempArray.length < 2 || tempArray.find(string=> string == "=" ) || displayValue.innerHTML==""|| upperDisplayValue.innerHTML=="") {
            return;
        }
        else{
            for (i=0; i<tempArray.length;i++){
                if (tempArray[i]== "+" || tempArray[i]== "-" ||tempArray[i]== "x" || tempArray[i]== "÷"){
                    operator = tempArray[i];
                    
                    }
                    
                }
                
            }
        
        
        // for the case where calculator tries to divide by 0
       
        if (Number(displayValue.innerHTML)!= 0){
            upperDisplayValue.innerHTML = upperDisplayValue.innerHTML + displayValue.innerHTML + " = " ;
            return displayValue.innerHTML = `${operate(Number(tempArray[0]),Number(displayValue.innerHTML),operator)}`;
        }
        else if(Number(displayValue.innerHTML) == 0 && operator =="÷"){
            alert("No number can be divided by 0! Please try a different number!");
       
        }
        
    });

