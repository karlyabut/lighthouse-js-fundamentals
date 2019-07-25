const isEven  = function (num) {
  return num % 2 === 0;
}

//only for debugging purpose
console.log(isEven(10));
console.log(isEven(11));

//storing the return value into a variable
const tenIsEven = isEven(10);
const elevenIsEven = isEven(11);

console.log(tenIsEven);
console.log(elevenIsEven);