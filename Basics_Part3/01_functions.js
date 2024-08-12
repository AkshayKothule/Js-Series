// console.log("A");
// console.log("k");
// console.log("s");
// console.log("h");
// console.log("A");
// console.log("y");


function myName(){

console.log("A");
console.log("k");
console.log("s");
console.log("h");
console.log("A");
console.log("y");
}

// myName();

// function addTwoNumber(num1 , num2)
// {
//    console.log( num1+num2);
    
// }

// const result=addTwoNumber(3 ,4); //function only print value not return valeu 
// console.log("result is :" , result); // that why output is undefined


function addTwoNumber(num1 , num2)
{
    // let sum=num1+num2;
    // return sum;
    return num1+num2;
    
}

const result=addTwoNumber(3 ,4); //function return the value
// console.log("result is :" , result); //print value 

function logginUserMessage(username)
{
    if(username===undefined)
    {
        console.log("please enter a username");
        return
        
    }
    return `${username} just logged in`

}

// const Message=logginUserMessage("Akshay");
// console.log(Message);
// console.log(logginUserMessage("Akshay"));


//rest oprator ...num1
function calculateCartPrice(...num1){
    return num1

}
// console.log(calculateCartPrice(200 ,3000 ,40000, 50000));

const userName={
    userName:"Akshay",
    price : "999"
}

function handleObject(anyobject){
    console.log(`userName is ${anyobject.userName} and price is ${anyobject.price}`);
    
}

// handleObject(userName);
// handleObject({
//     userName:"Sam",
//     price:555
// })


const newArray=[100 , 200 , 300 , 400, 500];

function returnSecondElement(getArray){
    return getArray[1];
}

// console.log(returnSecondElement(newArray));
console.log(returnSecondElement([100 , 500 , 700 , 800 , 900]));
