var nameDiego = [{"name":"Luis","age":25},
              {"name":"Osuna","age":29},
              {"name":"Diego","age":17},
              {"name":"Tulio","age":31},
              {"name":"William","age":31}];
var newArray = [];

nameDiego.forEach(function(element) {
  if (element.name === "Diego") newArray.push(element) 
  console.log(element);
});
console.log(newArray)