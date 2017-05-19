let fs = require('fs');
let array1 = [];
let finalText = "",
    finalText1 = "";
//I did it two ways for funsies: Loop Way and Reg Ex Way.

//Loop Way
fs.readFile('./quote.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log("Original: \n" + data + " \n");

    array1 = data.split(" ");

    for (let i = 0; i < array1.length; i++) {
        if (array1[i][0].toLowerCase() === "b") {
            array1[i] = "Brainstation";
        }
    }

    finalText1 = array1.join(" ");
    console.log("Loop & Array Way: \n" + finalText1 + " \n");

    fs.writeFile('./newquoteLoop.txt', finalText1, (err, data) => {
        if (err) throw err;
    });
});

//Reg Ex Way
fs.readFile('./quote.txt', 'utf8', (err, data) => {
    if (err) throw err;
    finalText = data.replace(/\bb\w+/gi, "Brainstation");
    console.log("Reg Ex Way: \n" + finalText);
    fs.writeFile('./newquoteRegEx.txt', finalText, (err, data) => {
        if (err) throw err;
    });
});