var words = "hello malua shetti hoga la mala";
var count = 0;

for(var i = 0; i < words.length; i++){
    var char = words[i];
    if(char == " "){
        count++;
    }
   
}
console.log(count);