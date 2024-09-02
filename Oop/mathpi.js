const descripter=Object.getOwnPropertyDescriptor(Math, "PI");

console.log(descripter);

const chai={
    name :'ginger chai',
    price :288,
    isAvilable :true,

    orderChai : function(){
        console.log('this is function');
        

    }
}
console.log(Object.getOwnPropertyDescriptor(chai , "name"));
// Object.defineProperty(chai , "price",{
//     writable: false,
//     enumerable: false
// })
// console.log(Object.getOwnPropertyDescriptor(chai , "price"));

for (let [key , value] of Object.entries(chai)) {

    if(typeof value !== 'function'){
        console.log(`${key}:${value}`);
}
    
    
}