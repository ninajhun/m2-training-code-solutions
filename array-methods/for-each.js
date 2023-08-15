const values = [10, 1, 22, 23, 41, 5, 18, 7, 80, 9];

console.log('In order:');
values.forEach((el) => console.log(el));

console.log('Reverse order:');
const reversedArr = [];
values.forEach((el, idx) => {
  console.log(values[values.length - idx - 1]);
});
