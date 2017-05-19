const arr1 = [5,8,2,1,5,7,3,4,5,8,1,2,4,8,3,1,4,5]; 
const arr2 = [15,26,74,12,3,6,9,1,2,5]; 

var max = -Infinity;

for (var i = 0; i < arr1.length; i++) {
    if (arr1[i] > max){
        max = arr1[i];
    }
}

console.log(max);

max = 0; //Just making sure I understand

for (var i = 0; i < arr2.length; i++) {
    if (arr2[i] > max){
        max = arr2[i];
    }
}

console.log(max);


 //Ian's CodeAlong
max = arr2[0]; //First element of array.

for (var i = 0; i < arr2.length; i++) {
    if (arr2[i] > max){
        max = arr2[i];
    }
}

console.log(max);

