let sum: number = 0;
let count :number =0;
let i:number=1;

for(let i =2 ; count < 30; i++){
    let isPrime: boolean= true;
    if(i == 2){
        sum += i;
        count++;
        continue;
    }
    for(let j =2 ;j<=Math.sqrt(i);i++){
        if(i % j == 0){
            isPrime = false;
            break;
        }
    }
if(!isPrime){
    continue;
}
sum+=i;
count++
}
console.log("Tổng 30 số nguyên tố đầu tiên = " + sum);