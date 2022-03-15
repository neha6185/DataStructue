// . Given two strings, write a function to check if they are
// one edit (or zero edits) away.
function entryLookup(str1){
    var lookup = {};
    var len = str1.length;

    for(var  i =0;i<len;i++){
        var key = str1[i]
        if(lookup[key]){
            lookup[key] +=1;
        }
        else{
            lookup[key] =1;
        }
    }
    return lookup;
}
function findEdit(str1,str2){
     var lookup =  entryLookup(str1);
    
        // check for one update
        var len2 = str2.length;
        
        var noOfEdit = 0;
        for(var i =0;i<len2;i++){
            var key = str2[i];
            if(lookup[key] >0){
                lookup[key] -=1;
            }
            else{
                noOfEdit++;
            }
        }
        if(noOfEdit >1){
            return false;
        }
        return true;
    
   
}
function oneAway(str1,str2){
    var len1 = str1.length;
    var len2 = str2.length;
    if((len1 -len2 >1)||(len2 -len1 >1)){
        return false;
    }
    var result = findEdit(str1,str2);
    return result;
   

}

console.log(oneAway('pale','ale'));
console.log(oneAway('pale','ppole'));
console.log(oneAway('palem','pale'));
console.log(oneAway('pale','bake'));
console.log(oneAway('pale','ppje'));