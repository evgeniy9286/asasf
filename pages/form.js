import { useState } from 'react';
import axios from 'axios';


function Form() {

   const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');
	const [message, setMessage] = useState('');
	

   //function OpenModal({ close }) {
  // return <div>
				//<button onClick={close}>Закрыть</button>
				//<p>Письмо отправлено!</p>
			//</div>
//}

//function closeModal() {
	//setStep(0);
	//}

	
	async function sendForm() {
	
		try {
			
			await axios.post('http://localhost:3000/api/send-request', {
				name, email, phone, message
			});
			
		setName('');
			setEmail('');
			setPhone('');
			setMessage('');

			
		} catch (error) {
			console.log('Sending error', error);
		}
	
	}
	
	
  return (
  <>
  <form class = 'form'>
	<p>Имя</p>
	<input type='text'
	 required
    minlength="1"
    maxlength="20" 
	 value={name} placeholder="Имя" onChange={event => setName(event.target.value)}/>
	 <p>E-mail</p>
	<input type='email'
	required
    minlength="5"
	 pattern="[a-z]{0,9}{@}"
	value={email}
	placeholder="E-mail"
	onChange={event => setEmail(event.target.value)}/>
	<p>Телефон</p>
	<input type='tel'
	required
    minlength="11"
    maxlength="12"
	  pattern="{0,9}{+}"
	value={phone}
	placeholder="+9(999)-999-9999"
	onChange={event => setPhone(event.target.value)}/>
	<p>Сообщение</p>
	<textarea type='textarea' placeholder='Опишите ваш проект' pattern="{0,9}{a-z}{а-я}" value={message} onChange={event => setMessage(event.target.value)} class="textarea"/>
	<button type='submit' onClick={sendForm} class="send-form">Отправить</button>
  </form>
	 </>
  )
}

export default Form
