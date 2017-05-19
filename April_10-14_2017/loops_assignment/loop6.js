var solArray = ['My', 'Very', 'Educated', 'Mother', 'Just', 'Served', 'Us', 'Nachos'];

var firstLastRow = "";
var rowLength = 0;


for (var i = 0; i < solArray.length; i++) {

    for (var j = 0; j < solArray.length; j++) {
        if (solArray[j].length > rowLength) {
            rowLength = solArray[j].length;
        }
    }
    if (i == 0) {
        for (var k = 0; k < rowLength; k++) {
            firstLastRow += "*";
        }
        firstLastRow += "****"
        console.log(firstLastRow);
    }
        var extraSpace = rowLength - solArray[i].length;
            
            console.log("* " + solArray[i] + " ".repeat(extraSpace) + " *");
        
     if (i == solArray.length - 1) {
        console.log(firstLastRow);
    }


}


// each row must be as long as the longest element with "* " at the beginning and "*" at the end.
// SOOOO find the longest element. Check exercise 2 for finding biggest/longest element in array.
//first and last rows will just be as many asterisks as the longest element with *plus four asterisks*.
//if the length of the element is shorter than the length of the longest element, add spaces to make them equal somehow
