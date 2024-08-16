//Immediately Invoked Function Expression(IIFE)

//normal function
// function chai()
// {
//     console.log("this is user of IIFE function");    
// }

// chai();

//iife

(function chai()
{
    //named iife function
    console.log("this is user of IIFE function");    
})();

((name)=>{
    // this argument pass iife
    console.log(`this is arrow function used by ${name}`);
    
})("Akshay")
