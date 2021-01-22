var marks = [45, 55, 65, 75, 85, 95, 98, 20, 63, 120];
var max = marks[0];
for(var i = 0; i < marks.length; i++){
    var element = marks[i];
    if(element > max){
        max = element;
    }
    
}
console.log(max);