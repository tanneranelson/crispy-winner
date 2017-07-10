const express       = require('express')
const app           = express()
const mongoose      = require('mongoose')
const handlebars    = require('express-handlebars')
const session       = require('express-session')
const cookieParser  = require('cookie-parser')
const bodyParser    = require('body-parser')
const passport      = require('passport')
const LocalStrategy = require('passport-local').Strategy


const auth          = require('./routes/auth')


mongoose.connect('mongodb://mongodb.cs.dixie.edu/HangMan', {
  useMongoClient: true
})


app.engine('hbs', handlebars({ defaultLayout: 'single', extname: '.hbs'}))
app.set('view engine', '.hbs')



app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cookieParser())
app.use(session({ secret: 'mysecretsessionkey' }))
app.use(passport.initialize())
app.use(passport.session())

const User = require('./models/user')
passport.use(new LocalStrategy(User.authenticate()))
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())



app.use(auth)






// Start the Server
app.listen(3000, function () {
  console.log('Listening on PORT 3000!');
})
