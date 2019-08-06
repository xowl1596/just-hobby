const MAX_VALUE = 128;

let arr = [];
let current_idx = 0;
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

    if(sorted_idx != 0){ //모두 정렬되지 않았을 경우 정렬 실행

        if(arr[current_idx] > arr[current_idx + 1]){ //값 비교후 교체
            swap(arr, current_idx, current_idx + 1);
        }
        current_idx++; //커서 이동
        //이동된 위치가 정렬된 위치일 경우 초기화
        if(current_idx == sorted_idx){
            current_idx = 0;
            sorted_idx--;
        }
    }

}