function sayMyname(){
    console.log("hitesh");
}

sayMyname()

//  function sumTwoNumbers(number1,number2){
//     console.log(number1+number2)
//  }

//   sumTwoNumbers(9,"5")

function sumTwoNumbers(number1,number2){
    //    let sum = number1+number2;
       return number1+number2;
      }
    
    
  const result =  sumTwoNumbers(25,56);

  console.log(result);

   function loggingUser(userName){
    if(userName===undefined){
        console.log("please enter valid user   name");
        return;
    }
       return ` ${userName}  just logged in`;
   }
   
     console.log((loggingUser()));