import React, { useState } from 'react';

const ContactForm = () => {
const [formData, setFormData] = useState({
username: '',
email: '',
phone: '',
message: ''
});

const handleChange = (e) => {
setFormData({ ...formData, [e.target.name]: e.target.value });
};

const handleSubmit = async (e) => {
e.preventDefault();
try {
const response = await fetch('http://localhost:5000/send', {
method: 'POST',
headers: {
'Content-Type': 'application/json'
},
body: JSON.stringify(formData)
});

if (response.ok) {
alert('Сообщение отправлено!');
} else {
const errorText = await response.text();
console.error('Ошибка при отправке сообщения:', errorText);
alert('Ошибка при отправке сообщения');
}
} catch (error) {
console.error('Ошибка при отправке сообщения:', error);
alert('Ошибка при отправке сообщения');
}
};

return (
<div className="message-container">
<p>Отправьте нам сообщение</p>
<p>Если у вас есть какие-то вопросы или предложения по сотрудничеству, заполните форму ниже</p>
<form onSubmit={handleSubmit}>
<div className="contact-container">
<div className="data-container">
<input type="text" name="username" placeholder="Введите имя" onChange={handleChange} value={formData.username} />
<input type="email" name="email" placeholder="Email" onChange={handleChange} value={formData.email} />
<input type="phone" name="phone" placeholder="Введите телефон" onChange={handleChange} value={formData.phone} />
</div>
<div className="message-container">
<textarea name="message" placeholder="Сообщение" onChange={handleChange} value={formData.message}></textarea>
</div>
</div>
<button type="submit">Отправить</button>
</form>
</div>
);
};

export default ContactForm;