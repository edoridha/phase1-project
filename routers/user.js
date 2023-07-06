const Controller = require('../controllers');
const router = require('express').Router()

router.use(function(req, res, next){
    console.log(req.session);
    if(!req.session.userRole || req.session.userRole !== 'User'){
        const error = 'Please login or Sign Up'
       return res.redirect(`/login?error=${error}`, {error})
    }
    next()
})

router
.get('/')

module.exports = router;