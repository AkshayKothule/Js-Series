
// const UserEmail="akshay@gmail.com"
const UserEmail=""

if(UserEmail)
{
    console.log("Got user Email");
    

}else{
    console.log("don't have a user email");
    

}

//falsy value
// false , 0 , -0 , "" , BigInt 0n , undefined , NAN

// truthy value
// "0", 'false'," "  , [] ,{} , function(){}

//nullish coalescing oprator(??) : null , undefined

let val1;

// val1=5 ?? 10;
// val1=null ?? 10;
// val1=undefined ?? 15;

// console.log(val1);

// ternary oprator
// condition ? true : false;
const icetea=100;

icetea >=80 ? console.log("greater than 80") : console.log("less than 80");

