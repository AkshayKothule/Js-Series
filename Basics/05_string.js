const name="Akshay";
const repoCount=55;

// console.log(name+repoCount+" newvalue");
// console.log(`my name is ${name} and my repocount is ${repoCount}` );
const gameName=new String("AkshayK");
console.log(gameName);
console.log(gameName[0]);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.toLowerCase());
console.log(gameName.__proto__); //object 
console.log(gameName.charAt(5));

const newString=gameName.substring(0 , 4);
// console.log(newString);

const anotherString=gameName.slice(-7 , 5);
// console.log(anotherString);

const newStringOne="    Akshay    ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url="https://akshay.com/akshay%20kothule";
console.log(url.replace("%20" , "-"));

const str="Akshay-janardhan-kothule";
console.log(str.split('-'));



