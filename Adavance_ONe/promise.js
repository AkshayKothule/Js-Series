// A Promise is an object representing the eventual completion or failure of an asynchronous operation

// A Promise is in one of these states:
// pending: initial state, neither fulfilled nor rejected.
// fulfilled: meaning that the operation was completed successfully.
// rejected: meaning that the operation failed.

const PromiseOne=new Promise(function(resolve , reject){
    //Do an async
    //DB calls , cryptography , network
    setTimeout(function(){
        console.log('async a function');
        resolve();
    },1000);

});
PromiseOne.then(function(){
    console.log("promise a consumed");
    
})

new Promise(function(resolve , reject){
        //Do an async
    //DB calls , cryptography , network
    setTimeout(function(){
        console.log('async a function 2');
        resolve();
    },1000);

}).then(function(){
    console.log("this is the new promise");
    
})

const promisethree=new Promise(function(resolve , rejecte){
 setTimeout(function(){

    resolve({username:"akshay" ,password:"123"} );
    
 },1000)

})

promisethree.then(function(user){
    console.log(user);
    
})


const promiseFour=new Promise(function(resolve , rejecte){
    setTimeout(function(){
       
       let error=false;
       if(!error){
         resolve({username:"akshay" ,password:"123"} );
        
       }else{
           rejecte('ERROR IN THE A PROGRAMING')
       }
    },1000)
   
   })
   
   promiseFour.then((user)=>{
       console.log(user);
       return user.username;
       
   }).then((username)=>{
    console.log(username);
   }).catch(function(error){
    console.log(error);
    
   }).finally(()=>console.log("the promise is either resoleved or rejected  ")
   )


const promiseFive=new Promise((resolve , rejecte)=>{
    setTimeout(function(){
       
        let error=false;
        if(!error){
          resolve({username:"Javascript" ,password:"1234"} );
         
        }else{
            rejecte('ERROR IN THE A PROGRAMING')
        }
     },1000)

})

async function consumePromiseFive(){
    try{
        const response=await promiseFive
      console.log(response);

    }catch(error){
        console.log(error);
        
    }
    

}
consumePromiseFive();

//Fetch

// async function APIFunction(){
//    try{
//     const response= await fetch('https://jsonplaceholder.typicode.com/users')
//     const data= await response.json()
//     console.log(data);

//    }catch(error){
//     console.log("error occurred", error);

//    }
    
// }
// APIFunction();

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json();
}).then((data)=>{
    console.log(data);
})
