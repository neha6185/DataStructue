function matchingString(strings, queries) {
  var lookup = new Map();

  var arr = [];
 
  for (var i = 0; i < strings.length; i++) {
    
    if (!lookup.has(strings[i])) {

      lookup.set(strings[i], 1);
    } else {
        var val = lookup.get(strings[i]);
      lookup.set(strings[i], ++val);
    }
  }
  console.log(lookup);
  for (var i = 0; i < queries.length; i++) {
    if (lookup.has(queries[i])) {
      arr[i] = lookup.get(queries[i]);
    } else {
      arr[i] = 0;
    }
  }

  return arr;
}

var str2 = [
  "abcde",
  "sdaklfj",
  "asdjf",
  "na",
  "basdn",
  "sdaklfj",
  "asdjf",
  "na",
  "asdjf",
  "na",
  "basdn",
  "sdaklfj",
  "asdjf",
];
var query1 = ["abcde", "sdaklfj", "asdjf", "na", "basdn"];
var str1 = ["def", "de", "fgh"];
var query = ["de", "lmn", "fgh"];
var result = matchingString(str2, query1);
console.log(result);
