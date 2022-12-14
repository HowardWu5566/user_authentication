const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const exphbs = require('express-handlebars')
const session = require('express-session')
const renderName = require('./utils/check')

app.use(express.urlencoded({ extended: true }))
app.engine('handlebars', exphbs.engine({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.use(session({
  secret: 'ThisIsMySecret',
  resave: false,
  saveUninitialized: true
}))

app.get('/', (req, res) => {
  res.render('index')
})

app.post('/login', (req, res) => {
  const { email, password } = req.body
  const userFirstName = renderName(email, password)
  const errorMessage = 'Email 或Password 錯誤'
  userFirstName ? res.render('welcome', { userFirstName }) : res.render('index', { errorMessage })
})

app.listen(PORT, () => {
  console.log('123')
})