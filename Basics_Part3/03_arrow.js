// Are there any performance differences between the arrow and normal functions?

// While there is no substantial distinction in performance, arrow functions can contribute to faster code execution due to their brief syntax. Typically, an arrow function is treated similarly to a regular function in terms of functionality.


const user={
    username:"Akshay",
    price:999
    ,
    WelcomeMessage : function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
        
    
    }
}
// user.WelcomeMessage();
// user.username="Hitesh"
// user.WelcomeMessage();

// console.log(this);


// function chai()
// {
// inside the function you cannot use a this keyword there is no use
//     let name="Akshay";
//     console.log(this.name);
    
// }
// chai();


// arrow function syntax
// ()=>{

// }

// explict arrow fun
// const addTwo=(num1 , num2)=>{
//     return num1+num2;
// }

// implict arrow fun
// const addTwo=(num1 , num2)=> num1+num2;

// const addTwo=(num1 , num2)=>(num1+num2)
const addTwo=(num1 , num2)=>({username : "Akshay"}) //object ko wrap kel ahe

console.log(addTwo(3,5));
