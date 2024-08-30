//object literal

const user={
    username:"Akshay",
    loginCount:8,
    singIn:true,

    getDetails :function(){
        console.log("got the user details from Database");
        console.log(`username : ${this.username}`);
        console.log(this);
        
        
        
    }
}
// console.log(user.username);
// console.log(user.getDetails());

function User(username , loginCount , IsLoggedIn){
    this.username=username;
    this.IsLoggedIn=IsLoggedIn;
    this.loginCount=loginCount;
    return this;


}

const userOne=new User("Akshay" , 5 , true) ;
const userTwo=new User("Javascript" , 10 , false) ;

console.log(userOne);
console.log(userTwo);


