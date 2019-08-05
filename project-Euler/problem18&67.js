var fs = require('fs');
var textByLine = fs.readFileSync('./project-Euler/problem67_data.txt').toString().split("\n");

var textArr = [];
for(var i = 0; i < textByLine.length; i++){
    textArr[i] = textByLine[i].split(" ");
}

for(var i = 0; i < textArr.length; i++){
    for(var j = 0; j < textArr[i].length; j++){
        textArr[i][j] = parseInt(textArr[i][j]);
    }
}

for(var i = textArr.length - 2; i >= 0; i--){
    for(var j = 0; j < textArr[i].length; j++){
        if(textArr[i+1][j] > textArr[i+1][j+1]){
            textArr[i][j] += textArr[i+1][j];
        }else{
            textArr[i][j] += textArr[i+1][j+1];
        }
    }
}

console.log(textArr[0][0]);