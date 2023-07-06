const Controller = require('../controllers');
const router = require('express').Router()

const admin = function (req, res, next) {
    if (!req.session.userRole || req.session.userRole !== 'Admin') {
        const error = 'Please login with Admin user'
        return res.redirect(`/login?error=${error}`, { error })
    }
    next()
}
const user = function(req, res, next){
    console.log(req.session);
    if(!req.session.userRole || req.session.userRole !== 'User'){
        const error = 'Please login or Sign Up'
       return res.redirect(`/login?error=${error}`, {error})
    }
    next()
}

router.get('/', Controller.home)
router.get('/login', Controller.login)
router.post('/login', Controller.postLogin)
router.get('/register', (req, res) => res.render('Register'))
router.post('/register', Controller.postRegister)

router.get('/admin', admin, Controller.showAdmin)
router.get('/admin/addCourse', admin, (req, res) => res.render('AddForm'))
router.post('/admin/addCourse', admin, Controller.postCourse)
router.get('/admin/edit/:id', admin, Controller.editForm)
router.post('/admin/edit/:id', admin, Controller.postEdit)
router.get('/admin/delete/:id', admin, Controller.delete)
router.get('/logout', admin, Controller.getLogOut)

router.get('/user', user, (req, res) => res.render('User'))
router.get('/logutUser', user, res.redirect('/'))

module.exports = router;