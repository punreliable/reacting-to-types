function add(a:number, b:number) {
  return a + b;
}

function print(value: any) {
  console.log(value);
}

// Generics

function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [ 1, 2, 3 ];

const updatedArray = insertAtBeginning(demoArray, -1); // [-1, 1, 2, 3]

//const result = add(2, 5);
//console.log(result);

print(updatedArray);
