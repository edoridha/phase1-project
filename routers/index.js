const Controller = require('../controllers');
const router = require('express').Router()
const user = require('./user');


router.get('/', Controller.home)
router.get('/login', Controller.login)
router.post('/login', Controller.postLogin)
router.get('/register')
router.post('/register')
// router.use(require('/user', user))

router.use(function(req, res, next){
    if(!req.session.userRole || req.session.userRole !== 'Admin'){
        const error = 'Please login with Admin user'
       return res.redirect(`/login?error=${error}`, {error})
    }
    next()
})

router.get('/admin', Controller.showAdmin)
router.get('/admin/addCource')
router.post('/admin/addCourse')
router.get('/admin/edit/:id')
router.post('/admin/edit/:id')
router.get('/admin/delete/:id')

module.exports = router;