var num = 3.14153234;
var result = Math.floor(num);
var result1 = Math.ceil(num);
var result2 = Math.random(num) * 10;
var result3 = Math.round(result2);
console.log(result);
console.log(result1);
console.log(result2);
console.log(result3);

for (var i = 0; i <= 10; i++) { // ten times output
    var result2 = Math.random(num) * 6; // random output number with in six(6) 
    var result3 = Math.round(result2); //for round the random number
    console.log(result3);
}