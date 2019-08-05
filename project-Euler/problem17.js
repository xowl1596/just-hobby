var words_0_19 = [
    'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
    'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'
];

var words_20_90 = [
    'nope', 'nope', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'
];

var word_100 = 'hundred';
var word_1000 = 'onethousand';
var and = 'and';

var sum = 0;
for (var i = 1; i <= 1000; i++) {
    var str = getString(i);
    sum += str.length;
    console.log(str, str.length);
}

console.log(sum);

function getString(n) {
    if (n >= 1 && n <= 19) {
        return words_0_19[n];
    }
    else if (n >= 20 && n <= 99) {
        if (n % 10 == 0) {
            return words_20_90[n / 10];
        }else{
            return words_20_90[parseInt(n / 10)] + words_0_19[n%10];
        }
    }else if(n >= 100 && n <= 999){
        if(n % 100 == 0){
            return words_0_19[n /100] + word_100;
        }else{
            return words_0_19[parseInt(n/100)]+ word_100 + and + getString(n%100);
        }
    }else{
        return word_1000;
    }
}