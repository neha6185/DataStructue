function stringRotation(str1,str2){
    var strChk = str1.concat(str1);
    console.log(strChk);
    if(strChk.includes(str2)){
        return true;
    }
    return false;

}
console.log(stringRotation("waterbottle","bottleerwat"));