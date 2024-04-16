// prompt user to input 3 numbers
let userInput = prompt(`Please input 3 numbers each`)
// convert users string into a number array
let num = userInput.split(``).map(Number);
// create varable to use in console.log division
let sumOfNum = findSum(num);

// function to find the sum of an array added together 
function findSum(arrayNum) {
    // create variable to store the num
    let sum = 0;
    // loop through each index in the array
    for (let i = 0; i < arrayNum.length; i++) {
        // add the current number to the variable
        sum += arrayNum[i];
    }
    // return sum
    return sum;
}

// function using an expresion to subtract
function subtractNum(a, b) {
    return a - b;
}

// function using an expresion to multiply
function multiplyNum(a, b) {
    return a * b;
}

// function using an expresion to divide
function divideNum(a, b) {
    // checks if b is = to 0
    if (b === 0) {
        // output results if b is = to 0
        return `Can't divide by zero!`;
    }
    // if b is not 0 then division takes place
    return a / b;
}

// check if user inputs 3 numbers
if (num.length != 3) {
    // output results if user doesn't input 3 numbers
    console.log(`Please enter 3 numbers`);
    alert(`Please enter 3 numbers`);
} else {
    // outputs array
    console.log(`Sum: ${num}`);
    // outputs results when array is added together
    console.log(`Value: ${findSum(num)}`);
    // outputs results when 1st and 2nd numbers are used
    console.log(`Subtraction: ${subtractNum(num[0], num[1])}`);
    // outs results when 3rd and 1st numbers are used
    console.log(`Multiplication: ${multiplyNum(num[2], num[0])}`);
    // outputs results when varianle sumOfNum and 2nd num from array is used
    console.log(`Division: ${divideNum(sumOfNum, num[2])}`);

    // output answers with an alert
    alert(`Sum: ${num}
    Value: ${findSum(num)}
    Subtraction: ${subtractNum(num[0], num[1])}
    Multiplication: ${multiplyNum(num[2], num[0])}
    Division: ${divideNum(sumOfNum, num[2])}`);
}