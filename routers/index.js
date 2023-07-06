const Controller = require('../controllers');
const router = require('express').Router()

router.use('/', Controller.home)


module.exports = router;