const tinder = new Object()   // sigleton object 
tinder.name = "sayNo";
tinder.email = "say@Bye";
tinder.id= "qwer122";
  
// console.log(tinder);

 
  const regular = {
    name : "gandhi",
    email : "gandhi@gmail.com",
      fullName :{
        userNAme :{
            userFullName : " atulchakwa",
            userid : "123456",
            age: 25,


        }
      }
  }

//  console.log(regular.fullName.userNAme.userFullName)

const obj1 = {1:"a" , 2: " c" };
const obj2 = {3:"da" , 5: " ga"};

//  const obj3 = Object.assign({},obj1,obj2);
//  console.log(obj3);

//   const obj4 = {...obj1,...obj2};
//   console.log(obj4);

console.log(Object.keys(tinder));
console.log(Object.values(tinder));
console.log(Object.hasOwnProperty("name"));
console.log(Object.entries(tinder));
  