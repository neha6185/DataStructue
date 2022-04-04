function hourGlassSum(arr){
    var max = -63;
    for(var i=0;i<4;i++){
        for(var j=0;j<4;j++){
            let sum = 0;
            sum = (arr[i][j]+arr[i][j+1]+arr[i][j+2]+arr[i+1][j+1]+arr[i+2][j]+arr[i+2][j+1]+arr[i+2][j+2]);
            max = max < sum?sum:max;
        }
        
    }
    return max;
}
var arr = [[-9,-9,-9,1,1,1],[0,-9,0,4,3,2],[-9,-9,-9,1,2,3],[0,0,8,6,6,0],[0,0,0,-2,0,0],[0,0,1,2,4,0]];
var re = hourGlassSum(arr);
console.log(re);