import 'whatwg-fetch'
import 'es6-promise'

export function getUser () {
  const opts = {
    method: 'GET'
  }
  return new Promise((resolve, reject) => {
    fetch('/api/user', opts)
      .then(response => response.json())
      .then(result => {
        resolve(result)
      })
      .catch(error => {
        reject(error)
      })
  })
}