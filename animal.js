var depth = 22;
var animal = 0;
if (depth <= 10) {
    var first10 = depth * 50;

}
else if (depth <= 20) {
    var first10 = 10 * 50;
    var remaining = depth - 10;
    var second = remaining * 100;
    animal = first10 + second;
}
else {
    var first10 = 10 * 50;
    var second = 10 * 100;
    var remaining = depth - 20;
    var third = remaining * 300;
    animal = first10 + second + third;

}
console.log(animal);