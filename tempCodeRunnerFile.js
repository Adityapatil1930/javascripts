let count = 0
let timer = setInterval(() => {
    console.log(count+=1)
    if (count == 5){
            clearInterval(timer)
    }
}, 1000)