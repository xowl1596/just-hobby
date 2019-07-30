var clock = document.getElementById('clock');
var ctx = clock.getContext('2d');

var time = [0, 0, 0]; //hour, minute, second

var anglePerTime = [Math.PI / 6, Math.PI / 30, Math.PI / 30]; // hour, minute, second
var rad = [240, 230, 215]; //hour, minute, second
var center = [clock.width / 2, clock.height / 2]; //canvas's center


ctx.lineWidth = 1;

draw();

function draw() {
    ctx.clearRect(0, 0, 500, 500);

    var day = new Date();
    //get time
    time[0] = day.getHours();
    time[1] = day.getMinutes();
    time[2] = day.getSeconds();
    console.log(time);

    //flush canvas

    //draw hour dots
    var dotSize = 0;
    if (time[0] > 12) time[0] -= 12;
    for (var i = 0; i < 12; i++) {
        if (i == time[0]) {
            ctx.fillStyle = 'powderblue';
            dotSize = 10;
        }
        else {
            ctx.fillStyle = 'black';
            dotSize = 5;
        }
        ctx.fillRect(center[0] + rad[0] * Math.cos(anglePerTime[0] * (i - 3)), center[1] + rad[0] * Math.sin(anglePerTime[0] * (i - 3)), dotSize, dotSize);
        ctx.stroke();
    }

    //draw minute dots
    for (var i = 0; i < 60; i++) {
        if (i == time[1]) {
            ctx.fillStyle = 'green';
            dotSize = 10;
        }
        else {
            ctx.fillStyle = 'black';
            dotSize = 5;
        }
        ctx.fillRect(center[0] + rad[1] * Math.cos(anglePerTime[1] * (i - 15)), center[1] + rad[1] * Math.sin(anglePerTime[1] * (i - 15)), dotSize, dotSize);
        ctx.stroke();
    }

    //draw second dots
    for (var i = 0; i < 60; i++) {
        if (i == time[2]) {
            ctx.fillStyle = 'red';
            dotSize = 10;
        }
        else {
            ctx.fillStyle = 'black';
            dotSize = 5;
        }
        ctx.fillRect(center[0] + rad[2] * Math.cos(anglePerTime[2] * (i - 15)), center[1] + rad[2] * Math.sin(anglePerTime[2] * (i - 15)), dotSize, dotSize);
        ctx.stroke();
    }

    var t = setTimeout(draw, 1000);
}