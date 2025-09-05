let nums = [2, 5, 9, 6, 21, 32, 10, 14];

// USING LOOPS

// let max = -1;

// for(let i =0; i < arr.length; i++){
//   if(max < arr[i]){
//     max = arr[i];
//   }
// }

//  USING REDUCE METHOD

let max = nums.reduce((max, el) => {
  if(max < el){
    return el;
  }
  else{
    return max;
  }
});
console.log(max);