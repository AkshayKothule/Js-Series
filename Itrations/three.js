
//for of

//[" " , " " , " "]

const arr=[1 ,2 ,3 , 4, 5, 6];

for (const num of arr) {
    // console.log(num);
    
    }

const greeting="hello word";

for (const greet of greeting) {
    // console.log(`each character is ${greet}`);
       
}

//maps

const map=new Map();

map.set('IN' , "India");
map.set('USA' , "United States Of America");
map.set('fr' , "france")
map.set('IN' , "India")

// console.log(map);

for (const [key , value] of map) {
    console.log(key ,':-' ,value);
    
    
}