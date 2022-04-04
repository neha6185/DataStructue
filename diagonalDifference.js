function diagonalDifference(arr) {
  var lSum = 0,
    rSum = 0;
    let value = 0;
   
  for (let i = 0,j=0; i < arr.length,j<arr.length; i++,j++) {
    
      if (i == j) {
        lSum += arr[i][j];
      }
    
  }
  for (let i = 0,j=arr.length-1; i < arr.length,j>=0; i++,j--) {
      rSum += arr[i][j];
  }
  value = Math.abs(rSum-lSum);
 
  console.log(value);
}
diagonalDifference([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]);
diagonalDifference([[11,2,4],[4,5,6],[10,8,-12]]);
