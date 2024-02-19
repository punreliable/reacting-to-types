//@ts-check

// console.log('Compiler is running?');

function print(value: any) {
	console.log(value);

}


function insertAtBeginning<T>(array: T[], value: T) {
	const newArray = [value, ...array];
	return newArray;
}

const demoArray = [ 1, 2, 3 ];
const updatedArray = insertAtBeginning(demoArray, -1);
const stringArray = insertAtBeginning(['a','b','c'], 'd');

print(updatedArray);
print(stringArray);
