import React from 'react';
import './Lk.css';
import { Link } from 'react-router-dom';
const ProfilePage = () => {
    return (
        <div className="glv">
            <div className="profile-page">
                <div className="sidebar-lk">
                    <div className="menu-item">Мой профиль</div>
                    <Link to="/contact">
                    <a className="menu-item">Заказы </a>
                    </Link>
                    <div className="menu-item">Настройки</div>
                    <div className="menu-item">Выход</div>
                </div>
                <div className="content">
                    <h2>Мой профиль</h2>
                    <form className='form-lk'>
                        <label>
                            Имя
                            <input className='input-lk' type="text" name="firstName" />
                        </label>
                        <label>
                            Отчество
                            <input type="text" name="middleName" />
                        </label>
                        <label>
                            Фамилия
                            <input type="text" name="lastName" />
                        </label>
                        <label>
                            Город
                            <input type="text" name="city" />
                        </label>
                        <label>
                            E-mail
                            <input type="email" name="email" />
                        </label>
                        <label>
                            Телефон
                            <input type="tel" name="phone" />
                        </label>
                        <button className="button-lk" type="submit">Сохранить изменения</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
