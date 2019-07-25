function lastIndexOf(array, num) {
  //set to false if cant find match
  let matched = false;
  //target index 
  let lastIndex = 0;
  for(let i = 0; i < array.length; i++) {
    //check if array[element] is equal to num. if so, set matched to true and lastIndex equal to i
    if(array[i] === num) {
      lastIndex = i;
      matched = true;
    }
  }
  //true
  if(matched){
    return lastIndex;
  } else { //false
    return -1;
  }
}

console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);