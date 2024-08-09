
//singleton 

// Object.create :- this constructer method and make singleton object


//object literals

const mySym=Symbol("key1");
const JsUser={
    name:"Akshay",
    [mySym]:"mykey1",
    age :22 ,
    location :"pune",
    Email : "akshay@gogle.com",
    isLoggedIn:false ,
    lastLoginDays:["Monday" , "thruday"]
}

// console.log(JsUser.Email);
// console.log(JsUser["Email"]);
// console.log(JsUser[mySym]);

JsUser.Email="akshaykothule@google.com"
// Object.freeze(JsUser);
JsUser.Email="akshaykothule@chatgpt.com"

// console.log(JsUser);




JsUser.greeting=function()
{
    console.log("Hello Js User");
    
}
JsUser.greetingTwo=function()
{
    console.log(`hello Js User ,${this.name}`);
   
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

