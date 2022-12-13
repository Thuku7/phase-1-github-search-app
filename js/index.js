// variables
const formSubmit = document.getElementById('github-form');
const inputValue = document.getElementById('search')













//eventListeners

formSubmit.addEventListener('submit', function(event){
  event.preventDefault();
  let submitedUser = inputValue.value
  showSubmittedData(submitedUser)
})








//functions


function showSubmittedData(submitedUser) {
  fetch("https://api.github.com/users/"+ submitedUser)
  .then(response => response.json())
  .then(data => createUser(data))
}



function createUser(data) {
  let userDisplay = document.createElement('li')
  userDisplay.innerHTML = `<p>${data.login}</p> <br>
  <img src=${data.avatar_url}><br>
 <a  target="_blank"href=${data.public_repos} id="repo-link"> <p>${data.html_url}</p>`

  document.getElementById('user-list').appendChild(userDisplay)

  document.getElementById('repo-link').addEventListener('click' ,function() {
  showReposData()
  })

  


}


function showReposData() {
  fetch(`https://api.github.com/users/${data1}/repos{?type,page,per_page,sort}`)
  .then(response => response.json())
  .then(data => console.log(data))
}


function displayRepos(data) {
  let repodisplay = document.createElement('li');
  repodisplay.innerHTML = `<p>${data.public_repos}</p>`

  document.getElementById('repos-list').appendChild(repodisplay)
}
