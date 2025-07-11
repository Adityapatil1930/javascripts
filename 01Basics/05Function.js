// Note---->methods are functions and functions are methods
// Note---->functuion are nonpremetive datatype
//note-----> 7=>  fat arrow 
function demo(){
    var a=10;
    var b=20;
    console.log(a+b);
}
demo()
// we can't call function defore decleration





// function as an expression
let a;
console.log(20);

let demo1 = function () {
    console.log("function of javascript.....!");
}
demo1()




// arrow function 
let demo3 = () => {
    var a=10;
}
demo3()


//the function which is having no any name is known as annonyomus function 

// 1-->function decleration --->function  functionname () {}
// 2--> parameterized function ----> let functionname =             function () {
                                                                        // var variable =value}
                                                                    // functionname()


let sendnumber = (cb)=>{
    let n0=10
    cb(no)
}
let cbf =(no) =>{
    console.log(no);
}
sendnumber(cbf)