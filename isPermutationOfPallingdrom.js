function isPermutationofPallingdrom(str){
    var lookup = {};
    
    for(var i = 0;i<str.length;i++){
        var key = str[i];
        // var count = 0;
        if(!lookup[key]){
           lookup[key] = 1;
        }
        else{
            lookup[key] += 1;
            
        }
        
    }
    console.log(lookup);
    var val = Object.values(lookup);
    console.log(val);
    var c = 0;
    for(var j = 0;j<val.length;j++){
       if(val[j] %2 != 0){
           c++;
          
       }
     }
     if(c>1){
         return false;
     }
     return true;

}

console.log(isPermutationofPallingdrom('abccdda'));
