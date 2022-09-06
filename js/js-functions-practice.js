// practice function that returns an input //
function echo(input){
    return input;
}
//ternary form with condition to for string input //
function logInput(input){
    console.log(( typeof input ==='string')? input + " is a string" : input + " is not a string");
}
// function that returns second index of first argument//
function indexOfIgnoreCase(str1,str2){
    return str1.toLowerCase().indexOf(str1);
}