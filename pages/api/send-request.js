import sendEmail from './../../lib/mail';

export default async function handler(req, res) {
	const message = {
		to: 'evgeniymakhnin@gmail.com',
		subject: `Письмо с сайта portfolio от ${req.body.name}`,
		text: `
			Имя: ${req.body.name}, 
		   E-mail: ${req.body.email},
        	Телефон: ${req.body.phone},
        	Сообщение: ${req.body.message},
        `,
	};
	sendEmail(message);
	console.log(message);
	res.send(`Спасибо за заявку, ${req.body.name}!`);
}