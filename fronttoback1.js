fetch ('https://api.github.com/users').then((res) => {
  return res.json()
}).then((data) => {
  console.log(data)
})

// This code fetches data from the GitHub API and logs the user data to the console.
// It uses the Fetch API to make a GET request to the specified URL,