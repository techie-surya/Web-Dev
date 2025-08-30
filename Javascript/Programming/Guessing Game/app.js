const max = prompt("Enter the maximum number: ");

const random = Math.floor(Math.random() * max) + 1;

let guess = prompt("Guess the number.");

while(true){
  if(guess == "quit"){
    console.log("User quit!!");
    break;
  }
  if(guess == random){
    console.log("Congrats!! You guessed it right!Your random number was",random);
    break;
  }
  else if(guess < random){
    guess = prompt("Your guess was too small. Please try again");
  }
  else{
    guess = prompt("Your guess was too large. Please try again");
  }
  // else{
  //   guess = prompt("You are wrong. Please try again.");
  }
