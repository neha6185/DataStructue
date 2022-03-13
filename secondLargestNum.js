function getMax(arr){
    var max = 0;
    for(var i=0;i<arr.length;i++){
        if(max < arr[i]){
            max = arr[i];

        }
       
    }
    return max;
}


function findSecondLargest(arr){
    var max1 = getMax(arr);
   var arr2 = arr.filter((num)=>  num!== max1);
   var max2 = getMax(arr2);
    
  console.log(max2);


}


findSecondLargest([25, 143, 89, 13, 105]);