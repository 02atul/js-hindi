// primitive datarype 

// 7 types of pritive data types

// String , Number , Boolean , null , Undefined , Symbol , BigInt
   
  let str = "abcdefghi";
  let num = 1234567890;
  let bigValue = 8974248274893268472996239742894n;
  let loggedIn = true;
  let value = null;
  let state ;
  let value2 = Symbol(num);
   console.log(num == value2);

     console.log(typeof(str));
     console.log(typeof(num));
     console.log(typeof(bigValue));
     console.log(typeof(loggedIn));
     console.log(typeof(value));
     console.log(typeof(state));
     console.log(typeof(value2));

//  reference Datatype (Non- Primitive) Data type 

// Array , Function , Object

const heroes = ["spiderman","ironman","modi"];
let myObj = {
    age: 23,
    name:"atul",

}
console.log(heroes);

  let myFunction = function(){
    console
  }

  // stack and heap memory store


    let id = "atul@acropolis.in";
    let anotherId = id;
    anotherId = "atul@mocrosoft.in"

     console.log(anotherId);
     console.log(id);

  // heap


   let obj = {
     userName: "abj@google.in",
      userId: "Google"
   }
   
     let objTwo = obj;
      objTwo.userName = "avhs.google.in";

       console.log(obj.userName);
       console.log(objTwo.userName);