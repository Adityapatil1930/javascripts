let calculateTemp =(temp , converter)=>{
    converter(temp)
}
let degTOfar =(temp) => {
    console.log(`${temp} degree to farenheit is ${(9 / 5*temp)+32}`);
}
let farTodeg =(temp) =>{
    console.log(`${temp}farenheit to degree is ${(temp -32)*5/9}`);
}
calculateTemp(40,degTOfar)
calculateTemp(130,farTodeg)