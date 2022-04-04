function gridChallenge(grid){
    var arr =[];
    for(var i=0;i<grid.length;i++){
        arr.push(grid[i].split(''));
    }
    for(var col=0;col<arr.length;col++){
        for(var row=0;row<arr.length;row++){
           var val = [];
           
           val.push(arr[row][col]);
           if(!val.sort()){
               return false;
           }

        }
        
    }
    
    console.log(arr);

}
var grid = ['ebacd', 'fghij', 'olmkn', 'trpqs', 'xywuv'];
var re = gridChallenge(grid);
console.log(re);