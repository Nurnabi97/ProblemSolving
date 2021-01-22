// 1st method:
var a = 7;
var b = 5;
console.log("before swap: a =", a, "b =", b);
var temp = a;
var a = b;
var b = temp;
console.log("after swap: a =", a, "b =", b);

// 2nd method:
var c = 10;
var d = 15;
console.log("before swap: c =", c, "d =", d);
var c = c + d;
d = c - d;
c = c - d;
console.log("after swap: c =", c, "d =", d);

// 3rd method:
var p = 25;
var q = 20;
console.log("before swap: p =", p, "q =", q);
[p, q] = [q, p];
console.log("after swap: p =", p, "q =", q);

