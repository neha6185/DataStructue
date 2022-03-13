function addSuffix(str){
    return (suffix) =>{
        return str +suffix;
    }

}
var str = "hopeless";
var str1 = addSuffix(str);
console.log(str1('ly'));