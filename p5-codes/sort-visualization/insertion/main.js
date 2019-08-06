const MAX_VALUE = 128;

let arr = [];
let current_idx = 1;
let temp_idx = 2;

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

    if(temp_idx != MAX_VALUE+1){
        if(arr[current_idx - 1] > arr[current_idx]){ //값 비교 후 교체
            swap(arr, current_idx-1, current_idx);
            current_idx--;
        }else{
            current_idx = temp_idx;
            temp_idx++;
        }
    }

}