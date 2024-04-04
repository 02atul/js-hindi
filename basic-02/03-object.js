const mySym = "key1";

const Jsuser = {
    name: "JAY SHREE RAM",
    "full name": "DASHRATH PUTRA SHREE RAM",
    [mySym] : "Mykey1",
    age : 10000,
    email: "atul@acropolis.in",
    location: "Bhind",
    isLoggedIn : true,


}

// console.log(Jsuser["full name"]);// best use
// console.log(Jsuser["email"])
// console.log(Jsuser.age)
// console.log(Jsuser)

//   Jsuser.email= "atul@google.in"
//   Object.freeze(Jsuser);
//   Jsuser.email= "atul@micro.in"
//   console.log(Jsuser);


  Jsuser.greeting = function(){
    console.log(`hello jsuse`);
  }
  Jsuser.greetingTwo = function(){
    console.log(`hello jsuse , ${this.name}`);
  }
  console.log(Jsuser.greeting());
  console.log(Jsuser.greetingTwo());

