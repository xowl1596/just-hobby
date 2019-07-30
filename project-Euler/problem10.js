// 10 이하의 소수를 모두 더하면 2 + 3 + 5 + 7 = 17 이 됩니다.
// 이백만(2,000,000) 이하 소수의 합은 얼마입니까?

let sum = 0;

console.log("Cyka Blyat!!");

for(var i = 2; i <=2000000; i++){
    if(checkPrime(i)){
        // console.log(i);
        sum += i;
    }
}


console.log(sum);

function checkPrime(n) {
    var isPrime = true;

    for(var i = 2; i <= Math.sqrt(n); i++){
        if(n % i == 0) isPrime = false;
    }
    
    return isPrime;
}