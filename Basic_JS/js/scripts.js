
// SECTION1 Play with variables
console.log(1+1);
console.log("apple" + "orange");
console.log(1+2+"applle");
console.log("apple"+1+2);
console.log(1+true);
console.log(0==false);
console.log(1.0==true);
console.log(1==true);
console.log(2=="2")

// SECTION2 PLAY WITH ARRAYS
arr=["Rohit" , "Dhawan" , "Kholi", "Raina", "Dhoni", "Yuvi", "Jadeja", "Ashwin", "Bumrah", "Shami", "Umesh"];
console.log(arr);
arr.shift();
console.log(arr);
console.log(arr.length);


arr.push("Player12");
console.log(arr);
arr1=arr;
console.log(arr1)
console.log(arr1.sort());

// Display a random jersey number
    let random_number = [];
    for(let i of arr1){
        var a = Math.random();
        a = Math.ceil(a * 100);
        if(!random_number.includes(a)){
            random_number.push(a);
            console.log(i +  "-" +a);
        }
        else{
            console.log(i + "-" + (a-1));
        }
    }
    //Random number check condition
    //For loops


console.log("Upper Case");
let array_uppercase = [];
for(let j of arr1){
    j = j.toUpperCase();
    array_uppercase.push(j);
}
console.log(array_uppercase);
console.log(arr1);

// SECTION3 PLAY WITH FUNCTIONS
// DISPLAY 1 TO 100
console.log("Display nnumbers from 1-100");
function print1_to_100(){
    for(let i=1;i<101;i++){
        console.log(i);
    }
}
print1_to_100()


console.log("Display date");
function display_date(){
    date = new Date();
    var date_print = (date.getDate()<10 ? 0 + " " + date.getDate() : date.getDate());
    var month_print = (date.getMonth()<10 ? 0 + "" + (date.getMonth()+1) : (date.getMonth()+1));
    console.log(date_print + "/" + month_print + "/" + date.getFullYear());
}
display_date()


// Celcius to fahrenheit
console.log("Celcius to fahrenheit");
function cel_to_fah(a){
    a = (a*9/5) + 32;
    return a;
}
var a = 97;
a = cel_to_fah(a);
console.log(a);

// Average of numbers
console.log("Average of numbers");
function avg_of_array(arr){
    return average = arr.reduce((a,b) => a+b , 0)/arr.length;
}
arr5 = [1, 2, 3, 4, 5 ,6];
average = avg_of_array(arr5);
console.log(average);
//Reduce function

// Reverse a string
function reverse_string(str){
    var reverse_str = "";
    for(let i=str.length-1 ; i>=0;i--){
        reverse_str += str[i];
    }
    return reverse_str;
}
console.log(reverse_string("ABCD"));
