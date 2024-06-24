import vsecatalogi from '../assets/home_img/vsecatalogi.jpg';
import shina from '../assets/home_img/shina.jpg';
import maslo from '../assets/home_img/maslo.jpg';
import himia from '../assets/home_img/himia.jpg';
import zapchasti from '../assets/home_img/zapchasti.jpg';
import inst from '../assets/home_img/inst.jpg';
import '../Components/Home.css';
import { Link } from 'react-router-dom';
import Slider from './Slider';
import auto_one from '../assets/auto_one.jpg'
import auto_two from '../assets/auto_two.jpg'
import auto_free from '../assets/auto_free.jpg'
import auto_fo from '../assets/auto_fo.jpg'
import auto_fi from '../assets/auto_fi.jpg'
import Footer from './Footer';
function Home() {
  return (
    <div className='glavni'>
      <div className="container">
        <div className="category-section">
          <Link to="/catalog" className="item-link">
          <div className="category-item">
            <img src={vsecatalogi} alt="Двигатель" className="category-img" />
            <p>Все каталоги</p>
            </div>
          </Link>
          <Link to="/catalog?info_id=1" className="item-link">
            <div className="category-item">
              <img src={shina} alt="Шина" className="category-img" />
              <p>Шины и диски</p>
            </div>
          </Link>
          <Link to="/catalog?info_id=2" className="item-link">
          <div className="category-item">
            <img src={zapchasti} alt="Технические запчасти" className="category-img" />
            <p>Тех запчасти</p>
          </div>
          </Link>
          <Link to="/catalog?info_id=3" className="item-link">
          <div className="category-item">
            <img src={maslo} alt="Масла и жидкости" className="category-img" />
            <p>Масла и жидкости</p>
          </div>
          </Link>
          <Link to="/catalog?info_id=4" className="item-link">
          <div className="category-item">
            <img src={inst} alt="Инструменты" className="category-img" />
            <p>Инструменты</p>
          </div>
          </Link>
          <Link to="/catalog?info_id=5" className="item-link">
          <div className="category-item">
            <img src={himia} alt="Автохимия" className="category-img" />
            <p>Автохимия</p>
          </div>
          </Link>
        </div>
      </div>
      <div className="info-section">
        <div className="payment-info">
          <div className="dot"></div>
          <p>Оплата при получении<br /><br />Для заказов до 55 тысяч рублей не требуется предоплата, можно оплатить при получении наличными или банковской картой</p>
        </div>
        <div className="payment-info">
          <div className="dot"></div>
          <p>Доставка по всей России<br /><br />Наши склады открыты во всех регионах страны, по вашему выбору доставим заказ курьером, через транспортную компанию или Почтой России</p>
        </div>
      </div>
      <div className="brands-section">
        <h2 className="textMain">Популярные бренды</h2>
        <Slider></Slider>
        <div className="brands-container">
        <div class="grid-container-img">
  <div class="item1">
    <img src={auto_one} alt="Auto parts 1" />
  </div>
  <div class="item2">
    <img src={auto_two} alt="Auto parts 2" />
  </div>
  <div class="item3">
    <img src={auto_free} alt="Auto parts 3" />
  </div>
  <div class="item4">
    <img src={auto_fi} alt="Auto parts 4" />
  </div>
  <div class="item5">
    <img src={auto_fo} alt="Auto parts 5" />
  </div>
</div>

        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Home;
