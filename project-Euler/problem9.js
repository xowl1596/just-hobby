for(var a = 1; a <= 1000; a++){
    for(var b = 1; b <= 1000; b++){
        var d = a**2 + b**2;
        var c = Math.sqrt(d);
        // console.log(d);
        if(c%1 == 0){
            if(d == c**2){
                if(a+b+c == 1000){
                    console.log(a*b*c);
                }
            }
        }
        
    }
}

console.log("done");