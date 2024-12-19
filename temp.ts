let nums = [1, 2, 3, 4, 5, 5, 6, 6, 7, 8, 9, 10];

function greaterThanFive(num) {
    return num > 5;
}

let result = nums.filter(greaterThanFive); // [6, 6, 7, 8, 9, 10]
//console.log(result);

let listOfObjects = [
    { name: 'John', age: 25 },
    { name: 'Jane', age: 30 },
    { name: 'Jim', age: 35 }];


let finalList = listOfObjects.filter(person => person.age >= 25)
console.log(finalList);

