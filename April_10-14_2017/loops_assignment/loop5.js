let yourNum = 4;



    for (var i = 1; i <= yourNum; i++) {

        var str = "";
        //below is the part I'm not getting right.
        for (var k = (yourNum-i); k>=0; k--) {
                
                str += " "; 
            }

        for (var j = 1; j <= i; j++) {
            str+= i + " ";
            
        }
        console.log(str);
    }
