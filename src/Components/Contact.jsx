import './Contact.css';
import Footer from './Footer';
import ContactForm from './ContactFrom'
const ContactPage = () => {
  return (
    <div className="glv">
    <div className="contact-page">
                <h2>Контакты</h2>
      <div className="contact-details">
        <div className="contact-item contact-items-grid-1">
        <p>Звоните нам:</p>
        <p>+7 (908) 183 33 39</p>
        </div>
        <div className="contact-item contact-items-grid-1">
        <p>Наши e-mail:</p>
        <p>klientovick5@gmail.com</p>
        </div>
        <div className="contact-item contact-items-grid-3">
        <p>Мы находимся:</p>
        <p>344056, Ростовская обл.,</p>
        <p>г.Ростов-на-Дону Георгиевская улица, 13</p>
        </div>
      </div>
      <div className="jjjjjj">
      <div className="map-container">
        <iframe
        src="https://yandex.ru/map-widget/v1/?um=constructor%3A21b990e041d389430ba6077bf382484fe810133aae8cd32da3772e2eb819c333&amp;source=constructor"
        width="100%"
        height="400"
        frameborder="0"
        ></iframe>
      </div>
    <ContactForm></ContactForm>
    </div>
    </div>
    <Footer></Footer>
    </div>
  );
};

export default ContactPage;
