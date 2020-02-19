// Given var arr = [8,6,7,5,3,0,9] reverse the array and print the result
// Predicted output: [9,0,3,5,7,6,8]
// When you have solved this, create new values for your array and ensure it still works as expected.
var arr = [8,6,7,5,3,0,9];
var newarr =[];
for (var i=0;i<arr.length;i++){ 

    newarr.push(arr[(arr.length-1)-i]);   
}
arr=newarr;
console.log(arr);