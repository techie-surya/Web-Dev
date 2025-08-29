let favourite = "kgf";
let guess = prompt("Guess my favourite movie");

while (guess != favourite){
  if(guess == "quit"){
    console.log("You quit!!")
    break;
  }
  guess = prompt("Wrong guess! Please try again."); 
}

if(guess == favourite){
  console.log("Congrats!! You guessed it right!")
}