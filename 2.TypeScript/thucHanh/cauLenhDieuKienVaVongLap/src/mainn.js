var sum = 0;
var count = 0;
var i = 1;
for (var i_1 = 2; count < 30; i_1++) {
    var isPrime = true;
    if (i_1 == 2) {
        sum += i_1;
        count++;
        continue;
    }
    for (var j = 2; j <= Math.sqrt(i_1); i_1++) {
        if (i_1 % j == 0) {
            isPrime = false;
            break;
        }
    }
    if (!isPrime) {
        continue;
    }
    sum += i_1;
    count++;
}
console.log("Tổng 30 số nguyên tố đầu tiên = " + sum);
