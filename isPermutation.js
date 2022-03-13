//Another solution: by sorting string and then comparing only index value

function isPermutation(str1,str2){
    if(str1.length != str2.length){
        return false;
    }
    var len = str1.length;
    var lookup = [];
    for(var  i = 0; i< str1.length;i++){
        lookup[i] = str1[i];
    }
    for(var i = 0;i<str2.length;i++){
        if(lookup.includes(str2[i])){
            lookup.splice(lookup.indexOf(str2[i]),1);
        }
        else{
            return false;
        }
    }
    return true;
}

console.log(isPermutation('hello','hello'));