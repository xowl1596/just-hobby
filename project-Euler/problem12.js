
for (var i = 1; ; i++) {
    var sum = (i * (i + 1)) / 2;
    console.log(sum, getNumOfDvider(sum));
    if (getNumOfDvider(sum) >= 500) {
        console.log(sum);
        break;
    }
}

console.log("done");

function getNumOfDvider(num) {
    var temp = 0;
    var cnt = 1;

    while (num % 2 == 0) {
        num = num / 2;
        temp++;
    }
    cnt *= temp + 1;

    for (var i = 3; i <= num; i += 2) {
        temp = 0;
        while (num % i == 0) {
            num = num / i;
            temp++;
        }
        cnt *= temp + 1;
    }

    return cnt;
}