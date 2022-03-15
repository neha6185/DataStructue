function stringCompression(str){
    var lookup = {};
    for(var i = 0;i<str.length;i++){
        var key = str[i];
        if(!lookup[key]){
            lookup[key] = 1;
        }else{
            lookup[key] +=1;
        }
    }

    console.log(lookup);
    var l1 = Object.entries(lookup);
    var l2 = l1.toString();
    console.log(l1.toString());
    const l3 = l2.replaceAll(',', '');


    console.log(l3);

}

stringCompression("aaabcbcbcbcbd");