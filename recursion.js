function recursion(num) {
    for (var i = 0; i <= num; i++) {
        if(num == 1){
            return 1; // when num == 1 it's retrun 1 for stop the loop
        }
        else{
            return num * recursion(num-1); //5*(5-1)
        }
    }
}
var result = recursion(5); //for factrial 5
console.log(result);