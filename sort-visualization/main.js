var canvas = document.getElementById("canv");
var ctx = canvas.getContext("2d");
ctx.lineWidth = 1;
var arr = [];

var index = 0;
var jn = 0;
var end = 0;
var start = null;

const NUM_OF_ELEMENT = 128;
const SHUFFLE_POWER = 1500;

for (var i = 0; i < NUM_OF_ELEMENT; i++) {
    arr[i] = i;
}

shuffle();


function shuffle() {
    for (var i = 0; i < SHUFFLE_POWER; i++) {
        var e1 = parseInt(Math.random() * NUM_OF_ELEMENT);
        var e2 = parseInt(Math.random() * NUM_OF_ELEMENT);
        var temp = arr[e1];
        arr[e1] = arr[e2];
        arr[e2] = temp;
    }
    draw();
}

function reverse() {
    for (var i = 0; i < NUM_OF_ELEMENT; i++) {
        arr[i] = NUM_OF_ELEMENT - i;
    }
    draw();
}

function stop() {
    clearInterval(start);
}

function draw() {
    ctx.clearRect(0, 0, NUM_OF_ELEMENT, NUM_OF_ELEMENT);
    ctx.beginPath();
    for (var i = 0; i < arr.length; i++) {
        ctx.moveTo(i, NUM_OF_ELEMENT);
        ctx.lineTo(i, NUM_OF_ELEMENT - arr[i]);
        ctx.stroke();
    }
}


//bubble sort -> O(n^2)

function bubble_sort_c() {
    console.log(index + " " + jn);
    if (index < arr.length - 1) {
        if (jn < arr.length - end) {
            if (arr[jn] > arr[jn + 1]) {
                var temp = arr[jn];
                arr[jn] = arr[jn + 1];
                arr[jn + 1] = temp;
                console.log("swap");
                draw();
            }
            jn++;
            if (jn == arr.length - end) {
                index++;
                end++;
                jn = 0;
            }
        }
    }
    if (index == arr.length - 1) {
        console.log("done");
        index = 0;
        jn = 0;
        end = 0;
        clearInterval(start);
    }
}

function bubble_sort() {
    index = 0;
    jn = 0;
    end = 0;
    start = null;
    console.log("Start : bubble sort");
    start = setInterval(bubble_sort_c, 1);
}

//Selection sort -> O(n^2)

function selection_sort_c() {
    var max = 0;

    for (var i = 0; i < arr.length - end; i++) {
        if (arr[i] > arr[max]) max = i;
    }

    var temp = arr[max];
    arr[max] = arr[arr.length - 1 - end];
    arr[arr.length - 1 - end] = temp;
    end++;

    draw();

    console.log(end);

    if (arr.length - end == 0) {
        console.log("done");
        clearInterval(start);
    }
}

function selection_sort() {
    start = null;
    end = 0;
    console.log("Start : selection sort");
    start = setInterval(selection_sort_c, 1);
}

//insertion sort -> O(n^2)

function insertion_sort_c() {

}

function insertion_sort() {
    start = null;
    end = 0;
    console.log("Start : insertion sort");
    start = setInterval(insertion_sort_c, 1);
}