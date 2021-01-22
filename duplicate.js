var numbers = [2, 3, 3, 5, 4, 5, 6, 7, 3, 2, 6];
var uniqueNum = [];

for(var i = 0; i < numbers.length; i++){
    var element = numbers[i];
    var index = uniqueNum.indexOf(element);
    if(index == -1){
        uniqueNum.push(element);
    }
}
console.log(uniqueNum);