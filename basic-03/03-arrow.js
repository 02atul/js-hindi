const user = {
    userName : "atul",
    price: 9990,
    welcome:function(){
        console.log(`${this.userName} , welcome this website`);
    }
}
// user.welcome()
// user.userName = "anime";
// user.welcome()

const chai = () =>{
    let userNAme = "atul";
    console.log(this)
}
// chai()

// const addTwo = (num1,num2) => {
//     return num1+num2;
// }

// const addTwo = (num1,num2) => num1+num2;

// const addTwo = (num1,num2) => (num1+num2);
//    
const addTwo = (num1,num2) => ({userNAme:"atul"})

console.log(addTwo(58,95))