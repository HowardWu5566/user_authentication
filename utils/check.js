const users = require('../models/users')

function check(email, password) {
  const user = users.find(user => user.email === email) || false
  const isCorrect = user ? user.password === password : false
  const userFirstName = isCorrect ? user.firstName : false
  return userFirstName
}

module.exports = check