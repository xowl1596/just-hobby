function factorial(n){
    var r = 1;
    for(var i = 1; i <= n; i++){
        r *= i;
    }
    return r;
}
console.log(factorial(40));
var result = factorial(40) / factorial(20) ** 2;
console.log(result);