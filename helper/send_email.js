const nodemailer = require('nodemailer');

const nodeMailer = (email) => {
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'golearnjs@gmail.com',
        pass: 'mnzdttvdnxdmyqnr'
    }
});

let mailOptions = {
    from: 'golearnjs@gmail.com',
    to: email,
    subject: 'account created',
    text: 'That was easy!',
    html: "<h1>WELCOME TO GOLEARN</h1>"
};

return transporter.sendMail(mailOptions, (err, info) => {
    if (err) throw err;
    console.log('Email sent: ' + info.response);
});
}

module.exports = nodeMailer

