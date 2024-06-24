
import '../Components/Footer.css';

function Footer() {
  return (<>
    <div className="razdel"></div>
    <footer className="footer">
        <div className="footer-grid">
            <div className=" logo-2">
                <div className='logo-footer'><b>РекАвто</b><br/><small>Автозапчасти</small></div>
                <div className='opisanie-footer'>
                    Интернет-магазин запчастей для иномарок.<br />
                    Автозапчасти в наличии и под заказ.<br />
                    © 2024 RekAuto.ru – Все права защищены.
                </div>

            </div>
            <div className="sectoins-links">
            <div className="company-info">
                <div>ООО "РЕКАВТОСЕРВИС"</div>
                <div>ИНН 3525471044</div>
                <div>КПП 352501001</div>
                <div>ОГРН 1213500009656</div>
            </div>
            <div className="links">
                <div>О нас</div>
                <div>Каталог</div>
                <div>Личный кабинет</div>
            </div>
            <div className="links">
                <div>Контакты</div>
                <div>Политика конфиденциальности</div>
                <div>Согласие на обработку персональных данных</div>
            </div>
            </div>
            </div>
            <div className="contact-info">
                <div>Звоните нам:</div>
                <div>8 800 551 50 45<br/>+7 (905) 297 00 08</div>
                <div>Мы находимся:</div>
                <div>160024, Вологодская обл.,<br/>г Вологда ул. Батюшкова, 11</div>
                <div>Наши e-mail:</div>
                <div>hello@recauto.ru<br/>recautots@yandex.ru</div>
            </div>
        </footer>
        </>
  );
}

export default Footer;
