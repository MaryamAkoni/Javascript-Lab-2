
let x = 2

if (x > 0) {
    console.log('x is positive');
} else if (x < 0) {
    console.log('x is negative');
} else {
    console.log('x is zero')
}


var day = 3

switch (day) {
    case 1:
        console.log('Sunday');
        break;
    case 2:
        console.log('Monday');
        break;
    case 3:
        console.log('Tuesday');
        break;
    case 4:
        console.log('Wednesday');
        break;
    case 5:
        console.log('Thursday');
        break;
    case 6:
        console.log('Friday');
        break;
    case 7:
        console.log('Saturday');
        break;
    default:
        console.log('not a day of the week');
}


for (let i = 1; i <= 5; i++) {
    console.log(i + " points");
}
console.log("Numbers 1 to 5")


let j = 1;
 
while (j <= 5) { 
    console.log("It is day " + j );
    j++;
// Print i and increment
}
console.log("It is now the weekend")


let k = 1; 
 
do {
    console.log(k);
    k++;
﻿} while (k <= 5);
console.log("All five numbers");


for (var m = 1; m <= 10; m++) {
    if (m === 3) {
        break; 
    }
    console.log(m);
}
console.log("Loop exited at m = 3");


for (var m = 1; m <= 10; m++) {
    if (m === 3) {
        continue; 
    }
    console.log(m);
}


globalVar("I'm global!")
 
function globalVar(no){
    console.log(no);
}
    
localVar("I'm local!")

function localVar(yes){
    console.log(yes);
}
   



