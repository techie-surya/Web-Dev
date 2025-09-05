function sum(msg, ...args){
  console.log(msg);
  return args.reduce((sum,el) => sum + el);
}

console.log(sum("hello", 1,2,3,4));
console.log(sum("hello", 1,2,3,4,5,6,7,8,9));