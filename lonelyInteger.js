function lonelyInteger(arr){
    var lookup = new Map();
    var key;
    for(var i=0;i<arr.length;i++){
        key = arr[i];
        if(!lookup.has(key)){
            lookup.set(key,1);
        }
        else{
            var val = lookup.get(key);
            lookup.set(key,++val);
        }
    }
    console.log(lookup);
    lookup.forEach((key,value)=> {
        if(key == 1){
            console.log(value);
        }
    })
    var val;
    
   return;
    
    

}

var arr = [1,2,3,4,3,2,1];
var re = lonelyInteger(arr);
console.log(re);