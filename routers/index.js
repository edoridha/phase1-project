const Controller = require('../controllers');
const router = require('express').Router()

router.get('/', Controller.home)
router.get('/login', Controller.login)
router.post('/login', Controller.postLogin)
router.get('/register')
router.post('/register')
router.get('/admin')

module.exports = router;