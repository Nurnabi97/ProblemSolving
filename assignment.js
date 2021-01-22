
//kilometerToMeter program.
function kilometerToMeter(kilometer) {
    var meter = kilometer * 1000; // 1km = 1000 Meter.
    return Math.abs(meter); //for positive result.
}
var result = kilometerToMeter(-5); //calling function and input desire kilometer value.
console.log(result); //output result in Meter.




//budgetCalculator program.
function budgetCalculator(watch, phone, laptop) {
    var watch = watch * 50;
    var phone = phone * 100;    //price calculation.
    var laptop = laptop * 500;
    var total = watch + phone + laptop; //adding all items price. 
    return total;
}
var result = budgetCalculator(1, 2, 3); //calling function and input desire items quantity.
console.log(result); //output result or taka.




//hotelCost calculation program.
function hotelCost(tourPlan) {
    var total = 0;
    if (tourPlan <= 10) {
        var firstSlotCost = tourPlan * 100; //first ten days cost condication apply.
        var total = firstSlotCost;

    }
    else if (tourPlan <= 20) {      //condication apply for 20 days tour.
        var firstSlotCost = 10 * 100;   //calculate the first ten days cost.
        var remainingDay = tourPlan - 10;   //calculate the remaining day of tour.   
        var secondSlotcost = remainingDay * 80; //second ten days cost condication apply.
        var total = firstSlotCost + secondSlotcost; //adding first and second ten days cost with respect the condication.
    }
    else {
        var firstSlotCost = 10 * 100;
        var secondSlotcost = 10 * 80;
        var remainingDay = tourPlan - 20;
        var thirdSlotcost = remainingDay * 50;  //third ten days cost condication apply.
        var total = firstSlotCost + secondSlotcost + thirdSlotcost;

    }
    return total;
}
var totalCost = hotelCost(11); //calling the funcation and input my desire tourPlan.
console.log(totalCost); //to see the total hotelCost in output.





//to find megaFriend program.
function megaFriend(array) {
    var name = 0;       //to set the name = 0 for compare other value
    for (var i = 0; i < array.length; i++) {
        if (array[i].length > name) {     //friends[i].length use for array word counter where i++.
            var name = array[i].length;   //name var store the longest word value. result = number
            var longestValue = array[i];  //longestValue sotre the longest word. result = string.
        }
    }
    return longestValue;
}
var array = ["nur", "moni", "masud", "hasan", "morshed", "hamidur rahaman ", "hasan", "milon", "aftab"];
var result = megaFriend(array);   //calling funcation and input the array.
console.log(result);    //output of megaFriend result.

