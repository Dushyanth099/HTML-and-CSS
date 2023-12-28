// console.log('hello')
// console.log(2+2);
// let score;
// score=10;
// console.log(score)
// // const value should give as cons
// // let name=prompt("whats ur name");
// // console.log("hi my name is"+ name);
// let message=document.getElementById("message")
// message.innerHTML="welcome"

let str1 = "dushyanth";
let str2 = "is my name";
console.log(str1 + str2);
console.log(str1.concat(str2));

// slice(start,end)
//substring(start,end)
//substr(start,length)

// slice= str2.slice(4,8)

//literals
let firstname = "dush";
let middlename = "is my";
let lastname = "name";
console.log(firstname + middlename + lastname);

//another method
let msg = `${firstname} ${middlename} ${lastname}`;
console.log(msg);

// arrays
// concat func and spread operator
let a = [1, 2, 3, 4, 5];
let b = [1, 2, 3, 4, 5];
result = a.concat(b);
console.log(result);
result = [...a, ...b];
console.log(result);

// if else

let pwdcheck = false;
if (pwdcheck) {
    console.log("pwd is correct")
} else {
    console.log("pwd is incorrct")
}
console.log("bye")

//another eg for if else
let c=10,d=20;
if(c>20){
    console.log("c is grater")
}
else{
    console.log("d is greater")
}
//another method conditional operator or terminay operator
let max=c>d?c:d
