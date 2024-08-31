
function setUserName(username){
    //complex DB Calls
  this.username=username;
  console.log("Called");
  
}

function createUser(username , email , password){
    setUserName.call(this ,username);
    this.email=email
    this.passwor=password
}

const Chai=new createUser("Akshay" , "google@com" ,"1234")
console.log(Chai);
