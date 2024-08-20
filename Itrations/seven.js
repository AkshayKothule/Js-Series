
//reduce 
// The reduce() method of Array instances executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element


const myNums=[1 ,2 ,3];

// const mytotal=myNums.reduce(function (acc , currval) {
//     console.log(`accumator val : ${acc} and currrval : ${currval}`);
    
//     return acc+currval;
// } , 0)

const mytotal=myNums.reduce((acc , curr)=> acc+curr , 0)

    // console.log(mytotal);


const ShoppingCard=[
    {
        itemName:"App Coures",
        price:9999
    },
    {
        itemName:"jsCourse",
        price:2999
    },
    {
        itemName:"Data Science",
        price:7999
    },
    {
        itemName:"Java Dev",
        price:15999
    },
    {
        itemName:"mobile Dev",
        price:5000
    },
]

const totalsum=ShoppingCard.reduce((acc ,item)=> (acc+item.price) , 0)
console.log(totalsum);
