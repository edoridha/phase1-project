const { User, Profile, CourseCategory, Course, Category } = require('../models')
const sendMail = require('../helper/send_email')
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

                        if (isValidPass) {
                            req.session.userRole = user.role
                            return res.redirect('/admin')
                        }

                        return res.redirect('/login?error=invalid password')
                    } else {
                        const isValidPass = bcrypt.compareSync(password, user.password)
                        if (isValidPass) {
                            req.session.userRole = user.role
                            return res.redirect('/admin')
                        }
                        let error = 'invalid password'
                        return res.redirect(`/login?error=${error}`)
                    }
                } else {
                    let error = 'invalid email'
                    return res.redirect(`/login?error=${error}`)
                }
            })
            .catch(err => console.log(err))
    }
    static showAdmin(req, res) {
        res.render('AdminDashboard')
    }
    static getLogOut(req, res) {
        req.session.destroy((err) => {
            if (err) return console.log(err), '<<<';
            res.redirect('/')
        })
    }
    static postRegister(req, res) {
        let { firstName, lastName, age, email, password } = req.body
        console.log(req.body, '>>>>');
        console.log(firstName, '<<', lastName, '<<', age, '<<', email, '<<', password);
        User.create({ email, password })
            .then(user => {
                let UserId = user.id
                return Profile.create({ firstName, lastName, age, UserId })
            })
            .then(() => {
                sendMail(email)
                res.redirect('/login')
            })
            .catch(err => console.log(err))
    }
}

module.exports = Controller;