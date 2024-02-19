//@ts-check
// console.log('Compiler is running?');
function print(value) {
    console.log(value);
}
function insertAtBeginning(array, value) {
    var newArray = [value].concat(array);
    return newArray;
}
var demoArray = [1, 2, 3];
var updatedArray = insertAtBeginning(demoArray, -1);
var stringArray = insertAtBeginning(['a', 'b', 'c'], 'd');
print(updatedArray);
print(stringArray);
