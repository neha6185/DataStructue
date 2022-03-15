function sameFrequency(num1,num2){
    var s1 = num1.toString();
    var s2 = num2.toString();
    if(s1.length !== s2.length) return false;
    var lookup = {};
    for(var i = 0;i<s1.length;i++){
        var key = s1[i];
        lookup[key] ? lookup[key] +=1: lookup[key] =1;
    }
    for(var i =0;i<s2.length;i++){
        var find = s2[i];
        if(lookup[find]){
            lookup[find] -=1;
        }
        else{
            return false;
        }
    }
    return true;
}


var res= sameFrequency(355,43);
console.log(res);