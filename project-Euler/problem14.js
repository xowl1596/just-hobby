var cnt = [];

for (var i = 1; i <= 1000000; i++) {
    var temp = i;
    var seq = 1;
    while (true) {
        if (temp % 2 == 0) {
            temp = temp / 2;
            seq++;
        } else {
            temp = (temp * 3) + 1;
            seq++;
        }
        if (temp == 1) break;
    }
    // console.log(i + " : " + seq);
    cnt[i] = seq;
}

var max = 0;
var idx = 0;
for (var i = 1; i <= 1000000; i++) {
    if (cnt[i] > max) {
        max = cnt[i];
        idx = i;
    }
}

console.log(idx, max);