
//aplpying closures in function factory by calling inner function with variable
function functionFactory(num){
    const sum = (num2)=> num+num2;
    return sum;
}

let ff = functionFactory(2);
console.log(ff(3));
