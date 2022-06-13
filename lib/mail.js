import mailer from 'nodemailer';

const smtpTransport = mailer.createTransport({
	host: 'smtp.yandex.ru',
	port: 465,
	secure: true,
	auth: {
		user: 'evgeniy928m@yandex.ru',
		pass: 'M13e06n82'
	},
	tls: {rejectUnauthorized: false},
}, {
	from: 'my portfolio <evgeniy928m@yandex.ru>'
});

const sendEmail = (message) => {
    smtpTransport.sendMail(message, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log("Email sent successfully", info);
        }
        smtpTransport.close();
    });
}

export default sendEmail;