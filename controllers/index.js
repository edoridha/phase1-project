const {User,Profile, CourseCategory, Course, Category} = require('../models')
const bcrypt = require('bcryptjs');

class Controller {

    static home(req, res) {
        
        res.render('Home')
    }
    static login(req, res) {
        res.render('Login')
    }
    static postLogin(req, res) {
        const { email, password } = req.body
        User.findOne({ where: { email } })
            .then(user => {
                if (user) {
                    if (user.role == 'Admin') {
                        const isValidPass = bcrypt.compareSync(password, user.password)
                        if (isValidPass) return res.render('AdminDashboard')
                        return res.redirect('/login?error=invalid password')
                    } else {
                        const isValidPass = bcrypt.compareSync(password, user.password)
                        if (isValidPass) return res.redirect('AdminDashboard')
                        return res.redirect('/login?error=invalid password')
                    }
                } else return res.redirect('/login?error=invalid email')
            })
            .catch(err => console.log(err))
    }
}

module.exports = Controller;