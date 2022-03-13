
function redundant(str){
    return (suffix) =>{
        return(str + suffix);
    }
   
}
var str = "apple";
const a = redundant(str);
console.log(a('ly'));
// function makeAdder(x) {
//     return function(y) {
//       return x + y;
//     };
//   }
  
//   var add5 = makeAdder('apple');
//   var add10 = makeAdder('hello');
  
//   console.log(add5('eat'));  // 7
//   console.log(add10('hi')); // 12