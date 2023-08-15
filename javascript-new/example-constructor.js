function ExampleConstructor() {}

console.log(
  'ExampleConstructor.prototype value: ',
  ExampleConstructor.prototype
);

console.log(
  'typeof ExampleConstructor.prototype:',
  typeof ExampleConstructor.prototype
);

const example = new ExampleConstructor();

console.log(
  'example instanceof ExampleConstructor',
  example instanceof ExampleConstructor
);
