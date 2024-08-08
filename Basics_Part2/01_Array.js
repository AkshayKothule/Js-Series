//array
// JavaScript arrays are resizable and can contain a mix of different data types.
const myArr=[0 ,1,2,3,4,5];

const Heros=["ironman" ,"thor" , "captaim amreica"];

const myArr1=new Array(0,1 , 2 , 3, 4, 5);
// console.log(myArr1[1]);
// myArr1.push(6);
// myArr1.push(7);
// myArr1.pop();

// myArr1.unshift(9);
// myArr1.shift();

// const newArr=myArr1.join();
// console.log(myArr1);
// console.log(newArr);

//slice , splice :- IMP

// splice :-
// The splice() method of Array instances changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

// The slice() method of Array instances returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.

console.log("A" , myArr) ;

const myn1=myArr.slice(1 , 4);
console.log(myn1);
console.log("B" ,myArr);


const myn2=myArr.splice(1 ,4);
console.log("C" , myArr);
console.log(myn2);



