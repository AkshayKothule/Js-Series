
const score=400
// console.log(score);

const balance=new Number(100);
// console.log(balance);
// console.log(balance.toString());
// console.log(balance.toFixed(2));

const anotherNumber=12.8966;
// console.log(anotherNumber.toPrecision(3));

const hunders=1000000;
// console.log(hunders.toLocaleString('en-IN'));

//************************* MATHS **************************
// console.log(Math)

// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2)); //top. value teken
// console.log(Math.floor(4.6)); //down value taken


// console.log(Math.random());
// console.log((Math.random()*10 )+1);
// console.log(Math.floor(Math.random()*10 +1));

const min=10;
const max=20;

// 1 :- avoid the zero case + min add becase greater than min 
console.log(Math.floor(Math.random()*(max-min+1))+min);

