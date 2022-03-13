function isUnique(str){
    var lookup = [];
    var count = 0;
    for(var i=0;i<str.length;i++){
        if(lookup.includes(str[i]))
        {
            return false;
        }
        else{
            lookup.push(str[i]);
        }
       
    }
    
    return true;

}

console.log(isUnique('abc'));