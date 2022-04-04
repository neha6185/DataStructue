function count(s,t,a,b,apples,oranges){
    var aDis = apples.map(e=>e+a);
    var oDis = oranges.map(e=>e+b);
    var a = aDis.filter(e => (e >= s)&&(e <= t));
    var b = oDis.filter(e => (e >= s)&&(e <= t));
    console.log(a.length);
    console.log(b.length);
    
}

var s =7,t=10,a=4,b=12;
var apple =[2,3,-4];
var orange =[3,-2,-4];
var re = count(s,t,a,b,apple,orange);