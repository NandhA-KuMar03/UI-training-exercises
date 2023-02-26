calculator =  {};
calculator.add = function(a,b){
    let sum = a+b;
    return sum;
}
calculator.sub = function(a,b){
    return a-b;
}
calculator.mul = function(a,b){
    return a*b;
}
calculator.div = function(a,b){
   return a/b;
}
// getting values from user
let number1 = parseInt(prompt("Enter first number" ,0));
let number2 = parseInt(prompt("Enter second number" ,0));

// calling functions
console.log(calculator.add(number1,number2));
console.log(calculator.sub(number1,number2));
console.log(calculator.mul(number1,number2));
console.log(calculator.div(number1,number2));


// add: function(a,b){
//     return a+b;
// },
// sub: function(a,b){
//     return a-b;
// },
// mul: function(a,b){
//     return a*b;
// },
// div: function(a,b){
//     return a/b;
// },