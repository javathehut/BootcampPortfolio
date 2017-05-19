const arr1 = [5,8,2,1,5,7,3,4,5,8,1,2,4,8,3,1,4,5]; // should log 8,2,4,8,2,4,8,4
const arr2 = [15,26,74,12,3,6,9,1,2,5]; // should log 26,74,12,6,2

for (var i = 0; i <=arr1.length; i++) {

    if(arr1[i]%2==0){
        console.log(arr1[i]);
    } 

};

for (var i = 0; i <=arr2.length; i++) {

    if(arr2[i]%2==0){
        console.log(arr2[i]);
    } 

};