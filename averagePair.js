function averagePair(arr,avg){
   
    let collection = {};
    let pair = [];
    var index = 0;
   
        
        var start =0;
        var last = arr.length-1;
        while(start !== last){
            let average = (arr[start] +arr[last])/2;
            if(average === avg){

                pair.push(arr[start],arr[last])
                collection[index] =pair;
                console.log(collection);
               return true;
                
            }
            if(average < avg){
                start++;
            }
            if(average > avg){
                last--;
            }
        }
        if(collection.length >0){
            console.log(collection);
        }
       
        return false;
       
    

}

// var res = avaragePair([1,2,3],2.5);
var res = avaragePair([1,3,3,5,6,7,10,12,19],8);
 console.log(res.toString());