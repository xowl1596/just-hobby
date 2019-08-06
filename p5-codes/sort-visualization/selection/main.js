const MAX_VALUE = 128;

let arr = [];

let current_idx = 0;
let compare_idx = 0;
let sorted_idx = MAX_VALUE;

function setup(){
    for(let i = 0; i < MAX_VALUE; i++){
        arr[i] = i;
    }
    shuffle_arr(arr);
    console.log(arr);
    createCanvas(MAX_VALUE, MAX_VALUE);
}

function draw(){
    background(0);
    stroke(255);
    for(let i = 0; i < arr.length; i++){
        if(i == current_idx){
            stroke(255,0,0);
        }
        ellipse(i, height - arr[i],1);
        stroke(255);
    }

    if(sorted_idx != 0){
        if(arr[compare_idx] > arr[current_idx]){ //최대값 위치 구하기
            current_idx = compare_idx;
        }
        compare_idx++;
        if(compare_idx == sorted_idx){
            swap(arr, current_idx, sorted_idx-1);
            sorted_idx--;
            current_idx = 0;
            compare_idx = sorted_idx == 1 ? 0 : 1;
            console.log(sorted_idx);
        }
    }
}