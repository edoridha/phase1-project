const express = require('express');
const app = express()
const session = require('express-session')
const port = 3000;



app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'))
 
app.use(session({
    secret: 'secret-key',
    resave: false, 
    saveUninitialized: false
  }))
app.use(require('./routers'));


app.listen(port, () => {
    console.log(`Server port : ${port}`)
})
