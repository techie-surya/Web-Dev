let nums = [2, 5, 9, 6, 21, 32, 10, 14];
let even = nums.filter((el) =>{
  return el % 2 == 0;
});
console.log(even);