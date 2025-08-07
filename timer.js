// setTimeout(()=>{console.log("TIMEOUT,SUBMIT THE PAPER")},3000)

let count = 0

let timer = setInterval(() => {

    console.log(count+=1)

    if (count == 10){

            clearInterval(timer)

    }

}, 1000)
