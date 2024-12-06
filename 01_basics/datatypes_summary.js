/*
Primitive datatype:
    7types:String,Number,Boolean,null,undefined,Symbol,BigInt

Reference datatype/Non-Primitive datatype:
    Array,Objects,Functions
*/

// const score=100;//js is a dynamically typed language
// const a=100.3;
// const m=true;
// const temp=null;
// let user;//undefined


// const id=Symbol('123')
// const anotherId=Symbol('123')
//Symbol gives unique value
// console.log(id==anotherId)

// const bigNumber=12345457565643123456543n
// console.log(typeof bigNumber)//Bigint

const heros=["iron","steel","thor","hulk"]//Array

let myObj={
    name:"riya",
    age:22,

}//Object

const myFunc=function(){
    console.log("Hello World");
    
}

console.log(typeof heros)//Object
console.log(typeof myObj);//object
console.log(typeof myFunc);//function(called as obj func)

