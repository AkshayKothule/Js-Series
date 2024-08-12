
// let a=10;
// var b=20;
// const c=200;

// {
//     scope
// }
// console.log(a);
// console.log(b);
// console.log(c);



let a=100;
if(true)
{
    let a=10;
    const b=20;
    // console.log("inner block :"+a);
    
}
// console.log(a);

function one()
{
    const userName="Akshay"

    function two()
    {
        const website="gogle.com"
        console.log(userName);
    }

    // console.log(website);

    two();
}

// one();


if(true){
    const username="Akshay";

    if(username==="Akshay")
    {
        const website="google.com";

        // console.log(username +website);
    }
    // console.log(website);
    
}

// console.log(username);

// ************************intersting*****************

//funtion 

function addone(num)
{
    return num+1;

}

console.log(addone(6));


//expression
const addTwo=function (num) {

    return num+2;
    
}

console.log(addTwo(4));