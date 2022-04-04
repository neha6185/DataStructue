
function rotateLeft(d,arr){

   for(var i = d;i<arr.length;i++){
       arr.unshift(arr.pop());
   }
   return arr;

}
var arr = [1,2,3,4,5];
console.log(rotateLeft(4,arr));