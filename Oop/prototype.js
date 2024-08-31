
// let name="Akshay";
// console.log(name.length);
// console.log(name.truelength);

let heros=["Thor" , "BatMan"];

let heroPower={
    Thor:"Hammer",
    BatMan:"BatPower" , 

    getBatmanPower :function()
    {
        console.log(`power is batman ${this.BatMan}`);
        
    }

}

Object.prototype.hitesh=function(){
    console.log(`hitesh is present in all objects`);
    
}
Array.prototype.Hyhitesh=function(){
    console.log(`Hitesh says Hello`);
    
}
// heroPower.hitesh();
// heros.hitesh();
// heros.Hyhitesh();


//inheritance

const User={
    name :'chai',
    company : "google"
}
const Teacher={
    makeVideo:true
}

const TeachingSupport={
    isAvailable:false
}

const TASsupport={
    makeAssignment:'js Assignement',
    fullTime:true,
    __proto__:TeachingSupport
}

Teacher.__proto__=User;

//modern synatx

Object.setPrototypeOf(TeachingSupport , Teacher)


let anotherUser="ChaiaurCodec     ";

String.prototype.truelength=function(){
    console.log(`${this}`);
    console.log(`${this.name}`);
    console.log(`true length is :${this.trim().length}`);
    
    
    
}

anotherUser.truelength()
"hitesh".truelength();
"IceTea".truelength();