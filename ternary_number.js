var num1 = 15;
var num2 = 10;

let result;

// using ternary operator
result = num1 > num2 ? num1 + num1 : num1 + num2;
console.log(result);

// using if-else
if(num1 > num2) {
    result = num1 + num1;
}
else {
    result = num1 + num2;
}
console.log(result);