
// INTRODUCTION
// let yourName = prompt ("Enter your name here please");
// if (yourName != null){
//     document.getElementById("sayHello").innerHTML = "Hello " + yourName;
// } else {
//     alert("You just couldn't follow instructions huh?");
// }

// MATH

document.write("2 + 3 = ", 2 + 3, "<br/>");
document.write("2 - 3 = ", 2 - 3, "<br/>");
document.write("2 * 3 = ", 2 * 3, "<br/>");
document.write("4 / 3 = ", 4 / 3, "<br/>");
document.write("2 % 3 = ", 2 % 3, "<br/>");

document.write("Max Num = ", Number.MAX_VALUE, "<br/>");
document.write("Min Num = ", Number.MIN_VALUE,"<br/>");

// will not be precise after 16 digits
precisionTest = 0.1000000000000001;
document.write(precisionTest + 0.1000000000000001, "<br/>");
// rounding
let balance = 1563.87;

// random number increment
let ranNumb = 5;

document.write("Monthly payment : ", (balance / 12).toFixed(2),"<br />");
document.write("randNumb++ = ", ranNumb)