function getIssues() {
  const forkedRepo = 'https://api.github.com/repos/christphrd/javascript-fetch-lab'

  fetch(`${forkedRepo}/issues`, {
    method: 'get',
    headers: {
      Authorization: `token ${getToken()}`,
    }
  }).then(res => console.log(res))
}

function showIssues(json) {
}

function createIssue() {
  const issueTitle = document.getElementById('title').value
  const issueBody = document.getElementById('body').value

  const postData = {
    "title": issueTitle,
    "body": issueBody
  }

  const forkedRepo = 'https://api.github.com/repos/christphrd/javascript-fetch-lab'

  fetch(`${forkedRepo}/issues`, {
    method: 'post',
    body: JSON.stringify(postData),
    headers: {
      Authorization: `token ${getToken()}`,
    }
  }).then(res => console.log(res))
}

function showResults(json) {
  results = document.querySelector('#results')
  results.append(json["full_name"])
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  //use fetch to fork it!

  fetch(`https://api.github.com/repos/${repo}/forks`, {
    method: 'post',
    headers: {
      Authorization: `token ${getToken()}`,
    }
  }).then(res => res.json()).then(json => showResults(json))
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
