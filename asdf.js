let max = 10;
let min = 1;
let numArray = [];

let a = (Math.random() * (max - 0.99) + min).toFixed(2);
numArray.push(a);
// console.log(a.toFixed(2));
console.log(numArray);

let arrObject = {
  a: [1, 2, 3, 4, 5],
  b: [1, 2, 3, 4, 5],
  c: [1, 2, 3, 4, 5],
};
for (let i in arrObject) {
  console.log(Array.isArray(arrObject[i]));
}
