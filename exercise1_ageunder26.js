var under26 = [{"name":"Luis","age":25},
              {"name":"Osuna","age":29},
              {"name":"Diego","age":17},
              {"name":"Tulio","age":31},
              {"name":"William","age":31}];
var newArray = [];

under26.forEach(function(element) {
  if (element.age < 26) newArray.push(element) 
  console.log(element);
});
console.log(newArray)