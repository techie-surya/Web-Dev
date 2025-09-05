let names = ["tony", "steve", "bruce", "thor", "clint", "natasha", "wanda"];

let [winner, runnerup, ...others] = names;

console.log("Winner: ",winner);
console.log("Runnerup: ",runnerup);  
console.log("others: ",others);