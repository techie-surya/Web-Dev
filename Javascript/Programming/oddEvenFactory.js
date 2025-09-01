function oddOrEvenFactory(request){
  if(request == "odd"){
    return function(n){
      console.log(!(n%2 == 0));
    }
  }
  
  else if(request == "even"){
    return function(n){
      console.log(n%2 == 0);
    }
  }

  else{
    console.log("Wrong request");
  }
}
let request = "odd";
let func = oddOrEvenFactory(request);
func(3)