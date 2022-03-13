function removeZero(numStr){
// Method 3
var li=0;
var ri = numStr.length-1;
while((numStr[li] == 0) &&(li <numStr.length)){
    li++;
}
while((numStr[ri] ==0) && (ri >0)){
    ri--;
}

var str = numStr.substring(li,ri+1);
console.log(parseFloat(str));

    //    Method1
//    console.log(parseFloat(numStr,10));


//Method 2
// var str = numStr.split('.');
// var s1 = str[0];
// var s2 = str[1];
// var li=0;
// var ri = s2.length-1;
// while((s1[li] == 0 ) && (li < s1.length)){
//     li++;
// }
// while((s2[ri] ==0) && (ri > 0)){
//     ri--;
// }
//  s1= s1.slice(li,s1.length); 
// s2 = s2.slice(0,ri+1);
//   console.log(`${ s1}.${s2}`);

    
}
var numStr = "000345.03400";
removeZero(numStr);