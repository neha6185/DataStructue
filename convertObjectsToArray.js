//to convert object into array there are three methods
// Object.keys(obj),Object.values(obj),Object.entries(obj)
function convert(obj){
    return Object.entries(obj);

}

var Person = {
    name:'Neha',
    age: 32
};
var Person2 ={
    likes: 2,
    dislikes: 3,
    followers: 10
  }
console.log(convert(Person2));