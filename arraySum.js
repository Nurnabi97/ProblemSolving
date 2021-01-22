var numbers = [30, 35, 50, 60, 70, 75];
function arraySum(numbers) {
    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
        var element = numbers[i];
        sum = element + sum;
    }
    return sum;
}
var result = arraySum(numbers);
console.log(result);