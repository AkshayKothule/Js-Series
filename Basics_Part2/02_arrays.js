
const Marvel_heros=["thor" , "ironMan" , "Captain America" ,"BlackPanther"];

const dc_heros=["superman" , "Arjun" , "Hanuman"];

// Marvel_heros.push(dc_heros)
// const all_heros=Marvel_heros.concat(dc_heros);

//sprad method 
// const new_all_heros=[...Marvel_heros ,...dc_heros];

// console.log(new_all_heros);

const another_arry=[1 , 2 , 3,[4 , 5 , 6] , 7 ,[6 ,7 ,[4 ,5]]];
// const real_another_array=another_arry.flat(Infinity);
// console.log(real_another_array);


console.log(Array.isArray("Akshay"));
console.log(Array.from("Akshay"));
console.log(Array.from({name:"Akshay"}));

let score1=100;
let score2=200;
let score3=300;

console.log(Array.of(score1 , score2 , score3));



