let api = fetch('https://api.github.com/users')
let store = api.then((res) => {
	return res.json()
})
store.then((res) =>{
console.log(res)
})
