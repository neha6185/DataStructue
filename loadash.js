// According to the lodash documentation, _.compact creates an array with all falsey values removed. The values false, null, 0, "", undefined, and NaN are falsey.

function loadash(arr){
    var compact = arr.filter((ele) => ele >0);
    return compact;
}

var arr = [0, 1, false, 2, "", 3,NaN,undefined];
console.log(loadash(arr));