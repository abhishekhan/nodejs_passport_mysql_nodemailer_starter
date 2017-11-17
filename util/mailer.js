const nodemailer = require('nodemailer');

// Generate test SMTP service account from ethereal.email
// Only needed if you don't have a real mail account for testing
module.exports = function() {
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.email_address,
                pass: process.env.email_password
            }
        });

        // setup email data with unicode symbols
        let mailOptions = {
            from: process.env.email_address, // sender address
            to: 'abhishekk.handa1991@gmail.com', // list of receivers
            subject: 'Hello', // Subject line
            text: 'Hello world?', // plain text body
            html: '<b>Hello world?</b>' // html body
        };

        // send mail with defined transport object
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log(error);
            }
            console.log('Message sent: %s', info.messageId);
        });
}