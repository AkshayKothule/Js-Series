
const User={
    constructor(username , email , password){
        this.username=username;
        this.eamil=email;
        this.password=password

    },
    encryptPassword(){
        return `${this.password}abc`;
    },
    changeUserName(){
         return `${this.username.toUpperCase()}`
    }


}

const chai=new User("chai" , "chai@gmail.com" , "1234");
console.log(chai.encryptPassword());
console.log(chai.changeUserName());


//behind the scene

function UserB(username  , email , password){
    this.username=username;
    this.eamil=email;
    this.password=password;



}

UserB.prototype.encryptPassword=function(){
    return `${this.password}abc`
}
UserB.prototype.changeUserName=function(){
    return `${this.username.toUpperCase()}`
}

// const Tea=new UserB("chai" , "chai@gmail.com" , "1234");
// console.log(Tea.encryptPassword());
// console.log(Tea.changeUserName());

