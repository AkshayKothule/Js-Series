
//singleton object
// const tinderUser=new Object();

//non-singleton object
const tinderUser={};

tinderUser.id="1234abc";
tinderUser.name="Akshay";
tinderUser.isLogedIn=false;
// console.log(tinderUser);

const regularUser={
    email:"akshay@gmail.com",
    fullName:{
        userfullName:{
            fristName:"Akshay",
            Lastname:"Kothule"

        }
    }
}
// console.log(regularUser.fullName.userfullName.fristName);

const obj1={1 :"a" ,2 :"b" ,3 :"c"};
const obj2={4:"a" , 5:"b" , 6:"c"
}

// const obj3={obj1 , obj2};

//spear method 
// const obj3={...obj1 , ...obj2};

const obj3=Object.assign({}, obj1 , obj2)
// console.log(obj3);

console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoged'));






