function validAnagram(str1,str2){
   //make lookup list to check strings
   const lookup = {};
    if(str1.length !== str2.length){
        return false;
    }
    for(let i=0;i<str1.length;i++){
        let letter = str1[i];
        lookup[letter] ? lookup[letter] += 1: lookup[letter] =1;
    }
    console.log(lookup);
    for(let i=0;i< str2.length;i++){
        let letter = str2[i];
        if(!lookup[letter]){
            return false;
        }else{
            lookup[letter] -=1;
        }
    }
    return true;
       
    
}

var str1 = 'anagram';
var str2 = 'nagmar';
console.log(validAnagram(str1,str2));