// using loop we can convert lowercase to uppercase 
let str="hello"
let newStr=""
for (let i=0 ; i<str.length;i++){
    if (str.charCodeAt(i)>=97 && str.charCodeAt(i)<=122){
        newStr+=String.fromCharCode(str.charCodeAt(i)-32)
    }else{
        newStr+=str.charAt(i)
    }
}
console.log(newStr);


// using inbuilt functions
let str1="HellO"
console.log(str1.toLowerCase());

// check the length of string
let str2="HellO"
console.log(str2.length);

//check the position of character
let str3="HellO"
console.log(str3.charAt(3));

// asci value present at that index
let str4="HellO"
console.log(str4.charCodeAt(2));

// it can be show charecter present at index which is we can pass
let str5="HellO"
console.log(str5.at(0));

// concatenation 
let str6="HellO"
console.log(str6.concat("10"));

// boolean method it shows the output as true or false
// ends with given character
let str7="HellO"
console.log(str7.endsWith("a"));

// starting with given character
let str8="HellO"
console.log(str8.startsWith("H"));

// the specific character is persent or not
let str9="HellO"
console.log(str9.includes("o"));

//it will give you index of an character(first occurance only)
let strr="HellO"
console.log(strr.indexOf("e"));

// it will give you index of an character aslo last index position
let strr1="HellO"
console.log(strr1.lastIndexOf("l"));

// hiding the characters
let strr2="10000"
console.log(strr2.padEnd(10,"X"));

 