function multyBy5(num){
    return num*5;
}

multyBy5.power = 2; // behavior like a object

console.log(multyBy5(5))
console.log(multyBy5.power);
console.log(multyBy5.prototype);

function createUser(username,score){
    this.username= username;
    this.score = score;
}

createUser.prototype.increment = function(){
    this.score++;
}

createUser.prototype.printMe = function(){
    console.log(`chai score is ${this.score}`);
}


const chai = new createUser('chai',24)
const tea = new createUser('tea',5678);

 tea.printMe();