function isSubsequence(subStr,str){
    if(subStr.length > str) return false;
    if(!subStr) return true;
    var indexSub = 0;
    var indexMain = 0;
    while(indexMain < str.length){
        if(subStr[indexSub] === str[indexMain]){
            indexSub++;
        }
        if(indexSub === subStr.length-1) return true;
        indexMain++;
    } 
    return false;
}

var res = isSubsequence("hello","helloWorld");
console.log(res);