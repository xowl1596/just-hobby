/**
 * p5.js에서 다른 전역 변수/함수를 쓰지 못하도록 하는것 같음
 * 지역변수/함수로 대체해서 사용
 */

/**
 * shuffle() : 배열 arr을 랜덤하게 섞음.
 * @param {*} arr : 섞고자 하는 배열
 */
function shuffle_arr(arr){
    for(let i = arr.length - 1; i >= 0; i--){
        let idx = int(Math.random() * i);
        swap(arr, i, idx);
    }
}

/**
 * swap() : 배열 ar의 i번째 인덱스와 j번째 인덱스의 값을 바꿈
 * @param arr : 배열
 * @param i : 배열 인덱스
 * @param j : 배열 인덱스
 */
function swap(arr, i, j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}