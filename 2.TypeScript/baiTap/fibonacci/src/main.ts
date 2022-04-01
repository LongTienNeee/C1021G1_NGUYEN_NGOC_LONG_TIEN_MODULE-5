let sum : number = 0;
let count: number = 0;

for ( let i = 1; count < 30; i++) {
    sum += fibonacci(i);
    count++;
}

function fibonacci(num: number) : number {
    if (num<=1) return 1;
    return fibonacci(num-1) + fibonacci(num -2);
}


fibonacci(10);
console.log("Kính thưa quí thầy cô, Tổng của " + count + " số đầu tiên trong dãy fibonacci này là : " + sum)
