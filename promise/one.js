const promiseOne = new Promise(function(resolve,reject){
    console.log("hiii");
    setTimeout(function(){
        console.log("task complete")
        resolve();
    },1000)
})

promiseOne.then(function(){
    console.log("task complete 2");

})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("task 3");
        resolve()
    },2000)

}).then(function(){
    console.log('task 4');
})


const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('task 5');
        resolve({userName:'async' ,email:'chai@chaiaurcode'})
    },3000)
})

promiseThree.then(function(user){
    console.log(user.userName);
})

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false;
        if (!error) {
            resolve({userName:'atulChakwa',email:'atul.@123'})
        }
        else{
            reject('ERROR : something went wrong')
        }
    },3000)
})

 promiseFour.then((user)=>{
 console.log(user);
 return user.userName;
 }).then((userName)=>{
    console.log(userName);
 }).catch((error)=>{
    console.log(error);
 })


  const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false;
        if (!error) {
            resolve({userName:'javascript',email:'atul.@123'})
        }
        else{
            reject('ERROR : js went wrong')
        }
    },3000)
})


async function consumePromiseFive(){
    try {
        response = await promiseFive;
    console.log(responce);
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive();


async function getAllusers(){
    try {
        const responce = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await responce.json()
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

getAllusers();



fetch('https://api.github.com/users/hiteshchoudhary').then((responce)=>{
    return responce.json();

}).then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log(error);
})