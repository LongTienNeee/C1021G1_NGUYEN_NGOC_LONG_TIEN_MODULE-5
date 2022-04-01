let money = 10000;
const buyACar = (car : any) => {
    return new Promise(((resolve, reject) => {
        setTimeout(() => {
            if(money >= 10000){
                resolve("can buy" + car);
            } else {
                reject("Do not enough money");
            }
        }, 100);
    }))
}

money = 1000001;
const promise = buyACar(" Mẹc xe đẹc ben").then(value => {
    console.log(value);
}, error => {
    console.log(error);
})