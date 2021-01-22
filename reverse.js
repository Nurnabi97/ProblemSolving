var sentence = "mojammel dokan"
function myWords(sentence) {
    var reverse = "";
    for (var i = 0; i < sentence.length; i++) {
        var char = sentence[i];
        reverse = char + reverse;
    }
    return reverse;
}
var result = myWords(sentence);
console.log(result);